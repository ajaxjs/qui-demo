import { watch, nextTick, getCurrentInstance } from 'vue'

export const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },

  'onUpdate:modelValue': [ Function, Array ]
}

export const useModelToggleEmits = [
  'beforeShow', 'show', 'beforeHide', 'hide'
]

export default function({showing, duration, handleShow, handleHide}){
	const vm = getCurrentInstance()
	const { props, emit, proxy } = vm
	let payload
	//console.log('duration',duration);
	function toggle(evt) {
		if (showing.value === true) {
			hide(evt)
		} else {
			show(evt)
		}
	}
	
	function show(evt){
		if(props.disable === true || (evt !== void 0 && evt.qAnchorHandled === true)) return
		
		emit('update:modelValue', true)
		payload = evt
		nextTick(()=>{
			if (payload === evt) payload = void 0
		})
		
		if(props.modelValue === null){
			processShow(evt)
		}
	}
	function processShow(evt){
		showing.value = true
		
		emit('beforeShow', evt)
		
		if (handleShow !== void 0) {
			handleShow(evt)
		} else {
			emit('show', evt)
		}
	}
	function hide(evt){
		if(props.disable === true) return
		
		emit('update:modelValue', false)
		payload = evt
		nextTick(()=>{
			if (payload === evt) payload = void 0
		})
		
		processHide(evt)
	}
	
	function processHide(evt){
		emit('beforeHide', evt)
		if (handleHide !== void 0) {
			handleHide(evt)
		} else {
			emit('hide', evt)
		}
		// kv
		setTimeout(()=>{
			showing.value = false
		}, duration)
	}
	function processModelChange(val) {
		if (props.disable === true && val === true) {
			if (props['onUpdate:modelValue'] !== void 0) {
				emit('update:modelValue', false)
			}
		} else if ((val === true) !== showing.value) {
			const fn = val === true ? processShow : processHide
			fn(payload)
		}
		// 每次显示，监听全局关闭事件once
		val && uni.$once('close-popup',(evt)=>{
			hide(evt)
		})
	}
	
	watch(() => props.modelValue, processModelChange)
	
	return {show,hide,toggle}
}