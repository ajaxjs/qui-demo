import { useDarkProps } from '../../composables/private/use-dark.js'

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
