<template>
	<view class="q-calendar__view column">
		<view class="q-calendar__month row col q-col-gutter-sm justify-around items-center full-height">
			<view class="col-4 text-center" v-for="(mon,i) in months" :key="i">
				<q-btn v-bind="buildAttrs(i)" class="mon-btn" :label="mon" @click="onChoose(i)" />
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		dayjs
	} from '../../plugins/Calendar.js';
	const today = dayjs()
	const months = today.$locale().monthsShort || today.$locale().months;
	
	const emit = defineEmits(['update:modelValue'])
	const props = defineProps({
		modelValue: [String,Number],
	})
	
	const modVal = ref(parseInt(props.modelValue))

	function buildAttrs(i) {
		const isActive = modVal.value-1 == i;
		const attrs = {
			color: isActive ? 'primary' : 'blue-grey',
		}
		if (isActive) {
			attrs.unelevated = true;
		}else{
			attrs.outline = true;
		}
		return attrs;
	}

	function onChoose(i) {
		console.log(i);
		emit('update:modelValue', i);
	}
</script>

<style lang="scss">
	.month-box {
		min-height: 300px;

		.mon-btn {
			width: 100%;
		}
	}
</style>