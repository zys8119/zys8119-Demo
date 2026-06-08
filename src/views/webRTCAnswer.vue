<template>
  <div class="answer">
    <video ref="videoEl" muted autoplay playsinline controls></video>
    <p class="status">{{ status }}</p>
  </div>
</template>

<script setup lang="ts" title="webRTC接收端">
const channel = new BroadcastChannel('webrtc-signal')

const videoEl = $ref<HTMLVideoElement>()
const status = ref('等待发起端共享...')

// 每个接收端页面生成唯一 ID，发起端靠此区分多条连接
const peerId = crypto.randomUUID()

let pc: RTCPeerConnection | null = null

const send = (msg: object) => channel.postMessage(JSON.stringify(msg))

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

onMounted(() => {
  // 携带自身 peerId 告知发起端
  send({ type: 'ready', peerId })

  channel.onmessage = async (e) => {
    const msg = JSON.parse(e.data)

    // 发起端就绪，重新上报自己的 peerId，触发专属 offer
    if (msg.type === 'offer-ready') {
      send({ type: 'ready', peerId })
      return
    }

    // offer 只处理发给自己的
    if (msg.type === 'offer' && msg.peerId === peerId) {
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
        status.value = `连接状态: ${pc?.connectionState}`
      }

      await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
      const answer = await pc.createAnswer()
      await pc.setLocalDescription(answer)
      await waitGatheringComplete(pc)

      // answer 带回 peerId，发起端靠此找到对应的 PeerConnection
      send({ type: 'answer', peerId, data: pc.localDescription })
      status.value = '已发送 answer，等待连接建立...'
    }
  }
})

onUnmounted(() => {
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
