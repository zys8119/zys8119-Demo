<template>
    <div class="7">
        使用代理拦截动态属性
    </div>
</template>

<script setup lang="ts">
const _porxy = (results:number[] = [])=>{
    return new Proxy({}, {
        get(t, p){
            if(p === Symbol.toPrimitive){
                return  ()=> results.reduce((a,b)=>a+b)
            }
            return _porxy([...results, Number(p)])
        }
    })
}
const add = _porxy()
const r1 = add[1][2][3] + 4 // 10
const r2 = add[10][20] + 30 // 60
const r3 = add[100][200][300] + 400 // 1000
console.log(r1, r2, r3)
/**
 @解题思路：
 1. 使用代理拦截属性，即需要把add改写成代理类型，原因是Proxy可以拦截对象的所有基本操作
 2. 在 Proxy 的属性描述上，有get 方法，即重写get方法，在数据的读取、存储、计算过程中都将进入get方法，而get的第二参数就是对象的基本操作符号，即可以获取到读取的字段、运算状态等
 3. 既然能获取到读取的字段，则将其保存起来，直到出现了运算标示符，这通过缓存起来的数据计算后在返回出原始类型用于计算
 @知识点：
 JavaScript 是一个弱类型语言，这意味着当操作涉及不匹配的类型时，它允许隐式类型转换，而不是抛出类型错误。

 所以js里面所有的计算中，第一步都需要将非原始类型的数据转换为原始类型计算，js获取的原始类型的过程是

 原始值强制转换：[@@toPrimitive]("default") → valueOf() → toString()
 数字类型强制转换、number 类型强制转换、BigInt 类型强制转换：[@@toPrimitive]("number") → valueOf() → toString()
 字符串类型强制转换：[@@toPrimitive]("string") → toString() → valueOf()

 @例子：

 const a = {
    toString(){
        // 当所有类型都无法转原型类型后，则将数据转换成字符串进行运算
        return 5
    },
    valueOf(){
      // 优先仅此 基本运算符Symbol.toPrimitive
      return 2
    },
    [Symbol.toPrimitive](){
         // 优先级最高
        return 6
    }
}
console.log(a + 1)
 */
</script>

<style scoped lang="less">
</style>
