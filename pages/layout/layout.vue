<template>
	<q-page :push="pushSide" :loadingBar="loadBar" :title="titleTxt" :navigationBarColor="titleColor">
		<Lanmu title="Layout 布局功能">
			<view class="q-gutter-md q-pa-sm">
				<view class="">
					<q-btn icon="east" :label="`显示左侧栏${showLeftSide}`" @click="showLeftSide = !showLeftSide"
						color="primary" />
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
		</Lanmu>
		<Lanmu title="q-page 增强功能">
			<view>
				<view>标题栏下显示loadingBar，必需在q-page内才生效。</view>
				<view class="q-gutter-sm">
					<q-btn no-caps label="显示/隐藏" color="primary" @click="loadBar = !loadBar" />
					<q-btn no-caps label="显示进度" color="primary" @click="loadBar = Math.random()" />
					<q-btn no-caps label="设置参数" color="primary" @click="loadBar = {color:'red',stripe:true,size:'10px'}" />
					<q-btn no-caps label="通过全局事件显示" color="primary" @click="loadEvent({color:'teal'})" />
					<q-btn no-caps label="通过全局事件关闭" color="primary" @click="loadEvent(null)" />
					
				</view>
			</view>
			<view class="q-py-sm">
				<view>q-page设置标题栏</view>
				<view class="q-gutter-sm">
					<q-btn color="green" label="设置标题" @click="titleTxt='测试标题'" />
					<q-btn color="green" label="设置标题颜色"
						@click="titleColor={frontColor:'#ffffff',backgroundColor:'#FF6600'}" />
				</view>
			</view>
			<view class="q-py-sm">
				<view>可以结合自定义container的slot，用scroll-view组件实现自定义头、底部的情况下的页内滚动。</view>
				<q-btn label="查看DEMO" color="green" icon-right="east" to="/pages/layout/layout2" />
			</view>
		</Lanmu>

		<!-- 底部内容 -->
		<template #footer>
			<q-footer className="bg-teal-1 text-blue-grey">
				<q-tabs v-model="tab" narrow-indicator dense active-color="blue" align="justify">
					<q-tab no-caps name="mails" icon="mail" label="Mails" />
					<q-tab no-caps name="alarms" icon="alarm" label="Alarms" />
					<q-tab no-caps name="movies" icon="movie" label="Movies" />
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
	const loadBar = ref(false)
	const tab = ref('mails')
	const titleTxt = ref(null)
	const titleColor = ref(null)
	const loadEvent = (opts)=>uni.$emit('loadingBar',opts)
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
	const pushSide = computed(() => isPush.value ? (showLeftSide.value ? 'left' : (showRightSide.value ? 'right' : '')) :
		'')
</script>

<style scoped>

</style>
