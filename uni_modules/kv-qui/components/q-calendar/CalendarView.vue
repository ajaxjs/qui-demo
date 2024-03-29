<template>
	<view class="q-calendar__view column">
		<view class="row q-pb-sm">
			<view class="col row items-center">
				<q-btn flat dense :icon="$q.iconSet.tabs.left" @click="setYearMonth(dayYm.add(-1,'year'))" />
				<q-btn flat dense class="col text-center" @click="emitLayout('Years')">
					{{dayYm.year()}}
				</q-btn>
				<q-btn flat dense :icon="$q.iconSet.tabs.right" @click="setYearMonth(dayYm.add(1,'year'))" />
			</view>
			<view class="col row items-center">
				<q-btn flat dense :icon="$q.iconSet.tabs.left" @click="setYearMonth(dayYm.add(-1,'month'))" />
				<q-btn flat dense class="col text-center" @click="emitLayout('Months')">
					{{dayYm.format('MMM')}}
				</q-btn>
				<q-btn flat dense :icon="$q.iconSet.tabs.right" @click="setYearMonth(dayYm.add(1,'month'))" />
			</view>
		</view>
		<view class="q-calendar__table column col">
			<view class="row">
				<view class="th col" v-for="(val,i) in weekName" :key="i">{{val}}</view>
			</view>
			<view class="col column">
				<view class="row col" v-for="(week,wi) in monthWeeks" :key="wi">
					<view class="day td col row items-center justify-center" v-for="(day,di) in week" :key="di"
						@click="clickDay(day,$event)" @touchstart="rippleEffect(day,$event)" :class="getClasses(day)">
						<view class="">
							<view class="num">{{day.date()}}</view>
							<view class="txt" v-if="showLunar">{{day.lunar().LunarDayZh}}</view>
							<QRipple ref="ripple" />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		ref,
		useAttrs,
		defineEmits,
		watch,
	} from 'vue';
	import QRipple from '../q-ripple/q-ripple.vue'
	import qcalendar, {
		dayjs
	} from '../../plugins/Calendar.js';
	import useCalendar, {
		calendarProps
	} from './useCalendar.js';

	const props = defineProps(calendarProps)
	const ripple = ref();
	// 事件
	const emit = defineEmits(['update:modelValue', 'update:year', 'update:month', 'laoutView']);
	const {
		toStrDate,
		parseYm
	} = useCalendar(props, {
		emit
	});
	// 当前天
	const innerValue = ref(props.modelValue);
	const today = computed({
		get() {
			return props.modelValue ? dayjs(innerValue.value) : null;
		},
		set(vo) {
			innerValue.value = toStrDate(vo)
		}
	});

	// 日历默认：年-月，传入year-month = [year,month]
	const dateYm = ref(parseYm(props.defaultYearMonth));

	// 解析年-月，dym=year-month
	/*function parseYm(dym) {
		dym = Array.isArray(dym) ? dym.filter(vo => !!vo).join('-') : dym;
		dym = dym ? dym : toStrDate(today.value || new Date());
		dym = dym.split(/[\,\-\/]/).map(vo => parseInt(vo.trim())).splice(0, 2);
		return dym;
	}*/
	// 默认 年-月-1 日期期对象
	const dayYm = computed(() => dayjs(dateYm.value.join('-') + '-1'))

	// 年、月设置
	function setYearMonth(day) {
		dateYm.value = parseYm(day.format('YYYY-MM'))
	}
	// 更新年、月设置
	watch(() => props.modelValue, (val) => dateYm.value = parseYm(val))
	watch(()=>props.defaultYearMonth,(val)=>dateYm.value = parseYm(val))

	const monthWeeks = computed(() => qcalendar(dateYm.value.join('-') + '-1').weeks())


	// 星期
	const weekName = dayjs().$locale().weekdaysShort;
	// 点击
	function clickDay(day, evt) {
		emitValue(day, evt)
	}

	function emitValue(day, evt) {
		today.value = day
		emit('update:modelValue', innerValue.value, day, evt)
	}
	// layout view change
	function emitLayout(name) {
		emit('laoutView', name);
	}

	defineExpose({
		parseYm
	})

	/*
	const {
		//today,
		cday,
		//tempDay,
		//monthWeeks,
		emitValue,
		setTempDay
	} = useCalendar(props, {
		emit
	});
	
	watch(()=>props.modelValue,(vo)=>{
		console.log('-------',vo);
	})
	
	console.log('--+++');
	const tempDay = computed(()=>dayjs(props.defaultDate))*/

	//
	function rippleEffect(day, evt) {
		ripple.value[day.index].ripple(evt)
	}

	function getClasses(day) {
		return [
			day.current ? 'current' : 'outday',
			day.prev ? 'prev' : '',
			day.next ? 'next' : '',
			day.today ? (props.todayClass || 'today') : '',
			day.isSame(innerValue.value, 'day') ? (props.activeClass || 'selected') : ''
		]
	}
</script>

<style lang="scss">
	// 表
	.q-calendar__table {
		width: 100%;
		text-align: center;

		.th {
			width: 14.29%;
		}

		.td {
			position: relative;
		}

		.outday {
			color: #999;
		}
	}
</style>