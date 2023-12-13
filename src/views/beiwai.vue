<template>
  <div class="beiwai w-100% h-100% flex of-hidden fixed left-0 top-0">
    <div class="m-r-10px b b-solid b-r-1px b-#d8d8d8 p-15px">
      <n-form>
        <n-form-item label="页面地址">
          <n-input v-model:value="pageUrl"></n-input>
        </n-form-item>
        <n-form-item label="cookies">
          <n-input v-model:value="cookiesStr" type="textarea"></n-input>
        </n-form-item>
        <n-form-item>
          <n-button @click="save" type="primary">保存</n-button>
        </n-form-item>
      </n-form>
    </div>
    <div class="flex-1 of-x-hidden h-100%">
      <n-tabs v-model:value="activeUnit" @update-value="change">
        <n-tab-pane v-for="(item,key) in coursevList" :key="key" :tab="item.title" :name="key"></n-tab-pane>
      </n-tabs>
      <div>
        <div v-for="(item,key) in units" :key="key" class=" m-t-15px bg-#eee pa-15px">
          <div class="text-18px font-bold">{{item.title}}</div>
          <div class="bg-#fff m-y-15px b b-rd-5px pa-15px">
            <div v-for="(it,k) in item.data" :key="k">
              <div>{{k+1}}、{{it.title}}</div>
              <div >答案：<span class="text-#4CAF50">{{it.value.join('、')}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" title="北外视频题目抓取">
import axios from "axios"
import {debounce} from "lodash"
import {useMessage, useLoadingBar} from "naive-ui"
const message = useMessage()
const loading = useLoadingBar()
const cookiesStr = ref(JSON.stringify([
  {
    name:'sspm_appid',
    value:'1540947351189100',
    domain:'appd10.beiwaionline.com',
    path:'/',
  },
  {
    name:'sspm_orgid',
    value:'430112',
    domain:'appd10.beiwaionline.com',
    path:'/',
  },{
    name:'sspm_proctorUrl',
    value:'http://exam.strongsee.com/ssproctor',
    domain:'appd10.beiwaionline.com',
    path:'/',
  },
  {
    name:'JSESSIONID',
    value:'B5C88A5F7AEEE181EB594D7F9ED73AEE',
    domain:'appd10.beiwaionline.com',
    path:'/',
    httpOnly:true
  },
  {
    name:'INGRESSCOOKIE',
    value:'d8b3dd3aa2febb230fdf77bebb833e5b',
    domain:'appd10.beiwaionline.com',
    path:'/',
    expires:1702619045223,
    httpOnly:true,
    secure:true
  },
  {
    name:'JSESSIONID',
    value:'D1A908DBD104EFABEAC8781AD7AE1F6D',
    domain:'study.ebeiwai.com',
    path:'/',
    expires:1702619045223,
    httpOnly:true,
  },
  {
    name:'INGRESSCOOKIE',
    value:'c4a60f01c02f9ae96325943b631103b3',
    domain:'study.ebeiwai.com',
    path:'/',
    expires:1702619045223,
    httpOnly:true,
    secure:true,
  },
  {
    name:'JSESSIONID',
    value:'23E3AC711E5162FB08C60508597CFB5B',
    domain:'quiz.ebeiwai.com',
    path:'/',
    expires:1702619045223,
    httpOnly:true,
  },
  {
    name:'INGRESSCOOKIE',
    value:'22cb021bb96e0f01c3409d0323cd6503',
    domain:'quiz.ebeiwai.com',
    path:'/',
    expires:1702619045223,
    httpOnly:true,
    secure:true,
  }
], null, 4))
const cookies = computed(()=> {
  try {
    return  JSON.parse(cookiesStr.value)
  }catch (e) {
    return []
  }
})
const pageUrl = ref('https://study.ebeiwai.com/lms2014/fore/foreIndex/gotoCoursev3/beiwaionline/ZK_BWME3033_20230801140311544/5441277/200003001,200003002,200003003/90ba1d1f99a87643fc7216084d182f95?userId=629700')
const activeUnit = ref(0)
const data = ref<any>({})
const coursevList = computed(()=> data.value.coursevList || [{title:'asda'},{title:'asda'}])
const units = computed(()=> data.value.units || [])
const getData = debounce(async ()=>{
  loading.start()
  data.value = {}
  try {
    const {data:{data:resData}} = await axios({
      baseURL:'http://127.0.0.1:81',
      url:'/beiwai',
      method:'post',
      data:{
        cookies:cookies.value,
        pageUrl:pageUrl.value,
        activeUnit:activeUnit.value
      }
    })
    data.value = resData
    loading.finish()
  }catch (e) {
    message.error(e.message)
    loading.error()
  }
})
const change = ()=>{
  getData()
}
const save = ()=>{
  activeUnit.value = 0
  change()
}
</script>

<style scoped lang="less">
.beiwai {

}
</style>
