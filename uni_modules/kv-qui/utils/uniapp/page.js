import {pages} from '@/pages.json'

// 读取当前页对象实例
export function currentPage(){
	let pages = getCurrentPages()
	pages.reverse()
	return pages[0]
}

// 读取当前页面pages路由设置，传name时，递归查找输出对应的name值
export function currentRoute(){
	return pages.filter(vo=>vo.path==getCurrentPages().pop().route)[0]
}

export default {
	page: currentPage,
	route: currentRoute
}