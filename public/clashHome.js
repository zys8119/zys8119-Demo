module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    const obj = yaml.parse(raw)
    const rules = [
        "githubusercontent.com",
        "chatgpt.com",
    ].map(i => `DOMAIN-KEYWORD,${i},${obj['proxy-groups'][0].name}`)
    return yaml.stringify({
        ...obj,
        rules: rules.concat(obj.rules),
    })
}
