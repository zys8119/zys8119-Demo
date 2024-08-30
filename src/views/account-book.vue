<template>
    <div class='aaaa w-100%'>
        <table class="w-100% m-x-auto b-1-0 b-t-0" border cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th class="p-15px b-0 b-l-1 b-t-1" colspan="2">
                        <hover>
                            <span>{{ yearStr }}年</span>
                            <template #hover="{setValue}">
                                <n-date-picker @blur="setValue(false)" @focus="setValue(true)" class="w-100px" placeholder="请选择年份" v-model:value="year" type="year" />
                            </template>
                        </hover>
                    </th>
                    <th class="p-15px b-0 b-l-1 b-t-1" rowspan="2">凭证号数</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" rowspan="2">对方科目</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" rowspan="2">摘要</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" colspan="10">收入金额</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" colspan="10">支出金额</th>
                    <th class="p-15px b-0 b-l-1 b-t-1" colspan="10">结余金额</th>
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
                <tr v-for="row,k in data" :key="k">
                    <td class="b-0 b-l-1 b-t-1 abs-r" v-for="cell,kk in row" :key="kk" :tabindex="k">
                        <hover :useKey="cell.useKey" :edit="cell.edit" v-model="cell.value" @change="cell.isUpdate = true">
                            <div class="p-15px h-10px of-auto" :class="{
                                'text-#f00':cell.isUpdate
                            }" v-bind="cell.props" :ref="editRef.bind(null,cell, row)">{{ cell.formatValue(cell.value) || cell.value }}</div>
                            <template #hover="{setValue}">
                                <n-select
                                    v-if="cell.type === 'select'"
                                    @blur="setValue(false)"
                                    @focus="setValue(true)"
                                    class="w-80px"
                                    value-format="MM"
                                    v-model:value="cell.value" 
                                    v-bind="cell.props"
                                    />
                                <n-input-number
                                    v-if="cell.type === 'input-number'"
                                    @blur="setValue(false)"
                                    @focus="setValue(true)"
                                    value-format="MM"
                                    v-model:value="cell.value" 
                                    v-bind="cell.props"
                                    />
                                <n-input
                                    v-if="cell.type === 'input'"
                                    @blur="setValue(false)"
                                    @focus="setValue(true)"
                                    value-format="MM"
                                    v-model:value="cell.value" 
                                    v-bind="cell.props"
                                    />
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
import {get, cloneDeep, merge} from "lodash"
const units = ref(["千","百","十","万","千","百","十","元","角","分"])
const year = ref(dayjs().toDate())
const yearStr = computed(()=> dayjs(year.value).format('YYYY'))
const getSelect = (config?:Record<any, any>)=>merge({
        type:"select",
    },config)
const keyMap = ref({
    0:getSelect({ 
        isClick:false,
        value:dayjs().format('MM'),
        props:{
            placeholder:"请选择月份", 
            options:new Array(12).fill(0).map((_,k)=>({
                label:k+1+'月',
                value:k+1,
            }))
        },
    }),
    1:getSelect({ 
        isClick:false,
        value:dayjs().format('DD'),
        props:{
            placeholder:"请选择日期", 
            options:new Array(31).fill(0).map((_,k)=>({
                label:k+1+'日',
                value:k+1,
            }))
        }
    }),
    2:{
        edit:true,
        value:'',
        props:{
            contenteditable:true
        }
    },
    3:{
        edit:true,
        value:'',
        props:{
            contenteditable:true
        }
    },
    4:{
        edit:true,
        value:'',
        props:{
            contenteditable:true
        }
    }
})
const cerateRow = ()=>{
    return new Array(35).fill({}).map((e,k)=>{
        const mapInfo = cloneDeep(get(keyMap.value, k, {
            useKey:true,
        }))
        return {
            type:get(mapInfo,'type', 'input-number'),
            value:get(mapInfo,'value', 0),
            useKey:get(mapInfo,'useKey', false),
            edit:get(mapInfo,'edit', false),
            year:yearStr.value,
            props:get(mapInfo,'props', {
                max:9,
                min:0,
                showButton:false,
            }),
            formatValue:get(mapInfo,'formatValue', (val:any)=> val)
        }
    })
}
const data = ref<any[]>([cerateRow()])
const add = ()=>{
    data.value.push(cerateRow())
}
const editRef = (cell, row, el:any)=>{
    if(cell.edit){
        useMutationObserver(el,(e)=>{
            cell.value = el.innerText
            cell.isUpdate = true
    },{
        characterData:true,
        childList:true,
        subtree:true
    })
    }
    
}

</script>
<style scoped lang="less">
.aaaa{
    td:focus{
        border: 2px solid #1b4bc2;
        border-radius: 2px;
    }
}
</style>