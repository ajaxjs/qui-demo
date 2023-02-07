<template>
	<q-page>
		
		<Lanmu title="JSON渲染">
			<view class="q-pa-sm">
				<view class="row q-col-gutter-sm" v-for="(row,i) in formatSkt(ske)" :key="i">
					<view :class="vo.col" v-for="(vo,k) in row" :key="k">
						<template v-if="vo.type!== 'empty'">
							<q-skeleton :type="vo.type" v-for="ki in vo.len" :key="ki" />
						</template>
					</view>
				</view>
			</view>
		</Lanmu>
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
	</q-page>
</template>

<script setup>
	import {skeletonTypes, skeletonAnimations} from '../../uni_modules/kv-qui/components/q-skeleton/use-skeleton.js'
	import is from '../../uni_modules/kv-qui/utils/is.js'
	
	// 数据格式
	const fmt = [
		{
			col: 'auto',
			align: 'around', 
			gutter: 'sm',
			class: '',
			items: [
				{type: 'avatar'},
				{type:'text', len: 5, col:true}
			],
		}
	]
	
	const ske = [
		[{type: 'avatar'},{type:'text', len: 5, col:true}],
		[{type:'empty', col:true},{type:'btn'},{type:'btn'}]
	]
	function formatSkt(ske){
		if(is.array(ske)){
			ske.forEach(vo=>{
				if(is.array(vo)){
					vo = formatSkt(vo)
				}else if(is.object(vo)){
					vo.len = vo.len || 1
					if(vo.col){
						vo.col = vo.col===true ? 'col' : 'col-'+vo.col
					}
					
				}
			})
		}
		console.log(ske);
		return ske
	}
</script>

<style lang="sass">
.custom-skeleton-border
  border-radius: 10px 0 24px 4px
  border: 1px solid #aaa
</style>