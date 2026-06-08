<template>
  <div class="offer" :class="{ 'chat-open': !chatCollapsed }">
    <div class="main-preview">
      <video controls ref="videoEl" muted autoplay playsinline></video>
      <p class="label">默认共享画面（主流）</p>
    </div>

    <div class="controls">
      <button :disabled="sharing" @click="startShare">
        {{ sharing ? '共享中...' : '开始共享屏幕' }}
      </button>
      <button v-if="sharing" @click="replaceMainStream">更换默认画面</button>
      <button v-if="sharing" @click="stopShare">停止共享</button>
    </div>

    <p class="status">{{ status }}</p>

    <!-- 接收端列表 -->
    <div v-if="sharing && peerList.length" class="peer-list">
      <p class="list-title">接收端列表（{{ peerList.length }} 人）</p>
      <div v-for="peer in peerList" :key="peer.id" class="peer-item">
        <div class="peer-info">
          <!-- click-to-edit 名称 -->
          <template v-if="editingPeerId === peer.id">
            <input class="peer-name-input" v-model="editingName" @keydown.enter.prevent="saveName(peer.id)"
              @blur="saveName(peer.id)" ref="nameInputEl" autofocus />
          </template>
          <span v-else class="peer-name" @click="startEdit(peer)">{{ peer.name }}</span>
          <span :class="['peer-state', peer.state]">{{ stateLabel(peer.state) }}</span>
          <span v-if="peer.customStream" class="custom-tag">自定义画面</span>
        </div>
        <div class="peer-actions">
          <button :disabled="peer.state !== 'connected'" @click="assignCustomStream(peer.id)">更换画面</button>
          <button v-if="peer.customStream" :disabled="peer.state !== 'connected'"
            @click="resetToMainStream(peer.id)">恢复默认</button>
        </div>
        <video v-if="peer.customStream" :ref="el => setPeerVideoRef(peer.id, el as HTMLVideoElement)"
          class="peer-preview" muted autoplay playsinline></video>
      </div>
    </div>

    <!-- 底部固定聊天面板 -->
    <div class="chat-panel" :class="{ collapsed: chatCollapsed }">
      <div class="chat-header" @click="chatCollapsed = !chatCollapsed">
        <span class="chat-title">聊天</span>
        <span class="chat-badge" v-if="chatCollapsed && unreadCount > 0">{{ unreadCount }}</span>
        <span class="collapse-btn">{{ chatCollapsed ? '展开' : '收起' }}</span>
      </div>
      <template v-if="!chatCollapsed">
        <div ref="msgListEl" class="chat-messages">
          <div v-for="msg in chatMessages" :key="msg.time + msg.from" class="msg-item" :class="{ self: msg.isSelf }">
            <span class="msg-from">{{ msg.isSelf ? '我（发起端）' : msg.from }}</span>
            <span class="msg-bubble">{{ msg.text }}</span>
            <span class="msg-time">{{ formatTime(msg.time) }}</span>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="inputText" placeholder="发送消息给所有人..." @keydown.enter.prevent="sendChat" />
          <button @click="sendChat">发送</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const channel = new BroadcastChannel('webrtc-signal')

const videoEl = $ref<HTMLVideoElement>()
const msgListEl = $ref<HTMLDivElement>()
const sharing = ref(false)
const status = ref('等待开始共享...')

let localStream: MediaStream | null = null

// ── 数据结构 ─────────────────────────────────────────────
interface PeerInfo {
  id: string
  state: RTCPeerConnectionState
  customStream: MediaStream | null
  name: string
  dataChannel: RTCDataChannel | null
}

interface ChatMessage {
  from: string
  text: string
  time: number
  isSelf: boolean
}

const peerList = ref<PeerInfo[]>([])
const chatMessages = ref<ChatMessage[]>([])
const inputText = ref('')
const chatCollapsed = ref(true)
const unreadCount = ref(0)

// ── 名称编辑状态 ──────────────────────────────────────────
const editingPeerId = ref<string | null>(null)
const editingName = ref('')

const startEdit = (peer: PeerInfo) => {
  editingPeerId.value = peer.id
  editingName.value = peer.name
}

const saveName = (peerId: string) => {
  const name = editingName.value.trim() || '未命名'
  const item = peerList.value.find(p => p.id === peerId)
  if (item) item.name = name
  // 通知接收端更新名称
  send({ type: 'rename', peerId, name })
  editingPeerId.value = null
}

// ── 聊天工具 ──────────────────────────────────────────────
const formatTime = (ts: number) => {
  const d = new Date(ts)
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
}

const scrollToBottom = async () => {
  await nextTick()
  if (msgListEl) msgListEl.scrollTop = msgListEl.scrollHeight
}

const pushMessage = (msg: ChatMessage) => {
  chatMessages.value.push(msg)
  if (chatCollapsed.value && !msg.isSelf) unreadCount.value++
  scrollToBottom()
}

watch(chatCollapsed, (collapsed) => {
  if (!collapsed) { unreadCount.value = 0; scrollToBottom() }
})

/** 广播聊天消息到所有已连接 peer */
const sendChat = () => {
  const text = inputText.value.trim()
  if (!text) return
  const payload = JSON.stringify({ type: 'chat', from: '发起端', text, time: Date.now() })
  peerList.value.forEach(peer => {
    if (peer.dataChannel?.readyState === 'open') peer.dataChannel.send(payload)
  })
  pushMessage({ from: '发起端', text, time: Date.now(), isSelf: true })
  inputText.value = ''
}

// ── peerId → RTCPeerConnection / 自定义流 / video ref ─────
const peerConns = new Map<string, RTCPeerConnection>()
const peerCustomStreams = new Map<string, MediaStream>()
const peerVideoRefs = new Map<string, HTMLVideoElement>()

const send = (msg: object) => channel.postMessage(JSON.stringify(msg))

const stateLabel = (state: RTCPeerConnectionState) => ({
  connected: '已连接', connecting: '连接中',
  disconnected: '已断开', failed: '失败',
  closed: '已关闭', new: '初始化',
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

const updatePeerState = (peerId: string, state: RTCPeerConnectionState) => {
  const item = peerList.value.find(p => p.id === peerId)
  if (item) item.state = state
}

const addPeer = (peerId: string) => {
  if (!peerList.value.find(p => p.id === peerId)) {
    peerList.value.push({
      id: peerId,
      state: 'new',
      customStream: null,
      name: `接收端 ${peerId.slice(0, 8)}`,
      dataChannel: null,
    })
  }
}

const removePeer = (peerId: string) => {
  peerList.value = peerList.value.filter(p => p.id !== peerId)
  peerConns.delete(peerId)
  peerCustomStreams.get(peerId)?.getTracks().forEach(t => t.stop())
  peerCustomStreams.delete(peerId)
  peerVideoRefs.delete(peerId)
}

const getSenders = (peerId: string) => peerConns.get(peerId)?.getSenders() ?? []

const replaceTracksForPeer = async (peerId: string, stream: MediaStream) => {
  const senders = getSenders(peerId)
  for (const sender of senders) {
    if (!sender.track) continue
    const newTrack = stream.getTracks().find(t => t.kind === sender.track!.kind)
    if (newTrack) await sender.replaceTrack(newTrack)
  }
}

const assignCustomStream = async (peerId: string) => {
  let stream: MediaStream
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
  } catch { return }

  peerCustomStreams.get(peerId)?.getTracks().forEach(t => t.stop())
  peerCustomStreams.set(peerId, stream)
  stream.getVideoTracks()[0].addEventListener('ended', () => resetToMainStream(peerId))
  await replaceTracksForPeer(peerId, stream)

  const item = peerList.value.find(p => p.id === peerId)
  if (item) item.customStream = stream
  const videoRef = peerVideoRefs.get(peerId)
  if (videoRef) videoRef.srcObject = stream
}

const replaceMainStream = async () => {
  let newStream: MediaStream
  try {
    newStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
  } catch { return }

  localStream?.getTracks().forEach(t => t.stop())
  localStream = newStream
  videoEl.srcObject = localStream
  localStream.getVideoTracks()[0].addEventListener('ended', stopShare)

  const updates = [...peerConns.entries()]
    .filter(([peerId]) => !peerCustomStreams.has(peerId))
    .map(([peerId]) => replaceTracksForPeer(peerId, localStream!))
  await Promise.all(updates)
}

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

  // 创建 DataChannel 用于聊天
  const dc = pc.createDataChannel('chat')
  dc.onmessage = (e) => {
    try {
      const msg = JSON.parse(e.data)
      if (msg.type === 'chat') {
        const peer = peerList.value.find(p => p.id === peerId)
        pushMessage({ from: peer?.name ?? msg.from, text: msg.text, time: msg.time, isSelf: false })
      }
    } catch { }
  }
  dc.onopen = () => {
    const item = peerList.value.find(p => p.id === peerId)
    if (item) item.dataChannel = dc
  }

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
      status.value = `接收端加入，创建连接...`
      await createOfferForPeer(msg.peerId)
    }

    if (msg.type === 'answer') {
      const pc = peerConns.get(msg.peerId)
      if (pc) await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
    }

    // 接收端上报自己的名称
    if (msg.type === 'name') {
      const item = peerList.value.find(p => p.id === msg.peerId)
      if (item && item.name === `接收端 ${msg.peerId.slice(0, 8)}`) {
        // 仅当还是默认名时才更新，避免覆盖发起端已手动设置的名称
        item.name = msg.name
      }
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
  padding-bottom: 52px;
  transition: padding-bottom 0.25s ease;

  &.chat-open {
    padding-bottom: 320px;
  }

  .main-preview {
    width: 100%;
    max-width: 800px;

    video {
      width: 100%;
      border-radius: 8px;
      background: #000;
      aspect-ratio: 16 / 9;
    }

    .label {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      margin: 4px 0 0;
    }
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

      &:last-child {
        background: #ff4d4f;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        opacity: 0.85;
      }
    }
  }

  .status {
    font-size: 13px;
    color: #888;
  }

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

        .peer-name {
          font-size: 13px;
          color: #333;
          font-weight: 500;
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 4px;

          &:hover {
            background: #e6f4ff;
            color: #1890ff;
          }
        }

        .peer-name-input {
          font-size: 13px;
          padding: 2px 6px;
          border: 1px solid #1890ff;
          border-radius: 4px;
          outline: none;
          width: 120px;
        }

        .peer-state {
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 10px;
          background: #e0e0e0;
          color: #666;

          &.connected {
            background: #d4edda;
            color: #155724;
          }

          &.failed,
          &.disconnected {
            background: #f8d7da;
            color: #721c24;
          }
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

          &:last-child {
            background: #52c41a;
          }

          &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
          }

          &:not(:disabled):hover {
            opacity: 0.85;
          }
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

// ── 聊天面板（底部固定）──────────────────────────────────
.chat-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 320px;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: height 0.25s ease;

  &.collapsed {
    height: 48px;
    overflow: hidden;
  }

  .chat-header {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 48px;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    gap: 8px;

    &:hover {
      background: #f5f5f5;
    }

    .chat-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    .chat-badge {
      background: #ff4d4f;
      color: #fff;
      font-size: 11px;
      min-width: 18px;
      height: 18px;
      border-radius: 9px;
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .collapse-btn {
      margin-left: auto;
      font-size: 12px;
      color: #888;
    }
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .msg-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      max-width: 60%;

      &.self {
        align-self: flex-end;
        align-items: flex-end;

        .msg-bubble {
          background: #1890ff;
          color: #fff;
        }
      }

      .msg-from {
        font-size: 11px;
        color: #aaa;
        padding: 0 4px;
      }

      .msg-bubble {
        background: #f0f0f0;
        color: #333;
        padding: 6px 12px;
        border-radius: 12px;
        font-size: 14px;
        word-break: break-all;
        line-height: 1.5;
      }

      .msg-time {
        font-size: 10px;
        color: #ccc;
        padding: 0 4px;
      }
    }
  }

  .chat-input {
    display: flex;
    gap: 8px;
    padding: 10px 16px;
    border-top: 1px solid #e8e8e8;
    flex-shrink: 0;

    input {
      flex: 1;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 13px;
      outline: none;

      &:focus {
        border-color: #1890ff;
      }
    }

    button {
      padding: 6px 18px;
      background: #1890ff;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;

      &:hover {
        opacity: 0.85;
      }
    }
  }
}
</style>
