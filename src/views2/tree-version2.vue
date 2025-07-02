<template>
    <div class='a'>
        <CanvasInteraction @load="draw" class="abs-content" />
    </div>
</template>
<script setup lang="ts">
import winframe from "winframe"
import CanvasInteraction, { ObjectBaseType } from "../components/CanvasInteraction"
const { width, height } = useWindowSize()
const draw = async (a) => {
    class Leaf extends a.ObjectBase implements ObjectBaseType {
        constructor(public x: number, public y: number, public length = 10, public w = 5, public color = '#228B22') {
            super()
        }
        draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
            ctx.save();
            ctx.translate(this.x, this.y);

            ctx.beginPath();
            ctx.moveTo(0, 0);
            // 左半边
            ctx.bezierCurveTo(-this.w, -this.length * 0.3, -this.w, -this.length * 0.7, 0, -this.length);

            // 右半边
            ctx.bezierCurveTo(this.w, -this.length * 0.7, this.w, -this.length * 0.3, 0, 0);
            ctx.fillStyle = this.color;
            ctx.fill();

            // 画中脉
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -this.length);
            ctx.strokeStyle = '#006400';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.restore();
        }
    }
    class Flower extends a.ObjectBase implements ObjectBaseType {
        globalAlpha = Math.random()
        constructor(public x = 0, public y: number = 0, public petalRadius = 4, public petalCount = 6, public petalColor = '#FF6F61', public centerColor = '#FFC3A0') {
            super()
        }
        draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.globalAlpha = this.globalAlpha
            // 绘制花瓣
            for (let i = 0; i < this.petalCount; i++) {
                const angle = (2 * Math.PI / this.petalCount) * i;
                ctx.save();
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.ellipse(0, -this.petalRadius / 2, this.petalRadius, this.petalRadius / 2, 0, 0, 2 * Math.PI);
                ctx.fillStyle = this.petalColor;
                ctx.fill();
                ctx.restore();
            }

            // 绘制中心圆
            ctx.beginPath();
            ctx.arc(0, 0, this.petalRadius / 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = this.centerColor;
            ctx.fill();

            ctx.restore();
        }
        isInside() { return false }
    }

    class Line extends a.ObjectBase implements ObjectBaseType {
        p: number = 0
        deg: number = 0
        scaleStep = 0.5
        constructor(public x: number = 0, public y: number = 0, public h: number = 100, public lineWidth: number = 4, isLeft = false, public level = 0) {
            super()
            this.deg = level === 0 ? 0 : Math.PI / 180 * Math.random() * 70 * (isLeft ? 1 : -1)
            // const _lineWidth = Math.abs()
            winframe(_p => {
                this.p = _p
                if (this.p >= 1 && this.h >= 0 && this.x >= 0 && this.x <= width.value && this.y >= 0 && this.y <= height.value && (this.level < 6 || Math.floor(Math.random() * 2))) {
                    // 绘制分支
                    const sx = this.h * Math.sin(this.deg) + this.x
                    const sy = this.y - this.h * Math.cos(this.deg)
                    a.scene.push(new Line(sx, sy,
                        (() => {
                            const h = this.h - Math.random() * this.h
                            if (h > 0)
                                return this.h
                        })(),
                        this.lineWidth - this.level * this.scaleStep,
                        false,
                        this.level + 1
                    ));
                    a.scene.push(new Line(sx, sy,
                        (() => {
                            const h = this.h - Math.random() * this.h
                            if (h < 0) {
                                return Math.random() * 30
                            }
                            return h
                        })(),
                        this.lineWidth - this.level * this.scaleStep,
                        true,
                        this.level + 1
                    ));
                    // 绘制花朵或树叶
                    a.scene.push(new Leaf(this.x, this.y - this.h));
                    a.scene.push(new Flower(this.x, this.y - this.h, Math.random() * 10));
                }
            }, 300)
        }
        async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
            ctx.beginPath()
            ctx.lineWidth = this.lineWidth;
            ctx.lineCap = "round";
            ctx.save()
            ctx.translate(this.x, this.y)
            ctx.rotate(this.deg)
            ctx.moveTo(0, 0)
            ctx.lineTo(0, -this.h * this.p)
            ctx.stroke()
            ctx.restore()
        }
        isInside() { return false }
    }
    a.scene.push(new Line(width.value / 2, height.value));
}
</script>
<style scoped lang="less">
.a {}
</style>