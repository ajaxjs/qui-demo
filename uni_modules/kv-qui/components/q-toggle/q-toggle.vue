<template>
	<view :class="classes" @click="onClick"
		role="switch"
		:tabindex="tabindex"
		:aria-label="label"
		:aria-checked="isIndeterminate===true?'mixed':(isTrue.value === true ? 'true' : 'false')"
		:aria-disabled="disable"
	>
		<view :class="innerClass" :style="sizeStyle">
			<checkbox-group class="hidden" @change="onClick()">
				<checkbox value="cb" :checked="isTrue" />
			</checkbox-group>
			<view class="q-toggle__track"></view>
			<view class="q-toggle__thumb absolute flex flex-center no-wrap">
				<q-icon v-if="inner.icon.value" :name="inner.icon.value" :color="isTrue===true?inner.color.value:null" />
			</view>
		</view>
		<slot></slot>
		<view v-if="label" class="q-toggle__label q-anchor--skip">{{label}}</view>
	</view>
</template>

<script>
	import {ref, computed} from 'vue'
	import useCheckbox, { useCheckboxProps } from '../../composables/private/use-checkbox.js'
	import { isBoolean,isString } from '../../utils/is.js'
	
	import { createComponent } from '../../utils/private/create.js'
	export default createComponent({
		props: {
			...useCheckboxProps,
			
			icon: String,
			iconColor: String
		},
		emits: [ 'update:modelValue' ],
		setup (props,{slots, emit}) {
			const useChkBox = useCheckbox('toggle', getInner)
			function getInner(isTrue, isIndeterminate){
				const icon = computed(() =>
					(isTrue.value === true ?
						props.checkedIcon :
						(isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon)
					) || props.icon
				)
				const color = computed(() => (isTrue.value === true ? props.iconColor : null))
				
				return {icon,color}
			}
			
			return useChkBox
		}
	})
</script>

<style lang="sass">
</style>
