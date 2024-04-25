<template>
  <div class="formula-editor bg-[#868686ff] abs-content of-x-hidden" ref="elRef">
    <div>
      <div ref="toolRef" class="b-b-solid b-#f00 b-1px"></div>
      <div class="abs-r w-80% m-t-10px m-x-auto">
        <div ref="editorRef" :style="{
      '--w-e-textarea-bg-color':'#0000'
    }" class="abs-r z-1 opacity-10"></div>
        <div class="abs-content z-0">
          <div v-for="i in pages" class="m-b-15px bg-#fff h-100px abs-r" >
            <div class="abs-start-bottom w-100% flex-center">{{i}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts" title="富文本编辑器">
import { createEditor, createToolbar,IDomEditor} from "@wangeditor/editor"
import "@wangeditor/editor/dist/css/style.css"
import html2canvas from "html2canvas"

const elRef = ref<HTMLDivElement>() as  Ref<HTMLDivElement>
const toolRef = ref<HTMLDivElement>() as  Ref<HTMLDivElement>
const editorRef = ref<HTMLDivElement>() as  Ref<HTMLDivElement>
const editor = ref<HTMLDivElement>() as Ref<IDomEditor>
const {height} = useElementSize(editorRef)
const pages = computed(()=> Math.floor(height.value / 100)+1)
onMounted(async ()=>{
  editor.value = createEditor({
    selector:editorRef.value,
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
      },
    },
  })
  createToolbar({
    editor:editor.value,
    selector:toolRef.value,
    config:{
      insertKeys: {
        index: 0,
        keys: [
        ],
      },
    }
  })
  editor.value.on('change',()=>{
    console.log(editor.value.getHtml(), pages.value)
    editorRef.value.style.opacity = 1
    html2canvas(editorRef.value).then(res=>{
      elRef.value.appendChild(res)
    })
    editorRef.value.style.opacity = 0.1
  })
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
