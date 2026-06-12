<template>
  <div class="answer" :class="{ 'chat-open': !chatCollapsed }">
    <a :href="WS_URL.replace('wss://', 'https://')">允许安全连接</a>
    <video ref="videoEl" muted autoplay playsinline controls></video>
    <p class="status">{{ status }}</p>

    <!-- 底部固定聊天面板 -->
    <div class="chat-panel" :class="{ collapsed: chatCollapsed }">
      <div class="chat-header" @click="chatCollapsed = !chatCollapsed">
        <span class="chat-title">聊天</span>
        <span class="chat-badge" v-if="chatCollapsed && unreadCount > 0">{{ unreadCount }}</span>
        <span class="collapse-btn">{{ chatCollapsed ? '展开' : '收起' }}</span>
      </div>
      <template v-if="!chatCollapsed">
        <div ref="msgListEl" class="chat-messages">
          <div v-for="msg in chatMessages" :key="msg.time + msg.from" class="msg-item" :class="{ self: msg.isSelf }">
            <span class="msg-from">{{ msg.isSelf ? '我' : msg.from }}</span>
            <span class="msg-bubble">{{ msg.text }}</span>
            <span class="msg-time">{{ formatTime(msg.time) }}</span>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="inputText" placeholder="发送消息..." @keydown.enter.prevent="sendChat" />
          <button @click="sendChat">发送</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// ── WebSocket 信令（支持局域网跨设备）────────────────────
const WS_URL = `wss://${location.hostname}:9000`
let ws: WebSocket | null = null
let wsReady = false
const wsMsgQueue: string[] = []

const send = (msg: object) => {
  const str = JSON.stringify(msg)
  if (wsReady && ws) ws.send(str)
  else wsMsgQueue.push(str)
}

const videoEl = $ref<HTMLVideoElement>()
const msgListEl = $ref<HTMLDivElement>()
const status = ref('正在连接发起端...')

// ── 名称 ──────────────────────────────────────────────────
const name = ref((route.query.title as string) || '访客')

// ── 聊天 ──────────────────────────────────────────────────
interface ChatMessage {
  from: string
  text: string
  time: number
  isSelf: boolean
}

const chatMessages = ref<ChatMessage[]>([])
const inputText = ref('')
const chatCollapsed = ref(true)
const unreadCount = ref(0)

const formatTime = (ts: number) => {
  const d = new Date(ts)
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
}

const scrollToBottom = async () => {
  await nextTick()
  if (msgListEl) msgListEl.scrollTop = msgListEl.scrollHeight
}

const pushMessage = (msg: ChatMessage) => {
  chatMessages.value.push(msg)
  if (chatCollapsed.value && !msg.isSelf) unreadCount.value++
  scrollToBottom()
}

watch(chatCollapsed, (collapsed) => {
  if (!collapsed) {
    unreadCount.value = 0
    scrollToBottom()
  }
})

// ── DataChannel（与发起端通信）────────────────────────────
let dataChannel: RTCDataChannel | null = null

const setupDataChannel = (dc: RTCDataChannel) => {
  dataChannel = dc
  dc.onmessage = (e) => {
    try {
      const msg = JSON.parse(e.data)
      if (msg.type === 'chat') {
        pushMessage({ from: msg.from, text: msg.text, time: msg.time, isSelf: false })
      }
    } catch { }
  }
}

const sendChat = () => {
  const text = inputText.value.trim()
  if (!text || !dataChannel || dataChannel.readyState !== 'open') return
  const msg = { type: 'chat', from: name.value, text, time: Date.now() }
  dataChannel.send(JSON.stringify(msg))
  pushMessage({ from: name.value, text, time: msg.time, isSelf: true })
  inputText.value = ''
}

// ── WebRTC ────────────────────────────────────────────────
const peerId = crypto.randomUUID()
let pc: RTCPeerConnection | null = null
let retryTimer: ReturnType<typeof setTimeout> | null = null

const clearRetryTimer = () => {
  if (retryTimer) { clearTimeout(retryTimer); retryTimer = null }
}

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

const joinOrRetry = () => {
  clearRetryTimer()
  send({ type: 'ready', peerId })
  retryTimer = setTimeout(() => {
    if (pc?.connectionState !== 'connected') {
      status.value = '发起端未响应，等待中...'
      joinOrRetry()
    }
  }, 3000)
}

onMounted(() => {
  // 建立 WebSocket 连接
  ws = new WebSocket(WS_URL)
  ws.onopen = () => {
    wsReady = true
    wsMsgQueue.splice(0).forEach(m => ws!.send(m))
    joinOrRetry()
  }
  ws.onclose = () => {
    wsReady = false
    setTimeout(() => {
      ws = new WebSocket(WS_URL)
    }, 2000)
  }
  ws.onmessage = async (e) => {
    const msg = JSON.parse(e.data)

    if (msg.type === 'offer-ready') {
      status.value = '检测到发起端，正在加入...'
      joinOrRetry()
      return
    }

    // 发起端修改了本端名称
    if (msg.type === 'rename' && msg.peerId === peerId) {
      name.value = msg.name
      return
    }

    if (msg.type === 'offer' && msg.peerId === peerId) {
      clearRetryTimer()
      status.value = '收到 offer，协商中...'

      pc?.close()
      pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      })

      const remoteStream = new MediaStream()
      videoEl.srcObject = remoteStream

      pc.ontrack = ({ track }) => {
        remoteStream.addTrack(track)
        status.value = `收到 ${track.kind} 轨道，播放中...`
      }

      // 接收发起端创建的 DataChannel
      pc.ondatachannel = ({ channel: dc }) => {
        setupDataChannel(dc)
      }

      pc.onconnectionstatechange = () => {
        const state = pc?.connectionState
        if (state === 'connected') {
          status.value = '已连接，画面传输中'
          clearRetryTimer()
          // 连接成功后上报名称
          send({ type: 'name', peerId, name: name.value })
        }
        if (state === 'failed' || state === 'disconnected') {
          status.value = '连接断开，等待发起端重新共享...'
          pc?.close()
          pc = null
          dataChannel = null
          if (videoEl) videoEl.srcObject = null
          joinOrRetry()
        }
      }

      await pc.setRemoteDescription(new RTCSessionDescription(msg.data))
      const answer = await pc.createAnswer()
      await pc.setLocalDescription(answer)
      await waitGatheringComplete(pc)

      send({ type: 'answer', peerId, data: pc.localDescription })
      status.value = '已发送 answer，等待连接建立...'
    }
  }
})

onUnmounted(() => {
  clearRetryTimer()
  pc?.close()
  ws?.close()
})
</script>

<style scoped lang="less">
.answer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  padding-bottom: 52px; // 折叠时为 header 留空间
  transition: padding-bottom 0.25s ease;

  &.chat-open {
    padding-bottom: 320px; // 展开时为面板留空间
  }

  video {
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
    background: #000;
    aspect-ratio: 16 / 9;
  }

  .status {
    font-size: 13px;
    color: #888;
  }
}

// ── 聊天面板（底部固定）──────────────────────────────────
.chat-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 320px;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: height 0.25s ease;

  &.collapsed {
    height: 48px;
    overflow: hidden;
  }

  .chat-header {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 48px;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    gap: 8px;

    &:hover {
      background: #f5f5f5;
    }

    .chat-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    .chat-badge {
      background: #ff4d4f;
      color: #fff;
      font-size: 11px;
      min-width: 18px;
      height: 18px;
      border-radius: 9px;
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .collapse-btn {
      margin-left: auto;
      font-size: 12px;
      color: #888;
    }
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .msg-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      max-width: 60%;

      &.self {
        align-self: flex-end;
        align-items: flex-end;

        .msg-bubble {
          background: #1890ff;
          color: #fff;
        }
      }

      .msg-from {
        font-size: 11px;
        color: #aaa;
        padding: 0 4px;
      }

      .msg-bubble {
        background: #f0f0f0;
        color: #333;
        padding: 6px 12px;
        border-radius: 12px;
        font-size: 14px;
        word-break: break-all;
        line-height: 1.5;
      }

      .msg-time {
        font-size: 10px;
        color: #ccc;
        padding: 0 4px;
      }
    }
  }

  .chat-input {
    display: flex;
    gap: 8px;
    padding: 10px 16px;
    border-top: 1px solid #e8e8e8;
    flex-shrink: 0;

    input {
      flex: 1;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 13px;
      outline: none;

      &:focus {
        border-color: #1890ff;
      }
    }

    button {
      padding: 6px 18px;
      background: #1890ff;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;

      &:hover {
        opacity: 0.85;
      }
    }
  }
}
</style>
