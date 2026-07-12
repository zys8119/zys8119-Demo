/**
 * 视频水印去除工具 - 路由配置
 * 将此配置添加到你的路由文件中
 */

// 如果使用 Vue Router，添加以下路由配置：

export const watermarkRemoverRoute = {
  path: '/tools/watermark-remover',
  name: 'watermark-remover',
  component: () => import('@/views/video-watermark-remover.vue'),
  meta: {
    title: '视频水印去除工具',
    description: '在线去除视频水印，支持多位置框选和实时预览',
    icon: 'video-remove', // 可选：菜单图标
  },
}

// 完整路由配置示例（router/index.ts 或 router/index.js）：
/*
import { createRouter, createWebHistory } from 'vue-router'
import { watermarkRemoverRoute } from '@/router/tools'

const routes = [
  // ... 其他路由
  watermarkRemoverRoute,
  // ... 更多路由
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
*/

// 如果想添加到菜单项，可以这样配置：
export const toolsMenuItems = [
  {
    label: '视频水印去除',
    icon: 'i-mdi-video-remove-outline',
    to: '/tools/watermark-remover',
    description: '在线去除视频水印工具',
  },
  // ... 其他工具
]

export default {
  watermarkRemoverRoute,
  toolsMenuItems,
}
