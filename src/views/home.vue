<template>
  <div
    class="meeting-hub abs-content! of-auto"
    @drop.prevent="handleFileDrop"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="handleDragLeave"
    @dragenter.prevent="isDragging = true"
  >
    <!-- 全局拖拽蒙层 -->
    <div class="drag-overlay" v-if="isDragging">
      <div class="drag-content">
        <div class="drag-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <polyline points="9 15 12 12 15 15"></polyline>
          </svg>
        </div>
        <p class="drag-text">释放文件以上传</p>
        <p class="drag-hint">支持 PDF、Word、TXT、Markdown 文件</p>
      </div>
    </div>

    <!-- 动态背景网格 -->
    <div class="bg-grid"></div>

    <!-- AI粒子效果背景 -->
    <div class="particle-container">
      <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
    </div>

    <!-- 主容器 -->
    <div class="p-15px flex-center flex-col abs-content! h-[calc(100vh-30px)]! w-[calc(100vw-30px)]!">
      <div class="main-container h-100% w-100% flex-center-start flex-col">
        <!-- 顶部导航 -->
        <nav class="top-nav w-100%!">
          <div class="logo-area">
            <div class="ai-icon">
              <div class="pulse-ring"></div>
              <span class="icon-core">AI</span>
            </div>
            <span class="brand-name">SmartMeet</span>
          </div>

          <div class="nav-actions">
            <button class="nav-btn" @click="showMyMeetings">
              我的会议
              <span class="badge" v-if="myMeetingsCount > 0">{{ myMeetingsCount }}</span>
            </button>
            <button class="nav-btn" @click="showHistory">历史记录</button>
            <div class="avatar-btn">
              <div class="avatar"></div>
            </div>
          </div>
        </nav>

        <!-- 中心创建区域 -->
        <div class="create-zone flex-1 w-100%">
          <!-- AI智能提示 -->
          <div class="ai-greeting">
            <div class="ai-avatar">
              <div class="avatar-glow"></div>
              <span class="ai-icon-small">✨</span>
            </div>
            <p class="greeting-text">
              您好！我是您的AI会议助手，
              <span class="highlight">只需说出想法</span>，即可创建会议
            </p>
          </div>

          <!-- 智能输入框 -->
          <div class="smart-input-area">
            <div class="input-wrapper">
              <div class="ai-indicator">
                <div class="ai-pulse"></div>
              </div>

              <!-- 模板模式 -->
              <div class="template-input" v-if="templateMode">
                <span class="template-text">在</span>
                <button class="template-field" :class="{ active: activeField === 'time' }" @click="editField('time')">
                  {{ templateData.time }}
                </button>
                <span class="template-text">，和</span>
                <button class="template-field" :class="{ active: activeField === 'participants' }"
                  @click="editField('participants')">
                  {{ templateData.participants }}
                </button>
                <span class="template-text">讨论</span>
                <button class="template-field" :class="{ active: activeField === 'topic' }" @click="editField('topic')">
                  {{ templateData.topic }}
                </button>
                <button class="clear-template" @click="clearTemplate">×</button>
              </div>

              <!-- 自由输入模式 -->
              <input v-else type="text" class="smart-input" placeholder="「周三下午两点，和产品团队讨论新功能」或「开个早会」"
                v-model="meetingInput" @keyup.enter="quickCreate" @focus="handleInputFocus" />

              <div class="voice-btn" @click="startVoiceInput">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
            </div>

            <!-- 字段编辑面板 -->
            <div class="field-editor" v-if="activeField">
              <div class="editor-header">
                <span>编辑{{ fieldLabels[activeField] }}</span>
                <button @click="closeEditor">×</button>
              </div>
              <div class="editor-content">
                <!-- 时间字段 -->
                <div v-if="activeField === 'time'" class="field-options">
                  <button class="option-btn" v-for="opt in timeOptions" :key="opt" @click="updateField('time', opt)">
                    {{ opt }}
                  </button>
                  <input type="text" class="custom-input" placeholder="自定义时间"
                    @keyup.enter="updateField('time', ($event.target as HTMLInputElement).value)" />
                </div>

                <!-- 参与者字段 -->
                <div v-if="activeField === 'participants'" class="field-options">
                  <button class="option-btn" v-for="opt in participantOptions" :key="opt"
                    @click="updateField('participants', opt)">
                    {{ opt }}
                  </button>
                  <input type="text" class="custom-input" placeholder="输入参与者"
                    @keyup.enter="updateField('participants', ($event.target as HTMLInputElement).value)" />
                </div>

                <!-- 主题字段 -->
                <div v-if="activeField === 'topic'" class="field-options">
                  <button class="option-btn" v-for="opt in topicOptions" :key="opt" @click="updateField('topic', opt)">
                    {{ opt }}
                  </button>
                  <input type="text" class="custom-input" placeholder="输入会议主题"
                    @keyup.enter="updateField('topic', ($event.target as HTMLInputElement).value)" />
                </div>
              </div>
            </div>

            <!-- AI智能建议 -->
            <div class="ai-suggestions" v-if="showSuggestions && !templateMode">
              <div class="suggestion-item" v-for="(sug, idx) in suggestions" :key="idx" @click="applySuggestion(sug)">
                <span class="sug-icon">🤖</span>
                <span class="sug-text">{{ sug.text }}</span>
              </div>
            </div>

            <!-- 模板建议 -->
            <div class="template-suggestions" v-if="!templateMode && meetingInput.length === 0">
              <div class="template-tip">💡 试试快速模板：</div>
              <div class="template-quick-btns">
                <button class="quick-template-btn" @click="useTemplate('standup')">
                  早会
                </button>
                <button class="quick-template-btn" @click="useTemplate('review')">
                  评审会
                </button>
                <button class="quick-template-btn" @click="useTemplate('brainstorm')">
                  头脑风暴
                </button>
              </div>
            </div>
          </div>

          <!-- 快速创建按钮 -->
          <button class="create-btn" @click="quickCreate">
            <span class="btn-glow"></span>
            <span class="btn-text">AI 智能创建</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </button>

          <!-- 或分割线 -->
          <div class="divider">
            <span>或</span>
          </div>

          <!-- 快捷操作卡片 -->
          <div class="quick-actions">
            <div class="action-card" @click="instantMeeting">
              <div class="card-icon instant">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>即时会议</h3>
              <p>一键发起，即刻开始</p>
            </div>

            <div class="action-card" @click="scheduleMeeting">
              <div class="card-icon schedule">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3>预约会议</h3>
              <p>智能日程安排</p>
            </div>

            <div
              class="action-card file-upload-area"
              @click="triggerFileUpload"
              @drop.prevent="handleFileDrop"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              :class="{ dragging: isDragging }"
            >
              <div class="card-icon file">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <polyline points="9 15 12 12 15 15"></polyline>
                </svg>
              </div>
              <h3>文件创会</h3>
              <p>{{ isDragging ? '释放文件上传' : '拖拽或点击上传' }}</p>
              <input ref="fileInput" type="file" accept=".pdf,.doc,.docx,.txt,.md" style="display: none"
                @change="handleFileUpload" />
            </div>

            <div class="action-card" @click="joinMeeting">
              <div class="card-icon join">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </div>
              <h3>加入会议</h3>
              <p>输入会议号快速加入</p>
            </div>
          </div>

          <!-- 文件上传进度 -->
          <div class="file-upload-progress" v-if="uploadingFile">
            <div class="progress-header">
              <div class="file-info">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="file-icon">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                <div class="file-details">
                  <span class="file-name">{{ uploadFileName }}</span>
                  <span class="file-size">{{ uploadFileSize }}</span>
                </div>
              </div>
              <button class="cancel-btn" @click="cancelUpload">×</button>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
            </div>
            <p class="progress-text">{{ uploadStatusText }}</p>
          </div>
        </div>

        <!-- 底部状态栏 -->
        <div class="status-bar w-full">
          <div class="status-item">
            <span class="status-dot online"></span>
            <span>系统正常</span>
          </div>
          <div class="status-item">
            <span>AI助手在线</span>
          </div>
          <div class="status-item">
            <span>今日已创建 {{ todayMeetings }} 场会议</span>
          </div>
        </div>
      </div>

      <!-- 会议大纲侧边栏 -->
      <transition name="slide-left">
        <div class="meeting-sidebar" v-if="showSidebar">
          <div class="sidebar-header">
            <h3>会议大纲</h3>
            <button class="close-btn" @click="closeSidebar">×</button>
          </div>

          <div class="sidebar-content">
            <!-- 附件信息 -->
            <div class="attachment-info">
              <div class="attachment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div class="attachment-details">
                <p class="attachment-name">{{ uploadFileName }}</p>
                <p class="attachment-size">{{ uploadFileSize }}</p>
              </div>
            </div>

            <!-- AI生成的会议大纲 -->
            <div class="outline-section">
              <h4>AI智能生成大纲</h4>
              <ul class="outline-list">
                <li
                  v-for="(item, index) in meetingOutline"
                  :key="index"
                  class="outline-item"
                >
                  <span class="outline-number">{{ index + 1 }}</span>
                  <span class="outline-text">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- 会议信息预览 -->
            <div class="meeting-preview">
              <h4>会议信息</h4>
              <div class="preview-item">
                <span class="label">时间：</span>
                <span class="value">{{ templateData.time }}</span>
              </div>
              <div class="preview-item">
                <span class="label">参与者：</span>
                <span class="value">{{ templateData.participants }}</span>
              </div>
              <div class="preview-item">
                <span class="label">主题：</span>
                <span class="value">{{ templateData.topic }}</span>
              </div>
            </div>

            <!-- 操作按钮 -->
            <div class="sidebar-actions">
              <button class="action-btn primary" @click="confirmMeeting">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                确认创建
              </button>
              <button class="action-btn secondary" @click="editMeeting">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                编辑调整
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts" path="/">
import { ref, onMounted } from 'vue'

// 基础状态
const meetingInput = ref('')
const showSuggestions = ref(false)
const todayMeetings = ref(12)

// 导航相关
const myMeetingsCount = ref(3)

// 模板模式相关
const templateMode = ref(false)
const activeField = ref<'time' | 'participants' | 'topic' | null>(null)

// 文件上传相关
const fileInput = ref<HTMLInputElement | null>(null)
const uploadingFile = ref(false)
const uploadFileName = ref('')
const uploadFileSize = ref('')
const uploadProgress = ref(0)
const uploadStatusText = ref('')
const isDragging = ref(false)

// 侧边栏相关
const showSidebar = ref(false)
const meetingOutline = ref<string[]>([])

// 模板数据
const templateData = ref({
  time: '明天下午2点',
  participants: '产品团队',
  topic: '新功能讨论'
})

// 字段标签
const fieldLabels = {
  time: '时间',
  participants: '参与者',
  topic: '主题'
}

// 选项数据
const timeOptions = ref(['今天下午3点', '明天上午10点', '明天下午2点', '后天上午9点'])
const participantOptions = ref(['产品团队', '技术团队', '设计团队', '全体成员'])
const topicOptions = ref(['新功能讨论', '项目评审', '周例会', 'Sprint规划'])

// AI建议数据
interface Suggestion {
  text: string
  template?: {
    time: string
    participants: string
    topic: string
  }
}

const suggestions = ref<Suggestion[]>([
  {
    text: '识别到您的日历：明天上午10点有空档，要创建会议吗？',
    template: {
      time: '明天上午10点',
      participants: '待定',
      topic: '会议主题'
    }
  },
  {
    text: '根据历史，您通常在这个时间开产品会',
    template: {
      time: '今天下午3点',
      participants: '产品团队',
      topic: '产品会'
    }
  },
  {
    text: '检测到5位成员在线，可立即发起会议',
    template: {
      time: '立即开始',
      participants: '在线成员',
      topic: '即时会议'
    }
  }
])

// 粒子动画样式生成
const getParticleStyle = (index: number) => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDelay = Math.random() * 5
  const randomDuration = 3 + Math.random() * 4

  return {
    left: `${randomX}%`,
    top: `${randomY}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  }
}

// 使用模板
const useTemplate = (type: string) => {
  const templates = {
    standup: {
      time: '明天上午9点',
      participants: '开发团队',
      topic: '每日站会'
    },
    review: {
      time: '本周五下午3点',
      participants: '项目组全员',
      topic: '项目评审会'
    },
    brainstorm: {
      time: '明天下午2点',
      participants: '产品+设计',
      topic: '头脑风暴'
    }
  }

  const template = templates[type as keyof typeof templates]
  if (template) {
    templateData.value = { ...template }
    templateMode.value = true
  }
}

// 应用AI建议
const applySuggestion = (suggestion: Suggestion) => {
  if (suggestion.template) {
    templateData.value = { ...suggestion.template }
    templateMode.value = true
    showSuggestions.value = false
  }
}

// 编辑字段
const editField = (field: 'time' | 'participants' | 'topic') => {
  activeField.value = activeField.value === field ? null : field
}

// 更新字段值
const updateField = (field: 'time' | 'participants' | 'topic', value: string) => {
  if (value.trim()) {
    templateData.value[field] = value
    activeField.value = null
  }
}

// 关闭编辑器
const closeEditor = () => {
  activeField.value = null
}

// 清除模板
const clearTemplate = () => {
  templateMode.value = false
  activeField.value = null
  meetingInput.value = ''
}

// 输入框获得焦点
const handleInputFocus = () => {
  showSuggestions.value = true
}

// AI智能创建
const quickCreate = () => {
  if (templateMode.value) {
    // 使用模板创建
    console.log('使用模板创建会议:', templateData.value)
  } else if (!meetingInput.value.trim()) {
    showSuggestions.value = true
    return
  } else {
    // 使用自然语言创建
    console.log('AI创建会议:', meetingInput.value)
  }
}

// 语音输入
const startVoiceInput = () => {
  console.log('启动语音输入')
  // 语音识别逻辑
}

// 即时会议
const instantMeeting = () => {
  console.log('创建即时会议')
}

// 预约会议
const scheduleMeeting = () => {
  console.log('预约会议')
}

// 触发文件上传
const triggerFileUpload = () => {
  fileInput.value?.click()
}

// 处理文件上传
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  uploadingFile.value = true
  uploadFileName.value = file.name
  uploadFileSize.value = formatFileSize(file.size)
  uploadProgress.value = 0
  uploadStatusText.value = '正在分析文件...'

  // 模拟文件上传和AI分析过程
  simulateFileUpload(file)
}

// 格式化文件大小
const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

// 模拟文件上传
const simulateFileUpload = (file: File) => {
  const interval = setInterval(() => {
    uploadProgress.value += 10

    if (uploadProgress.value === 30) {
      uploadStatusText.value = '正在上传文件...'
    } else if (uploadProgress.value === 60) {
      uploadStatusText.value = 'AI正在解析文档内容...'
    } else if (uploadProgress.value === 90) {
      uploadStatusText.value = '正在生成会议信息...'
    } else if (uploadProgress.value >= 100) {
      clearInterval(interval)
      uploadStatusText.value = '解析完成！'

      // 模拟AI解析结果，自动填充模板和大纲
      setTimeout(() => {
        templateData.value = {
          time: '明天下午3点',
          participants: '文档相关人员',
          topic: `${file.name.replace(/\.[^/.]+$/, '')} 讨论会`
        }

        // 生成会议大纲
        meetingOutline.value = [
          '项目背景介绍与目标说明',
          '当前进度汇报及问题分析',
          '技术方案讨论与评审',
          '资源分配与时间规划',
          '风险识别与应对策略',
          '下一步行动计划确定'
        ]

        templateMode.value = true
        uploadingFile.value = false
        showSidebar.value = true // 显示侧边栏

        // 重置文件输入
        if (fileInput.value) {
          fileInput.value.value = ''
        }
      }, 500)
    }
  }, 200)
}

// 处理文件拖拽
const handleFileDrop = (event: DragEvent) => {
  isDragging.value = false
  const file = event.dataTransfer?.files[0]

  if (!file) return

  // 检查文件类型
  const validTypes = ['.pdf', '.doc', '.docx', '.txt', '.md']
  const fileExt = '.' + file.name.split('.').pop()?.toLowerCase()

  if (!validTypes.includes(fileExt)) {
    alert('请上传 PDF、Word、TXT 或 Markdown 文件')
    return
  }

  uploadingFile.value = true
  uploadFileName.value = file.name
  uploadFileSize.value = formatFileSize(file.size)
  uploadProgress.value = 0
  uploadStatusText.value = '正在分析文件...'

  simulateFileUpload(file)
}

// 取消上传
const cancelUpload = () => {
  uploadingFile.value = false
  uploadProgress.value = 0

  // 重置文件输入
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// 导航功能
const showMyMeetings = () => {
  console.log('显示我的会议')
  // TODO: 实现我的会议列表
}

const showHistory = () => {
  console.log('显示历史记录')
  // TODO: 实现历史记录列表
}

// 加入会议
const joinMeeting = () => {
  console.log('加入会议')
  // TODO: 实现加入会议对话框
}

// 侧边栏操作
const closeSidebar = () => {
  showSidebar.value = false
}

const confirmMeeting = () => {
  console.log('确认创建会议:', {
    ...templateData.value,
    outline: meetingOutline.value,
    attachment: uploadFileName.value
  })
  showSidebar.value = false
  // TODO: 实际创建会议逻辑
}

const editMeeting = () => {
  showSidebar.value = false
  // 保持模板模式，让用户编辑
  console.log('编辑会议信息')
}

onMounted(() => {
  // 启动动画效果
})
</script>

<style scoped lang="less">
.meeting-hub {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1420 100%);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

// 背景网格
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(50px, 50px);
  }
}

// AI粒子效果
.particle-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent);
  border-radius: 50%;
  animation: float linear infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(-100vh) scale(0.5);
  }
}

// 主容器
.main-container {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
}

// 顶部导航
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-shrink: 0;

  .logo-area {
    display: flex;
    align-items: center;
    gap: 1rem;

    .ai-icon {
      position: relative;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;

      .pulse-ring {
        position: absolute;
        inset: -4px;
        border: 2px solid rgba(139, 92, 246, 0.5);
        border-radius: 50%;
        animation: pulse 2s ease-out infinite;
      }

      .icon-core {
        position: relative;
        z-index: 1;
        font-size: 1.2rem;
        font-weight: 700;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      letter-spacing: -0.5px;
    }
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .nav-btn {
      padding: 0.5rem 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transition: all 0.3s;
      backdrop-filter: blur(10px);

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(139, 92, 246, 0.5);
        color: #fff;
      }
    }

    .avatar-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #8b5cf6, #6366f1);
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

// 创建区域
.create-zone {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  min-height: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.3);
    border-radius: 3px;

    &:hover {
      background: rgba(139, 92, 246, 0.5);
    }
  }
}

// AI问候
.ai-greeting {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-shrink: 0;

  .ai-avatar {
    position: relative;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;

    .avatar-glow {
      position: absolute;
      inset: -8px;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%);
      border-radius: 50%;
      animation: glow 2s ease-in-out infinite;
    }

    .ai-icon-small {
      position: relative;
      font-size: 2rem;
      animation: float-gentle 3s ease-in-out infinite;
    }
  }

  .greeting-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;

    .highlight {
      color: #8b5cf6;
      font-weight: 600;
    }
  }
}

@keyframes glow {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes float-gentle {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

// 智能输入区
.smart-input-area {
  width: 100%;
  margin-bottom: 1.5rem;
  flex-shrink: 0;

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    padding: 1rem 1.5rem;
    backdrop-filter: blur(20px);
    transition: all 0.3s;

    &:focus-within {
      border-color: rgba(139, 92, 246, 0.6);
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
    }

    .ai-indicator {
      position: relative;
      width: 10px;
      height: 10px;
      margin-right: 1rem;

      .ai-pulse {
        width: 100%;
        height: 100%;
        background: #8b5cf6;
        border-radius: 50%;
        animation: pulse-dot 1.5s ease-in-out infinite;
      }
    }

    // 模板输入
    .template-input {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;

      .template-text {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
      }

      .template-field {
        padding: 0.4rem 1rem;
        background: rgba(139, 92, 246, 0.2);
        border: 2px solid rgba(139, 92, 246, 0.4);
        border-radius: 12px;
        color: #fff;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.6);
          transform: translateY(-2px);
        }

        &.active {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }
      }

      .clear-template {
        margin-left: auto;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid rgba(239, 68, 68, 0.4);
        border-radius: 50%;
        color: #ef4444;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(239, 68, 68, 0.3);
          transform: rotate(90deg);
        }
      }
    }

    .smart-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-size: 1.1rem;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    .voice-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8b5cf6, #6366f1);
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }

      svg {
        width: 20px;
        height: 20px;
        color: #fff;
      }
    }
  }

  // 字段编辑器
  .field-editor {
    margin-top: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 16px;
    backdrop-filter: blur(20px);
    overflow: hidden;
    animation: slideDown 0.3s ease-out;

    .editor-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: rgba(139, 92, 246, 0.1);
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);

      span {
        color: #fff;
        font-weight: 600;
      }

      button {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: #fff;
          transform: rotate(90deg);
        }
      }
    }

    .editor-content {
      padding: 1.5rem;

      .field-options {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;

        .option-btn {
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            background: rgba(139, 92, 246, 0.2);
            border-color: rgba(139, 92, 246, 0.5);
            transform: translateY(-2px);
          }
        }

        .custom-input {
          flex: 1;
          min-width: 200px;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: #fff;
          outline: none;
          transition: all 0.3s;

          &::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          &:focus {
            border-color: rgba(139, 92, 246, 0.5);
            background: rgba(255, 255, 255, 0.08);
          }
        }
      }
    }
  }

  .ai-suggestions {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .suggestion-item {
      padding: 0.75rem 1rem;
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 12px;
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      &:hover {
        background: rgba(139, 92, 246, 0.2);
        transform: translateX(8px);
      }

      .sug-icon {
        font-size: 1.2rem;
      }
    }
  }

  // 模板建议
  .template-suggestions {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.15);
    border-radius: 16px;

    .template-tip {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
    }

    .template-quick-btns {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;

      .quick-template-btn {
        padding: 0.5rem 1.5rem;
        background: rgba(139, 92, 246, 0.2);
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 12px;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          border-color: transparent;
          transform: translateY(-2px);
        }
      }
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-dot {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

// 创建按钮
.create-btn {
  position: relative;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  border: none;
  border-radius: 16px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);

    .btn-glow {
      opacity: 1;
    }
  }

  .btn-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }

  .btn-text {
    position: relative;
  }

  .btn-icon {
    width: 20px;
    height: 20px;
    animation: lightning 1.5s ease-in-out infinite;
  }
}

@keyframes lightning {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

// 分割线
.divider {
  margin: 1.5rem 0;
  width: 100%;
  text-align: center;
  position: relative;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 45%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2));
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 45%;
    height: 1px;
    background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.2));
  }

  span {
    color: rgba(255, 255, 255, 0.5);
    background: #0a0e27;
    padding: 0 1rem;
  }
}

// 快捷操作卡片
.quick-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  flex-shrink: 0;

  .action-card {
    padding: 1.5rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(139, 92, 246, 0.5);
      transform: translateY(-8px);

      .card-icon {
        transform: scale(1.1) rotate(5deg);
      }
    }

    // 文件拖拽区域
    &.file-upload-area {
      position: relative;

      &.dragging {
        background: rgba(236, 72, 153, 0.1);
        border-color: rgba(236, 72, 153, 0.6);
        border-style: dashed;

        .card-icon {
          transform: scale(1.2);
        }
      }
    }

    .card-icon {
      width: 50px;
      height: 50px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      transition: transform 0.4s;

      svg {
        width: 28px;
        height: 28px;
        stroke-width: 2;
      }

      &.instant {
        background: linear-gradient(135deg, #10b981, #059669);
        color: #fff;
      }

      &.schedule {
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: #fff;
      }

      &.file {
        background: linear-gradient(135deg, #ec4899, #d946ef);
        color: #fff;
      }
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }
  }
}

// 文件上传进度
.file-upload-progress {
  width: 100%;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  animation: slideDown 0.3s ease-out;

  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .file-info {
      display: flex;
      align-items: center;
      gap: 1rem;

      .file-icon {
        width: 40px;
        height: 40px;
        color: #ec4899;
      }

      .file-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .file-name {
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
        }

        .file-size {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }
      }
    }

    .cancel-btn {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(239, 68, 68, 0.2);
      border: 1px solid rgba(239, 68, 68, 0.4);
      border-radius: 50%;
      color: #ef4444;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: rgba(239, 68, 68, 0.3);
        transform: rotate(90deg);
      }
    }
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.75rem;

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #ec4899, #d946ef);
      border-radius: 4px;
      transition: width 0.3s ease;
      animation: shimmer 2s infinite;
    }
  }

  .progress-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    text-align: center;
  }
}

@keyframes shimmer {
  0% {
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.3);
  }

  50% {
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.6);
  }

  100% {
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.3);
  }
}

// 底部状态栏
.status-bar {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  margin-top: auto;
  flex-shrink: 0;

  .status-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;

      &.online {
        background: #10b981;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
      }
    }
  }
}

// 导航badge
.nav-btn {
  position: relative;

  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: linear-gradient(135deg, #ef4444, #dc2626);
    border-radius: 9px;
    color: #fff;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  }
}

// 会议大纲侧边栏
.meeting-sidebar {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(139, 92, 246, 0.3);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
    }

    .close-btn {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: rgba(239, 68, 68, 0.2);
        border-color: rgba(239, 68, 68, 0.4);
        color: #ef4444;
        transform: rotate(90deg);
      }
    }
  }

  .sidebar-content {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.3);
      border-radius: 3px;

      &:hover {
        background: rgba(139, 92, 246, 0.5);
      }
    }
  }

  .attachment-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 12px;
    margin-bottom: 2rem;

    .attachment-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #ec4899, #d946ef);
      border-radius: 12px;

      svg {
        width: 24px;
        height: 24px;
        color: #fff;
      }
    }

    .attachment-details {
      flex: 1;

      .attachment-name {
        color: #fff;
        font-weight: 600;
        margin-bottom: 0.25rem;
        word-break: break-all;
      }

      .attachment-size {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.85rem;
      }
    }
  }

  .outline-section,
  .meeting-preview {
    margin-bottom: 2rem;

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        content: '';
        width: 4px;
        height: 1.1rem;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        border-radius: 2px;
      }
    }
  }

  .outline-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .outline-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      margin-bottom: 0.5rem;
      transition: all 0.3s;

      &:hover {
        background: rgba(139, 92, 246, 0.1);
        border-color: rgba(139, 92, 246, 0.3);
        transform: translateX(-4px);
      }

      .outline-number {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        border-radius: 50%;
        color: #fff;
        font-size: 0.85rem;
        font-weight: 600;
      }

      .outline-text {
        flex: 1;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.5;
      }
    }
  }

  .meeting-preview {
    .preview-item {
      display: flex;
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;

      .label {
        color: rgba(255, 255, 255, 0.6);
        min-width: 80px;
      }

      .value {
        color: #fff;
        font-weight: 500;
      }
    }
  }

  .sidebar-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      svg {
        width: 18px;
        height: 18px;
      }

      &.primary {
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: #fff;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
        }
      }

      &.secondary {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: rgba(255, 255, 255, 0.9);

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(139, 92, 246, 0.5);
        }
      }
    }
  }
}

// 侧边栏滑入动画
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}

// 响应式设计
@media (max-width: 768px) {
  .quick-actions {
    grid-template-columns: 1fr;
  }

  .ai-greeting {
    flex-direction: column;
    text-align: center;
  }

  .top-nav {
    flex-direction: column;
    gap: 1rem;
  }

  .meeting-sidebar {
    width: 100%;
  }
}
</style>