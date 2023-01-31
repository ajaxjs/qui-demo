<template>
	<q-page>
		<Lanmu title="With Icon">
			<view class="q-gutter-sm">
				<q-btn class="uni" color="primary" icon="mail" label="On Left" />
				<q-btn class="uni" color="secondary" icon-right="mail" label="On Right" />
				<q-btn class="uni" color="red" icon="mail" icon-right="send" label="On Left and Right" />
				<br>
				<q-btn class="uni" icon="phone" label="Stacked" stack glossy color="purple" />
			</view>
		</Lanmu>
		
		<Lanmu title="Link">
			<view class="q-gutter-sm">
				<q-btn class="uni" color="primary" label="内部连接" to="/pages/components/card" />
				<q-btn class="uni" color="primary" label="URL连接" href="http://dictbag.com" />
				<q-btn class="uni" color="primary" label="小程序连接" mp="wxa91ff29be8dbb11c://pages/components/btn?id=12" />
			</view>
		</Lanmu>
		
		<Lanmu title="Shap">
			<view class="q-gutter-sm">
				<q-btn class="uni" color="primary" icon="shopping_cart" />
				<q-btn class="uni" color="secondary" icon="navigation" />
				<q-btn class="uni" round color="amber" glossy text-color="black" icon="layers_clear" />
				<q-btn class="uni" round color="brown-5" icon="directions" />
				<q-btn class="uni" round color="deep-orange" icon="edit_location" />
				<q-btn class="uni" square color="purple" glossy icon="local_grocery_store" />
				<q-btn class="uni" square color="black" icon="my_location" />
				<q-btn class="uni" round>
				  <q-avatar size="42px">
					<img src="https://cdn.quasar.dev/img/avatar2.jpg">
				  </q-avatar>
				</q-btn>
			</view>
		</Lanmu>
		<Lanmu title="Design">
			<div class="q-pa-md q-gutter-sm">
			    <q-btn class="uni" flat color="primary" label="Flat" />
			    <q-btn class="uni" flat rounded color="primary" label="Flat Rounded" />
			    <q-btn class="uni" flat round color="primary" icon="card_giftcard" />
			    <br>
			    <q-btn class="uni" outline color="primary" label="Outline" />
			    <q-btn class="uni" outline rounded color="primary" label="Outline Rounded" />
			    <q-btn class="uni" outline round color="primary" icon="card_giftcard" />
			    <br>
			    <q-btn class="uni" push color="primary" label="Push" />
			    <q-btn class="uni" push color="primary" round icon="card_giftcard" />
			    <q-btn class="uni" push color="white" text-color="primary" label="Push" />
			    <q-btn class="uni" push color="white" text-color="primary" round icon="card_giftcard" />
			    <br>
			    <q-btn class="uni" unelevated color="primary" label="Unelevated" />
			    <q-btn class="uni" unelevated rounded color="primary" label="Unelevated Rounded" />
			    <q-btn class="uni" unelevated round color="primary" icon="card_giftcard" />
			    <br>
			    <q-btn class="uni" no-caps color="primary" label="No caps" />
			    <br>
			    <q-btn class="uni glossy" color="teal" label="Glossy" />
			    <q-btn class="uni glossy" rounded color="deep-orange" label="Glossy Rounded" />
			    <q-btn class="uni glossy" round color="primary" icon="card_giftcard" />
			    <q-btn class="uni glossy" round color="secondary" icon="local_florist" />
			    <q-btn class="uni glossy" round color="deep-orange" icon="local_activity" />
			</div>
		</Lanmu>
		<Lanmu title="加载与进度">
			<div class="q-pa-md q-gutter-sm">
				<q-btn class="uni"
					:loading="progress[0].loading"
					:percentage="progress[0].percentage"
					color="primary"
					@click="startComputing(0)"
					style="width:150px"
				>
					Compute PI
					<template v-slot:loading>
						<q-spinner class="on-left" />
						Computing...
					</template>
				</q-btn>
			
				<q-btn class="uni"
					round
					:loading="progress[1].loading"
					:percentage="progress[1].percentage"
					color="secondary"
					@click="startComputing(1)"
					icon="cloud_upload"
				/>
			
				<q-btn class="uni"
					unelevated
					:loading="progress[2].loading"
					:percentage="progress[2].percentage"
					dark-percentage
					color="orange"
					text-color="grey-9"
					@click="startComputing(2)"
					icon="cloud_upload"
					style="width:100px"
				/>
			</div>
		</Lanmu>
		
		<Lanmu title="Button Group">
			<view class="q-gutter-md">
				<q-btn-group class="uni" push>
					<q-btn push label="First" icon="timeline" />
					<q-btn push label="Second" icon="visibility" />
					<q-btn push label="Third" icon="update" />
				</q-btn-group>
				
				<q-btn-group class="uni" push>
					<q-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
					<q-btn color="amber" glossy text-color="black" push label="Second" />
					<q-btn color="orange" glossy text-color="black" push label="Third" />
				</q-btn-group>
				
				<q-btn-group class="uni" outline>
					<q-btn outline color="brown" label="First" />
					<q-btn outline color="brown" label="Second" icon-right="watch_later" />
					<q-btn outline color="brown" label="Third" />
				</q-btn-group>
				
				<q-btn-group class="uni">
					<q-btn color="secondary" glossy label="First" />
					<q-btn color="secondary" glossy label="Second" />
					<q-btn color="secondary" glossy label="Third" />
					<q-btn color="secondary" glossy label="Fourth" />
				</q-btn-group>
				
				<q-btn-group class="uni">
					<q-btn color="accent" icon="timeline" />
					<q-btn color="accent" icon="visibility" />
					<q-btn color="accent" icon="update" />
				</q-btn-group>
				
				<q-btn-group class="uni" rounded>
					<q-btn color="amber" rounded glossy icon="timeline" />
					<q-btn color="amber" rounded glossy icon="visibility" />
					<q-btn color="amber" rounded glossy icon-right="update" label="Update" />
				</q-btn-group>
			</view>
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		data(){
			return {
				progress: [
					{ loading: false, percentage: 0 },
					{ loading: false, percentage: 0 },
					{ loading: false, percentage: 0 }
				],
			}
		},
		methods: {
			startComputing(i){
				this.progress[i].loading = true
				this.progress[i].times = setInterval(()=>{
					this.progress[i].percentage += Math.floor(Math.random() * 8 + 10)
					if (this.progress[i].percentage >= 100) {
						clearInterval(this.progress[i].times)
						this.progress[i].loading = false
						this.progress[i].percentage = 0
					}
				}, 700)
			},
			onClick(evt){
				console.log('点击了！');
			},
			onRippel(evt){
				this.$refs.ripple.ripple(evt)
			}
		}
	}
</script>

<style lang="sass">
@import '../../uni_modules/kv-qui/css/variables.sass'
.tee
  #{$nextAll}
    color: #F00
</style>