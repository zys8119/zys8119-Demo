<template>
  <div class="formula-editor abs-content flex flex-col b-b-solid b-#f00 b-1px">
      <div ref="toolRef" class="b-b-solid b-#f00 b-1px"></div>
      <div ref="editorRef" class="flex-1"></div>
  </div>
</template>

<script setup lang="ts">
import {Boot, createEditor, createToolbar, IButtonMenu, IDomEditor} from "@wangeditor/editor"
import "@wangeditor/editor/dist/css/style.css"
import formulaLatexModule from 'plugin-formula-latex'
import editorModule from '@/src/components/editor'

const toolRef = $ref() as HTMLDivElement
const editorRef = $ref() as HTMLDivElement
// Extend menu

Boot.registerModule(formulaLatexModule)
Boot.registerModule(editorModule)
onMounted(async ()=>{
  // Boot.registerModule(formulaModule)
  const editor = createEditor({
    selector:editorRef,
    config:{
      // 选中公式时的悬浮菜单
      hoverbarKeys: {
        formula: {
          menuKeys: ['editFormula'], // “编辑公式”菜单
        },
      },
    },
  })

  const tool = createToolbar({
    editor,
    selector:toolRef,
    config:{
      insertKeys: {
        index: 0,
        keys: [
          'insertFormula', // “插入公式”菜单
          // 'editFormula' // “编辑公式”菜单
          'editorModule', // “插入公式”菜单
        ],
      },
    }
  })
  editor.on('change',()=>{
    console.log(editor.getHtml())
  })
  console.log(editor)
})
</script>

<style scoped lang="less">
.formula-editor {
    :deep(math-field){
      width: 100% !important;
    }
    :deep(.w-e-modal){
      width: 90% !important;
      font-size: 50px;
    }
}
</style>
