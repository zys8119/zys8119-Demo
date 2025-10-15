<template>
    <div class='abs-content flex-center items-start'>
        <img class="abs-content"
            src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
            alt="">
        <div class="abs-content flex-center items-end">
            <canvas class="h-100%" ref="canvas"></canvas>
        </div>
    </div>
</template>
<script setup lang="ts">
import mp4 from './4.mp4?url'
import { MP4Clip, createChromakey } from '@webav/av-cliper';
const canvas = ref<HTMLCanvasElement>(null)!;
const chromakey = createChromakey({
    similarity: 0.34,
    smoothness: 0.05,
    spill: 0.05,
})
let stop = () => { };
const speed = ref(1);
onMounted(async () => {
    const resp1 = await fetch(mp4);
    const clip = new MP4Clip(resp1.body!);
    await clip.ready;
    const ctx = canvas.value.getContext('2d')!;
    stop();
    if (speed.value === Infinity) {
        fastestDecode();
    } else {
        timesSpeedDecode(speed.value);
    }
    async function fastestDecode() {
        let time = 0;
        let stopted = false;

        stop = () => (stopted = true);

        while (!stopted) {
            const { state, video } = await clip.tick(time);
            if (state === 'done') break;
            if (video != null && state === 'success') {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(
                    video,
                    0,
                    0,
                    video.codedWidth,
                    video.codedHeight,
                    0,
                    0,
                    ctx.canvas.width,
                    ctx.canvas.height,
                );
                video.close();
            }
            time += 33000;
        }
        clip.destroy();
    }

    function timesSpeedDecode(times: number) {
        let startTime = performance.now();

        const timer = setInterval(async () => {
            let { state, video } = await clip.tick(
                Math.round((performance.now() - startTime) * 1000) * times,
            );
            if (state === 'done') {
                clearInterval(timer);
                clip.destroy();
                return;
            }
            if (video != null && state === 'success') {
                video = await chromakey(video) as VideoFrame;
                ctx.canvas.width = video.codedWidth;
                ctx.canvas.height = video.codedHeight;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(
                    video,
                    0,
                    0,
                    video.codedWidth,
                    video.codedHeight,
                    0,
                    0,
                    ctx.canvas.width,
                    ctx.canvas.height,
                );
                video.close();
            }
        }, 1000 / 30);

        stop = () => {
            clearInterval(timer);
            clip.destroy();
        };
    }
})
</script>
<style scoped lang="less">
.aaa {}
</style>