<template>
	<view :class="classes" :style="styles">
		<slot></slot>
	</view>
</template>

<script>
	import { computed, getCurrentInstance } from 'vue'
	
	import useDark, {useDarkProps} from '../../composables/private/use-dark.js'
	import {useAttrProps} from '../../composables/private/use-attr.js'
	
	export default {
		name: 'QCard',

		props: {
			...useDarkProps,
			...useAttrProps,

			tag: {
				type: String,
				default: 'view'
			},

			square: Boolean,
			flat: Boolean,
			bordered: Boolean
		},

		setup(props, {
			slots
		}) {
			const { proxy: { $q } } = getCurrentInstance()
			const isDark = useDark(props, $q)

			const classes = computed(() =>{
				let cls = 'q-card' +
				(isDark.value === true ? ' q-card--dark q-dark' : '') +
				(props.bordered === true ? ' q-card--bordered' : '') +
				(props.square === true ? ' q-card--square no-border-radius' : '') +
				(props.flat === true ? ' q-card--flat no-shadow' : '')
				return [cls, props.className]
			})
			
			const styles = computed(()=>{
				return props.styles
			})

			return {
				classes,
				styles
			}
		}
	}
</script>

<style>
</style>
