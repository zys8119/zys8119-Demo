<template>
  <div class="bbb">
    <video ref="video" muted></video>
  </div>
</template>

<script setup lang="ts" title="webRTC接收端">
const video = $ref() as HTMLVideoElement
const channel = new BroadcastChannel('myChannel');

let peerConnection: RTCPeerConnection | null = null

const createPeerConnection = () => {
  // 关闭旧连接（发起端重新共享时复用）
  peerConnection?.close()
  peerConnection = new RTCPeerConnection()

  peerConnection.ondatachannel = ev => {
    ev.channel.onopen = () => { ev.channel.send("Hi back!") }
    ev.channel.onmessage = (ev) => { console.log(ev.data) }
  }

  peerConnection.ontrack = (event) => {
    video.srcObject = event.streams[0];
    console.log(event)
    video.onloadedmetadata = () => video.play()
  }

  return peerConnection
}

onMounted(() => {
  // 通知发起端接收端已就绪，触发 offer 流程
  channel.postMessage(JSON.stringify({ type: 'ready' }))

  channel.onmessage = async (e: any) => {
    const msg = JSON.parse(e.data)

    // 发起端点击"开始共享"后会发 offer-ready，接收端回复 ready 触发新一轮协商
    if (msg.type === 'offer-ready') {
      channel.postMessage(JSON.stringify({ type: 'ready' }))
      return
    }

    if (msg.type === 'offer') {
      const pc = createPeerConnection()
      console.log('[Answer] 收到 offer，SDP 媒体行数:', (msg.data.sdp as string).match(/^m=/gm)?.length)

      await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
      console.log('[Answer] setRemoteDescription 完成，signalingState:', pc.signalingState)

      await pc.setLocalDescription(await pc.createAnswer())
      console.log('[Answer] setLocalDescription 完成，signalingState:', pc.signalingState)

      // 等待 ICE 收集完成，加 2s 超时兜底
      await new Promise<void>(resolve => {
        if (pc.iceGatheringState === 'complete') {
          resolve()
          return
        }
        const timeout = setTimeout(resolve, 2000)
        pc.onicegatheringstatechange = () => {
          console.log('[Answer] iceGatheringState:', pc.iceGatheringState)
          if (pc.iceGatheringState === 'complete') {
            clearTimeout(timeout)
            resolve()
          }
        }
      })

      console.log('[Answer] ICE 收集完成，发送 answer')
      channel.postMessage(JSON.stringify({
        type: 'answer',
        data: pc.localDescription,
      }))
    }
  }
})

</script>

<style scoped lang="less">
.bbb {}
</style>
