/**
 * 视频水印去除工具库
 * 提供高级的水印检测和去除算法
 */

/**
 * 内容感知填充 - 基于周围像素的高级去除算法
 */
export class WatermarkRemover {
  /**
   * 移除单帧中的水印 - 使用内容感知填充
   */
  static removeWatermark(
    imageData,
    watermark,
    width,
    height,
    algorithm = 'blur'
  ) {
    const data = imageData.data
    const x1 = Math.floor(watermark.x)
    const y1 = Math.floor(watermark.y)
    const x2 = Math.floor(watermark.x + watermark.width)
    const y2 = Math.floor(watermark.y + watermark.height)

    if (algorithm === 'blur') {
      this._applyBlur(data, x1, y1, x2, y2, width, height)
    } else if (algorithm === 'inpaint') {
      this._applyInpaint(data, x1, y1, x2, y2, width, height)
    } else {
      this._applyCopy(data, x1, y1, x2, y2, width, height)
    }
  }

  /**
   * 高斯模糊去除水印
   */
  static _applyBlur(data, x1, y1, x2, y2, width, height) {
    const blurRadius = 8
    const tempData = new Uint8ClampedArray(data)

    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        const idx = (y * width + x) * 4
        let r = 0, g = 0, b = 0, count = 0

        for (let dy = -blurRadius; dy <= blurRadius; dy++) {
          for (let dx = -blurRadius; dx <= blurRadius; dx++) {
            const nx = x + dx
            const ny = y + dy

            if (
              nx >= x1 &&
              nx < x2 &&
              ny >= y1 &&
              ny < y2
            ) {
              continue
            }

            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nidx = (ny * width + nx) * 4
              const distance = Math.sqrt(dx * dx + dy * dy)
              const weight = Math.exp(-(distance * distance) / 8)

              r += tempData[nidx] * weight
              g += tempData[nidx + 1] * weight
              b += tempData[nidx + 2] * weight
              count += weight
            }
          }
        }

        if (count > 0) {
          data[idx] = Math.round(r / count)
          data[idx + 1] = Math.round(g / count)
          data[idx + 2] = Math.round(b / count)
        }
      }
    }
  }

  /**
   * 内容感知填充 - 从边界扩展
   */
  static _applyInpaint(data, x1, y1, x2, y2, width, height) {
    const borderWidth = 2
    const iterations = 10

    for (let iter = 0; iter < iterations; iter++) {
      const tempData = new Uint8ClampedArray(data)

      for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
          const idx = (y * width + x) * 4
          let r = 0, g = 0, b = 0, count = 0

          // 从水印外边界采样
          for (let dy = -borderWidth; dy <= borderWidth; dy++) {
            for (let dx = -borderWidth; dx <= borderWidth; dx++) {
              const nx = x + dx
              const ny = y + dy

              if (!(nx >= x1 && nx < x2 && ny >= y1 && ny < y2)) {
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                  const nidx = (ny * width + nx) * 4
                  r += tempData[nidx]
                  g += tempData[nidx + 1]
                  b += tempData[nidx + 2]
                  count++
                }
              }
            }
          }

          if (count > 0) {
            data[idx] = Math.round(r / count)
            data[idx + 1] = Math.round(g / count)
            data[idx + 2] = Math.round(b / count)
            data[idx + 3] = 255
          }
        }
      }
    }
  }

  /**
   * 复制周围像素
   */
  static _applyCopy(data, x1, y1, x2, y2, width, height) {
    const borderPixels = []

    // 收集边界像素
    for (let y = Math.max(0, y1 - 5); y < Math.min(height, y1); y++) {
      for (let x = Math.max(0, x1 - 5); x < Math.min(width, x2 + 5); x++) {
        const idx = (y * width + x) * 4
        borderPixels.push({
          r: data[idx],
          g: data[idx + 1],
          b: data[idx + 2],
        })
      }
    }

    if (borderPixels.length === 0) return

    // 用边界像素填充水印区域
    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        const idx = (y * width + x) * 4
        const pixel = borderPixels[Math.floor(Math.random() * borderPixels.length)]

        data[idx] = pixel.r
        data[idx + 1] = pixel.g
        data[idx + 2] = pixel.b
        data[idx + 3] = 255
      }
    }
  }

  /**
   * 检测视频中的水印
   */
  static detectWatermarks(imageData, width, height) {
    const watermarks = []
    const data = imageData.data
    const threshold = 100

    // 简单的边缘检测
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4
        const current = data[idx] + data[idx + 1] + data[idx + 2]

        const neighbors = [
          data[(y - 1) * width + x - 1),
          data[(y - 1) * width + x) * 4 + 0] +
            data[(y - 1) * width + x) * 4 + 1] +
            data[(y - 1) * width + x) * 4 + 2],
        ]

        // 检测边缘
        if (Math.abs(current - neighbors[0]) > threshold) {
          // 标记为可能的水印
        }
      }
    }

    return watermarks
  }

  /**
   * 优化水印区域 - 扩展以覆盖整个文本
   */
  static optimizeWatermarkRegion(watermark, expandBy = 10) {
    return {
      x: Math.max(0, watermark.x - expandBy),
      y: Math.max(0, watermark.y - expandBy),
      width: watermark.width + expandBy * 2,
      height: watermark.height + expandBy * 2,
    }
  }
}

/**
 * 视频处理工具
 */
export class VideoProcessor {
  /**
   * 提取视频帧
   */
  static async extractFrames(video, fps = 30) {
    const frames = []
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const ctx = canvas.getContext('2d')
    const duration = video.duration
    const totalFrames = Math.floor(duration * fps)

    for (let i = 0; i < totalFrames; i++) {
      video.currentTime = i / fps
      await new Promise((resolve) => {
        setTimeout(() => {
          ctx.drawImage(video, 0, 0)
          frames.push(canvas.toDataURL('image/webp', 0.8))
          resolve()
        }, 50)
      })
    }

    return frames
  }

  /**
   * 从帧创建视频
   */
  static async createVideoFromFrames(frames, fps = 30, width, height) {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      const chunks = []

      const stream = canvas.captureStream(fps)
      const mediaRecorder = new MediaRecorder(stream, {
        videoBitsPerSecond: 5000000,
        mimeType: 'video/webm;codecs=vp8,opus',
      })

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' })
        resolve(blob)
      }

      mediaRecorder.start()

      let frameIdx = 0
      const drawNextFrame = () => {
        if (frameIdx < frames.length) {
          const img = new Image()
          img.onload = () => {
            ctx.drawImage(img, 0, 0)
            frameIdx++
            setTimeout(drawNextFrame, 1000 / fps)
          }
          img.src = frames[frameIdx]
        } else {
          mediaRecorder.stop()
        }
      }

      drawNextFrame()
    })
  }
}

export default {
  WatermarkRemover,
  VideoProcessor,
}
