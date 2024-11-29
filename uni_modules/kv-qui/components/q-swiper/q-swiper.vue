<template>
	<swiper :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
		:indicator-active-color="indicatorActiveColor" :active-class="activeClass" :changing-class="changingClass"
		:autoplay="autoplay" :current="current" :interval="interval" :duration="duration" :circular="circular"
		:vertical="vertical" :previous-margin="previousMargin" :next-margin="nextMargin" :acceleration="acceleration"
		:disable-programmatic-animation="disableProgrammaticAnimation" :display-multiple-items="displayMultipleItems"
		:skip-hidden-item-layout="skipHiddenItemLayout" :disable-touch="disableTouch" :touchable="touchable"
		:easing-function="easingFunction" @change="onChange" @transition="emitEvent('transition', $event)"
		@animationfinish="emitEvent('animationfinish', $event)">
		<!-- swiper微信APP不能使用solt -->
		<swiper-item v-for="(vo, i) in items" :key="i" @click.stop="onClick($event,i)">
			<!-- 连接事件等待完成 (q-img比例待修复) -->
			<q-img v-if="options" :src="vo.src" className="absolute-full" fit>
				<view :class="titleFmt(vo.title,'class')" v-if="vo.title">{{titleFmt(vo.title,'text')}}</view>
			</q-img>
			<slot v-else :name="vo"></slot>
		</swiper-item>
	</swiper>
</template>

<script>
	import { ref, getCurrentInstance, watch, computed } from 'vue'
	import { useSwipeProps } from './useSwipe.js'
	import { isNumber, isObject } from '../../utils/is.js'

	export default {
		props: {
			...useSwipeProps,
			// 输入数字，则返回下标，字符串则返回name
			modelValue: [Number, String],
			// 数据:[{src:'图片路径',to:'站内路径',href:'用web-view访问的网址',mp:'小程序连接',onClick(){}}]
			options: Array,
		},
		setup(props, { slots, emit }) {
			const { proxy: { $uni } } = getCurrentInstance()
			// 内容，options，或slots
			const items = computed(()=>{
				if(props.options){
					return props.options.map((vo, i) => {
						vo.name = vo.name || 'item-' + i
						return vo
					})
				}else{
					return Object.keys(slots).filter(v => v.substring(0, 5) == 'item-')
				}
			});
			
			const names = props.options ? items.value.map(vo => vo.name) : items.value.map(vo => vo.substr(5))
			// 是否返回下标
			const isRetNum = isNumber(props.modelValue)
			// 当前下标
			const current = ref(isRetNum ? props.modelValue : (names.indexOf(props.modelValue) < 0 ? 0 : names.indexOf(
				props.modelValue)))

			// 切换后
			const onChange = (evt) => {
				current.value = evt.detail.current
				const name = names[current.value]
				emit('update:modelValue', isRetNum ? current.value : names[current.value])
				if (evt) {
					Object.assign(evt.detail, { name })
					emit('change', evt)
				}
			}
			// 点击事件
			const onClick = (evt, i) => {
				evt.detail.index = i
				if (props.options) {
					const item = props.options[i]
					$uni.openUrl(item)
					evt.detail.item = item
				}
				emitEvent('click', evt)
			}
			// 其他事件
			const emitEvent = (name, evt) => emit(name, evt)
			// 格式化标题
			const titleFmt = (text, key) => {
				if (isObject(text)) {
					const classes = ['absolute-' + (text.position || 'bottom'), text.class]
					text.class = classes
				} else {
					text = { text, class: 'absolute-bottom' }
				}
				return text[key]
			}

			return {
				current,
				items,
				titleFmt,

				onClick,
				onChange,
				emitEvent,
			}
		}
	}
</script>

<style>
</style>