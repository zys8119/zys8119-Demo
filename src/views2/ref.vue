<template>
    <div class='ref'></div>
</template>
<script setup lang="ts">
class shallowRef {
    _value: any
    constructor(value) {
        this._value = value;
    }
    subs = new Set();
    isRef = true;
    get value() {
        if (activeSub) {
            this.subs.add(activeSub);
        }
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
        this.subs.forEach((sub: any) => {
            sub();
        });
    }
}
function ref(value) {
    return new shallowRef(value);
}
let activeSub = null;
function effect(fn) {
    activeSub = fn;
    fn();
    activeSub = null;
}
const renderHelper = (element, type, props, children) => {
    if (children && children.isRef) {
        element.innerText = children.value;
    } else {
        const innerText = typeof children === 'function' ? children() : children;
        if (Array.isArray(innerText)) {
            element.innerHTML = '';
            innerText.forEach((child) => {
                if (child.isVNode) {
                    renderElement(element, child)
                } else {
                    effect(renderHelper.bind(null, element, type, props, child));
                }
            })
        } else {
            element.innerText = innerText;
        }
    }
}
function h(type, props, children) {
    return {
        type,
        props,
        children: Array.isArray(children) ? children : [children],
        render: (element) => {
            renderHelper(element, type, props, children);
        },
        isVNode: true,
    }
}
const aa = ref(1222)
const color = ref('red')
const a = ref(new Array(Math.ceil(Math.random() * 10)).fill(0));
setInterval(() => {
    aa.value = Math.random();
    color.value = Math.random() > 0.5 ? 'red' : 'blue';
    // a.value = new Array(Math.ceil(Math.random() * 10)).fill(0)
}, 1000);
const cc = ref(null);
effect(() => {
    console.log(cc.value);
});
const el = useCurrentElement<HTMLElement>();
function renderElement(el, VNode) {
    const { type, props, children } = VNode;
    const element = document.createElement(type);
    VNode.el = element;
    for (const key in props) {
        const _VNodeRef = props[key];
        if (key === 'ref') {
            if (_VNodeRef.isRef) {
                _VNodeRef.value = element;
            } else {
                _VNodeRef?.(element)
            }
            continue;
        }
        const renderArrs = (bool, _value?) => {
            const value = _value ? _value : bool ? _VNodeRef.value : _VNodeRef;
            if (/^style$/.test(key)) {
                for (const styleKey in value) {
                    if (styleKey.startsWith('--')) {
                        element.style.setProperty(styleKey, value[styleKey]);
                    } else {
                        element.style[styleKey] = value[styleKey];
                    }
                }
            } else if (/^on[A-Z]+/.test(key)) {
                const eventName = key.slice(2).toLowerCase();
                element.addEventListener(eventName, value);
            } else {
                element.setAttribute(key, value);
            }
        }
        if (_VNodeRef.isRef) {
            effect(renderArrs.bind(null, true));
        } else {
            effect(() => {
                renderArrs(false, typeof _VNodeRef === 'function' && !/^on[A-Z]+/.test(key) ? _VNodeRef() : _VNodeRef);
            })
        }
    }
    children.forEach((child) => {
        if (child && child.isVNode) {
            renderElement(element, child);
        } else {
            effect(VNode.render.bind(null, element));
        }
    });
    el.appendChild(element);
}
function render() {
    el.value.innerHTML = "";
    renderElement(el.value, h('div', {
        class: 'w-500px h-500px bg-red-500',
        onClick: () => {
            console.log('click');
        }
    }, [
        h('div', {
            class: 'w-100px h-100px bg-blue-500',
            onClick: () => {
                console.log('click');
            }
        }, 'child1'),
        h('span', {
            class: () => `w-100px h-100px bg-green-500 text-$color`,
            style: () => ({
                '--color': color.value,
            }),
            onClick: () => {
                console.log('click');
            }
        }, 'child2'),
        h('div', {
            class: 'w-100px h-100px bg-green-500',
            onClick: () => {
                console.log('click');
            },
            ref: el => {
                console.log(el)
            }
        }, h('span', {
            class: () => 'w-100px h-100px bg-green-500',
            onClick: (e: MouseEvent) => {
                e.stopPropagation();
                console.log('click');
            },
        }, () => `aa.value:${aa.value}`)),
        h('div', {}, () => a.value.map((_, k) => h('div', {
            aa: k === 0 ? (() => aa.value) : 'asda'
        }, `div-${k}`))),
        h('div', { class: 'bg-amber' }, null)
    ]))
}
onMounted(() => {
    effect(render);
})
</script>
<style scoped lang="less">
.ref {}
</style>