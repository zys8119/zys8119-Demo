<template>
  <div class="abs-center w-500px">
    {{input}}
    <n-input v-model:value="input" type="textarea" placeholder="请输入关键字"></n-input>
    <n-button @click="play" class="m-t-15px" type="primary">播放</n-button>
  </div>
</template>

<script setup lang="ts" title="transformers">
import { pipeline } from '@xenova/transformers';
import * as wavefile from 'wavefile';
import {TextToAudioPipeline} from "@xenova/transformers/types/pipelines";
let synthesizer = null as unknown as TextToAudioPipeline
const input = ref("你好，我是智加ai小智")
onMounted(async ()=>{
  // Create a text-to-speech pipeline
  synthesizer = await pipeline('text-to-audio', 'Xenova/speecht5_tts', { quantized: false });
})
const play = async ()=>{
  if(!synthesizer){
    console.log("模型加载中")
    return
  }
  if(!input.value){
    console.log("请输入内容")
    return
  }
  console.log("请求中")
  // Generate speech
  const speaker_embeddings = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin';
  const result = await synthesizer(input.value, {
    speaker_embeddings
  });
  console.log(result.audio.buffer)
  const wav = new wavefile.WaveFile();
  wav.fromScratch(1, result.sampling_rate, '32f', result.audio);
  const audio = document.createElement('audio')
  audio.src = URL.createObjectURL(new Blob([wav.toBuffer()], { type: 'audio/wav' }))
  audio.autoplay = true
  console.log("请求完成")
}


</script>

<style scoped lang="less">

</style>
