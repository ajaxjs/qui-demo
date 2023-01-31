<template>
	<q-dialog ref="rootRef" :modelValue="show" :position="position" persistent>
		<view class="q-picker bg-white">
			<view class="row q-pa-sm">
				<q-btn outline color="blue-grey" label="取消" @click="close" />
				<view class="row col items-center justify-center">
					<text v-if="title" class="text-subtitle2">{{title}}</text>
					<slot name="title"></slot>
				</view>
				<q-btn color="primary" label="确定" @click="confirm" />
			</view>
			<q-pickerview ref="pickView" align="center"
				v-model="innerValue"
				:options="options"
				:perfix="perfix"
				:suffix="suffix"
				:align="align"
				:itemLabel="itemLabel"
				:itemValue="itemValue"
				:itemHeight="itemHeight"
				:rowNumber="rowNumber"
				@change="onChange"
			></q-pickerview>
		</view>
	</q-dialog>
</template>

<script>
	import usePicker,{usePickerProps} from './usePicker.js'
	export default {
		props: {
			...usePickerProps,
		},
		emits: ['update:modelValue','update:show','confirm','change','open','close'],
		setup(props, {emit}){
			
			return usePicker({props,emit})
		}
	}
</script>

<style lang="sass">
.q-picker
  width: 100%
</style>