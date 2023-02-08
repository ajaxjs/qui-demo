<template>
	<view class="q-skeleton-wrap" :class="classes">
		<view class="q-skeleton-block" :class="row.class" v-for="(row, i) in opts" :key="i">
			<view class="q-skeleton-group" :class="vo.itemClass" v-for="(vo, k) in row.items" :key="vo">
				<template v-if="vo.type && skeletonTypes.includes(vo.type)">
					<view :class="vo.class" v-for="(si) in vo.len" :key="si">
						<q-skeleton
							:type="vo.type"
							:animation="animation"
							:animationSpeed="animationSpeed"
							:height="vo.height"
							:width="vo.width"
							:square="vo.square"
							:bordered="vo.bordered"
							:size="vo.size"
						/>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	// 数据格式，数据分为‘块’和‘组’，数组中每个一级元素为一个块。块为对象时，可以设置当前块。
	// 块为数组时，相当于items。意味着该块无其它参数。
	// 每个块里面的items为一个组，可以放若干个骨架元素。
	// 每个骨架元素，由q-skeleton的参数加上排版参数组成。如：flex:而已/col:比例/gutter:间距/align:对齐。具体参数css辅助样式。
	import {computed} from 'vue'
	import { isArray,isBoolean,isNumber } from "../../utils/is.js";
	import classNames from '../../utils/class-names.js'
	import useAlign, {alignMap} from '../../composables/private/use-align.js'
	import useSkeleton, {skeletonTypes,useSkeletonProps,skeletonAnimations} from '../q-skeleton/use-skeleton.js'
	export default {
		props: {
			...useSkeletonProps,
			// 渲染数据
			options: Array,
			// 间距
			gutter: String,
			// 布局 row/col
			flex: String,
		},
		setup(props){
			// 外框样式
			const classes = computed(()=>classNames(props.flex,props.gutter?`q${props.flex?'-col':''}-gutter-${props.gutter}`:''))
			
			const fmtCol = co => co ? 'col'+(isBoolean(co)?'':'-'+co) : ''
			function fmtItem(item){
				item.type = item.type || 'rect'
				// item 组 view样式
				item.itemClass = classNames(
					item.class,
					item.flex,
					'type-'+item.type,
					fmtCol(item.col), 
					item.align,
					item.gutter ? `q${item.flex?'-col':''}-gutter-${item.gutter}` : ''
				)
				item.len = isNumber(item.len) ? item.len : 1
				return item
			}
			// 格式化渲染数据
			function fmtData(ske){
				let retn = {}
				if(isArray(ske)){
					retn.items = ske.map(vo=>fmtItem(vo))
				}else if(ske.items){
					retn.items = ske.items.map(vo=>fmtItem(vo))
					retn = Object.assign({}, retn, ske)
				}else{
					return null
				}
				retn.class = classNames(
					retn.class, 
					retn.flex,
					retn.align,
					fmtCol(retn.col), 
					retn.gutter?'q-col-gutter-'+retn.gutter:''
				)
				
				console.log(retn);
				return retn
			}
			const opts = computed(()=>props.options ? props.options.map(ske=>fmtData(ske)).filter(vo=>vo) : null)
			return {
				opts,
				classes,
				skeletonTypes
			}
		}
	}
</script>

<style scoped>

</style>