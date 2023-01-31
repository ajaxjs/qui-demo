<template>
	<view class="q-footer fixed-bottom row no-wrap" :class="classes" :style="footStyle">
		<slot></slot>
		<view v-if="elevated" class="q-layout__shadow absolute-full overflow-hidden no-pointer-events"></view>
	</view>
</template>

<script>
	import { computed,inject } from "vue"
	import { quasarKey } from '../../utils/private/symbols.js'
	import {useAttrProps} from '../../composables/private/use-attr.js'
	export default {
		props: {
			...useAttrProps,
			bordered: Boolean,
			elevated: Boolean,
		},
		setup(props){
			const $q = inject(quasarKey)
			const footStyle = computed(()=>{
				const sfis = $q.platform.safeAreaInsets
				const styl = `height: ${$q.config.footHeight}px; padding-bottom: ${sfis.bottom}px;`
				return props.styles ? [styl, props.styles] : styl
			})
			console.log('footer',footStyle.value);
			const classes = computed(()=>[{
				'q-footer--bordered': props.bordered
			}, props.className])
			return {
				classes,
				footStyle
			}
		}
	}
</script>

<style>
</style>