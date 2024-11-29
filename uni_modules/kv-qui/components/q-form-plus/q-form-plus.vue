<template>
	<form class="q-form q-form-plus" @submit="onSubmit">
		<slot name="prepend"></slot>
		<view :class="inline ? 'row q-col-gutter-sm' : 'q-gutter-y-sm'">
			<template v-for="(vo,i) in fieldAttrs" :key="i">
				<form-field :index="i" :field="vo" :model-value="formValue[vo.name]"
					@update:model-value="(val)=>updateValue(vo.name, val)" />
				<!-- after-id-[index] 插槽 -->
				<slot :name="'after-id-'+vo.name"></slot>
				<!-- after-name-[name] 插槽 -->
				<slot :name="'after-name-'+vo.name"></slot>
			</template>
			<slot></slot>
			<view class="submit-bar">
				<q-btn type="submit" v-bind="submitAttrs" />
			</view>
			<slot name="append"></slot>
		</view>
	</form>
</template>

<script setup>
	import {
		computed,
		ref,
		useAttrs,
		watch
	} from 'vue'
	import formField from './form-field.vue';
	import LocalStorage from '../../plugins/LocalStorage.js';
	import cloneDeep from '../../utils/clone';
	/*
	fields={
		name: 变量名,
		label: 标签
		cols: 布局，填写格式： col-6 或 col-12 col-sm-6, 默认：col-12,
	}
	*/
	const props = defineProps({
		modelValue: Object,
		fields: {
			type: Array,
			validator(val) {
				return Array.isArray(val)
			}
		},
		// 缓存名
		cache: String,
		// 单行表单
		inline: Boolean,
		submitBtn: [Object, String],
	});
	const emit = defineEmits(['update:modelValue', 'submit'])
	const formValue = ref(props.modelValue || (props.cache ? LocalStorage.getItem(props.cache) : null) || {})
	watch(() => props.modelValue, (val) => {
		formValue.value = val
	})
	const attrs = useAttrs();
	const submitAttrs = computed(() => {
		const attr = typeof props.submitBtn == 'string' ? {
			label: props.submitBtn
		} : props.submitBtn;
		return Object.assign({
			type: 'submit',
			color: 'primary',
			label: '立即提交'
		}, attr)
	})

	const fieldValue = computed(() => props.fields || []);

	const fieldAttrs = computed(() => {
		const attr = Object.assign({}, attrs);
		// 删除父级属性
		['class', 'style'].forEach(key => {
			delete attr[key]
		})
		return fieldValue.value.map(vo => Object.assign({}, attr, vo)).filter((opts, i) => {
			// 过滤非法字段
			if (opts.name === void 0 && opts.label === void 0) {
				console.warn(`第${i}个字段缺少label和name!`)
				return false;
			} else if (opts.name === void 0 || opts.label === void 0) {
				console.warn(`${opts.label || opts.name}字段缺少${[opts.label?'':'label', opts.name?'':'name'].filter(vo=>vo).join('和')}!`)
				return false;
			}
			return true;
		})
	})

	function updateValue(name, val) {
		formValue.value[name] = val
		
		if (props.cache) {
			LocalStorage.set(props.cache, formValue.value)
		}
		emitValue();
	}

	function emitValue() {
		emit('update:modelValue', formValue.value)
	}
	// 表单提交
	function onSubmit() {
		emit('submit', formValue.value)
	}
</script>

<style lang="scss">
	.q-form-plus {
		width: 100%;
		display: block;
	}

	.submit-bar {
		text-align: center;
	}
</style>