import { computed } from 'vue'
import { useSizeDefaults } from '../../composables/private/use-size.js'

export const useSpinnerProps = {
	size: {
		type: [Number, String],
		default: '1em'
	},
	color: String
}

export default function useSpinner(props) {
	const cSize = computed(() => (
		props.size in useSizeDefaults ?
		`${ useSizeDefaults[ props.size ] }px` :
		props.size
	))
	return {
		cSize,

		classes: computed(() =>'q-spinner' + (props.color ? ` text-${ props.color }` : ''))
	}
}
