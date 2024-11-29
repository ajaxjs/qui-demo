<template>
	<view :class="[classes,className]" :style="[defaultStyle,styles]" role="img" :aria-label="alt">
		<view class="q-img__ratio" :style="ratioStyle" key="filler" v-if="!fit"></view>
		<div v-if="isLoading" :key="loading"
			class="q-img__loading absolute-full flex flex-center"
		>
			<slot v-if="$slots.loading" name="loading"></slot>
			<q-spinner v-if="noSpinner !== true" :size="spinnerSize" :color="spinnerColor" />
		</div>
		<view class="q-img__container absolute-full">
			<image :src="imgSrc"
				:class="imgClass"
				:style="imgStyle"
				:crossorigin="crossorigin"
				:draggable="draggable"
				aria-hidden="true"
				:mode="mode"
				@load="onLoad"
				@error="onError"
			/>
		</view>
		
		<view class="q-img__content absolute-full q-anchor--skip">
			<slot v-if="hasError" name="error"></slot>
			<slot v-else></slot>
		</view>
	</view>
</template>

<script>
	import { ref, reactive, computed, watch, toRaw, getCurrentInstance } from 'vue'
	import QSpinner from '../q-spinner/q-spinner.vue'
	import useRatio, { useRatioProps } from '../../composables/private/use-ratio.js'
	import { useAttrProps } from '../../composables/private/use-attr.js'
	import { createComponent } from '../../utils/private/create.js'

	const defaultRatio = 16 / 9

	export default createComponent({
		name: 'QImg',
		components: {
			QSpinner
		},
		props: {
			...useRatioProps,
			...useAttrProps,

			src: String,
			//srcset: String,
			//sizes: String,
			
			alt: String,
			crossorigin: String,
			//decoding: String,
			//referrerpolicy: String,

			draggable: Boolean,

			loading: {
				type: String,
				default: 'lazy'
			},
			fetchpriority: {
				type: String,
				default: 'auto'
			},
			width: String,
			height: String,
			initialRatio: {
				type: [Number, String],
				default: defaultRatio
			},

			placeholderSrc: String,
			// 修改用途：fit为true时，Ratio无效，原功能用mode代替
			fit: Boolean,
			position: {
				type: String,
				default: '50% 50%'
			},

			imgClass: String,
			imgStyle: Object,

			noSpinner: Boolean,
			noNativeMenu: Boolean,
			noTransition: Boolean,

			spinnerColor: String,
			spinnerSize: String,
			
			/* 新特性 */
			mode: {
				type: String,
				default: 'scaleToFill'
			},
			error: String,
		},

		emits: ['load', 'error'],
		
		setup(props, { emit, attrs }) {
			const imgSrc = ref(props.src)
			let naturalRatio = ref(props.initialRatio)
			const ratioStyle = useRatio(props, naturalRatio)
			
			let loadTimer

			const images = computed(()=>[
				props.src,
				props.placeholderSrc
			])
			const vm = getCurrentInstance()
			
			const isLoaded = ref(false)
			const isLoading = ref(true)
			const hasError = ref(false)
			const fmtPx = (sz)=>sz && /^\d+$/.test(sz.trim())?sz.trim()+'px':sz

			const classes = computed(() =>`q-img q-img--${ props.noNativeMenu === true ? 'no-' : '' }menu`)
			const defaultStyle = computed(()=>{
				const size = {width: fmtPx(props.width), height: fmtPx(props.height)}
				Object.keys(size).forEach(key=>size[key]==undefined && delete size[key])
				return size
			})
			
			const imgClass = computed(() => [
					'q-img__image',
					props.imgClass,
					`q-img__image--with${ props.noTransition === true ? 'out' : '' }-transition`,
					(isLoaded.value ? 'q-img__image--loaded' : null),
					(props.fit ? 'fit' : null)
				]
			)

			const imgStyle = computed(() => ({
				...props.imgStyle,
				objectPosition: props.position
			}))
			// 路径监听
			watch(()=>props.src, (src)=>{
				imgSrc.value = src
				isLoading.value = true
				isLoaded.value = false
				hasError.value = false
			})
			// 加载成功时
			const onLoad = (evt)=>{
				
				const {width,height} = evt.detail
				// 真实比例
				naturalRatio.value = height==0 ? 0.5 : width / height
				
				isLoaded.value = true
				isLoading.value = false
				hasError.value = false
				
				emit('load',evt);
			}
			const onError = (err)=>{
				imgSrc.value = props.error
				isLoaded.value = false
				isLoading.value = false
				hasError.value = true
				emit('error', err)
			}
			
			return {
				imgSrc,
				onLoad,
				onError,
				isLoaded,
				isLoading,
				hasError,
				classes,
				defaultStyle,
				ratioStyle,
				imgClass,
				imgStyle,
				images,
			}
		}
	})
</script>

<style>
</style>
