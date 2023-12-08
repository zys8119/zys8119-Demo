<template>
  <div class="aaa">
    <video class="w-100% h-100% object-contain absolute" ref="video" muted autoplay></video>
  </div>
</template>

<script setup lang="ts" title="同屏-webRTC发起端-多人">
const route = useRoute()
const userId = ref(route.query.userId)
const video = ref()
// 在一个标签页中创建广播通道
onMounted(async () => {
  // 创建 RTCPeerConnection 对象
  const peerConnection = new RTCPeerConnection({
    iceServers:[
      {urls:"stun:127.0.0.1:3478"}
    ],
  });
  peerConnection.ontrack = event => {
    video.value.srcObject = event.streams[0]
    video.value.onloadedmetadata = function (e) {
      video.value.play();
    };
  }

  const {send} = useWebSocket('ws://192.168.110.140:3000/websocket', {
    async onMessage(ws, event: any) {
      const data = JSON.parse(event.data)
      if(data.userId === userId.value){
        switch (data.emit) {
          case 'webrtcStart':
            await peerConnection.setRemoteDescription(new RTCSessionDescription(data.data))
            await peerConnection.setLocalDescription(await peerConnection.createAnswer())
            send(JSON.stringify({
              emit: 'webrtcResponse',
              data: peerConnection.localDescription,
              userId: userId.value
            }))
            break;
        }
      }
    },
    onConnected() {
      send(JSON.stringify({
        emit: 'webrtcLogin',
        userId: userId.value
      }))
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
