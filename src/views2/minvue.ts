export class shallowRef {
  _value: any;
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
export function ref(value) {
  return new shallowRef(value) as any;
}
let activeSub = null;
export function effect(fn) {
  activeSub = fn;
  fn();
  activeSub = null;
}
const renderHelper = (element, VNode, type, props, children) => {
  if (type === "text-node") {
    const innerText = typeof children === "function" ? children() : children;
    if (Array.isArray(innerText)) {
      element = VNode.parent.el;
      element.innerHTML = "";
      innerText.forEach((child) => {
        if (child.__v_isVNode) {
          child = VNodeForTsxHelper(child);
        }
        if (child.isVNode || child.__v_isVNode) {
          renderElement(element, child, VNode);
        } else {
          effect(renderHelper.bind(null, element, VNode, type, props, child));
        }
      });
    } else {
      element.textContent =
        children && children.isRef ? children.value : innerText;
    }
  } else if (children && children.isRef) {
    element.innerText = children.value;
  } else {
    const innerText = typeof children === "function" ? children() : children;
    if (Array.isArray(innerText)) {
      element.innerHTML = "";
      innerText.forEach((child) => {
        if (child.isVNode) {
          renderElement(element, child, VNode);
        } else {
          effect(renderHelper.bind(null, element, VNode, type, props, child));
        }
      });
    } else {
      element.innerText = innerText;
    }
  }
};
const VNodeRender = (type, props, children) => {
  return (element, VNode) => {
    renderHelper(element, VNode, type, props, children);
  };
};
export function h(type, props?, children?) {
  if (!props && !children) {
    children = type;
    type = "text-node";
    props = {};
  } else if (!children) {
    children = props;
    props = {};
  }
  return {
    type,
    props,
    children: Array.isArray(children) ? children : [children],
    render: VNodeRender(type, props, children),
    isVNode: true,
  } as any;
}

export function renderElement(el, VNode, parent = null) {
  const { type, props, children } = VNode;
  let element = document.createElement("div");
  try {
    switch (type) {
      case "text-node":
        element = document.createTextNode("") as any;
        break;
      default:
        element = document.createElement(type);
        break;
    }
  } catch (e) {
    element = parent?.el;
  }
  VNode.el = element;
  VNode.parent = parent;
  for (const key in props) {
    const _VNodeRef = props[key];
    if (key === "ref") {
      if (_VNodeRef.isRef) {
        _VNodeRef.value = element;
      } else {
        _VNodeRef?.(element);
      }
      continue;
    }
    const renderArrs = (bool, _value?) => {
      const value = _value ? _value : bool ? _VNodeRef.value : _VNodeRef;
      if (/^style$/.test(key)) {
        for (const styleKey in value) {
          if (styleKey.startsWith("--")) {
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
    };
    if (_VNodeRef.isRef) {
      effect(renderArrs.bind(null, true));
    } else {
      effect(() => {
        renderArrs(
          false,
          typeof _VNodeRef === "function" && !/^on[A-Z]+/.test(key)
            ? _VNodeRef()
            : _VNodeRef
        );
      });
    }
  }
  children.forEach((child) => {
    if (child && child.isVNode) {
      renderElement(element, child, VNode);
    } else {
      effect(VNode.render.bind(null, element, VNode));
    }
  });
  if (element !== parent?.el) {
    el.appendChild(element);
  }
}
export function render(el: HTMLElement, VNode) {
  if (typeof VNode === "function") {
    VNode = VNode();
  }
  el.innerHTML = "";
  renderElement(el, VNode);
}

const propsKsyMapForTsx = {
  className: "class",
};
function VNodeForTsxHelper(VNode: any) {
  if (VNode.isRef) {
    return h(VNode);
  }
  if (typeof VNode === "function") {
    VNode = VNode();
  }
  if (!VNode?.__v_isVNode) {
    return VNode;
  }
  const { type, props, children } = VNode;
  if (type?.toString?.() === "Symbol(v-txt)") {
    return h(children);
  }
  const _props = Object.fromEntries(
    Object.entries(props || {}).map(([key, value]) => [
      propsKsyMapForTsx[key] || key,
      value,
    ])
  );
  return h(
    type,
    _props,
    (Array.isArray(children) ? children : [children]).map((e) =>
      VNodeForTsxHelper(e)
    )
  );
}
export function createApp(el: HTMLElement, VNode) {
  effect(render.bind(null, el, VNodeForTsxHelper(VNode)));
}
