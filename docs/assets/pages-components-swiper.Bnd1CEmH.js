import{_ as a,p as e,A as t,n as l,r as i,a as o,o as n,g as s,w as r,c as u,F as c,e as d,H as m,C as p,f as v,t as g,h as f,B as b,ax as y,m as h,ay as x,az as _,T as V,b as C,d as k,j as w,X as q,aA as S}from"./index-BM1HHzio.js";import{_ as j}from"./q-img.8T4JQBzB.js";import{_ as D}from"./q-checkbox.4fLPyich.js";import{_ as B}from"./q-page.QbtCqCwE.js";const A=a({props:{...{indicatorDots:Boolean,indicatorColor:{type:String,default:"rgba(0, 0, 0, .3)"},indicatorActiveColor:{type:String,default:"#000000"},activeClass:String,changingClass:String,autoplay:Boolean,interval:{type:Number,default:5e3},duration:{type:Number,default:500},circular:Boolean,vertical:Boolean,previousMargin:{type:String,default:"0px"},nextMargin:{type:String,default:"0px"},acceleration:Boolean,disableProgrammaticAnimation:Boolean,displayMultipleItems:{type:Number,default:1},skipHiddenItemLayout:Boolean,disableTouch:Boolean,touchable:{type:Boolean,default:!0},easingFunction:{type:String,default:"default"}},modelValue:[Number,String],options:Array},setup(a,{slots:i,emit:o}){const{proxy:{$uni:n}}=V(),s=e((()=>a.options?a.options.map(((a,e)=>(a.name=a.name||"item-"+e,a))):Object.keys(i).filter((a=>"item-"==a.substring(0,5))))),r=a.options?s.value.map((a=>a.name)):s.value.map((a=>a.substr(5))),u=t(a.modelValue),c=l(u?a.modelValue:r.indexOf(a.modelValue)<0?0:r.indexOf(a.modelValue)),d=(a,e)=>o(a,e);return{current:c,items:s,titleFmt:(a,e)=>{if(y(a)){const e=["absolute-"+(a.position||"bottom"),a.class];a.class=e}else a={text:a,class:"absolute-bottom"};return a[e]},onClick:(e,t)=>{if(e.detail.index=t,a.options){const l=a.options[t];n.openUrl(l),e.detail.item=l}d("click",e)},onChange:a=>{c.value=a.detail.current;const e=r[c.value];o("update:modelValue",u?c.value:r[c.value]),a&&(Object.assign(a.detail,{name:e}),o("change",a))},emitEvent:d}}},[["render",function(a,e,t,l,y,V){const C=h,k=i(o("q-img"),j),w=x,q=_;return n(),s(q,{"indicator-dots":a.indicatorDots,"indicator-color":a.indicatorColor,"indicator-active-color":a.indicatorActiveColor,"active-class":a.activeClass,"changing-class":a.changingClass,autoplay:a.autoplay,current:l.current,interval:a.interval,duration:a.duration,circular:a.circular,vertical:a.vertical,"previous-margin":a.previousMargin,"next-margin":a.nextMargin,acceleration:a.acceleration,"disable-programmatic-animation":a.disableProgrammaticAnimation,"display-multiple-items":a.displayMultipleItems,"skip-hidden-item-layout":a.skipHiddenItemLayout,"disable-touch":a.disableTouch,touchable:a.touchable,"easing-function":a.easingFunction,onChange:l.onChange,onTransition:e[0]||(e[0]=a=>l.emitEvent("transition",a)),onAnimationfinish:e[1]||(e[1]=a=>l.emitEvent("animationfinish",a))},{default:r((()=>[(n(!0),u(c,null,d(l.items,((e,i)=>(n(),s(w,{key:i,onClick:m((a=>l.onClick(a,i)),["stop"])},{default:r((()=>[t.options?(n(),s(k,{key:0,src:e.src,className:"absolute-full",fit:""},{default:r((()=>[e.title?(n(),s(C,{key:0,class:p(l.titleFmt(e.title,"class"))},{default:r((()=>[v(g(l.titleFmt(e.title,"text")),1)])),_:2},1032,["class"])):f("",!0)])),_:2},1032,["src"])):b(a.$slots,e,{key:1})])),_:2},1032,["onClick"])))),128))])),_:3},8,["indicator-dots","indicator-color","indicator-active-color","active-class","changing-class","autoplay","current","interval","duration","circular","vertical","previous-margin","next-margin","acceleration","disable-programmatic-animation","display-multiple-items","skip-hidden-item-layout","disable-touch","touchable","easing-function","onChange"])}]]),U=a({__name:"swiper",setup(a){const t=l("mails"),u=l(0),c=l({indicatorDots:!0,autoplay:!1,vertical:!1,circular:!1}),d=[{src:"https://cdn.quasar.dev/img/parallax1.jpg",title:"带标题的"},{src:"https://cdn.quasar.dev/img/parallax2.jpg",title:{text:"带高级标题，设置位置和样式",position:"top",class:"text-yellow"}},{src:"https://cdn.quasar.dev/img/mountains.jpg",title:"带连接的",to:"/pages/index/index",target:"tab"}],m=a=>{console.log(a)},p=e((()=>{const a=[];for(var e in c.value){const t=c.value[e];S(t)&&t&&a.push(e)}return`参数请参考：https://uniapp.dcloud.net.cn/component/swiper.html\n\n<q-swiper v-model="tab" \n\t${a.join("\r\n\t")}\n>\n\t<template #item-mails>\n\t\t<view class="fit bg-orange">1.item-mails</view>\n\t</template>\n\t<template #item-alarms>\n\t\t<view class="fit bg-blue">2.item-alarms</view>\n\t</template>\n\t<template #item-movies>\n\t\t<view class="fit bg-green">3.item-movies</view>\n\t</template>\n</q-swiper>`})),f=[{title:"template",code:'<q-swiper v-model="tab1" :options="options" indicatorDots @click="onClick"></q-swiper>'},{title:"Script",code:`export default {\n  date(){\n    return {\n      options: [${d.map((a=>JSON.stringify(a))).join("\r\n\t")}]\n    }\n  }\n}`}];return(a,e)=>{const l=h,b=i(o("q-swiper"),A),y=q,x=i(o("q-checkbox"),D),_=C("HiCode"),V=C("Lanmu"),S=i(o("q-page"),B);return n(),s(S,null,{default:r((()=>[k(V,{title:"Slot Swiper"},{default:r((()=>[k(b,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),indicatorDots:c.value.indicatorDots,autoplay:c.value.autoplay,vertical:c.value.vertical,circular:c.value.circular},{"item-mails":r((()=>[k(l,{class:"fit bg-orange"},{default:r((()=>[v("1.item-mails")])),_:1})])),"item-alarms":r((()=>[k(l,{class:"fit bg-blue"},{default:r((()=>[v("2.item-alarms")])),_:1})])),"item-movies":r((()=>[k(l,{class:"fit bg-green"},{default:r((()=>[v("3.item-movies")])),_:1})])),_:1},8,["modelValue","indicatorDots","autoplay","vertical","circular"]),k(l,{class:"text-grey-7"},{default:r((()=>[v(" 当前TAB： "),k(y,{class:"text-bold text-red"},{default:r((()=>[v(g(t.value),1)])),_:1})])),_:1}),k(l,{class:"text-grey"},{default:r((()=>[k(l,{class:"q-pa-sm"},{default:r((()=>[v("配置")])),_:1}),k(l,{class:"q-pa-sm row q-gutter-sm"},{default:r((()=>[k(x,{class:"uni",modelValue:c.value.autoplay,"onUpdate:modelValue":e[1]||(e[1]=a=>c.value.autoplay=a),label:"自动播放"},null,8,["modelValue"]),k(x,{class:"uni",modelValue:c.value.vertical,"onUpdate:modelValue":e[2]||(e[2]=a=>c.value.vertical=a),label:"是否纵向"},null,8,["modelValue"]),k(x,{class:"uni",modelValue:c.value.circular,"onUpdate:modelValue":e[3]||(e[3]=a=>c.value.circular=a),label:"头尾衔接"},null,8,["modelValue"]),k(x,{class:"uni",modelValue:c.value.indicatorDots,"onUpdate:modelValue":e[4]||(e[4]=a=>c.value.indicatorDots=a),label:"显示DOT"},null,8,["modelValue"])])),_:1})])),_:1}),k(_,{hide:"",title:"示例代码",code:p.value},null,8,["code"])])),_:1}),k(V,{title:"Array Swiper"},{default:r((()=>[k(b,{modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=a=>u.value=a),options:d,indicatorDots:"",onClick:m},null,8,["modelValue"]),k(l,{class:""},{default:r((()=>[v(" 支持options参数数组渲染："+g(u.value)+", ",1),w("br"),v(" 数据格式： [{src:'图片地址',title:'图片标题(可选)',to:'连接(可选)'}] ")])),_:1}),k(_,{hide:"",code:f})])),_:1})])),_:1})}}},[["__scopeId","data-v-1f7a353d"]]);export{U as default};
