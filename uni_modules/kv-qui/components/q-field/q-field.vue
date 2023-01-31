<template>
	<label
		:for="labelAttrs.for"
		:ref="state.rootRef"
		:class="classes"
		:style="style"
	>
		<view v-if="$slots.before" class="q-field__before q-field__marginal row no-wrap items-center">
			<slot name="before"></slot>
		</view>
		<view class="q-field__inner relative-position col self-stretch">
			<view :ref="state.controlRef" :class="contentClass" :tabindex="-1">
				<view v-if="$slots.prepend" class="q-field__prepend q-field__marginal row no-wrap items-center" key="prepend">
					<slot name="prepend"></slot>
				</view>
				<view class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
					<view v-if="prefix !== void 0 && prefix !== null" class="q-field__prefix no-pointer-events row items-center">
						{{prefix}}
					</view>
					<slot v-if="$slots.rawControl" name="rawControl"></slot>
					<view v-if="$slots.control" :ref="state.targetRef" class="q-field__native row" :tabindex="-1" :for="state.targetUid.value" :data-autofocus="autofocus === true || void 0">
						<slot name="control" :id="state.targetUid.value"></slot>
					</view>
					<view v-if="hasLabel === true" :class="labelClass">
						<slot v-if="$slots.label" name="label"></slot>
						<template v-else>{{label}}</template>
					</view>
				</view>
				<view v-if="hasError === true && !noErrorIcon" :class="appendClass" key="error">
					<q-icon :name="$q.iconSet.field.error" color="negative" />
				</view>
				<view v-if="loading === true || state.innerLoading === true" :class="appendClass" key="inner-loading-append">
					<slot v-if="$slots.loading" name="loading"></slot>
					<q-spinner v-else :color="color" />
				</view>
				<view v-else-if="clearable === true && state.hasValue === true && state.editable === true" :class="appendClass" key="inner-clearable-append">
					<q-btn
						class="q-field__focusable-action"
						:icon="clearIcon || $q.iconSet.field.clear"
						:tabindex="0"
						:aria-hidden="null"
						:role="null"
						@click="clearValue"
					/>
				</view>
				<view v-if="$slots.append" class="q-field__append q-field__marginal row no-wrap items-center" key="append" @click="prevent">
					<slot name="append"></slot>
				</view>
			</view>
			<!-- Button -->
			<view v-if="shouldRenderBottom === true" :class="`q-field__bottom row items-start q-field__bottom--${hideBottomSpace !== true ? 'animated' : 'stale'}`" @click="prevent">
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
	import useField, { useFieldState, useFieldProps, useFieldEmits } from '../../composables/private/use-field.js'
	import { createComponent } from '../../utils/private/create.js'
	export default createComponent({
	  name: 'QField',
	
	  inheritAttrs: false,
	
	  props: useFieldProps,
	
	  emits: useFieldEmits,
	
	  setup () {
	    return useField(useFieldState())
	  }
	})
</script>

<style>
</style>