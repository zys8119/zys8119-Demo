<template>
    <div class='meeting-container'>
        <div class="video-player" @click="togglePlay">
            <div class="play-button" v-if="!isPlaying">
                <div class="play-icon"></div>
            </div>
            <div class="progress-bar" @click.stop="updateProgress">
                <div class="progress-track">
                    <div class="progress-fill" :style="{width: `${progressPercentage * 100}%`}"></div>
                </div>
                <div class="progress-dot" :style="{left: `${progressPercentage * 100}%`}"></div>
                <div class="time-display">
                    <span>{{ formatTime(currentTime) }}</span>
                    <span>{{ formatTime(totalTime) }}</span>
                </div>
            </div>
        </div>
        
        <div class="tab-container">
            <div class="tabs">
                <div 
                    v-for="(tab, index) in tabs" 
                    :key="index"
                    class="tab" 
                    :class="{active: activeTabIndex === index}"
                    @click="switchTab(index)"
                >
                    {{ tab }}
                </div>
            </div>
            
            <div class="meeting-info">
                <h3>会议信息</h3>
                <ul>
                    <li><span class="label">主题：</span>环讨学校接下知识管理工具的应用与优化</li>
                    <li><span class="label">会议时间：</span>2025-05-19 11:02:05 ~ 2025-05-19 12:05:49</li>
                    <li><span class="label">时长：</span>约1小时3分钟</li>
                    <li><span class="label">参与人数：</span>54人</li>
                </ul>
                <div class="meeting-summary">
                    <h4>会议结论：</h4>
                    <div class="editor-container">
                        <div class="editor-toolbar" ref="toolbarRef"></div>
                        <div class="editor-content" ref="editorRef"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, shallowRef, onBeforeUnmount, h } from 'vue';
import '@wangeditor/editor/dist/css/style.css';
import { IDomEditor, IEditorConfig, IToolbarConfig, createEditor, createToolbar } from '@wangeditor/editor';

// 标签页切换逻辑
const activeTabIndex = ref(0);
const tabs = [
  '文字记录',
  '摘要记录',
  '智能总结',
  '会议笔记',
  '待办事项',
  '行动事项'
];

const switchTab = (index: number) => {
  activeTabIndex.value = index;
};

// 视频播放控制逻辑
const isPlaying = ref(false);
const currentTime = ref(0);
const totalTime = ref(224); // 3分44秒，单位为秒
const progressPercentage = ref(0);

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
  // 这里可以添加实际的视频播放/暂停逻辑
};

const updateProgress = (event: MouseEvent) => {
  const progressBar = event.currentTarget as HTMLElement;
  const rect = progressBar.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = offsetX / rect.width;
  
  progressPercentage.value = percentage;
  currentTime.value = totalTime.value * percentage;
  // 这里可以添加实际的视频跳转逻辑
};

// 富文本编辑器相关逻辑
const editorRef = ref<HTMLElement | null>(null);
const toolbarRef = ref<HTMLElement | null>(null);
const editor = shallowRef<IDomEditor | null>(null);

// 编辑器内容
const editorContent = '<p>需要探讨学校接下知识管理工具的应用与优化开发讨论，主要内容包括：</p><ul><li>研学记录点</li><li>研学项目中的</li></ul>';

// 编辑器配置
const editorConfig = {
  placeholder: '请输入内容...',
  autoFocus: false,
};

// 工具栏配置
const toolbarConfig = {
  toolbarKeys: [
    'headerSelect',
    'blockquote',
    '|',
    'bold',
    'italic',
    'underline',
    'through',
    'color',
    'bgColor',
    '|',
    'bulletedList',
    'numberedList',
    'todo',
    '|',
    'insertTable',
    'codeBlock',
    'divider',
  ],
};

onMounted(() => {
  // 初始化编辑器
  if (editorRef.value && toolbarRef.value) {
    // 创建编辑器实例
    const newEditor = createEditor({
      selector: editorRef.value,
      content: editorContent,
      config: editorConfig,
    });
    editor.value = newEditor;

    // 创建工具栏实例
    createToolbar({
      editor: newEditor,
      selector: toolbarRef.value,
      config: toolbarConfig,
    });
  }

  // 实际项目中，这里应该监听视频的timeupdate事件
  // 这里只是简单模拟
  if (isPlaying.value) {
    const timer = setInterval(() => {
      if (currentTime.value < totalTime.value) {
        currentTime.value += 1;
        progressPercentage.value = currentTime.value / totalTime.value;
      } else {
        clearInterval(timer);
        isPlaying.value = false;
      }
    }, 1000);
  }
});

// 组件销毁时，销毁编辑器
onBeforeUnmount(() => {
  // 销毁编辑器实例
  if (editor.value) {
    editor.value.destroy();
  }
});
</script>

<style scoped lang="less">
.meeting-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.video-player {
    width: 100%;
    height: 200px;
    background-color: #000;
    position: relative;
    cursor: pointer;
    
    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .play-icon {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 10px 0 10px 20px;
            border-color: transparent transparent transparent #fff;
            margin-left: 5px;
        }
    }
    
    .progress-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
        
        .progress-track {
            position: absolute;
            left: 10px;
            right: 10px;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            overflow: hidden;
            
            .progress-fill {
                height: 100%;
                background-color: #fff;
                border-radius: 2px;
                transition: width 0.1s;
            }
        }
        
        .progress-dot {
            width: 12px;
            height: 12px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 4px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            transition: left 0.1s;
        }
        
        .time-display {
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: #fff;
            font-size: 12px;
            padding: 0 20px;
            position: absolute;
            bottom: 5px;
        }
    }
}

.tab-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    .tabs {
        display: flex;
        border-bottom: 1px solid #eee;
        
        .tab {
            padding: 12px 15px;
            font-size: 14px;
            color: #666;
            position: relative;
            cursor: pointer;
            
            &.active {
                color: #000;
                font-weight: 500;
                
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                }
            }
        }
    }
    
    .meeting-info {
        padding: 15px;
        
        h3 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            
            li {
                margin-bottom: 10px;
                font-size: 14px;
                color: #333;
                
                .label {
                    font-weight: 500;
                }
            }
        }
        
        .meeting-summary {
            margin-top: 20px;
            
            h4 {
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 10px;
            }
            
            p {
                font-size: 14px;
                color: #333;
                margin-bottom: 10px;
            }
            
            .editor-container {
                border: 1px solid #eee;
                border-radius: 4px;
                overflow: hidden;
                
                :deep(.w-e-toolbar) {
                    border-bottom: 1px solid #eee;
                    background-color: #f9f9f9;
                }
                
                :deep(.w-e-text-container) {
                    min-height: 200px;
                    max-height: 500px;
                    overflow-y: auto;
                }
            }
            
            ul {
                padding-left: 15px;
                
                li {
                    display: flex;
                    align-items: center;
                    
                    .checkbox {
                        width: 16px;
                        height: 16px;
                        border: 1px solid #ddd;
                        border-radius: 2px;
                        margin-right: 8px;
                    }
                }
            }
            
            .editor-container {
                border: 1px solid #eee;
                border-radius: 4px;
                overflow: hidden;
                margin-top: 10px;
                
                .editor-toolbar {
                    border-bottom: 1px solid #eee;
                }
                
                .editor-content {
                    min-height: 200px;
                    max-height: 400px;
                    overflow-y: auto;
                }
                
                :deep(.w-e-text-container) {
                    min-height: 200px;
                }
                
                :deep(.w-e-toolbar) {
                    border-bottom: 1px solid #eee;
                    background-color: #f9f9f9;
                }
                
                :deep(.w-e-text-container) {
                    border: none;
                }
                
                :deep(.w-e-toolbar) {
                    border: none;
                }
            }
        }
    }
}
</style>