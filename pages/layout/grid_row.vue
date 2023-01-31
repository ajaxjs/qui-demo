<template>
	<div class="wrap q-pa-md">

		<div class="row">
			<div class="col">
				.col
			</div>
			<div class="col">
				.col
			</div>
		</div>

		<div class="row">
			<div class="col">
				.col
			</div>
			<div class="col">
				.col
			</div>
			<div class="col">
				.col
			</div>
		</div>

		<div class="row justify-center bg-blue-2">
		 <div class="col-12 col-sm-2">
				.col-12 .col-sm-2
			</div>
			<div class="col-12 col-sm-auto">
				.col-12 .col-md-auto (Variable width content)
			</div>
			<div class="col-12 col-sm-2">
				.col-12 .col-sm-2
			</div>
		</div>
	</div>
	<div class="title">Mix and match</div>
	<div class="q-pa-md wrap">
		<!-- Stack the columns on mobile by making one full-width and the other half-width -->
		<div class="row">
			<div class="col col-md-8">.col .col-md-8</div>
			<div class="col-6 col-md-4">.col-6 .col-md-4</div>
		</div>

		<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
		<div class="row">
			<div class="col-6 col-md-4">.col-6 .col-md-4</div>
			<div class="col-6 col-md-4">.col-6 .col-md-4</div>
			<div class="col-6 col-md-4">.col-6 .col-md-4</div>
		</div>

		<!-- Columns are always 50% wide, on mobile and desktop -->
		<div class="row">
			<div class="col-6">.col-6</div>
			<div class="col-6">.col-6</div>
		</div>
	</div>
	<div class="title">Alignment</div>
	<div class="q-pa-md doc-container">
		<q-badge>items-start</q-badge>
		<div class="row items-start">
			<div class="col">
				One of three cols
			</div>
			<div class="col">
				One of three cols
			</div>
			<div class="col">
				One of three cols
			</div>
		</div>

		<q-badge>items-center</q-badge>
		<div class="row items-center">
			<div class="col">
				One of three cols
			</div>
			<div class="col">
				One of three cols
			</div>
			<div class="col">
				One of three cols
			</div>
		</div>

		<q-badge>items-end</q-badge>
		<div class="row items-end">
			<div class="col">
				One of three cols
			</div>
			<div class="col">
				One of three cols
			</div>
			<div class="col">
				One of three cols
			</div>
		</div>

		<q-badge>self-*</q-badge>
		<div class="row">
			<div class="col self-start">
				.self-start
			</div>
			<div class="col self-center">
				.self-center
			</div>
			<div class="col self-end">
				.self-end
			</div>
		</div>
	</div>
	<div class="q-pa-md doc-container">
		<q-badge>justify-start</q-badge>
		<div class="row justify-start">
			<div class="col-4">
				One of two cols
			</div>
			<div class="col-4">
				One of two cols
			</div>
		</div>

		<q-badge>justify-center</q-badge>
		<div class="row justify-center">
			<div class="col-4">
				One of two cols
			</div>
			<div class="col-4">
				One of two cols
			</div>
		</div>

		<q-badge>justify-end</q-badge>
		<div class="row justify-end">
			<div class="col-4">
				One of two cols
			</div>
			<div class="col-4">
				One of two cols
			</div>
		</div>

		<q-badge>justify-around</q-badge>
		<div class="row justify-around">
			<div class="col-4">
				One of two cols
			</div>
			<div class="col-4">
				One of two cols
			</div>
		</div>

		<q-badge>justify-between</q-badge>
		<div class="row justify-between">
			<div class="col-4">
				One of two cols
			</div>
			<div class="col-4">
				One of two cols
			</div>
		</div>

		<q-badge>justify-evenly</q-badge>
		<div class="row justify-evenly">
			<div class="col-4">
				One of two cols
			</div>
			<div class="col-4">
				One of two cols
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="sass">
@import '../../uni_modules/kv-qui/css/variables.sass'
.title
	font-size:1.2em
	padding: 15px 10px 5px 10px
.wrap,.doc-container
	background: rgba(86,61,124,.15)
	border: 1px solid rgba(86,61,124,.2)
	
	.row
		div,view
			background: rgba(86,61,124,.15)
			border: 1px solid rgba(86,61,124,.2)
.doc-container
	.row
		background: #{$amber-2}
		height: 5rem
</style>
