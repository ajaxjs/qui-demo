<template>
	<q-field v-bind="attrs" class="q-thumb">
		<template #prepend>
			<view class="q-field__label_txt">{{label}}</view>
		</template>
		<template #rawControl>
			<view class="q-py-sm q-gutter-xs">
				<view class="relative-position" v-for="(img, i) in thumbs" :key="i">
					<q-avatar v-bind="thumbAttr" @click="onChooseImage(i,1)">
						<q-img :src="img" v-if="img" />
						<q-icon name="add" v-else></q-icon>
					</q-avatar>
					<q-btn flat dense round class="del-btn absolute-top-right" icon="close" @click="deleteImg(i)" />
				</view>

				<q-avatar v-if="thumbs.length < maxNum" v-bind="thumbAttr" @click="onChooseImage('add')">
					<q-icon name="add"></q-icon>
				</q-avatar>
			</view>
		</template>
	</q-field>
</template>

<script setup>
	import { ref, useAttrs, computed } from 'vue';

	const emit = defineEmits(['update:modelValue'])
	const props = defineProps({
		modelValue: [String, Array],
		label: String,
		muti: [Boolean, Number],
		// original 原图，compressed 压缩图，默认二者都有
		sizeType: Array,
		// 根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。
		extension: Array,
		// album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
		sourceType: Array,
		// 图像裁剪参数，设置后 sizeType 失效
		crop: Object
	})
	const innerValue = ref(Array.isArray(props.modelValue) && props.muti ? props.modelValue : []);

	const thumbAttr = {
		size: '3em',
		color: 'grey-4',
		class: 'text-grey',
		rounded: true,
	};
	// 最大图片数
	const maxNum = computed(() => Number.isInteger(props.muti) ? props.muti : (props.muti ? 9 : 1))
	// 图片列表
	const thumbs = computed(() => {
		return (Array.isArray(innerValue.value) ? innerValue.value : [innerValue.value]).filter(vo => vo)
	})

	const attrs = useAttrs();

	// 删除选中的图片
	function deleteImg(i) {
		if (props.muti) {
			innerValue.value.splice(i, 1)
		} else {
			innerValue.value = '';
		}
	}

	// 选择图片
	function onChooseImage(i, max) {
		const inf = {};
		['sizeType', 'extension', 'sourceType', 'crop'].forEach(key => {
			if (props[key]) {
				inf[key] = props[key];
			}
		})
		uni.chooseImage(Object.assign(inf, {
			count: max || maxNum.value,
			success(files) {
				const { tempFilePaths, tempFiles } = files
				if (i >= 0 && props.muti) {
					innerValue.value[i] = tempFilePaths[0];
				} else {
					innerValue.value = props.muti ? tempFilePaths : tempFilePaths[0];
				}
				emit('update:modelValue', innerValue.value)
			}
		}))
	}
</script>

<style scoped>
	.del-btn {
		margin-top: -3px;
		margin-right: -3px;
		font-size: 0.5em;
		color: #F00;
		background-color: rgba(200, 200, 200, 0.6);
	}
</style>