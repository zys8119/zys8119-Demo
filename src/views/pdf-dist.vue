<template>
  <div class="pdf-dist">
    <iframe v-if="pdfDataUri" class="w-full h-full abs-content b-0" :src="pdfDataUri" style="width: 100%; height: 100%;"></iframe>
  </div>
</template>

<script setup lang="ts" title="pdf 批注绘制">
import { PDFDocument, rgb } from 'pdf-lib'
const route = useRoute()
const pdfDataUri = ref()

onMounted(async ()=>{
  if(typeof route.query.file !== 'string'){return}
  const pdfDoc = await PDFDocument.load(await fetch(route.query.file as string).then(res => res.arrayBuffer()))
  const pages = pdfDoc.getPages()
  const data = [{"data":"{\"endIndex\":5,\"markAreaType\":\"UNDERLINE\",\"startIndex\":3,\"annotationType\":\"MARK\",\"data\":[{\"bottom\":498.13528,\"left\":138.81195,\"right\":152.7682,\"top\":512.26697},{\"bottom\":498.62973,\"left\":161.93289,\"right\":165.48973,\"top\":512.07556},{\"bottom\":497.64084,\"left\":171.3455,\"right\":184.31285,\"top\":512.88904}],\"dpi\":440.0,\"id\":\"1d3d052f-b058-46b6-9872-c18e2c28a367\",\"page\":0,\"pageSize\":{\"height\":5144,\"width\":3637},\"pen\":\"{\\\"color\\\":-65536}\"}","id":"1d3d052f-b058-46b6-9872-c18e2c28a367","page":0,"penType":"UNDERLINE","type":0},{"data":"{\"endIndex\":14,\"markAreaType\":\"UNDERWAVELINE\",\"startIndex\":12,\"annotationType\":\"MARK\",\"data\":[{\"bottom\":498.88492,\"left\":282.55676,\"right\":297.45404,\"top\":512.26697},{\"bottom\":497.88007,\"left\":298.96274,\"right\":312.7276,\"top\":512.96875},{\"bottom\":497.94388,\"left\":314.65964,\"right\":328.05765,\"top\":512.96875}],\"dpi\":440.0,\"id\":\"6baf0ea1-0ad4-4375-ba79-41ec329d4572\",\"page\":0,\"pageSize\":{\"height\":5144,\"width\":3637},\"pen\":\"{\\\"color\\\":-65536,\\\"waveMaxLineCount\\\":100}\"}","id":"6baf0ea1-0ad4-4375-ba79-41ec329d4572","page":0,"penType":"UNDERWAVELINE","type":0},{"data":"{\"endIndex\":21,\"markAreaType\":\"HIGHLIGHT\",\"startIndex\":19,\"annotationType\":\"MARK\",\"data\":[{\"bottom\":497.57703,\"left\":394.96426,\"right\":408.53772,\"top\":513.0326},{\"bottom\":497.76843,\"left\":411.347,\"right\":424.25055,\"top\":513.2878},{\"bottom\":497.64084,\"left\":427.00485,\"right\":440.7059,\"top\":513.2878}],\"dpi\":440.0,\"id\":\"258d0ed6-412b-44b9-8944-d3f53cbede09\",\"page\":0,\"pageSize\":{\"height\":5144,\"width\":3637},\"pen\":\"{\\\"color\\\":1425997824}\"}","id":"258d0ed6-412b-44b9-8944-d3f53cbede09","page":0,"penType":"HIGHLIGHTPEN","type":0},{"data":"{\"annotationType\":\"PEN\",\"data\":[{\"height\":447.87274,\"width\":128.45454},{\"height\":447.3818,\"width\":128.45454},{\"height\":443.29092,\"width\":128.45454},{\"height\":440.5091,\"width\":128.45454},{\"height\":438.70908,\"width\":128.45454},{\"height\":436.9091,\"width\":128.45454},{\"height\":434.6182,\"width\":128.45454},{\"height\":432.16364,\"width\":128.45454},{\"height\":430.36365,\"width\":128.45454},{\"height\":428.56363,\"width\":128.45454},{\"height\":426.6,\"width\":128.45454},{\"height\":424.30908,\"width\":128.45454},{\"height\":422.5091,\"width\":128.45454},{\"height\":420.70908,\"width\":128.45454},{\"height\":418.25455,\"width\":128.45454},{\"height\":415.96362,\"width\":128.45454},{\"height\":413.0182,\"width\":128.45454},{\"height\":410.56363,\"width\":128.45454},{\"height\":407.6182,\"width\":128.45454},{\"height\":405.81818,\"width\":128.45454},{\"height\":403.36365,\"width\":128.45454},{\"height\":401.72726,\"width\":128.45454},{\"height\":400.41818,\"width\":128.45454}],\"dpi\":440.0,\"id\":\"7a3ded5a-76bc-43f8-a6df-a4354c652d06\",\"page\":0,\"pageSize\":{\"height\":5144,\"width\":3637},\"pen\":\"{\\\"color\\\":-981248,\\\"penWidthScale\\\":0.8}\"}","id":"7a3ded5a-76bc-43f8-a6df-a4354c652d06","page":0,"penType":"BRUSHPEN","type":0},{"data":"{\"annotationType\":\"PEN\",\"data\":[{\"height\":438.54544,\"width\":489.92728},{\"height\":437.8909,\"width\":489.92728},{\"height\":433.96362,\"width\":489.92728},{\"height\":431.34546,\"width\":489.92728},{\"height\":428.8909,\"width\":489.92728},{\"height\":427.0909,\"width\":489.92728},{\"height\":424.63635,\"width\":489.92728},{\"height\":422.18182,\"width\":489.27274},{\"height\":419.56363,\"width\":489.1091},{\"height\":417.27274,\"width\":488.78183},{\"height\":414.9818,\"width\":488.29092},{\"height\":412.69092,\"width\":487.8},{\"height\":410.23636,\"width\":487.63635},{\"height\":408.43637,\"width\":487.63635},{\"height\":406.63635,\"width\":487.63635},{\"height\":404.67273,\"width\":487.63635},{\"height\":402.70908,\"width\":487.63635},{\"height\":401.07272,\"width\":487.63635},{\"height\":399.43637,\"width\":486.16364},{\"height\":399.43637,\"width\":485.5091}],\"dpi\":440.0,\"id\":\"779d2f48-ece4-4d1a-9cf7-79fa78753224\",\"page\":0,\"pageSize\":{\"height\":5144,\"width\":3637},\"pen\":\"{\\\"color\\\":-370432,\\\"penWidthScale\\\":0.8}\"}","id":"779d2f48-ece4-4d1a-9cf7-79fa78753224","page":0,"penType":"BRUSHPEN","type":0}]
      .map(e=>({
        ...e,
        data:JSON.parse(e.data)
      }))
  const getRect = (boundingBoxes:any)=>{
    // 初始化最大矩形的边界
    let maxRect = {
      top: Number.NEGATIVE_INFINITY,
      bottom: Number.POSITIVE_INFINITY,
      left: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY
    };

// 计算最大矩形的边界
    boundingBoxes.forEach(box => {
      if (box.top > maxRect.top) maxRect.top = box.top;
      if (box.bottom < maxRect.bottom) maxRect.bottom = box.bottom;
      if (box.left < maxRect.left) maxRect.left = box.left;
      if (box.right > maxRect.right) maxRect.right = box.right;
    });
    return maxRect
  }
  await Promise.all(data.map(async e=>{
    const page = pdfDoc.getPage(e.page)
    const {width, height} = page.getSize()
    switch (e.penType){
      case "UNDERWAVELINE":
        // 波浪线
        await Promise.all([getRect(e.data.data)].map(async ee=>{
          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          const startX = ee.left
          const startY = height - ee.bottom
          const lineWidth = ee.right - ee.left
          const amplitude = 2;
          const frequency = 0.8;
          const offsetX = 0;
          const offsetY = startY;
          ctx.beginPath();
          ctx.moveTo(startX, offsetY);
          for (let x = 0; x < lineWidth; x++) {
            const y = offsetY + amplitude * Math.sin((x + offsetX) * frequency);
            ctx.lineTo(startX + x, y);
          }

          ctx.strokeStyle = 'blue'; // Set the wave color
          ctx.lineWidth = 1; // Set the line width
          ctx.stroke(); // Draw the wave
          const blob = await new Promise(resolve => {
            canvas.toBlob(blob=>{
              resolve(blob)
            },"image/png")
          }) as Blob
          canvas.remove()
          const jpgImage = await pdfDoc.embedPng(await blob.arrayBuffer())
          const jpgDims = jpgImage.scale(1)
          page.drawImage(jpgImage,{
            x: 0,
            y: 0,
            width: jpgDims.width,
            height: jpgDims.height,
          })
        }))
        break
      case "UNDERLINE":
        // 下划线
        e.data.data.forEach((ee,k,arr)=>{
          const data = {
            start: { x:ee.left, y: ee.bottom },
            end: { x:arr[k+1]?.left || ee.right, y: ee.bottom },
            thickness: 2,
            color: rgb(0.75, 0.2, 0.2),
            opacity: 0.75,
          }
          page.drawLine(data)
        })
        break
      case "HIGHLIGHTPEN":
        // 矩形
        [getRect(e.data.data)].forEach((ee) => {
          page.drawRectangle({
            x: ee.left,
            y: ee.bottom,
            width: ee.right - ee.left,
            height: ee.top - ee.bottom,
            color: rgb(0.75, 0.2, 0.2),
            opacity: 0.5,
            borderOpacity: 0.75,
          })
        })
        break
      case "BRUSHPEN":
        // 线
        e.data.data.forEach((ee,k,arr)=>{
          if(!arr[k+1]){return}
          const data = {
            start: { x:ee.width, y: ee.height },
            end: { x:arr[k+1].width, y: arr[k+1].height },
            thickness: 2,
            color: rgb(0.75, 0.2, 0.2),
            opacity: 0.75,
          }
          page.drawLine(data)
        })
        break
    }
  }))
  pdfDataUri.value = URL.createObjectURL(new Blob([await pdfDoc.save()],{type:"application/pdf"}));

})
</script>

<style scoped lang="less">
.pdf-dist {

}
</style>
