<template>
	<web-view :webview-styles="webviewStyles" :src="url" :update-title="true" @load="onLoaded" />
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				webviewStyles: {
					progress: {
						color: '#F33'
					}
				}
			}
		},
		onLoad({ url }) {
			this.url = url
		},
	}
</script>

<style lang="scss">
	
</style>
