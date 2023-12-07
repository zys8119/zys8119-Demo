<template>
  <div class="bbb">
    <video ref="video" muted></video>
  </div>
</template>

<script setup lang="ts"  title="webRTC接收端">
const video = $ref() as HTMLVideoElement
const channel = new BroadcastChannel('myChannel');
onMounted(async ()=>{
  const peerConnection = new RTCPeerConnection();
  peerConnection.ondatachannel = async ev => {
   ev.channel.onopen = ()=>{
     ev.channel.send("Hi back!")
   }
   ev.channel.onmessage = (ev)=>{
     console.log(ev.data);
   }
  }
  video.onloadedmetadata = function () {
    video.play();
  };
  peerConnection.ontrack = (event) => {
    video.srcObject = event.streams[0];
  };
  channel.onmessage = e=>{
    handleOffer(JSON.parse(e.data))
  }
  const handleOffer =  async (offer)=> {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
    await peerConnection.setLocalDescription( await peerConnection.createAnswer())
    channel.postMessage(JSON.stringify(peerConnection.localDescription));
  }
})

</script>

<style scoped lang="less">
.bbb {

}
</style>
