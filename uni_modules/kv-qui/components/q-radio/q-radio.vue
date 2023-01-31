<template>
	<radio-group class="row" :class="'q-gutter-'+gutter" @change="onChange">
		<label class="q-radio" :class="[labelClass,{'q-checked':status[i]}]" :style="labelStyle" v-for="(vo, i) in opts" :key="i">
			<q-icon class="check-icon" v-if="icons[i]" :name="icons[i]" size="22px" />
			<radio v-show="!icons[i]" :value="vo.value" :checked="status[i]" :color="vo.color" />
			<text>{{vo.label}}</text>
		</label>
	</radio-group>
</template>

<script>
	import {ref,watch,computed} from 'vue'
	import useOption,{useOptionProps} from '../../composables/private/use-options.js'
	export default {
		name: 'QRadio',
		
		props: useOptionProps,
		
		emits: [ 'change','update:modelValue' ],
		
		setup (props, { slots, emit }) {
			const {checkedIcon,uncheckedIcon,modelValue} = props
			
			function onChange(evt){
				emit('update:modelValue', evt.detail.value)
				emit('change', evt)
			}
			
			const useOpts = useOption(props)
			
			return {
				...useOpts,
				onChange
			}
		}
	}
</script>

<style lang="sass">
.q-radio:not(.q-checked)
  .check-icon
    color: rgba(0,0,0,.54)

.check-icon
  width: 22px
  height: 22px
  display: inline-flex
  align-items: center
  vertical-align: middle
  margin-right: 5px
</style>