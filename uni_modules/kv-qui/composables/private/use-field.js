import { ref, computed, watch, nextTick, getCurrentInstance } from 'vue'

/*import { isRuntimeSsrPreHydration } from '../../plugins/Platform.js'

import QIcon from '../../components/icon/QIcon.js'
import QSpinner from '../../components/spinner/QSpinner.js'
*/
import useDark, { useDarkProps } from '../../composables/private/use-dark.js'
import useValidate, { useValidateProps } from './use-validate.js'
import useSplitAttrs from './use-split-attrs.js'

//import { hSlot } from '../../utils/private/render.js'
import uid from '../../utils/uid.js'
import { prevent, stopAndPrevent } from '../../utils/event.js'

function getTargetUid(val) {
	return val === void 0 ? `f_${ uid() }` : val
}

export function fieldValueIsFilled(val) {
	return val !== void 0 &&
		val !== null &&
		('' + val).length > 0
}

export const useFieldProps = {
	...useDarkProps,
	...useValidateProps,

	label: String,
	stackLabel: Boolean,
	hint: String,
	hideHint: Boolean,
	prefix: String,
	suffix: String,

	labelColor: String,
	color: String,
	bgColor: String,

	filled: Boolean,
	outlined: Boolean,
	borderless: Boolean,
	standout: [Boolean, String],

	square: Boolean,

	loading: Boolean,

	labelSlot: Boolean,

	bottomSlots: Boolean,
	hideBottomSpace: Boolean,

	rounded: Boolean,
	dense: Boolean,
	itemAligned: Boolean,

	counter: Boolean,

	clearable: Boolean,
	clearIcon: String,

	disable: Boolean,
	readonly: Boolean,

	autofocus: Boolean,

	for: String,

	maxlength: {
		type: [Number, String],
		default: 140
	}
}

export const useFieldEmits = ['update:modelValue', 'clear', 'focus', 'blur', 'popupShow', 'popupHide']

export function useFieldState() {
	const { props, attrs, proxy, vnode } = getCurrentInstance()

	const isDark = useDark(props, proxy.$q)

	return {
		isDark,

		editable: computed(() =>
			props.disable !== true && props.readonly !== true
		),

		innerLoading: ref(false),
		focused: ref(props.autofocus),
		hasPopupOpen: false,

		splitAttrs: useSplitAttrs(attrs, vnode),
		targetUid: ref(getTargetUid(props.for)),

		rootRef: ref(null),
		targetRef: ref(null),
		controlRef: ref(null)

		/**
		 * user supplied additionals:

		 * innerValue - computed
		 * floatingLabel - computed
		 * inputRef - computed

		 * fieldClass - computed
		 * hasShadow - computed

		 * controlEvents - Object with fn(e)

		 * getControl - fn
		 * getInnerAppend - fn
		 * getControlChild - fn
		 * getShadowControl - fn
		 * showPopup - fn
		 */
	}
}

export default function(state) {
	const { props, emit, slots, attrs, proxy } = getCurrentInstance()
	const { $q } = proxy

	let focusoutTimer

	if (state.hasValue === void 0) {
		state.hasValue = computed(() => fieldValueIsFilled(props.modelValue))
	}

	if (state.emitValue === void 0) {
		state.emitValue = value => {
			emit('update:modelValue', value)
		}
	}

	if (state.controlEvents === void 0) {
		state.controlEvents = {
			onFocusin: onControlFocusin,
			onFocusout: onControlFocusout
		}
	}

	Object.assign(state, {
		clearValue,
		onControlFocusin,
		onControlFocusout,
	})

	if (state.computedCounter === void 0) {
		state.computedCounter = computed(() => {
			if (props.counter !== false) {
				const len = typeof props.modelValue === 'string' || typeof props.modelValue === 'number' ?
					('' + props.modelValue).length :
					(Array.isArray(props.modelValue) === true ? props.modelValue.length : 0)

				const max = props.maxlength !== void 0 ?
					props.maxlength :
					props.maxValues

				return len + (max !== void 0 ? ' / ' + max : '')
			}
		})
	}

	const {
		isDirtyModel,
		hasRules,
		hasError,
		errorMessage,
		resetValidation
	} = useValidate(state.focused, state.innerLoading)

	const floatingLabel = state.floatingLabel !== void 0 ?
		computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value ===
		true) :
		computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true)

	const shouldRenderBottom = computed(() =>
		props.bottomSlots === true ||
		props.hint !== void 0 ||
		hasRules.value === true ||
		props.counter === true ||
		props.error !== null
	)

	const styleType = computed(() => {
		if (props.filled === true) {
			return 'filled'
		}
		if (props.outlined === true) {
			return 'outlined'
		}
		if (props.borderless === true) {
			return 'borderless'
		}
		if (props.standout) {
			return 'standout'
		}
		return 'standard'
	})

	const classes = computed(() =>
		`q-field row no-wrap items-start q-field--${ styleType.value }` +
		(state.fieldClass !== void 0 ? ` ${ state.fieldClass.value }` : '') +
		(props.rounded === true ? ' q-field--rounded' : '') +
		(props.square === true ? ' q-field--square' : '') +
		(floatingLabel.value === true ? ' q-field--float' : '') +
		(hasLabel.value === true ? ' q-field--labeled' : '') +
		(props.dense === true ? ' q-field--dense' : '') +
		(props.itemAligned === true ? ' q-field--item-aligned q-item-type' : '') +
		(state.isDark.value === true ? ' q-field--dark' : '') +
		(state.getControl === void 0 ? ' q-field--auto-height' : '') +
		(state.focused.value === true ? ' q-field--focused' : '') +
		(hasError.value === true ? ' q-field--error' : '') +
		(hasError.value === true || state.focused.value === true ? ' q-field--highlighted' : '') +
		(props.hideBottomSpace !== true && shouldRenderBottom.value === true ? ' q-field--with-bottom' : '') +
		(props.disable === true ? ' q-field--disabled' : (props.readonly === true ? ' q-field--readonly' : ''))
	)

	const contentClass = computed(() =>
		'q-field__control relative-position row no-wrap' +
		(props.bgColor !== void 0 ? ` bg-${ props.bgColor }` : '') +
		(
			hasError.value === true ?
			' text-negative' :
			(
				typeof props.standout === 'string' && props.standout.length > 0 && state.focused.value === true ?
				` ${ props.standout }` :
				(props.color !== void 0 ? ` text-${ props.color }` : '')
			)
		)
	)

	const hasLabel = computed(() =>
		props.labelSlot === true || props.label !== void 0
	)

	const labelClass = computed(() =>
		'q-field__label no-pointer-events absolute ellipsis' +
		(props.labelColor !== void 0 && hasError.value !== true ? ` text-${ props.labelColor }` : '')
	)
	/*
	  const controlSlotScope = computed(() => ({
	    id: state.targetUid.value,
	    editable: state.editable.value,
	    focused: state.focused.value,
	    floatingLabel: floatingLabel.value,
	    modelValue: props.modelValue,
	    emitValue: state.emitValue
	  }))
	*/
	const attributes = computed(() => {
		const acc = {
			for: state.targetUid.value
		}

		if (props.disable === true) {
			acc['aria-disabled'] = 'true'
		} else if (props.readonly === true) {
			acc['aria-readonly'] = 'true'
		}

		return acc
	})

	watch(() => props.for, val => {
		// don't transform targetUid into a computed
		// prop as it will break SSR
		state.targetUid.value = getTargetUid(val)
	})

	function onControlFocusin(e) {
		clearTimeout(focusoutTimer)
		if (state.editable.value === true && state.focused.value === false) {
			state.focused.value = true
			emit('focus', e)
		}
	}

	function onControlFocusout(e) {
		clearTimeout(focusoutTimer)
		focusoutTimer = setTimeout(() => {
			
			if ( state.hasPopupOpen === true ) {
				return
			}

			if (state.focused.value === true) {
				state.focused.value = false
				emit('blur', e)
			}

		})
	}

	function clearValue(e) {
		// prevent activating the field but keep focus on desktop
		stopAndPrevent(e)

		if ($q.platform.is.mobile !== true) {
			const el = (state.targetRef !== void 0 && state.targetRef.value) || state.rootRef.value
			state.focused.value = true
			//el.focus()
		} else if (state.rootRef.value.contains(document.activeElement) === true) {
			document.activeElement.blur()
		}

		if (props.type === 'file') { // TODO vue3
			// do not let focus be triggered
			// as it will make the native file dialog
			// appear for another selection
			state.inputRef.value.value = null
		}

		emit('update:modelValue', null)
		emit('clear', props.modelValue)

		nextTick(() => {
			resetValidation()

			if ($q.platform.is.mobile !== true) {
				isDirtyModel.value = false
			}
		})
	}
	// 计数
	const hasCounter = props.counter === true || slots.counter !== void 0

	const labelAttrs = state.getControl === void 0 && slots.control === void 0 ?
		{
			...state.splitAttrs.attributes.value,
			'data-autofocus': props.autofocus === true || void 0,
			...attributes.value
		} :
		attributes.value

	return {
		state,
		//classes: [classes.value, attrs.class],
		classes,
		style: attrs.style,
		hasLabel,
		labelClass,
		labelAttrs,
		hasCounter,
		contentClass,
		appendClass: 'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',

		shouldRenderBottom,
		errorMessage,

		clearValue,
		prevent,
	}
}
