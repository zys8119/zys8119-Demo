<template>
    <div class="aaaa abs-center w-80% h-80% of-auto">
        <hot-table v-bind="config" ref="hotRef"></hot-table>
    </div>
</template>
<script setup lang="ts">
import { HotTable } from '@handsontable/vue3';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';
import 'handsontable/styles/ht-theme-horizon.min.css';
import { HyperFormula, FunctionPlugin, FunctionArgumentType, ImplementedFunctions } from 'hyperformula';
import { registerLanguageDictionary, zhCN } from 'handsontable/i18n';
import { TextEditor } from 'handsontable/editors/textEditor';
import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';
registerAllModules();
registerLanguageDictionary(zhCN)
const licenseKey = 'gpl-v3'
class MyCustomPlugin extends FunctionPlugin {
    static implementedFunctions: ImplementedFunctions = {
        GREET: {
            method: 'GREET',
            parameters: [
                { argumentType: FunctionArgumentType.ANY, },
            ],
            // 如果需要多参数，使用repeatLastArgs
            repeatLastArgs: 1
        },
    };
    constructor(instance) {
        super(instance);
    }
    GREET(ast, state) {
        return this.runFunction(
            ast.args,
            state,
            this.metadata('GREET'),
            (...firstName) => {
                return `👋 Hello, ${firstName}!`;
            }
        );
    }
}
HyperFormula.registerFunctionPlugin(MyCustomPlugin, {
    enGB: Object.fromEntries(Object.entries(MyCustomPlugin.implementedFunctions).map(([key]: any) => [key, key]))
});

const data = ref([
    new Array(50).fill(''),
    ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
    ['2016', 10, 11, 12, 13],
    ['2017', 20, 11, 14, 13],
    ['2018', 30, 15, 12, "=sum(B5:D5)"],
    ['2018', 30, 15, 12, "=GREET(E5,E3)"]
]);
class CustomEditor extends TextEditor {
    createElements() {
        super.createElements();

        this.TEXTAREA = document.createElement('input');
        this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
        // this.TEXTAREA.setAttribute('data-hot-input', "true");
        this.textareaStyle = this.TEXTAREA.style;
        this.TEXTAREA_PARENT.innerText = '';
        this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    }
}
const style = ref({
    '3-0': {
        background: '#f00',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20 + 'px',
    },
})
const config = ref({
    language: zhCN.languageCode,
    mergeCells: {
        cells: [{ row: 1, col: 1, rowspan: 3, colspan: 2 }]
    },
    formulas: {
        licenseKey,
        engine: HyperFormula.buildEmpty({
            language: 'enGB',
            licenseKey
        }),
    },
    matchWholeCell: true,
    licenseKey,
    data,
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    manualColumnResize: true,
    manualRowResize: true,
    dropdownMenu: true,
    manualRowMove: true,
    autofill: true,
    columns: new Array(50).fill({
        editor: CustomEditor,
        renderer(instance, td, row, col, prop, value) {
            td?.__vue_app__?.unmount?.()
            createApp(() => h('div', {
                style: style.value[row + '-' + col],
            }, value)).mount(td)
            return td
        }
    }),
})
const hotRef = ref()
watchEffect(() => {
    console.log(style.value)
})
onMounted(() => {
    hotRef.value.hotInstance.addHook('afterSelection', () => {
        hotRef.value.hotInstance.getSelectedRange().forEach((item) => {
            const row = Math.min(item.to.row, item.from.row)
            const col = Math.min(item.to.col, item.from.col)
            const row_abs = Math.abs(item.to.row - item.from.row)
            const col_abs = Math.abs(item.to.col - item.from.col)
            for (let i = 0; i <= row_abs; i++) {
                for (let j = 0; j <= col_abs; j++) {
                    style.value[(row + i) + '-' + (col + j)] = {
                        background: '#f00',
                        color: '#fff',
                    }
                }
            }
        })
    });
    hotRef.value.hotInstance.selectAll()
})

</script>
<style scoped lang="less">
.xlsx {}
</style>