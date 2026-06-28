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
                    <div class=" abs-r h-80px w-60%">
                        <img class="abs-content" src="/images/cy/5.png" alt="">
                        <div class="abs-content flex flex-col gap-5px">
                            <div class="flex-center mt-10px justify-between p-x-10px">
                                <div class="flex-center gap-4px" v-for="(item, index) in chunk1" :key="index">
                                    <img class="s-15px" :src="item.img" alt="">
                                    <div class="text-12px">{{ item.text }}</div>
                                </div>
                            </div>
                            <div class="flex-1">礼物</div>
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
                                <div class="text-16px text-#c8f0f9">火腿肠</div>
                            </div>
                        </div>
                        <img class="abs bottom-0 right-0 w-50px" src="/images/cy/8.png" alt="">
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
                    </div>
                </div>
                <div class="abs-r h-100px">
                    <img class="abs-content" src="/images/cy/7.png" alt="">
                    <div class="abs-center top-10px text-12px  text-#c8f0f9 text-shadow-xs text-shadow-#00ceee">
                        弹幕区域
                    </div>
                    <div class="abs-content  top-10px h-[calc(100%-10px)]">
                        asda
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
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
</script>
<style scoped lang="less">
.aa {}
</style>