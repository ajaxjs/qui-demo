<template>
	<view class="">
		<q-icon v-if="ctype=='icon'" v-bind="$attrs" />
		<q-img v-if="ctype=='img'" v-bind="$attrs" />
		<q-btn v-if="ctype=='btn'" v-bind="$attrs" />
		<q-avatar v-if="ctype=='avatar'" v-bind="$attrs">
			<q-img v-if="$attrs.src" :src="$attrs.src" />
		</q-avatar>
	</view>
</template>

<script setup>
	const props = defineProps({
		ctype: {
			type: String,
			validator(val){
				return ['icon','img','avatar','btn'].includes(val)
			}
		},
	})
</script>

<style>
</style>