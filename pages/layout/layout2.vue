<template>
	<q-page :loadingBar="loadBar">
		<!-- 
			通过插槽自定义页面容器
			如：用scroll-view作为容器，可以制作简单的页内滚效果
			注意，需要添加.q-page-container样式
		-->
		<template #container>
			<scroll-view class="q-page-container" :scroll-y="true">
				<view class="q-pa-sm">
					仅Body部分滚动
					<q-btn no-caps :icon="'visibility'+(loadBar?'_off':'')" :label="(loadBar?'隐藏':'显示')+' loadingBar'" color="primary" @click="loadBar = !loadBar" />
				</view>
				<view class="testColor q-pa-sm" v-for="i in 50" :key="i">展示内容{{i}}</view>
			</scroll-view>
		</template>
		
		<!-- 头部内容 -->
		<template #header>
			<q-header bordered>
				<q-btn flat icon="arrow_back" @click="backPrev" color="red" />
				<view class="col row justify-center items-center text-teal text-bold" style="margin-right: 56px;">
					自定义头部
				</view>
			</q-header>
		</template>
		
		<!-- 底部内容 -->
		<template #footer>
			<q-footer bordered>底部内容</q-footer>
		</template>
	</q-page>
</template>

<script setup>
import { ref } from "vue";
	const backPrev = ()=>uni.navigateBack()
	const loadBar = ref(false)
</script>

<style>
</style>
