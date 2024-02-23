import{q as e,y as t,p as l,R as a,_ as s,o as n,g as i,C as u,D as o,k as r,aC as d,aD as c,r as p,e as f,w as m,c as g,F as y,b as _,a as q,h as b,aw as h,A as x,u as k,d as w,j as S,f as v,t as z}from"./index-a8f403b5.js";import{_ as $,a as j}from"./q-item.36c0156f.js";import{_ as C}from"./q-item-label.4cc9dcfa.js";import{_ as N}from"./q-card-section.9e22a9a3.js";import{_ as B}from"./q-page.9b17920f.js";const O=["wave","pulse","pulse-x","pulse-y","fade","blink","none"],A=["text","rect","circle","btn","badge","chip","toolbar","checkbox","radio","toggle","slider","range","input","avatar"],D={...e,type:{type:String,default:"rect",validator:e=>A.includes(e)},animation:{type:String,validator:e=>O.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String};const J=s({props:D,setup:e=>function(e){const s=a(),n=t(e,s.proxy.$q),i=l((()=>{const t=void 0!==e.size?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:t[0],height:t[1]}}));return{classes:l((()=>`q-skeleton q-skeleton--${!0===n.value?"dark":"light"} q-skeleton--type-${e.type}`+("none"!==e.animation?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(!0===e.square?" q-skeleton--square":"")+(!0===e.bordered?" q-skeleton--bordered":""))),style:i}}(e)},[["render",function(e,t,l,a,s,d){const c=r;return n(),i(c,{class:u(e.classes),style:o(e.style)},null,8,["class","style"])}]]);const L=s({props:{...D,options:Array,gutter:String,flex:String},setup(e){const t=l((()=>d(e.flex,e.gutter?`q${e.flex?"-col":""}-gutter-${e.gutter}`:""))),a=e=>e?"col"+(h(e)?"":"-"+e):"";function s(e){return e.type=e.type||"rect",e.itemClass=d(e.class,e.flex,"type-"+e.type,a(e.col),e.align,e.gutter?`q${e.flex?"-col":""}-gutter-${e.gutter}`:""),e.len=x(e.len)?e.len:1,e}return{opts:l((()=>e.options?e.options.map((e=>function(e){let t={};if(c(e))t.items=e.map((e=>s(e)));else{if(!e.items)return null;t.items=e.items.map((e=>s(e))),t=Object.assign({},t,e)}return t.class=d(t.class,t.flex,t.align,a(t.col),t.gutter?"q-col-gutter-"+t.gutter:""),console.log(t),t}(e))).filter((e=>e)):null)),classes:t,skeletonTypes:A}}},[["render",function(e,t,l,a,s,o){const d=p(f("q-skeleton"),J),c=r;return n(),i(c,{class:u(["q-skeleton-wrap",a.classes])},{default:m((()=>[(n(!0),g(y,null,_(a.opts,((t,l)=>(n(),i(c,{class:u(["q-skeleton-block",t.class]),key:l},{default:m((()=>[(n(!0),g(y,null,_(t.items,((t,l)=>(n(),i(c,{class:u(["q-skeleton-group",t.itemClass]),key:t},{default:m((()=>[t.type&&a.skeletonTypes.includes(t.type)?(n(!0),g(y,{key:0},_(t.len,(l=>(n(),i(c,{class:u(t.class),key:l},{default:m((()=>[q(d,{type:t.type,animation:e.animation,animationSpeed:e.animationSpeed,height:t.height,width:t.width,square:t.square,bordered:t.bordered,size:t.size},null,8,["type","animation","animationSpeed","height","width","square","bordered","size"])])),_:2},1032,["class"])))),128)):b("",!0)])),_:2},1032,["class"])))),128))])),_:2},1032,["class"])))),128))])),_:1},8,["class"])}]]),T=s({__name:"skeleton",setup(e){const t=[{flex:"row",align:"around",gutter:"x-sm",items:[{type:"avatar"},{type:"text",len:3,col:!0}]},[{height:"150px",col:12}],[{type:"btn",len:2,align:"justify-end",flex:"row",gutter:"x-sm"}]];return(e,l)=>{const a=p(f("q-skeleton"),J),s=r,u=v("Lanmu"),o=p(f("q-item-section"),$),d=p(f("q-item-label"),C),c=p(f("q-item"),j),b=p(f("q-card-section"),N),h=p(f("q-skeleton-render"),L),x=p(f("q-page"),B);return n(),i(x,null,{default:m((()=>[q(u,{title:"类型"},{default:m((()=>[q(s,{class:"row q-col-gutter-md"},{default:m((()=>[(n(!0),g(y,null,_(k(A),((e,t)=>(n(),i(s,{class:"col-6",key:t},{default:m((()=>[q(a,{type:e},null,8,["type"]),q(s,null,{default:m((()=>[w('type="'+z(e)+'"',1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),q(u,{title:"动画"},{default:m((()=>[q(s,{class:"row q-col-gutter-md"},{default:m((()=>[(n(!0),g(y,null,_(k(O),((e,t)=>(n(),i(s,{class:"col-6",key:t},{default:m((()=>[q(a,{animation:e},null,8,["animation"]),q(s,null,{default:m((()=>[w('animation="'+z(e)+'"',1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),q(u,{title:"样式"},{default:m((()=>[q(s,{class:"lm-title q-mb-lg"},{default:m((()=>[w("大小")])),_:1}),q(s,{class:"q-gutter-y-md"},{default:m((()=>[q(s,null,{default:m((()=>[q(a,{type:"circle",size:"100px"})])),_:1}),q(s,null,{default:m((()=>[q(a,{width:"150px"})])),_:1}),q(s,null,{default:m((()=>[q(a,{height:"150px"})])),_:1}),q(s,null,{default:m((()=>[q(a,{size:"50px"})])),_:1}),q(s,null,{default:m((()=>[q(a,{width:"200px",height:"100px"})])),_:1})])),_:1}),q(s,{class:"lm-title q-mb-lg"},{default:m((()=>[w("带边框")])),_:1}),S("div",{class:"q-gutter-y-md"},[q(s,null,{default:m((()=>[q(a,{bordered:"",type:"circle"})])),_:1}),q(s,null,{default:m((()=>[q(a,{bordered:""})])),_:1}),q(s,null,{default:m((()=>[q(a,{bordered:"",square:""})])),_:1}),q(s,null,{default:m((()=>[q(a,{width:"100px",height:"50px",class:"custom-skeleton-border"})])),_:1})]),q(s,{class:"lm-title q-mb-lg"},{default:m((()=>[w("自定义颜色")])),_:1}),S("div",{class:"q-gutter-y-md"},[q(s,null,{default:m((()=>[q(a,{class:"bg-accent",type:"circle"})])),_:1}),q(s,null,{default:m((()=>[q(a,{class:"bg-teal"})])),_:1}),q(s,null,{default:m((()=>[q(a,{class:"bg-orange",animation:"pulse-y"})])),_:1}),q(s,null,{default:m((()=>[q(a,{class:"bg-indigo"})])),_:1})]),q(s,{class:"lm-title q-mb-lg"},{default:m((()=>[w("方条")])),_:1}),q(a,{square:""})])),_:1}),q(u,{title:"实战"},{default:m((()=>[q(c,null,{default:m((()=>[q(o,{avatar:""},{default:m((()=>[q(a,{type:"avatar",animation:"fade"})])),_:1}),q(o,null,{default:m((()=>[q(d,null,{default:m((()=>[q(a,{type:"text",animation:"fade"})])),_:1}),q(d,{caption:""},{default:m((()=>[q(a,{type:"text",animation:"fade"})])),_:1})])),_:1})])),_:1}),q(a,{height:"200px",square:"",animation:"fade"}),q(b,null,{default:m((()=>[q(a,{type:"text",class:"text-subtitle2",animation:"fade"}),q(a,{type:"text",width:"50%",class:"text-subtitle2",animation:"fade"})])),_:1})])),_:1}),q(u,{title:"JSON数据渲染"},{default:m((()=>[q(s,{class:"q-pa-sm"},{default:m((()=>[q(h,{options:t,gutter:"y-sm"}),q(s,{class:"bg-blue-grey-2 text-blue-grey q-pa-sm q-mt-md rounded-borders"},{default:m((()=>[w(" 为了降低页面复杂度，q-skeleton-render 可以通过接收一个JSON数组来渲染骨架页。可以通过：flex:而已、col:比例、gutter:间距、align:对齐等参数设置排版。具体使用方法，请参数说明上档。 ")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-0ad08730"]]);export{T as default};
