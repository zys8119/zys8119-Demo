<template>
  <div class="aaa">
    <video ref="video"></video>
  </div>
</template>

<script setup lang="ts" title="同屏-webRTC发起端-多人">
/**
 * Chrome浏览器允许http网站打开摄像头和麦克风
 * chrome://flags/#unsafely-treat-insecure-origin-as-secure
 */
const {query} = useRoute()
const {send, ws} = useWebSocket(query.wsUrl as string, {
  autoReconnect: true,
})
const video = $ref() as HTMLVideoElement
const peerConnectionMap = {}
const createPeerConnection = async (localStream: any, sendIceCallback?: (rtc:RTCPeerConnection)=>void) => {
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
onMounted(async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  })
  video.srcObject = localStream;
  video.onloadedmetadata = function (e) {
    video.play();
  };
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
