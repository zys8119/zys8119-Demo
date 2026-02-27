<template>
    <div class='actionRecognition'>
        <div class="ar-container">
            <div class="ar-header">
                <h2>实时手势识别</h2>
                <div class="ar-status" :class="statusClass">{{ statusText }}</div>
            </div>

            <div class="ar-video-wrapper">
                <video ref="videoRef" autoplay playsinline muted></video>
                <canvas ref="canvasRef"></canvas>
                <transition name="fade">
                    <div class="ar-gesture-badge" v-if="currentGesture">
                        <span class="gesture-emoji">{{ currentGesture.emoji }}</span>
                        <div class="gesture-info">
                            <span class="gesture-name">{{ currentGesture.name }}</span>
                            <div class="gesture-bar">
                                <div class="gesture-bar-fill" :style="{ width: currentGesture.confidence * 100 + '%' }"></div>
                            </div>
                            <span class="gesture-conf">{{ Math.round(currentGesture.confidence * 100) }}%</span>
                        </div>
                    </div>
                </transition>
                <div class="ar-loading" v-if="loading">
                    <div class="spinner"></div>
                    <span>{{ loadingText }}</span>
                </div>
            </div>

            <div class="ar-controls">
                <button class="ar-btn" :class="cameraActive ? 'btn-danger' : 'btn-primary'" @click="toggleCamera">
                    {{ cameraActive ? '关闭摄像头' : '开启摄像头' }}
                </button>
                <button class="ar-btn btn-secondary" @click="clearHistory" v-if="gestureHistory.length">
                    清空历史
                </button>
            </div>

            <div class="ar-gestures-guide">
                <div class="guide-title">支持的手势</div>
                <div class="guide-grid">
                    <div class="guide-item" v-for="g in gestureGuide" :key="g.name"
                        :class="{ active: currentGesture?.name === g.name }">
                        <span>{{ g.emoji }}</span>
                        <span>{{ g.name }}</span>
                    </div>
                </div>
            </div>

            <div class="ar-history" v-if="gestureHistory.length">
                <div class="history-title">识别历史</div>
                <div class="history-list">
                    <div class="history-item" v-for="(g, i) in gestureHistory" :key="i">
                        <span>{{ g.emoji }}</span>
                        <span>{{ g.name }}</span>
                        <span class="history-time">{{ g.time }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'

// --- Types ---
interface GestureResult {
    name: string
    emoji: string
    confidence: number
}
interface HistoryItem extends GestureResult {
    time: string
}
interface Landmark {
    x: number
    y: number
    z: number
}

// --- State ---
const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()
const cameraActive = ref(false)
const loading = ref(false)
const loadingText = ref('初始化中...')
const currentGesture = ref<GestureResult | null>(null)
const gestureHistory = ref<HistoryItem[]>([])

let stream: MediaStream | null = null
let hands: any = null
let animFrameId: number | null = null

// --- Computed ---
const statusClass = computed(() => {
    if (loading.value) return 'status-loading'
    if (cameraActive.value) return 'status-active'
    return 'status-idle'
})
const statusText = computed(() => {
    if (loading.value) return loadingText.value
    if (cameraActive.value) return '检测中...'
    return '待机'
})

const gestureGuide = [
    { emoji: '🖐', name: '张开' },
    { emoji: '✊', name: '拳头' },
    { emoji: '👍', name: '点赞' },
    { emoji: '👎', name: '点踩' },
    { emoji: '☝️', name: '一' },
    { emoji: '✌️', name: '胜利' },
    { emoji: '🤟', name: '爱你' },
    { emoji: '🤘', name: '摇滚' },
    { emoji: '🤙', name: '打电话' },
    { emoji: '👌', name: 'OK' },
]

// --- Gesture Classification ---
/**
 * 判断手指是否伸展（指尖 y 坐标小于 PIP 关节 y 坐标）
 * landmarks index: thumb(1-4), index(5-8), middle(9-12), ring(13-16), pinky(17-20)
 */
function isFingerExtended(landmarks: Landmark[], tipIdx: number, pipIdx: number): boolean {
    return landmarks[tipIdx].y < landmarks[pipIdx].y
}

function isThumbExtended(landmarks: Landmark[], handedness: string): boolean {
    // 拇指特殊处理：比较 tip 和 IP 的 x 坐标（镜像摄像头）
    const tip = landmarks[4]
    const ip = landmarks[3]
    // 右手（画面中是左手，因为镜像）
    if (handedness === 'Right') {
        return tip.x < ip.x
    } else {
        return tip.x > ip.x
    }
}

function classifyGesture(landmarks: Landmark[], handedness: string): GestureResult {
    const thumb = isThumbExtended(landmarks, handedness)
    const index = isFingerExtended(landmarks, 8, 6)
    const middle = isFingerExtended(landmarks, 12, 10)
    const ring = isFingerExtended(landmarks, 16, 14)
    const pinky = isFingerExtended(landmarks, 20, 18)

    const extended = [thumb, index, middle, ring, pinky]
    const extCount = extended.filter(Boolean).length

    // 张开
    if (index && middle && ring && pinky && thumb) {
        return { name: '张开', emoji: '🖐', confidence: 0.95 }
    }
    // 拳头
    if (!index && !middle && !ring && !pinky && !thumb) {
        return { name: '拳头', emoji: '✊', confidence: 0.95 }
    }
    // 点赞 (thumbs up)
    if (thumb && !index && !middle && !ring && !pinky) {
        // 判断方向：拇指尖 y < wrist y 为向上
        if (landmarks[4].y < landmarks[0].y) {
            return { name: '点赞', emoji: '👍', confidence: 0.9 }
        } else {
            return { name: '点踩', emoji: '👎', confidence: 0.9 }
        }
    }
    // 一
    if (!thumb && index && !middle && !ring && !pinky) {
        return { name: '一', emoji: '☝️', confidence: 0.9 }
    }
    // 胜利 V
    if (!thumb && index && middle && !ring && !pinky) {
        return { name: '胜利', emoji: '✌️', confidence: 0.9 }
    }
    // OK (拇指+食指捏)
    const thumbTip = landmarks[4]
    const indexTip = landmarks[8]
    const dist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y)
    if (dist < 0.06 && middle && ring && pinky) {
        return { name: 'OK', emoji: '👌', confidence: 0.88 }
    }
    // 爱你 (拇指+食指+小拇指)
    if (thumb && index && !middle && !ring && pinky) {
        return { name: '爱你', emoji: '🤟', confidence: 0.88 }
    }
    // 摇滚 (食指+小拇指)
    if (!thumb && index && !middle && !ring && pinky) {
        return { name: '摇滚', emoji: '🤘', confidence: 0.88 }
    }
    // 打电话 (拇指+小拇指)
    if (thumb && !index && !middle && !ring && pinky) {
        return { name: '打电话', emoji: '🤙', confidence: 0.88 }
    }
    // 三
    if (!thumb && index && middle && ring && !pinky) {
        return { name: '三', emoji: '3️⃣', confidence: 0.85 }
    }
    // 四
    if (!thumb && index && middle && ring && pinky) {
        return { name: '四', emoji: '4️⃣', confidence: 0.85 }
    }

    return { name: `${extCount}指`, emoji: '🤚', confidence: 0.7 }
}

// --- Drawing ---
function drawLandmarks(ctx: CanvasRenderingContext2D, landmarks: Landmark[], w: number, h: number) {
    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],       // thumb
        [0, 5], [5, 6], [6, 7], [7, 8],       // index
        [0, 9], [9, 10], [10, 11], [11, 12],  // middle
        [0, 13], [13, 14], [14, 15], [15, 16],// ring
        [0, 17], [17, 18], [18, 19], [19, 20],// pinky
        [5, 9], [9, 13], [13, 17],            // palm
    ]

    // Draw connections
    ctx.strokeStyle = '#00e5ff'
    ctx.lineWidth = 2
    for (const [a, b] of connections) {
        ctx.beginPath()
        ctx.moveTo(landmarks[a].x * w, landmarks[a].y * h)
        ctx.lineTo(landmarks[b].x * w, landmarks[b].y * h)
        ctx.stroke()
    }

    // Draw joints
    for (let i = 0; i < landmarks.length; i++) {
        const lm = landmarks[i]
        ctx.beginPath()
        ctx.arc(lm.x * w, lm.y * h, i === 0 ? 6 : 4, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#ff5252' : (i % 4 === 0 ? '#ffeb3b' : '#ffffff')
        ctx.fill()
    }
}

// --- Camera & MediaPipe ---
async function loadMediaPipeScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if ((window as any).Hands) { resolve(); return }
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js'
        script.crossOrigin = 'anonymous'
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('MediaPipe Hands 加载失败'))
        document.head.appendChild(script)
    })
}

async function initHands() {
    const HandsClass = (window as any).Hands
    hands = new HandsClass({
        locateFile: (file: string) =>
            `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    })
    hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.6,
    })
    hands.onResults(onResults)
    await hands.initialize()
}

let lastGestureName = ''
let gestureSameCount = 0
const HISTORY_STABLE_COUNT = 8

function onResults(results: any) {
    const canvas = canvasRef.value
    const video = videoRef.value
    if (!canvas || !video) return

    const ctx = canvas.getContext('2d')!
    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480
    const w = canvas.width
    const h = canvas.height

    // 镜像绘制视频
    ctx.save()
    ctx.scale(-1, 1)
    ctx.drawImage(video, -w, 0, w, h)
    ctx.restore()

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks: Landmark[] = results.multiHandLandmarks[0]
        const handedness = results.multiHandedness?.[0]?.label || 'Right'

        // 镜像坐标
        const mirrored = landmarks.map(lm => ({ ...lm, x: 1 - lm.x }))

        drawLandmarks(ctx, mirrored, w, h)

        const gesture = classifyGesture(mirrored, handedness)
        currentGesture.value = gesture

        // 稳定后加入历史
        if (gesture.name === lastGestureName) {
            gestureSameCount++
            if (gestureSameCount === HISTORY_STABLE_COUNT) {
                const time = new Date().toLocaleTimeString()
                gestureHistory.value.unshift({ ...gesture, time })
                if (gestureHistory.value.length > 20) gestureHistory.value.pop()
            }
        } else {
            lastGestureName = gesture.name
            gestureSameCount = 0
        }
    } else {
        currentGesture.value = null
        lastGestureName = ''
        gestureSameCount = 0
    }
}

async function startDetectionLoop() {
    if (!videoRef.value || !hands) return
    const video = videoRef.value
    const loop = async () => {
        if (!cameraActive.value) return
        if (video.readyState >= 2) {
            await hands.send({ image: video })
        }
        animFrameId = requestAnimationFrame(loop)
    }
    animFrameId = requestAnimationFrame(loop)
}

async function toggleCamera() {
    if (cameraActive.value) {
        stopCamera()
    } else {
        await startCamera()
    }
}

async function startCamera() {
    loading.value = true
    try {
        loadingText.value = '请求摄像头权限...'
        stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 640, height: 480, facingMode: 'user' },
            audio: false,
        })
        const video = videoRef.value!
        video.srcObject = stream
        await new Promise<void>(res => { video.onloadedmetadata = () => res() })
        await video.play()

        loadingText.value = '加载 MediaPipe Hands...'
        await loadMediaPipeScript()

        loadingText.value = '初始化模型...'
        await initHands()

        cameraActive.value = true
        loading.value = false
        startDetectionLoop()
    } catch (e: any) {
        loading.value = false
        alert('启动失败：' + (e?.message || e))
        stopCamera()
    }
}

function stopCamera() {
    cameraActive.value = false
    if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId)
        animFrameId = null
    }
    if (stream) {
        stream.getTracks().forEach(t => t.stop())
        stream = null
    }
    if (videoRef.value) videoRef.value.srcObject = null
    if (canvasRef.value) {
        const ctx = canvasRef.value.getContext('2d')
        if (ctx) ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    }
    currentGesture.value = null
    hands = null
}

function clearHistory() {
    gestureHistory.value = []
}

onUnmounted(() => stopCamera())
</script>

<style scoped lang="less">
.actionRecognition {
    min-height: 100vh;
    background: #0a0a1a;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 24px 16px;
}

.ar-container {
    width: 100%;
    max-width: 720px;
}

.ar-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;

    h2 {
        margin: 0;
        color: #fff;
        font-size: 22px;
        font-weight: 600;
    }
}

.ar-status {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;

    &.status-idle { background: #2a2a3a; color: #888; }
    &.status-loading { background: #1a3a5c; color: #64b5f6; }
    &.status-active {
        background: #0d3320;
        color: #4caf50;
        animation: pulse 2s infinite;
    }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}

.ar-video-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    background: #111;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 229, 255, 0.15);
    border: 1px solid #1a2a3a;

    video, canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video { z-index: 1; opacity: 0; }
    canvas { z-index: 2; }
}

.ar-gesture-badge {
    position: absolute;
    bottom: 16px;
    left: 16px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 229, 255, 0.3);
    border-radius: 12px;
    padding: 10px 16px;

    .gesture-emoji { font-size: 36px; line-height: 1; }

    .gesture-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .gesture-name {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }

    .gesture-bar {
        width: 100px;
        height: 4px;
        background: #333;
        border-radius: 2px;
        overflow: hidden;

        .gesture-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #00e5ff, #00bcd4);
            border-radius: 2px;
            transition: width 0.2s;
        }
    }

    .gesture-conf {
        color: #00e5ff;
        font-size: 12px;
    }
}

.ar-loading {
    position: absolute;
    inset: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: rgba(10, 10, 26, 0.85);
    color: #64b5f6;
    font-size: 14px;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #1a2a3a;
    border-top-color: #00e5ff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.ar-controls {
    display: flex;
    gap: 12px;
    margin-top: 16px;
}

.ar-btn {
    padding: 10px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &.btn-primary {
        background: #00e5ff;
        color: #000;
        &:hover { background: #00bcd4; }
    }

    &.btn-danger {
        background: #f44336;
        color: #fff;
        &:hover { background: #d32f2f; }
    }

    &.btn-secondary {
        background: #2a2a3a;
        color: #aaa;
        &:hover { background: #333; color: #fff; }
    }
}

.ar-gestures-guide {
    margin-top: 20px;

    .guide-title {
        color: #aaa;
        font-size: 13px;
        margin-bottom: 10px;
    }

    .guide-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
        gap: 8px;
    }

    .guide-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 10px 6px;
        background: #111;
        border-radius: 10px;
        border: 1px solid #1a2a3a;
        color: #888;
        font-size: 12px;
        transition: all 0.2s;

        span:first-child { font-size: 24px; }

        &.active {
            border-color: #00e5ff;
            background: rgba(0, 229, 255, 0.08);
            color: #00e5ff;
        }
    }
}

.ar-history {
    margin-top: 20px;

    .history-title {
        color: #aaa;
        font-size: 13px;
        margin-bottom: 10px;
    }

    .history-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-height: 200px;
        overflow-y: auto;
    }

    .history-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        background: #111;
        border-radius: 8px;
        color: #ccc;
        font-size: 14px;

        .history-time {
            margin-left: auto;
            color: #555;
            font-size: 12px;
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(8px);
}
</style>
