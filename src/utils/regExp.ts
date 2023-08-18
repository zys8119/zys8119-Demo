import {merge} from "lodash"
interface StartToEndConfig {
    noContent?:boolean
    start?:number | undefined
    end?:number | undefined
    noStart?:boolean | undefined
    noEnd?:boolean | undefined
}
interface RegExpCalcOptions extends StartToEndConfig{
    custom?:string
    noEmpty?:boolean
    noStartEmpty?:boolean
    noEndEmpty?:boolean
    figure?:boolean | StartToEndConfig
    noFigure?:boolean
    letter?:boolean | StartToEndConfig
    noLetter?:boolean
    capitalLetter?:boolean | StartToEndConfig
    noCapitalLetter?:boolean
    special?:boolean
    noSpecial?:boolean
    specialStr?:string,
    flags?:{
        g?:boolean
        i?:boolean
        m?:boolean
        u?:boolean
        y?:boolean
        d?:boolean
    }
}
export const startToEnd = (config:StartToEndConfig, custom?:()=> string)=>{
    let result = ''
    if(config.noContent !== true){
        result += `(${custom?.() || '.'})`
    }
    if(config.noStart !== true && typeof config.start === 'number'){
        const endStr = typeof config.end === 'number' ? config.end : ''
        result += `{${config.start}${config.noEnd === true ? '' : `,${endStr}`}}`
    }
    return result
}
export const regExpCalc = (options?:RegExpCalcOptions)=>{
    const types = [
        {key: 'figure', reg:'\\d'},
        {key: 'letter', reg:'[a-z]'},
        {key: 'capitalLetter', reg:'[A-Z]'},
    ]
    let str = ''
    const config = merge({
        start:8,
        noEmpty:true,
        noStartEmpty:true,
        noEndEmpty:true,
        figure:true,
        letter:true,
        capitalLetter:true,
        special:true,
        specialStr:`!@#$%^&*()\\.`,
        flags:{}
    } as RegExpCalcOptions, options)
    if(config.figure){str += `(?=.*\\d)`}
    if(config.noFigure){str += `(?!.*\\d)`}
    if(config.letter){str += `(?=.*[a-z])`}
    if(config.noLetter){str += `(?!.*[a-z])`}
    if(config.capitalLetter){str += `(?=.*[A-Z])`}
    if(config.noCapitalLetter){str += `(?!.*[A-Z])`}
    if(config.special){str += `(?=.*[${config.specialStr}])`}
    if(config.noSpecial){str += `(?!.*[${config.specialStr}])`}
    if(config.noEmpty){str += `(?!.*\\s)${config.noStartEmpty ? `(?=^\\S)` : ''}${config.noEndEmpty ? `(?=\\S$)` : ''}`}
    str += startToEnd(config, ()=>{
        let str = ''
        types.forEach(({key, reg})=>{
            if(typeof (config as any)[key] === 'object'){str += startToEnd((config as any)[key], ()=> reg) + '|'}
        })
        return typeof config.custom === 'string' ? config.custom : str.replace(/\|$/,'') || '.'
    })
    const flags = Object.keys(config.flags as any).filter(e=> {
        return ['g','i','m','u','y','d'].includes(e) && (config.flags as any)[e] === true
    }).join('')
    return new RegExp(str, flags)
}
export default {
    /**
     * 密码强度校验
     */
    password:regExpCalc(),
    // password:new RegExp(`(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*\(\)\.])[\\S]{${8}}`),
}
