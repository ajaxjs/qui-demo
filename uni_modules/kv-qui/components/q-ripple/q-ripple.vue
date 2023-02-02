<template>
	<view ref="rip" class="q-ripple">
		<view
			v-for="(vo, i) in rips" :key="i"
			class="q-ripple__inner"
			:style="vo"
		></view>
	</view>
</template>

<script>
	export default {
		name: 'QRipple',
		data(){
			return {
				page: null,
				// 波纹列表
				rips: {},
			}
		},
		methods: {
			buildStyle(evt){
				//const elm = this.$refs
				const {offsetTop,offsetLeft} = evt.currentTarget
				const {pageX,pageY} = evt.touches[0];
				return {
					left: (pageX-offsetLeft)+'px',
					top: (pageY-offsetTop)+'px',
				}
			},
			ripple(evt){
				const ti = Math.ceil(evt.timeStamp)
				this.rips[ti] = this.buildStyle(evt)
				setTimeout(()=>{
					this.rips[ti] = Object.assign({}, this.rips[ti],{left: '-50%', top: '-50%', width: '200%', height: '200%'})
					setTimeout(()=>{
						this.rips[ti] = Object.assign({}, this.rips[ti], {opacity: 0})
					},300)
					setTimeout(()=>{
						delete this.rips[ti];
					}, 600)
				}, 15)
			}
		}
	}
</script>

<style>
</style>