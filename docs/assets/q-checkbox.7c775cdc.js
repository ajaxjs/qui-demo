import{p as e,A as a,s,_ as l,r as c,L as o,e as t,o as n,g as u,w as r,c as d,F as i,b as v,C as h,D as p,h as g,E as b,a as m,G as k,d as y,t as I,ay as f,X as C,ai as x,az as S}from"./index-a8f403b5.js";const _={...s,modelValue:{required:!0},val:{},label:String,leftLabel:Boolean,labelClass:{},gutter:{type:String,default:"sm",validator:e=>["xs","sm","md","lg"].includes(e)},color:String,checkedIcon:String,uncheckedIcon:String,options:Array};function q(s){const l=void 0===s.val||s.val,c=e((()=>void 0!==s.options)),o=e((()=>{const{label:e,disable:a,color:o,checkedIcon:t,uncheckedIcon:n,icon:u}=s;return c.value?s.options.map((e=>(e="object"==typeof e?e:{label:e,value:e},e=Object.assign({disable:a,color:o,checkedIcon:t||e.icon||u,uncheckedIcon:n||e.icon||u},e)))):[{label:e,disable:a,color:o,value:l,checkedIcon:t,uncheckedIcon:n}]})),t=e((()=>o.value.map((e=>{const{modelValue:a}=s,{value:l}=e;return Array.isArray(a)?a.includes(l):l==a})))),n=e((()=>o.value.map(((e,a)=>{const{checkedIcon:s,uncheckedIcon:l}=e,c=t.value[a];return c&&s?s:!c&&l?l:""})))),u=e((()=>o.value.map(((e,a)=>[e.class,t.value[a]?"q-checked":""])))),r=e((()=>({marginRight:a(s.gutter)?s.gutter+"px":s.gutter})));return{classes:e((()=>["q-gutter-"+s.gutter,s.className])),opts:o,icons:n,status:t,isGroup:c,trueValue:l,itemClass:u,labelStyle:r}}const V=l({name:"QCheckbox",props:_,emits:["change","update:modelValue"],setup(e,{emit:a}){const s=q(e);return{...s,onChange:function(e){const{isGroup:l,trueValue:c}=s,o=l.value?e.detail.value:e.detail.value[0]?c:e.detail.value[0];a("update:modelValue",o),e.detail.value=o,a("change",e)}}}},[["render",function(e,a,s,l,_,q){const V=c(t("q-icon"),o),A=f,j=C,G=x,w=S;return n(),u(w,{class:h(["row",e.classes]),onChange:l.onChange},{default:r((()=>[(n(!0),d(i,null,v(e.opts,((a,s)=>(n(),u(G,{class:h(["q-checkbox",[e.labelClass,{"q-checked":e.status[s]}]]),style:p(e.labelStyle),key:s},{default:r((()=>[e.icons[s]?(n(),u(V,{key:0,class:"check-icon",name:e.icons[s],size:"22px"},null,8,["name"])):g("",!0),b(m(A,{value:a.value+"","data-vals":a.value,checked:e.status[s],disabled:a.disable,color:a.color},null,8,["value","data-vals","checked","disabled","color"]),[[k,!e.icons[s]]]),m(j,null,{default:r((()=>[y(I(a.label),1)])),_:2},1024)])),_:2},1032,["class","style"])))),128))])),_:1},8,["class","onChange"])}],["__scopeId","data-v-05c189a3"]]);export{V as _,q as a,_ as u};
