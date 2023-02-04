<template>
	<q-linear-progress
		v-if="visible"
		class="q-page-loading-bar"
		:stripe="opts.stripe"
		:value="opts.progress"
		:indeterminate="opts.indeterminate"
		:color="opts.color"
		:size="opts.size"
	/>
</template>

<script>
import { getCurrentInstance, ref, toRaw, watch } from "vue"
import { isBoolean, isNumber, isObject } from "../../utils/is"
	export default {
		props: {
			option: [Boolean, Object, String, Number]
		},
		setup(props){
			const {proxy:{$q}} = getCurrentInstance()
			const colorVali = color => {
				$q.colors.include(color.replace(/\-\d{1,2}/))
			}
			const visible = ref(false)
			const opts = ref(null)
			// 初始化
			const init = (option)=>{
				opts.value = {color:'primary',size:'4px',indeterminate: true}
				if(option===null || option===false){
					visible.value = false
				}else if(isBoolean(option)){
					visible.value = option
				}else if(isObject(option)){
					opts.value = Object.assign({}, opts.value, option)
					visible.value = option
				}else if(isNumber(option)){
					opts.value.progress = option
					visible.value = option
				}
				opts.value.indeterminate = !isNumber(opts.value.progress)
			}
			watch(()=>props.option, init)
			uni.$on('loadingBar', init)
			init(init)
			
			return {
				visible,
				opts
			}
		}
	}
</script>

<style>
</style>