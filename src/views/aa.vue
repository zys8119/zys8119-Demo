<template>
    <div class='aa abs-content bg-#030539 text-#fff'>
        <img class="abs-content" src="/images/cy/bg.png" alt="">
        <div class="abs-content flex-center justify-start flex-col">
            <div class="flex-center w-full mt-10px">
                <img src="/images/cy/1.png" class="w-80%" alt="">
            </div>
            <div class="flex-center w-full mt-10px abs-r  w-60% h-30px">
                <img class="abs-content" src="/images/cy/2.png" alt="">
                <div
                    class="abs-content flex-center bg-linear-to-r from-#57c0cd to-#fce173 bg-clip-text text-transparent">
                    关注主播解锁彩色昵称!
                </div>
            </div>
            <div class="flex-1  m-y-10px w-[calc(100%-20px)] flex flex-col gap-10px">
                <div class="flex-center gap-10px justify-between w-full">
                    <div class=" abs-r h-80px w-55%">
                        <img class="abs-content" src="/images/cy/5.png" alt="">
                        <div class="abs-content flex flex-col gap-5px">
                            <div class="flex-center mt-10px justify-between p-x-10px">
                                <div class="flex-center gap-4px" v-for="(item, index) in chunk1" :key="index">
                                    <img class="s-15px" :src="item.img" alt="">
                                    <div class="text-12px">{{ item.text }}</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <n-marquee auto-fill>
                                    <div class="flex-center gap-10px m-x-10px">
                                        <div>礼物</div>
                                        <div>礼物</div>
                                        <div>礼物</div>
                                    </div>
                                </n-marquee>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 abs-r h-80px">
                        <img class="abs-content" src="/images/cy/6.png" alt="">
                        <div class="abs-content">
                            <div class="text-12px  mt-10px flex gap-5px p-x-10px">
                                <div class="text-#999">上轮答案:</div>
                                <div>asd</div>
                            </div>
                            <div class="p-x-10px">
                                <div
                                    class="text-30px bold  bg-linear-to-r from-#57c0cd to-#fce173 bg-clip-text text-transparent">
                                    火腿肠啊</div>
                            </div>
                        </div>
                        <img class="abs bottom-0 right-0 tr-y-10px w-50px" src="/images/cy/8.png" alt="">
                    </div>
                </div>
                <div class="flex-1 flex-center gap-10px">
                    <div class=" w-60% h-full abs-r">
                        <img class="abs-content" src="/images/cy/3.png" alt="">
                        <div class="abs-center top-10px text-12px  text-#ffffff text-shadow-">
                            猜词区域
                        </div>
                    </div>
                    <div class=" flex-1 h-full abs-r">
                        <img class="abs-content" src="/images/cy/4.png" alt="">
                        <div class="abs-center top-10px text-12px  text-#ffffff text-shadow-">
                            排行榜
                        </div>
                        <div class="abs-content text-#fff  top-30px h-[calc(100%-30px)] p-x-10px flex flex-col gap-5px">
                            <div class="flex flex-col gap-5px">
                                <div v-for="(item, index) in tops" :key="index" class="abs-r h-40px of-hidden">
                                    <img class="abs-content" :src="item.img" alt="">
                                    <div class="abs-content flex-center justify-between">
                                        <div class="flex-1"></div>
                                        <div class="flex-1">
                                            <img class="s-20px object-fill of-hidden b-rd-100%" :src="item.tx" alt="">
                                        </div>
                                        <div class="flex-1 flex-center items-start flex-col">
                                            <n-ellipsis class="text-12px">{{ item.name }}</n-ellipsis>
                                            <n-ellipsis class="text-12px">{{ item.score }}分</n-ellipsis>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 of-hidden mb-10px">
                                <!-- <Vue3SeamlessScroll :list="tops.concat(tops)" direction="up" ease="ease-in">
                                    <template v-slot="{ data: item, index }">
                                        <div class="abs-r h-40px of-hidden">
                                            <div class="abs-content flex-center justify-between">
                                                <div class="flex-1 flex-center">{{ index + 4 }}</div>
                                                <div class="flex-1">
                                                    <img class="s-20px object-fill of-hidden b-rd-100%" :src="item.tx"
                                                        alt="">
                                                </div>
                                                <div class="flex-1 flex-center items-start flex-col">
                                                    <n-ellipsis class="text-12px">{{ item.name }}</n-ellipsis>
                                                    <n-ellipsis class="text-12px">{{ item.score }}分</n-ellipsis>
                                                </div>
                                            </div>
                                        </div>
                                    </template>

</Vue3SeamlessScroll> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="abs-r h-100px">
                    <img class="abs-content" src="/images/cy/7.png" alt="">
                    <div class="abs-center top-10px text-12px  text-#c8f0f9 text-shadow-xs text-shadow-#00ceee">
                        弹幕区域
                    </div>
                    <div class="abs-content top-10px h-[calc(100%-10px)]">
                        <Danmaku :list="danmakuList" :speed="2" :row="5" :interval="1000" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const chunk1 = ref([
    {
        img: '/images/cy/11.png',
        text: '字数'
    },
    {
        img: '/images/cy/10.png',
        text: '提示'
    },
    {
        img: '/images/cy/9.png',
        text: '倒计时'
    }
])
const tops = ref([
    {
        img: '/images/cy/a.png',
        name: '字数',
        score: 100000,
        tx: "/images/cy/a.png"
    },
    {
        img: '/images/cy/b.png',
        name: '提示',
        score: 100000,
        tx: "/images/cy/a.png"
    },
    {
        img: '/images/cy/c.png',
        name: '倒计时',
        score: 100000,
        tx: "/images/cy/a.png"
    }
])

const danmakuList = ref([
    { id: 1, content: '666666' },
    { id: 2, content: '哈哈哈' },
    { id: 3, content: '冲冲冲', color: '#ffdd57' },
    { id: 4, content: '主播牛逼' },
    { id: 5, content: '来了来了' },
    { id: 6, content: '加油加油', color: '#ff6b6b' },
    { id: 7, content: '666' },
    { id: 8, content: '好厉害！' },
])

</script>
<style scoped lang="less"></style>