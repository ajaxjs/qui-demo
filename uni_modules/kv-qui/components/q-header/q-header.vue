<template>
	<view :class="[classes,className]" :style="style">
		<slot></slot>
		<view v-if="elevated" class="q-layout__shadow absolute-full overflow-hidden no-pointer-events"></view>
	</view>
</template>

<script>
	import { computed, inject } from "vue"
	import {useAttrProps} from '../../composables/private/use-attr.js'
	import { quasarKey } from '../../utils/private/symbols.js'
	import { currentRoute } from '../../utils/uniapp/page.js'
	
	export default {
		props: {
			...useAttrProps,
			modelValue: {
				type: Boolean,
				default: true
			},
			bordered: Boolean,
			elevated: Boolean,
		},
		setup(props){
			const $q = inject(quasarKey)
			const isCustom = currentRoute().style.navigationStyle=='custom'
			
			const style = computed(()=>{
				const {headHeight} = $q.config
				const {statusBarHeight} = $q.platform
				const styl = `height:${$q.config.headHeight}px;`
				+ (isCustom ? `padding-top:${statusBarHeight}px;` : '')
				/* #ifdef H5 */
				+ (!isCustom ? `top: ${headHeight}px;`:'')
				/* #endif */
				return props.styles ? [styl, props.styles] : styl
			})
			const classes = computed(() =>
				'q-header fixed-top q-layout__section--marginal row no-wrap items-center justify-center'
				+ (props.bordered === true ? ' q-header--bordered' : '')
				//+ (hidden.value === true ? ' q-header--hidden' : '')
				+ (props.modelValue !== true ? ' q-layout--prevent-focus' : '')
			)
			return {
				classes,
				style
			}
		}
	}
</script>

<style>
</style>