<template>
    <div class='aaaa'>
        <table class="m-x-auto b-1-0 b-t-0" border cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th class="p-15px b-0 b-l-1 b-t-1" colspan="2">
                        <hover>
                            <span>{{ yearStr }}年</span>
                            <template #hover="{ setValue }">
                                <n-date-picker @blur="setValue(false)" @focus="setValue(true)" class="w-100px"
                                    placeholder="请选择年份" v-model:value="year" type="year" />
                            </template>
                        </hover>
                    </th>
                    <th class="p-15px b-0 b-l-1 b-t-1" rowspan="2">凭证号数</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" rowspan="2">对方科目</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" rowspan="2">摘要</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" :colspan="colspanMax">收入金额</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" :colspan="colspanMax">支出金额</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" :colspan="colspanMax">结余金额</th>
                </tr>
                <tr>
                    <th class="p-15px b-0 b-l-1 b-t-1">月</th>
                    <th class="p-15px b-0 b-l-1 b-t-1">日</th>
                    <template v-for="i in 3" :key="i">
                        <th class="p-15px b-0 b-l-1 b-t-1" v-for="ii in units" :key="ii">{{ ii }}</th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row, k in tableData" :key="k">
                    <td :rowspan="cell.rowSpan" :colspan="cell.colSpan" class="b-0 b-l-1 b-t-1 abs-r"
                        v-for="cell, kk in row" :key="kk" :tabindex="k">
                        <hover :disabled="cell.disabled" :useKey="cell.useKey" :edit="cell.edit" v-model="cell.value"
                            @change="cell.isUpdate = true">
                            <div class="p-15px h-10px of-auto" :class="{
                                'text-#0001ff': kk > 4 && /[0-9]/.test(cell.formatValue(cell.value, kk, row, k)),
                                'text-#f00': cell.isUpdate
                            }" v-bind="cell.props" :ref="editRef.bind(null, cell, row)">
                                <template v-if="cell.autoCalcValue">
                                    {{ autoCalcValue(cell, kk, row, k) }}
                                </template>
                                <template v-else>
                                    {{ cell.formatValue(cell.value,kk, row, k) }}
                                </template>
                            </div>
                            <template #hover="{ setValue }">
                                <n-select v-if="cell.type === 'select'" @blur="setValue(false)" @focus="setValue(true)"
                                    class="w-80px" value-format="MM" v-model:value="cell.value" v-bind="cell.props" />
                                <n-input-number v-if="cell.type === 'input-number'" @blur="setValue(false)"
                                    @focus="setValue(true)" value-format="MM" v-model:value="cell.value"
                                    v-bind="cell.props" />
                                <n-input v-if="cell.type === 'input'" @blur="setValue(false)" @focus="setValue(true)"
                                    value-format="MM" v-model:value="cell.value" v-bind="cell.props" />
                            </template>
                        </hover>
                    </td>
                </tr>
            </tbody>
        </table>
        <n-button @click="add" class="m-t-15px m-x-auto block">添加</n-button>
    </div>
</template>
<script setup lang="ts" title="记账本表格" content="财务记账本表格">
import dayjs from "dayjs"
import { get, cloneDeep, merge } from "lodash"
import BigNumber from "bignumber.js"
const units = ref(["万", "千", "百", "十", "元", "角", "分"])
const colspanMax = computed(()=> units.value.length)
const year = ref(dayjs().toDate())
const yearStr = computed(() => dayjs(year.value).format('YYYY'))
const getSelect = (config?: Record<any, any>) => merge({
    type: "select",
}, config)
const keyMap = ref({
    0: getSelect({
        isClick: false,
        value: dayjs().format('MM'),
        props: {
            placeholder: "请选择月份",
            options: new Array(12).fill(0).map((_, k) => ({
                label: k + 1 + '月',
                value: k + 1,
            }))
        },
    }),
    1: getSelect({
        isClick: false,
        value: dayjs().format('DD'),
        props: {
            placeholder: "请选择日期",
            options: new Array(31).fill(0).map((_, k) => ({
                label: k + 1 + '日',
                value: k + 1,
            }))
        }
    }),
    2: {
        edit: true,
        value: '',
        props: {
            contenteditable: true
        }
    },
    3: {
        edit: true,
        value: '',
        props: {
            contenteditable: true
        }
    },
    4: {
        edit: true,
        value: '',
        props: {
            contenteditable: true
        }
    }
})
const cerateRow = (options?: any, data: any[] = []) => {
    const getLng = get(options, 'getLng', () => 5+units.value.length*3)
    return new Array(getLng()).fill({}).map((e, k) => {
        const mapInfo = cloneDeep(get(keyMap.value, k, {
            useKey: true,
        }))
        const value = get(mapInfo, 'value', String(data[k] || '') || '')
        return merge({
            type: get(mapInfo, 'type', 'input-number'),
            value: value,
            useKey: get(mapInfo, 'useKey', false),
            edit: get(mapInfo, 'edit', false),
            year: yearStr.value,
            props: get(mapInfo, 'props', {
                max: 9,
                min: 0,
                showButton: false,
            }),
            formatValue: get(mapInfo, 'formatValue', (val: any) => val)
        }, options, {
            colSpan: get(options, 'colSpan', get(mapInfo, 'colSpan', () => null))(k),
            rowSpan: get(options, 'rowSpan', get(mapInfo, 'rowSpan', () => null))(k),
            value: typeof get(options, 'value') === 'function' ? options.value(get(mapInfo, 'value', 0), k) : value,
        },k > colspanMax.value*2 + 4 ? {
            useKey: false,
            edit: false,
            disabled: true,
            props: {
                contenteditable: false,
            },
            autoCalcValue:true
        } : {})
    })
}
const formatCurrency = (amount, separator = ',', decimal = '.') => {
  const parts = amount.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join(decimal);
};
const data = ref<any[]>([])
function numberToChineseCurrency(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return '零元整';
    }

    const units = ["", "拾", "佰", "仟"];
    const bigUnits = ["", "万", "亿", "兆"];
    const decimals = ["角", "分"];
    const digitChars = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];

    let integerPart = Math.floor(num);
    let decimalPart = Math.round((num - integerPart) * 100);

    if (integerPart === 0 && decimalPart === 0) {
        return '零元整';
    }

    let integerStr = "";
    let unitPos = 0;
    let zeroFlag = false;

    while (integerPart > 0) {
        let segment = integerPart % 10;
        if (segment === 0) {
            if (!zeroFlag) {
                integerStr = digitChars[segment] + integerStr;
                zeroFlag = true;
            }
        } else {
            integerStr = digitChars[segment] + units[unitPos] + integerStr;
            zeroFlag = false;
        }
        unitPos++;
        if (unitPos === 4) {
            unitPos = 0;
            integerStr = bigUnits.shift() + integerStr;
        }
        integerPart = Math.floor(integerPart / 10);
    }

    integerStr += "元";

    if (decimalPart === 0) {
        integerStr += "整";
    } else {
        const jiao = Math.floor(decimalPart / 10);
        const fen = decimalPart % 10;

        if (jiao > 0) {
            integerStr += digitChars[jiao] + decimals[0];
        }

        if (fen > 0) {
            integerStr += digitChars[fen] + decimals[1];
        }
    }

    return integerStr.replace(/零[拾佰仟]/g, "零")
                     .replace(/零{2,}/g, "零")
                     .replace(/零(万|亿|元)/g, "$1")
                     .replace(/亿万/g, "亿")
                     .replace(/零元/g, "元");
}
const totalRow = computed(() => {
    const A = data.value.map(e=>e.slice(5,5+colspanMax.value*1).map(e=>e.value || '0').join('').padStart(colspanMax.value,'0')).reduce((a,b)=>BigNumber(a).plus(b).toNumber(),0).toString()
    const B = data.value.map(e=>e.slice(5+colspanMax.value*1,5+colspanMax.value*2).map(e=>e.value || '0').join('').padStart(colspanMax.value,'0')).reduce((a,b)=>BigNumber(a).plus(b).toNumber(),0).toString()
    const C = BigNumber((data.value.at(-1)||[]).slice(5+colspanMax.value*2,5+colspanMax.value*3).map(e=>e.value || '0').join('')).toString()
    return [cerateRow({
        useKey: false,
        edit: false,
        disabled: true,
        formatValue(v, k) {
            if (k === 0) {
                return "总计："
            }
            else if (k === 1) { return '' }
            return String(v || '')
        },
        colSpan: k => ({ 
             0: 2,
             1: 3,
             2: colspanMax.value,
             3: colspanMax.value,
             4: colspanMax.value,
        }[k]) || null,
        props: {
            contenteditable: false,
        },
        getLng() { return 5 },
        value(v, k) {
            if(k > 1){
                const value = BigNumber(BigNumber([A,B,C][k-2]).div(100).toFixed(2)).toNumber()
                return `${value} ¥`
            }
            return v
        }
    })]
})
const tableData = computed(() => data.value.concat(totalRow.value))
const add = () => {
    data.value.push(cerateRow())
}
const editRef = (cell, row, el: any) => {
    if (cell.edit) {
        useMutationObserver(el, (e) => {
            cell.value = el.innerText
            cell.isUpdate = true
        }, {
            characterData: true,
            childList: true,
            subtree: true
        })
    }

}
const setData = (dataRow: Array<any[]>) => {
    data.value = dataRow.map(e => cerateRow({}, e))
}
const autoCalcValue = (cell:any,kk:number,row:any[], k:number)=>{
    return 'asda'
}
onMounted(() => {
    setData([
        [8, 20, null, null, "测试"]
            .concat([0, 0, 0, 1, 0, 0, 0, 0, 0, 0])
            .concat([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            .concat([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ])
})
</script>
<style scoped lang="less">
.aaaa {
    td:focus {
        border: 2px solid #1b4bc2;
        border-radius: 2px;
    }
}
</style>