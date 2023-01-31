<template>
	<view :class="classes" :style="sizeStyle">
		<view class="q-avatar__content row flex-center overflow-hidden"
			:style="contentStyle"
		>
			<slot></slot>
			<q-icon :name="icon" v-if="icon"></q-icon>
		</view>
	</view>
</template>

<script>
	import { computed } from 'vue'
	import useSize, { useSizeProps } from '../../composables/private/use-size.js'
	import { createComponent } from '../../utils/private/create.js'
	export default createComponent({
		name: 'QAvatar',
		props: {
		    ...useSizeProps,
		
		    fontSize: String,
		
		    color: String,
		    textColor: String,
		
		    icon: String,
		    square: Boolean,
		    rounded: Boolean
		},
		setup (props) {
		    const sizeStyle = useSize(props)
		
		    const classes = computed(() =>
		      'q-avatar'
		      + (props.color ? ` bg-${ props.color }` : '')
		      + (props.textColor ? ` text-${ props.textColor } q-chip--colored` : '')
		      + (
		        props.square === true
		          ? ' q-avatar--square'
		          : (props.rounded === true ? ' rounded-borders' : '')
		      )
		    )
		
		    const contentStyle = computed(() => (
		      props.fontSize
		        ? { fontSize: props.fontSize }
		        : null
		    ))
			return {
				classes,
				sizeStyle,
				contentStyle,
			}
		}
	})
</script>

<style lang="sass">

</style>