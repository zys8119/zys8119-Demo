import {IButtonMenu, IModuleConf,IDomEditor,SlateNode,SlateElement} from "@wangeditor/editor"
import {Key, VNodeData} from "snabbdom/build/vnode";
export const keyName = 'editorModule'
class MyMenu implements IButtonMenu{
    readonly title: string;
    readonly tag: string;
    constructor() {
        this.title = '自定义插件'
        this.tag = 'button'
    }
    getValue(editor:IDomEditor) {
        return ' <div>asda</div> '
    }
    isActive(editor:IDomEditor) {
        return false // or true
    }
    isDisabled(editor:IDomEditor) {
        return false // or true
    }
    exec(editor:IDomEditor, value:any) {
        // const id = `${keyName}_${Date.now().toString(16)}`
        // createApp(defineComponent({
        //     setup(){
        //         console.log(333)
        //     }
        // })).mount(`#${id}`)
        console.log(SlateNode)
        editor.insertNode({
            type: 'attachment',
            children: [{ text: '' }]  // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
        } as any)
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
            renderElem:()=>{
                const el = document.createElement('div')
                el.innerHTML = 'asdasd'
                // 生成 HTML 代码
                const html = `<span
                    data-w-e-type="attachment"
                    data-w-e-is-void
                    data-w-e-is-inline
                >fileName</span>`
                return {
                    sel:undefined,
                    data: {
                        attrs:{
                            id:"asdas"
                        },
                        on: {
                            click: () => {
                                console.log(111)
                            }
                        }
                    },
                    children:[html],
                    elm:undefined,
                    text:html,
                    key:'asadsad',
                }
            }
        }
    ]
}

export default editorModule
