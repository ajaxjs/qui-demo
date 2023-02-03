<template>
	<q-page>
		<Lanmu title="Headings">
			<view :class="'text-h'+i" v-for="i in 6" :key="i">
				Headline {{i}}
			</view>
			<view :class="'text-subtitle'+i" v-for="i in 2" :key="i">
				{{'text-subtitle'+i}}
			</view>
			<view :class="'text-body'+i" v-for="i in 2" :key="i">
				{{'text-body'+i}}
			</view>
			<view :class="'text-'+i" v-for="i in ['caption','overline']" :key="i">
				{{'text-'+i}}
			</view>
		</Lanmu>
		<Lanmu title="Font Weights">
			<view :class="'text-weight-'+vo" v-for="vo in fontWt" :key="vo">
				{{'text-weight-'+vo}}
			</view>
		</Lanmu>
		<Lanmu title="CSS Helper Classes">
			<view class="q-mb-xs q-pa-sm" :class="vo" v-for="vo in fontAgign" :key="vo" style="border:#ccc solid 1px;">
				{{vo}}
			</view>
		</Lanmu>
	</q-page>
</template>

<script setup>
	import { ref } from "vue";
	
	const fontWt = ['thin','light','regular','medium','bold','bolder']
	const fontAgign = ['text-right','text-left','text-center','text-justify','text-bold','text-italic','text-no-wrap','text-strike','text-uppercase','text-lowercase','text-capitalize']
	// 计算标题大小
	/*let max = 48
	let step = 6
	let headSize = ref([])
	let headVers = []
	for (let i=1; i<=6; i++) {
		const size = max/14
		const line = i>2 ? size * 1.4 : size
		headVers.push(`$h${i}:        (size: ${size.toFixed(2)}rem,     line-height: ${line.toFixed(2)}rem,     letter-spacing: -.01562em, weight: 300) !default`)
		headSize.value.push({size,line})
		max = max-step
	}
	console.log(headVers.join('\r\n'));*/
	
	
</script>

<style>
</style>