import {IButtonMenu, IModuleConf,IDomEditor,SlateNode,SlateElement} from "@wangeditor/editor"
import { h, VNode } from 'snabbdom'
import { h as vh } from 'vue'
export const keyName = 'editorModule'
class MyMenu implements IButtonMenu{
    readonly title: string;
    readonly tag: string;
    constructor() {
        this.title = '自定义插件'
        this.tag = 'button'
    }
    getValue(editor:IDomEditor) {
        return '<div></div> '
    }
    isActive(editor:IDomEditor) {
        return false // or true
    }
    isDisabled(editor:IDomEditor) {
        return false // or true
    }
    exec(editor:IDomEditor, value:any) {
        const id = `${keyName}_${Date.now().toString(16)}`
        editor.insertNode({
            type: 'attachment',
            elId:id,
            children: [{ text: '' }]  // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
        } as any)
        console.log(7777)
        setTimeout(()=>{
            createApp(defineComponent({
                setup(){
                    console.log(333)
                },
                render(){
                    return vh('div',{
                        onClick(){
                            console.log(777)
                        },
                        class:"text-#f00"
                    },"asdad")
                }
            })).mount(`#${id}`)
            console.log(888)
        })
    }
}
const editorModule: Partial<IModuleConf> = {
    menus:[
        {
            key:keyName,
            factory:()=>  new MyMenu()
        }
    ],
    renderElems:[
        {
            type:'attachment',
            renderElem:(s:any)=>{
                console.log(s)
                return h('div',{
                    attrs:{
                        id:s.elId
                    },
                },'')
            }
        }
    ]
}

export default editorModule
