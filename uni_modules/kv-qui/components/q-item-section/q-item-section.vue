<template>
	<view :class="classes">
		<slot></slot>
	</view>
</template>

<script>
	import { computed } from 'vue'
	
	import { createComponent } from '../../utils/private/create.js'
	
	export default createComponent({
	  name: 'QItemSection',
	
	  props: {
	    avatar: Boolean,
	    thumbnail: Boolean,
	    side: Boolean,
	    top: Boolean,
	    noWrap: Boolean
	  },
	
	  setup (props, { slots }) {
	    const classes = computed(() =>
	      'q-item__section column'
	      + ` q-item__section--${ props.avatar === true || props.side === true || props.thumbnail === true ? 'side' : 'main' }`
	      + (props.top === true ? ' q-item__section--top justify-start' : ' justify-center')
	      + (props.avatar === true ? ' q-item__section--avatar' : '')
	      + (props.thumbnail === true ? ' q-item__section--thumbnail' : '')
	      + (props.noWrap === true ? ' q-item__section--nowrap' : '')
	    )
	
	    return {
			classes
		}
	  }
	})

</script>

<style>
</style>