# zys8119-Demo
测试案例


相关资源

[爱给3d资源](https://www.aigei.com/)

## 防止 debugger  调试

```javascript
(function _debuggerInit(){
  // Check if the DevTools are open by measuring the time taken to execute a function
  const start = Date.now();
  new Function(`debugger;`)()
  const end = Date.now()
  if(Date.now() - start > 100){
    location.replace('about:blank')
  }
  setTimeout(()=>{
    _debuggerInit()
  })
})()
```
