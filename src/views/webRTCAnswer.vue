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

let pc: RTCPeerConnection | null = null

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

onMounted(() => {
  send({ type: 'ready' })

  channel.onmessage = async (e) => {
    const msg = JSON.parse(e.data)

    if (msg.type === 'offer-ready') {
      // 发起端就绪，回复 ready 触发 offer 流程
      send({ type: 'ready' })
      return
    }

    if (msg.type === 'offer') {
      status.value = '收到 offer，协商中...'

      pc?.close()
      pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      })

      // 用 MediaStream 手动聚合 track，不依赖 event.streams[0]
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

      // 等 ICE 全部收集完再发，SDP 里已内嵌所有 candidate，和发起端策略一致
      await waitGatheringComplete(pc)

      send({ type: 'answer', data: pc.localDescription })
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
