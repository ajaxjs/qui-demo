import {
	computed
} from 'vue'

export const useTransitionProps = {
	transitionShow: {
		type: String,
		default: 'fade'
	},

	transitionHide: {
		type: String,
		default: 'fade'
	},

	transitionDuration: {
		type: [String, Number],
		default: 300
	}
}

export default function(props, defaultShowFn = () => {}, defaultHideFn = () => {}) {
	
	return {
		transitionProps: computed(() => {
			const show = `q-animate--${ props.transitionShow || defaultShowFn() }`
			const hide = `q-animate--${ props.transitionHide || defaultHideFn() }`

			return {show,hide}
		}),
		//`--animation-duration: ${ props.transitionDuration }ms; animation-duration: ${ props.transitionDuration }ms;`
		transitionStyle: computed(() => ({
			'--animation-duration': props.transitionDuration+'ms',
			'animation-duration': props.transitionDuration+'ms',
			'animation-fill-mode': 'forwards',
		}))
	}
}
