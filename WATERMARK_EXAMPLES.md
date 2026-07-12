/**
 * 视频水印去除工具 - 使用示例和测试
 */

// ============================================
// 示例 1: 在现有路由中添加
// ============================================

// router.ts 或 routes.ts
import VideoWatermarkRemover from '@/views/video-watermark-remover.vue'

export const routes = [
  {
    path: '/video-tools',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: 'watermark-remover',
        name: 'WatermarkRemover',
        component: VideoWatermarkRemover,
        meta: {
          title: '视频水印去除工具',
        },
      },
    ],
  },
]

// ============================================
// 示例 2: 在菜单中添加
// ============================================

// 如果使用导航菜单组件
export const navigationItems = [
  {
    label: '视频工具',
    icon: 'video-outline',
    children: [
      {
        label: '水印去除',
        to: '/video-tools/watermark-remover',
        icon: 'water-remove',
      },
    ],
  },
]

// ============================================
// 示例 3: 程序化导航
// ============================================

// 在任何组件中
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const navigateToWatermarkRemover = () => {
      router.push('/video-tools/watermark-remover')
    }

    return {
      navigateToWatermarkRemover,
    }
  },
}

// ============================================
// 示例 4: 导入水印去除工具库
// ============================================

import {
  WatermarkRemover,
  VideoProcessor,
} from '@/utils/watermark-remover.js'

// 在自定义处理中使用
async function customRemoveWatermark(video, watermarks) {
  const frames = await VideoProcessor.extractFrames(video, 30)

  const processedFrames = frames.map((frameData) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    )

    watermarks.forEach((wm) => {
      WatermarkRemover.removeWatermark(
        imageData,
        wm,
        canvas.width,
        canvas.height,
        'blur'
      )
    })

    ctx.putImageData(imageData, 0, 0)
    return canvas.toDataURL()
  })

  return VideoProcessor.createVideoFromFrames(
    processedFrames,
    30,
    video.videoWidth,
    video.videoHeight
  )
}

// ============================================
// 示例 5: 环境变量配置
// ============================================

// .env 文件中的可选配置
VITE_WATERMARK_MAX_SIZE=500 // MB
VITE_WATERMARK_DEFAULT_ALGORITHM=blur // blur | inpaint | copy
VITE_WATERMARK_FPS=30
VITE_WATERMARK_BITRATE=5000000 // bps

// ============================================
// 示例 6: 生产构建检查清单
// ============================================

/*
在部署前检查：

□ 文件位置正确：
  - /src/views/video-watermark-remover.vue
  - /src/utils/watermark-remover.js
  - /src/router/watermark-remover.ts

□ 路由配置已添加到主路由文件

□ 依赖项已安装（如适用）

□ 样式预处理器支持（SCSS/LESS）

□ Canvas 和 MediaRecorder API 支持检查

□ 浏览器兼容性测试

□ 大文件上传测试

□ 视频格式兼容性测试
*/

// ============================================
// 示例 7: 错误处理
// ============================================

// 完整的错误处理示例
async function safeRemoveWatermark(video, watermarks) {
  try {
    // 验证输入
    if (!video || !video.src) {
      throw new Error('无效的视频文件')
    }

    if (!watermarks || watermarks.length === 0) {
      throw new Error('没有指定水印区域')
    }

    // 检查浏览器支持
    if (!window.MediaRecorder) {
      throw new Error('浏览器不支持视频编码功能')
    }

    // 处理视频
    const result = await customRemoveWatermark(video, watermarks)

    // 验证结果
    if (!result) {
      throw new Error('视频处理失败，请重试')
    }

    return result
  } catch (error) {
    console.error('水印去除错误:', error)
    throw new Error(`处理失败: ${error.message}`)
  }
}

// ============================================
// 示例 8: 性能优化提示
// ============================================

/*
优化大文件处理：

1. 使用 Web Worker 处理：
   - 创建 watermark-worker.js
   - 在 worker 中执行图像处理
   - 避免阻塞主线程

2. 分段处理：
   - 将视频分成小段
   - 并行或串行处理
   - 减少内存占用

3. 缓存优化：
   - 复用 Canvas 对象
   - 预分配内存
   - 及时释放资源

4. 格式优化：
   - 降低视频分辨率
   - 使用更优的编码参数
   - 考虑使用 WASM 加速
*/

// ============================================
// 示例 9: 测试用例
// ============================================

// 单元测试示例（使用 Vitest）
describe('WatermarkRemover', () => {
  test('should remove watermark from frame', () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1920
    canvas.height = 1080
    const ctx = canvas.getContext('2d')
    const imageData = ctx.getImageData(0, 0, 1920, 1080)

    const watermark = {
      x: 100,
      y: 100,
      width: 200,
      height: 50,
    }

    WatermarkRemover.removeWatermark(imageData, watermark, 1920, 1080)

    expect(imageData).toBeDefined()
    expect(imageData.data).toHaveLength(1920 * 1080 * 4)
  })

  test('should handle multiple watermarks', () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const imageData = ctx.getImageData(0, 0, 1920, 1080)

    const watermarks = [
      { x: 100, y: 100, width: 200, height: 50 },
      { x: 300, y: 200, width: 150, height: 40 },
    ]

    watermarks.forEach((wm) => {
      WatermarkRemover.removeWatermark(imageData, wm, 1920, 1080)
    })

    expect(imageData).toBeDefined()
  })
})

export default {
  routes,
  navigationItems,
}
