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
                  <div>{{(item.time/1000).toFixed(1)}}s</div>
                </div>
                <div class="w-100% b-t-solid b-1px b-#fff m-t-10px" v-if="item.content">{{item.content}}</div>
              </div>
              <div  v-if="item.type === 'text'">
                <div>{{item.content}}</div>
              </div>
            </div>
          </div>
          <div class="w-30px h-30px bg-$color flex text-12px b-rd-50% of-hidden flex-center text-#fff">
            {{item.isSelf ? '我': '对方'}}
          </div>
        </div>
      </div>
    </div>
    <footer-fixed>
      <div class="p-x-15px flex items-center gap-10px">
        <div @click="isVoice = !isVoice" class="w-30px h-30px flex-center b-1px b-solid b-#38b06d text-#38b06d b-rd-50% text-18px flex-shrink-0">
          <svg-icon name="jianpan" v-if="isVoice"></svg-icon>
          <svg-icon name="yuyin" v-else></svg-icon>
        </div>
        <div v-if="isVoice" ref="voiceBtnRef" class="flex-1 touch-callout select-none" @click.stop.prevent="void 0"><n-button class="flex-1 w-100% select-none">按住说话</n-button></div>
        <n-input v-else class="flex-1" type="textarea" autosize v-model:value='text' placeholder="请输入" @keyup.enter="change"></n-input>
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
import Recorder from 'recorder-core'
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'
import SvgIcon from "@/src/components/svg-icon";
import Hammer from "hammerjs";
const voiceBtnRef = ref()
const isVoice = ref(false)
const isPress = ref(false)
const text= ref()
const list = ref<Array<Partial<{
  url:string
  time:any
  blob:any
  content:any
  type:'text' | 'audio'
  isSelf:boolean
}>>>([])
const change = ()=>{
  list.value.push({
    content:text.value,
    type:'text',
    isSelf:true
  })
  text.value = ''
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
    list.value.push({
      url:localUrl,
      time:duration,
      blob,
      type:'audio',
      isSelf:true,
    })
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
}
</style>
