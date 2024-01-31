<template>
  <div class="ai-voice bg-#f7d6b8 abs-content of-hidden">
    <img class="abs-content bg" :src="`./ai/bg.png`" alt="">
    <img class="abs-start-bottom w-100% footer" :src="`./ai/footer.png`" alt="">
    <img class="abs-start-bottom house" :src="`./ai/house-left.png`" alt="">
    <img class="abs-end-bottom house" :src="`./ai/house-right.png`" alt="">
    <img class="abs-start w-183px left-13% top-5% yun-up" :src="`./ai/yun-up.png`" alt="">
    <img class="abs-end-bottom right-13% bottom-30px yun-down" :src="`./ai/yun-down.png`" alt="">
    <img class="abs-start w-300px top-10% left--70px jack-left" :src="`./ai/jack-left.png`" alt="">
    <img class="abs-end w-300px top-10% right--70px jack-right" :src="`./ai/jack-right.png`" alt="">
    <canvas class="abs-content" ref="canvasRef"></canvas>
    <div class="abs-end-bottom rigth-30px bottom-30px flex-center flex-col bg-#fff5 p-15px b-rd-y-10px cursor-pointer text-50px" @click.stop="toggle">
      <svg-icon name="dazhaohu" not-fill></svg-icon>
      <div class="text-14px">全屏</div>
    </div>
  </div>
</template>

<script setup lang="ts" title="ai数字人">
import url from "./ai-b.mp4?url"
import {createChromakey, MP4Previewer} from "@webav/av-cliper";
import {debounce} from "lodash";
import SvgIcon from "@/src/components/svg-icon";
const {toggle} = useFullscreen()
const chromakey = createChromakey({
  similarity: 0.4,
  smoothness: 0.05,
  spill: 0.05,
});
const videoParsing = async (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, data:{
  mp4Info:any
  clip:MP4Previewer
}) => {
  const {clip, mp4Info} = data
  async function timesSpeedDecode(start: number = 0, end?: number, time?: number) {
    const mp4Dur = Number((mp4Info.duration / mp4Info.timescale).toFixed(0));
    if (typeof end !== 'number') {
      end = mp4Dur
    }
    const remainingTime = (end - start)
    const endTime = (time || remainingTime) * 1000
    const callback = async p => {
      const video = await clip.getVideoFrame(start + remainingTime * p)
      if (video) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const va:VideoFrame = await chromakey(video) as VideoFrame
        ctx.drawImage(
            va,
            0,
            0,
            va.codedWidth,
            va.codedHeight,
            (ctx.canvas.width - va.codedWidth) / 2,
            ctx.canvas.height - va.codedHeight,
            va.codedWidth,
            va.codedHeight,
        );
      }
    }
    return new Promise<void>(resolve => {
      const start = performance.now()
      ;(async function aa() {
        const p = (performance.now() - start) / endTime
        if (p > 1) {
          await callback(1)
          resolve()
          return;
        }
        await callback(p)
        requestAnimationFrame(aa)
      })()
    })
  }

  return timesSpeedDecode
}
const getVideoBody = async (url:string)=>{
  const resp1 = await fetch(url);
  const clip = new MP4Previewer(resp1.body) as any;
  const body = await clip.ready;
  const mp4Info = await clip.getInfo();
  return {
    clip,
    mp4Info,
    body
  }
}
const videoSpeech = ref()
const canvasRef = ref()
const repeatPlay = async ()=>{
  await videoSpeech.value(2.9,3.3,0.4)
  await new Promise(resolve => setTimeout(resolve, 1000))
  await repeatPlay()
}
const resize = debounce(async (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  canvas.width = window.innerWidth * window.devicePixelRatio
  canvas.height = window.innerHeight * window.devicePixelRatio
  repeatPlay()
}, 300)
onMounted(async () => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const clipMap = await getVideoBody(url)
  videoSpeech.value = await videoParsing(canvas, ctx, clipMap)
  resize(canvas, ctx)
  window.addEventListener("resize", () => {
    resize(canvas, ctx)
  })
})
</script>

<style scoped lang="less">
.yun-up{
  @keyframes yun-up {
    0%{
      left:3%;
      opacity: 0.2;
    }
    50%{
      left:13%;
      opacity: 1;
    }
    100%{
      left:3%;
      opacity: 0.2;
    }
  }
  animation: yun-up 6s ease-in-out infinite;
}
.yun-down{
  @keyframes yun-down {
    0%{
      right:3%;
      opacity: 0.2;
    }
    50%{
      right:13%;
      opacity: 1;
    }
    100%{
      right:3%;
      opacity: 0.2;
    }
  }
  animation: yun-down 6s ease-in-out infinite;
}
.house{
  @keyframes house {
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(10px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  animation: house 4s ease-in-out infinite;
}
.jack-left{
  @keyframes jack-left {
    0%{
      transform: translateY(0) rotate(0deg);
    }
    50%{
      transform: translateY(10px) rotate(2deg);
    }
    100%{
      transform: translateY(0px) rotate(0deg);
    }
  }
  transform-origin: 0 0;
  animation: jack-left 4s ease-in-out infinite;
}
.jack-right{
  @keyframes jack-right {
    0%{
      transform: translateY(0) rotate(0deg);
    }
    50%{
      transform: translateY(10px) rotate(2deg);
    }
    100%{
      transform: translateY(0px) rotate(0deg);
    }
  }
  transform-origin: 100% 0;
  animation: jack-right 4s ease-in-out infinite;
}
.footer{
  @keyframes footer {
    0%{
      transform: translateY(0) translateX(0) scale(1);
    }
    50%{
      transform: translateY(10px) translateX(10px) scale(1.05);
    }
    100%{
      transform: translateY(0) translateX(0px) scale(1);
    }
  }
  animation: footer 8s ease-in-out infinite;
}
.bg{
  @keyframes bg {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.01);
    }
    100%{
      transform: scale(1);
    }
  }
  animation: bg 6s ease-in-out infinite;
}
</style>
