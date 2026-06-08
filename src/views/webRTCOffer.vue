<template>
  <div class="offer">
    <div class="main-preview">
      <video ref="videoEl" muted autoplay playsinline></video>
      <p class="label">默认共享画面（主流）</p>
    </div>

    <div class="controls">
      <button :disabled="sharing" @click="startShare">
        {{ sharing ? '共享中...' : '开始共享屏幕' }}
      </button>
      <button v-if="sharing" @click="stopShare">停止共享</button>
    </div>

    <p class="status">{{ status }}</p>

    <!-- 接收端列表 -->
    <div v-if="sharing && peerList.length" class="peer-list">
      <p class="list-title">接收端列表（{{ peerList.length }} 人）</p>
      <div v-for="peer in peerList" :key="peer.id" class="peer-item">
        <div class="peer-info">
          <span class="peer-id">{{ peer.id.slice(0, 8) }}</span>
          <span :class="['peer-state', peer.state]">{{ stateLabel(peer.state) }}</span>
          <span v-if="peer.customStream" class="custom-tag">自定义画面</span>
        </div>
        <div class="peer-actions">
          <button
            :disabled="peer.state !== 'connected'"
            @click="assignCustomStream(peer.id)"
          >更换画面</button>
          <button
            v-if="peer.customStream"
            :disabled="peer.state !== 'connected'"
            @click="resetToMainStream(peer.id)"
          >恢复默认</button>
        </div>
        <!-- 自定义画面预览 -->
        <video
          v-if="peer.customStream"
          :ref="el => setPeerVideoRef(peer.id, el as HTMLVideoElement)"
          class="peer-preview"
          muted autoplay playsinline
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const channel = new BroadcastChannel('webrtc-signal')

const videoEl = $ref<HTMLVideoElement>()
const sharing = ref(false)
const status = ref('等待开始共享...')

let localStream: MediaStream | null = null

// ── 数据结构 ─────────────────────────────────────────────
interface PeerInfo {
  id: string
  state: RTCPeerConnectionState
  customStream: MediaStream | null  // null 表示使用主流
}

const peerList = ref<PeerInfo[]>([])

// peerId → RTCPeerConnection
const peerConns = new Map<string, RTCPeerConnection>()
// peerId → 自定义 MediaStream（独立画面）
const peerCustomStreams = new Map<string, MediaStream>()
// peerId → 自定义预览 video 元素
const peerVideoRefs = new Map<string, HTMLVideoElement>()

// ── 工具 ─────────────────────────────────────────────────
const send = (msg: object) => channel.postMessage(JSON.stringify(msg))

const stateLabel = (state: RTCPeerConnectionState) => ({
  connected: '已连接',
  connecting: '连接中',
  disconnected: '已断开',
  failed: '失败',
  closed: '已关闭',
  new: '初始化',
}[state] ?? state)

const waitGatheringComplete = (pc: RTCPeerConnection) =>
  new Promise<void>(resolve => {
    if (pc.iceGatheringState === 'complete') { resolve(); return }
    const check = () => {
      if (pc.iceGatheringState === 'complete') {
        pc.removeEventListener('icegatheringstatechange', check)
        resolve()
      }
    }
    pc.addEventListener('icegatheringstatechange', check)
  })

const setPeerVideoRef = (peerId: string, el: HTMLVideoElement | null) => {
  if (!el) { peerVideoRefs.delete(peerId); return }
  peerVideoRefs.set(peerId, el)
  const stream = peerCustomStreams.get(peerId)
  if (stream) el.srcObject = stream
}

// ── 更新 peerList 响应式状态 ──────────────────────────────
const updatePeerState = (peerId: string, state: RTCPeerConnectionState) => {
  const item = peerList.value.find(p => p.id === peerId)
  if (item) item.state = state
}

const addPeer = (peerId: string) => {
  if (!peerList.value.find(p => p.id === peerId)) {
    peerList.value.push({ id: peerId, state: 'new', customStream: null })
  }
}

const removePeer = (peerId: string) => {
  peerList.value = peerList.value.filter(p => p.id !== peerId)
  peerConns.delete(peerId)
  peerCustomStreams.get(peerId)?.getTracks().forEach(t => t.stop())
  peerCustomStreams.delete(peerId)
  peerVideoRefs.delete(peerId)
}

// ── 核心：获取某个 peer 当前的 senders ────────────────────
const getSenders = (peerId: string) => peerConns.get(peerId)?.getSenders() ?? []

/** 用 replaceTrack 热替换轨道，不重新协商 */
const replaceTracksForPeer = async (peerId: string, stream: MediaStream) => {
  const senders = getSenders(peerId)
  for (const sender of senders) {
    if (!sender.track) continue
    const newTrack = stream.getTracks().find(t => t.kind === sender.track!.kind)
    if (newTrack) await sender.replaceTrack(newTrack)
  }
}

// ── 为接收端分配自定义画面 ────────────────────────────────
const assignCustomStream = async (peerId: string) => {
  let stream: MediaStream
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
  } catch {
    return
  }

  // 停掉旧的自定义流
  peerCustomStreams.get(peerId)?.getTracks().forEach(t => t.stop())
  peerCustomStreams.set(peerId, stream)

  // 用户关闭此画面时自动恢复主流
  stream.getVideoTracks()[0].addEventListener('ended', () => resetToMainStream(peerId))

  // 热替换轨道
  await replaceTracksForPeer(peerId, stream)

  // 更新 UI
  const item = peerList.value.find(p => p.id === peerId)
  if (item) item.customStream = stream

  // 绑定预览
  const videoRef = peerVideoRefs.get(peerId)
  if (videoRef) videoRef.srcObject = stream
}

// ── 恢复主流 ─────────────────────────────────────────────
const resetToMainStream = async (peerId: string) => {
  if (!localStream) return
  peerCustomStreams.get(peerId)?.getTracks().forEach(t => t.stop())
  peerCustomStreams.delete(peerId)

  await replaceTracksForPeer(peerId, localStream)

  const item = peerList.value.find(p => p.id === peerId)
  if (item) item.customStream = null
}

// ── 建立连接 ─────────────────────────────────────────────
const createOfferForPeer = async (peerId: string) => {
  if (!localStream) return

  peerConns.get(peerId)?.close()
  addPeer(peerId)

  const pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  })
  peerConns.set(peerId, pc)

  // 默认发送主流；若该 peer 已有自定义流则发自定义流
  const stream = peerCustomStreams.get(peerId) ?? localStream
  stream.getTracks().forEach(track => pc.addTrack(track, stream))

  pc.onconnectionstatechange = () => {
    updatePeerState(peerId, pc.connectionState)
    if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
      removePeer(peerId)
    }
  }

  const offer = await pc.createOffer()
  await pc.setLocalDescription(offer)
  await waitGatheringComplete(pc)

  send({ type: 'offer', peerId, data: pc.localDescription })
}

// ── 开始共享 ─────────────────────────────────────────────
const startShare = async () => {
  if (sharing.value) return
  try {
    localStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
  } catch {
    status.value = '获取屏幕失败'
    return
  }

  sharing.value = true
  status.value = '已获取屏幕，等待接收端...'
  videoEl.srcObject = localStream
  localStream.getVideoTracks()[0].addEventListener('ended', stopShare)

  channel.onmessage = async (e) => {
    const msg = JSON.parse(e.data)

    if (msg.type === 'ready') {
      status.value = `接收端 ${msg.peerId.slice(0, 8)} 加入，创建连接...`
      await createOfferForPeer(msg.peerId)
    }

    if (msg.type === 'answer') {
      const pc = peerConns.get(msg.peerId)
      if (pc) await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
    }
  }

  send({ type: 'offer-ready' })
}

// ── 停止共享 ─────────────────────────────────────────────
const stopShare = () => {
  peerConns.forEach(pc => pc.close())
  peerConns.clear()
  peerCustomStreams.forEach(s => s.getTracks().forEach(t => t.stop()))
  peerCustomStreams.clear()
  peerList.value = []
  localStream?.getTracks().forEach(t => t.stop())
  localStream = null
  if (videoEl) videoEl.srcObject = null
  sharing.value = false
  status.value = '已停止共享'
  channel.onmessage = null
}

onUnmounted(() => {
  stopShare()
  channel.close()
})
</script>

<style scoped lang="less">
.offer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;

  .main-preview {
    width: 100%;
    max-width: 800px;
    video {
      width: 100%;
      border-radius: 8px;
      background: #000;
      aspect-ratio: 16 / 9;
    }
    .label { font-size: 12px; color: #aaa; text-align: center; margin: 4px 0 0; }
  }

  .controls {
    display: flex;
    gap: 8px;
    button {
      padding: 8px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: opacity 0.2s;
      background: #1890ff;
      color: #fff;
      &:last-child { background: #ff4d4f; }
      &:disabled { opacity: 0.5; cursor: not-allowed; }
      &:not(:disabled):hover { opacity: 0.85; }
    }
  }

  .status { font-size: 13px; color: #888; }

  .peer-list {
    width: 100%;
    max-width: 800px;

    .list-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin: 0 0 8px;
    }

    .peer-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      margin-bottom: 8px;
      background: #fafafa;

      .peer-info {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;

        .peer-id { font-size: 13px; color: #555; font-family: monospace; }

        .peer-state {
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 10px;
          background: #e0e0e0;
          color: #666;
          &.connected { background: #d4edda; color: #155724; }
          &.failed, &.disconnected { background: #f8d7da; color: #721c24; }
        }

        .custom-tag {
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 10px;
          background: #fff3cd;
          color: #856404;
        }
      }

      .peer-actions {
        display: flex;
        gap: 6px;
        button {
          padding: 4px 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 13px;
          background: #1890ff;
          color: #fff;
          transition: opacity 0.2s;
          &:last-child { background: #52c41a; }
          &:disabled { opacity: 0.4; cursor: not-allowed; }
          &:not(:disabled):hover { opacity: 0.85; }
        }
      }

      .peer-preview {
        width: 100%;
        max-height: 160px;
        border-radius: 6px;
        background: #000;
        object-fit: contain;
      }
    }
  }
}
</style>
