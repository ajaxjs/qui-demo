import page from './utils/uniapp/page.js'
import alert from './utils/uniapp/alert.js'
import toast from './utils/uniapp/toast.js'
import actions from './utils/uniapp/action-sheet.js'
import {openUrl} from './utils/uniapp/open-url.js'
import * as system from './utils/uniapp/system.js'

export default {
	page,
	alert,
	toast,
	actions,
	openUrl,
	system,
	install({ parentApp, $q }){
		parentApp.config.globalProperties.$uni = this
	}
}