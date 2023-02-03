<template>
	<view class="q-page column" :class="[classes,className]" :style="pageStyle">
		<q-linear-progress indeterminate v-if="loadingBar" class="q-page-loading-bar"></q-linear-progress>
		<slot name="header"></slot>
		<slot name="container" v-if="$slots.container"></slot>
		<view v-else class="q-page-container">
			<slot></slot>
		</view>
		<slot name="footer"></slot>
	</view>
</template>

<script>
	import { computed, inject, watch } from 'vue'
	import {useAttrProps} from '../../composables/private/use-attr.js'
	import { isObject } from '../../utils/is.js'
	import { quasarKey } from '../../utils/private/symbols.js'
	
	
	export default {
		props: {
			...useAttrProps,
			// 侧栏宽度
			pushWidth: {
				type: Number,
				default: 300
			},
			push: String,
			// 设置标题
			title: String,
			navigationBarColor: Object,
			loadingBar: Boolean,
		},
		setup(props, { slots, emit }){
			const $q = inject(quasarKey)
			const noop = ()=>{}
			
			const isCustom = $q.utils.getRoute('navigationStyle')=='custom'
			
			const {headHeight,footHeight} = $q.config
			const {windowHeight,statusBarHeight,safeAreaInsets, uniPlatform} = $q.platform
			const realHeadH = slots.header ? headHeight : 0
			const realFootH = slots.footer ? footHeight : 0
			const realStatH = isCustom ? statusBarHeight : 0
			// 头尾空白高度，真实的头高+底高+状态栏高+底部安全空白高+H5下标题栏高
			const spaceHeight = realHeadH + realFootH + realStatH + safeAreaInsets.bottom + (uniPlatform=='web' && !isCustom?44:0)
			
			const pageStyle = computed(()=>(`--head-height: ${realHeadH}px; --foot-height: ${realFootH}px; --container-height: calc(100vh - ${spaceHeight}px); `)
			+ (slots.header ? `padding-top: ${realStatH + headHeight}px;` : '')
			+ (slots.footer ? ` padding-bottom: ${safeAreaInsets.bottom + footHeight}px;` : '')
			+ (props.push ? ` transform: translateX(${(props.push=='left'?'':'-') + props.pushWidth}px);` : ''))
			
			// class
			const classes = computed(()=>({
				'q-page-pushed': props.push,
				'has-foot': slots.footer,
				'has-head': slots.header,
				'no-title': props.customPage
			}))
			
			// 设置标题栏
			if(props.title) uni.setNavigationBarTitle({title: props.title})
			const navSet = props.navigationBarColor
			if(navSet && Object.keys(navSet).filter(vo=>['frontColor','backgroundColor'].includes(vo))){
				uni.setNavigationBarColor(Object.assign({complete: noop},navSet))
			}
			
			return {
				classes,
				pageStyle,
			}
		}
	}
</script>

<style lang="sass">

</style>