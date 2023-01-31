<template>
	<view :class="classes" :style="style" :aria-label="label">
		<slot></slot>
		{{label}}
	</view>
</template>

<script>
	const alignValues = ['top', 'middle', 'bottom']
	export default {
		name: 'QBadge',

		props: {
			color: String,
			textColor: String,

			floating: Boolean,
			transparent: Boolean,
			multiLine: Boolean,
			outline: Boolean,
			rounded: Boolean,

			label: [Number, String],

			align: {
				type: String,
				validator: v => alignValues.includes(v)
			}
		},
		computed: {
			classes() {
				const text = this.outline === true ?
					this.color || this.textColor :
					this.textColor

				return 'q-badge flex inline items-center no-wrap' +
					` q-badge--${ this.multiLine === true ? 'multi' : 'single' }-line` +
					(this.outline === true ?
						' q-badge--outline' :
						(this.color !== void 0 ? ` bg-${ this.color }` : '')
					) +
					(text !== void 0 ? ` text-${ text }` : '') +
					(this.floating === true ? ' q-badge--floating' : '') +
					(this.rounded === true ? ' q-badge--rounded' : '') +
					(this.transparent === true ? ' q-badge--transparent' : '')
			},
			style() {
				return this.align !== void 0 ?
					{verticalAlign: this.align} :
					null
			}
		}
	}
</script>

<style>
</style>
