import{N as e,q as a,O as s,y as t,P as r,p as o,R as l,_ as n,o as i,g as u,w as p,a as c,C as d,D as g,h as m,k as v,n as f,aa as y,aE as h,r as b,e as q,aw as $,at as k,A as _,s as S,v as B,x as C,I as x,f as w,B as j,aF as N,aG as O}from"./index-f676a6ba.js";const z={xs:2,sm:4,md:6,lg:10,xl:14};function F(e,a,s){return{transform:!0===a?`translateX(100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const H=n(e({name:"QLinearProgress",props:{...a,...s,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:s}=l(),n=t(e,s.$q),i=r(e,z),u=o((()=>!0===e.indeterminate||!0===e.query)),p=o((()=>e.reverse!==e.query)),c=o((()=>({...null!==i.value?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`}))),d=o((()=>"q-linear-progress"+(void 0!==e.color?` text-${e.color}`:"")+(!0===e.reverse||!0===e.query?" q-linear-progress--reverse":"")+(!0===e.rounded?" rounded-borders":""))),g=o((()=>F(void 0!==e.buffer?e.buffer:1,p.value,s.$q))),m=o((()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${!0===e.instantFeedback?"out":""}-transition q-linear-progress__track--${!0===n.value?"dark":"light"}`+(void 0!==e.trackColor?` bg-${e.trackColor}`:""))),v=o((()=>F(!0===u.value?1:e.value,p.value,s.$q))),f=o((()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${!0===e.instantFeedback?"out":""}-transition q-linear-progress__model--${!0===u.value?"in":""}determinate`)),y=o((()=>({width:100*e.value+"%"}))),h=o((()=>"q-linear-progress__stripe absolute-"+(!0===e.reverse?"right":"left")));return{classes:d,style:c,valuenow:!0===e.indeterminate?void 0:e.value,trackClass:m,trackStyle:g,modelClass:f,modelStyle:v,motion:u,stripeClass:h,stripeStyle:y}}}),[["render",function(e,a,s,t,r,o){const l=v;return i(),u(l,{role:"progressbar",class:d(e.classes),style:g(e.style),"aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.valuenow},{default:p((()=>[c(l,{class:d(e.trackClass),style:g(e.trackStyle)},null,8,["class","style"]),c(l,{class:d(e.modelClass),style:g(e.modelStyle)},null,8,["class","style"]),e.stripe&&!1===e.motion?(i(),u(l,{key:0,class:d(e.stripeClass),style:g(e.stripeStyle)},null,8,["class","style"])):m("",!0)])),_:1},8,["class","style","aria-valuenow"])}],["__scopeId","data-v-fa1d3a62"]]);const P=n({components:{LoadingBar:n({props:{option:[Boolean,Object,String,Number]},setup(e){const a=f(!1),s=f(null),t=e=>{s.value={color:"primary",size:"4px",indeterminate:!0},null===e||!1===e?a.value=!1:$(e)?a.value=e:k(e)?(s.value=Object.assign({},s.value,e),a.value=e):_(e)&&(s.value.progress=e,a.value=e),s.value.indeterminate=!_(s.value.progress)};return y((()=>e.option),t),h("loadingBar",t),t(t),{visible:a,opts:s}}},[["render",function(e,a,s,t,r,o){const l=b(q("q-linear-progress"),H);return t.visible?(i(),u(l,{key:0,class:"q-page-loading-bar",stripe:t.opts.stripe,value:t.opts.progress,indeterminate:t.opts.indeterminate,color:t.opts.color,size:t.opts.size},null,8,["stripe","value","indeterminate","color","size"])):m("",!0)}]])},props:{...S,pushWidth:{type:Number,default:300},push:String,title:String,navigationBarColor:Object,loadingBar:[Boolean,Object,String,Number],containerClass:[Object,Array,String]},setup(e,{slots:a,emit:s}){const t=B(C),r=()=>{},l="custom"==x().style.navigationStyle,{headHeight:n,footHeight:i}=t.config,{windowHeight:u,statusBarHeight:p,safeAreaInsets:c,uniPlatform:d}=t.platform,g=a.header?n:0,m=a.footer?i:0,v=l?p:0,f=g+m+v+c.bottom+("web"!=d||l?0:44),h=o((()=>`--head-height: ${g}px; --foot-height: ${m}px; --container-height: calc(100vh - ${f}px); `+(a.header?`padding-top: ${v+n}px;`:"")+(a.footer?` padding-bottom: ${c.bottom+i}px;`:"")+(e.push?` transform: translateX(${("left"==e.push?"":"-")+e.pushWidth}px);`:""))),b=o((()=>({"q-page-pushed":e.push,"has-foot":a.footer,"has-head":a.header,"no-title":e.customPage}))),q=e=>{e&&N({title:e})};q(e.title),y((()=>e.title),q);const $=e=>{e&&Object.keys(e).filter((e=>["frontColor","backgroundColor"].includes(e)))&&O(Object.assign({complete:r},e))};return $(e.navigationBarColor),y((()=>e.navigationBarColor),$),{classes:b,pageStyle:h,setTitle:q}}},[["render",function(e,a,s,t,r,o){const l=w("LoadingBar"),n=v;return i(),u(n,{class:d(["q-page column",[t.classes,e.className]]),style:g(t.pageStyle)},{default:p((()=>[c(l,{option:s.loadingBar},null,8,["option"]),j(e.$slots,"header"),e.$slots.container?j(e.$slots,"container",{key:0}):(i(),u(n,{key:1,class:d(["q-page-container",s.containerClass])},{default:p((()=>[j(e.$slots,"default")])),_:3},8,["class"])),j(e.$slots,"footer")])),_:3},8,["class","style"])}]]);export{P as _,H as a};