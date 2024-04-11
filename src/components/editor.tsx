import {
    IButtonMenu,
    IDropPanelMenu,
    ISelectMenu,
    IModalMenu,
    IModuleConf,
    IDomEditor,
    SlateElement,
    SlateNode,
    DomEditor
} from '@wangeditor/editor';
import { h } from 'snabbdom';
import { merge } from 'lodash';
const getIdSelector = (idSelector: string) => `#${idSelector}`;
class MyMenu implements IButtonMenu, ISelectMenu, IModalMenu, IDropPanelMenu {
    readonly title: string;
    readonly tag: string;
    readonly iconSvg?: string;
    readonly showModal: boolean;
    readonly showDropPanel: boolean;
    readonly modalWidth: number;
    constructor(private config: UseEditorModuleType) {
        this.title = this.config.title;
        this.tag = this.config.tag;
        this.iconSvg = this.config.iconSvg;
        this.showModal = this.config.showModal;
        this.modalWidth = this.config.modalWidth;
        this.showDropPanel = this.config.showDropPanel;
    }
    getModalPositionNode(): SlateNode | null {
        return null;
    }
    // 定义 modal 内部的 DOM Element
    getModalContentElem(editor: IDomEditor) {
        // TS 语法
        // PS：也可以把 $content 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
        return this.config?.getModalContentElem?.(editor);
    }
    // 定义 modal 内部的 DOM Element
    getPanelContentElem(editor: IDomEditor) {
        // TS 语法
        // PS：也可以把 $content 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
        return this.config?.getModalContentElem?.(editor);
    }
    // 下拉框的选项
    getOptions(editor: IDomEditor) {
        // TS 语法
        return this.config?.getOptions?.(editor) || [];
    }
    getValue(editor: IDomEditor) {
        return this.config?.getValue?.(editor) || '';
    }
    isActive() {
        return false; // or true
    }
    isDisabled() {
        return false; // or true
    }
    exec(editor: IDomEditor, value: string | boolean) {
        this.config?.change?.(editor, value);
        if (!this.config.isRenderExec) {
            return;
        }
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
    // 是否渲染模版，即是否渲染exec组件执行，默认渲染
    isRenderExec: boolean;
    // 插件标签
    tag: string | 'button' | 'select';
    // 插件图标
    iconSvg: string;
    // 插件热键
    hotkey: string;
    // 插件始终启用
    alwaysEnable: boolean;
    // 插件宽度
    width: string;
    modalWidth: number;
    showModal: boolean;
    showDropPanel: boolean;
    getModalContentElem(editor: IDomEditor): Element;
    getModalContentElem(editor: IDomEditor): Element;
    getOptions(editor: IDomEditor): Array<{
        [key: string]: any;
        value: any;
        text: any;
        selected?: boolean;
        styleForRenderMenuList?: Record<any, any>;
    }>;
    getValue(editor: IDomEditor): any;
    // 建议用于下拉选择控件回调
    change(editor: IDomEditor, value: string | boolean): any;
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
            tag: 'button',
            isRenderExec: true,
            showModal: false,
            showDropPanel: false
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
        renderElems: config.isRenderExec
            ? [
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
                                    // display: 'inline-block',
                                    marginLeft: '3px',
                                    marginRight: '3px',
                                    width: selectorRect.width
                                        ? selectorRect.width + 'px'
                                        : 'auto',
                                    height: selectorRect.height
                                        ? selectorRect.height + 'px'
                                        : 'auto',
                                    overflow: 'hidden',
                                    position: 'relative'
                                    /* 其他... */
                                } // style ，驼峰式写法
                            },
                            ''
                        );
                    }
                }
            ]
            : [],
        elemsToHtml: config.isRenderExec
            ? [
                {
                    type: config.type,
                    elemToHtml(
                        elem: any,
                        childrenHtml: string,
                        editor
                    ): string {
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
                        const rect =
                            document
                                .querySelector(selector)
                                ?.getBoundingClientRect?.() || {};
                        rectMap.set(selector, rect);

                        return `<span
                    data-w-e-type="${config.type}"
                    data-w-e-is-void
                    data-w-e-is-inline
                    id="${elem.elId}"
                ></span>`;
                    }
                }
            ]
            : [],
        parseElemsHtml: config.isRenderExec
            ? [
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
            ]
            : [],
        editorPlugin: config.isRenderExec
            ? function <T extends IDomEditor>(editor: IDomEditor): T {
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
            : (editor) => editor
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
