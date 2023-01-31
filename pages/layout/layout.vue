<template>
	<q-page :push="pushSide">
		<!-- 不用container，可直接写入页面内容 -->

		<!-- 使用container，自定义内容容器 -->
		<template #container>
			<scroll-view class="q-page-container" :scroll-y="true" style="max-height: var(--container-height);">
				<view class="q-gutter-md q-pa-sm">
					<view class="">
						<q-btn icon="east" :label="`显示左侧栏${showLeftSide}`" @click="showLeftSide = !showLeftSide" color="primary" />
					</view>
					<view class="">
						<q-btn icon="west" :label="`显示右侧栏${showRightSide}`" @click="showRightSide = !showRightSide"
							color="primary" />
					</view>
					<view class="">
						<q-checkbox v-model="isOverlay" :label="`是否为overlay（即无遮罩）-${isOverlay}`" />
					</view>
					<view class="">
						<q-checkbox v-model="isPersistent" :label="`是否为persistent-（点遮罩不关闭）-${isPersistent}`" />
					</view>
					<view class="">
						<q-checkbox v-model="isPush" :label="`侧栏打开页面是否为push - ${isPush?true:false}`" />
					</view>
					<view class="">
						当前页：{{tab}}
					</view>
				</view>
			</scroll-view>
		</template>

		<!-- 头部内容 -->
		<template #header>
			<q-header bordered className="bg-white">
				<q-btn flat icon="menu" @click="showLeftSide = !showLeftSide" />
				<view class="col row justify-center items-center">
					自定义头部
				</view>
				<q-btn flat icon="menu" @click="showRightSide = !showRightSide" />
			</q-header>
		</template>

		<!-- 底部内容 -->
		<template #footer>
			<q-footer className="bg-teal-1">
				<q-tabs v-model="tab" narrow-indicator dense className="text-teal col" align="justify">
					<q-tab name="mails" icon="mail" label="Mails" />
					<q-tab name="alarms" icon="alarm" label="Alarms" />
					<q-tab name="movies" icon="movie" label="Movies" />
				</q-tabs>
			</q-footer>
		</template>
	</q-page>

	<!-- 左边侧栏 -->
	<q-drawer v-model="showLeftSide" elevated :overlay="isOverlay" :persistent="isPersistent">侧栏</q-drawer>

	<!-- 右边侧栏 -->
	<q-drawer v-model="showRightSide" elevated :overlay="isOverlay" :persistent="isPersistent" side="right">侧栏
	</q-drawer>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue'
	const tab = ref('mails')
	// 侧栏显示时，是否push
	const isPush = ref(true)
	// 显示左边侧栏
	const showLeftSide = ref(false)
	// 显示右边侧栏
	const showRightSide = ref(false)
	// 侧栏是否为透明层（不要遮罩）
	const isOverlay = ref(false)
	// 点击遮罩是否关闭侧栏
	const isPersistent = ref(false)
	// 页面是否push
	const pushSide = computed(() => isPush.value ? (showLeftSide.value ? 'left' : (showRightSide.value ? 'right' : '')) : '')
</script>

<style scoped>

</style>
