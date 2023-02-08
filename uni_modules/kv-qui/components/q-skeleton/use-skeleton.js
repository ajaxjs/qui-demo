import { computed, getCurrentInstance } from "vue";
import useDark, { useDarkProps } from '../../composables/private/use-dark.js'

export const skeletonAnimations = [
	'wave', 'pulse', 'pulse-x', 'pulse-y', 'fade', 'blink', 'none'
]
export const skeletonTypes = [
	'text', 'rect', 'circle', 'btn', 'badge', 'chip', 'toolbar', 'checkbox', 'radio', 'toggle',
	'slider', 'range', 'input', 'avatar'
]

export const useSkeletonProps = {
	...useDarkProps,
	type: {
		type: String,
		default: 'rect',
		validator: vo => skeletonTypes.includes(vo)
	},
	animation: {
		type: String,
		validator: v => skeletonAnimations.includes(v),
		default: 'wave'
	},
	animationSpeed: {
		type: [String, Number],
		default: 1500
	},

	square: Boolean,
	bordered: Boolean,

	size: String,
	width: String,
	height: String
}

export default function (props) {
	const vm = getCurrentInstance()
	const isDark = useDark(props, vm.proxy.$q)
	const style = computed(() => {
		const size = props.size !== void 0 ?
			[props.size, props.size] :
			[props.width, props.height]
	
		return {
			'--q-skeleton-speed': `${ props.animationSpeed }ms`,
			width: size[0],
			height: size[1]
		}
	})
	const classes = computed(() =>
		`q-skeleton q-skeleton--${ isDark.value === true ? 'dark' : 'light' } q-skeleton--type-${ props.type }` +
		(props.animation !== 'none' ? ` q-skeleton--anim q-skeleton--anim-${ props.animation }` : '') +
		(props.square === true ? ' q-skeleton--square' : '') +
		(props.bordered === true ? ' q-skeleton--bordered' : '')
	)
	
	return {
		classes,
		style,
	}
}