# LocalStorage 安装

打开配置文件qui.config.js

```javascript
// 引入LocalStorage
import LocalStorage from '@/uni_modules/kv-qui/plugins/LocalStorage.js'
// 加入到 plugins 数组中
{
    //....
    plugins: [
		LocalStorage,
	]
}
```

# LocalStorage 使用

默认挂载在this.$q.localStorage中。

```vue
<script setup>
    import { getCurrentInstance,inject } from 'vue'
    import {quasarKey} from '@/uni_modules/kv-qui/utils/private/symbols.js'
    // 方法一：Vue3语法可以通过getCurrentInstance获得$q对象
    const {proxy:{$q}} = getCurrentInstance()
    // 方式二：也可以通过inject获取$q对象，二选一
    const $q = inject(quasarKey)
    
    // 实例上的，第一个字母为小写
    $q.localStorage.set('test',123)
</script>
<script>
    // Vue2语法，可以通过this读取
    export default {
        mounted(){
            this.$q.localStorage.set('test',123)
        }
    }
</script>
```

# LocalStorage 方法

| 方法                            | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| has(key)=>Boolean               | 检查存储项目是否存在                                         |
| getLength () => Number          | 获取条目的存储数量                                           |
| getItem (key)=>                 | 读取值                                                       |
| getIndex (index) => Number,null | 根据索引下标取值                                             |
| getKey (index) => String,null   | 获取特定下标的key值                                          |
| getAll () => Object             | 检索存储中的所有项目                                         |
| getAllKeys () => Array          | 返回所有key                                                  |
| set(key, value) => void 0       | 存诸，支持Date \| RegExp \| Number \| Boolean \| Function \| Object \| Array \| String \| null - required! |
| remove (key) => void 0          | 根据key移除存储项目                                          |
| clear () => void 0              | 删除所有存储项目                                             |
| isEmpty () => Boolean           | 是否为空，没存任何项目                                       |

