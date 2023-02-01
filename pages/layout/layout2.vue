<template>
	<q-page>
		<!-- 
			通过插槽自定义页面容器
			如：用scroll-view作为容器，可以制作简单的页内滚效果
			注意要设置高度：style="max-height: var(--container-height);"
		-->
		<template #container>
			<scroll-view class="q-page-container" :scroll-y="true" style="max-height: var(--container-height);">

				<view class="testColor q-pa-sm" v-for="i in 50" :key="i">展示内容{{i}}</view>
			</scroll-view>
		</template>

		<!-- 底部内容 -->
		<template #footer>
			<q-footer bordered>底部内容</q-footer>
		</template>
	</q-page>
</template>

<script>
</script>

<style>
</style>
