
export const usePkViewProps = {
	modelValue: Array,
	// 二维数组
	options: {
		type: Array,
		require: true
	},
	perfix: [String,Array],
	suffix: [String,Array],
	// 对齐：left,center,right
	align: String,
	itemLabel: {
		type: String,
		default: 'label'
	},
	itemValue: {
		type: String,
		default: 'value'
	},
	// 单项高度
	itemHeight: {
		type: Number,
		default: 40
	},
	// 显示最大项数，推荐单数
	rowNumber: {
		type: Number,
		default: 5
	},
}