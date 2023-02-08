<template>
	<view class="q-skeleton-item" :class="itemClass">
		++
	</view>
</template>

<script>
import { computed } from "vue"
	export default {
		props: {
			prop: Object,
		},
		setup({prop}){
			const itemClass = computed(()=>{
				return [
					'col-'+prop.col,
					'justify-'+prop.align,
					'q-gutter-'+prop.gutter,
				].filter(vo=>vo).join(' ')
			})
			return {
				itemClass,
			}
		}
	}
</script>

<style>
</style>