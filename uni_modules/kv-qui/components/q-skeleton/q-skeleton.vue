<template>
	<view :class="classes" :style="style"></view>
</template>

<script>
	import useSkeleton, {useSkeletonProps,skeletonTypes,skeletonAnimations} from './use-skeleton.js'
	export default {
		props: useSkeletonProps,
		setup(props){
			return useSkeleton(props)
		}
	}
</script>

<style lang="sass">
</style>