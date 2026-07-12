# 视频水印去除工具 - 快捷键框选更新

## 🎯 更新内容

### 新功能：快捷键控制框选

为了避免影响视频的正常交互，框选功能现已改为**快捷键激活模式**。

## ⌨️ 使用方式

### 框选水印区域

1. **激活框选模式**：
   - Windows/Linux：按住 **Ctrl** 键
   - Mac：按住 **Cmd** 键（⌘）

2. **框选水印**：
   - 按住快捷键 + 在视频上拖拽鼠标形成矩形框

3. **退出框选**：
   - 松开快捷键即可退出框选模式
   - Canvas cursor 会自动恢复为默认

### 视觉反馈

- **快捷键提示**：右侧控制面板显示当前快捷键提示
- **Cursor 变化**：
  - 默认状态：`default`
  - 按住快捷键时：`crosshair`（十字准星）
  - 框选中：虚线框（绿色）

## 💡 优势

✅ **不影响视频交互**
- 默认情况下，点击视频完全正常使用（播放/暂停等）
- 只需按住快捷键才能进入框选模式

✅ **清晰的模式切换**
- 视觉反馈清晰（cursor 和提示文字）
- 用户体验更直观

✅ **与现代应用一致**
- 类似 Figma、PS 等专业工具的框选方式
- 用户熟悉的交互模式

## 🔧 技术实现

### 关键代码变更

```javascript
// 键盘事件监听
const handleKeyDown = (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    ctrlKeyPressed.value = true
    // 更新 canvas cursor
    if (canvasOverlay.value) {
      canvasOverlay.value.style.cursor = 'crosshair'
    }
  }
}

const handleKeyUp = () => {
  ctrlKeyPressed.value = false
  isSelecting.value = false
  // 恢复 canvas cursor
  if (canvasOverlay.value) {
    canvasOverlay.value.style.cursor = 'default'
  }
}

// 框选检查
const startSelection = (e) => {
  // 只在按住 Ctrl/Cmd 时才开始框选
  if (!ctrlKeyPressed.value) return
  // ... 框选逻辑
}
```

### 状态管理

- `ctrlKeyPressed` - 快捷键按下状态
- `isSelecting` - 正在框选状态
- `currentSelection` - 当前框选区域

## 📱 兼容性

| 操作系统 | 快捷键 |
|---------|--------|
| Windows | Ctrl |
| Linux | Ctrl |
| Mac | Cmd (⌘) |

## 🎓 快速参考

```
操作流程：
1. 上传视频
2. 按住 Ctrl/Cmd
3. 在视频上拖拽选择水印区域
4. 松开 Ctrl/Cmd 完成选择
5. 点击"确认添加水印区域"
6. 重复步骤 2-5 添加更多水印
7. 点击"开始处理视频"
8. 等待处理完成
9. 下载结果视频
```

## 🔍 调试和故障排除

### 框选不工作？

检查：
- [ ] 是否按住了正确的快捷键（Ctrl 或 Cmd）
- [ ] 浏览器控制台是否有错误信息
- [ ] 视频是否已完全加载

### 快捷键被浏览器拦截？

某些浏览器扩展可能拦截 Ctrl/Cmd 快捷键。如遇此问题：
- 禁用可能冲突的浏览器扩展
- 使用隐私模式重试
- 尝试不同的浏览器

## 📝 版本历史

### v1.1 - 快捷键框选（当前）
- 新增快捷键激活框选模式
- 改进用户交互体验
- 添加视觉反馈（cursor 变化）

### v1.0 - 初始版本
- 基础水印去除功能
- 多位置框选支持

---

**更新日期**：2026年7月12日
