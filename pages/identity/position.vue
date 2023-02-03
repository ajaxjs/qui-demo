<template>
	<q-page>
		<Lanmu title="CSS定位类" contentClass="q-table--dense q-table--horizontal-separator">
			<table class="q-table">
				<tbody>
					<tr><td><q-badge>fullscreen</q-badge></td><td>全屏</td></tr>
					<tr><td><q-badge>fixed</q-badge></td><td>将position设置为fixed而不指定top，left，right或bottom属性</td></tr>
					<tr><td><q-badge>fixed-center</q-badge></td><td>将position设置为fixed，但在窗口中间。</td></tr>
					<tr><td><q-badge>absolute</q-badge></td><td>将position设置为absolute而不指定top，left，right或bottom属性</td></tr>
					<tr><td><q-badge>absolute-center</q-badge></td><td>将position设置为absolute，但在容器中间（容器需要相对位置）。</td></tr>
					<tr><td><q-badge>fixed-top</q-badge>，<q-badge>absolute-top</q-badge></td><td>固定或绝对定位在屏幕顶部</td></tr>
					<tr><td><q-badge>fixed-right</q-badge>，<q-badge>absolute-right</q-badge></td><td>固定或绝对定位在屏幕右边缘</td></tr>
					<tr><td><q-badge>fixed-bottom</q-badge>，<q-badge>absolute-bottom</q-badge></td><td>固定或绝对定位在屏幕底部</td></tr>
					<tr><td><q-badge>fixed-left</q-badge>，<q-badge>absolute-left</q-badge></td><td>固定或绝对定位在屏幕左边缘</td></tr>
					<tr><td><q-badge>fixed-top-left</q-badge>，<q-badge>absolute-top-left</q-badge></td><td>固定或绝对定位在屏幕左上角</td></tr>
					<tr><td><q-badge>fixed-top-right</q-badge>，<q-badge>absolute-top-right</q-badge></td><td>固定或绝对定位在屏幕右上角</td></tr>
					<tr><td><q-badge>fixed-bottom-left</q-badge>，<q-badge>absolute-bottom-left</q-badge></td><td>固定或绝对定位在屏幕左下角</td></tr>
					<tr><td><q-badge>fixed-bottom-right</q-badge>，<q-badge>absolute-bottom-right</q-badge></td><td>固定或绝对定位在屏幕右下角</td></tr>
					<tr><td><q-badge>fixed-full</q-badge>，<q-badge>absolute-full</q-badge></td><td>从固定或绝对位置继承边框半径到所有屏幕边缘元素（v1.9+）</td></tr>
					<tr><td><q-badge>relative-position</q-badge></td><td>将position设置为relative</td></tr>
				</tbody>
			</table>
		</Lanmu>
		<Lanmu title="对齐" contentClass="q-table--dense q-table--horizontal-separator">
			<table class="q-table">
				<tbody>
					<tr><td><q-badge>float-left</q-badge></td><td>浮动到左侧</td></tr>
					<tr><td><q-badge>float-right</q-badge></td><td>浮动到右侧</td></tr>
					<tr><td><q-badge>on-left</q-badge></td><td>在右侧设置一个小边距;通常用于有兄弟元素的图标元素</td></tr>
					<tr><td><q-badge>on-right</q-badge></td><td>在左侧设置一个小边距;通常用于有兄弟元素的图标元素</td></tr>
					<tr><td><q-badge>vertical-top</q-badge></td><td>将CSS垂直对齐设置为top</td></tr>
					<tr><td><q-badge>vertical-middle</q-badge></td><td>将CSS垂直对齐设置为middle</td></tr>
					<tr><td><q-badge>vertical-bottom</q-badge></td><td>将CSS垂直对齐设置为bottom</td></tr>
				</tbody>
			</table>
			<view class="q-pa-sm text-blue-grey bg-blue-grey-1">建议您阅读Quasar网格系统而不要使用float-left 或 float-right。</view>
		</Lanmu>
	</q-page>
</template>

<script>
</script>

<style>
</style>