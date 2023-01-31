import {ref} from 'vue'
import {usePkViewProps} from '../q-pickerview/usePickerview.js'

export const usePickerProps = {
	...usePkViewProps,
	show: Boolean,
	position: String,
	title: String,
}

// usePicker
export default ({emit})=>{
	const innerValue = ref(null)
	
	function open(evt){
		emit('update:show', true)
		emit('open',evt)
	}
	
	function close(evt){
		emit('update:show', false)
		emit('close',evt)
	}
	function confirm(evt){
		console.log(innerValue);
		emit('update:modelValue', innerValue.value)
		emit('confirm', innerValue)
		close(evt)
	}
	
	function onChange(evt){
		innerValue.value = evt.detail.value
		emit('change',evt)
	}
	
	return {
		innerValue,
		
		open,
		close,
		confirm,
		onChange,
	}
}