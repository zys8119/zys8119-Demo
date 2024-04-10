import {
    IButtonMenu,
    IModuleConf,
    IDomEditor,
    SlateElement,
    DomEditor
} from '@wangeditor/editor';
import { h } from 'snabbdom';
import { merge } from 'lodash';
const getIdSelector = (idSelector: string) => `#${idSelector}`;
class MyMenu implements IButtonMenu {
    readonly title: string;
    readonly tag: string;
    readonly iconSvg?: string;
    constructor(private config: UseEditorModuleType) {
        this.title = this.config.title;
        this.tag = this.config.tag;
    }
    getValue() {
        return '';
    }
    isActive() {
        return false; // or true
    }
    isDisabled() {
        return false; // or true
    }
    exec(editor: IDomEditor) {
        const id = `${this.config.type}_${Date.now().toString(16)}`;
        editor.insertNode({
            type: this.config.type,
            elId: id,
            children: [{ text: '' }] // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
        } as any);
        requestAnimationFrame(async () => {
            await this.config.exec({
                selector: getIdSelector(id),
                editor,
                config: this.config
            });
        });
    }
}

type UseEditorModuleType = {
    // 组件执行
    exec(data: {
        selector: string;
        editor: IDomEditor;
        config: UseEditorModuleType;
    }): void | Promise<void>;
    // 插件类型
    type: string;
    // 插件标题
    title: string;
    // 插件标签
    tag: string;
    // 插件图标
    iconSvg: string;
    // 插件热键
    hotkey: string;
    // 插件始终启用
    alwaysEnable: string;
    // 插件宽度
    width: string;
};
export const useEditorModule = function (
    options: Partial<UseEditorModuleType> = {}
): Partial<IModuleConf> {
    const config = merge(
        {
            exec() {
                void 0;
            },
            type: 'customEditorModule',
            title: '自定义插件',
            tag: 'button'
        } as Partial<UseEditorModuleType>,
        options
    ) as UseEditorModuleType;
    const rectMap = new Map<any, any>();
    return {
        menus: [
            {
                key: config.type,
                factory: () => new MyMenu(config)
            }
        ],
        renderElems: [
            {
                type: config.type,
                renderElem: (s: any) => {
                    const selector = getIdSelector(s.elId);
                    const selectorRect = rectMap.get(selector) || {};
                    return h(
                        'span',
                        {
                            attrs: {
                                id: s.elId
                            },
                            props: { contentEditable: false }, // HTML 属性，驼峰式写法
                            style: {
                                display: 'inline-block',
                                marginLeft: '3px',
                                marginRight: '3px',
                                width: `${selectorRect.width}px`,
                                height: `${selectorRect.height}px`
                                /* 其他... */
                            } // style ，驼峰式写法
                        },
                        ''
                    );
                }
            }
        ],
        elemsToHtml: [
            {
                type: config.type,
                elemToHtml(elem: any, childrenHtml: string, editor): string {
                    // TS 语法
                    // 获取附件元素的数据
                    // 生成 HTML 代码
                    const selector = getIdSelector(elem.elId);
                    requestAnimationFrame(async () => {
                        await config.exec({
                            selector,
                            editor: editor as IDomEditor,
                            config
                        });
                        const rect =
                            document
                                .querySelector(selector)
                                ?.getBoundingClientRect?.() || {};
                        rectMap.set(selector, rect);
                    });

                    return `<span
                    data-w-e-type="${config.type}"
                    data-w-e-is-void
                    data-w-e-is-inline
                    id="${elem.elId}"
                ></span>`;
                }
            }
        ],
        parseElemsHtml: [
            {
                selector: `span[data-w-e-type="${config.type}"]`, // CSS 选择器，匹配特定的 HTML 标签
                parseElemHtml(
                    domElem: Element,
                    children: any,
                    editor: IDomEditor
                ): SlateElement {
                    // TS 语法
                    // 生成“附件”元素（按照此前约定的数据结构）
                    const myResume = {
                        type: config.type,
                        elId: domElem.id,
                        children: [{ text: '' }] // void node 必须有 children ，其中有一个空字符串，重要！！！
                    };
                    requestAnimationFrame(async () => {
                        await config.exec({
                            selector: getIdSelector(domElem.id),
                            editor,
                            config
                        });
                    });
                    return myResume;
                }
            }
        ],
        editorPlugin: function <T extends IDomEditor>(editor: IDomEditor): T {
            // TS 语法
            const { isInline, isVoid } = editor;
            const newEditor = editor;
            newEditor.isInline = (elem) => {
                const type = DomEditor.getNodeType(elem);
                if (type === config.type) return true; // 针对 type: attachment ，设置为 inline
                return isInline(elem);
            };
            newEditor.isVoid = (elem) => {
                const type = DomEditor.getNodeType(elem);
                if (type === config.type) return true; // 针对 type: attachment ，设置为 void
                return isVoid(elem);
            };
            return newEditor as any; // 返回 newEditor ，重要！！！
        }
    };
};

/**
 * @使用方式
 Boot.registerModule(useEditorModule({
 title:"填空",
 exec({selector}){
 (document.querySelector(selector) as any)?.__vue_app__?.unmount?.()
 createApp(defineAsyncComponent({
 loader:()=> import('@/src/components/card.vue')
 })).mount(selector)
 }
 }))
 */
export default useEditorModule;
