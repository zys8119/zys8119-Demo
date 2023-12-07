<template>
  <div class="aaa">
    <video ref="video" controls muted autoplay></video>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const route = useRoute()
const userId = ref(route.query.userId)
// ws.send(JSON.stringify({emi:'qq'}))
const video = ref()
// 在一个标签页中创建广播通道
onMounted(async ()=>{
  // const localStream = await navigator.mediaDevices.getUserMedia({
  //   video:true,
  // })
  // video.value.srcObject = localStream;
  // video.value.onloadedmetadata = function (e) {
  //   video.value.play();
  // };
  // 创建 RTCPeerConnection 对象
  const peerConnection = new RTCPeerConnection();
  peerConnection.ontrack = event => {
    console.log(event.streams[0])
    video.value.srcObject = event.streams[0]
    video.value.onloadedmetadata = function (e) {
      video.value.play();
    };
  }

    const { send } = useWebSocket('ws://192.168.110.140:3000/websocket', {
        async onMessage(ws,event:any) {
            const data = JSON.parse(event.data)
            switch (data.emit) {
                case 'aa':
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.data))
                    await peerConnection.setLocalDescription(await peerConnection.createAnswer())
                    send(JSON.stringify({
                        emit:'bb',
                        data:peerConnection.localDescription,
                        userId: userId.value
                    }))
                    break;

            }
        },
        onConnected(){
            send(JSON.stringify({
                emit:'webrtcLogin',
                userId: userId.value
            }))
        }
    })
})
</script>

<style scoped lang="less">
.aaa {

}
</style>
