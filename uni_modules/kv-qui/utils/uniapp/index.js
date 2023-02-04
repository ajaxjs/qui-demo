import page from './page.js'
import alert from './alert.js'
import toast from './toast.js'
import actions from './action-sheet.js'
import {openUrl} from './open-url.js'

export default {
	page,
	alert,
	toast,
	actions,
	openUrl,
	install({ parentApp, $q }){
		parentApp.config.globalProperties.$uni = this
	}
}