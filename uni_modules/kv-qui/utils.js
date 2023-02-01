import clone from './utils/clone.js'
import format from './utils/format.js'
import uid from './utils/uid.js'
import is from './utils/is.js'
import each from './utils/each.js'
import {pages} from '@/pages.json'

// 读取当前路由信息，name 读取当前页面style[name]
const getRoute = (name) => {
	const page = pages.filter(vo=>vo.path==getCurrentPages().pop().route)[0]
	console.log('---page',page);
	return page && name ? page.style[name] : page
}

export {
	getRoute,
	clone,
	format,
	uid,
	is,
	each,
}