import './css/index.sass'

import { quasarKey } from './utils/private/symbols.js'
//import Body from './body.js'
import IconSet from './icon-set.js'
import Dark from './plugins/Dark.js'
import Platform from './plugins/Platform.js'
import ClosePopup from './plugins/ClosePopup.js'

import * as utils from './utils.js'

// uni-app 封装
import uniApi from './utils/uniapp/index.js'
const colors = {
	"red":"#f44336",
	"pink":"#e91e63",
	"purple":"#9c27b0",
	"deep-purple":"#673ab7",
	"indigo":"#3f51b5",
	"blue":"#2196f3",
	"light-blue":"#03a9f4",
	"cyan":"#00bcd4",
	"teal":"#009688",
	"green":"#4caf50",
	"light-green":"#8bc34a",
	"lime":"#cddc39",
	"yellow":"#ffeb3b",
	"amber":"#ffc107",
	"orange":"#ff9800",
	"deep-orange":"#ff5722",
	"brown":"#795548",
	"grey":"#9e9e9e",
	"blue-grey":"#607d8b"
}
// 默认安装
const autoInstalledPlugins = [
	Platform,
	ClosePopup,
	//Body,
	Dark,
	IconSet,
]

// 指量安装插件
function installPlugins (pluginOpts, pluginList) {
  pluginList.forEach(Plugin => {
    Plugin.install(pluginOpts)
    Plugin.__installed = true
  })
}

const install = (app, uiOpts = {}) => {
		const $q = { utils, version: '2.10.1', colors }
		// 配置
		$q.config = Object.assign(uiOpts.config || {},{headHeight: 44, footHeight: 50})
		// 安装$q
		app.config.globalProperties.$q = $q
		
		app.provide(quasarKey, $q)
		
		const pluginOpts = {
			parentApp: app,
			$q,
			lang: uiOpts.lang,
			iconSet: uiOpts.iconSet,
		}
		// 安装默认组件
		installPlugins(pluginOpts, autoInstalledPlugins)
		// 安装导入组件
		uiOpts.plugins !== void 0 && installPlugins(pluginOpts, uiOpts.plugins)
		
		
		// 安装$uni
		//app.config.globalProperties.$uni = uniApi
		uniApi.install(pluginOpts)
	}

export default {
	install,
}