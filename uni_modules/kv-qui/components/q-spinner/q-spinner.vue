<template>
	<view class="q-spinner-mat" :class="classes" :style="{width:cSize,height:cSize,'--q-thickness':thickness+'px'}">
		<view class="path absolute-full" />
	</view>
</template>

<script>
	import useSpinner, { useSpinnerProps } from './use-spinner.js'
	export default {
		name: 'QSpinner',
		props: useSpinnerProps,
		setup (props) {
		    const { cSize, classes } = useSpinner(props)
			return {
				cSize,
				classes
			}
		}
	}
</script>

<style>
</style>