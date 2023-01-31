<template>
	<view :class="classes">
		<slot></slot>
	</view>
</template>

<script>
	import {computed} from 'vue'
	export default {
		name: 'QBtnGroup',

		props: {
			unelevated: Boolean,
			outline: Boolean,
			flat: Boolean,
			rounded: Boolean,
			square: Boolean,
			push: Boolean,
			stretch: Boolean,
			glossy: Boolean,
			spread: Boolean
		},

		setup(props) {
			const classes = computed(() => {
				const cls = ['unelevated', 'outline', 'flat', 'rounded', 'square', 'push', 'stretch', 'glossy']
					.filter(t => props[t] === true)
					.map(t => `q-btn-group--${ t }`).join(' ')

				return `q-btn-group row no-wrap${ cls.length > 0 ? ' ' + cls : '' }` +
					(props.spread === true ? ' q-btn-group--spread' : ' inline')
			})

			return {
				classes
			}
		}
	}
</script>

<style>
</style>
