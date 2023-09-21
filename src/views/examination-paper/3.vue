<template>
    <div class="3">
        纯css实现9宫格grid布局，并鼠标进入某个格子后，该格子占比调整2:1（只能使用grid布局）
        <div class="grid">
            <div v-for="i in 9" :key="i"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
@use "sass:math"
.grid
    display: grid
    width: 500px
    height: 500px
    border: 1px solid #f00
    grid-template-columns: repeat(3, 1fr)
    $color:#f00,#ff0
    div
        @for $i from 1  through 9
            &:nth-child(#{$i})
                background: 0 from $color
</style>
