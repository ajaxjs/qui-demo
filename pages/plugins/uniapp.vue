<template>
	<q-page>
		<Lanmu title="Alert 弹窗" content-class="q-gutter-sm">
			<q-btn no-caps class="uni" color="primary" label="简单提示" @click="$uni.alert('一个简单的提示！')" />
			<q-btn no-caps class="uni" color="primary" label="带标题提示" @click="$uni.alert('一个简单的提示！','这是标题',['关了吧！'])" />
			<q-btn no-caps class="uni" color="primary" label="按扭颜色提示" @click="$uni.alert('一个简单的提示！',[{color:'#FF0000',text:'取消1'},{color:'#009900',text:'确定2'}])" />
			<q-btn no-caps class="uni" color="primary" label="自定单按扭提示" @click="$uni.alert('一个简单的提示！',['关了吧！'])" />
			<q-btn no-caps class="uni" color="primary" label="自定双按扭提示" @click="$uni.alert('一个简单的提示！',['取消1','确定2'])" />
			<q-btn no-caps class="uni" color="primary" label="带回调的又提示" @click="alert1" />
			
			<hi-code title="示例代码" hide :code="alertCode"></hi-code>
		</Lanmu>
		
		<Lanmu title="Toast 提示" content-class="q-gutter-sm">
			<q-btn no-caps class="uni" color="primary" label="正确提示" @click="$uni.toast('正确提示')" />
			<q-btn no-caps class="uni" color="primary" label="带遮罩层" @click="$uni.toast('带遮罩层',true)" />
			<q-btn no-caps class="uni" color="primary" label="纯文本提示" @click="$uni.toast('纯文本提示','none')" />
			<q-btn no-caps class="uni" color="primary" label="简单提示" @click="$uni.toast('错误信息','error')" />
			<q-btn no-caps class="uni" color="primary" label="带回调提示" @click="toast1" />
			<q-btn no-caps class="uni" color="primary" label="复杂参数" @click="$uni.toast('复杂参数',{duration:2000,mask:true,icon:'error'})" />
			
			<hi-code title="示例代码" hide :code="toastCode"></hi-code>
		</Lanmu>
		
		<Lanmu title="ActionSheet" content-class="q-gutter-sm">
			<q-btn no-caps class="uni" color="primary" label="简单数组" @click="actions1" />
			<q-btn no-caps class="uni" color="primary" label="标准数组" @click="actions2" />
			<q-btn no-caps class="uni" color="primary" label="复杂数组" @click="actions3" />
			<view class="text-blue-grey" style="word-wrap: break-word;">{{actionRes}}</view>
			<hi-code title="示例代码" hide :code="actionCode"></hi-code>
		</Lanmu>
	</q-page>
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
	
	const alertCode = `* 除第一个参数固定为内容外，其他参数顺序不固定
$uni.alert('一个简单的提示！')
$uni.alert('一个简单的提示！','这是标题',['关了吧！'])
$uni.alert('一个简单的提示！',['关了吧！'])
$uni.alert('一个简单的提示！',['取消1','确定2'])
$uni.alert('这是一个提示！', '这是标题', ['取消1','确定2'], (evt)=>{
	console.log('点击了', evt)
})
`
	/* Toast */
	const toastCode = `
$uni.toast('正确提示')
// 点击空不穿透
$uni.toast('带遮罩层',true)
$uni.toast('错误信息','error')
$uni.toast('纯文本提示','none')
$uni.toast('错误信息',()=>{
	console.log('带回调的提示')
})
// 第二个参数为对象时，请参考：https://uniapp.dcloud.net.cn/api/ui/prompt.html
$uni.toast('复杂参数',{duration:2000,mask:true,icon:'error'})
`
/* ActionSheet */
const actionCode = `参数说明
items: Array
简单数据：['A', 'B', 'C']，
标准数据：[{label:'A',value:'1'},{label:'B',value:'2'}]
非标数据：[{"name": "东城区","code": "110101"},...]
sets
	为 Object 类型时 showActionSheet参数，参考https://uniapp.dcloud.net.cn/api/ui/prompt.html
	为 Function 类型时 showActionSheet的complete
	为 String 类型时 showActionSheet的title

// 简单数组
$uni.actions(['中国', '美国', '巴西', '日本', '德国'])
// 标准数组
$uni.actions([{label:'中国',value:'China'}, {label:'美国',value:'America'}, {label:'巴西',value:'Brazil'}, {label:'日本',value:'Japan'}, {label:'德国',value:'Germany'}])
// 复杂数组
$uni.actions([{"name": "东城区","code": "110101"},{"name": "西城区","code": "110102"},{"name": "朝阳区","code": "110105"}],{label:'name',value:'code'})

`
const actionRes = ref(null)
const actionCall = (evt)=>{
	const res = {}
	Object.keys(evt).forEach(key=>{
		res[key] = evt[key]
	})
	actionRes.value = JSON.stringify(res)
	console.log('+++---',evt,actionRes.value);
}
const actions1 = ()=>$uni.actions(['中国', '美国', '巴西', '日本', '德国'], actionCall)
const actions2 = ()=>$uni.actions([{label:'中国',value:'China'}, {label:'美国',value:'America'}, {label:'巴西',value:'Brazil'}, {label:'日本',value:'Japan'}, {label:'德国',value:'Germany'}],actionCall)
const actions3 = ()=>$uni.actions([{"name": "东城区","code": "110101"},{"name": "西城区","code": "110102"},{"name": "朝阳区","code": "110105"},{"name": "丰台区","code": "110106"},{"name": "石景山区","code": "110107"}],{label:'name',value:'code',complete:actionCall})
</script>

<style>
</style>