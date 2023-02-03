<template>
	<Lanmu title="Sizes for q-gutter">
		<view class="q-pa-sm bg-grey-4 text-blue-grey">
			由于小程序无法高性能地支持*通配符选择器，Gutter的子元素仅支持：view/text/button/label/q-btn。其他元素需要加.uni样式才能生效。
		</view>
		<view class="q-pa-md" style="max-width: 500px">
			<view class="q-py-sm">q-gutter-xs</view>
			<view class="q-gutter-xs">
				<q-btn color="brown" label="Button" v-for="n in 7" :key="`xs-${n}`" />
			</view>

			<view class="q-py-sm">q-gutter-sm</view>
			<view class="q-gutter-sm">
				<q-btn color="teal" label="Button" v-for="n in 7" :key="`sm-${n}`" />
			</view>

			<view class="q-py-sm">q-gutter-md</view>
			<view class="q-gutter-md">
				<q-btn color="accent" label="Button" v-for="n in 7" :key="`md-${n}`" />
			</view>

			<view class="q-py-sm">q-gutter-lg</view>
			<view class="q-gutter-lg">
				<q-btn color="red" label="Button" v-for="n in 7" :key="`lg-${n}`" />
			</view>

			<view class="q-py-sm">q-gutter-xl</view>
			<view class="q-gutter-xl">
				<q-btn color="indigo" label="Button" v-for="n in 7" :key="`xl-${n}`" />
			</view>
		</view>
	</Lanmu>

	<Lanmu title="Sizes for q-col-gutter">
		<view class="q-pa-md">

			<view class="row q-col-gutter-none">
				<view class="col-4" v-for="n in 5" :key="`none-${n}`">
					<view class="my-content">&nbsp;</view>
				</view>
			</view>

			<q-separator spaced />

			<view class="row q-col-gutter-xs">
				<view class="col-4" v-for="n in 5" :key="`xs-${n}`">
					<view class="my-content">&nbsp;</view>
				</view>
			</view>

			<q-separator spaced />

		 <view class="row q-col-gutter-sm">
				<view class="col-4" v-for="n in 5" :key="`sm-${n}`">
					<view class="my-content">&nbsp;</view>
				</view>
			</view>

			<q-separator spaced />

			<view class="row q-col-gutter-md">
		 	<view class="col-4" v-for="n in 5" :key="`md-${n}`">
					<view class="my-content">&nbsp;</view>
				</view>
			</view>

			<q-separator spaced />

			<view class="row q-col-gutter-lg">
				<view class="col-4" v-for="n in 5" :key="`lg-${n}`">
					<view class="my-content">&nbsp;</view>
				</view>
			</view>

			<q-separator spaced />

			<view class="row q-col-gutter-xl">
				<view class="col-4" v-for="n in 5" :key="`xl-${n}`">
					<view class="my-content">&nbsp;</view>
				</view>
			</view>

		</view>
	</Lanmu>

	<Lanmu title="Sizes for q-gutter">
		<view class="row q-col-gutter-x-md">
			<view class="col-4" v-for="n in 5" :key="`none-${n}`">
				<view class="my-content">&nbsp;</view>
			</view>
		</view>
		<q-separator spaced />
		<view class="row q-col-gutter-y-md">
			<view class="col-4" v-for="n in 5" :key="`none-${n}`">
				<view class="my-content">&nbsp;</view>
			</view>
		</view>
	</Lanmu>
	
	<Lanmu title="Sizes for Avatar" content-class="q-pa-sm">
		<view class="q-gutter-sm">
			<q-avatar color="blue" class="uni">A</q-avatar>
			<q-avatar color="blue" class="uni">A</q-avatar>
			<q-avatar color="blue" class="uni">A</q-avatar>
		</view>
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
