<template>
	<view class="row col items-center q-px-sm">
		<q-btn v-bind="prevAttr" />
		<view class="col text-center text-grey">
			<text class="text-primary">{{currPage}}</text> / {{maxPage}}
		</view>
		<q-btn v-bind="nextAttr" />
	</view>
</template>

<script setup>
	import { ref, useAttrs, computed } from 'vue';

	const props = defineProps({
		// 当前页
		modelValue: Number,
		//上一页文本
		prevText: String,
		//下一页文本
		nextText: String,
		//上一页图标
		prevIcon: String,
		//下一页文本
		nextIcon: String,
		// 按扭颜色
		color: String,
		// 按扭图片
		Icon: String,
		// 总条数
		total: Number,
		// 总页数
		totalPage: Number,
		// 加载状态
		loading: Boolean,
	})
	const emit = defineEmits(['update:modelValue'])

	const currPage = ref(props.modelValue || 1)
	const maxPage = computed(() => props.totalPage || 1)

	const attrs = useAttrs()
	const btn = computed(() => {
		return {
			color: props.color || 'primary',
		}
	});
	const prevAttr = computed(() => Object.assign({}, btn.value, {
		disable: props.loading,
		icon: props.prevIcon,
		label: props.prevText || '上一页',
		onClick: prevPage
	}))
	const nextAttr = computed(() => Object.assign({}, btn.value, {
		disable: props.loading,
		iconRight: props.nextIcon,
		label: props.nextText || '下一页',
		onClick: nextPage
	}))
	// 上一页
	function prevPage() {
		if(currPage.value > 1){
			currPage.value -= 1;
			emit('update:modelValue', currPage.value)
		}
	}
	// 下一页
	function nextPage() {
		if(currPage.value < maxPage.value){
			currPage.value += 1;
			emit('update:modelValue', currPage.value)
		}
	}
</script>

<style>
</style>