<template>
	<q-page>
		<Lanmu title="类型">
			<view class="row q-col-gutter-md">
				<view class="col-6" v-for="(vo, i) in skeletonTypes" :key="i">
					<q-skeleton :type="vo" />
					<view>type="{{vo}}"</view>
				</view>
			</view>
		</Lanmu>
		<Lanmu title="动画">
			<view class="row q-col-gutter-md">
				<view class="col-6" v-for="(vo, i) in skeletonAnimations" :key="i">
					<q-skeleton :animation="vo" />
					<view>animation="{{vo}}"</view>
				</view>
			</view>
		</Lanmu>
		<Lanmu title="样式">
			<view class="lm-title q-mb-lg">大小</view>
			<view class="q-gutter-y-md">
				<view><q-skeleton type="circle" size="100px" /></view>
				<view><q-skeleton width="150px" /></view>
				<view><q-skeleton height="150px" /></view>
				<view><q-skeleton size="50px" /></view>
				<view><q-skeleton width="200px" height="100px" /></view>
			</view>
			<view class="lm-title q-mb-lg">带边框</view>
			<div class="q-gutter-y-md">
				<view><q-skeleton bordered type="circle" /></view>
				<view><q-skeleton bordered /></view>
				<view><q-skeleton bordered square /></view>
				<view><q-skeleton width="100px" height="50px" class="custom-skeleton-border" /></view>
			</div>
			<view class="lm-title q-mb-lg">自定义颜色</view>
			<div class="q-gutter-y-md">
				<view><q-skeleton class="bg-accent" type="circle" /></view>
				<view><q-skeleton class="bg-teal" /></view>
				<view><q-skeleton class="bg-orange" animation="pulse-y" /></view>
				<view><q-skeleton class="bg-indigo" /></view>
			</div>
			<view class="lm-title q-mb-lg">方条</view>
			<q-skeleton square />
		</Lanmu>
		<Lanmu title="实战">
			<q-item>
				<q-item-section avatar>
					<q-skeleton type="avatar" animation="fade" />
				</q-item-section>
				<q-item-section>
					<q-item-label>
						<q-skeleton type="text" animation="fade" />
					</q-item-label>
					<q-item-label caption>
						<q-skeleton type="text" animation="fade" />
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-skeleton height="200px" square animation="fade" />
			<q-card-section>
				<q-skeleton type="text" class="text-subtitle2" animation="fade" />
				<q-skeleton type="text" width="50%" class="text-subtitle2" animation="fade" />
			</q-card-section>
		</Lanmu>
			
		<Lanmu title="JSON数据渲染">
			<view class="q-pa-sm">
				<q-skeleton-render :options="skeNew" gutter="y-sm" />
				<view class="bg-blue-grey-2 text-blue-grey q-pa-sm q-mt-md rounded-borders">
					为了降低页面复杂度，q-skeleton-render 可以通过接收一个JSON数组来渲染骨架页。可以通过：flex:而已、col:比例、gutter:间距、align:对齐等参数设置排版。具体使用方法，请参数说明上档。
				</view>
			</view>
		</Lanmu>
	</q-page>
</template>

<script setup>
	import {skeletonTypes, skeletonAnimations} from '../../uni_modules/kv-qui/components/q-skeleton/use-skeleton.js'
	import is from '../../uni_modules/kv-qui/utils/is.js'
	
	// 数据格式，数据分为‘块’和‘组’，数组中每个一级元素为一个块。块为对象时，可以设置当前块。
	// 块为数组时，相当于items。意味着该块无其它参数。
	// 每个块里面的items为一个组，可以放若干个骨架元素。
	// 每个骨架元素，由q-skeleton的参数加上排版参数组成。如：flex:而已/col:比例/gutter:间距/align:对齐。具体参数css辅助样式。
	const skeNew = [
		{
			flex: 'row',
			align: 'around',
			gutter:'x-sm',
			items: [{type: 'avatar'},{type:'text', len: 3, col:true}]
		},
		[{height: '150px', col:12}],
		[{type:'btn', len:2, align: 'justify-end',flex:'row', gutter:'x-sm'}]
	]
	
</script>

<style lang="sass">
.custom-skeleton-border
  border-radius: 10px 0 24px 4px
  border: 1px solid #aaa
</style>