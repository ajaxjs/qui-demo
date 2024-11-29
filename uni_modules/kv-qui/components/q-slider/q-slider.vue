<template>
	<slider
		:value="modelValue"
		:min="min"
		:max="max"
		:step="step"
		:disabled="disabled"
		:activeColor="getHex(activeColor)"
		:backgroundColor="getHex(backgroundColor)"
		:blockSize="blockSize"
		:block-color="getHex(blockColor)"
		:showValue="showValue"
		@change="change"
		@changing="changing"
	/>
</template>

<script>
	import { computed,inject } from "vue"
	import {quasarKey} from '../../utils/private/symbols.js'
	import {useSliderPorps} from './use-slider.js'
	export default {
		props: useSliderPorps,
		setup(props,{emit}){
			const $q = inject(quasarKey)
			const getHex = vo=>$q.colors[vo] || vo
			function change(evt){
				if(!props.immediate) emit('update:modelValue', evt.detail.value)
				emit('change',evt)
			}
			function changing(evt){
				if(props.immediate) emit('update:modelValue', evt.detail.value)
				emit('changing',evt)
			}
			return {
				getHex,
				change,
				changing,
			}
		}
	}
</script>

<style>
</style>