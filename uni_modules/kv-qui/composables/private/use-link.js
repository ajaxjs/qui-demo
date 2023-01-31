import { computed,getCurrentInstance } from 'vue'
import { currentPage } from '../../utils/uniapp/page.js'

export const useLinkProps = {
	label: String,
	// 连接参数
	query: Object,
	
	// 小程序跳转路径：appId://path?params
	mp: String,
	
	// router-link
	to: [String, Object],
	// 入场动画(app下可用)
	animate: String,
	// 动画时长
	duration: Number,

	// regular <a> link
	href: String,
	target: String,
	
	exact: Boolean,
	activeClass: {
	  type: String,
	  default: 'q-router-link--active'
	},
	exactActiveClass: {
	  type: String,
	  default: 'q-router-link--exact-active'
	},
	disable: Boolean,
}

export default function(props){
	const {proxy} = getCurrentInstance()
	// 是否当前URL
	const linkActive = computed(()=>'/'+currentPage().route==proxy.to)
	// 连接类型
	const linkType = computed(()=>(props.to ? 'to' : props.mp ? 'mp' : props.href ? 'href' : ''))
	// 是否有连接
	const hasLink = computed(()=>linkType.value ? true : false)
	
	const linkClass = computed(() => (
	  hasLink.value === true
	    ? (
	        linkActive.value === true
	          ? ` ${ props.exactActiveClass } ${ props.activeClass }`
	          : ''
	      )
	    : ''
	))
	
	// 连接参数
	const linkAttrs = computed(()=>{
		const {mp, to, href, target} = props
		if(mp || to || href){
			return {mp, to, href, target}
		}
		return null
	})
	return {
		hasLink,
		linkType,
		linkActive,
		linkAttrs,
		linkClass,
	}
}