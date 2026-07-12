<template>
  <div class="watermark-remover-container">
    <header class="header">
      <h1>视频水印去除工具</h1>
      <p class="subtitle">上传视频、选择水印区域、一键去除</p>
    </header>

    <main class="main-content">
      <!-- 上传区域 -->
      <section class="upload-section">
        <div class="upload-box" @click="triggerFileInput" :class="{ dragging }">
          <input ref="fileInput" type="file" accept="video/*" @change="handleFileSelect"
            @dragover.prevent="dragging = true" @dragleave.prevent="dragging = false" @drop.prevent="handleDrop"
            hidden />
          <div v-if="!videoFile" class="upload-prompt">
            <svg class="upload-icon" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
            </svg>
            <p>拖拽视频或点击选择</p>
            <small>支持 MP4、WebM 等格式</small>
          </div>
          <div v-else class="file-info">
            <p>✓ {{ videoFile.name }}</p>
            <small>{{ (videoFile.size / 1024 / 1024).toFixed(2) }} MB</small>
            <button class="change-btn" @click.stop="resetVideo">更换视频</button>
          </div>
        </div>
      </section>

      <!-- 预览和水印框选区域 -->
      <section v-if="videoFile" class="preview-section">
        <div class="preview-container">
          <!-- 视频预览 -->
          <div class="video-preview-wrapper abs-r">
            <video ref="videoElement" class="video-preview" controls @loadedmetadata="onVideoLoaded"
              @play="startFrameExtraction" @pause="stopFrameExtraction">
              Your browser does not support the video tag.
            </video>
            <canvas ref="canvasOverlay" :class="{
              'pointer-events-none': !ctrlKeyPressed
            }" class="canvas-overlay  abs-content w-full! h-full!" @mousedown="startSelection"
              @mousemove="drawSelection" @mouseup="endSelection" @mouseleave="endSelection" />
          </div>

          <!-- 控制面板 -->
          <div class="control-panel">
            <div class="section-title">水印区域框选</div>

            <!-- 当前框选 -->
            <div class="current-selection">
              <p>
                <span class="shortcut-hint">按住 Ctrl (Windows) 或 Cmd (Mac)</span>
                在视频上拖拽框选水印区域
              </p>
              <div v-if="currentSelection" class="selection-info">
                <p>当前选择: X: {{ currentSelection.x }}px, Y: {{ currentSelection.y }}px</p>
                <p>大小: {{ currentSelection.width }}x{{ currentSelection.height }}px</p>
                <button class="cancel-btn" @click="currentSelection = null">
                  清除当前选择
                </button>
              </div>
            </div>

            <!-- 水印区域列表 -->
            <div class="watermarks-list">
              <div class="section-title">已标记水印区域 ({{ watermarks.length }})</div>
              <div v-if="watermarks.length === 0" class="empty-state">
                还未添加任何水印区域
              </div>
              <div v-else class="watermarks">
                <div v-for="(wm, idx) in watermarks" :key="idx" class="watermark-item">
                  <span class="watermark-preview" :style="{
                    backgroundColor: wm.color,
                  }" />
                  <div class="watermark-info">
                    <small>区域 {{ idx + 1 }}</small>
                    <p>{{ wm.width }}x{{ wm.height }}px</p>
                  </div>
                  <button class="remove-btn" @click="removeWatermark(idx)">
                    删除
                  </button>
                </div>
              </div>
            </div>

            <!-- 添加和处理按钮 -->
            <div class="button-group">
              <button v-if="currentSelection" class="btn btn-primary" @click="addWatermark">
                确认添加水印区域
              </button>
              <button v-if="watermarks.length > 0" class="btn btn-success" :disabled="processing" @click="processVideo">
                {{ processing ? '处理中...' : '开始处理视频' }}
              </button>
              <button v-if="processedVideoUrl" class="btn btn-download" @click="downloadVideo">
                ⬇️ 下载处理后的视频
              </button>
            </div>

            <!-- 进度显示 -->
            <div v-if="processing" class="progress-section">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: processingProgress + '%' }" />
              </div>
              <p class="progress-text">
                处理进度: {{ processingProgress }}% - {{ currentFrame }}/{{ totalFrames }} 帧
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 处理结果预览 -->
      <section v-if="processedVideoUrl" class="result-section">
        <div class="result-container">
          <h3>处理结果对比</h3>
          <div class="comparison">
            <div class="original">
              <p>原始视频</p>
              <video class="result-video" controls>
                <source :src="originalVideoUrl" />
              </video>
            </div>
            <div class="processed">
              <p>处理后视频</p>
              <video class="result-video" controls>
                <source :src="processedVideoUrl" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const fileInput = ref(null)
const videoElement = ref(null)
const canvasOverlay = ref(null)
const videoFile = ref(null)
const dragging = ref(false)
const currentSelection = ref(null)
const watermarks = ref([])
const processing = ref(false)
const processingProgress = ref(0)
const currentFrame = ref(0)
const totalFrames = ref(0)
const processedVideoUrl = ref(null)
const originalVideoUrl = ref(null)
const isSelecting = ref(false)
const startX = ref(0)
const startY = ref(0)
const canvasCtx = ref(null)
const extractionAnimationId = ref(null)
const ctrlKeyPressed = ref(false)
const selectionMode = ref(false) // 框选模式开关

// 触发文件输入
const triggerFileInput = () => {
  fileInput.value?.click()
}

// 处理文件选择
const handleFileSelect = (e) => {
  const file = e.target.files?.[0]
  if (file && file.type.startsWith('video/')) {
    videoFile.value = file
    // 使用 nextTick 等待 DOM 更新
    nextTick(() => {
      loadVideo(file)
    })
  }
}

// 处理拖拽
const handleDrop = (e) => {
  dragging.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('video/')) {
    videoFile.value = file
    // 使用 nextTick 等待 DOM 更新
    nextTick(() => {
      loadVideo(file)
    })
  }
}

// 加载视频
const loadVideo = (file) => {
  if (!videoElement.value) {
    console.error('Video element not ready')
    return
  }
  const url = URL.createObjectURL(file)
  originalVideoUrl.value = url
  videoElement.value.src = url
}

// 重置视频
const resetVideo = () => {
  videoFile.value = null
  watermarks.value = []
  currentSelection.value = null
  processedVideoUrl.value = null
  originalVideoUrl.value = null
  fileInput.value.value = ''
}

// 视频加载完成
const onVideoLoaded = () => {
  const video = videoElement.value
  const canvas = canvasOverlay.value

  if (!video || !canvas) return

  // 设置 canvas 的实际分辨率（内部尺寸）
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight

  // 同步 canvas 的显示尺寸与 video 元素
  canvas.style.width = video.clientWidth + 'px'
  canvas.style.height = video.clientHeight + 'px'

  canvasCtx.value = canvas.getContext('2d')
  totalFrames.value = Math.floor(video.duration * 30) // 假设30fps

  // 初始化画布背景
  redrawCanvas()
}

// 开始框选
const startSelection = (e) => {
  // 只在按住 Ctrl/Cmd 时才开始框选
  if (!ctrlKeyPressed.value) return

  e.preventDefault()
  e.stopPropagation()

  const canvas = canvasOverlay.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const canvasWidth = canvas.clientWidth
  const canvasHeight = canvas.clientHeight

  // 根据实际显示大小计算缩放比
  const scaleX = canvas.width / canvasWidth
  const scaleY = canvas.height / canvasHeight

  startX.value = (e.clientX - rect.left) * scaleX
  startY.value = (e.clientY - rect.top) * scaleY
  isSelecting.value = true
}

// 绘制框选
const drawSelection = (e) => {
  // 只在按住 Ctrl/Cmd 时才绘制
  if (!isSelecting.value || !ctrlKeyPressed.value) return

  e.preventDefault()
  e.stopPropagation()

  const canvas = canvasOverlay.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const canvasWidth = canvas.clientWidth
  const canvasHeight = canvas.clientHeight

  // 根据实际显示大小计算缩放比
  const scaleX = canvas.width / canvasWidth
  const scaleY = canvas.height / canvasHeight

  const currentX = (e.clientX - rect.left) * scaleX
  const currentY = (e.clientY - rect.top) * scaleY

  const width = currentX - startX.value
  const height = currentY - startY.value

  currentSelection.value = {
    x: Math.min(startX.value, currentX),
    y: Math.min(startY.value, currentY),
    width: Math.abs(width),
    height: Math.abs(height),
  }

  redrawCanvas()
}

// 结束框选
const endSelection = () => {
  isSelecting.value = false
}

// 重新绘制画布
const redrawCanvas = () => {
  if (!canvasCtx.value || !canvasOverlay.value) return

  const ctx = canvasCtx.value
  ctx.clearRect(0, 0, canvasOverlay.value.width, canvasOverlay.value.height)

  // 绘制已添加的水印区域
  watermarks.value.forEach((wm) => {
    ctx.strokeStyle = wm.color
    ctx.lineWidth = 2
    ctx.strokeRect(wm.x, wm.y, wm.width, wm.height)
  })

  // 绘制当前选择
  if (currentSelection.value) {
    const sel = currentSelection.value
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 3
    ctx.setLineDash([5, 5])
    ctx.strokeRect(sel.x, sel.y, sel.width, sel.height)
    ctx.setLineDash([])
  }
}

// 添加水印区域
const addWatermark = () => {
  if (!currentSelection.value) return

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
  const color = colors[watermarks.value.length % colors.length]

  watermarks.value.push({
    ...currentSelection.value,
    color,
  })

  currentSelection.value = null
  redrawCanvas()
}

// 删除水印
const removeWatermark = (idx) => {
  watermarks.value.splice(idx, 1)
  redrawCanvas()
}

// 开始帧提取
const startFrameExtraction = () => {
  const extractFrame = () => {
    if (videoElement.value && canvasCtx.value) {
      redrawCanvas()
    }
    extractionAnimationId.value = requestAnimationFrame(extractFrame)
  }
  extractionAnimationId.value = requestAnimationFrame(extractFrame)
}

// 停止帧提取
const stopFrameExtraction = () => {
  if (extractionAnimationId.value) {
    cancelAnimationFrame(extractionAnimationId.value)
  }
}

// 处理视频 - 移除水印
const processVideo = async () => {
  if (watermarks.value.length === 0) {
    alert('请先标记水印区域')
    return
  }

  processing.value = true
  processingProgress.value = 0
  currentFrame.value = 0

  try {
    const video = videoElement.value
    if (!video || !video.src) {
      throw new Error('视频未加载')
    }

    const fps = 30
    const duration = video.duration
    const totalFrames = Math.floor(duration * fps)

    // 创建离屏Canvas用于处理
    const processCanvas = document.createElement('canvas')
    processCanvas.width = video.videoWidth
    processCanvas.height = video.videoHeight
    const processCtx = processCanvas.getContext('2d')

    // 创建视频编码所需的数组
    const frames = []

    // 逐帧处理
    for (let frameIdx = 0; frameIdx < totalFrames; frameIdx++) {
      const frameTime = frameIdx / fps

      // 等待帧加载
      await new Promise((resolve) => {
        let resolved = false

        const onSeeked = () => {
          if (resolved) return
          resolved = true
          video.removeEventListener('seeked', onSeeked)

          try {
            // 绘制当前帧
            processCtx.drawImage(video, 0, 0)
            const imageData = processCtx.getImageData(
              0,
              0,
              processCanvas.width,
              processCanvas.height
            )

            // 应用水印移除算法
            watermarks.value.forEach((wm) => {
              removeWatermarkFromFrame(
                imageData,
                wm,
                processCanvas.width,
                processCanvas.height
              )
            })

            processCtx.putImageData(imageData, 0, 0)

            // 使用 PNG 格式获得更好的质量
            frames.push(processCanvas.toDataURL('image/png'))

            currentFrame.value = frameIdx + 1
            processingProgress.value = Math.round(
              ((frameIdx + 1) / totalFrames) * 100
            )

            resolve()
          } catch (error) {
            console.error('处理帧失败:', error)
            resolve()
          }
        }

        // 设置超时以防止卡住
        setTimeout(() => {
          if (!resolved) {
            resolved = true
            video.removeEventListener('seeked', onSeeked)
            console.warn(`帧 ${frameIdx} 加载超时，跳过处理`)
            currentFrame.value = frameIdx + 1
            processingProgress.value = Math.round(
              ((frameIdx + 1) / totalFrames) * 100
            )
            resolve()
          }
        }, 500)

        video.addEventListener('seeked', onSeeked, { once: true })
        video.currentTime = frameTime
      })
    }

    // 组合帧为视频
    console.log(`开始合成 ${frames.length} 帧...`)
    processedVideoUrl.value = await createVideoFromFrames(frames, fps)

    if (!processedVideoUrl.value) {
      throw new Error(
        '视频合成失败，您的浏览器可能不支持此功能'
      )
    }

    alert('✅ 视频处理完成！水印已成功去除。')
  } catch (error) {
    console.error('处理视频失败:', error)
    alert(`❌ 处理视频失败: ${error.message}`)
  } finally {
    processing.value = false
  }
}

// 移除单帧中的水印 - 改进版本
const removeWatermarkFromFrame = (imageData, watermark, width, height) => {
  const data = imageData.data
  const x1 = Math.floor(watermark.x)
  const y1 = Math.floor(watermark.y)
  const x2 = Math.ceil(watermark.x + watermark.width)
  const y2 = Math.ceil(watermark.y + watermark.height)

  // 确保坐标在范围内
  const startX = Math.max(0, x1)
  const startY = Math.max(0, y1)
  const endX = Math.min(width, x2)
  const endY = Math.min(height, y2)

  if (startX >= endX || startY >= endY) return

  // 第一步：使用边缘像素采样法
  const sampleEdgePixels = (x, y) => {
    let r = 0, g = 0, b = 0, count = 0

    // 从水印外边界采样
    const sampleRadius = 15
    for (let dx = -sampleRadius; dx <= sampleRadius; dx++) {
      for (let dy = -sampleRadius; dy <= sampleRadius; dy++) {
        const sx = x + dx
        const sy = y + dy

        // 只采样水印外的像素
        if (
          (sx < startX || sx >= endX || sy < startY || sy >= endY) &&
          sx >= 0 &&
          sx < width &&
          sy >= 0 &&
          sy < height
        ) {
          const sidx = (sy * width + sx) * 4
          const distance = Math.sqrt(dx * dx + dy * dy)
          // 使用高斯权重，距离越近权重越大
          const weight = Math.exp(-(distance * distance) / (2 * 25))

          r += data[sidx] * weight
          g += data[sidx + 1] * weight
          b += data[sidx + 2] * weight
          count += weight
        }
      }
    }

    if (count > 0) {
      return {
        r: Math.round(r / count),
        g: Math.round(g / count),
        b: Math.round(b / count),
      }
    }
    return null
  }

  // 第二步：填充水印区域
  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      const idx = (y * width + x) * 4
      const color = sampleEdgePixels(x, y)

      if (color) {
        data[idx] = color.r
        data[idx + 1] = color.g
        data[idx + 2] = color.b
        // 保持透明度不变
        data[idx + 3] = 255
      }
    }
  }

  // 第三步：平滑处理以减少伪影
  const smoothKernel = 3
  const tempData = new Uint8ClampedArray(data)

  for (let y = startY + smoothKernel; y < endY - smoothKernel; y++) {
    for (let x = startX + smoothKernel; x < endX - smoothKernel; x++) {
      const idx = (y * width + x) * 4

      // 只平滑水印区域内的像素
      let r = 0, g = 0, b = 0, count = 0

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx
          const ny = y + dy
          const nidx = (ny * width + nx) * 4

          // 如果邻近像素在水印区域内
          if (nx >= startX && nx < endX && ny >= startY && ny < endY) {
            r += tempData[nidx]
            g += tempData[nidx + 1]
            b += tempData[nidx + 2]
            count++
          }
        }
      }

      if (count > 0) {
        data[idx] = Math.round(r / count)
        data[idx + 1] = Math.round(g / count)
        data[idx + 2] = Math.round(b / count)
      }
    }
  }
}

// 从帧创建视频 - 使用 MediaRecorder
const createVideoFromFrames = (frames, fps) => {
  return new Promise((resolve) => {
    try {
      const canvas = document.createElement('canvas')
      canvas.width = videoElement.value.videoWidth
      canvas.height = videoElement.value.videoHeight

      const ctx = canvas.getContext('2d')
      const chunks = []

      // 检查是否支持 captureStream
      if (!canvas.captureStream) {
        console.error('浏览器不支持 Canvas.captureStream')
        resolve(null)
        return
      }

      const stream = canvas.captureStream(fps)

      // 尝试找到支持的编码
      let options = { videoBitsPerSecond: 5000000 }

      // 检查 MediaRecorder 支持
      if (!window.MediaRecorder) {
        console.error('浏览器不支持 MediaRecorder')
        resolve(null)
        return
      }

      const mediaRecorder = new MediaRecorder(stream, options)
      let recordingStarted = false

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' })
        const url = URL.createObjectURL(blob)
        resolve(url)
      }

      mediaRecorder.onerror = (error) => {
        console.error('MediaRecorder 错误:', error)
        resolve(null)
      }

      mediaRecorder.start()
      recordingStarted = true

      // 绘制每一帧
      let frameIdx = 0
      const drawNextFrame = () => {
        if (frameIdx < frames.length && recordingStarted) {
          const img = new Image()
          img.onerror = () => {
            console.error('图片加载失败')
            frameIdx++
            setTimeout(drawNextFrame, 1000 / fps)
          }
          img.onload = () => {
            ctx.drawImage(img, 0, 0)
            frameIdx++
            setTimeout(drawNextFrame, 1000 / fps)
          }
          img.src = frames[frameIdx]
        } else if (recordingStarted) {
          // 停止录制
          setTimeout(() => {
            mediaRecorder.stop()
            recordingStarted = false
          }, 500)
        }
      }

      drawNextFrame()
    } catch (error) {
      console.error('创建视频失败:', error)
      alert('创建视频失败，您的浏览器可能不支持此功能。请使用 Chrome、Firefox 或 Edge。')
      resolve(null)
    }
  })
}

// 下载视频
const downloadVideo = () => {
  if (!processedVideoUrl.value) return

  const link = document.createElement('a')
  link.href = processedVideoUrl.value
  link.download = 'video-watermark-removed.webm'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 清理资源
onMounted(() => {
  // 添加键盘事件监听
  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      ctrlKeyPressed.value = true
      // 更新 canvas cursor
      if (canvasOverlay.value) {
        canvasOverlay.value.style.cursor = 'crosshair'
      }
    }
  }

  const handleKeyUp = () => {
    ctrlKeyPressed.value = false
    isSelecting.value = false
    // 恢复 canvas cursor
    if (canvasOverlay.value) {
      canvasOverlay.value.style.cursor = 'default'
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
    if (extractionAnimationId.value) {
      cancelAnimationFrame(extractionAnimationId.value)
    }
    // 清理 object URLs
    if (originalVideoUrl.value) {
      URL.revokeObjectURL(originalVideoUrl.value)
    }
    if (processedVideoUrl.value) {
      URL.revokeObjectURL(processedVideoUrl.value)
    }
  }
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.watermark-remover-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  /* 禁用框选时的布局抖动 */
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5em;
  margin: 0 0 10px;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1em;
  opacity: 0.9;
  margin: 0;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  /* 防止框选时的布局抖动 */
  contain: layout;
}

/* 上传区域 */
.upload-section {
  margin-bottom: 30px;
}

.upload-box {
  background: white;
  border: 2px dashed #667eea;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-box:hover {
  border-color: #764ba2;
  background: #f8f9ff;
}

.upload-box.dragging {
  background: #f0f0ff;
  border-color: #764ba2;
  transform: scale(1.02);
}

.upload-icon {
  width: 50px;
  height: 50px;
  color: #667eea;
  margin-bottom: 15px;
}

.upload-prompt p {
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
}

.upload-prompt small {
  color: #999;
}

.file-info {
  color: #333;
}

.file-info p {
  font-weight: 600;
  margin: 0 0 5px;
}

.file-info small {
  color: #999;
  display: block;
  margin-bottom: 15px;
}

.change-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background 0.3s;
}

.change-btn:hover {
  background: #764ba2;
}

/* 预览区域 */
.preview-section {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  /* 防止框选时的布局改变 */
  contain: layout style;
}

.preview-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  width: 100%;
  overflow: hidden;
}

.video-preview-wrapper {
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  /* 防止框选时的抖动 */
  contain: layout style paint;
}

.video-preview {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
  object-fit: contain;
}

.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  cursor: default;
  width: 100%;
  height: 100%;
  display: block;
  /* 防止框选时的布局抖动 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: none;
  /* 防止图像被拖动 */
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
}

.canvas-overlay:hover {
  cursor: default;
}

.control-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 防止框选时内容变化导致的抖动 */
  overflow-y: auto;
  max-height: calc(100vh - 300px);
}

.section-title {
  font-weight: 600;
  color: #333;
  font-size: 1.1em;
  margin: 0;
}

.current-selection {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
}

.current-selection p {
  margin: 5px 0;
  color: #666;
  font-size: 0.9em;
}

.shortcut-hint {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  margin-right: 5px;
}

.selection-info {
  margin-top: 10px;
}

.cancel-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
}

.watermarks-list {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
}

.empty-state {
  color: #999;
  text-align: center;
  padding: 20px;
}

.watermarks {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.watermark-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 10px;
  border-radius: 6px;
}

.watermark-preview {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  flex-shrink: 0;
}

.watermark-info {
  flex: 1;
  min-width: 0;
}

.watermark-info small {
  color: #999;
}

.watermark-info p {
  margin: 2px 0;
  color: #333;
  font-size: 0.9em;
}

.remove-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8em;
  flex-shrink: 0;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

.btn-success {
  background: #51cf66;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background: #40c057;
  transform: translateY(-2px);
}

.btn-success:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-download {
  background: #ff922b;
  color: white;
}

.btn-download:hover {
  background: #fd7e14;
  transform: translateY(-2px);
}

.progress-section {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s;
}

.progress-text {
  font-size: 0.9em;
  color: #666;
  margin: 0;
}

/* 结果区域 */
.result-section {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.result-container h3 {
  text-align: center;
  color: #333;
  margin: 0 0 20px;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.original,
.processed {
  text-align: center;
}

.original p,
.processed p {
  color: #666;
  margin: 0 0 10px;
  font-weight: 600;
}

.result-video {
  width: 100%;
  border-radius: 8px;
  background: #000;
}

@media (max-width: 768px) {
  .preview-container {
    grid-template-columns: 1fr;
  }

  .comparison {
    grid-template-columns: 1fr;
  }

  .header h1 {
    font-size: 1.8em;
  }

  .upload-box {
    padding: 30px;
  }
}
</style>
