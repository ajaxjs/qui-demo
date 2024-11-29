import { computed } from 'vue'
import { isNumber } from '../../utils/is.js'
import {useAttrProps} from './use-attr.js'
import conf from '../../config.js'

export const useOptionProps = {
	...useAttrProps,
	modelValue: { required: true },
	val: { },
		
	label: String,
	leftLabel: Boolean,
	
	labelClass: {},
	// 选项间距
	gutter: {
		type: String,
		default: 'sm',
		validator: val=>['xs','sm','md','lg'].includes(val)
	},
	color: String,
	
	checkedIcon: String,
	uncheckedIcon: String,
	
	options: Array
}

export default function(props){
	
	const trueValue = props.val !== void 0 ? props.val : true
	
	const isGroup = computed(()=>props.options !== void 0)
	
	// 格式化option
	const opts = computed(()=>{
		let {label, disable, color,checkedIcon,uncheckedIcon,icon} = props
		if(conf.config.brand?.primary){
			color = conf.config.brand?.primary;
		}
		return isGroup.value ? props.options.map(vo => {
			vo = typeof(vo)=='object' ? vo : {label: vo,value: vo}
			vo = Object.assign({
					disable,
					color,
					checkedIcon: (checkedIcon || vo.icon || icon),
					uncheckedIcon: (uncheckedIcon || vo.icon || icon)
				},
			vo)
			return vo
		}) : [{label, disable, color, value:trueValue, checkedIcon, uncheckedIcon}]
	})
	// 选中状态列表
	const status = computed(()=>opts.value.map(vo=>{
		const {modelValue} = props
		const {value} = vo
		return Array.isArray(modelValue) ? modelValue.includes(value) : value==modelValue
	}))
	// ICON
	const icons = computed(()=>opts.value.map((vo,i)=>{
		const {checkedIcon,uncheckedIcon} = vo
		const checked = status.value[i]
		return checked && checkedIcon ? checkedIcon : (!checked && uncheckedIcon ? uncheckedIcon : '')
	}))
	
	const itemClass = computed(()=>opts.value.map((vo,i)=>[
		vo.class,
		status.value[i] ? 'q-checked' : '',
	]))
	const labelStyle = computed(()=>({
		marginRight: isNumber(props.gutter)?props.gutter+'px':props.gutter,
	}))
	
	const classes = computed(()=>[
		'q-gutter-'+props.gutter,
		props.className
	])
	
	return {
		classes,
		opts,
		icons,
		status,
		isGroup,
		trueValue,
		itemClass,
		labelStyle,
	}
}