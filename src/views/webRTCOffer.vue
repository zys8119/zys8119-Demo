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
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const channel = new BroadcastChannel('webrtc-signal')

const videoEl = $ref<HTMLVideoElement>()
const sharing = ref(false)
const status = ref('等待开始共享...')

let pc: RTCPeerConnection | null = null
let localStream: MediaStream | null = null

const send = (msg: object) => channel.postMessage(JSON.stringify(msg))

/** 等待 ICE gathering 完成，gathering 已是 complete 时直接 resolve */
const waitGatheringComplete = (currentPC: RTCPeerConnection) =>
  new Promise<void>(resolve => {
    if (currentPC.iceGatheringState === 'complete') { resolve(); return }
    const check = () => {
      if (currentPC.iceGatheringState === 'complete') {
        currentPC.removeEventListener('icegatheringstatechange', check)
        resolve()
      }
    }
    currentPC.addEventListener('icegatheringstatechange', check)
  })

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

  pc?.close()
  pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  })

  pc.onconnectionstatechange = () => {
    status.value = `连接状态: ${pc?.connectionState}`
    if (pc?.connectionState === 'failed') stopShare()
  }

  localStream.getTracks().forEach(track => pc!.addTrack(track, localStream!))

  channel.onmessage = async (e) => {
    const msg = JSON.parse(e.data)

    if (msg.type === 'ready') {
      if (!pc || !sharing.value) return
      status.value = '接收端已就绪，创建 offer...'

      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)

      // 等 ICE 全部收集完再发，SDP 里已内嵌所有 candidate
      await waitGatheringComplete(pc)

      send({ type: 'offer', data: pc.localDescription })
      status.value = '已发送 offer，等待 answer...'
    }

    if (msg.type === 'answer') {
      await pc?.setRemoteDescription(new RTCSessionDescription(msg.data))
      status.value = '已收到 answer，等待连接建立...'
    }
  }

  // 通知接收端发起端已就绪
  send({ type: 'offer-ready' })
}

const stopShare = () => {
  localStream?.getTracks().forEach(t => t.stop())
  pc?.close()
  pc = null
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

  .status { font-size: 13px; color: #888; }
}
</style>
