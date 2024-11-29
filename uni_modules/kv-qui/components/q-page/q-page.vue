<template>
	<view id="page" class="q-page" :class="classes" :style="pageStyle">
		<LoadingBar :option="loadingBar" />
		<slot name="header"></slot>
		<slot name="container" v-if="$slots.container"></slot>
		<view v-else class="q-page-container" :class="[containerClass]">
			<slot></slot>
		</view>
		<slot name="drawer"></slot>
		<slot name="footer"></slot>
	</view>
</template>

<script>
	import {
		ref,
		computed,
		provide,
		inject,
		watch,
		onUnmounted,
		getCurrentInstance,
		nextTick
	} from 'vue'
	import {
		useAttrProps
	} from '../../composables/private/use-attr.js'
	import {
		isObject
	} from '../../utils/is.js'
	import {
		quasarKey
	} from '../../utils/private/symbols.js'
	import {
		currentRoute,
		isTabPage,
	} from '../../utils/uniapp/page.js'
	import {
		getUniPlatform
	} from '../../utils/uniapp/system.js'
	import { uid } from '../../utils.js'
	import LoadingBar from './LoadingBar.vue'

	export default {
		components: {
			LoadingBar
		},
		props: {
			...useAttrProps,
			// 侧栏宽度
			pushWidth: {
				type: Number,
				default: 300
			},
			// 打开侧栏
			push: String,
			// 设置标题
			title: String,
			// 标题栏颜色
			navigationBarColor: Object,
			loadingBar: [Boolean, Object, String, Number],
			// 页面内容样式
			containerClass: [Object, Array, String],
		},
		emits: ['update:push'],
		setup(props, {
			slots,
			emit,
			attrs
		}) {
			const $q = inject(quasarKey)
			const noop = () => {}
			//const currPage = getCurrentPages().pop();
			const sys = getUniPlatform()

			// 自定义头部
			const isCustom = currentRoute().style.navigationStyle == 'custom';
			const is_tabpg = isTabPage()
			
			// 侧栏开启方向
			const push_dir = ref(props.push)
			// push动画进行中
			const pushing = ref(false);
			
			const pushTrigger = (dir)=>{
				pushing.value = true;
				push_dir.value = dir;
				emit('update:push', push_dir.value)
				uni.$emit('drawer-pushed', push_dir.value)
				setTimeout(() => pushing.value = !pushing.value, 150)
			}
			watch(() => props.push, pushTrigger)
			// 事件触发
			uni.$on('drawer-open', (dir) => pushTrigger(dir))
			uni.$on('drawer-close', () => pushTrigger(''))
			uni.$on('drawer-toggle', (dir) => pushTrigger(push_dir.value ? '' : dir))
			

			//const { headHeight, footHeight, brand } = $q.config;
			let {
				windowWidth,
				windowHeight,
				statusBarHeight,
				safeAreaInsets
			} = uni.getWindowInfo();
			
			let pageWidth = windowWidth;
			let headHeight = slots.header ? $q.config.headHeight : 0;
			let footHeight = slots.footer ? $q.config.footHeight : 0;
			let bottomSpace = is_tabpg ? 0 : safeAreaInsets.bottom;
			let pageHeight = windowHeight;
			let containerHeight = pageHeight - headHeight - footHeight - bottomSpace;
			if (isCustom) {
				containerHeight -= statusBarHeight
			}

			// 监听屏幕方向-
			const isPortrait = ref(true);
			const windowResizeCallback = (evt) => {
				isPortrait.value = evt.deviceOrientation == 'landscape';
			}
			uni.onWindowResize(windowResizeCallback)
			onUnmounted(() => uni.offWindowResize(windowResizeCallback))


			// 设置CSS变量
			const pageStyle = computed(() => {
				const cssVar = ref(($q.config.config || {}).brand || {})
				const cssVarArr = Object.keys(cssVar.value).map(key => {
					return `--q-${key}: ${cssVar.value[key]}`;
				}).concat([
					`--page-width: ${pageWidth}px;`,
					`--page-height: ${pageHeight}px;`,
					`--head-height: ${headHeight}px;`,
					`--foot-height: ${footHeight}px;`,
					`--container-height: ${containerHeight}px;`,
					`--push-width: ${props.pushWidth}px;`,
					`--bottom-space: ${bottomSpace}px`,
					`--header-space: ${headHeight + (isCustom ? statusBarHeight : 0)}px`,
					`--footer-space: ${footHeight + bottomSpace}px`,
					//`margin-top: ${isCustom ? statusBarHeight : 0}px;`,
					//(slots.footer ? ` padding-bottom: ${safeAreaInsets.bottom + footHeight}px;` : ''),
					(push_dir.value ? ` transform: translateX(${(push_dir.value=='left'?'':'-') + props.pushWidth}px);` : '')
				]);
				return cssVarArr;
			})
			// class
			const classes = computed(() => {
				const cls = [
					slots.footer ? 'has-foot' : '',
					slots.header ? 'has-head' : '',
					props.customPage ? 'no-title' : '',
					isPortrait ? 'portrait' : 'landscape',
					push_dir.value ? 'q-page-pushed' : '',
					push_dir.value == "left" ? 'pushed-left' : '',
					push_dir.value == "right" ? 'pushed-right' : '',
					pushing.value ? 'pushing' : ''
				]
				return cls
			})

			// 设置标题栏
			const setTitle = (title) => {
				if (title) uni.setNavigationBarTitle({title})
			}
			setTitle(props.title)
			watch(() => props.title, setTitle)
			// 设置标题栏样式
			const setNavigationBarColor = (navSet) => {
				if (navSet && Object.keys(navSet).filter(vo => ['frontColor', 'backgroundColor'].includes(vo))) {
					uni.setNavigationBarColor(Object.assign({
						complete: noop
					}, navSet))
				}
			}
			setNavigationBarColor(props.navigationBarColor)
			watch(() => props.navigationBarColor, setNavigationBarColor)
			
			return {
				classes,
				pageStyle,
				setTitle,
				push_dir,
			}
		},
		methods: {
			getPageRect(){
				const query = uni.createSelectorQuery().in(this);
				return new Promise((resolve,reject)=>{
					try{
						nextTick(()=>{
							query.select(".q-page").boundingClientRect(resolve).exec()
						})
					}catch(e){
						reject(e)
					}
				})
			},
			// 页面滚动
			scrollToBottom(duration){
				nextTick(()=>{
					duration = duration || 300;
					this.getPageRect().then(({height})=>uni.pageScrollTo({scrollTop:height, duration}))
				})
			}
		}
	}
</script>

<style lang="sass">

</style>