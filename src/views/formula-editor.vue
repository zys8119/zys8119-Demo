<template>
  <div class="formula-editor abs-content flex flex-col b-b-solid b-#f00 b-1px">
      <div ref="toolRef" class="b-b-solid b-#f00 b-1px"></div>
      <div ref="editorRef" class="flex-1"></div>
  </div>
</template>

<script setup lang="ts" title="富文本编辑器">
import {Boot, createEditor, createToolbar, IButtonMenu, IDomEditor} from "@wangeditor/editor"
import "@wangeditor/editor/dist/css/style.css"
import formulaLatexModule from 'plugin-formula-latex'
import useEditorModule from '@/src/components/editor'

const toolRef = $ref() as HTMLDivElement
const editorRef = $ref() as HTMLDivElement
const test = ref({
  a:"askdasdjasdja"
})
watch(test,()=>{
  console.log(test.value)
},{deep:true})
// Extend menu
Boot.registerModule(formulaLatexModule)
// Boot.registerModule(useEditorModule({
//   title:"填空",
//   exec({selector}){
//     (document.querySelector(selector) as any)?.__vue_app__?.unmount?.()
//     createApp(defineAsyncComponent({
//       loader:()=> import('@/src/components/card.vue')
//     })).mount(selector)
//   }
// }))
Boot.registerModule(useEditorModule({
  type:"saasd",
  title:"填空2",
  exec({selector}){
    (document.querySelector(selector) as any)?.__vue_app__?.unmount?.()
    createApp(defineComponent({
      render(){
        return h(defineAsyncComponent({
          loader:()=> import('@/src/components/card.vue')
        }),{
          test:test.value,
        })
      }
    })).mount(selector)
  }
}))
onMounted(async ()=>{
  const editor = createEditor({
    selector:editorRef,
    config:{
      // 选中公式时的悬浮菜单
      hoverbarKeys: {
        formula: {
          menuKeys: ['editFormula'], // “编辑公式”菜单
        },
      },
      placeholder:"请输入大纲",
      MENU_CONF:{
        uploadImage:{
          server: '/api/upload',
          fieldName:"file",
        }
      }
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
          // 'customEditorModule', // “插入公式”菜单
          'saasd', // “插入公式”菜单
        ],
      },
    }
  })
  editor.on('change',()=>{
    console.log(editor.getHtml())
  })
  editor.setHtml(`<p><span
                    data-w-e-type="saasd"
                    data-w-e-is-void
                    data-w-e-is-inline
                    id="saasd_18ec169ed9e"
                ></span></p><p>asdasdasdasdasdas\\\\\\</p><p><br></p><h1>assda<span data-w-e-type="formula" data-w-e-is-void data-w-e-is-inline data-value="\\sqrt[3]{122}\\leftarrow"></span>
                <span data-w-e-type="formula" data-w-e-is-void data-w-e-is-inline data-value="\\lparen x+a)^2={\\textstyle\\sum_{k=0}^{n}}\\tbinom{n}{k}"></span>
                <span data-w-e-type="formula" data-w-e-is-void data-w-e-is-inline data-value="\\nabla\\times\\vec{\\mathrm{B}}-\\frac{1}{C}\\frac{\\delta\\vec{\\mathrm{E}}}{\\delta t}=4\\pi\\rho"></span>
                </h1>`)
  // console.log(editor)
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
