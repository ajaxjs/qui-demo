<template>
	<q-page>
		<Lanmu title="Basic" content-class="q-pa-md">
			<view class="title q-py-sm col">基础功能</view>
			<view class="row q-gutter-sm items-center">
				<view><q-avatar color="red" text-color="white" icon="directions" /></view>
				<view><q-avatar color="primary" text-color="white">字</q-avatar></view>
				<view><q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" /></view>
				<view><q-avatar size="24px" color="orange">J</q-avatar></view>
				<view>
					<q-avatar>
						<img src="https://cdn.quasar.dev/img/avatar.png">
					</q-avatar>
				</view>
			</view>
			
			<view class="title q-py-sm col">尺寸大小</view>
			<view class="row q-gutter-sm items-center">
				<view v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size">
					<q-avatar
						:size="size"
						color="primary"
						text-color="white"
						icon="directions"
					/>
				</view>
			</view>
			
			<view class="title q-py-sm col">不同形状</view>
			<view class="row q-gutter-sm items-center">
				<view><q-avatar square color="green" text-color="white">A</q-avatar></view>
				<view><q-avatar color="teal" text-color="white" icon="person"></q-avatar></view>
				<view><q-avatar rounded color="blue" text-color="white" icon="directions" /></view>
			</view>
		</Lanmu>
		<Lanmu title="与其它组件一起用" content-class="q-pa-md">
			<view class="title q-py-sm col">与图片组件</view>
			<view class="row q-gutter-sm items-center">
				<q-avatar rounded class="uni">
					<img src="https://cdn.quasar.dev/img/avatar.png">
				</q-avatar>
				
				<q-avatar class="uni">
					<img src="https://cdn.quasar.dev/img/avatar.png">
				</q-avatar>
				
				<q-avatar square class="uni">
					<img src="https://cdn.quasar.dev/img/avatar.png">
				</q-avatar>
			</view>
			
			<view class="title q-py-sm col">与按扭</view>
			<view class="row q-gutter-sm items-center">
				<q-btn flat dense>
					<q-avatar rounded color="green" text-color="white">A</q-avatar>
				</q-btn>
				<q-btn flat dense rounded>
					<q-avatar color="green" text-color="white">A</q-avatar>
				</q-btn>
			</view>
			
			<view class="title q-py-sm col">头像组</view>
			<div>
				<q-avatar v-for="n in 5" :key="n" size="40px" class="overlapping" style="margin-left:-10px;border:#fff solid 2px;">
					<img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
				</q-avatar>
			</div>
		</Lanmu>
	</q-page>
</template>

<script>
</script>

<style lang="sass" scoped>
.title
  color: grey
</style>
