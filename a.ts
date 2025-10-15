export function useCallbacks<T>() {
  let handlers: T[] = [];

  function add(handler: T): () => void {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1) handlers.splice(i, 1);
    };
  }

  function reset() {
    handlers = [];
  }

  return {
    add,
    list: () => handlers.slice(),
    reset,
  };
}
const aa = useCallbacks<() => void>();
const a = {
  beforeEach: aa.add,
};
const oa = a.beforeEach;
a.beforeEach = function () {
  oa.apply(this, arguments);
};
a.beforeEach(() => {
  console.log(333);
});
console.log("===================");
console.log(aa.list()?.[0]?.toString?.());
