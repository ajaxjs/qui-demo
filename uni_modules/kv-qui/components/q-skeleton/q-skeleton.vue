<template>
	<view :class="classes" :style="style"></view>
</template>

<script>
	import rndSkeleton from './rnd-skeleton.vue'
	import useSkeleton, {useSkeletonProps,skeletonTypes,skeletonAnimations} from './use-skeleton.js'
	export default {
		components: {rndSkeleton},
		props: useSkeletonProps,
		setup(props){
			return useSkeleton(props)
		}
	}
</script>

<style lang="sass">
</style>