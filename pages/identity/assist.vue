<template>
	<q-page>
		<Lanmu title="Padding & Margin 边距">
			<view class="text-bold text-blue-grey q-mt-sm">语法：</view>
			<view class="text-primary">
				q-(p|m)(t|r|b|l|a|x|y)-(none|auto|xs|sm|md|lg|xl)<br />
				&nbsp;&nbsp;&nbsp;类型&nbsp;&nbsp;&nbsp;&nbsp;方向&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大小
			</view>

			<view class="">
				<view class="text-bold text-blue-grey q-mt-sm">类型：</view>
				p (padding), m (margin)
			</view>
			<view class="">
				<view class="text-bold text-blue-grey q-mt-sm">方向：</view>
				t (top), r (right), b (bottom), l (left),<br />
				a (all), x (both left & right), y (both top & bottom)
			</view>
			<view class="">
				<view class="text-bold text-blue-grey q-mt-sm">大小：</view>
				none,<br />
				auto (ONLY for specific margins: q-ml-*, q-mr-*, q-mx-*),<br />
				xs (extra small),<br />
				sm (small),<br />
				md (medium),<br />
				lg (large),<br />
				xl (extra large)
			</view>
		</Lanmu>
		<Lanmu title="边距 Demo" hide showToggle>
			<view class="row q-col-gutter-sm">
				<template v-for="tp in tps" :key="tp">
					<template v-for="dir in dirs" :key="dir">
						<template v-for="size in sizes" :key="size">
							<view class="col-4">
								<view class="bg-teal" style="padding: 1px;">
									<view class="bg-blue" :class="`q-${tp}${dir}-${size}`">
										<view class="mg-inner bg-green q-pa-sm">
											{{`q-${tp}${dir}-${size}`}}
										</view>
									</view>
								</view>
							</view>
						</template>
					</template>
				</template>
			</view>
		</Lanmu>
		
		<Lanmu title="Breakpoints 断点">
			<view>Quasar使用以下CSS断点：</view>
			<table>
				<tr><td>Extra</td><td>Small</td><td>xs</td><td>0px</td><td>599.99px</td></tr>
				<tr><td>Small</td><td>sm</td><td>600px</td><td>1023.99px</td></tr>
				<tr><td>Medium</td><td>md</td><td>1024px</td><td>1439.99px</td></tr>
				<tr><td>Large</td><td>lg</td><td>1440px</td><td>1919.99px</td></tr>
				<tr><td>Extra</td><td>Large</td><td>xl</td><td>1920px</td><td>无穷大</td></tr>
			</table>
		</Lanmu>
		<Lanmu title="Shadow 阴影">
			<table>
				<tr><td>no-shadow</td><td>移除任何阴影</td></tr>
				<tr><td>inset-shadow</td><td>在顶部设置一个插入阴影</td></tr>
				<tr><td>inset-shadow-down</td><td>在底部设置一个插入阴影</td></tr>
				<tr><td>shadow-1</td><td>设置1的深度</td></tr>
				<tr><td>shadow-2</td><td>设置2的深度</td></tr>
				<tr><td>shadow-N</td><td>其中N是1到24的整数</td></tr>
				<tr><td>shadow-transition</td><td>在阴影上应用默认的CSS转换效果</td></tr>
			</table>
		</Lanmu>
		<Lanmu title="阴影 Demo" hide showToggle>
			<view class="row justify-around q-pb-lg">
				<view class="shadow-box row items-center justify-center q-ma-sm" :class="'shadow-'+i" v-for="i in 24" :key="i">
					{{'shadow-'+i}}
				</view>
			</view>
		</Lanmu>
		<Lanmu title="其他CSS辅助类">
			<view class="lm-title">Scroll有关</view>
			<table class="q-table">
				<tbody>
					<tr><td><q-badge>scroll</q-badge></td><td>应用CSS调整使所有平台上的滚动工作达到最佳状态</td></tr>
					<tr><td><q-badge>no-scroll</q-badge></td><td>隐藏DOM节点上的滚动条</td></tr>
					<tr><td><q-badge>overflow-auto</q-badge></td><td>将overflow设置为auto</td></tr>
					<tr><td><q-badge>overflow-hidden</q-badge></td><td>将overflow设置为hidden</td></tr>
					<tr><td><q-badge>overflow-hidden-y</q-badge></td><td>将y轴上的overflow设置为hidden</td></tr>
					<tr><td><q-badge>hide-scrollbar</q-badge></td><td>删除滚动条</td></tr>
				</tbody>
			</table>
			<view class="lm-title">大小相关</view>
			<table class="q-table">
			<tr><td><q-badge>fit</q-badge></td><td>宽度和高度设置为100％</td></tr>
			<tr><td><q-badge>full-height</q-badge></td><td>高度设置为100％</td></tr>
			<tr><td><q-badge>full-width</q-badge></td><td>宽度被设置为100％，左右边距为0</td></tr>
			<tr><td><q-badge>window-height</q-badge></td><td>高度设置为100vh，顶部和底部边距为0</td></tr>
			<tr><td><q-badge>window-width</q-badge></td><td>宽度设置为100vw，左边距和右边距0</td></tr>
			<tr><td><q-badge>block</q-badge></td><td>将display属性设置为block</td></tr>
			</table>
			
			<view class="lm-title">方向有关</view>
			<table class="q-table">
			<tr><td><q-badge>rotate-45</q-badge></td><td>旋转45度</td></tr>
			<tr><td><q-badge>rotate-90</q-badge></td><td>旋转90度</td></tr>
			<tr><td><q-badge>rotate-135</q-badge></td><td>旋转135度</td></tr>
			<tr><td><q-badge>rotate-180</q-badge></td><td>旋转180度</td></tr>
			<tr><td><q-badge>rotate-225​​</q-badge></td><td>旋转225度</td></tr>
			<tr><td><q-badge>rotate-270</q-badge></td><td>旋转270度</td></tr>
			<tr><td><q-badge>rotate-315</q-badge></td><td>旋转315度</td></tr>
			<tr><td><q-badge>flip-horizontal</q-badge></td><td>水平翻转DOM元素</td></tr>
			<tr><td><q-badge>flip-vertical</q-badge></td><td>垂直翻转DOM元素</td></tr>
			</table>
			
			<view class="lm-title">边界相关</view>
			<table class="q-table">
			<tr><td><q-badge>no-border</q-badge></td><td>删除任何边框</td></tr>
			<tr><td><q-badge>no-border-radius</q-badge></td><td>删除边框可能具有的任何半径</td></tr>
			<tr><td><q-badge>no-box-shadow</q-badge></td><td>移除任何应用的box-shadow</td></tr>
			<tr><td><q-badge>no-outline</q-badge></td><td>删除边框上应用的任何轮廓</td></tr>
			<tr><td><q-badge>rounded-borders</q-badge></td><td>应用通用边框半径</td></tr>
			<tr><td><q-badge>border-radius-inherit</q-badge></td><td>从父元素继承边框半径</td></tr>
			</table>
			
			<view class="lm-title">鼠标相关</view>
			<table class="q-table">
			<tr><td><q-badge>non-selectable</q-badge></td><td>用户将无法选择DOM节点及其文本</td></tr>
			<tr><td><q-badge>no-pointer-events</q-badge></td><td>DOM元素不会成为鼠标事件的目标 - 点击、悬停等</td></tr>
			<tr><td><q-badge>all-pointer-events</q-badge></td><td>no-pointer-events的反义词</td></tr>
			<tr><td><q-badge>cursor-pointer</q-badge></td><td>改变DOM元素上的鼠标指针，看起来好像在可点击的链接上</td></tr>
			<tr><td><q-badge>cursor-not-allowed</q-badge></td><td>更改DOM元素上的鼠标指针，使其看起来好像不会执行任何操作</td></tr>
			<tr><td><q-badge>cursor-inherit</q-badge></td><td>将DOM元素上的鼠标指针更改为与父选项相同</td></tr>
			<tr><td><q-badge>cursor-none</q-badge></td><td>没有鼠标光标被渲染</td></tr>
			</table>
		</Lanmu>
	</q-page>
</template>

<script setup>
	const tps = ['p', 'm']
	const dirs = ['t', 'r', 'b', 'l', 'a', 'x', 'y']
	const sizes = ['none', 'auto', 'xs', 'sm', 'md', 'lg', 'xl']
</script>

<style lang="sass">
.shadow-box
  width: 80px
  height: 80px
  border-radius: 50%

</style>
