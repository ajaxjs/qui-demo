<template>
	<Lanmu title="Sizes for q-gutter">
		<div class="q-pa-md" style="max-width: 500px">
			<p>q-gutter-xs</p>
			<div class="q-gutter-xs">
				<q-btn class="uni" color="brown" label="Button" v-for="n in 7" :key="`xs-${n}`" />
			</div>

			<p class="q-mt-md">q-gutter-sm</p>
			<div class="q-gutter-sm">
				<q-btn class="uni" color="teal" label="Button" v-for="n in 7" :key="`sm-${n}`" />
			</div>

			<p class="q-mt-md">q-gutter-md</p>
			<div class="q-gutter-md">
				<q-btn class="uni" color="accent" label="Button" v-for="n in 7" :key="`md-${n}`" />
			</div>

			<p class="q-mt-md">q-gutter-lg</p>
			<div class="q-gutter-lg">
				<q-btn class="uni" color="red" label="Button" v-for="n in 7" :key="`lg-${n}`" />
			</div>

			<p class="q-mt-md">q-gutter-xl</p>
			<div class="q-gutter-xl">
				<q-btn class="uni" color="indigo" label="Button" v-for="n in 7" :key="`xl-${n}`" />
			</div>
		</div>
	</Lanmu>

	<Lanmu title="Sizes for q-col-gutter">
		<div class="q-pa-md">

			<div class="row q-col-gutter-none">
				<div class="col-4" v-for="n in 5" :key="`none-${n}`">
					<div class="my-content">&nbsp;</div>
				</div>
			</div>

			<q-separator spaced />

			<div class="row q-col-gutter-xs">
				<div class="col-4" v-for="n in 5" :key="`xs-${n}`">
					<div class="my-content">&nbsp;</div>
				</div>
			</div>

			<q-separator spaced />

		 <div class="row q-col-gutter-sm">
				<div class="col-4" v-for="n in 5" :key="`sm-${n}`">
					<div class="my-content">&nbsp;</div>
				</div>
			</div>

			<q-separator spaced />

			<div class="row q-col-gutter-md">
		 	<div class="col-4" v-for="n in 5" :key="`md-${n}`">
					<div class="my-content">&nbsp;</div>
				</div>
			</div>

			<q-separator spaced />

			<div class="row q-col-gutter-lg">
				<div class="col-4" v-for="n in 5" :key="`lg-${n}`">
					<div class="my-content">&nbsp;</div>
				</div>
			</div>

			<q-separator spaced />

			<div class="row q-col-gutter-xl">
				<div class="col-4" v-for="n in 5" :key="`xl-${n}`">
					<div class="my-content">&nbsp;</div>
				</div>
			</div>

		</div>
	</Lanmu>

	<Lanmu title="Sizes for q-gutter">
		<div class="row q-col-gutter-x-md">
			<div class="col-4" v-for="n in 5" :key="`none-${n}`">
				<div class="my-content">&nbsp;</div>
			</div>
		</div>
		<q-separator spaced />
		<div class="row q-col-gutter-y-md">
			<div class="col-4" v-for="n in 5" :key="`none-${n}`">
				<div class="my-content">&nbsp;</div>
			</div>
		</div>
	</Lanmu>
	
	<Lanmu title="Sizes for q-gutter" content-class="q-gutter-sm">
		<q-avatar color="blue" class="uni">A</q-avatar>
		<q-avatar color="blue" class="uni">A</q-avatar>
		<q-avatar color="blue" class="uni">A</q-avatar>
	</Lanmu>
</template>

<script>
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>
