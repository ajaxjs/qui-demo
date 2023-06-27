<template>
	<q-pickerview ref="pickView" align="center" v-model="innerValue" :options="options"
		@ready="onDateReady"
		@change="onDateChange"
	></q-pickerview>
</template>

<script>
</script>

<style>
</style>