<template>
    <div class="cc">

    </div>
</template>

<script setup lang="ts">
function randomParams(url, params){
    const search = ((/(?:\?(.*))/.exec(url) || [])[1] || '').replace(/&$/,'')
    const _url = url.match(/^[^\?]*/)[0]
    let _params = ''
    for (let k in params){
        _params += `${k}=${encodeURI(params[k])}`
    }
    return `${_url}?${search.trim()}&${_params.trim()}`
}

console.log(randomParams("http://aa/asdasd/asda.css/#/as?a=asda",{
    r:'as',
}))
</script>

<style scoped lang="less">
.cc {

}
</style>
