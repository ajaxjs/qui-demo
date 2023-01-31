<template>
	<view class="q-spinner-mat" :class="classes" :style="{width:cSize,height:cSize}">
		<view
			class="path"
			:style="{borderWidth: thickness}"
		/>
	</view>
</template>

<script>
	import useSpinner, { useSpinnerProps } from './use-spinner.js'
	export default {
		name: 'QSpinner',
		props: {
			...useSpinnerProps,
			thickness: {
				type: Number,
				default: 3
			}
		},
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