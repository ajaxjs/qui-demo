<template>
	<button
		class="q-btn q-btn-item non-selectable no-outline"
		:formType="type"
		:class="classes"
		:style="style"
		:tabindex="attributes.tabindex"
		:disabled="disable"
		@click="onTriggerEvent('click',$event)"
		@keydown="onTriggerEvent('keydown',$event)"
		@keyup="onTriggerEvent('keyup',$event)"
		@mousedown="onTriggerEvent('mousedown',$event)"
		@touchstart="onTriggerEvent('touchstart',$event)"
	>
		<view 
			class="q-btn__content text-center col items-center q-anchor--skip"
			:class="innerClasses"
		>
			<q-icon v-if="icon" :name="icon" role="img" :left="stack === false && hasLabel === true" />
			{{label}}
			<slot />
			<q-icon v-if="iconRight" :name="iconRight" :right="stack === false && hasLabel === true" />
		</view>
		<!-- Percentage -->
		<view v-if="loading === true && percentage !== void 0" class="q-btn__progress absolute-full overflow-hidden"
			:class="{'q-btn__progress--dark': darkPercentage}"
		>
			<view
				class="q-btn__progress-indicator fit block"
				:style="percentageStyle"
			></view>
		</view>
		<!-- Loading -->
		<view v-if="loading" class="absolute-full flex flex-center" key="loading">
			<slot v-if="$slots.loading" name="loading"></slot>
			<q-spinner v-else />
		</view>
		<q-ripple class="ripple" v-if="!disable && ripple" :color="typeof(ripple) == 'string'?ripple:''" ref="ripple"></q-ripple>
	</button>
</template>

<script>
	import { ref, computed, getCurrentInstance } from 'vue'
	import { stop, prevent, stopAndPrevent, listenOpts } from '../../utils/event.js'
	import useBtn, { useBtnProps } from './use-btn.js'
	import useLink,{ useLinkProps } from '../../composables/private/use-link.js'
	
	import QIcon from '../q-icon/q-icon.vue'
	import QSpinner from '../q-spinner/q-spinner.vue'
	import QRipple from '../q-ripple/q-ripple.vue'
	import {openUrl} from '../../utils/uniapp/open-url.js'

	let touchTarget = null, keyboardTarget = null, mouseTarget = null

	export default {
		name: 'QBtn',
		components: {QIcon, QSpinner, QRipple},
		props: {
			...useBtnProps,
			...useLinkProps,

			percentage: Number,
			darkPercentage: Boolean,

			onTouchstart: [Function, Array]
		},

		emits: ['click', 'keydown', 'mousedown', 'keyup'],
		
		setup (props, { emit }){
			//const { proxy:{$uni} } = getCurrentInstance()
			const linkObj = useLink(props)

			const {
				classes, style, innerClasses,
				attributes,
				hasLink, linkTag, navigateOnClick,
				isActionable
			} = useBtn(props)
			
			const hasLabel = computed(() =>
				props.label !== void 0 && props.label !== null && props.label !== ''
			)
			
			const percentageStyle = computed(() => {
				const val = Math.max(0, Math.min(100, props.percentage))
				return val > 0 ?{transition: 'transform 0.6s',transform: `translateX(${ val - 100 }%)`} : {}
			})
			
			return {
				...linkObj,
				classes,
				style,
				innerClasses,
				attributes,
				hasLink,
				linkTag,
				navigateOnClick,
				percentageStyle,
				isActionable,
				hasLabel,
			}
		},
		methods: {
			onTriggerEvent(name, evt){
				if(this.disable){
					stopAndPrevent(evt)
				}else{
					switch (name){
						case 'click':
							this.$refs.ripple.ripple(evt)
							if(this.linkAttrs){
								openUrl(this.linkAttrs)
							}
							break;
						default:
							break;
					}
					this.$emit(name, evt)
				}
			}
		}
	}
</script>

<style>
</style>
