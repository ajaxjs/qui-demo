export default function deepmerge(target, ...sources) {
	let result = Object.assign({}, target); // 创建目标对象的副本作为结果对象

	sources.forEach(source => {
		if (source) { // 检查源对象是否存在
			Object.keys(source).forEach(key => {
				const targetValue = result[key];
				const sourceValue = source[key];

				if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) &&
					targetValue && typeof targetValue === 'object') {
					// 如果源值和目标值都是对象，则递归合并
					result[key] = deepmerge(targetValue, sourceValue);
				} else if (sourceValue && Array.isArray(sourceValue) && targetValue && Array.isArray(
						targetValue)) {
					// 如果源值和目标值都是数组，则合并数组
					result[key] = targetValue.concat(sourceValue);
				} else {
					// 否则，直接复制源值
					result[key] = sourceValue;
				}
			});
		}
	});

	return result;
}