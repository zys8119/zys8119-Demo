<template>
  <div ref="aiRef" class="ai-voice bg-#e8e8e8 abs-content of-x-hidden">
    <div class="p-15px">
      <div v-for="(item,key) in list" :key="key" :style="{'--color':item.isSelf ? '#3ab370':'cadetblue'}">
        <div class="m-b-10px flex items-start gap-10px justify-end flex-shrink-0" :class="{
        'flex-row-reverse': !item.isSelf,
      }">
          <div class="flex-1 flex justify-end " :class="{
            'flex-row-reverse': !item.isSelf,
          }">
            <div class="jiantouBox bg-$color b-rd-10px p-10px b-1px b-solid b-#fff text-#fff " @click="playAudio(`audio${key}`)">
              <span class="jiantou" :class="{
                right:item.isSelf
              }"><svg-icon name="jiantou"></svg-icon></span>
              <div v-if="item.type === 'audio'" class="flex flex-col items-start">
                <div class="flex-center gap-10px">
                  <svg-icon name="yuyin"></svg-icon>
                  <audio controls ref="audio" :id="`audio${key}`" hidden :src="item.url"></audio>
                  <div>{{(item.time/1000).toFixed(1)}}s</div>
                </div>
                <div class="w-100% b-t-solid b-1px b-#fff m-t-10px" v-if="item.content">{{item.content}}</div>
              </div>
              <div  v-if="item.type === 'text'">
                <div v-if="item.done" class="type_text_content" v-html="item.content"></div>
                <div v-else class="type_text_content" :id="`type_text_content_${item.id}`" v-html="item.content"></div>
              </div>
              <div  v-if="item.type === 'loading'">
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
          <div class="w-30px h-30px bg-#fff flex text-12px b-rd-50% of-hidden flex-center text-#fff p-5px">
            <span v-if="item.isSelf" class="text-#3ab370">我</span>
            <img class="w-100% h-100%" v-else :src="logo" alt="">
          </div>
        </div>
      </div>
    </div>
    <footer-fixed>
      <div class="p-x-15px flex items-center gap-10px">
<!--        <div @click="isVoice = !isVoice" class="w-30px h-30px flex-center b-1px b-solid b-#38b06d text-#38b06d b-rd-50% text-18px flex-shrink-0">-->
<!--          <svg-icon name="jianpan" v-if="isVoice"></svg-icon>-->
<!--          <svg-icon name="yuyin" v-else></svg-icon>-->
<!--        </div>-->
        <div v-if="isVoice" ref="voiceBtnRef" class="flex-1 touch-callout select-none" @click.stop.prevent="void 0"><n-button class="flex-1 w-100% select-none" :disabled="isChat">按住说话</n-button></div>
        <n-input :disabled="disabled" v-else class="flex-1" clearable type="textarea" autosize v-model:value='text' placeholder="请输入"></n-input>
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
  </div>
</template>

<script setup lang="ts" title="ai语音识别Demo">
import axios from "axios"
import {get, debounce} from "lodash"
import Recorder from 'recorder-core'
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'
import 'recorder-core/src/engine/wav'
import 'recorder-core/src/engine/beta-webm'
import SvgIcon from "@/src/components/svg-icon";
import logo from "@/src/assets/logo.png";
import Hammer from "hammerjs";
const voiceBtnRef = ref()
const isVoice = ref(false)
const isPress = ref(false)
const isChat = ref(false)
const listRef = ref([])
const aiRef = ref()
const text= ref('')
const isDisabled = computed(()=> text.value.length === 0 || isChat.value)
type ListItemType = Partial<{
  url:string
  time:any
  blob:any
  content:any
  type:'text' | 'audio' | 'loading'
  isSelf:boolean
  results:any
  id:string
  done?:boolean
}>
const list = ref<ListItemType[]>([
  {
    content:"你好，我是智加大语言模型。",
    type:'text',
    isSelf:false,
    id:'4'
  },
  {
    content:"作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。",
    type:'text',
    isSelf:false,
    id:'3'
  },
])
const aiScrollTo = ()=>{
  nextTick(()=>{
    aiRef.value.scrollTo(0, aiRef.value.scrollHeight);
  })
}
const inputAnimation = ()=>{
  aiScrollTo()
  nextTick(()=>{
    list.value.forEach((item)=>{
      if(item.isSelf === false && item.type === 'text' && !item.done){
        console.log(3)
        const txts = item.content.split("")
        let time = performance.now()
        const el = document.getElementById(`type_text_content_${item.id}`)
        el.innerHTML = ''
        ;(async function aa(){
          requestAnimationFrame(()=>{
            if(txts.length > 0){
              if( performance.now() > time+2){
                el.innerHTML += txts.shift()
                time = performance.now()
                el.clientWidth
              }
              aa()
            }else {
              item.done = true
            }
            aiScrollTo()
          })
        })()
      }
    })
  })
}
onMounted(()=>{
  inputAnimation()
})
const disabled = computed(()=> list.value.filter(e=>e.isSelf === false && e.type === 'text' && !e.done).length > 0)
watch(list, ()=>{
  console.log(list.value, disabled.value)
}, {deep:true, immediate:true})
const stopChat = ()=>{
  isChat.value = false
  list.value.pop()
}
const baseURL = ref('http://192.168.110.46:8000')
const change = debounce(async ()=>{
  const content = text.value;
  list.value.push({
    content:content.replace(/\n/img,'<br/>'),
    type:'text',
    isSelf:true,
    id:Date.now().toString()
  })
  list.value.push({
    type:'loading',
    isSelf:false,
    id:Date.now().toString()
  })
  text.value = ''
  aiScrollTo()
  try {
    isChat.value = true
    const {data} = await axios({
      method:'post',
      baseURL:baseURL.value,
      url:'/v1/chat/completions',
      data:{
        model:"chatglm3-6b",
        messages:[
          {
            "content": "你是智加信息科技有限公司的AI助手！",
            "role": "system"
          },
          {
            "content": "浙江智加信息科技有限公司成立于2015年12月，总部位于浙江宁波，并下设北京、青岛、台州等多个分支机构。是一家以区块链+安全计算+大数据为技术驱动，深耕智慧城市中的智慧政务、智慧办公及数字基建等细分领域，提供综合性解决方案的国家级高新技术企业。",
            "role": "system"
          },
          {
            "content": "智加始终坚持自主研发，探索区块链、AIoT、数字孪生、元宇宙等前沿技术领域的融合实践应用，拥有会议RFID、信创平板、高端LED屏、穿戴式设备等智能硬件生态链建设，在全国率先发布了基于“区块链+信创”的无纸化会议协作综合解决方案。",
            "role": "system"
          },
          {
            "content": "浙江智加信息科技有限公司是一家专业的信息化服务提供商。公司以智慧城市为理念，在智能化系统集成、应用软件研发、移动终端技术开发、网络平台建设、区块链、隐私计算、企业信息化咨询与实施等领域有较强的研发能力和丰富的实施经验。近两年，公司重点攻坚智慧城市各领域移动应用技术，特别是在智慧政务方面成果丰硕。本公司研发的自主知识产权的管理信息系统应用软件系列，包括无纸化阅文系统、智能会务系统、智能办公系统、企业知识库、投票表决系统、满意度测评系统、委员代表履职服务平台等。公司已成功在宁波市股权交易中心挂牌。",
            "role": "system"
          },
          {
            "content": "浙江智加信息科技有限公司于2015年12月17日成立。法定代表人刘立恺,公司经营范围包括：计算机网络技术的开发、技术转让、技术咨询、技术服务；计算机软硬件的销售；计算机系统集成；网站开发；广告服务等。",
            "role": "system"
          },
          {
            "content": content,
            "role": "user"
          },
        ]
      }
    })
    if(isChat.value){
      list.value.pop()
      get(data,'choices',[]).forEach((e:any)=>{
        list.value.push({
          content:get(e,'message.content'),
          type:'text',
          isSelf:false,
          id:Date.now().toString()
        })
      })
      inputAnimation()
    }
    isChat.value = false
  }catch (e){
    isChat.value = false
    inputAnimation()
  }
},300)
/**
 * 发送音频
 */
const sendAudio = async (info:ListItemType)=>{
  try {
    isChat.value = true
    const formData = new FormData()
    formData.append('model', 'large-v3')
    const file = new File([info.blob],'audio.mp3',{type:'audio/mp3'})
    formData.append('file', file)
    info.url = URL.createObjectURL(file)
    list.value.push(info)
    const {data} = await axios({
      method:'post',
      baseURL:baseURL.value,
      url:'/v1/audio/transcriptions',
      data:formData
    })
    if(isChat.value){
      text.value = data.text
      await change()
    }
    isChat.value = false
  }catch (e){
    console.error(e)
    isChat.value = false
  }
  // list.value.push(info)
}
/**调用open打开录音请求好录音权限**/
let rec,wave;
const recOpen = (success?:()=>void)=>{//一般在显示出录音按钮或相关的录音界面时进行此方法调用，后面用户点击开始录音时就能畅通无阻了
  rec=Recorder({ //本配置参数请参考下面的文档，有详细介绍
    type:"mp3",sampleRate:16000,bitRate:16 //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
    ,onProcess:function(buffers,powerLevel,bufferDuration,bufferSampleRate,newBufferIdx,asyncEnd){
      //录音实时回调，大约1秒调用12次本回调，buffers为开始到现在的所有录音pcm数据块(16位小端LE)
      //可利用extensions/sonic.js插件实时变速变调，此插件计算量巨大，onProcess需要返回true开启异步模式
      //可实时上传（发送）数据，配合Recorder.SampleData方法，将buffers中的新数据连续的转换成pcm上传，或使用mock方法将新数据连续的转码成其他格式上传，可以参考文档里面的：Demo片段列表 -> 实时转码并上传-通用版；基于本功能可以做到：实时转发数据、实时保存数据、实时语音识别（ASR）等

      //可实时绘制波形（extensions目录内的waveview.js、wavesurfer.view.js、frequency.histogram.view.js插件功能）
      wave&&wave.input(buffers[buffers.length-1],powerLevel,bufferSampleRate);
    }
  });

  rec.open(function(){//打开麦克风授权获得相关资源
    // rec.start()// 此处可以立即开始录音，但不建议这样编写，因为open是一个延迟漫长的操作，通过两次用户操作来分别调用open和start是推荐的最佳流程

    //创建可视化，指定一个要显示的div
    if(Recorder.WaveView)wave=Recorder.WaveView({elem:".recwave"});
    if(success){
      success?.();
    }
  },function(msg,isUserNotAllow){//用户拒绝未授权或不支持
    console.log((isUserNotAllow?"UserNotAllow，":"")+"无法录音:"+msg);
  });
};
/**开始录音**/
function recStart(){//打开了录音后才能进行start、stop调用
  rec.start();
};

/**结束录音**/
function recStop(){
  rec.stop(async function(blob,duration){
    //简单利用URL生成本地文件地址，注意不用了时需要revokeObjectURL，否则霸占内存
    //此地址只能本地使用，比如赋值给audio.src进行播放，赋值给a.href然后a.click()进行下载（a需提供download="xxx.mp3"属性）
    var localUrl=(window.URL||webkitURL).createObjectURL(blob);
    const info = {
      url:localUrl,
      time:duration,
      blob,
      type:'audio',
      isSelf:true,
      id:Date.now().toString(),
    }
    sendAudio(info as any)
    // rec.close();//释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
    // rec=null;
  },function(msg){
    alert(msg)
    console.log("录音失败:"+msg);
    // rec.close();//可以通过stop方法的第3个参数来自动调用close
    // rec=null;
  });
};
const playAudio = async id=>{
 (document.getElementById(id) as HTMLAudioElement)?.play?.()
}
const hammer = ref()
const hammerInit = async ()=>{
  if(voiceBtnRef.value) {
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
const init = async ()=>{
  await nextTick()
  recOpen(()=>{})
  hammerInit()
}
watchEffect(()=>{
  if(!rec && isVoice.value){
    init()
  }else if(isVoice.value){
    hammerInit()
  }
})
onUnmounted(()=>{
  rec?.close?.()
  rec = null
  wave = null
  isPress.value = false
})
onMounted(async ()=>{
  init()
})
</script>

<style scoped lang="less">
.ai-voice {
  .jiantouBox{
    position: relative;
    .jiantou{
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-74%) translateY(13px) rotateY(180deg);
      color: cadetblue;
      &.right{
        left: initial;
        right: 0;
        color: #3ab370;
        transform: translateX(74%) translateY(13px);
      }
    }
  }
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
