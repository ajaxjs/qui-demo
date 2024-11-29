import pageConf from '@/pages.json'
const {pages, tabBar} = pageConf

// 读取当前页对象实例
export function currentPage(){
	let stacks = getCurrentPages()
	stacks.reverse()
	return stacks[0]
}

// 读取当前页面pages路由设置，传name时，递归查找输出对应的name值
export function currentRoute(){
	return pages.filter(vo=>vo.path==getCurrentPages().pop().route)[0]
}

export function isTabPage(){
	let istabpg = null
	if(tabBar){
		const cur_coute = currentRoute();
		istabpg = tabBar.list.find(vo=>cur_coute.path == vo.pagePath)
	}
	return istabpg;
}

export default {
	page: currentPage,
	route: currentRoute
}