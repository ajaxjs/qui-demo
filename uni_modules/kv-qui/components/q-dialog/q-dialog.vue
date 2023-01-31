<template>
	<view v-if="showing" role="dialog" :class="rootClasses" :aria-modal="useBackdrop === true ? 'true' : 'false'" @click="onOutClick">
		<view v-if="useBackdrop" class="q-dialog__backdrop fixed-full"
			:style="{opacity:modelValue?1:0,transitionDuration: (transitionDuration*0.6)+'ms'}"
			@touchstart="onBackdropClick"
			@mousedown="onBackdropClick"
		></view>
		<view :class="[classes,animate]" :tabindex="-1" :style="transitionStyle">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import { ref, computed, watch, getCurrentInstance } from 'vue'
	import useModelToggle, { useModelToggleProps, useModelToggleEmits } from '../../composables/private/use-model-toggle.js'
	import useTransition, { useTransitionProps } from '../../composables/private/use-transition.js'
	import useTimeout from '../../composables/private/use-timeout.js'
	import { createComponent } from '../../utils/private/create.js'
	
	let maximizedModals = 0
	
	const positionClass = {
		standard: 'fixed-full flex-center',
		top: 'fixed-top justify-center',
		bottom: 'fixed-bottom justify-center',
		right: 'fixed-right items-center',
		left: 'fixed-left items-center'
	}
	const defaultTransitions = {
	  standard: [ 'zoom-in', 'zoom-out' ],
	  top: [ 'slide-in-down', 'slide-out-down' ],
	  bottom: [ 'slide-in-up', 'slide-out-up' ],
	  right: [ 'slide-in-right', 'slide-out-right' ],
	  left: [ 'slide-in-left', 'slide-out-left' ]
	}
	
	export default createComponent({
		name: 'QDialog',
	
		inheritAttrs: false,
	
		props: {
			...useModelToggleProps,
			...useTransitionProps,
	
			transitionShow: String, // override useTransitionProps
			transitionHide: String, // override useTransitionProps
	
			persistent: Boolean,
			autoClose: Boolean,
			allowFocusOutside: Boolean,
	
			noEscDismiss: Boolean,
			noBackdropDismiss: Boolean,
			noRouteDismiss: Boolean,
			noRefocus: Boolean,
			noFocus: Boolean,
			noShake: Boolean,
	
			seamless: Boolean,
	
			maximized: Boolean,
			fullWidth: Boolean,
			fullHeight: Boolean,
	
			square: Boolean,
	
			position: {
				type: String,
				default: 'standard',
				validator: val => val === 'standard' || ['top', 'bottom', 'left', 'right'].includes(val)
			}
		},
	
		emits: [
			...useModelToggleEmits,
			'shake', 'click', 'escapeKey'
		],
	
		setup(props, { slots, emit, attrs }) {
			const vm = getCurrentInstance()
	
			const innerRef = ref(null)
			const showing = ref(props.modelValue)
			const animating = ref(false)
			const shaking = ref(false)
	
			let shakeTimeout, refocusTarget = null,
				isMaximized, avoidAutoClose
	
			const hideOnRouteChange = computed(() =>
				props.persistent !== true &&
				props.noRouteDismiss !== true &&
				props.seamless !== true
			)
			const duration = props.transitionDuration
			const { show, hide } = useModelToggle({ showing, handleShow, handleHide, duration })
			const { registerTimeout } = useTimeout()
			
			const {transitionProps,transitionStyle} = useTransition(
				props,
				() => defaultTransitions[props.position][0],
				() => defaultTransitions[props.position][1]
			)
	
			const classes = computed(() =>
				'q-dialog__inner flex no-pointer-events' +
				` q-dialog__inner--${ props.maximized === true ? 'maximized' : 'minimized' }` +
				` q-dialog__inner--${ props.position } ${ positionClass[ props.position ] }` +
				(animating.value === true ? ' q-dialog__inner--animating' : '') +
				(props.fullWidth === true ? ' q-dialog__inner--fullwidth' : '') +
				(props.fullHeight === true ? ' q-dialog__inner--fullheight' : '') +
				(props.square === true ? ' q-dialog__inner--square' : '') +
				(shaking.value?' q-animate--deny':'')
			)
			const animate = computed(()=>animating.value===true?(props.modelValue?transitionProps.value.show:transitionProps.value.hide):'')
	
			const useBackdrop = computed(() => showing.value === true && props.seamless !== true)
	
			const rootClasses = computed(() => [
				'q-dialog fullscreen no-pointer-events ' +
				`q-dialog--${ useBackdrop.value === true ? 'modal' : 'seamless' }`,
				attrs.class
			])
			
			/*watch(() => props.maximized, state => {
				showing.value === true && updateMaximized(state)
			})*/
			/* #ifdef H5 */
			props.noEscDismiss !== true && window.addEventListener('keyup',(evt)=>{
				evt.key == 'Escape' && onBackdropClick(evt)
			})
			/* #endif */
	
			function shake (evt) {
				shaking.value = true
				emit('shake', evt)
				registerTimeout(()=>{
					shaking.value = false
				}, 150)
				console.log('shake');
			}
			function handleShow (evt) {
				
				animating.value = true
				registerTimeout(()=>{
					animating.value = false
					emit('show', evt)
				}, props.transitionDuration)
			}
			function handleHide (evt) {
				animating.value = true
				registerTimeout(()=>{
					animating.value = false
					emit('hide', evt)
				}, props.transitionDuration)
			}
			function onBackdropClick(e) {
				if (props.persistent !== true && props.noBackdropDismiss !== true) {
					hide(e)
				} else if (props.noShake !== true) {
					shake(e)
				}
			}
			
			function onOutClick(e){
				if(props.autoClose === true){
					hide(e)
					emit('click', e)
				}
			}
			Object.assign(vm.proxy,{hide,show})
			//defineExpose({hide,show})
			
			return {
				animate,animating,
				
				showing,
				classes,
				useBackdrop,
				rootClasses,
				
				transitionProps,
				transitionStyle,
				
				onOutClick,
				onBackdropClick,
			}
		}
	})
</script>

<style lang="sass">
@import '../../css/variables.sass'
$innerElm: ':deep(> view), > view, > q-card > view'
.q-dialog
  &__title
    font-size: 1.25rem
    font-weight: 500
    line-height: 2rem
    letter-spacing: .0125em

  &__progress
    font-size: 4rem

  &__inner
    transition: all .3s
    outline: 0

    #{$innerElm}
      pointer-events: all
      overflow: auto
      -webkit-overflow-scrolling: touch
      will-change: scroll-position
      border-radius: $generic-border-radius
      box-shadow: $shadow-4

    &--square
      #{$innerElm}
        border-radius: 0 !important

    > .q-card
      > .q-card__actions .q-btn--rectangle
        min-width: 64px

    &--minimized
      padding: 24px
      #{$innerElm}
        max-height: calc(100vh - 48px)

    &--maximized
      #{$innerElm}, >q-card
        height: 100%
        width: 100%
        max-height: 100vh
        max-width: 100vw
        border-radius: 0 !important
        top: 0 !important
        left: 0 !important

    &--top, &--bottom
      padding-top: 0 !important
      padding-bottom: 0 !important
    &--right, &--left
      padding-right: 0 !important
      padding-left: 0 !important

    &--left, &--top
      &:not(.q-dialog__inner--animating)
        #{$innerElm}
          border-top-left-radius: 0
    &--right, &--top
      &:not(.q-dialog__inner--animating)
        #{$innerElm}
          border-top-right-radius: 0
    &--left, &--bottom
      &:not(.q-dialog__inner--animating)
        #{$innerElm}
          border-bottom-left-radius: 0
    &--right, &--bottom
      &:not(.q-dialog__inner--animating)
        #{$innerElm}
          border-bottom-right-radius: 0

    &--fullwidth
      #{$innerElm}, >q-card
        width: 100% !important
        max-width: 100% !important
    &--fullheight
      #{$innerElm}, >q-card
        height: 100% !important
        max-height: 100% !important

  &__backdrop
    z-index: -1
    pointer-events: all
    outline: 0
    background: $dimmed-background
    transition: opacity .2s

@media (max-width: $breakpoint-xs-max)
  .q-dialog__inner
    &--top, &--bottom
      padding-left: 0
      padding-right: 0

      #{$innerElm}, >q-card
        width: 100% !important

@media (min-width: $breakpoint-sm-min)
  .q-dialog__inner--minimized
    #{$innerElm}, >q-card
      max-width: 560px

.q-body--dialog
  overflow: hidden

</style>