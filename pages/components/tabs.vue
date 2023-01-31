<template>
	<q-page>
		<Lanmu title="Tabs">
			<view class="q-pa-sm">
				Tab: {{tab}}
			</view>
			<view class="text-grey">
				设置：narrow-indicator
			</view>
			<q-tabs v-model="tab" narrow-indicator class="uni text-teal">
				<q-tab name="mails" icon="mail" label="Mails" />
				<q-tab name="alarms" icon="alarm" label="Alarms" />
				<q-tab name="movies" icon="movie" label="Movies" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<view class="text-grey">
				设置：align="justify"
			</view>
			<q-tabs v-model="tab" className="bg-green-2" align="justify">
				<q-tab class="text-orange" name="mails" icon="mail" label="Mails" />
				<q-tab class="text-cyan" name="alarms" icon="alarm" label="Alarms" />
				<q-tab class="text-red" name="movies" icon="movie" label="Movies" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<view class="text-grey">
				设置：inline-label
			</view>
			<q-tabs v-model="tab" inline-label className="bg-purple text-white shadow-2">
				<q-tab name="mails" icon="mail" label="Mails" />
				<q-tab name="alarms" icon="alarm" label="Alarms" />
				<q-tab name="movies" icon="movie" label="Movies" />
			</q-tabs>
		
			<view class="q-pa-sm"></view>
			<view class="text-grey">
				单图标
			</view>
			<q-tabs v-model="tab" className="bg-teal text-yellow shadow-2">
				<q-tab name="mails" icon="mail" />
				<q-tab name="alarms" icon="alarm" />
				<q-tab name="movies" icon="movie" />
			</q-tabs>
		
			<view class="q-pa-sm"></view>
			<view class="text-grey">滚动Tab</view>
			<q-tabs v-model="tab" inline-label className="bg-primary text-white shadow-2" align="left">
				<q-tab name="mails" icon="mail" label="Mails" />
				<q-tab name="alarms" icon="alarm" label="Alarms" />
				<q-tab name="movies" icon="movie" label="Movies" />
				<q-tab name="photos" icon="photo" label="Photos" />
				<q-tab name="videos" icon="slow_motion_video" label="Videos" />
				<q-tab name="addressbook" icon="people" label="Address Book" />
			</q-tabs>
		</Lanmu>
		<Lanmu title="其它样式">
			<view class="text-grey">自定义indicator-color</view>
			<q-tabs v-model="tab" indicator-color="purple" className="text-teal">
				<q-tab name="mails" icon="mail" />
				<q-tab name="alarms" icon="alarm" />
				<q-tab name="movies" icon="movie" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<view class="text-grey">紧凑 dense</view>
			<q-tabs v-model="tab" dense no-caps inline-label className="bg-purple text-white shadow-2">
				<q-tab name="mails" icon="mail" label="Mails" />
				<q-tab name="alarms" icon="alarm" label="Alarms" />
				<q-tab name="movies" icon="movie" label="Movies" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<q-tabs v-model="tab" dense className="bg-purple text-white shadow-2">
				<q-tab name="mails" icon="mail" label="Mails" />
				<q-tab name="alarms" icon="alarm" label="Alarms" />
				<q-tab name="movies" icon="movie" label="Movies" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<view class="text-grey">提示</view>
			<q-tabs v-model="tab" className="bg-primary text-white shadow-2">
				<q-tab name="mails" icon="mail" label="Mails">
					<q-badge color="red" floating>2</q-badge>
				</q-tab>
				<q-tab name="alarms" icon="alarm" label="Alarms">
					<q-badge color="red" floating>10+</q-badge>
				</q-tab>
				<q-tab alert name="movies" icon="movie" label="Movies" />
				<q-tab alert="yellow" alert-icon="warning" name="photo" icon="photo" label="photo" />
			</q-tabs>
		</Lanmu>
		<Lanmu title="Alignmeng">
			<q-tabs v-model="tab" dense align="left" className="bg-primary text-white shadow-2" :breakpoint="0">
				<q-tab name="mails" icon="mail" />
				<q-tab name="alarms" icon="alarm" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<q-tabs v-model="tab" dense align="center" className="bg-primary text-white shadow-2" :breakpoint="0">
				<q-tab name="mails" icon="mail" />
				<q-tab name="alarms" icon="alarm" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<q-tabs v-model="tab" dense align="right" className="bg-primary text-white shadow-2" :breakpoint="0">
				<q-tab name="mails" icon="mail" />
				<q-tab name="alarms" icon="alarm" />
			</q-tabs>
			<view class="q-pa-sm"></view>
			<q-tabs v-model="tab" dense align="justify" className="bg-primary text-white shadow-2" :breakpoint="0">
				<q-tab name="mails" icon="mail" />
				<q-tab name="alarms" icon="alarm" />
			</q-tabs>
		</Lanmu>
		<Lanmu title="Vertical">
			<view class="row">
				<q-tabs v-model="tab" vertical indicator-color="yellow" className="bg-purple text-white shadow-2 col-4">
					<q-tab name="mails" icon="mail" label="Mails" />
					<q-tab name="alarms" icon="alarm" label="Alarms" />
					<q-tab name="movies" icon="movie" label="Movies" />
				</q-tabs>
				<view class="col q-pa-sm">
					{{tab}}
				</view>
			</view>
		</Lanmu>
	</q-page>
</template>

<script setup>
	import {
		ref,
		onMounted,
		getCurrentInstance
	} from 'vue'
	const tab = ref('mails')
</script>

<style>
</style>
