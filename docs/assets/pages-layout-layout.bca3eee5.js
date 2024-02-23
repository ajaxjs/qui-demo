import{n as l,p as a,o as e,c as o,a as u,w as s,u as t,F as r,r as n,d as i,t as d,$ as c,l as m,e as v,k as p,f}from"./index-a8f403b5.js";import{_ as b}from"./q-checkbox.7c775cdc.js";import{_,a as g}from"./q-tabs.fe31d5a2.js";import{_ as q}from"./q-footer.9764acc1.js";import{_ as y}from"./q-page.9b17920f.js";import{_ as V}from"./q-drawer.d86bc6fd.js";import"./use-model-toggle.df8f7365.js";const C={__name:"layout",setup(C){const k=l(!1),h=l("mails"),j=l(null),B=l(null),w=l=>c("loadingBar",l),x=l(!0),U=l(!1),$=l(!1),F=l(!1),M=l(!1),D=a((()=>x.value?U.value?"left":$.value?"right":"":""));return(l,a)=>{const c=n(v("q-btn"),m),C=p,L=n(v("q-checkbox"),b),z=f("Lanmu"),A=n(v("q-tab"),_),E=n(v("q-tabs"),g),G=n(v("q-footer"),q),H=n(v("q-page"),y),N=n(v("q-drawer"),V);return e(),o(r,null,[u(H,{push:t(D),loadingBar:k.value,title:j.value,navigationBarColor:B.value},{footer:s((()=>[u(G,{className:"bg-teal-1 text-blue-grey"},{default:s((()=>[u(E,{modelValue:h.value,"onUpdate:modelValue":a[12]||(a[12]=l=>h.value=l),"narrow-indicator":"",dense:"","active-color":"blue",align:"justify"},{default:s((()=>[u(A,{"no-caps":"",name:"mails",icon:"mail",label:"Mails"}),u(A,{"no-caps":"",name:"alarms",icon:"alarm",label:"Alarms"}),u(A,{"no-caps":"",name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"])])),_:1})])),default:s((()=>[u(z,{title:"Layout 布局功能"},{default:s((()=>[u(C,{class:"q-gutter-md q-pa-sm"},{default:s((()=>[u(C,{class:""},{default:s((()=>[u(c,{icon:"east",label:`显示左侧栏${U.value}`,onClick:a[0]||(a[0]=l=>U.value=!U.value),color:"primary"},null,8,["label"])])),_:1}),u(C,{class:""},{default:s((()=>[u(c,{icon:"west",label:`显示右侧栏${$.value}`,onClick:a[1]||(a[1]=l=>$.value=!$.value),color:"primary"},null,8,["label"])])),_:1}),u(C,{class:""},{default:s((()=>[u(L,{modelValue:F.value,"onUpdate:modelValue":a[2]||(a[2]=l=>F.value=l),label:`是否为overlay（即无遮罩）-${F.value}`},null,8,["modelValue","label"])])),_:1}),u(C,{class:""},{default:s((()=>[u(L,{modelValue:M.value,"onUpdate:modelValue":a[3]||(a[3]=l=>M.value=l),label:`是否为persistent-（点遮罩不关闭）-${M.value}`},null,8,["modelValue","label"])])),_:1}),u(C,{class:""},{default:s((()=>[u(L,{modelValue:x.value,"onUpdate:modelValue":a[4]||(a[4]=l=>x.value=l),label:`侧栏打开页面是否为push - ${!!x.value}`},null,8,["modelValue","label"])])),_:1}),u(C,{class:""},{default:s((()=>[i(" 当前页："+d(h.value),1)])),_:1})])),_:1})])),_:1}),u(z,{title:"q-page 增强功能"},{default:s((()=>[u(C,null,{default:s((()=>[u(C,null,{default:s((()=>[i("标题栏下显示loadingBar，必需在q-page内才生效。")])),_:1}),u(C,{class:"q-gutter-sm"},{default:s((()=>[u(c,{"no-caps":"",label:"显示/隐藏",color:"primary",onClick:a[5]||(a[5]=l=>k.value=!k.value)}),u(c,{"no-caps":"",label:"显示进度",color:"primary",onClick:a[6]||(a[6]=l=>k.value=Math.random())}),u(c,{"no-caps":"",label:"设置参数",color:"primary",onClick:a[7]||(a[7]=l=>k.value={color:"red",stripe:!0,size:"10px"})}),u(c,{"no-caps":"",label:"通过全局事件显示",color:"primary",onClick:a[8]||(a[8]=l=>w({color:"teal"}))}),u(c,{"no-caps":"",label:"通过全局事件关闭",color:"primary",onClick:a[9]||(a[9]=l=>w(null))})])),_:1})])),_:1}),u(C,{class:"q-py-sm"},{default:s((()=>[u(C,null,{default:s((()=>[i("q-page设置标题栏")])),_:1}),u(C,{class:"q-gutter-sm"},{default:s((()=>[u(c,{color:"green",label:"设置标题",onClick:a[10]||(a[10]=l=>j.value="测试标题")}),u(c,{color:"green",label:"设置标题颜色",onClick:a[11]||(a[11]=l=>B.value={frontColor:"#ffffff",backgroundColor:"#FF6600"})})])),_:1})])),_:1}),u(C,{class:"q-py-sm"},{default:s((()=>[u(C,null,{default:s((()=>[i("可以结合自定义container的slot，用scroll-view组件实现自定义头、底部的情况下的页内滚动。")])),_:1}),u(c,{label:"查看DEMO",color:"green","icon-right":"east",to:"/pages/layout/layout2"})])),_:1})])),_:1})])),_:1},8,["push","loadingBar","title","navigationBarColor"]),u(N,{modelValue:U.value,"onUpdate:modelValue":a[13]||(a[13]=l=>U.value=l),elevated:"",overlay:F.value,persistent:M.value},{default:s((()=>[i("侧栏")])),_:1},8,["modelValue","overlay","persistent"]),u(N,{modelValue:$.value,"onUpdate:modelValue":a[14]||(a[14]=l=>$.value=l),elevated:"",overlay:F.value,persistent:M.value,side:"right"},{default:s((()=>[i("侧栏 ")])),_:1},8,["modelValue","overlay","persistent"])],64)}}};export{C as default};
