<template>
  <div class="aaa">
    <video ref="video"></video>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const {send, ws} = useWebSocket("ws://localhost:3000/websocket", {
  autoReconnect:true,
})
const video = $ref() as HTMLVideoElement
// 在一个标签页中创建广播通道
const channel = new BroadcastChannel('myChannel');
const peerConnectionMap = new Map()
const aa = async (localStream:any, userId:string)=>{
  // 创建 RTCPeerConnection 对象
  const peerConnection = new RTCPeerConnection();
  peerConnectionMap.set(userId, peerConnection)
  localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
  // 监听 ICE Candidate 事件，将 ICE Candidate 发送给对方
  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      // 发送 ICE Candidate 给对方，通过信令通道交换 ICE Candidate
      sendIceCandidateToRemote();
    }
  };
  await peerConnection.setLocalDescription(await peerConnection.createOffer())
  channel.onmessage = async e=>{

  }

  const sendIceCandidateToRemote = async ()=>{
    send(JSON.stringify({
      emit:'aa',
      data:peerConnection.localDescription
    }));
  }
}
onMounted(async ()=>{
  const localStream = await navigator.mediaDevices.getUserMedia({
    video:true,
  })
  video.srcObject = localStream;
  video.onloadedmetadata = function (e) {
    video.play();
  };
  ws.value.addEventListener('message', async (ev)=>{
    const data = JSON.parse(ev.data) || {}
    switch (data.emit){
      case 'webrtcLogin':
        await aa(await navigator.mediaDevices.getUserMedia({
          video:true,
        }), data.userId)
        break
      case 'bb':
        await peerConnectionMap.get(data.userId).setRemoteDescription(data.data)
        break
    }
  })
})
</script>

<style scoped lang="less">
.aaa {

}
</style>
