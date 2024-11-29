<template>
	<view class="q-footer row no-wrap" :class="classes" :style="styles">
		<slot></slot>
		<view v-if="elevated" class="q-layout__shadow absolute-full overflow-hidden no-pointer-events"></view>
	</view>
</template>

<script>
	import { computed,inject } from "vue"
	import { quasarKey } from '../../utils/private/symbols.js'
	import { useAttrProps } from '../../composables/private/use-attr.js'
	export default {
		props: {
			...useAttrProps,
			bordered: Boolean,
			elevated: Boolean,
			height: Number
		},
		setup(props,{attrs}){
			const $q = inject(quasarKey)
			
			const classes = computed(()=>[{
				'q-footer--bordered': props.bordered
			}, props.className])
			return {
				classes,
			}
		}
	}
</script>

<style>
</style>