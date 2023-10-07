# 考题大纲

[//]: # (-   ✅ ☑️)

| 是否完成Demo | 是否已考试 | 考题描述                                                      |
|----------|-------|-----------------------------------------------------------|
|     ☑️     |   ☑️   | 1. 设计一个白屏监测方案，及具体的代码实现                                    |
|     ☑️     |   ☑️   | 2. 在线解决项目隐藏bug                                            |
|     ✅     |   ☑️   | 3. 纯css实现9宫格grid布局，并鼠标进入某个格子后，该格子占比调整2:1                  |
|     ✅     |   ☑️   | 4. vue实现刷新排序动画, 不能使用相关库                                   |
|     ✅     |   ☑️   | 5. 怎样使 const [a, b] = {a:1, b:2}  ，app自行出题                |
|     ✅     |   ☑️   | 6. 利用位运算实现权限组合 ，写出对应的权限操作 （组合权限、删除权限、判断权限、添加权限、保留指定权限）的例子 |
|     ✅     |   ☑️   | 7. 使用代理拦截动态属性                                             |
|     ✅     |   ☑️   | 8. console.log(++[[]][+[]] + [+[]]) 输出多少？并按步骤解释其运算过程      |

### 7.使用代理拦截动态属性

```typescript
const r1 = add[1][2][3] + 4 // 10
const r2 = add[10][20] + 30 // 60
const r3 = add[100][200][300] + 400 // 1000
```