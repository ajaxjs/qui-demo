<template>
	<q-page>
		<Lanmu title="Brand Colors">
			<view class="q-gutter-sm">
				<q-btn no-caps :label="vo" :color="vo" v-for="vo in brand" :key="vo" />
			</view>
			<view class="q-py-sm text-blue-grey">文字颜色(可加序号)</view>
			<view class="row q-col-gutter-sm">
				<view :class="'text-'+vo" v-for="vo in $q.colors" :key="vo">{{'text-'+vo}}</view>
			</view>
		</Lanmu>
		
		<Lanmu title="Color List">
			<view class="row q-col-gutter-sm">
				<view class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="vo in $q.colors" :key="vo">
					<view class="color-item text-white" :class="'bg-'+vo">{{'bg-'+vo}}</view>
					<view class="color-item" :class="('bg-'+vo+'-'+i)+(i>=6?' text-white':'')" v-for="i in 14" :key="i">
						{{'bg-'+vo+'-'+i}}
					</view>
				</view>
			</view>
		</Lanmu>
	</q-page>
</template>

<script setup>
	const brand = ['primary','secondary','accent','dark','positive','negative','info','warning']
</script>

<style lang="sass">
.color-item
  border-radius: 4px
  padding: 10px
  margin-bottom: 3px
</style>