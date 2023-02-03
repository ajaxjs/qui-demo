<template>
	<q-page>
		<Lanmu title="CSS 可见性" contentClass="q-table--dense q-table--horizontal-separator">
			<table class="q-table">
				<tbody>
					<tr><td><q-badge>disabled</q-badge></td><td>游标更改为“disable”，不透明度设置为较低值。</td></tr>
					<tr><td><q-badge>hidden</q-badge></td><td>将display设置为none。与下面的类相比 - hidden类意味着元素不会显示并且不会占用布局中的空间。</td></tr>
					<tr><td><q-badge>invisible</q-badge></td><td>将visibility设置为hidden。与上面的类相比，invisible类意味着元素不会显示，但它仍然占用布局空间。</td></tr>
					<tr><td><q-badge>transparent</q-badge></td><td>背景颜色是透明的。</td></tr>
					<tr><td><q-badge>dimmed</q-badge></td><td>在您的元素上应用深色透明覆盖层。不要使用在已经有**:after**伪元素的元素。</td></tr>
					<tr><td><q-badge>light-dimmed</q-badge></td><td>在您的元素上应用白色透明覆盖层。不要使用在已经有**:after**伪元素的元素。</td></tr>
					<tr><td><q-badge>ellipsis</q-badge></td><td>截取文本并在没有足够的可用空间时显示省略号。</td></tr>
					<tr><td><q-badge>ellipsis-2-lines</q-badge></td><td>当两行中没有足够的可用空间时，截断文本并显示省略号（仅适用于Webkit浏览器）。</td></tr>
					<tr><td><q-badge>ellipsis-3-lines</q-badge></td><td>当三行中没有足够的可用空间时，截断文本并显示省略号（仅适用于Webkit浏览器）。</td></tr>
					<tr><td><q-badge>z-top</q-badge></td><td>将元素定位在任何其他组件的顶部，但位于Popovers、提示框、通知框之后。</td></tr>
					<tr><td><q-badge>z-max</q-badge></td><td>将元素定位在任何其他组件（包括Drawer，Modals，Notifications，Layout header/footer…）之上</td></tr>
				</tbody>
			</table>
			<view class="lm-title">
				窗口宽度相关
			</view>
			<table class="q-table">
				<thead><tr><th class="text-left">窗口大小</th><th class="text-left">名称</th><th class="text-left">最小宽度阈值（以像素为单位）</th><th class="text-left">最大宽度阈值（以像素为单位）</th></tr></thead>
				<tbody>
					<tr><td>Extra Small</td><td>xs</td><td>0px</td><td>599.99px</td></tr>
					<tr><td>Small</td><td>sm</td><td>600px</td><td>1023.99px</td></tr>
					<tr><td>Medium</td><td>md</td><td>1024px</td><td>1439.99px</td></tr>
					<tr><td>Large</td><td>lg</td><td>1440px</td><td>1919.99px</td></tr>
					<tr><td>Extra Large</td><td>xl</td><td>1920px</td><td>无穷大</td></tr>
				</tbody>
			</table>
			<view class="lm-title">
				窗口宽度相关的CSS类。
			</view>
			<table class="q-table">
				<tbody>
					<tr><td><q-badge>xs</q-badge></td><td>仅在特小窗口上显示</td></tr>
					<tr><td><q-badge>sm</q-badge></td><td>仅在小窗口上显示</td></tr>
					<tr><td><q-badge>md</q-badge></td><td>仅在中等大小的窗口上显示</td></tr>
					<tr><td><q-badge>lg</q-badge></td><td>仅在大窗口上显示</td></tr>
					<tr><td><q-badge>xl</q-badge></td><td>仅在特大窗口上显示</td></tr>
				</tbody>
			</table>
			<view class="q-pa-sm">
				<view><q-badge color="green">lt-</q-badge> 小于</view>
				<view><q-badge color="green">gt-</q-badge> 大于</view>
				如果它低于其中一个尺寸并且大于其中一个尺寸, 您仍然可以显示某些DOM元素或组件。 只需附加来自“低于”和“大于”的前缀lt- 或 gt-。<br />
				例如：<br />
				<q-badge color="teal">lt-md</q-badge>（仅在xs和sm上显示），<br />
				<q-badge color="teal">lt-xl</q-badge>（仅在xs，sm，md和lg窗口中显示），<br />
				<q-badge color="teal">gt-md</q-badge>（大于中等窗口的显示：lg和xl）。
				<view class="q-pt-md">
					对于内置块，您可以和可见性类inline结合使用。
					
					例子: &lt;span class="gt-sm inline"&gt;...&lt;/span&gt;
				</view>
			</view>
		</Lanmu>
	</q-page>
</template>

<script>
</script>

<style>
</style>