import{_ as t}from"./q-img.54a09aa8.js";import{_ as a,o as s,g as e,w as l,r as i,a as c,j as o,d as r,t as d,e as u,k as m,f as n,M as g}from"./index-a8f403b5.js";import{_ as h}from"./q-page.9b17920f.js";const p=a({data:()=>({imgid:0,width:0,height:0}),mounted(){this.setImgSize()},methods:{changeId(){this.imgid=Math.ceil(1e3*Math.random())},random:(t,a)=>parseInt(Math.random()*(a-t+1)+t,10),setImgSize(){this.width=this.random(100,200),this.height=this.random(50,200)}}},[["render",function(a,p,f,_,v,q){const x=i(u("q-img"),t),b=m,w=n("Lanmu"),C=g,j=i(u("q-page"),h);return s(),e(j,null,{default:l((()=>[c(w,{title:"Custom aspect ratio"},{default:l((()=>[c(b,{class:"row q-col-gutter-x-sm q-ma-sm"},{default:l((()=>[o("div",{class:"col-4"},[r(" Ratio: 16/9 "),c(x,{src:"https://placeimg.com/500/300/nature",ratio:16/9})]),o("div",{class:"col-4"},[r(" Ratio: 1 "),c(x,{src:"https://placeimg.com/500/300/nature",ratio:1})]),o("div",{class:"col-4"},[r(" Ratio: 4/3 "),c(x,{src:"https://placeimg.com/500/300/nature",ratio:4/3})])])),_:1})])),_:1}),c(w,{title:"Caption"},{default:l((()=>[o("div",{class:"q-col-gutter-md row items-start"},[o("div",{class:"col-6"},[c(x,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:l((()=>[o("div",{class:"absolute-bottom text-subtitle1 text-center"}," Caption ")])),_:1})]),o("div",{class:"col-6"},[c(x,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:l((()=>[o("div",{class:"absolute-top text-center"}," Caption ")])),_:1})]),o("div",{class:"col-6"},[c(x,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:l((()=>[o("div",{class:"absolute-bottom-right text-subtitle2"}," Caption ")])),_:1})]),o("div",{class:"col-6"},[c(x,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:l((()=>[o("div",{class:"absolute-full text-subtitle2 flex flex-center"}," Caption ")])),_:1})])])])),_:1}),c(w,{title:"图片"},{default:l((()=>[c(x,{class:"bg-grey-4",src:`https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random1/${v.imgid}.png`,error:"https://suan.qxtky.com/static/user/default.jpg"},null,8,["src"]),c(C,{onClick:q.changeId},{default:l((()=>[r("刷新")])),_:1},8,["onClick"]),c(b,{class:"q-pa-sm"},{default:l((()=>[r(" 原始尺寸：width="+d(v.width)+" height="+d(v.height),1)])),_:1}),c(b,{class:"q-py-sm"},{default:l((()=>[c(x,{src:`https://placeimg.com/${v.width}/${v.height}/nature`,id:"orignal",class:"bg-green-4"},null,8,["src"]),c(b,{class:""},{default:l((()=>[r("不设置大小")])),_:1})])),_:1}),c(b,{class:"q-py-sm"},{default:l((()=>[c(x,{src:`https://placeimg.com/${v.width}/${v.height}/nature`,width:" 200 ",height:"80",id:"orignal",class:"bg-grey"},null,8,["src"]),c(b,null,{default:l((()=>[r('设置：width="200" height="80"')])),_:1})])),_:1}),c(C,{onClick:q.setImgSize},{default:l((()=>[r("刷新")])),_:1},8,["onClick"])])),_:1})])),_:1})}]]);export{p as default};
