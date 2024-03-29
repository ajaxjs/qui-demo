<template>
	<q-card class="q-calendar" v-bind="attrs" :class="showLunar?'q-calendar-lunar':''">
		<view class="q-calendar__header row items-center bg-primary" v-if="!!!minimal">
			<div class="col">
				<view class="q-calendar__header-year" @click="laoutView='Years'">
					{{today?today.year():'--'}}
				</view>
				<view class="q-calendar__header-date" @click="laoutView='Months'">
					{{today?today.format('MMM DD ddd'):'--'}}
				</view>
			</div>
			<q-btn dense flat icon="event" id="today" @click="setToday(new Date())" v-if="todayBtn" />
		</view>

		<view class="q-calendar__body q-pa-sm">

			<YearView :model-value="dateYm[0]" v-if="laoutView=='Years'" @update:year="setYear" />
			<MonthView :model-value="dateYm[1]" v-else-if="laoutView=='Months'" @update:model-value="setMonth" />
			<CalendarView v-else v-bind="dateProps" @update:model-value="emitValue" @laout-view="onLaoutView" />
		</view>
	</q-card>
</template>

<script setup>
	import QBtn from '../q-btn/q-btn.vue';
	import QCard from '../q-card/q-card.vue';
	import CalendarView from './CalendarView.vue'
	import YearView from './YearView.vue'
	import MonthView from './MonthView.vue'
	import {
		dayjs
	} from '../../plugins/Calendar.js';
	import useCalendar, {
		calendarProps
	} from './useCalendar.js';
	import {
		computed,
		ref,
		useAttrs,
		defineEmits,
		watch
	} from 'vue';
	const attrs = useAttrs();
	// 事件
	const emit = defineEmits(['update:modelValue', 'update:year', 'update:month']);
	// props
	const props = defineProps(Object.assign(calendarProps, {
		// 不显示头部
		minimal: Boolean,
		// 默认视图
		defaultView: {
			type: String,
			validator(val) {
				return ['Calendar', 'Months', 'Years'].includes(val)
			},
			default: 'Calendar'
		},
	}));
	const {
		toDayjs,
		toStrDate,
		parseYm,
	} = useCalendar(props, {
		emit
	});
	// 当前日期
	const innerValue = ref(props.modelValue);
	const today = computed({
		get() {
			return props.modelValue ? dayjs(innerValue.value) : null;
		},
		set(vo) {
			innerValue.value = toStrDate(vo)
		}
	});
	const dateYm = ref(parseYm(props.defaultYearMonth));

	// 更新年、月设置
	watch(() => props.modelValue, (val) => dateYm.value = parseYm(val))
	watch(() => props.defaultYearMonth, (val) => dateYm.value = parseYm(val))

	const dateProps = computed(() => Object.assign({}, props, {
		modelValue: innerValue.value,
		defaultYearMonth: dateYm.value
	}))

	function emitValue(val, day, evt) {
		today.value = day;
		emit('update:modelValue', val, day, evt)
	}
	// 视图
	const laoutView = ref(props.defaultView)

	function onLaoutView(name) {
		laoutView.value = name
	}
	// 
	// 设置今日
	function setToday(date) {
		const day = dayjs(date);
		if (day && day.isValid()) {
			today.value = day;
			emitValue(toStrDate(day), day)
		} else {
			console.error('非法日期！');
		}
	}
	defineExpose({
		setToday,
	})
	// 设置年
	function setYear(y) {
		const ym = dateYm.value
		ym[0] = y;
		dateYm.value = ym
		emit('update:year', y, dateYm.value)
		laoutView.value = 'Months'
	}
	// 设置月
	function setMonth(m) {
		dateYm.value[1] = m + 1;
		emit('update:year', m, dateYm.value)
		laoutView.value = 'Calendar'
	}
</script>

<style lang="scss">

</style>