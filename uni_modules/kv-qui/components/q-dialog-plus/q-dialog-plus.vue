<template>
	<q-dialog v-model="visible" @hide="onHide" v-bind="$attrs">
		<q-card class="q-dialog-plus" :class="pageClass" :style="style">
			<slot name="header" v-if="$slots.header"></slot>
			<view v-else-if="props.title||$slots.title" class="q-dialog-plus__header row items-center">
				<view class="title">{{props.title}}</view>
				<slot name="title"></slot>
				<q-space></q-space>
				<q-btn dense flat icon="close" color="grey" @click="onHide" />
			</view>
			<slot name="navigation"></slot>
			<scroll-view v-if="pageMode">
				<slot></slot>
			</scroll-view>
			<view v-else class="contanter">
				<slot></slot>
			</view>
			<slot name="footer" v-if="$slots.footer"></slot>
		</q-card>
	</q-dialog>
</template>

<script setup>
	import { computed, ref, watch } from 'vue';
	const emit = defineEmits(['update:modelValue', 'hide'])
	const props = defineProps({
		modelValue: Boolean,
		// 标题
		title: String,
		// 页面模式
		pageMode: Boolean,
		// 弹窗样式
		class: [String, Array, Object],
		style: [String, Array, Object],
	})
	// 显示状态
	const visible = ref(props.modelValue)
	watch(() => props.modelValue, (val) => visible.value = val)

	const pageClass = computed(() => [
		props.pageMode ? 'q-dialog-page' : '',
		props.class
	])

	function onHide() {
		visible.value = false;
		emit('hide')
		emit('update:modelValue', false)
	}
</script>

<style lang="scss" scoped>
	.q-dialog-plus {
		&:not(.q-dialog-page) {
			min-width: 240px;
		}

		&__header {
			padding: 5px;

			.title {
				font-weight: bold;
			}
		}
	}

	.q-dialog-page {
		width: 100%;
		height: 80%;
	}
</style>