// 待修复问题：前台调用变promise对象了
export function currentPage(){
	let pages = getCurrentPages()
	pages.reverse()
	return pages[0]
}
export default function (pi){
	let pages = getCurrentPages()
	if(parseInt(pi)!==NaN){
		pages = pages[pi >= 0 ? pi : pages.length+pi];
	}
	return pages;
}