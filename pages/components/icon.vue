<template>
	<q-page>
		<Lanmu title="Loading 图标" content-class="q-px-md q-pb-md">
			<view class="lm-title">颜色</view>
			<view class="row q-gutter-sm">
				<view  v-for="vo in ['red','blue','orange']" :key="vo" :class="'text-'+vo">
					<q-spinner size="lg" />{{vo}}
				</view>
				<view class="col-12 bg-blue-grey-2 text-blue-grey q-pa-sm rounded-borders">
					默认继承父级文本颜色，也可以通过设置组件的color="red"进行设置
				</view>
			</view>
			<view class="lm-title">大小</view>
			<view class="row q-gutter-sm">
				<view  v-for="vo in ['xs','sm','md','lg','50px']" :key="vo">
					<q-spinner color="blue" :size="vo" />{{vo}}
				</view>
			</view>
			<view class="lm-title">粗细[数字参数]</view>
			<view class="row q-gutter-sm">
				<view  v-for="vo in 5" :key="vo">
					<q-spinner color="blue" size="lg" :thickness="vo" />{{vo}}
				</view>
			</view>
		</Lanmu>
		<Lanmu title="Basic" content-class="q-pa-sm">
			<div class="text-purple row q-gutter-sm" style="font-size: 2em">
				<q-icon class="uni" name="font_download" />
				<q-icon class="uni" name="warning" />
				<q-icon class="uni" name="format_size" />
				<q-icon class="uni" name="print" />
				<q-icon class="uni" name="today" />
				<q-icon class="uni" name="style" />
			</div>
		</Lanmu>
		<Lanmu title="Size & colors" content-class="q-pa-sm">
			<div class="q-mt-md row q-gutter-md">
				<q-icon class="uni" name="font_download" color="primary" size="32px" />
				<q-icon class="uni" name="warning" color="warning" size="4rem" />
				<q-icon class="uni" name="format_size" style="color: #ccc; font-size: 1.4em;" />
				<q-icon class="uni" name="print" color="teal" size="4.4em" />
				<q-icon class="uni text-orange" name="today" size="2em" />
				<q-icon class="uni" name="style" size="3em" />
			</div>
		</Lanmu>
			
		<Lanmu title="Standard sizes" content-class="q-pa-sm">
			<div class="text-purple row q-gutter-md">
				<q-icon class="uni"
					v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
					:key="size"
					:size="size"
					name="font_download"
				/>
			</div>
		</Lanmu>
		
		<Lanmu title="Image icons" content-class="q-pa-sm">
			<div class="q-pa-sm" v-for="(src, i) in imgIcon" :key="i">
				<div class="ellipsis-2-lines text-blue-grey q-pa-xs bg-blue-grey-1">{{src}}</div>
				<q-icon
					size="md"
					:name="src"
				/>
			</div>
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		setup(){
			return {
				imgIcon: [
					'img:https://cdn.quasar.dev/logo-v2/svg/logo.svg',
					'img:https://app-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/default.png',
					'img:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
					'img:data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="${face}"><path fill="none" d="M0 0h24v24H0V0z"/><path stroke="${hair}" fill="${hair}" stroke-linecap="round" opacity=".5" d="M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z"/><path stroke="none" fill="${face}" stroke-linecap="round"  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"/><circle cx="9" cy="13" r="1.25"/><circle cx="15" cy="13" r="1.25"/></svg>'
				]
			}
		}
	}
</script>

<style>
</style>
