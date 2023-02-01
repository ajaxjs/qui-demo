<template>
	<view class="hi-code q-mt-sm" :class="(isShow?'show':'hide')">
		<view class="title row text-blue-grey" v-if="codeArr.length">
			<view class="tab q-px-sm" :class="i==cid?'text-blue':''" v-for="(vo,i) in codeArr" :key="i" @click="toTab(i)">{{vo.title||i}}</view>
			<view class="col"></view>
			<view class="">
				<q-btn dense size="sm" flat :label="isShow?'隐藏':'显示'" @click="isShow = !isShow" />
			</view>
		</view>
		<template v-for="(vo,i) in codeArr" :key="i">
			<scroll-view scroll-x scroll-y v-if="i==cid" v-show="isShow">
				<pre><code class="text-grey-8">{{vo.code}}<slot></slot></code></pre>
			</scroll-view>
		</template>
	</view>
</template>

<script>
	import {ref} from 'vue'
	import {isJson} from '@/uni_modules/kv-qui/utils/is.js'
	export default {
		props: {
			title: String,
			code: [String],
			hide: Boolean
		},
		setup(props){
			const cid = ref(0)
			const isShow = ref(!props.hide)
			const codeArr = ref(props.code)
			if(!Array.isArray(props.code)){
				codeArr.value = [{title: props.title,code: props.code}]
			}
			function toTab(i){
				cid.value = i
				isShow.value = true
			}
			return {
				cid,
				codeArr,
				isShow,
				toTab
			}
		}
	}
</script>

<style lang="sass" scoped>
@import '@/uni_modules/kv-qui/css/variables.sass'
.hi-code
  border-radius: 5px
  border: #{$blue-grey-4} solid 1px
  &:not(.hide) .title
    border-bottom: #{$blue-grey-4} solid 1px
  .title
    padding: 5px
    .tab
      border-right: #{$blue-grey-4} solid 1px

  pre
    padding: 5px
    min-height: 150px
</style>