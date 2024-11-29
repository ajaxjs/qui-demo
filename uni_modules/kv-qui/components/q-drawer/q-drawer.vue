<template>
	<view :class="[classes,className]" class="column" :style="[styles,style].filter(vo=>vo)">
		<slot name="before"></slot>
		<view class="q-drawer__content col">
			<slot></slot>
		</view>
		<slot name="after"></slot>
		<view v-if="elevated" class="q-layout__shadow absolute-full overflow-hidden no-pointer-events"></view>
	</view>
	<template v-if="overlay">
		<view v-show="showing"
			class="q-drawer__backdrop"
			:class="backgropClass"
			@click="onClickBackGroup"
			@touchmove.stop.prevent
		>
		</view>
	</template>
</template>

<script>
	import { ref, computed, watch, reactive, onMounted, onBeforeUnmount, nextTick, inject, getCurrentInstance } from 'vue'
	import useDark, { useDarkProps } from '../../composables/private/use-dark.js'
	import { useAttrProps } from '../../composables/private/use-attr.js'
	import useModelToggle, { useModelToggleProps, useModelToggleEmits } from '../../composables/private/use-model-toggle.js'
	import { isNumber } from '../../utils/is.js'
	import { quasarKey } from '../../utils/private/symbols.js'
	
	const duration = 150
	export default {
		props: {
			...useDarkProps,
			...useAttrProps,
			...useModelToggleProps,
			
			side: {
				type: String,
				default: 'left',
				validator: v => ['left', 'right'].includes(v)
			},

			width: {
				type: Number,
				default: 300
			},

			bordered: Boolean,
			elevated: Boolean,
			
			overlay: Boolean,
			persistent: Boolean,
		},
		
		emits: [...useModelToggleEmits],
		
		setup(props, { slots, emit, attrs }){
			const $q = inject(quasarKey)
			const isDark = useDark(props, $q)
			const showing = ref(props.modelValue === true)
			const fixed = computed(() => props.overlay === true )
			uni.$on('drawer-pushed', (dir)=>{
				showing.value = props.side == dir
			})
			const classes = computed(() =>
				`q-drawer q-drawer--${ props.side }` +
				(showing.value === true ? ' q-drawer__show' : '') +
				//(flagMiniAnimate.value === true ? ' q-drawer--mini-animate' : '') +
				(props.bordered === true ? ' q-drawer--bordered' : '') +
				(isDark.value === true ? ' q-drawer--dark q-dark' : '')
				//(fixed.value === true ? ' fixed' : '')
			)
			const backgropClass = computed(()=>({
				'q-drawer__backdrop__show': showing.value
			}))
			
			const style = reactive({
				width: `${ props.width+(isNumber(props.width)?'px':'') }`,
			})
			
			//
			const { show, hide } = useModelToggle({showing})
			// 点击遮罩层
			function onClickBackGroup(evt){
				if(props.persistent !== true){
					hide(evt)
					uni.$emit('drawer-close')
				}
			}
			return {
				showing,
				classes,
				style,
				show,
				hide,
				backgropClass,
				onClickBackGroup,
			}
		}
	}
</script>

<style>
</style>
