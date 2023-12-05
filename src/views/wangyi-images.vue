<template>
  <div class="wangyi-images">
      <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import winframe from "winframe"
const canvasRef = ref()
onMounted(async ()=>{
  const [p1, p2, p3, p4, p5, p6]:Array<HTMLImageElement> = await Promise.all([
    import("@/src/assets/wangyi-images/1.jpg"),
    import("@/src/assets/wangyi-images/2.jpg"),
    import("@/src/assets/wangyi-images/3.jpg"),
    import("@/src/assets/wangyi-images/4.jpg"),
    import("@/src/assets/wangyi-images/5.jpg"),
    import("@/src/assets/wangyi-images/6.png"),
  ]).then(res=>{
    return Promise.all(res.map(e=> new Promise(resolve => {
      const img = new Image()
      img.src =e.default
      img.onload = ()=>{
        resolve(img)
      }
    })))
  }) as any
  const canvas = canvasRef.value as HTMLCanvasElement
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  winframe(p=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(p4, 0, 0, p4.width, p4.height, 10*p, 10*p, canvas.width, canvas.height)
    ctx.drawImage(p5, 0, 0, p5.width, p5.height, 10*p, 10*p, canvas.width, canvas.height)
  }, 2000)
})
</script>

<style scoped lang="less">
.wangyi-images {
  canvas{
  }
}
</style>
