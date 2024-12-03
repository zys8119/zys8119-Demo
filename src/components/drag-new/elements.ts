const elementsModel: any = import.meta.glob('./elements/**.tsx', {
    eager: true,
    import: 'default'
});
const importElements = Object.keys(elementsModel).map((v) => {
    return {
        ...elementsModel[v],
        elementYype: v.replace(/^\.\/elements\/|\.tsx$/g, '')
    };
});
const groupElements = importElements.reduce((a, b) => {
    a[b.group] = a[b.group] || [];
    a[b.group].push(b);
    return a;
}, {});
export const elementsTypesMap = importElements.reduce((a, b) => {
    a[b.elementYype] = b;
    return a;
}, {});
const elements = shallowRef<any>(
    Object.entries(groupElements).map(([name, children]) => ({
        name,
        children
    }))
);
export const useElements = () => {
    return elements;
};
export default useElements;

const _Symbol = Symbol('drag-new-bus');
export const bus = useEventBus(_Symbol);