## 获取 router 中的参数

```javascript
import {useRouter} from 'next/router' // 获取用户输入的参数
const router = useRouter()
console.log(router);
```

## link 
<b>
⚠️ ·： 这边引入的是一个 component，所以说不惜要加括号
</b>
```javascript 
import Link from 'next/link'
<Link href="/about">about</Link>
```