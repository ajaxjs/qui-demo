<template>
	<q-page>
		<Lanmu title="QLink 连接组件">
			<q-link to="/pages/components/card" label="内部连接" /> -
			<q-link href="https://cn.vuejs.org/" label="外部连接" /> -
			<q-link mp="wxa91ff29be8dbb11c://pages/components/btn?id=12" label="Wechat Mini Program" />
			<HiCode hide title="示例代码" :code="Qlink"></HiCode>
		</Lanmu>
		<Lanmu title="JS方法跳转">
			<view class="q-gutter-md">
				<view @click="$uni.openUrl({to:'/pages/components/btn?id=12'})">
					JS跳转连接1
				</view>
				<view @click="$uni.openUrl" data-to="/pages/components/btn?id=12">
					JS跳转连接
				</view>
				<view @click="$uni.openUrl" data-href="https://mp.weixin.qq.com">
					URL跳转连接
				</view>
				<view @click="$uni.openUrl" data-mp="wxa91ff29be8dbb11c://pages/components/btn?id=12#test">
					小程序跳转
				</view>
			</view>
			<HiCode hide title="示例代码" :code="code2"></HiCode>
		</Lanmu>
	</q-page>
</template>

<script setup>

const Qlink = `<q-link to="/pages/components/card" label="内部连接" /> -
<q-link href="https://cn.vuejs.org/" label="外部连接" /> -
<q-link mp="wxa91ff29be8dbb11c://pages/components/btn?id=12" label="Wechat Mini Program" />`

const code2 = `<view @click="$uni.openUrl({to:'/pages/components/btn?id=12'})">
	JS跳转连接1
</view>
<view @click="$uni.openUrl" data-to="/pages/components/btn?id=12">
	JS跳转连接
</view>
<view @click="$uni.openUrl" data-root="/pages/index/broswer" data-url="https://vip.qixingtang.com/show-513.html">
	URL跳转连接
</view>
<view @click="$uni.openUrl" data-mp="wxa91ff29be8dbb11c://pages/components/btn?id=12#test">
	小程序跳转
</view>`
</script>

<style>
</style>