<template>
    <div class="lct">
        <canvas id="canvas" width="600" height="400"></canvas>
    </div>
</template>

<script setup lang="ts" title="避障" content="寻路算法">
onMounted(() => {
    // JS 部分
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const robot = { x: 100, y: 200, direction: 0 }; // 机器人的位置和方向
    const obstacles = [
        { x: 300, y: 200, radius: 50 },
        { x: 250, y: 400, radius: 50 },
    ]; // 避障障碍物的位置和半径

    function drawRobot() {
        // 绘制机器人
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(robot.x, robot.y, 20, 0, 2 * Math.PI);
        context.moveTo(robot.x, robot.y);
        const dx = Math.cos(robot.direction);
        const dy = Math.sin(robot.direction);
        context.lineTo(robot.x + 30 * dx, robot.y + 30 * dy);
        context.stroke();
    }

    function drawObstacles() {
        // 绘制障碍物
        context.fillStyle = "red";
        obstacles.forEach(obstacle => {
            context.beginPath();
            context.arc(obstacle.x, obstacle.y, obstacle.radius, 0, 2 * Math.PI);
            context.fill();
        });
    }

    function moveRobot() {
        // 根据环境信息计算机器人的下一步行动
        const dx = Math.cos(robot.direction);
        const dy = Math.sin(robot.direction);
        let nextX = robot.x + dx;
        let nextY = robot.y + dy;
        obstacles.forEach(obstacle => {
            const distance = Math.sqrt((nextX - obstacle.x) ** 2 + (nextY - obstacle.y) ** 2);
            if (distance < obstacle.radius + 20) {
                // 机器人遇到障碍物，不能前进
                robot.direction += Math.PI / 2;
            }
        });
        robot.x += Math.cos(robot.direction);
        robot.y += Math.sin(robot.direction);
    }

    function draw() {
        // 清空画布
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 绘制机器人和障碍物
        drawRobot();
        drawObstacles();
        // 移动机器人
        moveRobot();
        // 延时绘制下一帧
        setTimeout(draw, 50);
    }

    draw();
})

</script>

<style scoped lang="less">
.lct{
    position: fixed;
    width: 100%;
    height: 100%;
}
</style>
