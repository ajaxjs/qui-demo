<template>
	<view :class="classes">
		<template v-if="field.type=='datetime'">
			<q-field v-bind="inputAttrs">
				<template #control>
					{{innerValue}}
				</template>
				<template #append>
					<view class="absolute-full" @click="dateVisib=true"></view>
					<q-btn flat dense icon="event" @click="dateVisib=true" />
				</template>
			</q-field>
			<q-datetime v-model="innerValue" v-model:show="dateVisib" @update:modelValue="dateConfirm"></q-datetime>
		</template>
		
		<!-- 缩略图、头像 -->
		<template v-else-if="field.type=='thumb'">
			<q-thumb v-model="innerValue" v-bind="inputAttrs" />
		</template>

		<!-- 包裹器字段 -->
		<template class="" v-else-if="cfd.includes(field.type)">
			<q-field v-bind="inputAttrs">
				<template #prepend>
					<view class="q-field__label_txt">{{field.label}}</view>
				</template>
				<template #control>
					<q-radio v-if="field.type=='radio'" v-bind="innerAttrs" :options="field.options" />
					<q-checkbox v-if="field.type=='checkbox'" v-bind="innerAttrs" :options="field.options" />
					<q-rating v-if="field.type=='rating'" v-bind="innerAttrs" :size="field.size||'sm'"
						icon="star_border" icon-selected="star" />
					<q-slider v-if="field.type=='slider'" v-bind="innerAttrs" class="col" />
				</template>
			</q-field>
		</template>
		<template v-else>
			<q-input v-model="innerValue" v-bind="inputAttrs">
				<template #prepend v-if="field.prepend">
					<q-comps v-bind="field.prepend" />
				</template>
				<template #append v-if="field.append">
					<q-comps v-bind="field.append" />
				</template>
			</q-input>
		</template>
	</view>
</template>

<script setup>
	import {
		computed,
		ref,
		useAttrs,
		watch
	} from 'vue';
	const attrs = useAttrs()
	const props = defineProps({
		modelValue: [String, Number, Array],
		field: {
			type: Object,
			validator(opts) {
				const keyname = opts.label || opts.name;
				if (opts.name === void 0 || opts.label === void 0) {
					console.warn(`${keyname}字段的${[opts.label, opts.name].join('和')}不得为空！`);
				}
				return true;
			}
		},
		inputClass: String
	})
	const emit = defineEmits(['update:modelValue'])
	const innerValue = ref(initValue(props.modelValue));
	const dateVisib = ref(false)
	// 初始化值
	function initValue(val) {
		if (['rating', 'slider'].includes(props.field.type)) {
			val = val || 0;
		}
		return val;
	}
	// 自定义字段
	const cfd = ['radio', 'checkbox', 'rating', 'slider'];

	watch(() => props.modelValue, (val) => {
		innerValue.value = initValue(val)
	})
	// Class
	const classes = computed(() => {
		const {
			field,
			inputClass
		} = props;
		return [
			'input-item',
			field.name ? 'field-' + field.name : '',
			field.cols ? field.cols : '',
			field.class,
			inputClass
		]
	})
	// input attrs
	const inputAttrs = computed(() => {
		const attr = Object.assign({}, props.field, {
			modelValue: innerValue.value,
			'onUpdate:modelValue': emitValue
		})
		// 隐藏label
		if (cfd.includes(attr.type)) {
			attr._label = attr.label;
			delete attr.label;
		}

		return attr;
	})
	// 子组件
	const innerAttrs = computed(() => {
		const attr = Object.assign({}, inputAttrs.value);
		['label', 'type'].forEach(key => {
			delete attr[key]
		})
		return attr;
	})

	function emitValue(val) {
		emit('update:modelValue', val)
	}

	// 确认日期
	function dateConfirm(val) {
		dateVisib.value = false;
		emitValue(val)
	}
</script>

<style lang="scss" scoped>
	
</style>