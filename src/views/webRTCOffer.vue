<template>
  <div class="aaa">
    <video ref="video"></video>
    <div class="controls">
      <button :disabled="sharing" @click="startShare">
        {{ sharing ? '共享中...' : '开始共享屏幕' }}
      </button>
      <button v-if="sharing" @click="stopShare">停止共享</button>
    </div>
  </div>
</template>

<script setup lang="ts" title="webRTC发起端">
const video = $ref() as HTMLVideoElement
const sharing = ref(false)

// 在一个标签页中创建广播通道
const channel = new BroadcastChannel('myChannel');

let peerConnection: RTCPeerConnection | null = null
let localStream: MediaStream | null = null

const startShare = async () => {
  if (sharing.value) return
  localStream = await navigator.mediaDevices.getDisplayMedia({ video: true })
  sharing.value = true

  video.srcObject = localStream;
  video.onloadedmetadata = function () {
    video.play();
  };

  // 用户主动停止共享时（点击浏览器原生停止按钮）同步状态
  localStream.getVideoTracks()[0].onended = () => stopShare()

  // 创建 RTCPeerConnection 对象
  peerConnection = new RTCPeerConnection();
  const c = peerConnection.createDataChannel('chat')
  c.onmessage = ev => { console.log(ev.data) }
  c.onopen = () => {
    setInterval(() => { c.send("Hi you!") }, 1000)
  }

  localStream.getTracks().forEach(track => peerConnection!.addTrack(track, localStream!));

  // 用 flag 防止 ready 被多次处理导致重复 createOffer
  let offerSent = false

  const sendOffer = async () => {
    if (offerSent || !peerConnection) return
    offerSent = true

    await peerConnection.setLocalDescription(await peerConnection.createOffer())

    // 等待 ICE 收集完成，加 2s 超时兜底（本地场景可能已经 complete 但不再触发回调）
    await new Promise<void>(resolve => {
      if (peerConnection!.iceGatheringState === 'complete') {
        resolve()
        return
      }
      const timeout = setTimeout(resolve, 2000)
      peerConnection!.onicegatheringstatechange = () => {
        if (peerConnection!.iceGatheringState === 'complete') {
          clearTimeout(timeout)
          resolve()
        }
      }
    })

    channel.postMessage(JSON.stringify({
      type: 'offer',
      data: peerConnection.localDescription,
    }))
  }

  channel.onmessage = async e => {
    const msg = JSON.parse(e.data)
    if (msg.type === 'answer') {
      await peerConnection!.setRemoteDescription(new RTCSessionDescription(msg.data))
    } else if (msg.type === 'ready') {
      await sendOffer()
    }
  }

  // 通知接收端发起端已就绪，触发 ready 回复
  channel.postMessage(JSON.stringify({ type: 'offer-ready' }))
}

const stopShare = () => {
  localStream?.getTracks().forEach(t => t.stop())
  peerConnection?.close()
  peerConnection = null
  localStream = null
  video.srcObject = null
  sharing.value = false
  channel.onmessage = null
}
</script>

<style scoped lang="less">
.aaa {
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
  }

  .controls {
    display: flex;
    gap: 8px;

    button {
      padding: 8px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: opacity 0.2s;

      &:first-child {
        background: #1890ff;
        color: #fff;

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }

      &:last-child {
        background: #ff4d4f;
        color: #fff;
      }

      &:not(:disabled):hover {
        opacity: 0.85;
      }
    }
  }
}
</style>
