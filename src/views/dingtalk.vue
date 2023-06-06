<template>
    <div class="dingtalk">
        <template v-for="i in 100" :key="i">
            <div class="box" v-if="i === 50">
                <div class="box-item" v-for="ii in 14" :key="ii"></div>
            </div>
            <div class="row" v-else>&nbsp;{{i}}</div>
        </template>
    </div>
</template>

<script setup lang="ts">
const value = ref('0s')
const value2 = ref('0s')
const value4 = ref('0s')
const value6 = ref('0s')
const {x, y} = useScroll(window)
watchEffect(()=>{
    const getIndex = (index = 0)=> (y.value - 50*49 + (window.innerHeight-500 - index)/2)/2000
    value.value = `-${getIndex(0)}s`;
    value2.value = `-${getIndex(400)}s`;
    value4.value = `-${getIndex(800)}s`;
    value6.value = `-${getIndex(1200)}s`;
})
</script>

<style scoped lang="less">
.dingtalk {
    background-color: #4031a1;
    position: relative;
    .row{
        height: 50px;
    }


    .box{
        position: sticky;
        top: calc((100% - 500px)/2);
        background-color: #11083d;
        width: 100%;
        height: 500px;
        @size:70px;
        &-item{
            width: @size;
            height: @size;
            position: absolute;
            border-radius: 0px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        };
        .keyframes(@name, @childIndex, @index,  @top, @color, @progress){
            .box-item:nth-child(@{childIndex}){
                animation:@name 1s @progress linear forwards paused;
                @keyframes @name {
                    100%{
                        border-radius: 10px;
                        left: calc(((80%  - @size * 7) / 6 + @size) * @index);
                        top: @top;
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                        background-color: @color;
                    }
                }
            }
        };
        .keyframes(aa1,   1, 1,  30%, #2c84fc, v-bind(value));
        .keyframes(aa2,   2, 2,  30%, #06b74a, v-bind(value2));
        .keyframes(aa3,   3, 3,  30%, #fdb625, v-bind(value4));
        .keyframes(aa4,   4, 4,  30%, #fda321, v-bind(value6));
        .keyframes(aa5,   5, 5,  30%, #fd911e, v-bind(value4));
        .keyframes(aa6,   6, 6,  30%, #fb6735, v-bind(value2));
        .keyframes(aa7,   7, 7,  30%, #399cee, v-bind(value));
        .keyframes(aa8,   8, 1,  70%, #f00, v-bind(value));
        .keyframes(aa9,   9, 2,  70%, #c9ebff, v-bind(value2));
        .keyframes(aa10, 10, 3,  70%, #2765fb, v-bind(value4));
        .keyframes(aa11, 11, 4,  70%, #2765fb, v-bind(value6));
        .keyframes(aa12, 12, 5,  70%, #276ffa, v-bind(value4));
        .keyframes(aa13, 13, 6,  70%, #e8f2fd, v-bind(value2));
        .keyframes(aa14, 14, 7,  70%, #2a7ffa, v-bind(value));
    }
}
</style>
