# kv-qui

基于Quasar重构的UniAPP UI解决方案。

国内可以访问gitee: https://gitee.com/kevinui/qui-demo 

# 安装配置

## 配置文件

在根目录新建配置文件 `qui.config.js` 文件名不要修改，组件内有引用。放在与`main.js`同一目录。

```javascript
// 引入插件，按需安装
import LocalStorage from '@/uni_modules/kv-qui/plugins/LocalStorage.js'
/*
* dayjs插件，用于日期选择、日历等插件
* 如果项目已经npm安装，可以改为自己安装的，防止重复引用
* 如果不使用日期相面组件或函数，可以不引入
*/
import dayjs from '@/uni_modules/kv-qui/plugins/dayjs/index.js';
import zhCn from '@/uni_modules/kv-qui/plugins/dayjs/locale/zh-cn';
dayjs.locale(zhCn);

// 配置内容
export default {
	// UI 
	config: {
		// 系统主题，不设置则获取
		dark: false,
	},
    
	// plugins 插件
	plugins: [
		LocalStorage,
	],
	// 第三方插件
	external: {
		dayjs
	}
}
```

## 安装UI

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

## 引用CSS

小程序，还需编辑App.vue，引入CSS样式。
*注意：设置lang="scss"，否则无法正常解析*

```css
/* <style lang="scss">注意语言类型 */
/* #ifdef MP */
@import './uni_modules/kv-qui/css/index.sass';
/* #endif */
```

## 页面示例

q-page [参数查看](https://github.com/ajaxjs/qui-demo/blob/main/.documents/2.%E6%A1%86%E6%9E%B6%E5%B8%83%E5%B1%80.md)

```vue
<template>
	<!--q-page页面，如果通过uni.$emit触发侧栏，可以不设置push属性-->
	<q-page v-model:push="push" title="页面标题">
        <view>Hello World!</view>
        
        <!--自定义页头-->
        <template #header>
            <q-header>
				<!--1.用双向绑定打开侧栏-->
                <q-btn color="primary" @click="push='left'">导航</q-btn>
                <view class="col">自定义标题</view>
				<!--2.用全局事件打开侧栏-->
                <q-btn color="primary" @click="drawerToggle('right')">导航</q-btn>
            </q-header>
		</template>

        <!--自定义页脚-->
        <template #footer>
            <q-footer>
				自定义页脚
            </q-footer>
		</template>
    </q-page>
	<!--左边侧栏-->
	<q-drawer side="left" class-name="bg-green-4" overlay persistent>
		overlay=带遮罩的
	    persistent=点击遮罩不关闭侧栏
	</q-drawer>
	<!--右边侧栏-->
	<q-drawer side="right" class-name="bg-green-4">
		不带遮罩的
	</q-drawer>
</template>

<script setup>
    import {ref} from 'vue';
    push = ref(false)
    
    function drawerToggle(val){
        uni.$emit('drawer-toggle', val)
    }
    // 还可以通过下面方式打开关闭侧栏
    // uni.$emit('drawer-open')
    // uni.$emit('drawer-close')
</script>
```





# 基础说明

1. [Layout 框架布局](https://github.com/ajaxjs/qui-demo/blob/main/.documents/2.%E6%A1%86%E6%9E%B6%E5%B8%83%E5%B1%80.md)
2. [Grid Gutter 网格间距](https://github.com/ajaxjs/qui-demo/blob/main/.documents/3.%E7%BD%91%E6%A0%BC%E9%97%B4%E8%B7%9D.md)
3. [Grid Row 布局网格](https://github.com/ajaxjs/qui-demo/blob/main/.documents/4.%E5%B8%83%E5%B1%80%E7%BD%91%E6%A0%BC.md)

持续更新中。。。

# 组件应用

1. [Avatar 头像](https://github.com/ajaxjs/qui-demo/blob/main/.documents/compontnes/Avatar.md)
2. Icon 图标
3. Image 图片
4. [Button 按扭](https://github.com/ajaxjs/qui-demo/blob/main/.documents/compontnes/Button.md)
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