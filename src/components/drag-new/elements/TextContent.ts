export const useTextContent = (extendProps: Record<string, any> = {}) => {
  return defineComponent(
    (props) => {
      return () =>
        h(
          defineAsyncComponent(() => import("./TextContentRender.vue")),
          {
            ...props,
            ...extendProps,
          }
        );
    },
    {
      props: {
        data: {
          type: Object,
        },
        config: {
          type: Object,
        },
      },
    }
  );
};
export default useTextContent;
