<template>
	<q-page>
		<Lanmu title="位置" content-class="row q-gutter-sm">
			<view><q-btn color="primary" label="standard" @click="showDlg({position:'standard'})" /></view>
			<view><q-btn color="primary" label="Top" @click="showDlg({position:'top'})" /></view>
			<view><q-btn color="primary" label="left" @click="showDlg({position:'left'})" /></view>
			<view><q-btn color="primary" label="right" @click="showDlg({position:'right'})" /></view>
			<view><q-btn color="primary" label="bottom" @click="showDlg({position:'bottom'})" /></view>
		</Lanmu>
		
		<Lanmu title="效果">
			<view class="row q-gutter-sm">
				<view><q-btn color="primary" label="auto-Close" @click="showDlg({autoClose: true})" /></view>
				<view><q-btn color="primary" label="persistent" @click="showDlg({persistent:true})" /></view>
				
				<view><q-btn color="primary" label="flip" @click="showDlg({transition:['flip-in','flip-out']})" /></view>
				<view><q-btn color="primary" label="rotate" @click="showDlg({transition:['rotate-in','rotate-out']})" /></view>
				<view><q-btn color="primary" label="slide-up" @click="showDlg({transition:['slide-in-up','slide-out-up']})" /></view>
				<view><q-btn color="primary" label="slide-down" @click="showDlg({transition:['slide-in-down','slide-out-down']})" /></view>
				<view><q-btn color="primary" label="slide-left" @click="showDlg({transition:['slide-in-left','slide-out-left']})" /></view>
				<view><q-btn color="primary" label="slide-right" @click="showDlg({transition:['slide-in-right','slide-out-right']})" /></view>
			</view>
			
			<q-separator spaced></q-separator>
			
			<view class="row q-gutter-sm">
				<view><q-btn color="primary" label="show方法" @click="$refs.dialog.show()" /></view>
			</view>
		</Lanmu>
	</q-page>
	
	
	
	<q-dialog ref="dialog" v-model="show"
		:persistent="box.persistent"
		:position="box.position"
		:maximized="box.maximized"
		:full-width="box.fullWidth"
		:full-height="box.fullHeight"
		:auto-close="box.autoClose"
		:transition-show="box.transition[0]"
		:transition-hide="box.transition[1]"
		@show="onShow"
		@hide="onHide"
	>
		<q-card>
			<q-card-section className="row items-center">
				<view class="col">标题</view>
				<q-btn flat dense :icon="box.maximized?'fullscreen_exit':'fullscreen'" @click="showDlg({maximized: !box.maximized})" />
				<q-btn flat dense icon="close" @click="$q.closePopup" />
			</q-card-section>
			<q-separator></q-separator>
			<q-card-section>
				弹窗位置：
				<view class="" v-for="(vo,key) in box" :key="key">
					{{key}}: 
					<text :class="'text-'+(typeof vo == 'boolean'?(vo?'green-7':'red'):'blue')">{{vo}}</text>
				</view>
				<view class="row q-gutter-sm">
					<view class="">
						<q-btn color="primary" label="full-width" @click="Object.assign(box,{fullWidth: !box.fullWidth})" />
					</view>
					<view class="">
					<q-btn color="primary" label="full-height" @click="Object.assign(box,{fullHeight: !box.fullHeight})" />
					</view>
				</view>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<script>
	import {ref,reactive} from 'vue'
	import { createAnimation } from '../../uni_modules/kv-qui/components/q-transition/createAnimation.js'
	export default {
		data(){
			const popDft = {
				position: 'standard',
				maximized: false,
				fullWidth: false,
				fullHeight: false,
				persistent: false,
				autoClose: false,
				transition: []
			}
			const box = popDft;
			return {
				popDft,
				box,
				show: false,
				showAni: false,
				anim: {},
				anic: ''
			}
		},
		methods: {
			showDlg(pos){
				this.show = true
				this.box = Object.assign({}, this.box, pos)
			},
			onShow(evt){
				console.log('onShow',evt);
			},
			onHide(evt){
				this.box = this.popDft
				console.log('onHide',evt);
			}
		}
	}
</script>

<style lang="sass">

</style>