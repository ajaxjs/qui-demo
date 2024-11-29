import{n as a,r as l,a as n,b as e,g as o,w as t,k as c,o as s,d as r,as as i,f as u,t as p,T as m,m as b}from"./index-BM1HHzio.js";import{_ as d}from"./q-page.QbtCqCwE.js";const y={__name:"uniapp",setup(y){const{proxy:{$q:k,$uni:v}}=m(),h=a=>{v.alert("这是一个提示！","这是标题",["取消1","确定2"],(a=>{v.toast("点击了"+(a.confirm?"确定":"取消")),console.log("点击了",a)}))},C=()=>{v.toast("错误信息",(a=>{console.log("带回调的提示",a)}))},$=a(null),g=a=>{const l={};Object.keys(a).forEach((n=>{l[n]=a[n]})),$.value=JSON.stringify(l),console.log("+++---",a,$.value)},f=()=>v.actions(["中国","美国","巴西","日本","德国"],g),A=()=>v.actions([{label:"中国",value:"China"},{label:"美国",value:"America"},{label:"巴西",value:"Brazil"},{label:"日本",value:"Japan"},{label:"德国",value:"Germany"}],g),_=()=>v.actions([{name:"东城区",code:"110101"},{name:"西城区",code:"110102"},{name:"朝阳区",code:"110105"},{name:"丰台区",code:"110106"},{name:"石景山区",code:"110107"}],{label:"name",value:"code",complete:g});return(a,m)=>{const y=l(n("q-btn"),c),k=e("hi-code"),g=e("Lanmu"),q=b,w=l(n("q-page"),d);return s(),o(w,null,{default:t((()=>[r(g,{title:"Alert 弹窗","content-class":"q-gutter-sm"},{default:t((()=>[r(y,{"no-caps":"",class:"uni",color:"primary",label:"简单提示",onClick:m[0]||(m[0]=a=>i(v).alert("一个简单的提示！"))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"带标题提示",onClick:m[1]||(m[1]=a=>i(v).alert("一个简单的提示！","这是标题",["关了吧！"]))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"按扭颜色提示",onClick:m[2]||(m[2]=a=>i(v).alert("一个简单的提示！",[{color:"#FF0000",text:"取消1"},{color:"#009900",text:"确定2"}]))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"自定单按扭提示",onClick:m[3]||(m[3]=a=>i(v).alert("一个简单的提示！",["关了吧！"]))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"自定双按扭提示",onClick:m[4]||(m[4]=a=>i(v).alert("一个简单的提示！",["取消1","确定2"]))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"带回调的又提示",onClick:h}),r(k,{title:"示例代码",hide:"",code:"* 除第一个参数固定为内容外，其他参数顺序不固定\n$uni.alert('一个简单的提示！')\n$uni.alert('一个简单的提示！','这是标题',['关了吧！'])\n$uni.alert('一个简单的提示！',['关了吧！'])\n$uni.alert('一个简单的提示！',['取消1','确定2'])\n$uni.alert('这是一个提示！', '这是标题', ['取消1','确定2'], (evt)=>{\n\tconsole.log('点击了', evt)\n})\n"})])),_:1}),r(g,{title:"Toast 提示","content-class":"q-gutter-sm"},{default:t((()=>[r(y,{"no-caps":"",class:"uni",color:"primary",label:"正确提示",onClick:m[5]||(m[5]=a=>i(v).toast("正确提示"))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"带遮罩层",onClick:m[6]||(m[6]=a=>i(v).toast("带遮罩层",!0))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"纯文本提示",onClick:m[7]||(m[7]=a=>i(v).toast("纯文本提示","none"))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"简单提示",onClick:m[8]||(m[8]=a=>i(v).toast("错误信息","error"))}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"带回调提示",onClick:C}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"复杂参数",onClick:m[9]||(m[9]=a=>i(v).toast("复杂参数",{duration:2e3,mask:!0,icon:"error"}))}),r(k,{title:"示例代码",hide:"",code:"\n$uni.toast('正确提示')\n// 点击空不穿透\n$uni.toast('带遮罩层',true)\n$uni.toast('错误信息','error')\n$uni.toast('纯文本提示','none')\n$uni.toast('错误信息',()=>{\n\tconsole.log('带回调的提示')\n})\n// 第二个参数为对象时，请参考：https://uniapp.dcloud.net.cn/api/ui/prompt.html\n$uni.toast('复杂参数',{duration:2000,mask:true,icon:'error'})\n"})])),_:1}),r(g,{title:"ActionSheet","content-class":"q-gutter-sm"},{default:t((()=>[r(y,{"no-caps":"",class:"uni",color:"primary",label:"简单数组",onClick:f}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"标准数组",onClick:A}),r(y,{"no-caps":"",class:"uni",color:"primary",label:"复杂数组",onClick:_}),r(q,{class:"text-blue-grey",style:{"word-wrap":"break-word"}},{default:t((()=>[u(p($.value),1)])),_:1}),r(k,{title:"示例代码",hide:"",code:"参数说明\nitems: Array\n简单数据：['A', 'B', 'C']，\n标准数据：[{label:'A',value:'1'},{label:'B',value:'2'}]\n非标数据：[{\"name\": \"东城区\",\"code\": \"110101\"},...]\nsets\n\t为 Object 类型时 showActionSheet参数，参考https://uniapp.dcloud.net.cn/api/ui/prompt.html\n\t为 Function 类型时 showActionSheet的complete\n\t为 String 类型时 showActionSheet的title\n\n// 简单数组\n$uni.actions(['中国', '美国', '巴西', '日本', '德国'])\n// 标准数组\n$uni.actions([{label:'中国',value:'China'}, {label:'美国',value:'America'}, {label:'巴西',value:'Brazil'}, {label:'日本',value:'Japan'}, {label:'德国',value:'Germany'}])\n// 复杂数组\n$uni.actions([{\"name\": \"东城区\",\"code\": \"110101\"},{\"name\": \"西城区\",\"code\": \"110102\"},{\"name\": \"朝阳区\",\"code\": \"110105\"}],{label:'name',value:'code'})\n\n"})])),_:1})])),_:1})}}};export{y as default};