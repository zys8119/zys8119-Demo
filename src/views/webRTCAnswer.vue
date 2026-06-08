<template>
  <div class="answer">
    <video ref="videoEl" muted autoplay playsinline controls></video>
    <p class="status">{{ status }}</p>
  </div>
</template>

<script setup lang="ts" title="webRTC接收端">
const channel = new BroadcastChannel('webrtc-signal')

const videoEl = $ref<HTMLVideoElement>()
const status = ref('正在连接发起端...')

// 每个接收端页面生成唯一 ID，发起端靠此区分多条连接
const peerId = crypto.randomUUID()

let pc: RTCPeerConnection | null = null
let retryTimer: ReturnType<typeof setTimeout> | null = null

const send = (msg: object) => channel.postMessage(JSON.stringify(msg))

const clearRetryTimer = () => {
  if (retryTimer) { clearTimeout(retryTimer); retryTimer = null }
}

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

/** 向发起端申请加入，若 3s 内未收到 offer 则重试，直到成功为止 */
const joinOrRetry = () => {
  clearRetryTimer()
  send({ type: 'ready', peerId })
  // 3s 内没收到 offer 说明发起端还未共享，继续等待并重试
  retryTimer = setTimeout(() => {
    if (pc?.connectionState !== 'connected') {
      status.value = '发起端未响应，等待中...'
      joinOrRetry()
    }
  }, 3000)
}

onMounted(() => {
  channel.onmessage = async (e) => {
    const msg = JSON.parse(e.data)

    // 发起端开始共享时广播 offer-ready，重新申请加入
    if (msg.type === 'offer-ready') {
      status.value = '检测到发起端，正在加入...'
      joinOrRetry()
      return
    }

    // offer 只处理发给自己的
    if (msg.type === 'offer' && msg.peerId === peerId) {
      // 收到 offer，停止重试计时
      clearRetryTimer()
      status.value = '收到 offer，协商中...'

      pc?.close()
      pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      })

      const remoteStream = new MediaStream()
      videoEl.srcObject = remoteStream

      pc.ontrack = ({ track }) => {
        remoteStream.addTrack(track)
        status.value = `收到 ${track.kind} 轨道，播放中...`
      }

      pc.onconnectionstatechange = () => {
        const state = pc?.connectionState
        if (state === 'connected') {
          status.value = '已连接，画面传输中'
          clearRetryTimer()
        }
        if (state === 'failed' || state === 'disconnected') {
          status.value = '连接断开，等待发起端重新共享...'
          pc?.close()
          pc = null
          if (videoEl) videoEl.srcObject = null
          // 连接失败后重新申请，等待发起端
          joinOrRetry()
        }
      }

      await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
      const answer = await pc.createAnswer()
      await pc.setLocalDescription(answer)
      await waitGatheringComplete(pc)

      send({ type: 'answer', peerId, data: pc.localDescription })
      status.value = '已发送 answer，等待连接建立...'
    }
  }

  // 页面加载后立即尝试加入
  joinOrRetry()
})

onUnmounted(() => {
  clearRetryTimer()
  pc?.close()
  channel.close()
})
</script>

<style scoped lang="less">
.answer {
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

  .status { font-size: 13px; color: #888; }
}
</style>
