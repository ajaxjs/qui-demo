# kv-qui 安装配置

在根目录新建配置文件 `qui.config.js` 文件名不要修改，组件内有引用。放在与`main.js`同一目录。

```javascript
// 引入插件，按需安装
import LocalStorage from '@/uni_modules/kv-qui/plugins/LocalStorage.js'
// 配置内容
export default {
	// UI 
	config: {
		// 系统主题，不设置则获取
		dark: false,
		// 默认 web-view 路径，$uni.openUrl({href:''})
		webViewPath: '/pages/index/broswer'
	},
	iconSet: {
		icon:'material-icons',
		field: {
			error: 'error',
			clear: 'cancel',
		}
	}, // icon set
	lang: 'zh-CN',
	// plugins 插件
	plugins: [
		LocalStorage,
	],
}
```

编辑`main.js`主文件，安装UI组件

```javascript
// 第一步：引入Qui、配置文件、图标文件(根据需求)
import Qui from '@/uni_modules/kv-qui/index.js'
import QuiConfig from './qui.config.js'
// 引入图标文件，在extras目录中有多个图标文件，根据需求引入
import '@/uni_modules/kv-qui/extras/material-icons/material-icons.css'

// 第二步：安装组件（在createApp函数中），大约在18行下面
app.use(Qui, QuiConfig)
```

# 使用说明

1. [框架布局](https://github.com/ajaxjs/qui-demo/blob/main/.documents/2.%E6%A1%86%E6%9E%B6%E5%B8%83%E5%B1%80.md)

持续更新中。。。