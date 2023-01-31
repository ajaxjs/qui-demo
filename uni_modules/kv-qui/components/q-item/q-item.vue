<template>
	<view :class="classes" role="listitem"
		@click="onClick"
		@keyup="onKeyup"
	>
		<slot></slot>
		<view :ref="blurTargetRef" class="q-focus-helper" :tabindex="-1"></view>
		<q-ripple class="ripple" v-if="!disable && ripple" ref="rippleRef"></q-ripple>
	</view>
</template>

<script>
	import { ref, computed, getCurrentInstance } from 'vue'

	import useDark, { useDarkProps } from '../../composables/private/use-dark.js'
	import useLink,{ useLinkProps } from '../../composables/private/use-link.js'

	import { createComponent } from '../../utils/private/create.js'
	import { stopAndPrevent } from '../../utils/event.js'
	import { isKeyCode } from '../../utils/private/key-composition.js'

	export default createComponent({
		name: 'QItem',

		props: {
			...useDarkProps,
			...useLinkProps,

			tag: {
				type: String,
				default: 'div'
			},

			active: {
				type: Boolean,
				default: null
			},

			clickable: Boolean,
			dense: Boolean,
			insetLevel: Number,
			ripple: Boolean,

			tabindex: [String, Number],

			focused: Boolean,
			manualFocus: Boolean
		},

		emits: ['click', 'keyup'],

		setup(props, {
			slots,
			emit
		}) {
			const { proxy: { $q } } = getCurrentInstance()

			const isDark = useDark(props, $q)
			const {
				hasLink,
				linkClass,
				
				linkActive,
				linkAttrs,
			} = useLink(props)

			const rootRef = ref(null)
			const blurTargetRef = ref(null)

			const isActionable = computed(() =>
				props.clickable === true ||
				hasLink.value === true
			)

			const isClickable = computed(() =>
				props.disable !== true && isActionable.value === true
			)

			const classes = computed(() =>
				'q-item q-item-type row no-wrap' +
				(props.dense === true ? ' q-item--dense' : '') +
				(isDark.value === true ? ' q-item--dark' : '') +
				(
					hasLink.value === true && props.active === null ?
					linkClass.value :
					(
						props.active === true ?
						` q-item--active${ props.activeClass !== void 0 ? ` ${ props.activeClass }` : '' }` :
						''
					)
				) +
				(props.disable === true ? ' disabled' : '') +
				(
					isClickable.value === true ?
					' q-item--clickable q-link cursor-pointer ' +
					(props.manualFocus === true ? 'q-manual-focusable' : 'q-focusable q-hoverable') +
					(props.focused === true ? ' q-manual-focusable--focused' : '') :
					''
				)
			)

			const style = computed(() => {
				if (props.insetLevel === void 0) {
					return null
				}

				const dir = $q.lang.rtl === true ? 'Right' : 'Left'
				return {
					['padding' + dir]: (16 + props.insetLevel * 56) + 'px'
				}
			})
			/*const rippleRef = ref()
			function onClick(e) {
			console.log(rootRef.value)
				console.log('click*--',isClickable.value);
				if (isClickable.value === true) {
					if (blurTargetRef.value !== null) {
						if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
							blurTargetRef.value.focus()
						} else if (document.activeElement === blurTargetRef.value) {
							rootRef.value.focus()
						}
					}
					//$refs.ripple.ripple(e)
					navigateOnClick(e)
				}
			}*/

			/*function onKeyup(e) {
				if (isClickable.value === true && isKeyCode(e, 13) === true) {
					stopAndPrevent(e)

					// for ripple
					e.qKeyEvent = true

					// for click trigger
					const evt = new MouseEvent('click', e)
					evt.qKeyEvent = true
					rootRef.value.dispatchEvent(evt)
				}

				emit('keyup', e)
			}*/

			return {
				rootRef,
				blurTargetRef,
				classes,
				style,
				
				isKeyCode,
				//onClick,
				//onKeyup,
				
				hasLink,
				linkClass,
				linkActive,
				linkAttrs,
			}
		},
		methods: {
			onKeyup(e){
				const {isClickable,isKeyCode} = this
				if(isClickable && isKeyCode(e,13) === true){
					stopAndPrevent(e)
					
					e.qKeyEvent = true
					
					const evt = new MouseEvent('click', e)
					evt.qKeyEvent = true
					this.onClick(evt)
				}
				this.$emit('keyup', e)
			},
			onClick(evt){
				const {isClickable,hasLink,linkAttrs} = this
				if(isClickable){
					if(this.$refs.rippleRef){
						this.$refs.rippleRef.ripple(evt)
					}
					if(hasLink){
						this.$uni.openUrl(linkAttrs)
					}
					this.$emit('click', evt)
				}
			},
		}
	})
</script>

<style>
</style>
