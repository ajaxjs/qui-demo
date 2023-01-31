<template>
	<label :for="labelAttrs.for" :ref="state.rootRef" :class="classes" :style="style">
		<view v-if="$slots.before" class="q-field__before q-field__marginal row no-wrap items-center">
			<slot name="before"></slot>
		</view>
		<view class="q-field__inner relative-position col self-stretch">
			<view :ref="state.controlRef" :class="contentClass" :tabindex="-1" @click="state.focused.value=true">
				<view v-if="$slots.prepend" class="q-field__prepend q-field__marginal row no-wrap items-center"
					key="prepend">
					<slot name="prepend"></slot>
				</view>
				<view class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
					<view v-if="prefix !== void 0 && prefix !== null"
						class="q-field__prefix no-pointer-events row items-center">
						{{prefix}}
					</view>
					<slot v-if="$slots.rawControl" name="rawControl"></slot>
					<!-- Input -->
					<textarea v-if="isTextarea"
						ref="inputRef"
						class="q-field__native q-placeholder"
						:class="inputClass"
						:value="innerValue"
						:id="state.targetUid.value"
						:name="nameProp"
						:tabindex="0"
						:data-autofocus="autofocus === true || void 0"
						:aria-label="label"
						:maxlength="maxlength"
						:disabled="disable === true"
						:readonly="readonly === true"
						:style="[inputStyle]"
						
						:focus="state.focused.value"
						:auto-height="autogrow"
						:auto-focus="autoFocus"
						
						@input="onInput"
						@confirm="onConfirm"
						@focus="state.controlEvents.onFocusin"
						@blur="state.controlEvents.onFocusout"
					></textarea>
					<input v-else
						ref="inputRef"
						class="q-field__native q-placeholder"
						:type="type"
						:class="inputClass"
						:value="innerValue"
						:focus="state.focused.value"
						:id="state.targetUid.value"
						:name="nameProp"
						:tabindex="0"
						:data-autofocus="autofocus === true || void 0"
						:aria-label="label"
						:maxlength="maxlength"
						:disabled="disable === true"
						:readonly="readonly === true"
						:style="inputStyle"
						
						:password="password || type=='password'"
						:confirm-type="confirmType"
						:confirm-hold="confirmHold"
						:adjust-position="adjustPosition"
						:auto-blur="autoBlur"
						
						@input="onInput"
						@confirm="onConfirm"
						@focus="state.controlEvents.onFocusin"
						@blur="state.controlEvents.onFocusout"
					/>

					<view v-if="hasLabel === true" :class="labelClass">
						<slot v-if="$slots.label" name="label"></slot>
						<template v-else>{{label}}</template>
					</view>
				</view>
				<view v-if="hasError === true && !noErrorIcon" :class="appendClass" key="error">
					<q-icon :name="$q.iconSet.field.error" color="negative" />
				</view>
				<view v-if="loading === true || state.innerLoading === true" :class="appendClass"
					key="inner-loading-append">
					<slot v-if="$slots.loading" name="loading"></slot>
					<q-spinner v-else :color="color" />
				</view>
				<view v-else-if="clearable === true && state.hasValue === true && state.editable === true"
					:class="appendClass" key="inner-clearable-append">
					<q-btn class="q-field__focusable-action" :icon="clearIcon || $q.iconSet.field.clear" :tabindex="0"
						:aria-hidden="null" :role="null" @click="clearValue" />
				</view>
				<view v-if="$slots.append" class="q-field__append q-field__marginal row no-wrap items-center"
					key="append" @click="prevent">
					<slot name="append"></slot>
				</view>
			</view>
			<!-- Button -->
			<view v-if="shouldRenderBottom === true"
				:class="`q-field__bottom row items-start q-field__bottom--${hideBottomSpace !== true ? 'animated' : 'stale'}`"
				@click="prevent">
				<!--  hideBottomSpace === true -->
				<view class="q-field__messages col">
					<template v-if="hasError">
						<view v-if="errorMessage !== null" role="alert" :key="`q--slot-error-${ errorMessage.value }`">
							{{errorMessage}}
						</view>
						<slot v-else name="error" key="q--slot-error"></slot>
					</template>
					<template v-else-if="hideHint !== true || state.focused.value === true">
						<view v-if="hint" :key="`q--slot-hint-${ hint }`">{{hint}}</view>
						<slot v-else name="hint" key="q--slot-hint"></slot>
					</template>
				</view>
				<view v-if="hasCounter" class="q-field__counter">
					<slot v-if="$slots.counter"></slot>
					<template v-else>{{state.computedCounter.value}}</template>
				</view>
			</view>
		</view>
		<view v-if="$slots.after" class="q-field__after q-field__marginal row no-wrap items-center">
			<slot name="after"></slot>
		</view>
	</label>
</template>

<script>
	import { ref, computed, watch, onBeforeUnmount, onMounted, nextTick, getCurrentInstance } from 'vue'
	import useField, { useFieldState, useFieldProps, useFieldEmits, fieldValueIsFilled } from '../../composables/private/use-field.js'

	import { createComponent } from '../../utils/private/create.js'
	import { useFormProps, useFormInputNameAttr } from '../../composables/private/use-form.js'
	

	export default createComponent({
		name: 'QInput',

		inheritAttrs: false,

		props: {
			...useFieldProps,
			//...useMaskProps,
			...useFormProps,

			modelValue: {
				required: false
			},

			shadowText: String,

			type: {
				type: String,
				default: 'text'
			},

			debounce: [String, Number],

			autogrow: Boolean, // makes a textarea

			inputClass: [Array, String, Object],
			inputStyle: [Array, String, Object],
			
			// uni-app 属性
			password: Boolean,
			autoFocus: Boolean,
			confirmType: {type:String, default:'done'},
			confirmHold: Boolean,
			adjustPosition: {type:Boolean, default: true},
			autoBlur: Boolean,
		},

		emits: [
			...useFieldEmits,
			'paste', 'change'
		],

		setup(props, {emit}) {
			const { proxy } = getCurrentInstance()
			const { $q } = proxy
			
			const temp = {}
			const inputRef = ref(null)

			let innerValue = ref(props.modelValue),valTimer
			watch(()=>props.modelValue,(val)=>{
				if(props.debounce !== void 0){
					clearTimeout(valTimer)
					valTimer = setTimeout(()=>{
						innerValue.value = val
					}, props.debounce)
				}else{
					innerValue.value = val
				}
				
			})

			const nameProp = useFormInputNameAttr(props)
			//const formDomProps = useFileFormDomProps(props, /* type guard */ true)
			const hasValue = computed(() => fieldValueIsFilled(innerValue.value))

			const state = useFieldState()
			const isTextarea = computed(() => props.type === 'textarea' || props.autogrow === true)
			
			// EmitValue && debounce
			let emitTimer, emitValueFn
			function emitValue(val){
				emitValueFn = () => {
					emit('update:modelValue', val)
				}
				if(props.debounce !== void 0){
					clearTimeout(emitTimer)
					emitTimer = setTimeout(emitValueFn, props.debounce)
				}else{
					emitValueFn()
				}
			}
			
			function onInput(e){
				if (!e || !e.detail) return
				innerValue.value = e.detail.value
				emitValue(innerValue.value)
			}
			
			function onConfirm(e) {
				
				innerValue.value = e.detail.value
			
				emit('confirm', innerValue.value)
				emitValue(innerValue.value)
			}
			
			Object.assign(state, {
				//innerValue,
				fieldClass: computed(() =>
					`q-${ isTextarea.value === true ? 'textarea' : 'input' }` +
					(props.autogrow === true ? ' q-textarea--autogrow' : '')
				),
				hasShadow: computed(() =>
					props.type !== 'file' &&
					typeof props.shadowText === 'string' &&
					props.shadowText.length > 0
				),
				inputRef,
				//emitValue,
				hasValue,
				floatingLabel: computed(() =>
					hasValue.value === true || 
					fieldValueIsFilled(props.displayValue)
				),
				//getControl: true
			})

			const renderFn = useField(state)
			


			return {
				...renderFn,
				nameProp,
				isTextarea,
				innerValue,
				
				onInput,
				onConfirm,
			}
		}
	})
</script>

<style lang="sass">
.q-field
  &__native
    box-sizing: content-box
</style>
