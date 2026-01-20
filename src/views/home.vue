<template>
  <div class="meeting-hub abs-content! of-auto" @drop.prevent="handleFileDrop" @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave" @dragenter.prevent="handleDragEnter">
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
            <button class="nav-btn" @click="togglePendingMeetings">
              待办会议
              <span class="badge badge-pending" v-if="pendingMeetingsCount > 0">{{ pendingMeetingsCount }}</span>
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
              <input v-else type="text" class="smart-input"
                placeholder="「周三下午两点，和产品团队讨论新功能」或「开个早会」或输入指令 /meeting /history /join" v-model="meetingInput"
                @keyup.enter="executeCommand" @input="handleInputChange" @focus="handleInputFocus" />

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

            <!-- 指令下拉菜单 -->
            <transition name="slide-up">
              <div class="command-dropdown" v-if="showCommandDropdown" @click.stop>
                <div class="command-dropdown-header">
                  <span class="header-title">可用指令</span>
                  <span class="header-hint">点击或按回车执行</span>
                </div>
                <div class="command-list">
                  <div
                    class="command-item"
                    v-for="cmd in filteredCommands"
                    :key="cmd.command"
                    @click="selectCommandSuggestion(cmd.command)"
                  >
                    <span class="command-icon">{{ cmd.icon }}</span>
                    <div class="command-info">
                      <div class="command-text">{{ cmd.command }}</div>
                      <div class="command-desc">{{ cmd.description }}</div>
                    </div>
                    <span class="command-category">{{ cmd.category }}</span>
                  </div>
                </div>
              </div>
            </transition>

            <!-- AI智能建议 -->
            <transition name="slide-up">
              <div class="ai-suggestions" v-if="showSuggestions && !templateMode && !showCommandDropdown">
                <div class="suggestion-item" v-for="(sug, idx) in suggestions" :key="idx" @click="applySuggestion(sug)">
                  <span class="sug-icon">🤖</span>
                  <span class="sug-text">{{ sug.text }}</span>
                </div>
              </div>
            </transition>

            <!-- 模板建议 -->
            <div class="template-suggestions" v-if="!templateMode && meetingInput.length === 0 && !showCommandDropdown">
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
                <button class="quick-template-btn" @click="openTemplateMarket">
                  更多模板...
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

            <div class="action-card file-upload-area" @click="triggerFileUpload">
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
                <li v-for="(item, index) in meetingOutline" :key="index" class="outline-item"
                  :class="{ editing: editingOutlineIndex === index }">
                  <span class="outline-number">{{ index + 1 }}</span>

                  <!-- 显示模式 -->
                  <span v-if="editingOutlineIndex !== index" class="outline-text" @click="startEditOutline(index)">
                    {{ item }}
                  </span>

                  <!-- 编辑模式 -->
                  <input v-else v-model="editingOutlineValue" type="text" class="outline-edit-input"
                    @keyup.enter="confirmOutlineEdit" @keyup.esc="cancelOutlineEdit" @blur="confirmOutlineEdit"
                    ref="outlineEditInput" />

                  <!-- 操作按钮 -->
                  <div class="outline-actions" v-if="editingOutlineIndex !== index">
                    <button class="outline-action-btn edit-btn" @click.stop="startEditOutline(index)" title="编辑">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button class="outline-action-btn delete-btn" @click.stop="deleteOutlineItem(index)" title="删除"
                      v-if="meetingOutline.length > 1">
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
                <input v-model="editingValue" type="text" class="quick-edit-input"
                  :placeholder="`输入${sidebarFieldLabels[sidebarEditField]}`" @keyup.enter="confirmQuickEdit"
                  ref="quickEditInput" />
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
              <input v-model="meetingSearchQuery" type="text" placeholder="搜索会议主题或参与人..." class="search-input" />
              <button v-if="meetingSearchQuery" class="clear-search" @click="meetingSearchQuery = ''">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- 时间筛选 -->
            <div class="time-filters">
              <button v-for="filter in timeFilters" :key="filter.value" class="time-filter-btn"
                :class="{ active: selectedTimeFilter === filter.value }" @click="selectedTimeFilter = filter.value">
                {{ filter.label }}
              </button>
            </div>
          </div>

          <div class="panel-content">
            <!-- 会议列表 -->
            <div class="meetings-list">
              <div v-for="(meeting, index) in filteredMeetings" :key="index" class="meeting-card"
                @click="viewMeetingDetail(meeting)">
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
                  <input :value="shareMeetingLink" readonly class="share-link-input" ref="shareLinkInput" />
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

      <!-- 加入会议对话框 -->
      <transition name="fade">
        <div class="join-dialog-overlay" v-if="showJoinMeetingDialog" @click="closeJoinDialog">
          <div class="join-dialog" @click.stop>
            <div class="join-dialog-header">
              <h4>加入会议</h4>
              <button class="close-btn-small" @click="closeJoinDialog">×</button>
            </div>

            <div class="join-dialog-body">
              <!-- 入会方式切换 -->
              <div class="join-methods">
                <button class="method-btn" :class="{ active: joinMeetingType === 'code' }"
                  @click="joinMeetingType = 'code'">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  会议号
                </button>
                <button class="method-btn" :class="{ active: joinMeetingType === 'link' }"
                  @click="joinMeetingType = 'link'">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  会议链接
                </button>
                <button class="method-btn" :class="{ active: joinMeetingType === 'qr' }"
                  @click="joinMeetingType = 'qr'">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="3" height="3"></rect>
                    <rect x="18" y="14" width="3" height="3"></rect>
                    <rect x="14" y="18" width="3" height="3"></rect>
                    <rect x="18" y="18" width="3" height="3"></rect>
                  </svg>
                  扫码加入
                </button>
              </div>

              <!-- 会议号输入 -->
              <div class="join-input-section" v-if="joinMeetingType === 'code'">
                <label>输入会议号</label>
                <input v-model="joinMeetingInput" type="text" placeholder="例如: 001-ABC-XYZ" class="join-input"
                  @keyup.enter="confirmJoinMeeting" />
                <p class="input-hint">支持格式: 001-ABC-XYZ 或 001ABCXYZ</p>
              </div>

              <!-- 会议链接输入 -->
              <div class="join-input-section" v-if="joinMeetingType === 'link'">
                <label>输入或粘贴会议链接</label>
                <input v-model="joinMeetingInput" type="text" placeholder="https://smartmeet.app/join/..."
                  class="join-input" @keyup.enter="confirmJoinMeeting" />
                <button class="paste-btn" @click="pasteFromClipboard">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                  从剪贴板粘贴
                </button>
              </div>

              <!-- 二维码扫描 -->
              <div class="join-input-section qr-section" v-if="joinMeetingType === 'qr'">
                <div class="qr-scanner-placeholder">
                  <svg class="camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  <p>打开摄像头扫描会议二维码</p>
                  <button class="open-camera-btn" @click="openCamera">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                    开启摄像头
                  </button>
                </div>
              </div>

              <!-- 加入按钮 -->
              <div class="join-actions">
                <button class="join-confirm-btn" @click="confirmJoinMeeting"
                  :disabled="!joinMeetingInput && joinMeetingType !== 'qr'">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  立即加入
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- 模板市场对话框 -->
      <transition name="fade">
        <div class="template-market-overlay" v-if="showTemplateMarket" @click="closeTemplateMarket">
          <div class="template-market" @click.stop>
            <div class="template-market-header">
              <h4>会议模板市场</h4>
              <button class="close-btn-small" @click="closeTemplateMarket">×</button>
            </div>

            <div class="template-market-body">
              <div class="template-category" v-for="category in templateCategories" :key="category.name">
                <h5 class="category-name">{{ category.name }}</h5>
                <div class="template-cards">
                  <div class="template-card" v-for="template in category.templates" :key="template.id"
                    @click="selectTemplate(template)">
                    <div class="template-icon">{{ template.icon }}</div>
                    <div class="template-info">
                      <h6 class="template-name">{{ template.name }}</h6>
                      <p class="template-detail">{{ template.time }}</p>
                      <p class="template-detail">{{ template.participants }}</p>
                    </div>
                    <div class="template-select-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- 预约会议对话框 -->
      <transition name="fade">
        <div class="schedule-dialog-overlay" v-if="showScheduleDialog" @click="closeScheduleDialog">
          <div class="schedule-dialog" @click.stop>
            <div class="schedule-dialog-header">
              <h4>预约会议</h4>
              <button class="close-btn-small" @click="closeScheduleDialog">×</button>
            </div>

            <div class="schedule-dialog-body">
              <form @submit.prevent="saveScheduledMeeting">
                <!-- 会议名称 -->
                <div class="form-group">
                  <label class="form-label">
                    <span class="label-icon">📋</span>
                    会议名称
                  </label>
                  <input
                    type="text"
                    class="form-input"
                    v-model="scheduleForm.title"
                    placeholder="请输入会议名称"
                    required
                  />
                </div>

                <!-- 日期和时间 -->
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">
                      <span class="label-icon">📅</span>
                      日期
                    </label>
                    <input
                      type="date"
                      class="form-input"
                      v-model="scheduleForm.date"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label">
                      <span class="label-icon">🕐</span>
                      时间
                    </label>
                    <input
                      type="time"
                      class="form-input"
                      v-model="scheduleForm.time"
                      required
                    />
                  </div>
                </div>

                <!-- 时长和地点 -->
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">
                      <span class="label-icon">⏱️</span>
                      时长（分钟）
                    </label>
                    <select class="form-input" v-model="scheduleForm.duration">
                      <option value="15">15分钟</option>
                      <option value="30">30分钟</option>
                      <option value="45">45分钟</option>
                      <option value="60">60分钟</option>
                      <option value="90">90分钟</option>
                      <option value="120">120分钟</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">
                      <span class="label-icon">📍</span>
                      地点
                    </label>
                    <input
                      type="text"
                      class="form-input"
                      v-model="scheduleForm.location"
                      placeholder="会议地点或链接"
                      required
                    />
                  </div>
                </div>

                <!-- 提醒时间 -->
                <div class="form-group">
                  <label class="form-label">
                    <span class="label-icon">⏰</span>
                    提前提醒
                  </label>
                  <select class="form-input" v-model="scheduleForm.remindBefore">
                    <option value="0">准时提醒</option>
                    <option value="5">提前5分钟</option>
                    <option value="15">提前15分钟</option>
                    <option value="30">提前30分钟</option>
                    <option value="60">提前1小时</option>
                  </select>
                </div>

                <!-- 备忘 -->
                <div class="form-group">
                  <label class="form-label">
                    <span class="label-icon">📝</span>
                    备忘
                  </label>
                  <textarea
                    class="form-textarea"
                    v-model="scheduleForm.memo"
                    placeholder="会议备注、准备事项等..."
                    rows="4"
                  ></textarea>
                </div>

                <!-- 操作按钮 -->
                <div class="form-actions">
                  <button type="button" class="btn-cancel" @click="closeScheduleDialog">
                    取消
                  </button>
                  <button type="submit" class="btn-submit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    创建预约
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </transition>

      <!-- 即时会议对话框 -->
      <transition name="fade">
        <div class="instant-meeting-overlay" v-if="showInstantMeetingDialog" @click="closeInstantMeetingDialog">
          <div class="instant-meeting-dialog" @click.stop>
            <div class="instant-meeting-header">
              <div class="header-icon">⚡</div>
              <h4>即时会议</h4>
              <button class="close-btn-small" @click="closeInstantMeetingDialog">×</button>
            </div>

            <div class="instant-meeting-body">
              <form @submit.prevent="startInstantMeeting">
                <div class="form-group">
                  <label class="form-label">
                    <span class="label-icon">📋</span>
                    会议名称
                  </label>
                  <input
                    type="text"
                    class="form-input"
                    v-model="instantMeetingName"
                    placeholder="例如：产品讨论会"
                    required
                    autofocus
                  />
                  <p class="form-hint">输入会议名称后即可开始，其他参与者可通过会议号加入</p>
                </div>

                <div class="form-actions">
                  <button type="button" class="btn-cancel" @click="closeInstantMeetingDialog">
                    取消
                  </button>
                  <button type="submit" class="btn-submit instant">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    立即开始
                  </button>
                </div>
              </form>
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
              <div v-for="(item, index) in historyRecords" :key="index" class="timeline-item">
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

      <!-- 待办会议面板 -->
      <transition name="slide-left">
        <div class="pending-panel" v-if="showPendingMeetings">
          <div class="panel-header">
            <h3>待办会议</h3>
            <button class="close-btn" @click="closePendingMeetings">×</button>
          </div>

          <div class="panel-content">
            <!-- 待办会议列表 -->
            <div class="meetings-list" v-if="sortedPendingMeetings.length > 0">
              <div
                class="meeting-card"
                v-for="meeting in sortedPendingMeetings"
                :key="meeting.id"
              >
                <!-- 会议状态 -->
                <div class="meeting-status" :class="getMeetingStatusClass(meeting)">
                  <span class="status-dot"></span>
                  <span class="status-text">{{ getMeetingStatusText(meeting) }}</span>
                </div>

                <!-- 会议标题 -->
                <h4 class="meeting-title">{{ meeting.title }}</h4>

                <!-- 会议元信息 -->
                <div class="meeting-meta">
                  <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{{ meeting.date }}</span>
                  </div>
                  <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{{ meeting.time }}</span>
                  </div>
                </div>

                <div class="meeting-meta">
                  <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{{ meeting.location }}</span>
                  </div>
                  <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{{ meeting.duration }}分钟</span>
                  </div>
                </div>

                <!-- 备忘 -->
                <div class="meeting-memo-box" v-if="meeting.memo">
                  <div class="memo-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="memo-icon">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    <span class="memo-label">备忘</span>
                  </div>
                  <p class="memo-content">{{ meeting.memo }}</p>
                </div>

                <!-- 提醒时间 -->
                <div class="meeting-reminder-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="reminder-icon">
                    <circle cx="12" cy="13" r="8"></circle>
                    <path d="M12 9v4l2 2"></path>
                    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
                  </svg>
                  <span class="reminder-text">
                    {{ meeting.remindBefore === '0' ? '准时提醒' : `提前${meeting.remindBefore}分钟` }}
                  </span>
                </div>

                <!-- 操作按钮 -->
                <div class="meeting-actions-bar">
                  <button
                    class="action-btn-new success"
                    @click.stop="startPendingMeeting(meeting)"
                    v-if="meeting.status !== 'completed'"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    开始
                  </button>
                  <button
                    class="action-btn-new primary"
                    @click.stop="completeMeeting(meeting.id)"
                    v-if="meeting.status !== 'completed'"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    完成
                  </button>
                  <button
                    class="action-btn-new danger"
                    @click.stop="deleteMeeting(meeting.id)"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    删除
                  </button>
                </div>
              </div>
            </div>

            <!-- 空状态 -->
            <div class="empty-state" v-if="pendingMeetings.length === 0">
              <div class="empty-icon">📋</div>
              <p>暂无待办会议</p>
              <button class="empty-action-btn" @click="openScheduleDialog">
                创建预约
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts" path="/">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// 初始化路由
const router = useRouter()

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

// 模板市场相关
const showTemplateMarket = ref(false)
const templateCategories = [
  {
    name: '日常会议',
    templates: [
      { id: 'standup', name: '每日站会', icon: '☀️', time: '明天上午9点', participants: '开发团队', topic: '每日站会' },
      { id: 'weekly', name: '周例会', icon: '📅', time: '本周五下午3点', participants: '全体成员', topic: '周例会' },
      { id: 'retrospective', name: 'Sprint复盘', icon: '🔄', time: '明天下午4点', participants: '项目团队', topic: 'Sprint复盘会议' }
    ]
  },
  {
    name: '评审会议',
    templates: [
      { id: 'review', name: '项目评审', icon: '📋', time: '本周五下午3点', participants: '项目组全员', topic: '项目评审会' },
      { id: 'code-review', name: '代码评审', icon: '💻', time: '明天上午10点', participants: '技术团队', topic: '代码评审会议' },
      { id: 'design-review', name: '设计评审', icon: '🎨', time: '后天下午2点', participants: '设计团队、产品团队', topic: '设计方案评审' }
    ]
  },
  {
    name: '创意讨论',
    templates: [
      { id: 'brainstorm', name: '头脑风暴', icon: '💡', time: '明天下午2点', participants: '产品+设计', topic: '头脑风暴' },
      { id: 'planning', name: '规划会议', icon: '🎯', time: '下周一上午10点', participants: '管理层', topic: '季度规划会议' },
      { id: 'workshop', name: '工作坊', icon: '🛠️', time: '下周三全天', participants: '相关团队', topic: '技术工作坊' }
    ]
  },
  {
    name: '汇报会议',
    templates: [
      { id: 'progress', name: '进度汇报', icon: '📊', time: '今天下午5点', participants: '项目经理、团队', topic: '项目进度汇报' },
      { id: 'quarterly', name: '季度总结', icon: '📈', time: '月底下午2点', participants: '全体员工', topic: '季度总结会议' },
      { id: 'oneonone', name: '一对一', icon: '👥', time: '明天上午11点', participants: '经理+员工', topic: '一对一沟通' }
    ]
  }
]

// 指令下拉菜单相关
const showCommandDropdown = ref(false)
const commandOptions = [
  { command: '/meeting', icon: '📅', description: '快速查找我的会议', category: '查找' },
  { command: '/history', icon: '🕐', description: '快速查找历史记录', category: '查找' },
  { command: '/join', icon: '🚪', description: '快速加入会议', category: '操作' },
  { command: '/template', icon: '📝', description: '打开模板市场', category: '创建' },
  { command: '/create', icon: '✨', description: 'AI智能创建会议', category: '创建' }
]

// 预约会议相关
const showScheduleDialog = ref(false)
const scheduleForm = ref({
  title: '',
  date: '',
  time: '',
  location: '',
  duration: '60',
  memo: '',
  remindBefore: '15' // 提前多少分钟提醒
})

// 即时会议相关
const showInstantMeetingDialog = ref(false)
const instantMeetingName = ref('')

// 待办会议列表
interface PendingMeeting {
  id: string
  title: string
  date: string
  time: string
  location: string
  duration: string
  memo: string
  remindBefore: string
  status: 'pending' | 'reminded' | 'completed'
  createdAt: number
}

const pendingMeetings = ref<PendingMeeting[]>([])
const showPendingMeetings = ref(false)

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
    // 显示指令自动填充下拉菜单
    showCommandDropdown.value = true
    showSuggestions.value = false
  } else {
    // 不是指令，隐藏指令下拉菜单
    showCommandDropdown.value = false
  }
}

// 选择指令自动填充
const selectCommandSuggestion = (command: string) => {
  meetingInput.value = command
  showCommandDropdown.value = false

  // 聚焦到输入框，等待用户继续输入或按回车执行
  const inputElement = document.querySelector('.smart-input') as HTMLInputElement
  if (inputElement) {
    inputElement.focus()
  }
}

// 执行指令（按回车时调用）
const executeCommand = () => {
  const input = meetingInput.value.trim().toLowerCase()

  if (!input.startsWith('/')) {
    // 不是指令，执行普通创建
    quickCreate()
    return
  }

  // 隐藏下拉菜单
  showCommandDropdown.value = false

  if (input === '/meeting' || input.startsWith('/meeting ')) {
    // 打开我的会议面板
    showMyMeetings()
    const searchTerm = meetingInput.value.slice(8).trim()
    if (searchTerm) {
      meetingSearchQuery.value = searchTerm
    }
    meetingInput.value = ''
    showSuggestions.value = false
    return
  }

  if (input === '/history' || input.startsWith('/history ')) {
    // 打开历史记录面板
    showHistory()
    meetingInput.value = ''
    showSuggestions.value = false
    return
  }

  if (input === '/join' || input.startsWith('/join ')) {
    // 打开加入会议对话框
    const meetingInfo = meetingInput.value.slice(5).trim()
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

  if (input === '/template' || input.startsWith('/template')) {
    // 打开模板市场
    openTemplateMarket()
    meetingInput.value = ''
    showSuggestions.value = false
    return
  }

  if (input === '/create' || input.startsWith('/create ')) {
    // 直接AI创建
    meetingInput.value = ''
    quickCreate()
    return
  }

  // 未知指令
  alert('未知指令，请从下拉菜单中选择')
  meetingInput.value = ''
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
  showInstantMeetingDialog.value = true
  instantMeetingName.value = ''
}

// 关闭即时会议对话框
const closeInstantMeetingDialog = () => {
  showInstantMeetingDialog.value = false
  instantMeetingName.value = ''
}

// 开始即时会议
const startInstantMeeting = () => {
  if (!instantMeetingName.value.trim()) {
    alert('请输入会议名称')
    return
  }

  // 生成会议号
  const meetingId = generateMeetingId()
  const meetingName = instantMeetingName.value

  // 关闭对话框
  closeInstantMeetingDialog()

  // 跳转到会议室页面
  router.push({
    path: '/meeting',
    query: {
      id: meetingId,
      name: meetingName,
      type: 'instant',
      startTime: new Date().toISOString()
    }
  })
}

// 生成会议号
const generateMeetingId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < 3; i++) {
    if (i > 0) result += '-'
    for (let j = 0; j < 3; j++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  }
  return result
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
  // 跳转到会议室页面
  router.push({
    path: '/meeting',
    query: {
      id: meeting.id,
      name: meeting.topic,
      type: 'my-meeting',
      participants: meeting.participants
    }
  })
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
  showJoinMeetingDialog.value = true
  joinMeetingInput.value = ''
  joinMeetingType.value = 'code'
}

// 关闭加入会议对话框
const closeJoinDialog = () => {
  showJoinMeetingDialog.value = false
  joinMeetingInput.value = ''
}

// 从剪贴板粘贴
const pasteFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText()
    if (text) {
      joinMeetingInput.value = text.trim()
    }
  } catch (err) {
    console.error('无法访问剪贴板:', err)
    alert('无法访问剪贴板，请手动粘贴')
  }
}

// 确认加入会议
const confirmJoinMeeting = () => {
  if (!joinMeetingInput.value && joinMeetingType.value !== 'qr') {
    alert('请输入会议信息')
    return
  }

  const meetingInfo = joinMeetingInput.value
  const joinType = joinMeetingType.value

  // 关闭对话框
  closeJoinDialog()

  // 跳转到会议室页面
  router.push({
    path: '/meeting',
    query: {
      id: meetingInfo,
      type: 'join',
      joinMethod: joinType
    }
  })
}

// 打开摄像头扫描二维码
const openCamera = () => {
  console.log('打开摄像头扫描二维码')
  // TODO: 实现摄像头扫描二维码功能
  alert('摄像头功能开发中...')
}

// 指令下拉菜单相关函数
// 过滤指令
const filteredCommands = computed(() => {
  const input = meetingInput.value.toLowerCase().trim()
  if (!input.startsWith('/')) return commandOptions

  const searchTerm = input.slice(1)
  if (!searchTerm) return commandOptions

  return commandOptions.filter(cmd =>
    cmd.command.toLowerCase().includes(searchTerm) ||
    cmd.description.includes(searchTerm)
  )
})

// 模板市场相关函数
// 打开模板市场
const openTemplateMarket = () => {
  showTemplateMarket.value = true
}

// 关闭模板市场
const closeTemplateMarket = () => {
  showTemplateMarket.value = false
}

// 选择模板
const selectTemplate = (template: any) => {
  // 应用模板到输入框
  templateMode.value = true
  templateData.value = {
    time: template.time,
    participants: template.participants,
    topic: template.topic
  }

  // 关闭模板市场
  closeTemplateMarket()

  // 显示成功提示
  console.log('已选择模板:', template.name)
}

// 预约会议相关函数
// 修改scheduleMeeting函数打开预约对话框
const scheduleMeeting = () => {
  openScheduleDialog()
}

// 打开预约对话框
const openScheduleDialog = () => {
  showScheduleDialog.value = true
  // 重置表单
  scheduleForm.value = {
    title: '',
    date: '',
    time: '',
    location: '',
    duration: '60',
    memo: '',
    remindBefore: '15'
  }
}

// 关闭预约对话框
const closeScheduleDialog = () => {
  showScheduleDialog.value = false
}

// 保存预约会议
const saveScheduledMeeting = () => {
  const newMeeting: PendingMeeting = {
    id: Date.now().toString(),
    title: scheduleForm.value.title,
    date: scheduleForm.value.date,
    time: scheduleForm.value.time,
    location: scheduleForm.value.location,
    duration: scheduleForm.value.duration,
    memo: scheduleForm.value.memo,
    remindBefore: scheduleForm.value.remindBefore,
    status: 'pending',
    createdAt: Date.now()
  }

  pendingMeetings.value.push(newMeeting)

  // 设置提醒
  setupMeetingReminder(newMeeting)

  // 关闭对话框
  closeScheduleDialog()

  // 显示成功提示
  alert(`会议预约成功！\n${newMeeting.title}\n${newMeeting.date} ${newMeeting.time}`)

  console.log('创建预约会议:', newMeeting)
}

// 待办会议相关
// 计算待办会议数量
const pendingMeetingsCount = computed(() => {
  return pendingMeetings.value.filter(m => m.status !== 'completed').length
})

// 排序后的待办会议（按日期时间排序）
const sortedPendingMeetings = computed(() => {
  return [...pendingMeetings.value].sort((a, b) => {
    const dateTimeA = new Date(`${a.date} ${a.time}`).getTime()
    const dateTimeB = new Date(`${b.date} ${b.time}`).getTime()
    return dateTimeA - dateTimeB
  })
})

// 切换待办会议面板
const togglePendingMeetings = () => {
  showPendingMeetings.value = !showPendingMeetings.value
  if (showPendingMeetings.value) {
    showMyMeetingsPanel.value = false
    showHistoryPanel.value = false
  }
}

// 关闭待办会议面板
const closePendingMeetings = () => {
  showPendingMeetings.value = false
}

// 完成会议
const completeMeeting = (id: string) => {
  const meeting = pendingMeetings.value.find(m => m.id === id)
  if (meeting) {
    meeting.status = 'completed'
    console.log('会议已完成:', meeting.title)
  }
}

// 开始待办会议
const startPendingMeeting = (meeting: PendingMeeting) => {
  // 跳转到会议室页面
  router.push({
    path: '/meeting',
    query: {
      id: meeting.id,
      name: meeting.title,
      type: 'scheduled',
      date: meeting.date,
      time: meeting.time,
      location: meeting.location,
      duration: meeting.duration
    }
  })
}

// 删除会议
const deleteMeeting = (id: string) => {
  const index = pendingMeetings.value.findIndex(m => m.id === id)
  if (index > -1) {
    const meeting = pendingMeetings.value[index]
    if (confirm(`确定要删除会议"${meeting.title}"吗？`)) {
      pendingMeetings.value.splice(index, 1)
      console.log('会议已删除:', meeting.title)
    }
  }
}

// 获取会议状态样式类
const getMeetingStatusClass = (meeting: PendingMeeting) => {
  if (meeting.status === 'completed') {
    return 'completed'
  } else if (meeting.status === 'reminded') {
    return 'ongoing'
  } else {
    return 'upcoming'
  }
}

// 获取会议状态文本
const getMeetingStatusText = (meeting: PendingMeeting) => {
  if (meeting.status === 'completed') {
    return '已完成'
  } else if (meeting.status === 'reminded') {
    return '已提醒'
  } else {
    return '待办'
  }
}

// 会议提醒功能
const setupMeetingReminder = (meeting: PendingMeeting) => {
  // 计算提醒时间
  const meetingDateTime = new Date(`${meeting.date} ${meeting.time}`)
  const remindMinutes = parseInt(meeting.remindBefore)
  const remindTime = new Date(meetingDateTime.getTime() - remindMinutes * 60 * 1000)
  const now = new Date()

  const timeUntilRemind = remindTime.getTime() - now.getTime()

  if (timeUntilRemind > 0) {
    // 设置定时器
    setTimeout(() => {
      showMeetingNotification(meeting)
    }, timeUntilRemind)

    console.log(`会议提醒已设置: ${meeting.title}，将在${remindTime.toLocaleString()}提醒`)
  }
}

// 显示会议通知
const showMeetingNotification = (meeting: PendingMeeting) => {
  // 更新会议状态为已提醒
  meeting.status = 'reminded'

  // 浏览器通知
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('会议提醒', {
      body: `${meeting.title}\n时间: ${meeting.date} ${meeting.time}\n地点: ${meeting.location}`,
      icon: '/favicon.ico',
      tag: meeting.id
    })
  } else {
    // 降级为alert
    alert(`会议提醒\n\n${meeting.title}\n时间: ${meeting.date} ${meeting.time}\n地点: ${meeting.location}`)
  }

  // 播放提示音（如果需要）
  playNotificationSound()
}

// 播放提示音
const playNotificationSound = () => {
  try {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjOR1vPTgjMGHm7A7+OZUA0PVq7n77BdGAg+ltryxnMkBSuBzvLZiTgIGWi77OScTgwNUKjj8LZjHAU5kdXzzH0tBSF3x+/dkUEKFFyz6e2pVhUKRp/h8r9tIQYyktXy1YI0Bh9twO7kmFENDlat5+iwXRcJPpbZ88l0JQQrf8rx2og4CBdou+zalE0MDU+n4+61YRwEOJHV8dF9LQQgdsXv3ZFBChRbs+ntqVYVCkef4fK/bSIGMpLV8dWCNAYfbcDu5JhRDQ5WreftsFwWCT2V2PjJdSYFL37K8tmIOQgXZ7zs2pRNCwxOp+LutmEcBDiQ1fLRfS4EIHbE7t2RQQsUWrPp7alWFQpHn9/yv24iBjGS1fHVgjQGH2y/7+SYUg0OV67m77BcFgk9ldjzyXUnBS9+yfLZhzkIF2e77NqUTQwMTqfi7rVhGwU5kdXy0X4uBCB1w+3dkEAKFFux6OupVxQKR5/h8r5uIQYyktXx1YI0Bh9sv+/kmFINDlau5u+wXBYJPZXY88l1JwQvfsnx2Yc5CBhnu+zalE0MDU6n4u60YRsGOZHV8dF+LgUgdcPt3Y9ACRVasuntqVcUCkeQ4fO+bSIGMZLV8dWCNAYfbL/v5JhSDQ5WreXwsFsWCT+W2PTJdScFL37J8tmHOQgYZ7rs2pNOCw1Op+LutGAcBDqR1fLSfi4FIHbE7d+RQQoUWbTo7KlXFApHn+HywG0jBjGR1fLVgzMGH2y+7uWYUQ0NVazl765eGAc/ltnzyHUnBC9+yvLYhzkIGGe67NqTTgsNTqfi7rRgGwY6kdTx0n0vBSJ2xO7dkUEKFFuy6OypVxUKR5/g8sFtIgYxkdTx1oM0BR9svevkmVENDVWs5e+uXhgHP5XY88h0JgQvf8ny2Ic5CBdnuuvak04LDE6n4u60YBsGOpHU8tJ9LgQgdsPt3ZFACRRbsunrqVgUCkef4PLBbSMGMZHU8daCNAYfbL7u5ZhRDQ5VrObvrl0YCD+V2PjIdCYEL3/J8tiHOggXZ7vr2pNOCw1Op+DutF8dBjqR1PHRfi4FIHbD7d2RQQkUW7Lp66lYFApGn+DywW0jBjCR1PHWgjQGH2u+7uWYUg0NVazl765dGAg/lNj4yHUmBC9+yfLYhzoIF2e769qTTgwMTqfg77RfHQY6kdTx0X4uBSB2w+3dkEAJFFqy6eupWBQKRp/g8sFtIwYwkdPx1oI0Bh5svu7lmFINDVWs5e+tXhgIPpTY+Mh1JgQuf8nz2Yc6CBdmuuvak04MDU6n4O+0Xx4FO5HT8dF+LgQgdcLt3ZBACRRasunrqVgUCkaf4PLBbSMGMJHT8daCMwYebL3u5ZhSDQxVrOXvrV4YCT6U2PnIdCYELn/J89mGOggXZrrr2pNODA1Op9/vtF8eBTuR0/HRfi4EIHXC7d2RQAkUWbHp66lZFApGn+DywW4iBjCR0vHWgTMGHmy97uWYUg0NVavl761eGAo+lNj5x3QnBC5/yfPZhzoIGGa669qTTwwMTqff7rRfHgU7kdPx0H4tBCB1we3dkEAIFFmx6euqWRUKRp/h8sFtIwYxkdLx1oEzBh9svu7lmFIODVWr5u+tXhgKPpPY+cd0JwQuf8n02Yg6CBdmu+valE4MDU6o3+60YB4FO5LU8dF+LgUhdcHt3pFACBRYsOjsqlkVCkaf4fPBbiMGMZHS8NaBMwYfbb7u5ZhRDg1Vq+bvrV4YCz6T2PnHdSgELX/K9NqIOggYZ7vt2pRPCwxPqN/vtWAeBTuS1PLRfi4FIXbC7d6RQAgUWLDo7KpZFgpGnt/zwW4jBjGS0/HXgjMHH22+7+aYUQ4OVavl761eGAs+k9j5yHQnBS1+yfTaiDsIF2a77NqTTwsLT6nf7rVgHgY7ktLx0X0vBSF2we3dkEAIE1iw6OyqWhYKR57g8sJuIgYyktPx14IzBx9tu/DmmVIODVWs5u+tXRgLPpPY+ch0JwQtfsnz2Yc5CBdmuuzak04LDE+o3+61YB4GO5LS8dF9LwUgdr/t3pBABxRYsOjsqlkWCkee4PLCbiIGMpLT8deCMwcfbbvw5plSDg1VrObvrV0YCz6S2PnIdCcELH7J89mGOggWZ7rs2ZNOCwxPqN/utWAeCjyS0vLRfS8FIHa/7d+RQAcUV7Dn7KpaFgpHnt/ywm4jBjGS0/HXgjMHH228+OSZUg4NVKzm761dGQs+ktj5x3UnBSx+yfPZhzoIFma669mTTgsLT6je7rZgHgo7ktLy0X4uBSB2v+3fkT8HFFex6OyrWhYKR57f8sJuIgYxktLx1oIzBx9tvPjjmVEODVSs5u+sXhkLPpLX+cd1JwUsfsnz2YY6CBZmuuvZk04KC0+o3u62YR0LO5LR8dF+LgQgd7/s35E/BxRXsejsq1oWC0ed3/HCbiMGMZLS8daCMwcgb7v441lSDgxUq+bvrF4YCz2R1/rGdCcFLH7I89mHOggWZ7rr2ZNOCgtPqN7utmEdCzuS0fHSfi4EH3e/7N+RPwcTVrHo7KtaFgtHnd/xwm4jBjCR0vLWgjMHIG+78ONZUQ4MVKvl76xeGQw9kdj6xnQnBSt+yPPYhzoIFWe669mSTgoLT6je7rZhHgs7ktHx0n4tBB93v+zekUAGE1Wx5+yrWhYLR5ze8cNtIwYwkdLy1YIzCB9vvPDjWVEODVOq5u+sXxkMPJHY+sZ0JwUrfsjy2IY6CBVnu+rZkk4KC0+o3u62YB4LOpHR8dJ+LgQfd7/s3pFABhNVsenrqlkXC0ec3vDDb SOMGMJHx8tWCMwgfb7z w41pRDgxTquburF8ZDD2R1/rGdCcEK37I8tiGOggVZ7vq2ZJOCgtPqN7utmAeC jqR0fHSfi4EH3e/7N6RQAYTVbHo66pZFwtHnN7ww24iBjCR0fLVgjIIH2+88OBaUQ4MU6rm76xfGAs9kdf5xXQoBCp+yPLYhjoIFWe76tiSTgsKT6je7bZgHgs6kdHx0X4vBB94v+3ekT8GFFSE')
    audio.play().catch(() => {
      // 忽略播放失败
    })
  } catch (e) {
    // 忽略错误
  }
}

// 请求通知权限
onMounted(() => {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission()
  }
})

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

  0%,
  100% {
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
      background: linear-gradient(to bottom,
          rgba(139, 92, 246, 0.5),
          rgba(139, 92, 246, 0.2),
          transparent);
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

// 加入会议对话框样式
.join-dialog-overlay {
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

  .join-dialog {
    width: 100%;
    max-width: 550px;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    .join-dialog-header {
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

    .join-dialog-body {
      padding: 2rem;

      .join-methods {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        margin-bottom: 2rem;

        .method-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;

          svg {
            width: 24px;
            height: 24px;
            stroke-width: 2;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(139, 92, 246, 0.3);
            color: rgba(255, 255, 255, 0.9);
          }

          &.active {
            background: rgba(139, 92, 246, 0.2);
            border-color: rgba(139, 92, 246, 0.5);
            color: #fff;
            font-weight: 600;

            svg {
              color: #a78bfa;
            }
          }
        }
      }

      .join-input-section {
        label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 0.75rem;
        }

        .join-input {
          width: 100%;
          padding: 0.875rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
          font-family: 'Courier New', monospace;

          &::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          &:focus {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(139, 92, 246, 0.5);
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
          }
        }

        .input-hint {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .paste-btn {
          margin-top: 0.75rem;
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s;

          svg {
            width: 18px;
            height: 18px;
            stroke-width: 2;
          }

          &:hover {
            background: rgba(139, 92, 246, 0.2);
            border-color: rgba(139, 92, 246, 0.5);
            color: #fff;
          }
        }

        &.qr-section {
          .qr-scanner-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem 2rem;
            background: rgba(255, 255, 255, 0.03);
            border: 2px dashed rgba(139, 92, 246, 0.3);
            border-radius: 16px;

            .camera-icon {
              width: 80px;
              height: 80px;
              color: rgba(139, 92, 246, 0.5);
              margin-bottom: 1rem;
              stroke-width: 1.5;
            }

            p {
              font-size: 0.95rem;
              color: rgba(255, 255, 255, 0.6);
              margin: 0 0 1.5rem 0;
            }

            .open-camera-btn {
              padding: 0.75rem 1.5rem;
              background: linear-gradient(135deg, #8b5cf6, #6366f1);
              border: none;
              border-radius: 12px;
              color: #fff;
              font-size: 0.9rem;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              transition: all 0.3s;

              svg {
                width: 18px;
                height: 18px;
                stroke-width: 2;
              }

              &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
              }
            }
          }
        }
      }

      .join-actions {
        margin-top: 2rem;

        .join-confirm-btn {
          width: 100%;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          border: none;
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: all 0.3s;

          svg {
            width: 20px;
            height: 20px;
            stroke-width: 2;
          }

          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
          }

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }
    }
  }
}

// 指令下拉菜单样式（自动填充模式）
.command-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  padding: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 100;
  max-height: 450px;
  overflow: hidden;

  .command-dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);

    .header-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        content: '⚡';
        font-size: 1rem;
      }
    }

    .header-hint {
      font-size: 0.75rem;
      color: rgba(139, 92, 246, 0.8);
      padding: 0.25rem 0.5rem;
      background: rgba(139, 92, 246, 0.15);
      border-radius: 6px;
    }
  }

  .command-list {
    max-height: 350px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .command-item {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.875rem 1rem;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.25s ease;
      background: rgba(255, 255, 255, 0.02);
      margin-bottom: 0.5rem;
      border: 1px solid transparent;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15));
        border-color: rgba(139, 92, 246, 0.4);
        transform: translateX(6px);
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);

        .command-icon {
          transform: scale(1.15);
        }

        .command-text {
          color: rgba(139, 92, 246, 0.95);
        }
      }

      &:active {
        transform: translateX(6px) scale(0.98);
      }

      .command-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
        transition: transform 0.25s ease;
      }

      .command-info {
        flex: 1;
        min-width: 0;

        .command-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
          transition: color 0.25s ease;
          margin-bottom: 0.25rem;
        }

        .command-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.4;
        }
      }

      .command-category {
        font-size: 0.7rem;
        padding: 0.3rem 0.6rem;
        background: rgba(139, 92, 246, 0.2);
        border-radius: 8px;
        color: rgba(139, 92, 246, 0.95);
        flex-shrink: 0;
        font-weight: 600;
        border: 1px solid rgba(139, 92, 246, 0.3);
      }
    }
  }
}

// 模板市场样式
.template-market-overlay {
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

  .template-market {
    width: 100%;
    max-width: 900px;
    max-height: 85vh;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .template-market-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem 1.5rem 2rem;
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
      background: rgba(139, 92, 246, 0.05);

      h4 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #a78bfa, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .template-market-body {
      flex: 1;
      padding: 1.5rem 2rem;
      overflow-y: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .template-category {
        margin-bottom: 2rem;

        &:last-child {
          margin-bottom: 0;
        }

        .category-name {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1rem 0;
          padding-left: 0.5rem;
          border-left: 3px solid rgba(139, 92, 246, 0.7);
        }

        .template-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1rem;

          .template-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(139, 92, 246, 0.2);
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background: rgba(139, 92, 246, 0.1);
              border-color: rgba(139, 92, 246, 0.4);
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);

              .template-select-btn {
                opacity: 1;
                transform: scale(1);
              }
            }

            .template-icon {
              font-size: 2.5rem;
              flex-shrink: 0;
            }

            .template-info {
              flex: 1;
              min-width: 0;

              .template-name {
                font-size: 1rem;
                font-weight: 600;
                color: rgba(255, 255, 255, 0.9);
                margin: 0 0 0.5rem 0;
              }

              .template-detail {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
                margin: 0.25rem 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }

            .template-select-btn {
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #8b5cf6, #6366f1);
              border-radius: 50%;
              opacity: 0;
              transform: scale(0.8);
              transition: all 0.3s;

              svg {
                width: 16px;
                height: 16px;
                color: #fff;
                stroke-width: 2.5;
              }
            }
          }
        }
      }
    }
  }
}

// 预约会议对话框样式
.schedule-dialog-overlay {
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

  .schedule-dialog {
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .schedule-dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem 1.5rem 2rem;
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
      background: rgba(139, 92, 246, 0.05);

      h4 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #a78bfa, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .schedule-dialog-body {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .form-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);

            .label-icon {
              font-size: 1.1rem;
            }
          }

          .form-input,
          .form-textarea {
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.95rem;
            transition: all 0.3s;

            &:focus {
              outline: none;
              border-color: rgba(139, 92, 246, 0.6);
              background: rgba(255, 255, 255, 0.08);
              box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
            }

            &::placeholder {
              color: rgba(255, 255, 255, 0.4);
            }
          }

          .form-textarea {
            resize: vertical;
            min-height: 100px;
            font-family: inherit;
          }
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;

          button {
            flex: 1;
            padding: 0.875rem 1.5rem;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            svg {
              width: 18px;
              height: 18px;
              stroke-width: 2;
            }
          }

          .btn-cancel {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);

            &:hover {
              background: rgba(255, 255, 255, 0.15);
            }
          }

          .btn-submit {
            background: linear-gradient(135deg, #8b5cf6, #6366f1);
            color: #fff;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
            }
          }
        }
      }
    }
  }
}

// 即时会议对话框样式
.instant-meeting-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;

  .instant-meeting-dialog {
    width: 500px;
    max-width: 90vw;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);

    .instant-meeting-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2rem 2rem 1.5rem 2rem;
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
      background: rgba(139, 92, 246, 0.05);
      position: relative;

      .header-icon {
        font-size: 2rem;
        animation: pulse 2s ease-in-out infinite;
      }

      h4 {
        flex: 1;
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #a78bfa, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .close-btn-small {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(139, 92, 246, 0.5);
          color: #fff;
          transform: rotate(90deg);
        }
      }
    }

    .instant-meeting-body {
      padding: 2rem;

      form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          .form-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.95rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);

            .label-icon {
              font-size: 1.2rem;
            }
          }

          .form-input {
            padding: 1rem 1.25rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
            transition: all 0.3s;

            &:focus {
              outline: none;
              border-color: rgba(139, 92, 246, 0.6);
              background: rgba(255, 255, 255, 0.08);
              box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
            }

            &::placeholder {
              color: rgba(255, 255, 255, 0.4);
            }
          }

          .form-hint {
            margin: 0;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
            line-height: 1.5;
          }
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;

          button {
            flex: 1;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            svg {
              width: 18px;
              height: 18px;
              stroke-width: 2;
            }
          }

          .btn-cancel {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);

            &:hover {
              background: rgba(255, 255, 255, 0.15);
              transform: translateY(-1px);
            }
          }

          .btn-submit.instant {
            background: linear-gradient(135deg, #8b5cf6, #6366f1);
            color: #fff;
            position: relative;
            overflow: hidden;

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
              transition: left 0.5s;
            }

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);

              &::before {
                left: 100%;
              }
            }

            svg {
              animation: playPulse 1.5s ease-in-out infinite;
            }
          }
        }
      }
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes playPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

// 待办会议面板样式
.pending-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98));
  border-left: 1px solid rgba(139, 92, 246, 0.3);
  box-shadow: -10px 0 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  flex-direction: column;

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  // 使用与"我的会议"相同的卡片样式
  .meetings-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .meeting-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 16px;
    padding: 1.5rem;
    transition: all 0.3s;
    cursor: default;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(139, 92, 246, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
    }
  }

  // 备忘框样式
  .meeting-memo-box {
    margin-top: 1rem;
    padding: 0.875rem;
    background: rgba(139, 92, 246, 0.05);
    border-left: 3px solid rgba(139, 92, 246, 0.5);
    border-radius: 8px;

    .memo-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;

      .memo-icon {
        width: 16px;
        height: 16px;
        color: rgba(139, 92, 246, 0.8);
        stroke-width: 2;
      }

      .memo-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(139, 92, 246, 0.9);
      }
    }

    .memo-content {
      margin: 0;
      font-size: 0.85rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  // 提醒框样式
  .meeting-reminder-box {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 0.875rem;
    background: rgba(250, 204, 21, 0.08);
    border-radius: 8px;

    .reminder-icon {
      width: 16px;
      height: 16px;
      color: rgba(250, 204, 21, 0.9);
      stroke-width: 2;
      flex-shrink: 0;
    }

    .reminder-text {
      font-size: 0.85rem;
      color: rgba(250, 204, 21, 0.95);
      font-weight: 500;
    }
  }

  // 操作按钮栏
  .meeting-actions-bar {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(139, 92, 246, 0.1);

    .action-btn-new {
      flex: 1;
      padding: 0.625rem 1rem;
      border: none;
      border-radius: 10px;
      font-size: 0.875rem;
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
      }

      &.success {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(16, 185, 129, 0.25));
        color: rgba(34, 197, 94, 0.95);
        border: 1px solid rgba(34, 197, 94, 0.3);

        &:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.35), rgba(16, 185, 129, 0.35));
          border-color: rgba(34, 197, 94, 0.5);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.25);
        }
      }

      &.primary {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(99, 102, 241, 0.25));
        color: rgba(139, 92, 246, 0.95);
        border: 1px solid rgba(139, 92, 246, 0.3);

        &:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(99, 102, 241, 0.35));
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);
        }
      }

      &.danger {
        background: rgba(239, 68, 68, 0.15);
        color: rgba(239, 68, 68, 0.95);
        border: 1px solid rgba(239, 68, 68, 0.25);

        &:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: rgba(239, 68, 68, 0.4);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }
      }
    }
  }

  .empty-state {
    .empty-action-btn {
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #8b5cf6, #6366f1);
      border: none;
      border-radius: 12px;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
      }
    }
  }
}

// 导航栏徽章样式
.badge-pending {
  background: linear-gradient(135deg, #facc15, #f59e0b);
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

// 上滑动画（用于下拉菜单）
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

// 隐藏所有滚动条
.panel-content,
.meetings-list,
.timeline-list,
.history-list {
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
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

  .meeting-sidebar {
    width: 100%;
  }
}
</style>