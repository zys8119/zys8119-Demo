<template>
  <div class="ai-voice bg-#e8e8e8 abs-content of-x-hidden">
    <div class="p-15px">
      <div v-for="(item,key) in list" :key="key" :style="{'--color':item.isSelf ? '#3ab370':'cadetblue'}">
        <div class="m-b-10px flex items-center gap-10px justify-end flex-shrink-0" :class="{
        'flex-row-reverse': !item.isSelf,
      }">
          <div class="flex-1 flex justify-end " :class="{
            'flex-row-reverse': !item.isSelf,
          }">
            <div class="bg-$color b-rd-10px p-10px b-1px b-solid b-#fff text-#fff " @click="playAudio(`audio${key}`)">
              <div v-if="item.type === 'audio'" class="flex flex-col items-start">
                <div class="flex-center gap-10px">
                  <svg-icon name="yuyin"></svg-icon>
                  <audio controls ref="audio" :id="`audio${key}`" hidden :src="item.url"></audio>
                  <div>{{ (item.time / 1000).toFixed(1) }}s</div>
                </div>
                <div class="w-100% b-t-solid b-1px b-#fff m-t-10px" v-if="item.content">{{ item.content }}</div>
              </div>
              <div v-if="item.type === 'text'">
                <div>{{ item.content }}</div>
              </div>
              <div v-if="item.type === 'loading'">
                <div style="color: #ffffff" class="la-ball-spin-clockwise-fade-rotating la-sm">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-30px h-30px bg-$color flex text-12px b-rd-50% of-hidden flex-center text-#fff">
            {{ item.isSelf ? '我' : '对方' }}
          </div>
        </div>
      </div>
    </div>
    <footer-fixed>
      <div class="p-x-15px flex items-center gap-10px">
        <div @click="isVoice = !isVoice"
             class="w-30px h-30px flex-center b-1px b-solid b-#38b06d text-#38b06d b-rd-50% text-18px flex-shrink-0">
          <svg-icon name="jianpan" v-if="isVoice"></svg-icon>
          <svg-icon name="yuyin" v-else></svg-icon>
        </div>
        <div v-if="isVoice" ref="voiceBtnRef" class="flex-1 touch-callout select-none" @click.stop.prevent="void 0">
          <n-button class="flex-1 w-100% select-none" :disabled="isChat">按住说话</n-button>
        </div>
        <n-input v-else class="flex-1" clearable type="textarea" autosize v-model:value='text'
                 placeholder="请输入"></n-input>
        <div class="flex-center gap-10px">
          <n-button type="primary" v-if="!isVoice && !isChat" @click="change" :disabled="isDisabled">发送</n-button>
          <n-button class="text-28px" type="default" v-if="isChat" @click="stopChat">
            <svg-icon name="stop"></svg-icon>
          </n-button>
        </div>
      </div>
    </footer-fixed>
    <div class="abs-center bg-#38b06d p-15px b-rd-10px flex-center flex-col" v-if="isPress">
      <div class="la-line-scale ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-12px text-#fff">松开发送</div>
    </div>
    <div class="abs-content z-1">
      <img class="abs-content" :src="`./ai-bg.jpeg`" alt="">
      <canvas class="abs-content" ref="convasRef"></canvas>
      <div class="abs-end-bottom rigth-30px bottom-30px flex-center flex-col bg-#fff5 p-15px b-rd-y-10px cursor-pointer text-50px" @click="dazhaohu">
        <svg-icon name="dazhaohu" not-fill></svg-icon>
        <div class="text-14px">打招呼</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" title="ai数字人">
import {MP4Clip, MP4Previewer, createChromakey, OffscreenSprite, AudioClip, DEFAULT_AUDIO_CONF} from '@webav/av-cliper';
import map4Url from './ai-b.mp4?url';
import axios from "axios"
import {get, debounce} from "lodash"
import Recorder from 'recorder-core'
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'
import 'recorder-core/src/engine/wav'
import 'recorder-core/src/engine/beta-webm'
import SvgIcon from "@/src/components/svg-icon";
import Hammer from "hammerjs";
import pinyin from "pinyin";
import winframe from "winframe";

const voiceBtnRef = ref()
const isVoice = ref(true)
const isPress = ref(false)
const isChat = ref(false)
const convasRef = ref()
const text = ref('')
const isDisabled = computed(() => text.value.length === 0 || isChat.value)
type ListItemType = Partial<{
  url: string
  time: any
  blob: any
  content: any
  type: 'text' | 'audio' | 'loading'
  isSelf: boolean
  results: any
}>
const list = ref<ListItemType[]>([])
const videoSpeech = ref();
const stopChat = () => {
  isChat.value = false
  list.value.pop()
}
// const baseURL = ref('http://192.168.110.46:8000')
const baseURL = ref(null)
const change = debounce(async () => {
  const content = text.value;
  list.value.push({
    content,
    type: 'text',
    isSelf: true,
  })
  list.value.push({
    type: 'loading',
    isSelf: false,
  })
  text.value = ''
  try {
    isChat.value = true
    const {data} = await axios({
      method: 'post',
      baseURL: baseURL.value,
      url: '/v1/chat/completions',
      data: {
        model: "chatglm3-6b",
        messages: [
          {
            "content": "你是智加信息科技有限公司的AI助手！",
            "role": "system"
          },
          {
            "content": content,
            "role": "user"
          },
        ]
      }
    })
    if (isChat.value) {
      list.value.pop()
      await Promise.all(get(data, 'choices', []).forEach(async (e: any) => {
        list.value.push({
          content: get(e, 'message.content'),
          type: 'text',
          isSelf: false,
        })
        await speech(get(e, 'message.content'))
      }))
    }
    isChat.value = false
  } catch (e) {
    isChat.value = false
  }
}, 300)
/**
 * 发送音频
 */
const sendAudio = async (info: ListItemType) => {
  try {
    isChat.value = true
    const formData = new FormData()
    formData.append('model', 'large-v3')
    const file = new File([info.blob], 'audio.mp3', {type: 'audio/mp3'})
    formData.append('file', file)
    info.url = URL.createObjectURL(file)
    list.value.push(info)
    const {data} = await axios({
      method: 'post',
      baseURL: baseURL.value,
      url: '/v1/audio/transcriptions',
      data: formData
    })
    // const data = await new Promise(resolve => setTimeout(()=> {
    //   resolve({text:"你好"})
    // }, 1000))
    console.clear()
    const pinyinText = pinyin(data.text, {style: "NORMAL"}).map(e => e[0]).join('')
    console.log(data.text, pinyinText)
    // const reg = /xiao(zhi|zi)(,)*nihao|nihao|(,)*xiao(zhi|zi)/
    const reg = /xiao(zhi|zi)/
    if (isChat.value && reg.test(pinyinText)) {
      text.value = data.text.substring(2)
      await change()
    }
    isChat.value = false
  } catch (e) {
    console.error(e)
    isChat.value = false
  }
  // list.value.push(info)
}
/**调用open打开录音请求好录音权限**/
let rec, wave;
let time = performance.now()
let isTalk = false
let isTalkRequest = false
const recOpen = (success?: () => void) => {//一般在显示出录音按钮或相关的录音界面时进行此方法调用，后面用户点击开始录音时就能畅通无阻了
  rec = Recorder({ //本配置参数请参考下面的文档，有详细介绍
    type: "mp3", sampleRate: 16000, bitRate: 16 //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
    , onProcess: async function (buffers, powerLevel, bufferDuration, bufferSampleRate, newBufferIdx, asyncEnd) {
      //录音实时回调，大约1秒调用12次本回调，buffers为开始到现在的所有录音pcm数据块(16位小端LE)
      //可利用extensions/sonic.js插件实时变速变调，此插件计算量巨大，onProcess需要返回true开启异步模式
      //可实时上传（发送）数据，配合Recorder.SampleData方法，将buffers中的新数据连续的转换成pcm上传，或使用mock方法将新数据连续的转码成其他格式上传，可以参考文档里面的：Demo片段列表 -> 实时转码并上传-通用版；基于本功能可以做到：实时转发数据、实时保存数据、实时语音识别（ASR）等

      //可实时绘制波形（extensions目录内的waveview.js、wavesurfer.view.js、frequency.histogram.view.js插件功能）
      wave && wave.input(buffers[buffers.length - 1], powerLevel, bufferSampleRate);
      // 音频阀值，音频波动大于1000ms才认为说话
      if (!isTalkRequest) {
        if (!isTalk && Math.max.apply(null, buffers.at(-1)) > 1000) {
          time = performance.now()
          isTalk = true
        } else {
          // 当处于说话状态，并音频波动小于3000ms的时候认为说话结束
          if (isTalk && performance.now() - time > 3000) {
            isTalkRequest = true
            await recStop()
            await recStart()
            isTalkRequest = false
            isTalk = false
          }
        }
      }
    }
  });

  rec.open(async function () {//打开麦克风授权获得相关资源
    recStart()// 此处可以立即开始录音，但不建议这样编写，因为open是一个延迟漫长的操作，通过两次用户操作来分别调用open和start是推荐的最佳流程

    //创建可视化，指定一个要显示的div
    if (Recorder.WaveView) wave = Recorder.WaveView({elem: ".recwave"});
    if (success) {
      success?.();
    }
  }, function (msg, isUserNotAllow) {//用户拒绝未授权或不支持
    console.log((isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg);
  });
};

/**开始录音**/
async function recStart() {//打开了录音后才能进行start、stop调用
  rec.start();
};

/**结束录音**/
async function recStop() {
  return new Promise<any>(resolve => {
    rec.stop(async function (blob, duration) {
      //简单利用URL生成本地文件地址，注意不用了时需要revokeObjectURL，否则霸占内存
      //此地址只能本地使用，比如赋值给audio.src进行播放，赋值给a.href然后a.click()进行下载（a需提供download="xxx.mp3"属性）
      var localUrl = (window.URL || webkitURL).createObjectURL(blob);
      const info = {
        url: localUrl,
        time: duration,
        blob,
        type: 'audio',
        isSelf: true,
      }
      await sendAudio(info as any)
      // rec.close();//释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
      // rec=null;
      resolve()
    }, function (msg) {
      alert(msg)
      console.log("录音失败:" + msg);
      // rec.close();//可以通过stop方法的第3个参数来自动调用close
      // rec=null;
      resolve()
    });
  })
};
const playAudio = async id => {
  (document.getElementById(id) as HTMLAudioElement)?.play?.()
}
const hammer = ref()
const hammerInit = async () => {
  if (voiceBtnRef.value) {
    if (hammer.value) {
      hammer.value.destroy()
    }
    hammer.value = new Hammer(voiceBtnRef.value);
    hammer.value.on('press', () => {
      isPress.value = true
      recStart()
    })
    hammer.value.on('pressup', () => {
      isPress.value = false
      recStop()
    })
  }
}
const init = async () => {
  await nextTick()
  recOpen(()=>{})
  hammerInit()
}
watchEffect(() => {
  if (!rec && isVoice.value) {
    init()
  } else if (isVoice.value) {
    hammerInit()
  }
})
onUnmounted(() => {
  rec?.close?.()
  rec = null
  wave = null
  isPress.value = false
})
const chromakey = createChromakey({
  similarity: 0.4,
  smoothness: 0.05,
  spill: 0.05,
});
const videoParsing = async (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  async function timesSpeedDecode(start: number = 0, end?: number, time?: number) {
    const resp1 = await fetch(map4Url);
    const clip = new MP4Previewer(resp1.body!);
    const body = await clip.ready;
    const mp4Info = await clip.getInfo();
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
        const va = await chromakey(video)
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
    return new Promise<any>(resolve => {
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

const resize = debounce(async (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  canvas.width = window.innerWidth * window.devicePixelRatio
  canvas.height = window.innerHeight * window.devicePixelRatio
  videoSpeech.value = await videoParsing(canvas, ctx)
  await videoSpeech.value?.(2.9,null, 0)
}, 300)
const audioArrs = ref<Array<HTMLAudioElement>>([])
const speech = async (input: string, callback?:(duration:number, audio:HTMLAudioElement)=> Promise<void>) => {
  audioArrs.value.forEach(a=>{
    a.pause()
    a.remove()
  })
  audioArrs.value = []
  const audio = document.createElement('audio')
  audioArrs.value.push(audio)
  audio.autoplay = true
  audio.addEventListener('loadedmetadata', async ()=>{
    if(callback){
      await callback(audio.duration, audio)
    }else {
      await videoSpeech.value?.(null, null, audio.duration)
    }
  })
  const {data} = await axios({
    baseURL: baseURL.value,
    method: "post",
    url: "/v1/audio/speech",
    responseType: "blob",
    data: {
      input,
      "voice": "3559"
    }
  })
  audio.src = URL.createObjectURL(data)
  // audio.play()
}
const dazhaohu = debounce(async ()=>{
  await speech("大家好；我是智加小智；很高兴与大家见面；大家可以叫我小智来与我对话；比如，小智介绍自己。", async duration => {
    await videoSpeech.value?.(0.8, 2, 1.2)
    let time = duration - 2
    const start = 2
    const end = 2.9
    const moveTime = end - start
    while (true){
      await videoSpeech.value?.(start,end, moveTime)
      if(time > 0){
        time -= moveTime
      }else {
        break
      }
    }
    // await videoSpeech.value?.(2.9,null, 0)
  })
}, 300)
onMounted(async () => {
  init()
  const canvas = convasRef.value as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  resize(canvas, ctx)
  window.addEventListener("resize", () => {
    resize(canvas, ctx)
  })
})
</script>

<style scoped lang="less">
.ai-voice {
  .la-line-scale,
  .la-line-scale > div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .la-line-scale {
    display: block;
    font-size: 0;
    color: #fff;
  }

  .la-line-scale.la-dark {
    color: #333;
  }

  .la-line-scale > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  .la-line-scale {
    width: 40px;
    height: 32px;
  }

  .la-line-scale > div {
    width: 4px;
    height: 32px;
    margin: 2px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0;
    -webkit-animation: line-scale 1.2s infinite ease;
    -moz-animation: line-scale 1.2s infinite ease;
    -o-animation: line-scale 1.2s infinite ease;
    animation: line-scale 1.2s infinite ease;
  }

  .la-line-scale > div:nth-child(1) {
    -webkit-animation-delay: -1.2s;
    -moz-animation-delay: -1.2s;
    -o-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }

  .la-line-scale > div:nth-child(2) {
    -webkit-animation-delay: -1.1s;
    -moz-animation-delay: -1.1s;
    -o-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .la-line-scale > div:nth-child(3) {
    -webkit-animation-delay: -1s;
    -moz-animation-delay: -1s;
    -o-animation-delay: -1s;
    animation-delay: -1s;
  }

  .la-line-scale > div:nth-child(4) {
    -webkit-animation-delay: -.9s;
    -moz-animation-delay: -.9s;
    -o-animation-delay: -.9s;
    animation-delay: -.9s;
  }

  .la-line-scale > div:nth-child(5) {
    -webkit-animation-delay: -.8s;
    -moz-animation-delay: -.8s;
    -o-animation-delay: -.8s;
    animation-delay: -.8s;
  }

  .la-line-scale.la-sm {
    width: 20px;
    height: 16px;
  }

  .la-line-scale.la-sm > div {
    width: 2px;
    height: 16px;
    margin: 1px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .la-line-scale.la-2x {
    width: 80px;
    height: 64px;
  }

  .la-line-scale.la-2x > div {
    width: 8px;
    height: 64px;
    margin: 4px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .la-line-scale.la-3x {
    width: 120px;
    height: 96px;
  }

  .la-line-scale.la-3x > div {
    width: 12px;
    height: 96px;
    margin: 6px;
    margin-top: 0;
    margin-bottom: 0;
  }

  /*
   * Animation
   */
  @-webkit-keyframes line-scale {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(.4);
      transform: scaleY(.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @-moz-keyframes line-scale {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(.4);
      -moz-transform: scaleY(.4);
      transform: scaleY(.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      -moz-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @-o-keyframes line-scale {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(.4);
      -o-transform: scaleY(.4);
      transform: scaleY(.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      -o-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @keyframes line-scale {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(.4);
      -moz-transform: scaleY(.4);
      -o-transform: scaleY(.4);
      transform: scaleY(.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      -moz-transform: scaleY(1);
      -o-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  /*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */

  .la-ball-spin-clockwise-fade-rotating,
  .la-ball-spin-clockwise-fade-rotating > div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .la-ball-spin-clockwise-fade-rotating {
    display: block;
    font-size: 0;
    color: #fff;
  }

  .la-ball-spin-clockwise-fade-rotating.la-dark {
    color: #333;
  }

  .la-ball-spin-clockwise-fade-rotating > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  .la-ball-spin-clockwise-fade-rotating {
    width: 32px;
    height: 32px;
    -webkit-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
    -moz-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
    -o-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
    animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
  }

  .la-ball-spin-clockwise-fade-rotating > div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    margin-left: -4px;
    border-radius: 100%;
    -webkit-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
    -moz-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
    -o-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
    animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(1) {
    top: 5%;
    left: 50%;
    -webkit-animation-delay: -.875s;
    -moz-animation-delay: -.875s;
    -o-animation-delay: -.875s;
    animation-delay: -.875s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(2) {
    top: 18.1801948466%;
    left: 81.8198051534%;
    -webkit-animation-delay: -.75s;
    -moz-animation-delay: -.75s;
    -o-animation-delay: -.75s;
    animation-delay: -.75s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(3) {
    top: 50%;
    left: 95%;
    -webkit-animation-delay: -.625s;
    -moz-animation-delay: -.625s;
    -o-animation-delay: -.625s;
    animation-delay: -.625s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(4) {
    top: 81.8198051534%;
    left: 81.8198051534%;
    -webkit-animation-delay: -.5s;
    -moz-animation-delay: -.5s;
    -o-animation-delay: -.5s;
    animation-delay: -.5s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(5) {
    top: 94.9999999966%;
    left: 50.0000000005%;
    -webkit-animation-delay: -.375s;
    -moz-animation-delay: -.375s;
    -o-animation-delay: -.375s;
    animation-delay: -.375s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(6) {
    top: 81.8198046966%;
    left: 18.1801949248%;
    -webkit-animation-delay: -.25s;
    -moz-animation-delay: -.25s;
    -o-animation-delay: -.25s;
    animation-delay: -.25s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(7) {
    top: 49.9999750815%;
    left: 5.0000051215%;
    -webkit-animation-delay: -.125s;
    -moz-animation-delay: -.125s;
    -o-animation-delay: -.125s;
    animation-delay: -.125s;
  }

  .la-ball-spin-clockwise-fade-rotating > div:nth-child(8) {
    top: 18.179464974%;
    left: 18.1803700518%;
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    -o-animation-delay: 0s;
    animation-delay: 0s;
  }

  .la-ball-spin-clockwise-fade-rotating.la-sm {
    width: 16px;
    height: 16px;
  }

  .la-ball-spin-clockwise-fade-rotating.la-sm > div {
    width: 4px;
    height: 4px;
    margin-top: -2px;
    margin-left: -2px;
  }

  .la-ball-spin-clockwise-fade-rotating.la-2x {
    width: 64px;
    height: 64px;
  }

  .la-ball-spin-clockwise-fade-rotating.la-2x > div {
    width: 16px;
    height: 16px;
    margin-top: -8px;
    margin-left: -8px;
  }

  .la-ball-spin-clockwise-fade-rotating.la-3x {
    width: 96px;
    height: 96px;
  }

  .la-ball-spin-clockwise-fade-rotating.la-3x > div {
    width: 24px;
    height: 24px;
    margin-top: -12px;
    margin-left: -12px;
  }

  /*
   * Animations
   */
  @-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @-moz-keyframes ball-spin-clockwise-fade-rotating-rotate {
    100% {
      -moz-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @-o-keyframes ball-spin-clockwise-fade-rotating-rotate {
    100% {
      -o-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @keyframes ball-spin-clockwise-fade-rotating-rotate {
    100% {
      -webkit-transform: rotate(-360deg);
      -moz-transform: rotate(-360deg);
      -o-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes ball-spin-clockwise-fade-rotating {
    50% {
      opacity: .25;
      -webkit-transform: scale(.5);
      transform: scale(.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-moz-keyframes ball-spin-clockwise-fade-rotating {
    50% {
      opacity: .25;
      -moz-transform: scale(.5);
      transform: scale(.5);
    }
    100% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }
  }
  @-o-keyframes ball-spin-clockwise-fade-rotating {
    50% {
      opacity: .25;
      -o-transform: scale(.5);
      transform: scale(.5);
    }
    100% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes ball-spin-clockwise-fade-rotating {
    50% {
      opacity: .25;
      -webkit-transform: scale(.5);
      -moz-transform: scale(.5);
      -o-transform: scale(.5);
      transform: scale(.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
