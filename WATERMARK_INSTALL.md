# 视频水印去除工具 - 快速安装指南

## 文件位置

已为你生成以下文件：

```
src/views/video-watermark-remover.vue          # 主组件
src/utils/watermark-remover.js                 # 工具库
src/router/watermark-remover.ts                # 路由配置示例
WATERMARK_GUIDE.md                             # 详细使用文档
WATERMARK_EXAMPLES.md                          # 集成示例代码
```

## 快速集成步骤

### 1. 复制文件到项目
✅ 文件已经在项目中了：
- `src/views/video-watermark-remover.vue`
- `src/utils/watermark-remover.js`

### 2. 添加路由配置

在你的路由文件中添加（例如 `src/router/index.ts`）：

```typescript
import VideoWatermarkRemover from '@/views/video-watermark-remover.vue'

const routes = [
  // ... 其他路由
  {
    path: '/tools/watermark-remover',
    name: 'WatermarkRemover',
    component: VideoWatermarkRemover,
    meta: {
      title: '视频水印去除工具',
    },
  },
]
```

### 3. 在导航菜单中添加链接（可选）

如果你的项目有导航菜单组件，添加一个链接：

```vue
<router-link to="/tools/watermark-remover">
  🎬 视频水印去除
</router-link>
```

### 4. 验证安装

1. 启动开发服务器
2. 访问 `/tools/watermark-remover`
3. 应该看到蓝紫色的应用界面

## 故障排除

### 问题 1: 视频无法加载显示

**错误**: `Cannot set properties of null (setting 'src')`

**解决方案**：这已经在最新版本中修复了。确保使用了 `nextTick` 来等待 DOM 挂载。

### 问题 2: Canvas overlay 框选不准确

**原因**：Canvas 的内部分辨率与显示大小不匹配

**解决方案**：已经在坐标计算中修复了缩放问题

### 问题 3: 处理后的视频无法播放

**原因**：浏览器不支持 MediaRecorder API

**解决方案**：
- 使用现代浏览器（Chrome 51+, Firefox 54+, Safari 14.1+, Edge 79+）
- 不要使用 IE 11 或过时的浏览器

### 问题 4: 视频处理非常缓慢

**原因**：
1. 视频分辨率太高
2. 水印去除算法需要处理每一帧

**解决方案**：
- 对大文件，考虑降低分辨率
- 使用更快的计算机
- 分段处理视频

## 核心功能验证清单

运行时检查以下功能是否正常工作：

- [ ] 上传视频（拖拽和点击）
- [ ] 视频实时预览
- [ ] 在视频上框选水印区域
- [ ] 添加多个水印区域
- [ ] 删除已添加的水印区域
- [ ] 开始处理视频（显示进度条）
- [ ] 处理完成后下载视频
- [ ] 预览处理结果

## 浏览器兼容性

| 浏览器 | 最低版本 | 支持度 |
|--------|---------|--------|
| Chrome | 51+ | ✅ 完全支持 |
| Firefox | 54+ | ✅ 完全支持 |
| Safari | 14.1+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |
| Opera | 38+ | ✅ 完全支持 |

## 性能优化建议

### 为了获得最佳性能，建议：

1. **针对不同视频大小调整参数**：
   ```javascript
   // 在 processVideo 中修改
   const fps = 30          // 降低可加快处理
   const algorithm = 'blur' // 选择更快的算法
   ```

2. **限制同时处理的帧数**：
   ```javascript
   // 如果内存不足，分段处理
   const maxFramesPerBatch = 100
   ```

3. **使用 Web Worker**（可选高级优化）：
   - 将图像处理移到 Web Worker 中
   - 避免阻塞主线程

## API 参考

### 主组件属性和方法

```javascript
// 关键的 ref
videoElement      // 视频元素引用
watermarks        // 已标记的水印数组
currentSelection  // 当前框选的水印
processedVideoUrl // 处理后视频的 URL

// 关键方法
handleFileSelect()           // 处理文件选择
addWatermark()              // 添加水印区域
removeWatermark(idx)        // 删除水印
processVideo()              // 开始处理
downloadVideo()             // 下载结果
```

### 工具库 API

```javascript
import { WatermarkRemover, VideoProcessor } from '@/utils/watermark-remover.js'

// 移除水印
WatermarkRemover.removeWatermark(imageData, watermark, width, height, algorithm)

// 提取视频帧
VideoProcessor.extractFrames(video, fps)

// 从帧创建视频
VideoProcessor.createVideoFromFrames(frames, fps, width, height)
```

## 常见部署问题

### CORS 问题

如果上传的视频来自不同域名，需要配置 CORS：

```javascript
// 在 loadVideo 中
const url = URL.createObjectURL(file)
// 对于本地文件，Object URL 不需要 CORS
```

### 大文件内存问题

浏览器内存限制：

- **Chrome**: ~2GB
- **Firefox**: ~1.5GB
- **Safari**: ~1GB

**建议**: 视频文件大小不超过 500MB

## 隐私和安全

✅ **完全隐私保护**：
- 所有处理在浏览器本地完成
- 不上传任何数据到服务器
- 处理完成后可删除临时文件

## 许可证和归属

此组件为你专门开发，可以随意使用和修改。

## 获取帮助

遇到问题？检查以下内容：

1. 浏览器控制台是否有错误信息
2. 视频格式是否被浏览器支持
3. 是否满足最低浏览器版本要求
4. 计算机是否有足够内存

---

**最后更新**：2026年7月12日

需要进一步的帮助？查看 WATERMARK_GUIDE.md 获得详细使用说明。
