<template>
	<picker-view class="q-picker" :value="indexValue" :style="styles" :indicator-style="indicatorStyle"
		@change="onChange"
		@pickstart="onPickstart"
		@pickend="onPickend"
	>
		<picker-view-column v-for="(item, i) in options" :key="i">
			<view class="item" :class="(indexValue[i]==d?'active':'')" :style="indicatorStyle" v-for="(vo, d) in item" :key="d">
				<text class="perfix" v-if="perfix">{{getFix(perfix,i)}}</text>
				<text class="label">{{getItem(vo,'label')}}</text>
				<text class="suffix" v-if="suffix">{{getFix(suffix,i)}}</text>
			</view>
		</picker-view-column>
	</picker-view>
</template>

<script>
	import {ref,watch,computed, toRaw, onMounted} from 'vue'
	import {isDeepEqual} from '../../utils/is.js'
	import {usePkViewProps} from './usePickerview.js'
	export default{
		props: usePkViewProps,
		emits: ['update:modelValue','change','pickstart','pickend','ready'],
		setup(props,{emit}){
			const initValue = props.options?(new Array(props.options.length)).fill(0):[]
			// 索引值
			const indexValue = ref(initValue)
			// 真实真
			const innerValue = ref(null)
			// 读取前后缀
			function getFix(fix,i){
				return Array.isArray(fix) ? (fix[i]||'') : fix
			}
			// 读取label或value
			function getItem(item, name){
				name = {label: props.itemLabel, value: props.itemValue}[name]
				return typeof(item)=='object'? item[name] : item
			}
			// 通过值读取索引
			function getValueIndex(val){
				return props.options.map((col,ci) => {
					let index = 0
					for (var i = 0; i < col.length; i++) {
						if(getItem(col[i],'value') == val[ci]){
							return i
						}
					}
					return index
				})
			}
			// 通过索引读取值(lab=读取值item的标签，= value | label)
			function getIndexValue(lab){
				let val = indexValue.value.map((ind,ci)=>props.options[ci][ind])
				if(lab){
					val = val.map(vo=>getItem(vo,lab))
				}
				return val
			}
			if(props.modelValue){
				indexValue.value = getValueIndex(props.modelValue)
			}else{
				//innerValue.value = getIndexValue('value')
			}
			
			watch(() => props.modelValue, (val)=>{
				const valIndex = getValueIndex(props.modelValue)
				//console.log(isDeepEqual(indexValue.value, valIndex),valIndex);
				if(!isDeepEqual(indexValue.value, valIndex)){
					indexValue.value = valIndex
				}
			})
			
			const indicatorStyle = `height: ${props.itemHeight}px; line-height: ${props.itemHeight}px;`
			+(props.align?`text-align: ${props.align}`:'')
			const styles = computed(()=>`height:${props.itemHeight * props.rowNumber}`)
			
			function getValue(index){
				index = index || indexValue.value
				const rawValue = index.map((ind,ci) => {
					const col = props.options[ci]
					return ind >= col.length-1 ? col[col.length-1] : col[ind]
				})
				const value = rawValue.map(vo=>getItem(vo,'value'))
				return {index, rawValue, value}
			}
			
			function onChange(evt){
				indexValue.value = evt.detail.value
				const detail = getValue(indexValue.value)
				innerValue.value = detail.value
				evt.detail = detail
				
				emit('update:modelValue', innerValue.value)
				emit('change', evt)
			}
			function onPickstart(evt){
				emit('pickstart', evt);
			}
			function onPickend(evt){
				emit('pickend', evt);
			}
			
			onMounted(()=>{
				emit('ready', getValue())
			})
			
			return {
				indexValue,
				innerValue,
				styles,
				indicatorStyle,
				
				getValue,
				getItem,
				getFix,
				
				onChange,
				onPickstart,
				onPickend,
			}
		}
	}
</script>

<style lang="sass">
.q-picker
  height: 300px
  &-item
    height: 50px
</style>