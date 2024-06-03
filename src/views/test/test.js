import { openBlock, createElementBlock, ref, createTextVNode, toDisplayString, createVNode } from "vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "bb" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, " askdaksdl ");
}
const bb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-37e1fe3b"]]);
const _hoisted_1 = { class: "test" };
const _sfc_main = {
  __name: "test",
  setup(__props) {
    const aa = ref(121);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createTextVNode(" asdasdasdas" + toDisplayString(aa.value) + " ", 1),
        createVNode(bb),
        createTextVNode(" 阿四节课打算尽快多久啊剪刀手 ")
      ]);
    };
  }
};
const VIRTUALMODEL_TEST = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66021381"]]);
var test_default = VIRTUALMODEL_TEST;
export {
  test_default as default
};
