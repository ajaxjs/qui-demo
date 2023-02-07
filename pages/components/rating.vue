<template>
	<q-page>
		<Lanmu title="基础">
			<view class="q-gutter-y-md column">
				<view><q-rating v-model="ratingModel" size="1.5em" icon="thumb_up" /></view>
				<view><q-rating v-model="ratingModel" size="2em" color="red-7" icon="favorite_border" /></view>
				<view><q-rating v-model="ratingModel" size="2.5em" color="purple-4" icon="create" /></view>
				<view><q-rating v-model="ratingModel" size="3em" color="brown-5" icon="pets" /></view>
				<view><q-rating v-model="ratingModel" size="3.5em" color="green-5" icon="star_border" /></view>
			</view>
		</Lanmu>
		<Lanmu title="高级">
			<view class="q-gutter-y-md column">
				<view><q-rating v-model="ratingModel" size="2em" :max="10" color="primary" /></view>
				<view><q-rating v-model="ratingModel" size="3.5em" icon="img:https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random/6.png" /></view>
				<view><q-rating v-model="ratingModel" size="3.5em" color="green-5" icon="star_border" icon-selected="star" /></view>
				<view><q-rating v-model="ratingModel" :max="4" size="3.5em" color="green-5" :icon="icons" /></view>
				<view><q-rating v-model="ratingModel" size="3.5em" color="grey" :color-selected="ratingColors" /></view>
				
			</view>
		</Lanmu>
		<Lanmu title="只读和禁用">
			<view class="q-gutter-y-md column">
				<view><q-rating v-model="ratingModel" size="2em" color="orange" readonly /></view>
				<view><q-rating v-model="ratingModel" size="2em" color="purple" disable /></view>
			</view>
		</Lanmu>
		<Lanmu title="尺寸">
			<view class="q-gutter-y-md column">
				<view v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size">
					<q-rating :size="size" v-model="ratingModel" icon="stars" color="primary" />
				</view>
			</view>
		</Lanmu>
		<Lanmu title="浮点数">
			<view class="q-gutter-y-md column">
				<view><q-rating v-model="model1" max="7" size="2em" color="green-5" icon="star_border" icon-selected="star" icon-half="star_half" /></view>
				<view><q-rating v-model="model2" max="7" size="2em" color="yellow" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming /></view>
				<view><q-rating v-model="model3" max="7" size="2em" color="red" color-selected="red-9" icon="favorite_border" icon-selected="favorite" icon-half="favorite" no-dimming /></view>
				<view>
					<q-btn color="grey" no-caps label="Reset" @click="resetModels" />
				</view>
			</view>
		</Lanmu>
	</q-page>
</template>

<script setup>
import { ref } from "vue";
	const ratingModel = ref(3)
	const icons =  [ 'sentiment_very_dissatisfied', 'sentiment_dissatisfied', 'sentiment_satisfied', 'sentiment_very_satisfied']
	const ratingColors= [ 'light-green-3', 'light-green-6', 'green', 'green-9', 'green-10' ]
	
	const model1 = ref(3.5)
	const model2 = ref(2.3)
	const model3 = ref(4.5)
	function resetModels () {
		model1.value = 3.5
		model2.value = 2.3
		model3.value = 4.5
	}
</script>

<style>
</style>
