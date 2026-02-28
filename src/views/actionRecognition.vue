<template>
    <div class='actionRecognition'>
        <div class="ar-container">
            <div class="ar-header">
                <h2>实时手势 & 人脸识别</h2>
                <div class="ar-status" :class="statusClass">{{ statusText }}</div>
            </div>

            <div class="ar-video-wrapper">
                <video ref="videoRef" autoplay playsinline muted></video>
                <canvas ref="canvasRef"></canvas>

                <!-- 人脸检测 badge（视频顶部） -->
                <transition name="fade">
                    <div class="ar-face-badge" v-if="currentFace !== null">
                        <span class="face-icon">👤</span>
                        <div class="face-info">
                            <div class="face-row">
                                <span class="ear-label">左耳</span>
                                <span :class="currentFace.hasLeftEarphone ? 'ear-on' : 'ear-off'">
                                    {{ currentFace.hasLeftEarphone ? '🎧 耳机' : '无' }}
                                </span>
                                <span class="ear-conf">{{ Math.round(currentFace.leftConf * 100) }}%</span>
                            </div>
                            <div class="face-row">
                                <span class="ear-label">右耳</span>
                                <span :class="currentFace.hasRightEarphone ? 'ear-on' : 'ear-off'">
                                    {{ currentFace.hasRightEarphone ? '🎧 耳机' : '无' }}
                                </span>
                                <span class="ear-conf">{{ Math.round(currentFace.rightConf * 100) }}%</span>
                            </div>
                        </div>
                    </div>
                </transition>

                <!-- 手势 badge（视频底部，左/右手各一） -->
                <transition-group name="fade" tag="div">
                    <div class="ar-gesture-badge" v-for="g in currentGestures" :key="g.label"
                        :class="g.label === '左手' ? 'badge-left' : 'badge-right'">
                        <span class="gesture-emoji">{{ g.emoji }}</span>
                        <div class="gesture-info">
                            <div class="gesture-header">
                                <span class="gesture-label"
                                    :style="{ color: g.label === '左手' ? '#00e5ff' : '#69f0ae' }">{{ g.label }}</span>
                                <span class="gesture-name">{{ g.name }}</span>
                            </div>
                            <div class="gesture-bar">
                                <div class="gesture-bar-fill"
                                    :style="{ width: g.confidence * 100 + '%', background: g.label === '左手' ? 'linear-gradient(90deg,#00e5ff,#00bcd4)' : 'linear-gradient(90deg,#69f0ae,#00c853)' }">
                                </div>
                            </div>
                            <span class="gesture-conf">{{ Math.round(g.confidence * 100) }}%</span>
                        </div>
                    </div>
                </transition-group>

                <div class="ar-loading" v-if="loading">
                    <div class="spinner"></div>
                    <span>{{ loadingText }}</span>
                </div>
            </div>

            <!-- 耳机提示 -->
            <transition name="fade">
                <div class="ar-headphone-alert" v-if="currentFace?.hasLeftEarphone || currentFace?.hasRightEarphone">
                    🎧 检测到佩戴耳机
                    <span v-if="currentFace?.hasLeftEarphone && currentFace?.hasRightEarphone">（双耳）</span>
                    <span v-else-if="currentFace?.hasLeftEarphone">（左耳）</span>
                    <span v-else>（右耳）</span>
                </div>
            </transition>

            <!-- 双手持杯提示 -->
            <transition name="fade">
                <div class="ar-cup-alert" v-if="bothHoldingCup">
                    ☕ 检测到双手同时持杯！
                </div>
            </transition>

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
                        :class="{ active: currentGestures.some(cg => cg.name === g.name) }">
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
                        <span class="history-label" :style="{ color: g.label === '左手' ? '#00e5ff' : '#69f0ae' }">{{
                            g.label }}</span>
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
    label: string  // '左手' | '右手'
}
interface HistoryItem extends GestureResult {
    time: string
}
interface Landmark {
    x: number
    y: number
    z: number
}
interface FaceResult {
    hasLeftEarphone: boolean
    hasRightEarphone: boolean
    leftConf: number
    rightConf: number
}

// --- State ---
const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()
const cameraActive = ref(false)
const loading = ref(false)
const loadingText = ref('初始化中...')
const currentGestures = ref<GestureResult[]>([])
const gestureHistory = ref<HistoryItem[]>([])
const currentFace = ref<FaceResult | null>(null)

let stream: MediaStream | null = null
let hands: any = null
let faceMesh: any = null
let animFrameId: number | null = null
let latestFaceLandmarks: any[] | null = null
let faceFrameCount = 0
let offCanvas: HTMLCanvasElement | null = null

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
    { emoji: '☕', name: '持杯' },
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

// 双手同时持杯
const bothHoldingCup = computed(() =>
    currentGestures.value.length === 2 &&
    currentGestures.value.every(g => g.name === '持杯')
)

// --- Gesture Classification ---
function isFingerExtended(landmarks: Landmark[], tipIdx: number, pipIdx: number): boolean {
    return landmarks[tipIdx].y < landmarks[pipIdx].y
}

function isThumbExtended(landmarks: Landmark[], handedness: string): boolean {
    const tip = landmarks[4]
    const ip = landmarks[3]
    if (handedness === 'Right') {
        return tip.x < ip.x
    } else {
        return tip.x > ip.x
    }
}

/**
 * 持杯姿势：四指弯曲（tip y > MCP y）、指尖仍高于手腕、横向展开 > 阈值
 */
function isCupGrip(landmarks: Landmark[]): boolean {
    const wristY = landmarks[0].y
    const indexBent = landmarks[8].y > landmarks[5].y
    const middleBent = landmarks[12].y > landmarks[9].y
    const ringBent = landmarks[16].y > landmarks[13].y
    const pinkyBent = landmarks[20].y > landmarks[17].y
    const notFist = landmarks[8].y < wristY - 0.02
    const spread = Math.abs(landmarks[8].x - landmarks[20].x)
    return indexBent && middleBent && ringBent && pinkyBent && notFist && spread > 0.08
}

function classifyGesture(landmarks: Landmark[], handedness: string): Omit<GestureResult, 'label'> {
    const thumb = isThumbExtended(landmarks, handedness)
    const index = isFingerExtended(landmarks, 8, 6)
    const middle = isFingerExtended(landmarks, 12, 10)
    const ring = isFingerExtended(landmarks, 16, 14)
    const pinky = isFingerExtended(landmarks, 20, 18)

    const extended = [thumb, index, middle, ring, pinky]
    const extCount = extended.filter(Boolean).length

    if (index && middle && ring && pinky && thumb) {
        return { name: '张开', emoji: '🖐', confidence: 0.95 }
    }
    if (isCupGrip(landmarks)) {
        return { name: '持杯', emoji: '☕', confidence: 0.87 }
    }
    if (!index && !middle && !ring && !pinky && !thumb) {
        return { name: '拳头', emoji: '✊', confidence: 0.95 }
    }
    if (thumb && !index && !middle && !ring && !pinky) {
        if (landmarks[4].y < landmarks[0].y) {
            return { name: '点赞', emoji: '👍', confidence: 0.9 }
        } else {
            return { name: '点踩', emoji: '👎', confidence: 0.9 }
        }
    }
    if (!thumb && index && !middle && !ring && !pinky) {
        return { name: '一', emoji: '☝️', confidence: 0.9 }
    }
    if (!thumb && index && middle && !ring && !pinky) {
        return { name: '胜利', emoji: '✌️', confidence: 0.9 }
    }
    const thumbTip = landmarks[4]
    const indexTip = landmarks[8]
    const dist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y)
    if (dist < 0.06 && middle && ring && pinky) {
        return { name: 'OK', emoji: '👌', confidence: 0.88 }
    }
    if (thumb && index && !middle && !ring && pinky) {
        return { name: '爱你', emoji: '🤟', confidence: 0.88 }
    }
    if (!thumb && index && !middle && !ring && pinky) {
        return { name: '摇滚', emoji: '🤘', confidence: 0.88 }
    }
    if (thumb && !index && !middle && !ring && pinky) {
        return { name: '打电话', emoji: '🤙', confidence: 0.88 }
    }
    if (!thumb && index && middle && ring && !pinky) {
        return { name: '三', emoji: '3️⃣', confidence: 0.85 }
    }
    if (!thumb && index && middle && ring && pinky) {
        return { name: '四', emoji: '4️⃣', confidence: 0.85 }
    }

    return { name: `${extCount}指`, emoji: '🤚', confidence: 0.7 }
}

// --- Hand Drawing ---
function drawLandmarks(ctx: CanvasRenderingContext2D, landmarks: Landmark[], w: number, h: number, color: string) {
    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [0, 5], [5, 6], [6, 7], [7, 8],
        [0, 9], [9, 10], [10, 11], [11, 12],
        [0, 13], [13, 14], [14, 15], [15, 16],
        [0, 17], [17, 18], [18, 19], [19, 20],
        [5, 9], [9, 13], [13, 17],
    ]
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    for (const [a, b] of connections) {
        ctx.beginPath()
        ctx.moveTo(landmarks[a].x * w, landmarks[a].y * h)
        ctx.lineTo(landmarks[b].x * w, landmarks[b].y * h)
        ctx.stroke()
    }
    for (let i = 0; i < landmarks.length; i++) {
        const lm = landmarks[i]
        ctx.beginPath()
        ctx.arc(lm.x * w, lm.y * h, i === 0 ? 6 : 4, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#ff5252' : (i % 4 === 0 ? '#ffeb3b' : '#ffffff')
        ctx.fill()
    }
}

// --- Face Mesh Drawing ---
// Face oval boundary landmark indices
const FACE_OVAL = [10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109]
// Simplified eye contours
const LEFT_EYE = [33, 7, 163, 144, 145, 153, 154, 155, 133]
const RIGHT_EYE = [362, 382, 381, 380, 374, 373, 390, 249, 263]
// Ear-adjacent landmarks (face oval edge near ears)
const EAR_LANDMARKS = [234, 454] // 234=right cheek edge, 454=left cheek edge

function drawFaceMesh(ctx: CanvasRenderingContext2D, rawLandmarks: any[], w: number, h: number, faceResult: FaceResult | null) {
    // Mirror x coordinates to match mirrored canvas
    const lms = rawLandmarks.map((lm: any) => ({ x: (1 - lm.x) * w, y: lm.y * h }))

    // Face oval
    ctx.beginPath()
    FACE_OVAL.forEach((idx, i) => {
        const p = lms[idx]
        if (i === 0) ctx.moveTo(p.x, p.y)
        else ctx.lineTo(p.x, p.y)
    })
    ctx.closePath()
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.55)'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Eye outlines
    ctx.lineWidth = 1
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)'
    for (const eye of [LEFT_EYE, RIGHT_EYE]) {
        ctx.beginPath()
        eye.forEach((idx, i) => {
            const p = lms[idx]
            if (i === 0) ctx.moveTo(p.x, p.y)
            else ctx.lineTo(p.x, p.y)
        })
        ctx.closePath()
        ctx.stroke()
    }

    // Ear markers with earphone detection color
    EAR_LANDMARKS.forEach((idx, i) => {
        const p = lms[idx]
        const hasEarphone = i === 0 ? faceResult?.hasRightEarphone : faceResult?.hasLeftEarphone
        ctx.beginPath()
        ctx.arc(p.x, p.y, 10, 0, Math.PI * 2)
        ctx.strokeStyle = hasEarphone ? '#ff9800' : 'rgba(255,215,0,0.5)'
        ctx.lineWidth = hasEarphone ? 2.5 : 1.5
        ctx.stroke()
        if (hasEarphone) {
            ctx.beginPath()
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(255, 152, 0, 0.6)'
            ctx.fill()
        }
    })
}

// --- Earphone Detection (pixel analysis) ---
function sampleAvgColor(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): [number, number, number] {
    const x = Math.max(0, Math.round(cx - r))
    const y = Math.max(0, Math.round(cy - r))
    try {
        const d = ctx.getImageData(x, y, r * 2, r * 2).data
        let rr = 0, g = 0, b = 0, n = 0
        for (let i = 0; i < d.length; i += 4) { rr += d[i]; g += d[i + 1]; b += d[i + 2]; n++ }
        return n > 0 ? [rr / n, g / n, b / n] : [180, 140, 110]
    } catch { return [180, 140, 110] }
}

function sampleDiffRatio(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, ref: [number, number, number]): number {
    const x = Math.max(0, Math.round(cx - r))
    const y = Math.max(0, Math.round(cy - r))
    try {
        const d = ctx.getImageData(x, y, r * 2, r * 2).data
        let diff = 0, n = 0
        for (let i = 0; i < d.length; i += 4) {
            const delta = (Math.abs(d[i] - ref[0]) + Math.abs(d[i + 1] - ref[1]) + Math.abs(d[i + 2] - ref[2])) / 3
            if (delta > 40) diff++
            n++
        }
        return n > 0 ? diff / n : 0
    } catch { return 0 }
}

/**
 * 分析耳朵区域像素是否存在耳机：
 * 以鼻梁（landmark 6）为皮肤色参考，比较耳朵边缘（234/454）区域的色差比例。
 * 色差比例 > 阈值则认为耳朵附近有异物（耳机）。
 */
function analyzeEarphones(rawLandmarks: any[], w: number, h: number): FaceResult {
    if (!offCanvas) return { hasLeftEarphone: false, hasRightEarphone: false, leftConf: 0, rightConf: 0 }
    const ctx = offCanvas.getContext('2d')!
    const lms = rawLandmarks.map((lm: any) => ({ x: (1 - lm.x) * w, y: lm.y * h }))

    // Skin tone from nose bridge area (landmark 6)
    const skin = sampleAvgColor(ctx, lms[6].x, lms[6].y, 12)

    // Ear edge landmarks (after mirroring: 234 → visually person's right, 454 → person's left)
    const rightEarPt = lms[234]
    const leftEarPt = lms[454]

    const rightConf = sampleDiffRatio(ctx, rightEarPt.x, rightEarPt.y, 14, skin)
    const leftConf = sampleDiffRatio(ctx, leftEarPt.x, leftEarPt.y, 14, skin)

    const THRESHOLD = 0.5
    return {
        hasRightEarphone: rightConf > THRESHOLD,
        hasLeftEarphone: leftConf > THRESHOLD,
        rightConf,
        leftConf,
    }
}

// --- MediaPipe Loading ---
async function loadScript(src: string, globalKey: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if ((window as any)[globalKey]) { resolve(); return }
        const s = document.createElement('script')
        s.src = src
        s.crossOrigin = 'anonymous'
        s.onload = () => resolve()
        s.onerror = () => reject(new Error(`加载失败: ${src}`))
        document.head.appendChild(s)
    })
}

async function initHands() {
    const HandsClass = (window as any).Hands
    hands = new HandsClass({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    })
    hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.6,
    })
    hands.onResults(onHandResults)
    await hands.initialize()
}

async function initFaceMesh() {
    const FM = (window as any).FaceMesh
    faceMesh = new FM({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    })
    faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
    })
    faceMesh.onResults(onFaceResults)
    await faceMesh.initialize()
}

// --- Result Handlers ---
const HAND_COLORS = ['#00e5ff', '#69f0ae']
const lastGestureNames: string[] = ['', '']
const gestureSameCounts: number[] = [0, 0]
const HISTORY_STABLE_COUNT = 8

function onHandResults(results: any) {
    const canvas = canvasRef.value
    const video = videoRef.value
    if (!canvas || !video) return

    const ctx = canvas.getContext('2d')!
    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480
    const w = canvas.width
    const h = canvas.height

    // Draw mirrored video
    ctx.save()
    ctx.scale(-1, 1)
    ctx.drawImage(video, -w, 0, w, h)
    ctx.restore()

    // Draw face mesh overlay (using latest face landmarks)
    if (latestFaceLandmarks) {
        drawFaceMesh(ctx, latestFaceLandmarks, w, h, currentFace.value)
    }

    const handCount = results.multiHandLandmarks?.length || 0
    const gestures: GestureResult[] = []

    for (let i = 0; i < handCount; i++) {
        const landmarks: Landmark[] = results.multiHandLandmarks[i]
        const handedness = results.multiHandedness?.[i]?.label || 'Right'
        const displayLabel = handedness === 'Right' ? '左手' : '右手'
        const mirrored = landmarks.map(lm => ({ ...lm, x: 1 - lm.x }))

        drawLandmarks(ctx, mirrored, w, h, HAND_COLORS[i % 2])

        const base = classifyGesture(mirrored, handedness)
        const gesture: GestureResult = { ...base, label: displayLabel }
        gestures.push(gesture)

        if (gesture.name === lastGestureNames[i]) {
            gestureSameCounts[i]++
            if (gestureSameCounts[i] === HISTORY_STABLE_COUNT) {
                const time = new Date().toLocaleTimeString()
                gestureHistory.value.unshift({ ...gesture, time })
                if (gestureHistory.value.length > 20) gestureHistory.value.pop()
            }
        } else {
            lastGestureNames[i] = gesture.name
            gestureSameCounts[i] = 0
        }
    }

    currentGestures.value = gestures

    for (let i = handCount; i < 2; i++) {
        lastGestureNames[i] = ''
        gestureSameCounts[i] = 0
    }
}

function onFaceResults(results: any) {
    const video = videoRef.value
    if (!video || !offCanvas) return

    if (results.multiFaceLandmarks?.length > 0) {
        latestFaceLandmarks = results.multiFaceLandmarks[0]
        offCanvas.width = video.videoWidth || 640
        offCanvas.height = video.videoHeight || 480
        const offCtx = offCanvas.getContext('2d')!
        offCtx.save()
        offCtx.scale(-1, 1)
        offCtx.drawImage(video, -offCanvas.width, 0, offCanvas.width, offCanvas.height)
        offCtx.restore()
        currentFace.value = analyzeEarphones(latestFaceLandmarks!, offCanvas.width, offCanvas.height)
    } else {
        latestFaceLandmarks = null
        currentFace.value = null
    }
}

// --- Detection Loop ---
async function startDetectionLoop() {
    if (!videoRef.value || !hands) return
    const video = videoRef.value
    const loop = async () => {
        if (!cameraActive.value) return
        if (video.readyState >= 2) {
            await hands.send({ image: video })
            faceFrameCount++
            // Face mesh runs every 2 frames (slower than hands, face moves less)
            if (faceMesh && faceFrameCount % 2 === 0) {
                faceMesh.send({ image: video })
            }
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

        // Init offscreen canvas for face pixel analysis
        offCanvas = document.createElement('canvas')

        loadingText.value = '加载 MediaPipe Hands...'
        await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js', 'Hands')

        loadingText.value = '加载 MediaPipe FaceMesh...'
        await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js', 'FaceMesh')

        loadingText.value = '初始化手势模型...'
        await initHands()

        loadingText.value = '初始化人脸模型...'
        await initFaceMesh()

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
    currentGestures.value = []
    currentFace.value = null
    latestFaceLandmarks = null
    hands = null
    faceMesh = null
    offCanvas = null
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

    &.status-idle {
        background: #2a2a3a;
        color: #888;
    }

    &.status-loading {
        background: #1a3a5c;
        color: #64b5f6;
    }

    &.status-active {
        background: #0d3320;
        color: #4caf50;
        animation: pulse 2s infinite;
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.6;
    }
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

    video,
    canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        z-index: 1;
        opacity: 0;
    }

    canvas {
        z-index: 2;
    }
}

// --- Face Badge (top of video) ---
.ar-face-badge {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 215, 0, 0.35);
    border-radius: 10px;
    padding: 8px 14px;

    .face-icon {
        font-size: 22px;
        line-height: 1;
    }

    .face-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .face-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
    }

    .ear-label {
        color: rgba(255, 215, 0, 0.7);
        font-weight: 500;
        min-width: 28px;
    }

    .ear-on {
        color: #ff9800;
        font-weight: 600;
    }

    .ear-off {
        color: #555;
    }

    .ear-conf {
        color: #444;
        font-size: 11px;
    }
}

// --- Gesture Badges (bottom of video) ---
.ar-gesture-badge {
    position: absolute;
    bottom: 16px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 229, 255, 0.3);
    border-radius: 12px;
    padding: 10px 16px;

    &.badge-left {
        left: 16px;
    }

    &.badge-right {
        right: 16px;
        border-color: rgba(105, 240, 174, 0.3);
    }

    .gesture-emoji {
        font-size: 36px;
        line-height: 1;
    }

    .gesture-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .gesture-header {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .gesture-label {
        font-size: 11px;
        font-weight: 600;
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
            border-radius: 2px;
            transition: width 0.2s;
        }
    }

    .gesture-conf {
        color: #00e5ff;
        font-size: 12px;
    }
}

// --- Loading ---
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
    to {
        transform: rotate(360deg);
    }
}

// --- Alerts ---
.ar-headphone-alert {
    margin-top: 12px;
    padding: 12px 20px;
    background: linear-gradient(135deg, rgba(255, 152, 0, 0.12), rgba(255, 87, 34, 0.12));
    border: 1px solid rgba(255, 152, 0, 0.5);
    border-radius: 10px;
    color: #ff9800;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
}

.ar-cup-alert {
    margin-top: 10px;
    padding: 12px 20px;
    background: linear-gradient(135deg, rgba(255, 193, 7, 0.12), rgba(255, 87, 34, 0.12));
    border: 1px solid rgba(255, 193, 7, 0.5);
    border-radius: 10px;
    color: #ffc107;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
}

// --- Controls ---
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

        &:hover {
            background: #00bcd4;
        }
    }

    &.btn-danger {
        background: #f44336;
        color: #fff;

        &:hover {
            background: #d32f2f;
        }
    }

    &.btn-secondary {
        background: #2a2a3a;
        color: #aaa;

        &:hover {
            background: #333;
            color: #fff;
        }
    }
}

// --- Gesture Guide ---
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

        span:first-child {
            font-size: 24px;
        }

        &.active {
            border-color: #00e5ff;
            background: rgba(0, 229, 255, 0.08);
            color: #00e5ff;
        }
    }
}

// --- History ---
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

        .history-label {
            font-size: 12px;
            font-weight: 500;
        }
    }
}

// --- Transitions ---
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(8px);
}
</style>
