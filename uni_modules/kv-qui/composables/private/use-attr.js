/**********
 * 兼容微信组件默认属性名无法传值
 * class => className
 * style => styles
 */

//import { computed } from 'vue'

export const useAttrProps = {
	//classes: [String, Array, Object],//与组件变量名冲突
	className: [String, Array, Object],
	styles: [String, Object],
}

