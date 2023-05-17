<template>
  <div class="PathRecognition">
    <CanvasInteraction @load="load"></CanvasInteraction>
  </div>
</template>

<script setup lang="ts" title="canvas 交互">
import CanvasInteraction from "../components/CanvasInteraction"

const intersects = function (bodyA, bodyB) {
  return !(bodyA.x + bodyA.width < bodyB.x ||
      bodyB.x + bodyB.width < bodyA.x ||
      bodyA.y + bodyA.height < bodyB.y ||
      bodyB.y + bodyB.height < bodyA.y);
}
const containsPoint = function (body, x, y) {
  return !(x < body.x || x > (body.x + body.width)
      || y < body.y || y > (body.y + body.height));
}
const load = async ({ObjectsClass, scene, ObjectBase}) => {
  const a = new ObjectsClass.Rect("#f00", 50, 60, 100, 100)
  scene.push(a)
  const b = new ObjectsClass.Rect("#0032ff", 500, 500, 500, 500)
  scene.push(b)
  scene.push(new ObjectsClass.Rect("#0ab700", 200, 100, 150, 200))
  scene.push(new ObjectsClass.Rect("#f500d5", 400, 100, 200, 500))
  const sceneObjs = scene.filter(e => e.type !== 'line')
  const isInScene = ([x, y]: any) => sceneObjs.find(e => containsPoint(e, x, y))

  class Line extends ObjectBase {
    type = 'line'
    x = 0
    y = 0
    w = 0
    h = 0
    lineWidth = 2
    points: Array<[x: number, y: number]> = []

    get width() {
      return Math.abs(this.sx - this.ex)
    }

    get height() {
      return Math.abs(this.sy - this.ey)
    }

    constructor(public sx: number = 0, public sy: number = 0, public ex: number = 0, public ey: number = 0) {
      super();
      this.updatePoints()
    }

    ctx: CanvasRenderingContext2D

    getDistance([x, y]: any) {
      const a = Math.abs(x - this.ex);
      const b = Math.abs(y - this.ey);
      return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    async getPoint(resultPoint: Array<[x: number, y: number]> = [], sx = this.sx, sy = this.sy, direction = -1, cache = new Map(), prePoints:Array<any> = []) {
      const offset = 1
      const points = [
        [sx, sy - offset],
        [sx + offset, sy],
        [sx, sy + offset],
        [sx - offset, sy],
      ]
      let point = points[direction]
      const prePointsIsIn = prePoints.some(e=>isInScene(e))
      const effective = points.filter(e=>!isInScene(e) && !cache.has(e.toString()))
      const lengthsAll = points.map(e => this.getDistance(e))
      const minLength = Math.min.apply(null, lengthsAll)
      const index = lengthsAll.indexOf(minLength)
      // 第一次
      if (direction === -1) {
        point = points[index]
        direction = index
      }
      if (sx === this.ex && sy === this.ey) {
          return resultPoint
      }
      if(direction !== -1 && isInScene(point) && !isInScene([sx, sy]) || (prePointsIsIn && effective.length === 3) || (!isInScene(points[index]) && (sx === this.ex || sy === this.ey))){
        const lengths = effective.map(e => this.getDistance(e))
        const minLength = Math.min.apply(null, lengths)
        const index = lengthsAll.indexOf(minLength)
        point = points[index]
        direction = index
      }
      const [x, y] = point
      cache.set(point.toString(), true)
      resultPoint.push(point as any)
      try {
          await this.getPoint(resultPoint, x, y, direction, cache, points)
      }catch (e){
          setTimeout(()=>{
              this.getPoint(resultPoint, x, y, direction, cache, points)
          })
          return resultPoint
      }
      return resultPoint
    }
    async updatePoints() {
        this.points = await this.getPoint()
    }

    async draw(ctx: CanvasRenderingContext2D, canvas) {
      this.ctx = ctx
      ctx.beginPath()
      ctx.strokeStyle = "#ff8000"
      ctx.lineJoin = "round"
      ctx.lineWidth = this.lineWidth
      ctx.moveTo(this.sx, this.sy)
      this.points.forEach(([x, y]) => {
        ctx.lineTo(x, y)
      })
      ctx.lineTo(this.ex, this.ey)
      ctx.stroke()
    }
  }

  scene.push(new Line(100, 150, 805, 457))


}

</script>

<style scoped lang="less">
.PathRecognition {
}
</style>
