import {isObject,isFunction} from '../is.js'

/*
参数说明
items: Array
简单数据：['A', 'B', 'C']，
标准数据：[{label:'A',value:'1'},{label:'B',value:'2'}]
非标数据：
sets
	Object 类型 showActionSheet参数
	Function 类型 showActionSheet的complete
*/

export default function (items, sets) {
	const tags = typeof sets
	items = items.map(vo=>isObject(vo)?vo:{label:vo,value:vo})
	if(tags == 'function'){
		sets = {complete: sets}
	}else if(tags == 'string'){
		sets = {title: sets}
	}
	sets = isFunction(sets)?{complete: sets}: sets
	const {label,value} = Object.assign({label:'label',value:'value'}, sets)
	const itemList = items.map(vo=>vo[label])
	const opts = Object.assign({}, sets, {itemList})
	
	['success','fail','complete'].forEach(key=>{
		const fun = opts[key]
		if(fun && isFunction(fun)){
			opts[key] = function (evt) {
				if(evt.errMsg == 'showActionSheet:ok'){
					const item = items[evt.tapIndex]
					evt.value = item[value]
					evt.item = item
				}
				console.log(evt);
				fun.call(this, evt)
			}
		}
	})
	uni.showActionSheet(opts);
}