import{N as e,O as s,P as t,p as a,_ as o,r as n,L as r,e as l,o as c,g as i,w as d,a as u,D as S,B as f,h as y,C as q,k as p}from"./index-a8f403b5.js";const x=o(e({name:"QAvatar",props:{...s,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e){const s=t(e);return{classes:a((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),sizeStyle:s,contentStyle:a((()=>e.fontSize?{fontSize:e.fontSize}:null))}}}),[["render",function(e,s,t,a,o,x){const g=n(l("q-icon"),r),z=p;return c(),i(z,{class:q(e.classes),style:S(e.sizeStyle)},{default:d((()=>[u(z,{class:"q-avatar__content row flex-center overflow-hidden",style:S(e.contentStyle)},{default:d((()=>[f(e.$slots,"default"),e.icon?(c(),i(g,{key:0,name:e.icon},null,8,["name"])):y("",!0)])),_:3},8,["style"])])),_:3},8,["class","style"])}]]);export{x as _};
