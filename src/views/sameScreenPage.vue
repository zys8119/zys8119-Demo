<template>
  <div class="aaa">
    <canvas ref="canvas" class="hidden w=0 h-0"></canvas>
    <div ref="contentEl" class="bg-#fff w-100% h-100% absolute of-x-hidden">
      <h1>这是同屏的内容区域</h1>
      <div class="text-#fff bg-#f00">阿斯科利大量三等奖</div>
      <div class="text-#fff bg-#f00 flex justify-between">
        <span>left</span>
        <span>right</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" title="同屏-webRTC发起端-多人">
import html2canvas from "html2canvas"
const {send, ws} = useWebSocket("ws://localhost:3000/websocket", {
  autoReconnect: true,
})
const canvas = $ref() as HTMLCanvasElement
const contentEl = $ref() as HTMLDivElement
const peerConnectionMap = {}
const createPeerConnection = async (localStream: MediaStream, sendIceCallback?: (rtc:RTCPeerConnection)=>void) => {
  // 创建 RTCPeerConnection 对象
  const peerConnection = new RTCPeerConnection({
    iceServers:[
      {urls:"stun:127.0.0.1:3478"}
    ],
  });
  localStream.getTracks().forEach(track =>{
    peerConnection.addTrack(track, localStream)
  });
  let isSend = false
  // 监听 ICE Candidate 事件，将 ICE Candidate 发送给对方
  peerConnection.onicecandidate = (event) => {
    if (event.candidate && !isSend) {
      // 发送 ICE Candidate 给对方，通过信令通道交换 ICE Candidate
      isSend = true
      sendIceCallback?.(peerConnection)
    }
  };
  await peerConnection.setLocalDescription(await peerConnection.createOffer())
  return peerConnection
}
const renderCanvas = (ctx:CanvasRenderingContext2D)=>{
  ;(async ()=>{
    const img = await html2canvas(contentEl, {
      backgroundColor:'#0000',
      width:contentEl.clientWidth,
      height:contentEl.clientHeight
    })
    ctx.drawImage(img, 0, 0)
    requestIdleCallback(()=>{
      renderCanvas(ctx)
    })
  })()
}
onMounted(async () => {
  const localStream = canvas.captureStream()
  renderCanvas(canvas.getContext('2d'))
  ws.value.addEventListener('message', async (ev) => {
    const data = JSON.parse(ev.data) || {}
    switch (data.emit) {
      case 'webrtcLogin':
        peerConnectionMap[data.userId] = await createPeerConnection(localStream, (peerConnection) => {
          send(JSON.stringify({
            emit: 'webrtcStart',
            data: peerConnection.localDescription,
            userId:data.userId
          }));
        })
        break
      case 'webrtcResponse':
        if (peerConnectionMap[data.userId]) {
          await peerConnectionMap[data.userId].setRemoteDescription(data.data)
        }
        break
    }
  })
})
onErrorCaptured(err => {
  console.log(err)
})
</script>

<style scoped lang="less">
.aaa {

}
</style>
