<template>
  <div class="b flex flex-col items-center p-15px gap-15px">
    <canvas class="b b-solid" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as pdfjsLib from "pdfjs-dist"
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url"
const canvasRef = ref()
onMounted(async ()=>{
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker
  const loadingTask = pdfjsLib.getDocument('http://localhost:3000/a.pdf')
  const pdf = await loadingTask.promise
  console.log('PDF loaded');
  const page = await pdf.getPage(1)
  console.log('Page loaded');
  const scale = 1.5;
  const viewport = page.getViewport({scale: scale});
  const canvas = canvasRef.value;
  const context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  // Render PDF page into canvas context
  var renderTask = page.render( {
    canvasContext: context,
    viewport: viewport
  });
  console.log(renderTask)
  await renderTask.promise
  console.log('Page rendered');
})
</script>

<style scoped lang="less">

</style>
