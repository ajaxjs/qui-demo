<template>
	<q-page>
		<Lanmu title="Slot Swiper">
			<q-swiper v-model="tab" 
				:indicatorDots="conf.indicatorDots"
				:autoplay="conf.autoplay"
				:vertical="conf.vertical"
				:circular="conf.circular"
			>
				<template #item-mails>
					<view class="fit bg-orange">1.item-mails</view>
				</template>
				<template #item-alarms>
					<view class="fit bg-blue">2.item-alarms</view>
				</template>
				<template #item-movies>
					<view class="fit bg-green">3.item-movies</view>
				</template>
			</q-swiper>
			<view class="text-grey-7">
				当前TAB： <text class="text-bold text-red">{{tab}}</text>
			</view>
			<view class="text-grey">
				<view class="q-pa-sm">配置</view>
				<view class="q-pa-sm row q-gutter-sm">
					<q-checkbox class="uni" v-model="conf.autoplay" label="自动播放" />
					<q-checkbox class="uni" v-model="conf.vertical" label="是否纵向" />
					<q-checkbox class="uni" v-model="conf.circular" label="头尾衔接" />
					<q-checkbox class="uni" v-model="conf.indicatorDots" label="显示DOT" />
				</view>
			</view>
			<HiCode hide title="示例代码" :code="code1"></HiCode>
		</Lanmu>
		<!-- 支持数组渲染 -->
		<Lanmu title="Array Swiper">
			<q-swiper v-model="tab1" :options="options" indicatorDots @click="onClick"></q-swiper>
			<view class="">
				支持options参数数组渲染：{{tab1}}, <br />
				数据格式：
				[{src:'图片地址',title:'图片标题(可选)',to:'连接(可选)'}]
			</view>
			<HiCode hide :code="code2"></HiCode>
		</Lanmu>
	</q-page>
</template>

<script setup>
	import {computed, reactive, ref} from 'vue'
	import {isBoolean} from '@/uni_modules/kv-qui/utils/is.js'
	// tab为字符串，则返回name,为数字，则返回下标
	const tab = ref('mails')
	const tab1 = ref(0)
	const conf = ref({
		indicatorDots: true,
		autoplay: false,
		vertical: false,
		circular: false,
	})
	// 配置
	const options = [
		{src:'https://cdn.quasar.dev/img/parallax1.jpg', title:'带标题的'},
		{src:'https://cdn.quasar.dev/img/parallax2.jpg', title: {text:'带高级标题，设置位置和样式',position:'top',class:'text-yellow'}},
		{src:'https://cdn.quasar.dev/img/mountains.jpg', title:'带连接的', to:'/pages/index/index', target:'tab'},
	]
	const onClick=(evt)=>{
		console.log(evt);
	}
	
	const code1 = computed(()=>{
		const swconf = []
		for (var i in conf.value) {
			const vo = conf.value[i]
			if(isBoolean(vo) && vo){
				swconf.push(i)
			}
		}
		return `参数请参考：https://uniapp.dcloud.net.cn/component/swiper.html

<q-swiper v-model="tab" 
	${swconf.join('\r\n\t')}
>
	<template #item-mails>
		<view class="fit bg-orange">1.item-mails</view>
	</template>
	<template #item-alarms>
		<view class="fit bg-blue">2.item-alarms</view>
	</template>
	<template #item-movies>
		<view class="fit bg-green">3.item-movies</view>
	</template>
</q-swiper>`
	})
	const code2 = [
			{title:'template',code:`<q-swiper v-model="tab1" :options="options" indicatorDots @click="onClick"></q-swiper>`},
		{
		title:'Script',
		code: `export default {
  date(){
    return {
      options: [${options.map(vo=>JSON.stringify(vo)).join('\r\n\t')}]
    }
  }
}`
	}]
</script>

<style lang="sass">
.test
  width: 100%
  height: 200px
</style>
