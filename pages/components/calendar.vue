<template>
	<Lanmu title="农历日历">
		<q-calendar ref="calendar" showLunar v-model="dateStr" :date-info="dateInfo" @update:model-value="onChange"
			@update:year="onYear" @update:month="onMonth" :default-year-month="dateYm" />
		<view class="q-pa-sm">
			日期：{{dateStr}}
		</view>
		<view class="q-pa-sm q-gutter-sm">
			<q-btn label="设置日期到2025-5-16" color="primary" @click="$refs.calendar.setToday('2025-5-16')" />
			<q-btn label="设置年-月" color="primary" @click="dateYm='1995-8'" />
		</view>
	</Lanmu>
	<Lanmu title="日历">
		<q-calendar v-model="dateStr"  today-btn />
		<view class="q-pa-sm">
			日期：{{dateStr}}
		</view>
	</Lanmu>
	<Lanmu title="默认年视图">
		<q-calendar v-model="dateStr"  today-btn default-view="Years" />
		<view class="q-pa-sm">
			日期：{{dateStr}}
		</view>
		<div class="q-pa-sm">
			default-view = "Years" (Years | Months)
		</div>
	</Lanmu>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const dateStr = ref()
	const dateObj = ref()
	const dateYm = ref();
	const dateInfo = [{
			date: '',
			after: '促销'
		},
		{
			date: '',
			before: '节日'
		}
	]

	function onChange(val, day, evt) {
		dateObj.value = day;
		console.log(val, day);
	}

	function onYear(val, day) {
		//console.log('on year change:', val, day);
	}

	function onMonth(val, day) {
		//console.log('on Month change:', val, day);
	}
</script>

<style>
</style>