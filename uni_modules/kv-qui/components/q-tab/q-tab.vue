<template>
	<view ref="rootRef" :class="classes" @click="onClick">
		<view v-if="narrow===false" :class="[ 'q-tab__indicator',tabs.tabProps.value.indicatorClass]"></view>
		<view :ref="blurTargetRef" class="q-focus-helper" :tabindex="-1"></view>
		<view :class="innerClass">
			<slot></slot>
			<q-icon v-if="icon !== void 0" :name="icon" className="q-tab__icon" />
			<view v-if="label !== void 0" class="q-tab__label">{{label}}</view>
			<view v-if="narrow===true" :class="[ 'q-tab__indicator',tabs.tabProps.value.indicatorClass]"></view>
			<!-- alert -->
			<q-icon v-if="alert && alertIcon" className="q-tab__alert-icon" :name="alertIcon" :color="alert !== true?alert:''" />
			<view v-else-if="alert" class="q-tab__alert" :class="alert !== true?'text-'+alert:''"></view>
		</view>
		<q-ripple class="ripple" v-if="!disable" ref="ripple"></q-ripple>
	</view>
</template>

<script>
	import {ref,computed,inject,onMounted,getCurrentInstance} from 'vue'
	import {createComponent} from '../../utils/private/create.js'
	import { tabsKey,emptyRenderFn } from '../../utils/private/symbols.js'
	
	export default createComponent({
		name:'QTab',
		
		props: {
			icon: String,
			label: [Number, String],

			alert: [Boolean, String],
			alertIcon: String,

			name: {
				type: [Number, String],
				default: () => `t_${ id++ }`
			},

			noCaps: Boolean,

			tabindex: [String, Number],
			disable: Boolean,

			contentClass: String,

			ripple: {
				type: [Boolean, Object],
				default: true
			}
		},
		
		setup(props, { slots, emit }) {
			const $tabs = inject(tabsKey, emptyRenderFn)
			if($tabs===emptyRenderFn){
				console.error('QTab component needs to be child of QTabs')
				return emptyRenderFn
			}
			
			const { proxy } = getCurrentInstance()
			const blurTargetRef = ref(null)
			const rootRef = ref(null)
			const tabIndicatorRef = ref(null)
			
			const isActive = computed(() => $tabs.currentModel.value === props.name)
			
			const classes = computed(() =>
				'q-tab relative-position self-stretch flex flex-center text-center'+
				(isActive.value === true ?
					(
						' q-tab--active' +
						($tabs.tabProps.value.activeClass ? ' ' + $tabs.tabProps.value.activeClass : '') +
						($tabs.tabProps.value.activeColor ? ` text-${ $tabs.tabProps.value.activeColor }` : '') +
						($tabs.tabProps.value.activeBgColor ? ` bg-${ $tabs.tabProps.value.activeBgColor }` : '')
					) :
					' q-tab--inactive'
				) +
				(props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? ' q-tab--full' : '') +
				(props.noCaps === true || $tabs.tabProps.value.noCaps === true ? ' q-tab--no-caps' : '') +
				(props.disable === true ? ' disabled' : ' q-focusable q-hoverable cursor-pointer')
				//(routeData !== void 0 ? routeData.linkClass.value : '')
			)
			
			const innerClass = computed(() =>
				'q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable ' +
				($tabs.tabProps.value.inlineLabel === true ? 'row no-wrap q-tab__content--inline' : 'column') +
				(props.contentClass !== void 0 ? ` ${ props.contentClass }` : '')
			)
			
			const narrow = $tabs.tabProps.value.narrowIndicator
			
			
			return {
				tabs: $tabs,
				rootRef,
				classes,
				innerClass,
				narrow,
				
				rootRef,
				blurTargetRef,
				tabIndicatorRef,
				
			}
		},
		methods: {
			onClick(e){
				if (this.disable === true) {
					// we should hinder native navigation though
					/*if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
						stopAndPrevent(e)
					}*/
					return
				}
				
				this.ripple && this.$refs.ripple.ripple(e)
				
				this.tabs.updateModel({ name: this.name })
				
				this.$emit('click', e)
			}
		}
	})
</script>

<style scoped>

</style>