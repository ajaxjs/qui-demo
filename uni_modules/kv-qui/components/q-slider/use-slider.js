import { useFormProps } from '../../composables/private/use-form.js'
export const useSliderPorps = {
	...useFormProps,
	modelValue: Number,
	// 拖动时，是否立即返回值(changing事件返回)
	immediate: Boolean,
	// 0 最小值
	min: Number,
	// 100 最大值
	max: Number,
	// 1 步长，取值必须大于 0，并且可被(max - min)整除
	step: Number,
	// false 是否禁用
	disabled: Boolean,
	// 0 当前取值
	value: Number,
	// 各个平台不同，详见下  滑块左侧已选择部分的线条颜色
	activeColor: String,
	// e9e9e9 滑块右侧背景条的颜色
	backgroundColor: String,
	// 28  滑块的大小，取值范围为 12 - 28
	blockSize: Number,
	// ffffff 滑块的颜色
	blockColor: String,
	//false 是否显示当前 value
	showValue: Boolean,
}
