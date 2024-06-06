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
        "byteimg.com",
        "qq.com",
        "youku.com",
        "iqiyi.com",
        "bilibili.com",
        "hdslb.com",
        "bilivideo.com",
        "yy.com",
        "juejin.com",
        "zhihu.com",
        "bilibili.com",
    ].map(i => `DOMAIN-SUFFIX,${i},${obj['proxy-groups'][0].name}`)
    return yaml.stringify({
        ...obj,
        rules
    })
}
