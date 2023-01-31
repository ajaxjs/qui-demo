<template>
	<div class="lanmu q-mx-sm q-mb-sm">
		<div class="title text-subtitle1 text-bold q-pa-sm">{{title}}</div>
		<view class="q-pa-sm" :class="contentClass" :style="contentStyle">
			<slot></slot>
		</view>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			contentClass: String,
			contentStyle: String,
		}
	}
</script>

<style lang="scss">
	.q-page-container > .lanmu:first-child{
		margin-top: 10px;
	}
	.lanmu{
		border:#d9d9d9 solid 1px;
		border-radius: 5px;
		background:#FFF;
		.title{
			border-bottom:#d9d9d9 solid 1px;
		}
	}
</style>