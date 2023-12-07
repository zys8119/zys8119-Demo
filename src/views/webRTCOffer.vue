<template>
  <div class="aaa">
    <video ref="video"></video>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const video = $ref() as HTMLVideoElement
// 在一个标签页中创建广播通道
const channel = new BroadcastChannel('myChannel');
onMounted(async ()=>{
  const localStream = await navigator.mediaDevices.getUserMedia({
    video:true,
  })
  video.srcObject = localStream;
  video.onloadedmetadata = function (e) {
    video.play();
  };
  // 创建 RTCPeerConnection 对象
  const peerConnection = new RTCPeerConnection();
  const c =peerConnection.createDataChannel('chat')
  c.onmessage = ev => {
    console.log(ev.data)
  }
  c.onopen = ()=>{
    setInterval(()=>{
      c.send("Hi you!")
    },1000)
  }
  console.log(c)
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
    await peerConnection.setRemoteDescription(JSON.parse(e.data))
  }
  const sendIceCandidateToRemote = async ()=>{
    channel.postMessage(JSON.stringify(peerConnection.localDescription));
  }
})
</script>

<style scoped lang="less">
.aaa {

}
</style>
