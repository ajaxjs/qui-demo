/*
import each from '@/each.js'

each(['a','b','c'],(value,key,index)=>{
	console.log('value',value,'key',key,'index',index);
})
each({a:'111',b:222,c:'abc'}, (value,key,index)=>{
	console.log('value',value,'key',key,'index',index);
})
*/

export default function(object, callback) {
	if (!object) return null
	var type = (function() {
		switch (object.constructor) {
			case Object:
				return 'Object';
				break;
			case Array:
				return 'Array';
				break;
			case NodeList:
				return 'NodeList';
				break;
			default:
				return 'null';
				break;
		}
	})();
	// 为数组或类数组时, 返回: index, value
	if (type === 'Array' || type === 'NodeList') {
		// 由于存在类数组NodeList, 所以不能直接调用every方法
		[].every.call(object,
			(vo, k) => {
				return callback.call(k, vo, k, k) === false ? false : true;
			});
	}
	// 为对象格式时,返回:key, value
	else if (type === 'Object') {
		let i = 0
		for (var k in object) {
			if (callback.call(k, object[k], k, i) === false) {
				break;
			}
			i++
		}
	}
}