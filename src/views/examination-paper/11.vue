<template>
    <div class="11">
        <input type="text" v-model="value" @input="chages">
        <div>
            <div v-for="(item,k) in results" :key="k">{{item.value}}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from "axios"
import {mock} from "mockjs-async"
mock(/^\/test/, 'post', e=>{
    const body = JSON.parse(e.body)
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(new Array(8).fill(0).map((e,k)=>({
                value:new Array(k+1).fill(body.search).join()
            })))
        }, Math.fround(Math.random() * 2000))
    })
})
const value = ref()
const results = ref([])
let signal
const chages = async ()=>{
    signal && signal.abort()
    signal = new AbortController()
    results.value = (await axios({
        signal:signal.signal,
        url:'/test',
        method:'post',
        data:{
            search:value.value
        }
    })).data
}
</script>

<style scoped lang="less">
.11
{

}
</style>
