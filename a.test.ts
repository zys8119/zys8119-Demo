import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { bubbleSort, unique, flattenTree } from "./a.ts";

describe("bubbleSort", () => {
  it("空数组返回空数组", () => {
    assert.deepEqual(bubbleSort([]), []);
  });

  it("单个元素保持不变", () => {
    assert.deepEqual(bubbleSort([1]), [1]);
  });

  it("乱序数组按升序排序", () => {
    assert.deepEqual(bubbleSort([5, 3, 8, 1, 2]), [1, 2, 3, 5, 8]);
  });

  it("已经有序的数组保持不变", () => {
    assert.deepEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it("完全逆序的数组可以正确排序", () => {
    assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
  });

  it("包含重复元素", () => {
    assert.deepEqual(bubbleSort([3, 1, 2, 3, 1]), [1, 1, 2, 3, 3]);
  });

  it("包含负数和零", () => {
    assert.deepEqual(bubbleSort([0, -3, 5, -1, 2]), [-3, -1, 0, 2, 5]);
  });

  it("字符串按字典序排序", () => {
    assert.deepEqual(bubbleSort(["banana", "apple", "cherry"]), [
      "apple",
      "banana",
      "cherry",
    ]);
  });

  it("支持自定义比较函数（降序）", () => {
    assert.deepEqual(
      bubbleSort([5, 3, 8, 1, 2], (a, b) => b - a),
      [8, 5, 3, 2, 1],
    );
  });

  it("支持按对象属性排序", () => {
    const users = [
      { name: "Tom", age: 30 },
      { name: "Amy", age: 20 },
      { name: "Bob", age: 25 },
    ];
    const sorted = bubbleSort(users, (a, b) => a.age - b.age);
    assert.deepEqual(
      sorted.map((u) => u.name),
      ["Amy", "Bob", "Tom"],
    );
  });

  it("不修改原数组，并返回新数组", () => {
    const src = [3, 1, 2];
    const result = bubbleSort(src);
    assert.deepEqual(src, [3, 1, 2]);
    assert.notEqual(result, src);
  });

  it("是稳定排序：相等元素保持原有相对顺序", () => {
    const items = [
      { k: 1, n: "a" },
      { k: 0, n: "b" },
      { k: 1, n: "c" },
      { k: 0, n: "d" },
    ];
    const sorted = bubbleSort(items, (x, y) => x.k - y.k);
    assert.deepEqual(
      sorted.map((i) => i.n),
      ["b", "d", "a", "c"],
    );
  });
});

describe("unique", () => {
  it("空数组返回空数组", () => {
    assert.deepEqual(unique([]), []);
  });

  it("去除重复的基础类型并保持首次出现的顺序", () => {
    assert.deepEqual(unique([3, 1, 3, 2, 1]), [3, 1, 2]);
  });

  it("字符串去重", () => {
    assert.deepEqual(unique(["a", "b", "a", "c", "b"]), ["a", "b", "c"]);
  });

  it("没有重复时内容不变", () => {
    assert.deepEqual(unique([1, 2, 3]), [1, 2, 3]);
  });

  it("不修改原数组", () => {
    const src = [1, 1, 2];
    unique(src);
    assert.deepEqual(src, [1, 1, 2]);
  });

  it("对象按引用比较：内容相同但引用不同的对象不会被去重", () => {
    const a = { id: 1 };
    const b = { id: 1 };
    assert.equal(unique([a, b, a]).length, 2);
  });
});

describe("flattenTree", () => {
  const makeTree = () => [
    {
      id: 1,
      name: "A",
      children: [
        { id: 2, name: "A-1" },
        { id: 3, name: "A-2", children: [{ id: 4, name: "A-2-1" }] },
      ],
    },
    { id: 5, name: "B", children: [] },
  ];

  it("空数组返回空数组", () => {
    assert.deepEqual(flattenTree([]), []);
  });

  it("只有根节点（无 children）时 level 为 0，parentId 为 null", () => {
    assert.deepEqual(flattenTree([{ id: 1 }, { id: 2 }]), [
      { id: 1, level: 0, parentId: null },
      { id: 2, level: 0, parentId: null },
    ]);
  });

  it("多层嵌套按深度优先先序展开，并带上 level 和 parentId", () => {
    assert.deepEqual(flattenTree(makeTree()), [
      { id: 1, name: "A", level: 0, parentId: null },
      { id: 2, name: "A-1", level: 1, parentId: 1 },
      { id: 3, name: "A-2", level: 1, parentId: 1 },
      { id: 4, name: "A-2-1", level: 2, parentId: 3 },
      { id: 5, name: "B", level: 0, parentId: null },
    ]);
  });

  it("结果中不再包含 children 字段", () => {
    const result = flattenTree(makeTree());
    assert.ok(result.every((item) => !("children" in item)));
  });

  it("兄弟节点保持原有顺序", () => {
    const tree = [
      { id: "a", children: [{ id: "a1" }, { id: "a2" }, { id: "a3" }] },
    ];
    assert.deepEqual(
      flattenTree(tree).map((i) => i.id),
      ["a", "a1", "a2", "a3"],
    );
  });

  it("支持自定义 childrenKey", () => {
    const tree = [{ id: 1, kids: [{ id: 2 }] }];
    assert.deepEqual(flattenTree(tree, { childrenKey: "kids" }), [
      { id: 1, level: 0, parentId: null },
      { id: 2, level: 1, parentId: 1 },
    ]);
  });

  it("支持自定义 idKey", () => {
    const tree = [{ key: "root", children: [{ key: "leaf" }] }];
    assert.deepEqual(flattenTree(tree, { idKey: "key" }), [
      { key: "root", level: 0, parentId: null },
      { key: "leaf", level: 1, parentId: "root" },
    ]);
  });

  it("不修改原数据", () => {
    const tree = makeTree();
    const snapshot = JSON.stringify(tree);
    flattenTree(tree);
    assert.equal(JSON.stringify(tree), snapshot);
  });

  it("层级很深时不会栈溢出", () => {
    // 构造 20000 层的链式树，递归实现会栈溢出，迭代实现不会
    const depth = 20000;
    const root: any = { id: 0 };
    let cur = root;
    for (let i = 1; i < depth; i++) {
      const next: any = { id: i };
      cur.children = [next];
      cur = next;
    }
    const result = flattenTree([root]);
    assert.equal(result.length, depth);
    assert.equal(result[depth - 1].level, depth - 1);
    assert.equal(result[depth - 1].parentId, depth - 2);
  });
});
