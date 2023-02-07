<template>
	<view :class="classes">
		<slot></slot>
	</view>
</template>

<script>
	import { computed } from 'vue'
	
	import { useAlignProps, alignMap } from '../../composables/private/use-align.js'
	
	import { createComponent } from '../../utils/private/create.js'
	
	export default createComponent({
	  name: 'QCardActions',
	
	  props: {
	    ...useAlignProps,
	    vertical: Boolean
	  },
	
	  setup (props, { slots }) {
	
	    const classes = computed(() =>
	      `q-card__actions`
		  + ` ${ props.vertical === true ? 'items' : 'justify' }-${ props.align ? alignMap[ props.align ] : 'around' }`
	      + ` q-card__actions--${ props.vertical === true ? 'vert column' : 'horiz row' }`
	    )
	
	    return {
			classes
		}
	  }
	})

</script>

<style>
</style>