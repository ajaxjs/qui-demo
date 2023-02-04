# UniApp 常用封装

为了方便使用，对UniApp常用的API进行了简单封装及增强。默认挂载在实例的`$uni`上。

## Alert 弹窗

基于uni.showModel实现，简化了传参。[参数说明](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal)

基本用法：$uni.alert('提示内容', 标题, [按扭], function回调)，除第一个参数外，其他的参数不限顺序。

```javascript
// 基本就法
this.$uni.alert('简单的内容')
// 带标题
this.$uni.alert('一个简单的提示！','这是标题')
// 带按扭
this.$uni.alert('一个简单的提示！', ['取消1','确定2'])
// 一个按扭
this.$uni.alert('一个简单的提示！', ['知道了'])
// 按扭带颜色，H5、微信小程序、百度小程序、字节小程序（2.62.0+）支持
this.$uni.alert('一个简单的提示！', [[{color:'#FF0000',text:'取消1'},{color:'#009900',text:'确定2'}]])
// 带回调
this.$uni.alert('这是一个提示！', '这是标题', ['取消1','确定2'], (evt)=>{
    $uni.toast('点击了'+(evt.confirm?'确定':'取消'))
})
```

## Toast 提示

基于uni.showToast(OBJECT)实现，简化了传参。[参数说明](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast)

```javascript
$uni.toast('正确提示')
// 点击空不穿透
$uni.toast('带遮罩层',true)
// 带图标，可选：success,error,fail,exception,loading,none，注意平台差异。
$uni.toast('错误信息','error')
// 无图标
$uni.toast('纯文本提示','none')
// 带回调
$uni.toast('错误信息', ()=>{
	console.log('带回调的提示')
})
```

## ActionSheet 菜单

基于 uni.showActionSheet(OBJECT)实现，增强了功能。

基本用法：$uni.actions(菜单数组, [参数对象](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showactionsheet)或回调函数)

其中，参数对象可以指定显示的Label和value。

```javascript
function callBack(evt){
	evt = {value: '值', item:'选中的对象', errMsg:'返回消息'}
}

// 简单数组，简单数组会格式化成标准数据，通过回调的item返回
$uni.actions(['中国', '美国', '巴西', '日本', '德国'], callBack)
// 标准数组
$uni.actions([
    {label:'中国',value:'China'}, 
    {label:'美国',value:'America'}, 
    {label:'巴西',value:'Brazil'}, 
    {label:'日本',value:'Japan'}, 
    {label:'德国',value:'Germany'}
], callBack)
// 复杂数组，指定label和value
$uni.actions([
    {"name": "东城区","code": "110101"},
    {"name": "西城区","code": "110102"},
    {"name": "朝阳区","code": "110105"}
	],
    {
    	label:'name',
    	value:'code',
    	complete: callBack
	}
)

```



## 示例代码

```vue
<template>
<!-- Alert -->
<q-btn no-caps class="uni" color="primary" label="简单提示" @click="$uni.alert('一个简单的提示！')" />
<q-btn no-caps class="uni" color="primary" label="带标题提示" @click="$uni.alert('一个简单的提示！','这是标题',['关了吧！'])" />
<q-btn no-caps class="uni" color="primary" label="按扭颜色提示" @click="$uni.alert('一个简单的提示！',[{color:'#FF0000',text:'取消1'},{color:'#009900',text:'确定2'}])" />
<q-btn no-caps class="uni" color="primary" label="自定单按扭提示" @click="$uni.alert('一个简单的提示！',['关了吧！'])" />
<q-btn no-caps class="uni" color="primary" label="自定双按扭提示" @click="$uni.alert('一个简单的提示！',['取消1','确定2'])" />
<q-btn no-caps class="uni" color="primary" label="带回调的又提示" @click="alert1" />

<!-- Toast -->
<q-btn no-caps class="uni" color="primary" label="正确提示" @click="$uni.toast('正确提示')" />
<q-btn no-caps class="uni" color="primary" label="带遮罩层" @click="$uni.toast('带遮罩层',true)" />
<q-btn no-caps class="uni" color="primary" label="纯文本提示" @click="$uni.toast('纯文本提示','none')" />
<q-btn no-caps class="uni" color="primary" label="简单提示" @click="$uni.toast('错误信息','error')" />
<q-btn no-caps class="uni" color="primary" label="带回调提示" @click="toast1" />
<q-btn no-caps class="uni" color="primary" label="复杂参数" @click="$uni.toast('复杂参数',{duration:2000,mask:true,icon:'error'})" />

<!-- Toast -->
<q-btn no-caps class="uni" color="primary" label="简单数组" @click="actions1" />
<q-btn no-caps class="uni" color="primary" label="标准数组" @click="actions2" />
<q-btn no-caps class="uni" color="primary" label="复杂数组" @click="actions3" />
<view class="text-blue-grey" style="word-wrap: break-word;">{{actionRes}}</view>
</template>

<script setup>
    import {ref,getCurrentInstance} from 'vue'
	const { proxy:{$q,$uni} } = getCurrentInstance()
    
    const alert1 = (evt)=>{
		$uni.alert('这是一个提示！', '这是标题', ['取消1','确定2'], (evt)=>{
			$uni.toast('点击了'+(evt.confirm?'确定':'取消'))
			
			console.log('点击了', evt)
		})
	}
	const toast1 = ()=>{
		$uni.toast('错误信息',(evt)=>{
			console.log('带回调的提示', evt)
		})
	}
</script>
```



