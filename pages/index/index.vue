<template>
	<q-page :push="showSide?'left':''">
		<Lanmu :title="name" v-for="(nav,name) in navList" :key="name">
			<q-list bordered separator>
				<q-item v-for="(vo,i) in nav" :key="i" :to="vo.path">
					<q-item-section avatar v-if="vo.icon">
						<q-avatar :icon="vo.icon" color="primary" class="text-white" />
					</q-item-section>
					<q-item-section>{{vo.name}}</q-item-section>
				</q-item>
			</q-list>
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
					'Style & Identity': [
						{
							name: 'Typography 排板',
							path: '/pages/identity/typography',
							icon: 'palette'
						},
						{
							name: 'Color 颜色',
							path: '/pages/identity/color',
							icon: 'palette'
						},
						{
							name: 'Assist 辅助',
							path: '/pages/identity/assist',
							icon: 'format_paint'
						},
						{
							name: 'Visiblity 可见性',
							path: '/pages/identity/visiblity',
							icon: 'vrpano'
						},
						{
							name: 'Position 定位',
							path: '/pages/identity/position',
							icon: 'push_pin'
						}
					],
					'Flex Grid': [{
							name: 'Grid Row 布局网格',
							path: '/pages/layout/grid_row',
							icon: 'view_column'
						},
						{
							name: 'Grid Gutter 网格间距',
							path: '/pages/layout/gutter',
							icon: 'dashboard'
						},
						{
							name: 'Layout 页面布局',
							path: '/pages/layout/layout',
							icon: 'view_quilt'
						}
					],
					'Vue Components': [{
							name: 'Avatar 头像',
							path: '/pages/components/avatar',
							icon: 'account_box'
						},
						{
							name: 'Icon 图标',
							path: '/pages/components/icon',
							icon: 'add_reaction'
						},
						{
							name: 'Image 图片',
							path: '/pages/components/img',
							icon: 'insert_photo'
						},
						{
							name: 'Button 按扭',
							path: '/pages/components/btn',
							icon: 'edit_attributes'
						},
						{
							name: 'Badge 徽标',
							path: '/pages/components/badge',
							icon: 'local_offer'
						},
						{
							name: 'Card 卡片',
							path: '/pages/components/card',
							icon: 'auto_awesome_motion'
						},
						{
							name: 'List & Item 列表',
							path: '/pages/components/item',
							icon: 'reorder'
						},
						{
							name: 'Links 连接',
							path: '/pages/components/link',
							icon: 'link'
						},
						{
							name: 'Linear Progress 进度条',
							path: '/pages/components/linear_progress',
							icon: 'av_timer'
						},
						{
							name: 'Input & Field 输入框',
							path: '/pages/components/input',
							icon: 'input'
						},
						{
							name: 'Form 表单',
							path: '/pages/components/form',
							icon: 'list_alt'
						},
						{
							name: 'Checkbox & Radio 单复选框',
							path: '/pages/components/checkbox',
							icon: 'check_box'
						},
						{
							name: 'Dialog 弹窗',
							path: '/pages/components/dialog',
							icon: 'web_asset'
						},
						{
							name: 'Date & Picker 选择器',
							path: '/pages/components/date_picker',
							icon: 'view_week'
						},
						{
							name: 'Tabs 切换',
							path: '/pages/components/tabs',
							icon: 'switch_left'
						},
						{
							name: 'Swiper 滚动',
							path: '/pages/components/swiper',
							icon: 'swipe'
						},
					],
					'Plugins': [
						{
							name:'UniAPP 界面插件封装',
							path: '/pages/plugins/uniapp',
							icon: 'flag'
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
