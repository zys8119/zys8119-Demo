// store
```typescript
interface Store {
    getItem: (key:string) => any
}
export const store:Store = {
    getItem(key:string){
        return localStorage.getItem(key)
    }
}
```
//getUsers
```typescript
import {store} from './store'
export function getUsers(key){
    const data = store.getItem(key)
    if(data){
        return JSON.parse(data)
    }else {
        return []
    }
}
```
// main

```typescript
import {getUsers} from './getUsers'
const users = getUsers('users')
console.log(users)
```
