<template>
	<view :class="classes" :style="style">
		<slot></slot>
	</view>
</template>

<script>
	import { computed } from 'vue'
	
	import { createComponent } from '../../utils/private/create.js'
	
	export default createComponent({
	  name: 'QItemLabel',
	
	  props: {
	    overline: Boolean,
	    caption: Boolean,
	    header: Boolean,
	    lines: [ Number, String ]
	  },
	
	  setup (props, { slots }) {
	    const parsedLines = computed(() => parseInt(props.lines, 10))
	
	    const classes = computed(() =>
	      'q-item__label'
	      + (props.overline === true ? ' q-item__label--overline text-overline' : '')
	      + (props.caption === true ? ' q-item__label--caption text-caption' : '')
	      + (props.header === true ? ' q-item__label--header' : '')
	      + (parsedLines.value === 1 ? ' ellipsis' : '')
	    )
	
	    const style = computed(() => {
	      return props.lines !== void 0 && parsedLines.value > 1
	        ? {
	            overflow: 'hidden',
	            display: '-webkit-box',
	            '-webkit-box-orient': 'vertical',
	            '-webkit-line-clamp': parsedLines.value
	          }
	        : null
	    })
	
	    return {
			style,
			classes
		}
	  }
	})

</script>

<style>
</style>