<template>
  <div class="offer">
    <video ref="videoEl" muted autoplay playsinline></video>
    <div class="controls">
      <button :disabled="sharing" @click="startShare">
        {{ sharing ? '共享中...' : '开始共享屏幕' }}
      </button>
      <button v-if="sharing" @click="stopShare">停止共享</button>
    </div>
    <p class="status">{{ status }}</p>
    <p class="peers">已连接接收端: {{ connectedCount }}</p>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const channel = new BroadcastChannel('webrtc-signal')

const videoEl = $ref<HTMLVideoElement>()
const sharing = ref(false)
const status = ref('等待开始共享...')
const connectedCount = ref(0)

let localStream: MediaStream | null = null

// 每个接收端对应一条独立的 PeerConnection，key 为 peerId
const peers = new Map<string, RTCPeerConnection>()

const send = (msg: object) => channel.postMessage(JSON.stringify(msg))

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

/** 为某个接收端创建 PeerConnection 并发送 offer */
const createOfferForPeer = async (peerId: string) => {
  if (!localStream) return

  // 清理旧连接（同一接收端重连时）
  peers.get(peerId)?.close()

  const pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  })
  peers.set(peerId, pc)

  localStream.getTracks().forEach(track => pc.addTrack(track, localStream!))

  pc.onconnectionstatechange = () => {
    const state = pc.connectionState
    if (state === 'connected') {
      connectedCount.value = [...peers.values()].filter(p => p.connectionState === 'connected').length
      status.value = `已有 ${connectedCount.value} 个接收端连接`
    }
    if (state === 'failed' || state === 'closed' || state === 'disconnected') {
      peers.delete(peerId)
      connectedCount.value = [...peers.values()].filter(p => p.connectionState === 'connected').length
    }
  }

  const offer = await pc.createOffer()
  await pc.setLocalDescription(offer)
  await waitGatheringComplete(pc)

  // offer 带上 peerId，接收端原样回传，发起端靠此识别是哪条连接的 answer
  send({ type: 'offer', peerId, data: pc.localDescription })
}

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

    // 每个接收端就绪时携带自己的 peerId
    if (msg.type === 'ready') {
      await createOfferForPeer(msg.peerId)
    }

    if (msg.type === 'answer') {
      const pc = peers.get(msg.peerId)
      if (pc) {
        await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
      }
    }
  }

  // 通知所有已在线的接收端发起端已就绪
  send({ type: 'offer-ready' })
}

const stopShare = () => {
  peers.forEach(pc => pc.close())
  peers.clear()
  localStream?.getTracks().forEach(t => t.stop())
  localStream = null
  if (videoEl) videoEl.srcObject = null
  sharing.value = false
  connectedCount.value = 0
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
  gap: 12px;
  padding: 16px;

  video {
    width: 100%;
    max-width: 800px;
    border-radius: 8px;
    background: #000;
    aspect-ratio: 16 / 9;
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

  .status, .peers { font-size: 13px; color: #888; }
}
</style>
