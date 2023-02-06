<template>
	<view v-if="!(removable && !modelValue)" :class="classes" :style="sizeStyle" @click="onClick" @keyup="onKeyup" :tabindex="chip.tabindex" :aria-disabled="chip['aria-disabled']">
		<view v-if="isClickable" class="q-focus-helper"></view>
		<q-icon v-if="hasLeftIcon" :name="leftIcon" className="q-chip__icon q-chip__icon--left" />
		<view class="q-chip__content col row no-wrap items-center q-anchor--skip">
			<slot></slot>
			<view v-if="label" class="ellipsis">{{label}}</view>
		</view>
		<q-icon v-if="iconRight" :name="iconRight" className="q-chip__icon q-chip__icon--right" />
		<q-icon v-if="removable" :name="removeIcon"
			className="q-chip__icon q-chip__icon--remove cursor-pointer"
			:tabindex="remove.tabindex"
			:aria-disabled="remove['aria-disabled']"
			:aria-hidden="remove['aria-hidden']"
			:aria-label="remove['aria-label']"
			@click="onRemove"
		/>
		<q-ripple v-if="isClickable" ref="rippleRef"></q-ripple>
	</view>
</template>

<script>
	import { computed, getCurrentInstance } from 'vue'
	
	import useDark, { useDarkProps } from '../../composables/private/use-dark.js'
	import useSize, { useSizeProps } from '../../composables/private/use-size.js'
	
	import { stopAndPrevent } from '../../utils/event.js'
	import { createComponent } from '../../utils/private/create.js'
	export const defaultSizes = {xs: 8,sm: 10,md: 14,lg: 20,xl: 24}
	export default createComponent({
		name: 'QChip',
		props: {
			...useDarkProps,
			...useSizeProps,
	
			dense: Boolean,
	
			icon: String,
			iconRight: String,
			iconRemove: String,
			iconSelected: String,
			label: [String, Number],
	
			color: String,
			textColor: String,
	
			modelValue: {
				type: Boolean,
				default: true
			},
			selected: {
				type: Boolean,
				default: null
			},
	
			square: Boolean,
			outline: Boolean,
			clickable: Boolean,
			removable: Boolean,
	
			removeAriaLabel: String,
	
			tabindex: [String, Number],
			disable: Boolean,
	
			ripple: {
				type: [Boolean, Object],
				default: true
			}
		},
		emits: [ 'update:modelValue', 'update:selected', 'remove', 'click' ],
		setup (props, { slots, emit }) {
			const { proxy: { $q } } = getCurrentInstance()
			const isDark = useDark(props, $q)
			const sizeStyle = useSize(props, defaultSizes)
			const isClickable = computed(() => props.disable === false && (props.clickable === true || props.selected !== null))
			const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0)
			const leftIcon = computed(() => (
				//props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon
				props.selected === true ? props.iconSelected || 'done' : props.icon
			))
			
			//const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove)
			const removeIcon = computed(() => props.iconRemove || 'cancel')
			
			const classes = computed(() => {
				const text = props.outline === true ? props.color || props.textColor : props.textColor
				return 'q-chip row inline no-wrap items-center' +
					(props.outline === false && props.color !== void 0 ? ` bg-${ props.color }` : '') +
					(text ? ` text-${ text } q-chip--colored` : '') +
					(props.disable === true ? ' disabled' : '') +
					(props.dense === true ? ' q-chip--dense' : '') +
					(props.outline === true ? ' q-chip--outline' : '') +
					(props.selected === true ? ' q-chip--selected' : '') +
					(isClickable.value === true ? ' q-chip--clickable cursor-pointer non-selectable q-hoverable' : '') +
					(props.square === true ? ' q-chip--square' : '') +
					(isDark.value === true ? ' q-chip--dark q-dark' : '')
			})
			
			const attributes = computed(() => {
				const chip = props.disable === true ? {tabindex: -1,'aria-disabled': 'true'} : {tabindex: props.tabindex || 0}
				const remove = {
					...chip,
					role: 'button',
					'aria-hidden': 'false',
					'aria-label': props.removeAriaLabel
				}
				return {chip,remove}
			})
			
			
			function onRemove(e) {
				stopAndPrevent(e)
				if (props.disable === false) {
					console.log('-----',props.disable);
					emit('update:modelValue', false)
					emit('remove')
				}
			}
			
			return {
				classes,
				sizeStyle,
				isClickable,
				hasLeftIcon,
				leftIcon,
				onRemove,
				removeIcon,
				...attributes.value,
			}
		},
		methods: {
			onKeyup(e) {
				if(e.keyCode === 13  && this.isClickable) onClick(e)
			},
			onClick(e) {
				if (this.isClickable) {
					this.$emit('update:selected', !this.selected)
					this.$emit('click', e)
					this.$refs.rippleRef.ripple(e)
				}
			}
		}
	})
</script>

<style lang="sass">
</style>