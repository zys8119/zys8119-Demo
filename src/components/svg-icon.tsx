import { Suspense } from "vue";
import { NIcon } from "naive-ui";

export default defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
    },
    iconProps: {
      type: Object,
      default: () => ({}),
    },
    notFill: {
      type: Boolean,
      default: false,
    },
  },
  setup({ name, iconProps, notFill }, { attrs }) {
    return () =>
      h(
        Suspense,
        h(
          defineComponent({
            async setup() {
              try {
                const icon = (await import(`@/src/assets/icons/${name}.svg?raw`))
                  .default;
                return () =>
                  h(NIcon, {
                    innerHTML: icon,
                    ...attrs,
                    ...iconProps,
                    class: {
                      flex: true,
                      "justify-center": true,
                      "items-center": true,
                      "svg-icon-fill": !notFill,
                      ...(typeof attrs.class === "string"
                        ? { [attrs.class]: true }
                        : (attrs.class as any)),
                    },
                  });
              } catch (e) {
                return () => void 0;
              }
            },
          }),
        ),
      );
  },
});
