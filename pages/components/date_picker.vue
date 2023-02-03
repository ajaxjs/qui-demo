<template>
	<q-page>
		<Lanmu title="选择器">
			<view class="q-gutter-y-sm">
				<view class="">
					<q-btn color="blue" label="弹出选择" @click="pkShow=true" />-{{pkVals}}-
				</view>
				<q-separator spaced class="uni"></q-separator>
				<view class="">
					<q-btn color="blue" label="日期选择" @click="$refs.picker.open()" />-{{date}}-
				</view>
			</view>
			<q-datetime v-model="date" v-model:show="showData" ref="picker"></q-datetime>
			
			<q-picker v-model="pkVals" v-model:show="pkShow" :options="optObject" title="请选择" />
		</Lanmu>
		<Lanmu title="Picker View">
			
			
			<q-separator spaced></q-separator>
			<view class="bg-orange-2 q-pa-sm">
				<q-btn color="orange" label='设置默认值' @click="objValue=['America','Badminton']" />
				<view v-if="objValue" class="q-pt-sm">
					国家：{{objValue[0]}};
					体育：{{objValue[1]}};
				</view>
			</view>
			<q-pickerview ref="b" v-model="objValue" :options="optObject" @change="onChange"></q-pickerview>
		</Lanmu>
	</q-page>
</template>

<script>
	import {ref,reactive} from 'vue'
	import useDateTime from '../../uni_modules/kv-qui/components/q-datetime/useDateTime.js'
	export default {
		data(){
			//const dateTime = useDateTime({})
			
			return {
				pkShow: false,
				pkVals: null,
				objValue: null,
				showData: false,
				date: '农历 2001-04-05 02:04 (闰月)',
				optObject: [
					[{label:'中国',value:'China'}, {label:'美国',value:'America'}, {label:'巴西',value:'Brazil'}, {label:'日本',value:'Japan'}, {label:'德国',value:'Germany'}],
					[{label:'足球',value:'FootBall'}, {label:'排球',value:'Volleyball'}, {label:'羽毛球',value:'Badminton'}, {label:'乒乓球',value:'TableTennis'}],
				],
			}
		},
		methods: {
			onChange(evt){
				console.log('change--',evt);
			}
		}
	}
</script>

<style lang="sass">
:deep(.active)
  color: #F00
</style>