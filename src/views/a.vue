<template>
    <div class="a">
        <div class="grid">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    </div>
</template>

<script setup lang="ts">



</script>

<style scoped lang="less">
.a {
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 300px; /* 适应你的布局尺寸 */
        grid-gap: 5px;
    }

    .cell {
        background-color: #ccc;
        transition: flex 0.3s;
        width: 100%; /* 初始占比1:1 */
        height: 100%; /* 初始占比1:1 */
    }

    .cell:hover {
        grid-column: span 2; /* 占比2:1 */
        grid-row: span 2; /* 占比2:1 */
    }


}
</style>
