<template>
	<view :class="[classes,className]" role="tablist">
		<view :class="innerClass">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import { ref, computed, watch, onMounted, onActivated, provide, getCurrentInstance } from 'vue'
	import {createComponent} from '../../utils/private/create.js'
	import useTick from '../../composables/private/use-tick.js'
	import {useAttrProps} from '../../composables/private/use-attr.js'
	import useTimeout from '../../composables/private/use-timeout.js'
	import { noop } from '../../utils/event.js'
	import { tabsKey } from '../../utils/private/symbols.js'

	function getIndicatorClass(color, top, vertical) {
		const pos = vertical === true ? ['left', 'right'] : ['top', 'bottom']

		return `absolute-${ top === true ? pos[ 0 ] : pos[ 1 ] }${ color ? ` text-${ color }` : '' }`
	}

	const alignValues = ['left', 'center', 'right', 'justify']

	export default createComponent({
		name: 'QTabs',

		props: {
			...useAttrProps,
			modelValue: [Number, String],

			align: {
				type: String,
				default: 'center',
				validator: v => alignValues.includes(v)
			},
			breakpoint: {
				type: [String, Number],
				default: 600
			},

			vertical: Boolean,
			shrink: Boolean,
			stretch: Boolean,

			activeClass: String,
			activeColor: String,
			activeBgColor: String,
			indicatorColor: String,
			leftIcon: String,
			rightIcon: String,

			outsideArrows: Boolean,
			mobileArrows: Boolean,

			switchIndicator: Boolean,

			narrowIndicator: Boolean,
			inlineLabel: Boolean,
			noCaps: Boolean,

			dense: Boolean,

			contentClass: String,
			// 禁用，小程序冲突
			//'onUpdate:modelValue': [Function, Array]
		},
		setup(props, { slots, emit}) {
			const { proxy } = getCurrentInstance()
			const { $q } = proxy

			const currentModel = ref(props.modelValue)
			const scrollable = ref(true)
			const leftArrow = ref(true)
			const rightArrow = ref(false)
			const justify = ref(false)

			const arrowsEnabled = computed(() =>
				//$q.platform.is.desktop === true || props.mobileArrows === true
				props.mobileArrows === true
			)

			const tabDataList = []
			const tabDataListLen = ref(0)
			const hasFocus = ref(false)

			const alignClass = computed(() => {
				return `q-tabs__content--align-${ props.align||'justify' }`
			})

			const classes = computed(() =>
				'q-tabs row no-wrap items-center' +
				` q-tabs--${ scrollable.value === true ? '' : 'not-' }scrollable` +
				` q-tabs--${ props.vertical === true ? 'vertical' : 'horizontal' }` +
				` q-tabs__arrows--${ arrowsEnabled.value === true && props.outsideArrows === true ? 'outside' : 'inside' }` +
				(props.dense === true ? ' q-tabs--dense' : '') +
				(props.shrink === true ? ' col-shrink' : '') +
				(props.stretch === true ? ' self-stretch' : '')
			)

			const innerClass = computed(() =>
				'q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position ' +
				alignClass.value +
				(props.contentClass !== void 0 ? ` ${ props.contentClass }` : '') +
				' scroll'
				//($q.platform.is.mobile === true ? ' scroll' : '')
			)
			
			watch(() => props.modelValue, name => {
				updateModel({ name, setCurrent: true, skipEmit: true })
			})
			
			const tabProps = computed(() => ({
				activeClass: props.activeClass,
				activeColor: props.activeColor,
				activeBgColor: props.activeBgColor,
				indicatorClass: getIndicatorClass(
					props.indicatorColor,
					props.switchIndicator,
					props.vertical
				),
				narrowIndicator: props.narrowIndicator,
				inlineLabel: props.inlineLabel,
				noCaps: props.noCaps
			}))
			
			const hasActiveTab = computed(() => {
				const len = tabDataListLen.value
				const val = currentModel.value
			
				for (let i = 0; i < len; i++) {
					if (tabDataList[i].name.value === val) {
						return true
					}
				}
			
				return false
			})
			function updateModel({ name, setCurrent, skipEmit, fromRoute}) {
				if (currentModel.value !== name) {
					if (skipEmit !== true) {
						emit('update:modelValue', name)
					}
			
					if (setCurrent === true) {
						//animate(currentModel.value, name)
						currentModel.value = name
					}
				}
			}
			const $tabs = {
				currentModel,
				tabProps,
				hasFocus,
				hasActiveTab,

				//registerTab,
				//unregisterTab,

				//verifyRouteModel,
				updateModel,
				//onKbdNavigate,

				//avoidRouteWatcher: false // false | string (uid)
			}
			provide(tabsKey, $tabs)
			
			onMounted((e)=>{
				//updateContainer()
			})
			

			return {
				classes,
				innerClass
			}
		},
		mounted(){
			
		}
	})
</script>

<style>
</style>
