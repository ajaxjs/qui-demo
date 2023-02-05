# kv-qui

基于Quasar重构的UniAPP UI解决方案。

国内可以访问gitee: https://gitee.com/kevinui/qui-demo 

# 安装配置

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

# 基础说明

1. [Layout 框架布局](https://github.com/ajaxjs/qui-demo/blob/main/.documents/2.%E6%A1%86%E6%9E%B6%E5%B8%83%E5%B1%80.md)
2. Grid Gutter 网格间距
3. Grid Row 布局网格

持续更新中。。。

# 组件应用

1. Avatar 头像
2. Icon 图标
3. Image 图片
4. [Button 按扭](https://github.com/ajaxjs/qui-demo/blob/main/.documents/components/Button.md)
5. Badge 徽标
6. Chip 碎片
7. Card 卡片
8. List & Item 列表
9. Links 连接
10. Linar Progress 进度条
11. Input & Field 输入框
12. Form 表单
13. Checkbox & Radio 单复选框
14. Date & Picker 选择器
15. Tabs 选项卡
16. Swiper 滑动切换



# 插件应用

1. [UniApp 界面封装](https://github.com/ajaxjs/qui-demo/blob/main/.documents/plugs/UniApp.md)
2. [LocalStorage 缓存](https://github.com/ajaxjs/qui-demo/blob/main/.documents/plugs/LocalStorage.md)