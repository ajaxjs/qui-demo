<template>
	<web-view :src="url"></web-view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue';

	const url = ref()
	onLoad((prms) => {
		url.value = prms.url
		console.log('prms',prms);
	})
	
</script>

<style>
</style>