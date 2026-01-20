<template>
  <div class="meeting-container">
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
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
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
  viewport
} = useVueFlow()

// 工具状态
const currentTool = ref<'select' | 'pan'>('select')
const snapToGrid = ref(true)

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

// 设置工具
const setTool = (tool: 'select' | 'pan') => {
  currentTool.value = tool
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
      const reader = new FileReader()
      reader.onload = (event: any) => {
        const newNode = {
          id: String(nodeIdCounter++),
          type: 'image',
          position: {
            x: Math.random() * 400 + 200,
            y: Math.random() * 300 + 150
          },
          data: {
            label: file.name,
            image: event.target.result
          }
        }
        addNodes([newNode])
      }
      reader.readAsDataURL(file)
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

// 小地图节点颜色
const getNodeColor = (node: any) => {
  if (node.type === 'sticky') return '#fbbf24'
  if (node.type === 'shape') return '#8b5cf6'
  if (node.type === 'image') return '#6366f1'
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

  .tool-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tool-divider {
    width: 1px;
    height: 24px;
    background: rgba(139, 92, 246, 0.2);
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
}

// Vue Flow 白板
.whiteboard {
  flex: 1;
  width: 100%;
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

// Vue Flow 主题覆盖
:deep(.vue-flow__minimap) {
  background: rgba(10, 14, 39, 0.9);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
}

:deep(.vue-flow__controls) {
  display: none;
}
</style>
