<template>
	<checkbox-group class="row" :class="classes" @change="onChange">
		<label class="q-checkbox" :class="[labelClass,{'q-checked':status[i]}]" :style="labelStyle" v-for="(vo, i) in opts" :key="i">
			<q-icon class="check-icon" v-if="icons[i]" :name="icons[i]" size="22px" />
			<checkbox v-show="!icons[i]" :value="vo.value+''" :data-vals="vo.value" :checked="status[i]" :disabled="vo.disable" :color="vo.color" />
			<text>{{vo.label}}</text>
		</label>
	</checkbox-group>
</template>

<script>
	import { ref, toRaw, computed } from 'vue'
	import useOption,{useOptionProps} from '../../composables/private/use-options.js'
	export default {
		name: 'QCheckbox',
		
		props: useOptionProps,
		
		emits: ['change','update:modelValue'],
		
		setup(props,{ emit }) {
			
			const useOpts = useOption(props)
			
			function onChange(evt){
				const {isGroup,trueValue} = useOpts
				const val = isGroup.value ? evt.detail.value : (evt.detail.value[0] ? trueValue : evt.detail.value[0])
				emit('update:modelValue', val)
				
				evt.detail.value = val
				emit('change', evt)
			}
			
			
			return {
				...useOpts,
				onChange,
			}
		}
	}
</script>

<style lang="sass">
.q-checkbox
  vertical-align: middle
  //margin-right: 5px
  &:last-child
    margin-right: auto

.q-checkbox:not(.q-checked)
  .check-icon
    color: rgba(0,0,0,.54)
</style>
