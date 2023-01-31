<template>
	<q-page>
		<Lanmu title="Custom aspect ratio">
			<view class="row q-col-gutter-x-sm q-ma-sm">
				<div class="col-4">
					Ratio: 16/9
					<q-img src="https://placeimg.com/500/300/nature" :ratio="16/9" />
				</div>
				
				<div class="col-4">
					Ratio: 1
					<q-img src="https://placeimg.com/500/300/nature" :ratio="1" />
				</div>
				
				<div class="col-4">
					Ratio: 4/3
					<q-img src="https://placeimg.com/500/300/nature" :ratio="4/3" />
				</div>
			</view>
		</Lanmu>
		<Lanmu title="Caption">
			<div class="q-col-gutter-md row items-start">
				<div class="col-6">
					<q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
						<div class="absolute-bottom text-subtitle1 text-center">
							Caption
						</div>
					</q-img>
				</div>
			
				<div class="col-6">
					<q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
						<div class="absolute-top text-center">
							Caption
						</div>
					</q-img>
				</div>
			
				<div class="col-6">
					<q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
						<div class="absolute-bottom-right text-subtitle2">
							Caption
						</div>
					</q-img>
				</div>
			
				<div class="col-6">
					<q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
						<div class="absolute-full text-subtitle2 flex flex-center">
							Caption
						</div>
					</q-img>
				</div>
			</div>
		</Lanmu>
		<Lanmu title="图片">
			<q-img class="bg-grey-4"
				:src="`https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random1/${imgid}.png`"
				error="https://suan.qxtky.com/static/user/default.jpg"
			/>
			<button @click="changeId">刷新</button>
			<view class="q-pa-sm">
				原始尺寸：width={{width}} height={{height}}
			</view>
			<view class="q-py-sm">
				<q-img :src="`https://placeimg.com/${width}/${height}/nature`" id="orignal" class="bg-green-4" />
				<view class="">不设置大小</view>
			</view>
			<view class="q-py-sm">
				<q-img :src="`https://placeimg.com/${width}/${height}/nature`" width=" 200 " height="80" id="orignal" class="bg-grey" />
				<view>设置：width="200" height="80"</view>
			</view>
			
			<button @click="setImgSize">刷新</button>
			
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		data(){
			return {
				imgid: 0,
				width:0,
				height:0,
			}
		},
		mounted() {
			this.setImgSize()
		},
		methods: {
			changeId(){
				this.imgid = Math.ceil(Math.random()*1000)
			},
			random(minNum,maxNum){
				return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10)
			},
			setImgSize(){
				this.width = this.random(100,200)
				this.height = this.random(50,200)
			}
		}
	}
</script>

<style>
</style>