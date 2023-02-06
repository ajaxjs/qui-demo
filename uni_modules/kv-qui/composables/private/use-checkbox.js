import {toRaw, computed, getCurrentInstance} from 'vue'
import useDark, {useDarkProps} from '../../composables/private/use-dark.js'
import useSize, {useSizeProps} from '../../composables/private/use-size.js'
import optionSizes from '../../utils/private/option-sizes.js'
import { stopAndPrevent } from '../../utils/event.js'

export const useCheckboxProps = {
	...useDarkProps,
	...useSizeProps,
	//...useFormProps,
	name: String,

	modelValue: {
		required: true,
		default: null
	},
	val: {},

	trueValue: {
		default: true
	},
	falseValue: {
		default: false
	},
	indeterminateValue: {
		default: null
	},

	checkedIcon: String,
	uncheckedIcon: String,
	indeterminateIcon: String,

	toggleOrder: {
		type: String,
		validator: v => v === 'tf' || v === 'ft'
	},
	toggleIndeterminate: Boolean,

	label: String,
	leftLabel: Boolean,

	color: String,
	keepColor: Boolean,
	dense: Boolean,

	disable: Boolean,
	tabindex: [String, Number]
}

export default function(type, getInner) {
	const { props, slots, emit, proxy } = getCurrentInstance()
	const { $q } = proxy

	const isDark = useDark(props, $q)

	//const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef)
	const sizeStyle = useSize(props, optionSizes)

	const modelIsArray = computed(() =>
		props.val !== void 0 && Array.isArray(props.modelValue)
	)

	const index = computed(() => {
		const val = toRaw(props.val)
		return modelIsArray.value === true ?
			props.modelValue.findIndex(opt => toRaw(opt) === val) :
			-1
	})

	const isTrue = computed(() => (
		modelIsArray.value === true ?
		index.value > -1 :
		toRaw(props.modelValue) === toRaw(props.trueValue)
	))

	const isFalse = computed(() => (
		modelIsArray.value === true ?
		index.value === -1 :
		toRaw(props.modelValue) === toRaw(props.falseValue)
	))

	const isIndeterminate = computed(() =>
		isTrue.value === false && isFalse.value === false
	)

	const tabindex = computed(() => (
		props.disable === true ? -1 : props.tabindex || 0
	))

	const classes = computed(() =>
		`q-${ type } cursor-pointer no-outline row inline no-wrap items-center` +
		(props.disable === true ? ' disabled' : '') +
		(isDark.value === true ? ` q-${ type }--dark` : '') +
		(props.dense === true ? ` q-${ type }--dense` : '') +
		(props.leftLabel === true ? ' reverse' : '')
	)

	const innerClass = computed(() => {
		const state = isTrue.value === true ? 'truthy' : (isFalse.value === true ? 'falsy' : 'indet')
		const color = props.color !== void 0 && (
				props.keepColor === true ||
				(type === 'toggle' ? isTrue.value === true : isFalse.value !== true)
			) ?
			` text-${ props.color }` :
			''

		return `q-${ type }__inner relative-position non-selectable q-${ type }__inner--${ state }${ color }`
	})
	
	function onClick(e) {
		if (e !== void 0) {
			stopAndPrevent(e)
			//refocusTarget(e)
		}

		if (props.disable !== true) {
			emit('update:modelValue', getNextValue(), e)
		}
	}

	function getNextValue() {
		if (modelIsArray.value === true) {
			if (isTrue.value === true) {
				const val = props.modelValue.slice()
				val.splice(index.value, 1)
				return val
			}

			return props.modelValue.concat([props.val])
		}

		if (isTrue.value === true) {
			if (props.toggleOrder !== 'ft' || props.toggleIndeterminate === false) {
				return props.falseValue
			}
		} else if (isFalse.value === true) {
			if (props.toggleOrder === 'ft' || props.toggleIndeterminate === false) {
				return props.trueValue
			}
		} else {
			return props.toggleOrder !== 'ft' ?
				props.trueValue :
				props.falseValue
		}

		return props.indeterminateValue
	}
	const inner = getInner(isTrue, isIndeterminate)
	
	return {
		classes,
		innerClass,
		sizeStyle,
		isIndeterminate,
		isTrue,
		inner,
		tabindex,
		
		onClick,
		
	}
}
