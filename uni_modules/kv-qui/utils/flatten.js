export default function flatten(arr) {
	let result = [];

	// 递归遍历数组
	function flattenArray(subArray) {
		for (let i = 0; i < subArray.length; i++) {
			// 如果当前元素是数组，则递归调用flattenArray
			if (Array.isArray(subArray[i])) {
				flattenArray(subArray[i]);
			} else {
				// 否则，直接将元素添加到结果数组中
				result.push(subArray[i]);
			}
		}
	}

	// 开始递归过程
	flattenArray(arr);

	return result;
}