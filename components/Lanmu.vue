<template>
	<div class="lanmu q-mx-sm q-mb-sm">
		<view class="row q-pa-sm">
			<div class="title text-subtitle1 text-bold">{{title}}</div>
			<q-space />
			<q-btn dense flat size="sm" :label="hide?'显示':'隐藏'" v-if="toggleBtn" @click="hide = !hide" />
		</view>
		<q-separator v-if="!hide"></q-separator>
		<view class="q-pa-sm" :class="contentClass" :style="contentStyle" v-show="!hide">
			<slot></slot>
		</view>
	</div>
</template>

<script>
	import { computed } from "vue"
	export default {
		props: {
			title: String,
			contentClass: String,
			contentStyle: String,
			hide: Boolean,
			showToggle: Boolean
		},
		setup(props){
			const toggleBtn = computed(()=>props.hide === true || props.showToggle)
			return {
				toggleBtn
			}
		}
	}
</script>

<style lang="sass">
.p-page lanmu:first-child .lanmu,
.lanmu:first-child
  margin-top: 10px

.lanmu
  border:#d9d9d9 solid 1px
  border-radius: 5px
  background:#FFF
  
</style>