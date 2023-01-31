<template>
	<view class="q-card__section"
		:class="[`q-card__section--${ horizontal === true ? 'horiz row no-wrap' : 'vert' }`,className]"
		:style="styles"
	>
		<slot></slot>
	</view>
</template>

<script>
	import {useAttrProps} from '../../composables/private/use-attr.js'
	export default {
		name: 'QCardSection',
		props: {
			...useAttrProps,
			horizontal: Boolean,
		}
	}
</script>

<style>
</style>