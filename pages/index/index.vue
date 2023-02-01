<template>
	<q-page :push="showSide?'left':''">
		<Lanmu :title="name" v-for="(nav,name) in navList" :key="name">
			<view class="row q-gutter-sm">
				<view class="" v-for="(vo,i) in nav" :key="i">
					<navigator :url="vo.path">
						<button type="primary">{{vo.name}}</button>
					</navigator>
				</view>
			</view>
		</Lanmu>
	</q-page>
	
	<q-drawer v-model="showSide">侧栏</q-drawer>
	
</template>

<script>
	export default {

		data() {
			return {
				title: 'Hello',
				showSide: false,
				test: false,
				showAni: false,
				showDlg: false,
				navList: {
					'Flex Grid': [{
							name: 'Grid Row',
							path: '/pages/layout/grid_row'
						},
						{
							name: 'Grid Gutter',
							path: '/pages/layout/gutter'
						},
						{
							name: 'Layout',
							path: '/pages/layout/layout'
						}
					],
					'Vue Components': [{
							name: 'Avatar',
							path: '/pages/components/avatar'
						},
						{
							name: 'Icon',
							path: '/pages/components/icon'
						},
						{
							name: 'Image',
							path: '/pages/components/img'
						},
						{
							name: 'Button',
							path: '/pages/components/btn'
						},
						{
							name: 'Badge',
							path: '/pages/components/badge'
						},
						{
							name: 'Card',
							path: '/pages/components/card'
						},
						{
							name: 'List&Item',
							path: '/pages/components/item'
						},
						{
							name: 'Links',
							path: '/pages/components/link'
						},
						{
							name: 'linear-progress',
							path: '/pages/components/linear_progress'
						},
						{
							name: 'Input & Field',
							path: '/pages/components/input'
						},
						{
							name: 'Form',
							path: '/pages/components/form'
						},
						{
							name: 'Checkbox & Radio',
							path: '/pages/components/checkbox'
						},
						{
							name: 'Dialog',
							path: '/pages/components/dialog'
						},
						{
							name: 'Date & Picker',
							path: '/pages/components/date_picker'
						},
						{
							name: 'Tabs',
							path: '/pages/components/tabs'
						},
						{
							name: 'Swiper',
							path: '/pages/components/swiper'
						},
					],
					'Plugins': [
						{
							name:'UniAPP封装',
							path: '/pages/plugins/uniapp'
						}
					]
				},
				show: false,
			}
		},
		onLoad() {
		},
		methods: {
			onClick(evt) {
				//console.log(evt,uni.getWindowInfo());
				this.$refs.menu.toggle()
				this.show = !this.show
			},
			closeEvent(evt) {
				uni.$emit('close-popup')
				evt.preventDefault()
				evt.stopPropagation()
			}
		}
	}
</script>


<style lang="sass">
.test
  transition: all 1s
.content
  padding: calc(100% - 44px - env(safe-area-inset-top))
</style>
