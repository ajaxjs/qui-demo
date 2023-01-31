<template>
	<view :class="classes">
		<slot></slot>
	</view>
</template>

<script>
	import { computed } from 'vue'
	
	import useAlign, { useAlignProps } from '../../composables/private/use-align.js'
	
	import { createComponent } from '../../utils/private/create.js'
	
	export default createComponent({
	  name: 'QCardActions',
	
	  props: {
	    ...useAlignProps,
	    vertical: Boolean
	  },
	
	  setup (props, { slots }) {
	    const alignClass = useAlign(props)
	
	    const classes = computed(() =>
	      `q-card__actions ${ alignClass.value }`
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