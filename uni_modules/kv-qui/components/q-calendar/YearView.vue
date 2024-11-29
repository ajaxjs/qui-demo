<template>
	<view class="q-calendar__year q-calendar__view row">
		<q-btn flat dense :icon="$q.iconSet.tabs.left" @click="year-=11" />
		<view class="col row q-gutter-sm">
			<view class="" v-for="(y) in yearArr" :key="y">
				<q-btn v-bind="buildAttrs(y)" @click="onChoose(y)" />
			</view>
		</view>
		<q-btn flat dense :icon="$q.iconSet.tabs.right" @click="year+=11" />
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	const props = defineProps({
		modelValue: [Number, String],
	})
	const year = ref(parseInt(props.modelValue))
	const emit = defineEmits(['update:year'])
	const yearArr = computed(() => {
		const cyear = parseInt(year.value);
		const years = []
		const offyear = 16
		for (let i = cyear - offyear; i <= cyear + offyear; i++) {
			years.push(i + '')
		}
		return years;
	})

	function buildAttrs(y) {
		const isActive = y == year.value;
		const attrs = {
			label: '' + y,
			dense: true,
			color: isActive ? 'primary' : 'blue-grey',
			class: [
				'col-4',
				isActive ? 'active' : ''
			]
		}
		if (isActive) {
			attrs.unelevated = true;
		} else {
			attrs.outline = true;
		}
		return attrs;
	}

	function onChoose(y) {
		emit('update:year', parseInt(y))
	}
</script>

<style lang="scss">

</style>