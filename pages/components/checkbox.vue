<template>
	<q-page>
		<Lanmu title="Radio">
			<q-radio v-model="shape" :options="shapeArr" />
			<q-banner rounded className="bg-orange-3 q-mt-md">
				单选:<strong>{{shape}}</strong>
			</q-banner>
			
			<q-separator spaced />
			
			<q-radio v-model="sex" :options="sexArr" />
			<q-banner rounded className="bg-orange-3 q-mt-md">
				单选:<strong>{{sex}}</strong>
			</q-banner>
			
			<q-separator spaced />
			
			<q-radio v-model="hobby" :options="hobbyArr" />
			<q-banner rounded className="bg-orange-3 q-mt-md">
				单选自定未选中图标：<strong>{{hobby}}</strong>
			</q-banner>
		</Lanmu>
		<Lanmu title="Checkbox">
			<q-checkbox v-model="sign1" label="记住密码Boolean" className="q-mb-sm"></q-checkbox>
			<q-checkbox v-model="sign2" val="ok ok" label="记住密码Value"></q-checkbox>
			<q-banner rounded className="bg-orange-3 q-mt-md">
				<view>单一选项(布尔值):<strong>{{sign1}}</strong></view>
				<view>单一选项(自定值):<strong>{{sign2}}</strong></view>
			</q-banner>
			
			<q-separator spaced />
			
			<q-checkbox v-model="chk0" :options="shapeArr"></q-checkbox>
			<q-banner rounded className="bg-orange-3 q-mt-md">
				多选:<strong>{{chk0}}</strong>
			</q-banner>
			
			<q-separator spaced />
			
			<q-checkbox v-model="chk1" :options="shapeArr" checked-icon="star"></q-checkbox>
			<q-banner rounded className="bg-orange-3 q-mt-md">
				换多选选中图标:<strong>{{chk1}}</strong>
			</q-banner>
			
			<q-separator spaced />
			
			<q-checkbox v-model="chk2" :options="shapeArr" checked-icon="star" unchecked-icon="star_border"></q-checkbox>
			<q-banner rounded className="bg-orange-3 q-mt-md">
				换多选选中+未选中图标:<strong>{{chk2}}</strong>
			</q-banner>
			
			<q-separator spaced />
			
			<q-checkbox v-model="chk3" :options="hobbyArr"></q-checkbox>
			<q-banner rounded className="bg-orange-3 q-mt-md">
				多选自定未选中图标:<strong>{{chk3}}</strong>
			</q-banner>
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		data(){
			return {
				sex: '',
				sexArr: [{label:'男生',value:'男', icon:'man'},{label:'女生',value:'女', icon:'woman'}],
				shape: '',
				shapeArr: ['颜值','实力','一夫','当关','万夫','莫开'],
				hobby:'',
				hobbyArr: [
					{label:'听音乐', value:'听音乐', uncheckedIcon:'headset'},
					{label:'打篮球', value:'打篮球', uncheckedIcon:'sports_basketball'},
					{label:'看电影', value:'看电影', uncheckedIcon:'theaters'},
					{label:'玩手机', value:'刷手机', uncheckedIcon:'phone'},
					{label:'玩手机', value:'玩游戏', uncheckedIcon:'sports_esports'}
				],
				sign1: '',
				sign2: '',
				chk0: ['实力'],
				chk1: '',
				chk2: '',
				chk3: ''
			}
		}
	}
</script>

<style>
</style>