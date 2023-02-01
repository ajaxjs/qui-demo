<template>
	<view class="q-link" :class="color?'text-'+color:''">
		<navigator v-if="to"
			:url="to"
			:open-type="getOpenType(this.target)"
		>
			{{label}}<slot></slot>
		</navigator>
		<view v-else-if="mp" @click="$uni.openUrl({mp})">
			{{label}}<slot></slot>
		</view>
		<view v-else-if="href" @click="$uni.openUrl({href})">
			{{label}}<slot></slot>
		</view>
	</view>
</template>

<script>
	import {computed} from 'vue'
	import useLink,{ useLinkProps } from '../../composables/private/use-link.js'
	import { getOpenType } from '../../utils/uniapp/open-url.js'
	
	export default {
		name: 'QLink',
		
		props: {
			...useLinkProps,
			color: String
		},
		
		setup(props){
			const linkPrms = useLink(props)
			return {
				...linkPrms,
				getOpenType,
			}
		}
	}
</script>

<style lang="sass">
.q-link
  display: inline-block
  color: var(--q-primary)
  a, navigator
    display: inline-block
  
</style>