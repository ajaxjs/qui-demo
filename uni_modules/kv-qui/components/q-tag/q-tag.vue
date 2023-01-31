<template>
	<text v-if="name=='text'">
		<slot></slot>
	</text>
	<form v-else-if="name=='form'">
		<slot></slot>
	</form>
	<view v-else>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "tag",
		props: {
			name: {
				type: String,
				default: 'view',
			}
		}
	}
</script>

<style>
</style>