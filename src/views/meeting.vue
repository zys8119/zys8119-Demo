<template>
  <div
    class="meeting-container"
    @drop.prevent="handleFileDrop"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
  >
    <!-- 拖拽提示遮罩 -->
    <div class="drag-overlay" v-if="isDragging">
      <div class="drag-content">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="drag-icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="17 8 22 3 17 8"></polyline>
          <line x1="22" y1="3" x2="10" y2="15"></line>
        </svg>
        <p>释放文件以添加到白板</p>
        <span>支持图片、PDF等文件</span>
      </div>
    </div>

    <!-- 顶部工具栏 -->
    <div class="meeting-header">
      <div class="header-left">
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          返回
        </button>
        <div class="meeting-info">
          <h2>{{ meetingName }}</h2>
          <span class="meeting-id">会议号: {{ meetingId }}</span>
        </div>
      </div>
      <div class="header-right">
        <div class="participants">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{{ participantCount }} 人</span>
        </div>
        <button class="end-meeting-btn" @click="endMeeting">结束会议</button>
      </div>
    </div>

    <!-- 白板工具栏 -->
    <div class="whiteboard-toolbar">
      <div class="tool-group">
        <button
          class="tool-btn"
          :class="{ active: currentTool === 'select' }"
          @click="setTool('select')"
          title="选择工具"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
          </svg>
        </button>
        <button
          class="tool-btn"
          :class="{ active: currentTool === 'pan' }"
          @click="setTool('pan')"
          title="平移画布"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L12 22"></path>
            <path d="M2 12L22 12"></path>
            <polyline points="19 15 22 12 19 9"></polyline>
            <polyline points="9 5 12 2 15 5"></polyline>
            <polyline points="5 9 2 12 5 15"></polyline>
            <polyline points="15 19 12 22 9 19"></polyline>
          </svg>
        </button>
      </div>

      <div class="tool-divider"></div>

      <!-- 绘图工具组 -->
      <div class="tool-group">
        <button
          class="tool-btn"
          :class="{ active: drawingTool === 'pen' }"
          @click="setDrawingTool('pen')"
          title="手写笔"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </button>
        <button
          class="tool-btn"
          :class="{ active: drawingTool === 'line' }"
          @click="setDrawingTool('line')"
          title="直线"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="19" x2="19" y2="5"></line>
          </svg>
        </button>
        <button
          class="tool-btn"
          :class="{ active: drawingTool === 'arrow' }"
          @click="setDrawingTool('arrow')"
          title="箭头"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button
          class="tool-btn"
          :class="{ active: drawingTool === 'rectangle' }"
          @click="setDrawingTool('rectangle')"
          title="矩形"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
        </button>
        <button
          class="tool-btn"
          :class="{ active: drawingTool === 'circle' }"
          @click="setDrawingTool('circle')"
          title="圆形"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </button>
        <button
          class="tool-btn"
          :class="{ active: drawingTool === 'eraser' }"
          @click="setDrawingTool('eraser')"
          title="橡皮擦"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 20H7L3 16l5-5 7 7 5-5 1 1z"></path>
            <path d="M3.5 11.5l9 9"></path>
          </svg>
        </button>

        <!-- 颜色选择器 -->
        <div class="color-picker">
          <input
            type="color"
            v-model="drawingColor"
            class="color-input"
            title="选择颜色"
          />
          <div class="color-preview" :style="{ background: drawingColor }"></div>
        </div>

        <!-- 线宽选择 -->
        <div class="stroke-width-selector">
          <button
            v-for="width in [2, 4, 6, 8]"
            :key="width"
            class="stroke-btn"
            :class="{ active: strokeWidth === width }"
            @click="strokeWidth = width"
            :title="`线宽 ${width}px`"
          >
            <div class="stroke-preview" :style="{ height: width + 'px' }"></div>
          </button>
        </div>
      </div>

      <div class="tool-divider"></div>

      <!-- 节点工具组 -->
      <div class="tool-group">
        <button class="tool-btn" @click="addTextNode" title="添加文本">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
        </button>
        <button class="tool-btn" @click="addStickyNote" title="添加便签">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
        <button class="tool-btn" @click="addShapeNode" title="添加形状">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
        </button>
        <button class="tool-btn" @click="addImageNode" title="添加图片">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </button>
      </div>

      <div class="tool-divider"></div>

      <!-- 视图控制 -->
      <div class="tool-group">
        <button class="tool-btn" @click="zoomIn" title="放大">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </button>
        <span class="zoom-display">{{ Math.round(viewport.zoom * 100) }}%</span>
        <button class="tool-btn" @click="zoomOut" title="缩小">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </button>
        <button class="tool-btn" @click="fitView" title="适应画布">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>
        <button class="tool-btn" @click="clearCanvas" title="清空画布">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>

      <div class="tool-divider"></div>

      <div class="tool-group">
        <button class="tool-btn" @click="undo" :disabled="!canUndo" title="撤销">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 7v6h6"></path>
            <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path>
          </svg>
        </button>
        <button class="tool-btn" @click="redo" :disabled="!canRedo" title="重做">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 7v6h-6"></path>
            <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Vue Flow 无限白板 -->
    <div class="whiteboard-wrapper">
      <!-- 绘图画布层 -->
      <canvas
        ref="drawingCanvas"
        class="drawing-canvas"
        :class="{ active: isDrawingMode }"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
      ></canvas>

      <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        v-model:viewport="viewport"
        class="whiteboard"
        :default-viewport="{ zoom: 1, x: 0, y: 0 }"
        :min-zoom="0.1"
        :max-zoom="4"
        :snap-to-grid="snapToGrid"
        :snap-grid="[15, 15]"
        @node-double-click="onNodeDoubleClick"
        @pane-click="onPaneClick"
      >
        <!-- 背景网格 -->
        <Background
          :pattern-color="'rgba(139, 92, 246, 0.15)'"
          :gap="20"
          :size="1"
          variant="dots"
        />

        <!-- 控制按钮 -->
        <Controls
          :show-zoom="false"
          :show-fit-view="false"
          :show-interactive="false"
        />

        <!-- 小地图 -->
        <MiniMap
          :node-color="getNodeColor"
          :mask-color="'rgba(10, 14, 39, 0.8)'"
          pannable
          zoomable
        />

        <!-- 自定义节点模板 -->
        <template #node-text="{ data }">
          <div class="custom-node text-node" :style="{ background: data.color }">
            <div class="node-content" v-if="!data.editing">
              {{ data.label }}
            </div>
            <input
              v-else
              v-model="data.label"
              class="node-input"
              @blur="data.editing = false"
              @keyup.enter="data.editing = false"
              ref="nodeInput"
            />
          </div>
        </template>

        <template #node-sticky="{ data }">
          <div class="custom-node sticky-node" :style="{ background: data.color }">
            <div class="sticky-header">
              <div class="sticky-corner"></div>
            </div>
            <textarea
              v-model="data.label"
              class="sticky-textarea"
              placeholder="输入便签内容..."
              @input="autoResize($event)"
            />
          </div>
        </template>

        <template #node-shape="{ data }">
          <div class="custom-node shape-node" :style="{
            background: data.color,
            borderRadius: data.shape === 'circle' ? '50%' : '12px'
          }">
            <div class="node-content">
              {{ data.label }}
            </div>
          </div>
        </template>

        <template #node-image="{ data }">
          <div class="custom-node image-node">
            <img :src="data.image" :alt="data.label" />
            <div class="image-label">{{ data.label }}</div>
          </div>
        </template>

        <template #node-pdf="{ data }">
          <div class="custom-node pdf-node" @click="openPdfViewer(data)">
            <div class="pdf-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="pdf-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M10 12h4"></path>
                <path d="M10 16h4"></path>
              </svg>
              <span class="pdf-title">{{ data.label }}</span>
            </div>
            <div class="pdf-preview" v-if="data.thumbnail">
              <img :src="data.thumbnail" alt="PDF Preview" />
            </div>
            <div class="pdf-info">
              <span>{{ data.pages }} 页</span>
              <span>{{ formatFileSize(data.size) }}</span>
            </div>
          </div>
        </template>
      </VueFlow>
    </div>

    <!-- PDF 查看器 -->
    <div class="pdf-viewer-overlay" v-if="showPdfViewer" @click="closePdfViewer">
      <div class="pdf-viewer-container" @click.stop>
        <div class="pdf-viewer-header">
          <h3>{{ currentPdf?.label }}</h3>
          <button class="close-btn" @click="closePdfViewer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="pdf-viewer-content">
          <iframe
            v-if="currentPdf?.url"
            :src="currentPdf.url"
            class="pdf-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/controls/dist/style.css'
import '@vue-flow/minimap/dist/style.css'

const router = useRouter()
const route = useRoute()

// 从路由获取会议信息
const meetingId = computed(() => route.query.id || 'Unknown')
const meetingName = computed(() => route.query.name || '未命名会议')
const participantCount = ref(1)

// Vue Flow 实例
const {
  addNodes,
  fitView: vueFlowFitView,
  zoomIn: vueFlowZoomIn,
  zoomOut: vueFlowZoomOut,
  viewport,
  getNodes
} = useVueFlow()

// 工具状态
const currentTool = ref<'select' | 'pan'>('select')
const snapToGrid = ref(true)

// 绘图工具状态
const drawingTool = ref<'pen' | 'line' | 'arrow' | 'rectangle' | 'circle' | 'eraser' | null>(null)
const drawingColor = ref('#8b5cf6')
const strokeWidth = ref(4)
const isDrawingMode = computed(() => drawingTool.value !== null)

// 画布相关
const drawingCanvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let isDrawing = false
let startX = 0
let startY = 0
let currentPath: any[] = []
const drawnPaths = ref<any[]>([])

// 文件拖拽状态
const isDragging = ref(false)

// PDF 查看器
const showPdfViewer = ref(false)
const currentPdf = ref<any>(null)

// 节点和边
const nodes = ref<any[]>([
  {
    id: '1',
    type: 'text',
    position: { x: 250, y: 100 },
    data: { label: '欢迎使用无限白板', color: 'rgba(139, 92, 246, 0.1)', editing: false }
  },
  {
    id: '2',
    type: 'sticky',
    position: { x: 500, y: 100 },
    data: { label: '这是一个便签', color: '#fef3c7' }
  }
])

const edges = ref<any[]>([])

// 历史记录
const history = ref<any[]>([])
const historyIndex = ref(-1)
const canUndo = computed(() => historyIndex.value > 0)
const canRedo = computed(() => historyIndex.value < history.value.length - 1)

// 节点计数器
let nodeIdCounter = 3

// 初始化画布
onMounted(() => {
  if (drawingCanvas.value) {
    drawingCanvas.value.width = window.innerWidth
    drawingCanvas.value.height = window.innerHeight
    ctx = drawingCanvas.value.getContext('2d')

    window.addEventListener('resize', resizeCanvas)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
})

const resizeCanvas = () => {
  if (drawingCanvas.value && ctx) {
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    tempCanvas.width = drawingCanvas.value.width
    tempCanvas.height = drawingCanvas.value.height
    tempCtx?.drawImage(drawingCanvas.value, 0, 0)

    drawingCanvas.value.width = window.innerWidth
    drawingCanvas.value.height = window.innerHeight
    ctx.drawImage(tempCanvas, 0, 0)
  }
}

// 设置工具
const setTool = (tool: 'select' | 'pan') => {
  currentTool.value = tool
  drawingTool.value = null
}

// 设置绘图工具
const setDrawingTool = (tool: 'pen' | 'line' | 'arrow' | 'rectangle' | 'circle' | 'eraser') => {
  drawingTool.value = tool
  currentTool.value = 'select'
}

// 绘图功能
const startDrawing = (e: MouseEvent) => {
  if (!isDrawingMode.value || !ctx) return

  isDrawing = true
  startX = e.offsetX
  startY = e.offsetY
  currentPath = [{ x: startX, y: startY }]

  if (drawingTool.value === 'pen' || drawingTool.value === 'eraser') {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
  }
}

const draw = (e: MouseEvent) => {
  if (!isDrawing || !ctx || !isDrawingMode.value) return

  const x = e.offsetX
  const y = e.offsetY

  ctx.strokeStyle = drawingTool.value === 'eraser' ? '#0a0e27' : drawingColor.value
  ctx.lineWidth = drawingTool.value === 'eraser' ? strokeWidth.value * 3 : strokeWidth.value
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (drawingTool.value === 'pen' || drawingTool.value === 'eraser') {
    ctx.lineTo(x, y)
    ctx.stroke()
    currentPath.push({ x, y })
  } else if (drawingTool.value === 'line' || drawingTool.value === 'arrow') {
    redrawCanvas()
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(x, y)
    ctx.stroke()

    if (drawingTool.value === 'arrow') {
      drawArrowHead(startX, startY, x, y)
    }
  } else if (drawingTool.value === 'rectangle') {
    redrawCanvas()
    ctx.strokeRect(startX, startY, x - startX, y - startY)
  } else if (drawingTool.value === 'circle') {
    redrawCanvas()
    const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2))
    ctx.beginPath()
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI)
    ctx.stroke()
  }
}

const stopDrawing = () => {
  if (isDrawing && currentPath.length > 0) {
    drawnPaths.value.push({
      type: drawingTool.value,
      path: currentPath,
      color: drawingColor.value,
      width: strokeWidth.value
    })
  }
  isDrawing = false
  currentPath = []
}

const drawArrowHead = (fromX: number, fromY: number, toX: number, toY: number) => {
  if (!ctx) return

  const headLength = 15
  const angle = Math.atan2(toY - fromY, toX - fromX)

  ctx.beginPath()
  ctx.moveTo(toX, toY)
  ctx.lineTo(
    toX - headLength * Math.cos(angle - Math.PI / 6),
    toY - headLength * Math.sin(angle - Math.PI / 6)
  )
  ctx.moveTo(toX, toY)
  ctx.lineTo(
    toX - headLength * Math.cos(angle + Math.PI / 6),
    toY - headLength * Math.sin(angle + Math.PI / 6)
  )
  ctx.stroke()
}

const redrawCanvas = () => {
  if (!ctx || !drawingCanvas.value) return

  ctx.clearRect(0, 0, drawingCanvas.value.width, drawingCanvas.value.height)

  drawnPaths.value.forEach(path => {
    ctx!.strokeStyle = path.color
    ctx!.lineWidth = path.width
    ctx!.lineCap = 'round'
    ctx!.lineJoin = 'round'

    if (path.type === 'pen' && path.path.length > 0) {
      ctx!.beginPath()
      ctx!.moveTo(path.path[0].x, path.path[0].y)
      path.path.forEach((point: any) => {
        ctx!.lineTo(point.x, point.y)
      })
      ctx!.stroke()
    }
  })
}

const clearCanvas = () => {
  if (confirm('确定要清空画布吗？')) {
    if (ctx && drawingCanvas.value) {
      ctx.clearRect(0, 0, drawingCanvas.value.width, drawingCanvas.value.height)
      drawnPaths.value = []
    }
    nodes.value = []
    edges.value = []
  }
}

// 文件拖拽处理
const handleDragOver = (e: DragEvent) => {
  isDragging.value = true
}

const handleDragLeave = (e: DragEvent) => {
  isDragging.value = false
}

const handleFileDrop = async (e: DragEvent) => {
  isDragging.value = false

  const files = e.dataTransfer?.files
  if (!files || files.length === 0) return

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    await processFile(file)
  }
}

const processFile = async (file: File) => {
  const fileType = file.type

  if (fileType.startsWith('image/')) {
    // 处理图片
    const reader = new FileReader()
    reader.onload = (e: any) => {
      const newNode = {
        id: String(nodeIdCounter++),
        type: 'image',
        position: {
          x: Math.random() * 400 + 200,
          y: Math.random() * 300 + 150
        },
        data: {
          label: file.name,
          image: e.target.result
        }
      }
      addNodes([newNode])
    }
    reader.readAsDataURL(file)
  } else if (fileType === 'application/pdf') {
    // 处理 PDF
    const reader = new FileReader()
    reader.onload = async (e: any) => {
      const newNode = {
        id: String(nodeIdCounter++),
        type: 'pdf',
        position: {
          x: Math.random() * 400 + 200,
          y: Math.random() * 300 + 150
        },
        data: {
          label: file.name,
          url: e.target.result,
          size: file.size,
          pages: '?', // 实际应用中可以使用 pdf.js 来获取页数
          thumbnail: null
        }
      }
      addNodes([newNode])
    }
    reader.readAsDataURL(file)
  }
}

// PDF 查看器
const openPdfViewer = (data: any) => {
  currentPdf.value = data
  showPdfViewer.value = true
}

const closePdfViewer = () => {
  showPdfViewer.value = false
  currentPdf.value = null
}

// 格式化文件大小
const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

// 添加文本节点
const addTextNode = () => {
  const newNode = {
    id: String(nodeIdCounter++),
    type: 'text',
    position: {
      x: Math.random() * 400 + 200,
      y: Math.random() * 300 + 150
    },
    data: {
      label: '双击编辑文本',
      color: 'rgba(139, 92, 246, 0.1)',
      editing: false
    }
  }
  addNodes([newNode])
}

// 添加便签
const addStickyNote = () => {
  const colors = ['#fef3c7', '#dcfce7', '#dbeafe', '#fce7f3', '#fef2e8']
  const newNode = {
    id: String(nodeIdCounter++),
    type: 'sticky',
    position: {
      x: Math.random() * 400 + 200,
      y: Math.random() * 300 + 150
    },
    data: {
      label: '',
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }
  addNodes([newNode])
}

// 添加形状节点
const addShapeNode = () => {
  const shapes = ['rect', 'circle']
  const colors = [
    'rgba(139, 92, 246, 0.2)',
    'rgba(16, 185, 129, 0.2)',
    'rgba(239, 68, 68, 0.2)',
    'rgba(59, 130, 246, 0.2)'
  ]
  const newNode = {
    id: String(nodeIdCounter++),
    type: 'shape',
    position: {
      x: Math.random() * 400 + 200,
      y: Math.random() * 300 + 150
    },
    data: {
      label: '形状',
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }
  addNodes([newNode])
}

// 添加图片节点
const addImageNode = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.onchange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      processFile(file)
    }
  }
  input.click()
}

// 缩放控制
const zoomIn = () => {
  vueFlowZoomIn()
}

const zoomOut = () => {
  vueFlowZoomOut()
}

const fitView = () => {
  vueFlowFitView({ padding: 0.2, duration: 300 })
}

// 撤销重做
const undo = () => {
  if (canUndo.value) {
    historyIndex.value--
    // TODO: 实现撤销逻辑
  }
}

const redo = () => {
  if (canRedo.value) {
    historyIndex.value++
    // TODO: 实现重做逻辑
  }
}

// 节点双击编辑
const nodeInput = ref<HTMLInputElement | null>(null)
const onNodeDoubleClick = ({ node }: any) => {
  if (node.type === 'text') {
    node.data.editing = true
    nextTick(() => {
      nodeInput.value?.focus()
    })
  }
}

// 点击画布
const onPaneClick = () => {
  // 取消所有编辑状态
}

// 小地图节点颜色
const getNodeColor = (node: any) => {
  if (node.type === 'sticky') return '#fbbf24'
  if (node.type === 'shape') return '#8b5cf6'
  if (node.type === 'image') return '#6366f1'
  if (node.type === 'pdf') return '#ef4444'
  return '#a78bfa'
}

// 便签自动调整大小
const autoResize = (event: any) => {
  const textarea = event.target
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

// 返回首页
const goBack = () => {
  if (confirm('确定要离开会议吗？')) {
    router.push('/')
  }
}

// 结束会议
const endMeeting = () => {
  if (confirm('确定要结束会议吗？')) {
    router.push('/')
  }
}
</script>

<style scoped lang="less">
.meeting-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  overflow: hidden;
  position: relative;
}

// 拖拽遮罩
.drag-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  .drag-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.9);

    .drag-icon {
      width: 80px;
      height: 80px;
      color: rgba(139, 92, 246, 0.9);
      animation: bounce 1s ease-in-out infinite;
    }

    p {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    span {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

// 顶部工具栏
.meeting-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(10px);
  z-index: 100;

  .header-left {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .back-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(139, 92, 246, 0.3);
      border-radius: 8px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s;

      svg {
        width: 18px;
        height: 18px;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateX(-2px);
      }
    }

    .meeting-info {
      h2 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
      }

      .meeting-id {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;

    .participants {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.3);
      border-radius: 8px;
      color: rgba(139, 92, 246, 0.9);
      font-size: 0.9rem;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    .end-meeting-btn {
      padding: 0.5rem 1.5rem;
      background: linear-gradient(135deg, #ef4444, #dc2626);
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
      }
    }
  }
}

// 白板工具栏
.whiteboard-toolbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(10px);
  z-index: 100;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .tool-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .tool-divider {
    width: 1px;
    height: 24px;
    background: rgba(139, 92, 246, 0.2);
    flex-shrink: 0;
  }

  .tool-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.3s;
    flex-shrink: 0;

    svg {
      width: 18px;
      height: 18px;
      stroke-width: 2;
    }

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(139, 92, 246, 0.4);
      color: rgba(255, 255, 255, 0.9);
    }

    &.active {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
      border-color: rgba(139, 92, 246, 0.5);
      color: #fff;
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .zoom-display {
    padding: 0 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    font-weight: 600;
    min-width: 50px;
    text-align: center;
  }

  .color-picker {
    position: relative;
    width: 36px;
    height: 36px;

    .color-input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    .color-preview {
      width: 100%;
      height: 100%;
      border: 2px solid rgba(139, 92, 246, 0.3);
      border-radius: 8px;
      pointer-events: none;
      transition: all 0.3s;
    }

    &:hover .color-preview {
      border-color: rgba(139, 92, 246, 0.5);
    }
  }

  .stroke-width-selector {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;

    .stroke-btn {
      width: 32px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;

      .stroke-preview {
        width: 20px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 2px;
        transition: all 0.3s;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(139, 92, 246, 0.3);
      }

      &.active {
        background: rgba(139, 92, 246, 0.2);
        border-color: rgba(139, 92, 246, 0.5);

        .stroke-preview {
          background: #8b5cf6;
        }
      }
    }
  }
}

// 白板容器
.whiteboard-wrapper {
  flex: 1;
  position: relative;
  width: 100%;
  overflow: hidden;
}

// 绘图画布
.drawing-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  pointer-events: none;

  &.active {
    pointer-events: all;
    cursor: crosshair;
  }
}

// Vue Flow 白板
.whiteboard {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
}

// 自定义节点样式
.custom-node {
  padding: 1rem;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  min-width: 150px;

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.2);
  }
}

.text-node {
  .node-content {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    line-height: 1.5;
  }

  .node-input {
    width: 100%;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 6px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: rgba(139, 92, 246, 0.6);
      background: rgba(255, 255, 255, 0.15);
    }
  }
}

.sticky-node {
  min-width: 200px;
  min-height: 200px;
  border: none;
  position: relative;

  .sticky-header {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;

    .sticky-corner {
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 40px 40px 0;
      border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;
    }
  }

  .sticky-textarea {
    width: 100%;
    min-height: 180px;
    padding: 0.75rem;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.95rem;
    line-height: 1.6;
    resize: none;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
}

.shape-node {
  min-width: 120px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  .node-content {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }
}

.image-node {
  padding: 0;
  border: none;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;
  }

  .image-label {
    padding: 0.5rem;
    background: rgba(10, 14, 39, 0.9);
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    text-align: center;
  }
}

.pdf-node {
  min-width: 250px;
  max-width: 300px;
  padding: 0;
  border: 2px solid rgba(239, 68, 68, 0.3);
  cursor: pointer;

  &:hover {
    border-color: rgba(239, 68, 68, 0.5);
  }

  .pdf-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(239, 68, 68, 0.1);
    border-bottom: 1px solid rgba(239, 68, 68, 0.2);

    .pdf-icon {
      width: 24px;
      height: 24px;
      color: rgba(239, 68, 68, 0.9);
      flex-shrink: 0;
    }

    .pdf-title {
      flex: 1;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.95rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .pdf-preview {
    width: 100%;
    height: 150px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .pdf-info {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
  }
}

// PDF 查看器
.pdf-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  .pdf-viewer-container {
    width: 90vw;
    height: 90vh;
    background: rgba(10, 14, 39, 0.98);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .pdf-viewer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
      background: rgba(255, 255, 255, 0.03);

      h3 {
        margin: 0;
        color: #fff;
        font-size: 1.2rem;
      }

      .close-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        transition: all 0.3s;

        svg {
          width: 20px;
          height: 20px;
        }

        &:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.5);
          color: #fff;
        }
      }
    }

    .pdf-viewer-content {
      flex: 1;
      overflow: hidden;

      .pdf-iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
}

// Vue Flow 主题覆盖
:deep(.vue-flow__minimap) {
  background: rgba(10, 14, 39, 0.9);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
}

:deep(.vue-flow__controls) {
  display: none;
}

:deep(.vue-flow__node) {
  cursor: move;
}

:deep(.vue-flow__edge) {
  cursor: pointer;
}
</style>
