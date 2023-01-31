<template>
	<q-dialog ref="rootRef" :modelValue="show" :position="position" persistent>
		<view class="q-datetime bg-white">
			<view class="row q-pa-sm">
				<q-btn outline color="blue-grey" label="取消" @click="close" />
				<view class="row col items-center justify-center">
					<q-btn-group flat class="q-mx-md" v-if="!hideLifa">
						<q-btn :outline="lifa!=='公'" color="primary" label="公历" @click="onLifaChange('公')" />
						<q-btn :outline="lifa!=='农'" color="primary" label="农历" @click="onLifaChange('农')" />
					</q-btn-group>
				</view>
				<q-btn color="primary" label="确定" @click="confirm" />
			</view>
			<view class="q-pa-sm">
				<q-pickerview ref="pickView" align="center" v-model="innerValue" :options="options"
					@ready="onDateReady"
					@change="onDateChange"
				></q-pickerview>
			</view>
		</view>
	</q-dialog>
</template>

<script>
	import {computed,ref,getCurrentInstance} from 'vue'
	import useDateTime,{useDateTimeProps} from './useDateTime.js'
	
	export default{
		props: useDateTimeProps,
		emits: ['update:modelValue','update:show','confirm','change','open','close'],
		setup(props, {emit}){
			
			return useDateTime({props,emit})
		},
	}
</script>

<style lang="sass">
.q-datetime
  width: 100%
  max-width: 320px
</style>