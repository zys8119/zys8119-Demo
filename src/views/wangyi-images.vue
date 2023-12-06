<template>
  <div class="wangyi-images">
      <canvas ref="canvasRef" :style="{'--index':index}"></canvas>
  </div>
</template>

<script setup lang="ts" title="网易图中图" content="网易图中图效果">
import winframe from "winframe"
const canvasRef = ref() as Ref<HTMLCanvasElement>
const widthIndex = ref('500px')
useCssVar(()=>{
  return {
    index:widthIndex.value
  } as any
})
useMutationObserver(canvasRef, ()=>{
  widthIndex.value = canvasRef.value.style.getPropertyValue('--index')
},{
  attributes:true
})
const index = computed(()=> +widthIndex.value.replace('px', ''))
const render = async (ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement, p1:HTMLImageElement, p2:HTMLImageElement, x:number, y:number, w:number, h:number,timeout:number = 20000)=>{
  await winframe(p=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const sx = x*(1-p)
    const sy = y*(1-p)
    const sw = p1.width*p + w*(1-p)
    const sh = p1.height*p + h*(1-p)
    ctx.drawImage(p1, sx, sy, sw, sh , 0, 0, canvas.width, canvas.height)
    ctx.drawImage(p2,
        0, 0, p2.width, p2.height,
        canvas.width/sw*(x-sx),
        canvas.height/sh*(y-sy),
        canvas.width/sw*w,
        canvas.height/sh*h,
    )
  }, timeout)
}
const {width, height} = useWindowSize()
const reset = async ()=>{
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
  canvas.width = width.value
  canvas.height = height.value
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  await render(ctx, canvas, p4, p5, 370, 1067, 152, 244)
  await render(ctx, canvas, p3, p4, 1251, 1048, 599, 898)
  await render(ctx, canvas, p2, p3,  108, 898,167, 267)
  await render(ctx, canvas, p1, p2,  83, 1401,197, 317)
}
watchEffect(async ()=>{
  width.value;
  height.value;
  await reset()
})
onMounted(reset)
</script>

<style scoped lang="less">
.wangyi-images {
  canvas{
  }
}
</style>
