<template>
    <div class='abs-content flex-center items-start'>
        <img class="abs-content"
            src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
            alt="">
        <div class="abs-content flex-center items-end">
            <canvas class="h-100%" ref="canvas"></canvas>
            <div class="text-50px text-#f00 flex-center abs-center">{{ text }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
const texts = ref('啊埃鞍肮凹芭白斑邦苞剥杯奔崩逼鞭标鳖彬兵捕擦猜餐苍操厕层插拆搀昌超车郴撑吃充抽臭揣疮吹春戳疵聪凑蹿摧村撮搭呆耽当刀德蹬堤颠碉跌丁东兜都端堆墩掇蛾恩而发藩坊菲芬丰佛噶该干冈杠篙哥给根耕钩辜刮乖棺光瑰辊锅哈骸酣夯杭壕呵嘿哼轰喉呼花槐欢荒灰荤豁击嘉歼僵蕉窖巾劲炯揪鞠捐撅均喀咯开刊康考肯吭空抠枯夸块宽匡亏坤括垃莱蓝琅捞勒雷棱楞厘俩粮撩列琳溜龙楼芦驴峦掠轮萝妈埋瞒芒氓猫茅么玫门眯棉蔑民明谬摸谋拇拿氖南挠淖馁嫩妮蔫娘鸟捏您狞牛脓奴女暖虐疟挪哦啪拍攀乓抛呸喷砰砒篇飘撇拼乒坡剖扑期掐牵枪橇切钦青琼秋趋圈缺裙然瓤饶惹热壬扔日戎揉茹软蕊闰撒腮三桑搔瑟森僧莎筛珊墒梢奢砷声师收蔬刷摔栓霜谁吮说斯松搜苏酸虽孙梭塌胎坍汤倘趟掏特藤梯天条贴厅通偷凸湍推吞拖挖歪豌汪威瘟嗡挝巫昔瞎锨相萧楔薪星兄休墟轩靴勋压焉殃邀椰一茵英哟拥幽迂鸳曰耘匝栽攒赃遭责贼怎增扎摘瞻樟招遮珍蒸芝中舟珠抓拽专桩椎谆捉兹鬃邹租钻嘴尊昨薮');
const text = ref('');
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
            const timeCurrent = Math.round((performance.now() - startTime) * 1000) * times;
            let { state, video } = await clip.tick(timeCurrent);
            text.value = texts.value[Math.floor(timeCurrent / 1000 / 1000)]
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