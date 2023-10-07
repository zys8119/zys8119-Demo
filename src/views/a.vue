<template>
    <div class="a">
        <div class="grid">

        </div>
    </div>
</template>

<script setup lang="ts">
const points = [
    [1,5, 1,5,8],
    [2,3, 6,55,56],
    [4,2, 1,565,856]
]
for (let i =0; i < points.length; i++){
    const arr = points[i]
    for (let j =0; j < arr.length; j++){
        console.log(points[i][j])
    }
}
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
