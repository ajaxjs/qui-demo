<template>
	<q-page>
		<Lanmu title="Determined state">
			<div class="q-gutter-y-sm">
				<q-btn size="sm" color="primary" @click="randomize" label="Change Model" />
				<view><q-linear-progress :value="progress" /></view>
				<view><q-linear-progress :value="progress" color="warning" /></view>
				<view><q-linear-progress :value="progress" color="secondary" /></view>
				<view><q-linear-progress :value="progress" rounded color="accent" /></view>
				<view><q-linear-progress :value="progress" rounded color="purple" track-color="orange" /></view>
				<view><q-linear-progress :value="progress" rounded color="negative" /></view>
				<view class="q-py-sm"><q-separator spaced /></view>
				<view><q-linear-progress reverse :value="progress" /></view>
				<view><q-linear-progress reverse :value="progress" color="warning" /></view>
				<view><q-linear-progress reverse :value="progress" color="secondary" /></view>
			</div>
		</Lanmu>
		<Lanmu title="Custom" content-class="q-gutter-y-sm">
			<view><q-linear-progress size="10px" :value="progress" /></view>
			<view><q-linear-progress rounded size="20px" :value="progress" color="warning" /></view>
			<view><q-linear-progress rounded size="15px" :value="progress" color="secondary" /></view>
			<view><q-linear-progress size="25px" :value="progress" color="accent" /></view>
			<view class="q-py-sm"><q-separator spaced /></view>
			<view><q-linear-progress
				v-for="(size,i) in ['xs', 'sm', 'md', 'lg', 'xl']"
				:key="size"
				:size="size"
				:value="progress"
				color="primary"
				class="q-my-sm"
				@click="randomize"
			/></view>
			<view class="q-py-sm"><q-separator spaced /></view>
			<view><q-linear-progress stripe size="10px" :value="progress" /></view>
			<view><q-linear-progress stripe rounded size="20px" :value="progress*1.2" color="warning" /></view>
		</Lanmu>
		<Lanmu title="Indeterminate state">
			<div class="q-gutter-y-sm">
				<q-linear-progress indeterminate />
				<view><q-linear-progress indeterminate color="warning" /></view>
				<view><q-linear-progress indeterminate color="secondary" /></view>
				<view><q-linear-progress indeterminate rounded color="accent" /></view>
				<view class="q-py-sm"><q-separator spaced /></view>
				<view><q-linear-progress query track-color="orange" color="purple" /></view>
				<view><q-linear-progress query color="negative" /></view>
			</div>
		</Lanmu>
	</q-page>
</template>

<script>
	import { ref } from 'vue'

	export default {
		setup() {
			const progress = ref(0.4)

			return {
				progress,
				randomize() {
					progress.value = Math.random()
				}
			}
		}
	}
</script>

<style>
</style>
