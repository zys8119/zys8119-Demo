<template>
    <div class="3">
        纯css实现9宫格grid布局，并鼠标进入某个格子后，该格子占比调整2:1（只能使用grid布局）
        <div class="grid m-l-15 m-t-15">
            <div v-for="i in 9" :key="i"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use "sass:math";
.grid{
    display: grid;
    width: 500px;
    height: 500px;
    border: 1px solid #f00;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    $max:9;
    div{
        @for $i from 0 to $max {
            &:nth-child(#{$i+1}){
                background: hsl($i * 40deg, 50%, 50%);
            };
        }
    }
    @for $i from 0 to $max {
        &:has(div:nth-child(#{$i+1}):hover){
            $c:($i % 3)+1;
            $r:floor(calc($i / 3)) + 1;
            $arr:1fr 1fr 1fr;
            $cols:set-nth($arr, $c, 2fr);
            $rows:set-nth($arr, $r, 2fr);
            grid-template-columns: $cols;
            grid-template-rows: $rows;
        }
    }
}

</style>
