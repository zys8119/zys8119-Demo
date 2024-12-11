<template>
  <div class="svip bg-#121833 abs-f w-100% h-100%">
    <n-input :style="{
      '--n-border': 'none',
      '--n-height': '50px',
      '--n-text-color': '#fff',
      '--n-color-focus': '#fff2',
    }" class="bg-#fff2 b-rd-25px text-#fff !w-50% m-auto abs-x top-50px" clearable placeholder="请输入关键词"
      v-model:value="search" @keyup.enter="onSearch">
      <template #suffix>
        <n-button type="primary" @click="onSearch">搜索</n-button>
      </template>
    </n-input>
    <div class="abs-x top-100px w-100%  flex top-150px" :style="{ height: 'calc(100% - 200px)' }">
      <div class="w-300px of-x-hidden">
        <n-collapse class="w-100%">
          <n-collapse-item v-for="(items, index) in lives" :key="index">
            <template #header>
              <div class="text-#fff">{{ index }}</div>
            </template>
            <div class="text-#fff" v-for="(items2, index) in items" :key="index">
              <div class="text-#fff cursor-pointer lh-40px p-x-30px hover:text-#003cff hover:bg-#14162c hover:bg-op-50"
                :class="{
                  '!text-#1a9951': route.query.id == item.id
                }" v-for="(item, index) in items2" :key="index" @click="onPlay(item)">
                <n-ellipsis>{{ item.name }}</n-ellipsis>
              </div>
            </div>
          </n-collapse-item>
        </n-collapse>
      </div>
      <div class="flex-1">
        <video id="video" class="w-100% h-100%" controls autoplay></video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios"
import Hls from "hls.js"
import videojs from "video.js"
import "video.js/dist/video-js.css"
const router = useRouter()
const route = useRoute()
const search = ref()
const lives = ref({})
const onSearch = async () => {
  console.log(search.value)
  const res = await axios({
    url: "http://127.0.0.1:82/",
    method: "get",
    params: {
      search: search.value
    }
  })
  console.log(res.data)
}
onMounted(async () => {
  const tvRes: { data: string } = await axios({
    url: "https://m3u.ibert.me/txt/fmml_ipv6.txt",
    method: "get",
  });
  const tv = tvRes.data.split('\n')
  const results = {}
  let oneName = null
  do {
    const line = tv.shift().trim()
    if (/#genre#/.test(line)) {
      oneName = line.split(',')[0]
      results[oneName] == results[oneName] || {}
    } else if (line) {
      const [name, url] = line.split(',')
      if (!results[oneName]) {
        oneName = name
        results[oneName] = {}
      }
      results[oneName][name] = results[oneName][name] || []
      results[oneName][name].push({
        name,
        url,
        id: line
      })
    }
  } while (tv.length > 0)
  lives.value = results
})
watchEffect(() => {
  console.log(lives.value)
})
const onPlay = async (item?: any) => {
  if (item) {
    router.replace({
      query: {
        ...item,
        type: 'lives'
      }
    })
  } else {
    item = route.query
  }
  if (item.url) {
    const video = document.getElementById('video') as HTMLVideoElement;
    if (/\.mp4$/.test(item.url)) {
      video.src = item.url;
      video.play();
      return
    }
    const hls = new Hls();
    hls.loadSource(item.url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_LOADED, () => {
      video.play();
    });
  }
}
onMounted(() => {
  onPlay()
})
</script>

<style scoped lang="less">
.svip {}
</style>
