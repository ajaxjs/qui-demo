import{N as e,p as l,_ as s,o as a,g as t,w as o,B as i,C as n,D as r,k as c}from"./index-f676a6ba.js";const p=s(e({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:s}){const a=l((()=>parseInt(e.lines,10))),t=l((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===a.value?" ellipsis":"")));return{style:l((()=>void 0!==e.lines&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null)),classes:t}}}),[["render",function(e,l,s,p,b,d){const u=c;return a(),t(u,{class:n(e.classes),style:r(e.style)},{default:o((()=>[i(e.$slots,"default")])),_:3},8,["class","style"])}]]);export{p as _};
