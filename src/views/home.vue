<template>
  <div
    class="meeting-hub abs-content! of-auto"
    @drop.prevent="handleFileDrop"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
    @dragenter.prevent="handleDragEnter"
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
              <input v-else type="text" class="smart-input" placeholder="「周三下午两点，和产品团队讨论新功能」或「开个早会」或输入指令 /meeting /history /join"
                v-model="meetingInput" @keyup.enter="quickCreate" @input="handleInputChange" @focus="handleInputFocus" />

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
              <p>拖拽或点击上传</p>
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
              <div class="outline-header">
                <h4>AI智能生成大纲</h4>
                <button class="add-outline-btn" @click="addOutlineItem" title="添加议程">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
              <ul class="outline-list">
                <li
                  v-for="(item, index) in meetingOutline"
                  :key="index"
                  class="outline-item"
                  :class="{ editing: editingOutlineIndex === index }"
                >
                  <span class="outline-number">{{ index + 1 }}</span>

                  <!-- 显示模式 -->
                  <span
                    v-if="editingOutlineIndex !== index"
                    class="outline-text"
                    @click="startEditOutline(index)"
                  >
                    {{ item }}
                  </span>

                  <!-- 编辑模式 -->
                  <input
                    v-else
                    v-model="editingOutlineValue"
                    type="text"
                    class="outline-edit-input"
                    @keyup.enter="confirmOutlineEdit"
                    @keyup.esc="cancelOutlineEdit"
                    @blur="confirmOutlineEdit"
                    ref="outlineEditInput"
                  />

                  <!-- 操作按钮 -->
                  <div class="outline-actions" v-if="editingOutlineIndex !== index">
                    <button
                      class="outline-action-btn edit-btn"
                      @click.stop="startEditOutline(index)"
                      title="编辑"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button
                      class="outline-action-btn delete-btn"
                      @click.stop="deleteOutlineItem(index)"
                      title="删除"
                      v-if="meetingOutline.length > 1"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 会议信息预览 -->
            <div class="meeting-preview">
              <h4>会议信息</h4>
              <div class="preview-item editable" @click="quickEditField('time')">
                <span class="label">时间：</span>
                <span class="value">{{ templateData.time }}</span>
                <svg class="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <div class="preview-item editable" @click="quickEditField('participants')">
                <span class="label">参与者：</span>
                <span class="value">{{ templateData.participants }}</span>
                <svg class="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <div class="preview-item editable" @click="quickEditField('topic')">
                <span class="label">主题：</span>
                <span class="value">{{ templateData.topic }}</span>
                <svg class="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
            </div>

            <!-- 快速编辑面板 -->
            <div class="quick-edit-panel" v-if="sidebarEditField">
              <div class="edit-panel-header">
                <span>编辑{{ sidebarFieldLabels[sidebarEditField] }}</span>
                <button @click="closeSidebarEdit">×</button>
              </div>
              <div class="edit-panel-body">
                <input
                  v-model="editingValue"
                  type="text"
                  class="quick-edit-input"
                  :placeholder="`输入${sidebarFieldLabels[sidebarEditField]}`"
                  @keyup.enter="confirmQuickEdit"
                  ref="quickEditInput"
                />
                <div class="edit-actions">
                  <button class="edit-confirm-btn" @click="confirmQuickEdit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    确认
                  </button>
                  <button class="edit-cancel-btn" @click="closeSidebarEdit">取消</button>
                </div>
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

      <!-- 我的会议面板 -->
      <transition name="slide-left">
        <div class="my-meetings-panel" v-if="showMyMeetingsPanel">
          <div class="panel-header">
            <h3>我的会议</h3>
            <button class="close-btn" @click="closeMyMeetings">×</button>
          </div>

          <!-- 搜索和筛选区 -->
          <div class="panel-filters">
            <!-- 搜索框 -->
            <div class="search-box">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                v-model="meetingSearchQuery"
                type="text"
                placeholder="搜索会议主题或参与人..."
                class="search-input"
              />
              <button v-if="meetingSearchQuery" class="clear-search" @click="meetingSearchQuery = ''">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- 时间筛选 -->
            <div class="time-filters">
              <button
                v-for="filter in timeFilters"
                :key="filter.value"
                class="time-filter-btn"
                :class="{ active: selectedTimeFilter === filter.value }"
                @click="selectedTimeFilter = filter.value"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>

          <div class="panel-content">
            <!-- 会议列表 -->
            <div class="meetings-list">
              <div
                v-for="(meeting, index) in filteredMeetings"
                :key="index"
                class="meeting-card"
                @click="viewMeetingDetail(meeting)"
              >
                <div class="meeting-status" :class="meeting.status">
                  <span class="status-dot"></span>
                  <span class="status-text">{{ meeting.statusText }}</span>
                </div>

                <h4 class="meeting-title">{{ meeting.topic }}</h4>

                <div class="meeting-meta">
                  <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{{ meeting.time }}</span>
                  </div>

                  <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>{{ meeting.participants }}</span>
                  </div>
                </div>

                <div class="meeting-actions">
                  <button class="action-btn-small primary" @click.stop="joinMeetingNow(meeting)">
                    立即加入
                  </button>
                  <button class="action-btn-small secondary" @click.stop="editMeetingDetail(meeting)">
                    编辑
                  </button>
                  <button class="action-btn-small share" @click.stop="showShareDialog(meeting)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- 空状态 -->
            <div class="empty-state" v-if="filteredMeetings.length === 0">
              <div class="empty-icon">📅</div>
              <p>{{ meetingSearchQuery ? '未找到相关会议' : '暂无会议' }}</p>
              <span v-if="!meetingSearchQuery">点击上方快捷操作创建新会议</span>
            </div>
          </div>
        </div>
      </transition>

      <!-- 分享对话框 -->
      <transition name="fade">
        <div class="share-dialog-overlay" v-if="shareDialogVisible" @click="closeShareDialog">
          <div class="share-dialog" @click.stop>
            <div class="share-dialog-header">
              <h4>分享会议</h4>
              <button class="close-btn-small" @click="closeShareDialog">×</button>
            </div>

            <div class="share-dialog-body">
              <!-- 会议信息 -->
              <div class="share-meeting-info">
                <h5>{{ shareMeetingData?.topic }}</h5>
                <p>{{ shareMeetingData?.time }} · {{ shareMeetingData?.participants }}</p>
              </div>

              <!-- 分享链接 -->
              <div class="share-item">
                <label>会议链接</label>
                <div class="share-link-box">
                  <input
                    :value="shareMeetingLink"
                    readonly
                    class="share-link-input"
                    ref="shareLinkInput"
                  />
                  <button class="copy-btn" @click="copyShareLink">
                    <svg v-if="!linkCopied" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {{ linkCopied ? '已复制' : '复制' }}
                  </button>
                </div>
              </div>

              <!-- 会议号 -->
              <div class="share-item">
                <label>会议号</label>
                <div class="share-code-box">
                  <span class="meeting-code">{{ shareMeetingCode }}</span>
                  <button class="copy-btn-small" @click="copyMeetingCode">
                    <svg v-if="!codeCopied" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 二维码 -->
              <div class="share-item">
                <label>扫码加入</label>
                <div class="qrcode-box">
                  <div class="qrcode-placeholder">
                    <svg class="qr-icon" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="14" width="3" height="3"></rect>
                      <rect x="18" y="14" width="3" height="3"></rect>
                      <rect x="14" y="18" width="3" height="3"></rect>
                      <rect x="18" y="18" width="3" height="3"></rect>
                    </svg>
                    <p>{{ shareMeetingCode }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- 历史记录面板 -->
      <transition name="slide-left">
        <div class="history-panel" v-if="showHistoryPanel">
          <div class="panel-header">
            <h3>历史记录</h3>
            <button class="close-btn" @click="closeHistory">×</button>
          </div>

          <div class="panel-content">
            <!-- 时间轴列表 -->
            <div class="timeline-list">
              <div
                v-for="(item, index) in historyRecords"
                :key="index"
                class="timeline-item"
              >
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-time">{{ item.time }}</div>
                  <div class="timeline-card">
                    <div class="card-header">
                      <div class="card-icon" :class="item.type">
                        <svg v-if="item.type === 'created'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        <svg v-else-if="item.type === 'joined'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                          <polyline points="10 17 15 12 10 7"></polyline>
                          <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="card-type">{{ item.typeText }}</span>
                    </div>
                    <h4 class="card-title">{{ item.title }}</h4>
                    <p class="card-desc" v-if="item.desc">{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 空状态 -->
            <div class="empty-state" v-if="historyRecords.length === 0">
              <div class="empty-icon">🕐</div>
              <p>暂无历史记录</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts" path="/">
import { ref, computed, onMounted } from 'vue'

// 基础状态
const meetingInput = ref('')
const showSuggestions = ref(false)
const todayMeetings = ref(12)

// 导航相关
const myMeetingsCount = ref(3)
const showMyMeetingsPanel = ref(false)
const showHistoryPanel = ref(false)

// 搜索和筛选相关
const meetingSearchQuery = ref('')
const selectedTimeFilter = ref('all')
const timeFilters = [
  { label: '全部', value: 'all' },
  { label: '今天', value: 'today' },
  { label: '上午', value: 'morning' },
  { label: '下午', value: 'afternoon' },
  { label: '明天', value: 'tomorrow' },
  { label: '一周内', value: 'week' }
]

// 分享对话框相关
const shareDialogVisible = ref(false)
const shareMeetingData = ref<Meeting | null>(null)
const shareMeetingLink = ref('')
const shareMeetingCode = ref('')
const linkCopied = ref(false)
const codeCopied = ref(false)
const shareLinkInput = ref<HTMLInputElement | null>(null)

// 加入会议面板相关
const showJoinMeetingDialog = ref(false)
const joinMeetingInput = ref('')
const joinMeetingType = ref<'code' | 'link' | 'qr'>('code')

// 我的会议数据
interface Meeting {
  id: string
  topic: string
  time: string
  participants: string
  status: 'upcoming' | 'ongoing' | 'completed'
  statusText: string
  outline?: string[]
}

const myMeetings = ref<Meeting[]>([
  {
    id: '1',
    topic: '产品需求评审会',
    time: '今天 14:00',
    participants: '产品团队、技术团队',
    status: 'ongoing',
    statusText: '进行中'
  },
  {
    id: '2',
    topic: '技术方案讨论',
    time: '明天 10:00',
    participants: '技术团队',
    status: 'upcoming',
    statusText: '即将开始'
  },
  {
    id: '3',
    topic: '周例会',
    time: '本周五 15:00',
    participants: '全体成员',
    status: 'upcoming',
    statusText: '未开始'
  },
  {
    id: '4',
    topic: 'Sprint复盘会',
    time: '昨天 16:00',
    participants: '开发团队',
    status: 'completed',
    statusText: '已完成'
  }
])

// 历史记录数据
interface HistoryRecord {
  time: string
  type: 'created' | 'joined' | 'completed'
  typeText: string
  title: string
  desc?: string
}

const historyRecords = ref<HistoryRecord[]>([
  {
    time: '2小时前',
    type: 'completed',
    typeText: '已完成',
    title: '完成会议：Sprint规划会',
    desc: '与开发团队讨论下一迭代计划'
  },
  {
    time: '昨天 16:30',
    type: 'created',
    typeText: '创建会议',
    title: '创建：产品需求评审会',
    desc: '通过文件"产品需求文档v2.1.pdf"创建'
  },
  {
    time: '昨天 10:00',
    type: 'joined',
    typeText: '加入会议',
    title: '参加：技术分享会',
    desc: '学习新技术架构设计'
  },
  {
    time: '3天前',
    type: 'completed',
    typeText: '已完成',
    title: '完成会议：季度总结会',
    desc: 'Q4季度工作总结与复盘'
  }
])

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
const sidebarEditField = ref<'time' | 'participants' | 'topic' | null>(null)
const editingValue = ref('')
const quickEditInput = ref<HTMLInputElement | null>(null)

// 大纲编辑相关
const editingOutlineIndex = ref<number | null>(null)
const editingOutlineValue = ref('')
const outlineEditInput = ref<HTMLInputElement | null>(null)

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

// 侧边栏字段标签
const sidebarFieldLabels = {
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

// 处理输入变化，检测指令
const handleInputChange = () => {
  const input = meetingInput.value.trim()

  // 检测指令
  if (input.startsWith('/')) {
    const command = input.toLowerCase()

    if (command === '/meeting' || command.startsWith('/meeting ')) {
      // 打开我的会议面板
      showMyMeetings()
      const searchTerm = input.slice(8).trim()
      if (searchTerm) {
        meetingSearchQuery.value = searchTerm
      }
      meetingInput.value = ''
      showSuggestions.value = false
      return
    }

    if (command === '/history' || command.startsWith('/history ')) {
      // 打开历史记录面板
      showHistory()
      meetingInput.value = ''
      showSuggestions.value = false
      return
    }

    if (command === '/join' || command.startsWith('/join ')) {
      // 打开加入会议对话框
      const meetingInfo = input.slice(5).trim()
      if (meetingInfo) {
        joinMeetingInput.value = meetingInfo
      } else {
        // 尝试从剪贴板读取
        tryPasteFromClipboard()
      }
      showJoinMeetingDialog.value = true
      meetingInput.value = ''
      showSuggestions.value = false
      return
    }
  }
}

// 尝试从剪贴板粘贴
const tryPasteFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText()
    if (text && (text.includes('http') || text.match(/\d{3}-[A-Z0-9]{3}-[A-Z0-9]{3}/))) {
      joinMeetingInput.value = text
    }
  } catch (err) {
    console.log('无法访问剪贴板:', err)
  }
}

// AI智能创建
const quickCreate = () => {
  if (templateMode.value) {
    // 使用模板创建 - 生成会议大纲并显示侧边栏
    generateMeetingOutlineFromTemplate()
  } else if (!meetingInput.value.trim()) {
    showSuggestions.value = true
    return
  } else {
    // 使用自然语言创建 - AI解析并生成会议大纲
    generateMeetingOutlineFromInput()
  }
}

// 从模板生成会议大纲
const generateMeetingOutlineFromTemplate = () => {
  // 模拟AI生成会议大纲
  meetingOutline.value = [
    '会议开场与目标说明',
    `关于"${templateData.value.topic}"的背景介绍`,
    '当前进展与问题讨论',
    '解决方案与行动计划',
    '任务分配与时间节点确认',
    '下一步跟进安排'
  ]

  // 显示侧边栏
  showSidebar.value = true

  // 清空输入和建议
  showSuggestions.value = false
  console.log('从模板生成会议:', templateData.value)
}

// 从自然语言输入生成会议大纲
const generateMeetingOutlineFromInput = () => {
  const input = meetingInput.value.trim()

  // 模拟AI解析自然语言，提取会议信息
  // 这里简化处理，实际应该调用AI接口
  templateData.value = {
    time: '待确定',
    participants: '待确定',
    topic: input.length > 20 ? input.substring(0, 20) + '...' : input
  }

  // 生成会议大纲
  meetingOutline.value = [
    '会议目标与背景说明',
    '议题讨论与意见收集',
    '关键问题分析与解决',
    '决策事项确认',
    '行动计划与责任分工',
    '后续跟进安排'
  ]

  // 切换到模板模式
  templateMode.value = true

  // 显示侧边栏
  showSidebar.value = true

  // 清空输入
  meetingInput.value = ''
  showSuggestions.value = false

  console.log('从自然语言生成会议:', input)
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

      // 模拟AI解析结果，根据文件名智能生成会议信息和大纲
      setTimeout(() => {
        const fileName = file.name.replace(/\.[^/.]+$/, '')

        // 根据文件名智能推断会议主题和类型
        const meetingInfo = generateMeetingInfoFromFileName(fileName)

        templateData.value = {
          time: '明天下午3点',
          participants: meetingInfo.participants,
          topic: meetingInfo.topic
        }

        // 根据文件类型和名称生成个性化大纲
        meetingOutline.value = meetingInfo.outline

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

// 根据文件名智能生成会议信息
const generateMeetingInfoFromFileName = (fileName: string) => {
  const lowerName = fileName.toLowerCase()

  // 检测文件类型和主题
  if (lowerName.includes('产品') || lowerName.includes('prd') || lowerName.includes('需求')) {
    return {
      topic: `${fileName} - 产品需求评审`,
      participants: '产品团队、技术团队',
      outline: [
        '产品需求背景与目标说明',
        '核心功能点详细介绍',
        '用户场景与交互流程讨论',
        '技术可行性评估',
        '资源投入与排期规划',
        '风险评估与后续跟进'
      ]
    }
  } else if (lowerName.includes('技术') || lowerName.includes('架构') || lowerName.includes('设计文档')) {
    return {
      topic: `${fileName} - 技术方案评审`,
      participants: '技术团队',
      outline: [
        '技术背景与现状分析',
        '方案设计思路与架构说明',
        '关键技术点深入讨论',
        '性能与安全性考量',
        '实施方案与时间安排',
        '技术风险与应对策略'
      ]
    }
  } else if (lowerName.includes('周报') || lowerName.includes('月报') || lowerName.includes('汇报')) {
    return {
      topic: `${fileName} - 工作汇报会`,
      participants: '项目组成员',
      outline: [
        '上周期工作完成情况回顾',
        '重点成果与亮点展示',
        '遇到的问题与解决方案',
        '本周期工作计划安排',
        '需要的支持与协作',
        '下一步行动计划确认'
      ]
    }
  } else if (lowerName.includes('测试') || lowerName.includes('bug') || lowerName.includes('质量')) {
    return {
      topic: `${fileName} - 测试与质量评审`,
      participants: '测试团队、开发团队',
      outline: [
        '测试范围与测试用例说明',
        '发现问题汇总与分析',
        '关键Bug讨论与优先级确定',
        '质量指标达成情况',
        '优化建议与改进方案',
        '后续测试计划安排'
      ]
    }
  } else if (lowerName.includes('项目') || lowerName.includes('计划') || lowerName.includes('方案')) {
    return {
      topic: `${fileName} - 项目讨论会`,
      participants: '项目相关人员',
      outline: [
        '项目背景与目标说明',
        '当前进度与里程碑回顾',
        '关键问题分析与讨论',
        '解决方案与行动计划',
        '资源协调与任务分配',
        '风险管控与后续安排'
      ]
    }
  } else if (lowerName.includes('合同') || lowerName.includes('协议') || lowerName.includes('商务')) {
    return {
      topic: `${fileName} - 商务合作讨论`,
      participants: '商务团队、法务团队',
      outline: [
        '合作背景与双方介绍',
        '合同条款逐项解读',
        '权责利益分配讨论',
        '关键条款谈判与确认',
        '风险评估与法律审核',
        '签约流程与后续安排'
      ]
    }
  } else if (lowerName.includes('培训') || lowerName.includes('学习') || lowerName.includes('教程')) {
    return {
      topic: `${fileName} - 培训与分享会`,
      participants: '相关团队成员',
      outline: [
        '培训主题与目标介绍',
        '核心知识点讲解',
        '实践案例分析',
        'Q&A互动讨论',
        '学习资料分发',
        '后续实践计划安排'
      ]
    }
  } else {
    // 默认通用会议大纲
    return {
      topic: `${fileName} - 专题讨论会`,
      participants: '文档相关人员',
      outline: [
        '会议背景与目标说明',
        `"${fileName}"内容要点解读`,
        '关键问题分析与讨论',
        '解决方案与建议汇总',
        '任务分配与时间规划',
        '后续行动计划确认'
      ]
    }
  }
}

// 处理文件拖拽
const handleFileDrop = (event: DragEvent) => {
  event.preventDefault()
  isDragging.value = false
  dragCounter = 0 // 重置计数器

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
  showMyMeetingsPanel.value = true
  showHistoryPanel.value = false
}

const closeMyMeetings = () => {
  showMyMeetingsPanel.value = false
}

const showHistory = () => {
  showHistoryPanel.value = true
  showMyMeetingsPanel.value = false
}

const closeHistory = () => {
  showHistoryPanel.value = false
}

// 会议操作
const viewMeetingDetail = (meeting: Meeting) => {
  console.log('查看会议详情:', meeting)
  // TODO: 显示会议详情
}

const joinMeetingNow = (meeting: Meeting) => {
  console.log('立即加入会议:', meeting)
  // TODO: 加入会议逻辑
}

const editMeetingDetail = (meeting: Meeting) => {
  console.log('编辑会议:', meeting)
  // TODO: 编辑会议逻辑
}

// 计算属性：筛选后的会议列表
const filteredMeetings = computed(() => {
  let filtered = myMeetings.value

  // 搜索筛选
  if (meetingSearchQuery.value.trim()) {
    const query = meetingSearchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (meeting) =>
        meeting.topic.toLowerCase().includes(query) ||
        meeting.participants.toLowerCase().includes(query)
    )
  }

  // 时间筛选
  if (selectedTimeFilter.value !== 'all') {
    filtered = filtered.filter((meeting) => {
      const timeStr = meeting.time.toLowerCase()
      switch (selectedTimeFilter.value) {
        case 'today':
          return timeStr.includes('今天')
        case 'morning':
          return timeStr.includes('上午') || timeStr.includes('am')
        case 'afternoon':
          return timeStr.includes('下午') || timeStr.includes('pm')
        case 'tomorrow':
          return timeStr.includes('明天')
        case 'week':
          return (
            timeStr.includes('今天') ||
            timeStr.includes('明天') ||
            timeStr.includes('本周') ||
            timeStr.includes('周一') ||
            timeStr.includes('周二') ||
            timeStr.includes('周三') ||
            timeStr.includes('周四') ||
            timeStr.includes('周五')
          )
        default:
          return true
      }
    })
  }

  return filtered
})

// 分享功能
const showShareDialog = (meeting: Meeting) => {
  shareMeetingData.value = meeting
  // 生成分享链接
  shareMeetingLink.value = `https://smartmeet.app/join/${meeting.id}`
  // 生成会议号
  shareMeetingCode.value = `${meeting.id.padStart(3, '0')}-${Math.random().toString(36).substring(2, 5).toUpperCase()}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`
  shareDialogVisible.value = true
  linkCopied.value = false
  codeCopied.value = false

  // 自动复制链接到剪贴板
  setTimeout(() => {
    copyShareLink()
  }, 300)
}

const closeShareDialog = () => {
  shareDialogVisible.value = false
  linkCopied.value = false
  codeCopied.value = false
}

const copyShareLink = async () => {
  try {
    await navigator.clipboard.writeText(shareMeetingLink.value)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const copyMeetingCode = async () => {
  try {
    await navigator.clipboard.writeText(shareMeetingCode.value)
    codeCopied.value = true
    setTimeout(() => {
      codeCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 加入会议
const joinMeeting = () => {
  console.log('加入会议')
  // TODO: 实现加入会议对话框
}

// 拖拽计数器，用于准确跟踪拖拽状态
let dragCounter = 0

// 处理拖拽进入事件
const handleDragEnter = (event: DragEvent) => {
  event.preventDefault()
  dragCounter++
  isDragging.value = true
}

// 处理拖拽悬停事件
const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  isDragging.value = true
}

// 处理拖拽离开事件
const handleDragLeave = (event: DragEvent) => {
  event.preventDefault()
  dragCounter--
  // 当计数器归零时，说明真正离开了拖拽区域
  if (dragCounter === 0) {
    isDragging.value = false
  }
}

// 侧边栏操作
const closeSidebar = () => {
  showSidebar.value = false
  sidebarEditField.value = null
}

// 快速编辑字段
const quickEditField = (field: 'time' | 'participants' | 'topic') => {
  sidebarEditField.value = field
  editingValue.value = templateData.value[field]
  // 自动聚焦输入框
  setTimeout(() => {
    quickEditInput.value?.focus()
    quickEditInput.value?.select()
  }, 100)
}

// 确认快速编辑
const confirmQuickEdit = () => {
  if (sidebarEditField.value && editingValue.value.trim()) {
    templateData.value[sidebarEditField.value] = editingValue.value.trim()
  }
  closeSidebarEdit()
}

// 关闭侧边栏编辑
const closeSidebarEdit = () => {
  sidebarEditField.value = null
  editingValue.value = ''
}

// 大纲编辑操作
const startEditOutline = (index: number) => {
  editingOutlineIndex.value = index
  editingOutlineValue.value = meetingOutline.value[index]
  // 自动聚焦输入框
  setTimeout(() => {
    outlineEditInput.value?.focus()
    outlineEditInput.value?.select()
  }, 50)
}

const confirmOutlineEdit = () => {
  if (editingOutlineIndex.value !== null && editingOutlineValue.value.trim()) {
    meetingOutline.value[editingOutlineIndex.value] = editingOutlineValue.value.trim()
  }
  cancelOutlineEdit()
}

const cancelOutlineEdit = () => {
  editingOutlineIndex.value = null
  editingOutlineValue.value = ''
}

const deleteOutlineItem = (index: number) => {
  if (meetingOutline.value.length > 1) {
    meetingOutline.value.splice(index, 1)
  }
}

const addOutlineItem = () => {
  meetingOutline.value.push('新增议程项')
  // 立即编辑新增的项
  setTimeout(() => {
    startEditOutline(meetingOutline.value.length - 1)
  }, 50)
}

const confirmMeeting = () => {
  console.log('确认创建会议:', {
    ...templateData.value,
    outline: meetingOutline.value,
    attachment: uploadFileName.value
  })
  showSidebar.value = false
  sidebarEditField.value = null
  // TODO: 实际创建会议逻辑
}

const editMeeting = () => {
  // 关闭侧边栏，回到主界面进行编辑
  showSidebar.value = false
  sidebarEditField.value = null
  // 保持模板模式，让用户在主界面编辑
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

// 全局拖拽蒙层
.drag-overlay {
  position: fixed;
  inset: 0;
  background: rgba(236, 72, 153, 0.1);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease-out;

  .drag-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem;
    background: rgba(10, 14, 39, 0.9);
    border: 2px dashed rgba(236, 72, 153, 0.6);
    border-radius: 24px;
    backdrop-filter: blur(20px);

    .drag-icon {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #ec4899, #d946ef);
      border-radius: 50%;
      animation: pulse-scale 1.5s ease-in-out infinite;

      svg {
        width: 48px;
        height: 48px;
        color: #fff;
        stroke-width: 2;
      }
    }

    .drag-text {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      margin: 0;
    }

    .drag-hint {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
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

    .outline-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
        margin: 0;
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

      .add-outline-btn {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        border: none;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;

        svg {
          width: 18px;
          height: 18px;
          stroke-width: 2.5;
        }

        &:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }

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
      align-items: center;
      gap: 1rem;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      margin-bottom: 0.5rem;
      transition: all 0.3s;
      position: relative;

      &:hover {
        background: rgba(139, 92, 246, 0.1);
        border-color: rgba(139, 92, 246, 0.3);

        .outline-actions {
          opacity: 1;
          transform: translateX(0);
        }
      }

      &.editing {
        background: rgba(139, 92, 246, 0.15);
        border-color: rgba(139, 92, 246, 0.5);
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
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      }

      .outline-edit-input {
        flex: 1;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.5);
        border-radius: 6px;
        padding: 0.5rem 0.75rem;
        color: #fff;
        font-size: 0.95rem;
        outline: none;
        transition: all 0.3s;

        &:focus {
          border-color: rgba(139, 92, 246, 0.8);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }
      }

      .outline-actions {
        display: flex;
        gap: 0.5rem;
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s;

        .outline-action-btn {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;

          svg {
            width: 14px;
            height: 14px;
            stroke-width: 2;
          }

          &.edit-btn {
            color: rgba(139, 92, 246, 0.9);

            &:hover {
              background: rgba(139, 92, 246, 0.2);
              border-color: rgba(139, 92, 246, 0.5);
              transform: translateY(-2px);
            }
          }

          &.delete-btn {
            color: rgba(239, 68, 68, 0.9);

            &:hover {
              background: rgba(239, 68, 68, 0.2);
              border-color: rgba(239, 68, 68, 0.5);
              transform: translateY(-2px);
            }
          }
        }
      }
    }
  }

  .meeting-preview {
    .preview-item {
      display: flex;
      align-items: center;
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      position: relative;
      transition: all 0.3s;

      &.editable {
        cursor: pointer;
        padding-right: 3rem;

        &:hover {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          transform: translateX(-4px);

          .edit-icon {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }

      .label {
        color: rgba(255, 255, 255, 0.6);
        min-width: 80px;
      }

      .value {
        flex: 1;
        color: #fff;
        font-weight: 500;
      }

      .edit-icon {
        position: absolute;
        right: 1rem;
        width: 16px;
        height: 16px;
        color: rgba(139, 92, 246, 0.8);
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s;
        stroke-width: 2;
      }
    }
  }

  // 快速编辑面板
  .quick-edit-panel {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 12px;
    animation: slideDown 0.3s ease-out;

    .edit-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      span {
        color: #fff;
        font-weight: 600;
        font-size: 0.95rem;
      }

      button {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s;
        line-height: 1;

        &:hover {
          color: #fff;
          transform: rotate(90deg);
        }
      }
    }

    .edit-panel-body {
      .quick-edit-input {
        width: 100%;
        padding: 0.75rem 1rem;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s;
        margin-bottom: 0.75rem;

        &::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        &:focus {
          border-color: rgba(139, 92, 246, 0.6);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }
      }

      .edit-actions {
        display: flex;
        gap: 0.5rem;

        button {
          flex: 1;
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;

          svg {
            width: 16px;
            height: 16px;
            stroke-width: 2.5;
          }
        }

        .edit-confirm-btn {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          color: #fff;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
          }
        }

        .edit-cancel-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.9);

          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }
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

// 我的会议面板和历史记录面板的通用样式
.my-meetings-panel,
.history-panel {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 450px;
  background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(139, 92, 246, 0.3);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-shrink: 0;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      margin: 0;
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

  .panel-content {
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

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    text-align: center;

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
    }

    span {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
    }
  }
}

// 我的会议面板特有样式
.my-meetings-panel {
  .meetings-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .meeting-card {
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateX(-8px);
      }

      .meeting-status {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4rem 1rem;
        border-radius: 20px;
        margin-bottom: 1rem;
        font-size: 0.85rem;
        font-weight: 600;

        &.upcoming {
          background: rgba(139, 92, 246, 0.2);
          color: #a78bfa;

          .status-dot {
            background: #a78bfa;
          }
        }

        &.ongoing {
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;

          .status-dot {
            background: #34d399;
            animation: pulse-dot 1.5s ease-in-out infinite;
          }
        }

        &.completed {
          background: rgba(107, 114, 128, 0.2);
          color: #9ca3af;

          .status-dot {
            background: #9ca3af;
          }
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      }

      .meeting-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
        margin: 0 0 1rem 0;
      }

      .meeting-meta {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1.5rem;

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;

          svg {
            width: 16px;
            height: 16px;
            stroke-width: 2;
            color: rgba(139, 92, 246, 0.8);
          }
        }
      }

      .meeting-actions {
        display: flex;
        gap: 0.75rem;

        .action-btn-small {
          flex: 1;
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;

          &.primary {
            background: linear-gradient(135deg, #8b5cf6, #6366f1);
            color: #fff;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
            }
          }

          &.secondary {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.9);

            &:hover {
              background: rgba(255, 255, 255, 0.1);
            }
          }
        }
      }
    }
  }
}

// 历史记录面板特有样式
.history-panel {
  .timeline-list {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 1.5rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(
        to bottom,
        rgba(139, 92, 246, 0.5),
        rgba(139, 92, 246, 0.2),
        transparent
      );
    }

    .timeline-item {
      position: relative;
      padding-left: 4rem;
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      .timeline-dot {
        position: absolute;
        left: 1.1rem;
        top: 0.5rem;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
        z-index: 1;
      }

      .timeline-content {
        .timeline-time {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        .timeline-card {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s;

          &:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(139, 92, 246, 0.3);
            transform: translateX(-4px);
          }

          .card-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;

            .card-icon {
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;

              svg {
                width: 16px;
                height: 16px;
                stroke-width: 2.5;
              }

              &.created {
                background: rgba(139, 92, 246, 0.2);
                color: #a78bfa;
              }

              &.joined {
                background: rgba(99, 102, 241, 0.2);
                color: #818cf8;
              }

              &.completed {
                background: rgba(16, 185, 129, 0.2);
                color: #34d399;
              }
            }

            .card-type {
              color: rgba(255, 255, 255, 0.6);
              font-size: 0.85rem;
              font-weight: 600;
            }
          }

          .card-title {
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 0.5rem 0;
          }

          .card-desc {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.5;
          }
        }
      }
    }
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

// 搜索和筛选区域样式
.panel-filters {
  padding: 1.5rem 2rem 0 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;

  .search-box {
    position: relative;
    margin-bottom: 1rem;

    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      color: rgba(255, 255, 255, 0.5);
      stroke-width: 2;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding: 0.75rem 2.5rem 0.75rem 3rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #fff;
      font-size: 0.9rem;
      outline: none;
      transition: all 0.3s;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      &:focus {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(139, 92, 246, 0.5);
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
      }
    }

    .clear-search {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 6px;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: all 0.3s;

      svg {
        width: 14px;
        height: 14px;
        stroke-width: 2;
      }

      &:hover {
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
      }
    }
  }

  .time-filters {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 1.5rem;

    &::-webkit-scrollbar {
      height: 0;
    }

    .time-filter-btn {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.85rem;
      font-weight: 500;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(139, 92, 246, 0.3);
      }

      &.active {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
        border-color: rgba(139, 92, 246, 0.5);
        color: #fff;
        font-weight: 600;
      }
    }
  }
}

// 分享按钮样式
.action-btn-small.share {
  flex: 0 0 auto;
  width: 36px;
  padding: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
    color: rgba(139, 92, 246, 0.8);
  }

  &:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: rgba(139, 92, 246, 0.5);

    svg {
      color: #a78bfa;
    }
  }
}

// 分享对话框样式
.share-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;

  .share-dialog {
    width: 100%;
    max-width: 500px;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    .share-dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      h4 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #fff;
        margin: 0;
      }

      .close-btn-small {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.25rem;
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

    .share-dialog-body {
      padding: 2rem;

      .share-meeting-info {
        text-align: center;
        padding: 1.5rem;
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.2);
        border-radius: 16px;
        margin-bottom: 2rem;

        h5 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }
      }

      .share-item {
        margin-bottom: 1.5rem;

        &:last-child {
          margin-bottom: 0;
        }

        label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.75rem;
        }

        .share-link-box {
          display: flex;
          gap: 0.75rem;

          .share-link-input {
            flex: 1;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.85rem;
            font-family: 'Courier New', monospace;
          }

          .copy-btn {
            padding: 0.75rem 1.25rem;
            background: linear-gradient(135deg, #8b5cf6, #6366f1);
            border: none;
            border-radius: 10px;
            color: #fff;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s;
            white-space: nowrap;

            svg {
              width: 16px;
              height: 16px;
              stroke-width: 2;
            }

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
            }
          }
        }

        .share-code-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;

          .meeting-code {
            font-size: 1.1rem;
            font-weight: 700;
            font-family: 'Courier New', monospace;
            color: #a78bfa;
            letter-spacing: 2px;
          }

          .copy-btn-small {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(139, 92, 246, 0.2);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 8px;
            color: #a78bfa;
            cursor: pointer;
            transition: all 0.3s;

            svg {
              width: 16px;
              height: 16px;
              stroke-width: 2;
            }

            &:hover {
              background: rgba(139, 92, 246, 0.3);
              transform: scale(1.05);
            }
          }
        }

        .qrcode-box {
          .qrcode-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 2px dashed rgba(139, 92, 246, 0.3);
            border-radius: 16px;

            .qr-icon {
              width: 120px;
              height: 120px;
              color: rgba(139, 92, 246, 0.4);
              margin-bottom: 1rem;
            }

            p {
              font-size: 0.9rem;
              font-weight: 600;
              font-family: 'Courier New', monospace;
              color: rgba(255, 255, 255, 0.5);
              margin: 0;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
  }
}

// 淡入淡出动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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