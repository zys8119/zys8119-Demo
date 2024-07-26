module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    const obj = yaml.parse(raw)
    const rules = [
        "douyin.com",
        "douyinpic.com",
        "douyinstatic.com",
        "douyinvod.com",
        "iesdouyin.com",
        "bytednsdoc.com",
        "zijieapi.com",
        "bytescm.com.com",
        "bytegoofy.com",
        "bytetos.com",
        "byted–static.com",
        "bytetcc.com",
        "bytescm.com",
        "bytedance.com",
        "feelgood.cn",
        "douyincdn.com",
        "snssdk.com",
        "youku.com",
        "iqiyi.com",
        {name:"byteimg.com",type:'DIRECT'},
        {name:"bilibili.com",type:'DIRECT'},
        {name:"hdslb.com",type:'DIRECT'},
        {name:"bilivideo.com",type:'DIRECT'},
        {name:"bilivideo.cn",type:'DIRECT'},
        "yy.com",
        "juejin.com",
        "zhihu.com",
        "bilibili.com",
    ].map(i => `DOMAIN-KEYWORD,${typeof i === 'string' ? i : i.name},${typeof i === 'string' || !i.type ?  obj['proxy-groups'][0].name : i.type}`)
    return yaml.stringify({
        ...obj,
        rules: rules.concat(obj.rules),
    })
}
