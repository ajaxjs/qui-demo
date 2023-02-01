import page from './page.js'
import alert from './alert.js'
import toast from './toast.js'
import actions from './action-sheet.js'
import {openUrl,parseUrl,formatParam} from './open-url.js'


export default {
	page,
	alert,
	toast,
	actions,
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