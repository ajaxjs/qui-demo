import LocalStorage from '@/uni_modules/kv-qui/plugins/LocalStorage.js'
/*
* dayjs插件，用于日期选择、日历等插件
* 如果项目已经npm安装，可以改为自己安装的，防止重复引用
*/
import dayjs from '@/uni_modules/kv-qui/plugins/dayjs/index.js';
import zhCn from '@/uni_modules/kv-qui/plugins/dayjs/locale/zh-cn';
dayjs.locale(zhCn);

export default {
	// UI 
	config: {
		// web-view 路径
		webViewPath: '/pages/index/broswer'
	},
	// Quasar 插件
	plugins: [
		LocalStorage,
	],
	// 第三方插件
	external: {
		dayjs
	}
}