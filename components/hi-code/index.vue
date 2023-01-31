<template>
	<view class="hi-code">
		<view class="title row text-blue-grey" v-if="codeArr.length">
			<view class="tab q-px-sm" :class="i==cid?'text-blue':''" v-for="(vo,i) in codeArr" :key="i" @click="cid=i">{{vo.title||i}}</view>
		</view>
		<template v-for="(vo,i) in codeArr" :key="i">
			<scroll-view scroll-x scroll-y v-if="i==cid">
				<pre><code class="text-grey-8">{{vo.code}}</code></pre>
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
			code: [String]
		},
		setup(props){
			const codeArr = ref(props.code)
			if(!Array.isArray(props.code)){
				codeArr.value = [{title: props.title,code: props.code}]
			}
			return {
				cid: ref(0),
				codeArr
			}
		}
	}
</script>

<style lang="sass" scoped>
@import '@/uni_modules/kv-qui/css/variables.sass'
.hi-code
  border: #{$blue-grey-4} solid 1px
  border-radius: 5px
  .title
    padding: 5px
    border-bottom: #{$blue-grey-4} solid 1px
    .tab
      border-right: #{$blue-grey-4} solid 1px

  pre
    padding: 5px
    min-height: 150px
</style>