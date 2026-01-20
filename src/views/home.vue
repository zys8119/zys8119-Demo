<template>
  <div class="meeting-hub abs-content! of-auto">
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
        <nav class="top-nav w-100%">
          <div class="logo-area">
            <div class="ai-icon">
              <div class="pulse-ring"></div>
              <span class="icon-core">AI</span>
            </div>
            <span class="brand-name">SmartMeet</span>
          </div>

          <div class="nav-actions">
            <button class="nav-btn">我的会议</button>
            <button class="nav-btn">历史记录</button>
            <div class="avatar-btn">
              <div class="avatar"></div>
            </div>
          </div>
        </nav>

        <!-- 中心创建区域 -->
        <div class="create-zone flex-1">
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
    </div>
  </div>
</template>

<script setup lang="ts" path="/">
import { ref, onMounted } from 'vue'

// 基础状态
const meetingInput = ref('')
const showSuggestions = ref(false)
const todayMeetings = ref(12)

// 模板模式相关
const templateMode = ref(false)
const activeField = ref<'time' | 'participants' | 'topic' | null>(null)

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

// 加入会议
const joinMeeting = () => {
  console.log('加入会议')
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
  grid-template-columns: repeat(3, 1fr);
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

      &.join {
        background: linear-gradient(135deg, #f59e0b, #d97706);
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
}
</style>