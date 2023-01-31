import page from './page.js'
import {openUrl,parseUrl,formatParam} from './open-url.js'


export default {
	page,
	openUrl,
	parseUrl,
	install({ parentApp, $q }){
		// 导航（设置webViewPath）
		this.openUrl = (evt)=>{
			const {webViewPath} = $q.config
			evt = formatParam(evt, {root: webViewPath})
			openUrl(evt)
		}
		parentApp.config.globalProperties.$uni = this
	}
}