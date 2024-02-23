import{N as a,U as t,p as l,V as e,_ as s,o as d,g as i,w as r,B as c,C as o,k as u,r as n,a as m,d as f,t as _,j as p,e as g,m as v,l as q,L as b}from"./index-f676a6ba.js";import{_ as h}from"./q-card-section.e78595de.js";import{_ as x}from"./q-card.3b31ba9e.js";import{_ as y}from"./q-img.39f533f3.js";import{_ as j}from"./q-avatar.42d9ccf4.js";import{_ as N,a as k}from"./q-item.8b25c847.js";import{_ as C}from"./q-item-label.4f1d944f.js";import{_ as w}from"./q-list.ede209a6.js";import{_ as A}from"./q-rating.997e100a.js";import{_ as O}from"./q-page.fec06fa6.js";import"./use-form.99633686.js";const P=s(a({name:"QCardActions",props:{...t,vertical:Boolean},setup:(a,{slots:t})=>({classes:l((()=>`q-card__actions ${!0===a.vertical?"items":"justify"}-${a.align?e[a.align]:"around"} q-card__actions--${!0===a.vertical?"vert column":"horiz row"}`))})}),[["render",function(a,t,l,e,s,n){const m=u;return d(),i(m,{class:o(a.classes)},{default:r((()=>[c(a.$slots,"default")])),_:3},8,["class"])}]]),z=s({__name:"card",setup(a){const t="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",l=3;return(a,e)=>{const s=u,c=n(g("q-card-section"),h),o=n(g("q-card"),x),z=n(g("q-separator"),v),D=n(g("q-btn"),q),J=n(g("q-card-actions"),P),B=n(g("q-img"),y),L=n(g("q-avatar"),j),T=n(g("q-item-section"),N),V=n(g("q-item-label"),C),$=n(g("q-item"),k),U=n(g("q-icon"),b),I=n(g("q-list"),w),S=n(g("q-rating"),A),Y=n(g("q-page"),O);return d(),i(Y,{containerClass:"q-pa-sm"},{default:r((()=>[m(s,{class:"lm-title q-mb-md"},{default:r((()=>[f("基础卡片")])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(c,null,{default:r((()=>[f(_(t))])),_:1})])),_:1}),m(o,{className:"my-card text-white",styles:"background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])),_:1}),m(c,{class:"q-pt-none"},{default:r((()=>[f(_(t))])),_:1})])),_:1}),m(o,{dark:"",bordered:"",class:"bg-grey-9 my-card"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])),_:1}),m(z,{dark:"",inset:""}),m(c,null,{default:r((()=>[f(_(t))])),_:1})])),_:1}),m(o,{flat:"",bordered:"",className:"my-card"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet")])),_:1}),m(c,{class:"q-pt-none"},{default:r((()=>[f(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])),_:1}),m(z,{inset:""}),m(c,null,{default:r((()=>[f(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])),_:1})])),_:1}),m(s,{class:"lm-title q-mb-md"},{default:r((()=>[f("带操作的卡片")])),_:1}),m(o,{className:"my-card bg-secondary text-white"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])),_:1}),m(c,null,{default:r((()=>[f(_(t))])),_:1}),m(z,{dark:""}),m(J,{align:"around"},{default:r((()=>[m(D,{flat:""},{default:r((()=>[f("Action 1")])),_:1}),m(D,{flat:""},{default:r((()=>[f("Action 2")])),_:1})])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])),_:1}),m(z),m(J,{vertical:""},{default:r((()=>[m(D,{flat:""},{default:r((()=>[f("Action 1")])),_:1}),m(D,{flat:""},{default:r((()=>[f("Action 2")])),_:1})])),_:1})])),_:1}),m(o,{className:"my-card bg-purple text-white"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])),_:1}),m(J,null,{default:r((()=>[m(D,{flat:""},{default:r((()=>[f("Action 1")])),_:1}),m(D,{flat:""},{default:r((()=>[f("Action 2")])),_:1})])),_:1})])),_:1}),m(s,{class:"lm-title q-mb-md"},{default:r((()=>[f("水平排版")])),_:1}),m(o,{className:"my-card",flat:"",bordered:""},{default:r((()=>[m(c,{horizontal:""},{default:r((()=>[m(c,null,{default:r((()=>[f(_(t))])),_:1}),m(B,{class:"col-5",src:"https://cdn.quasar.dev/img/parallax2.jpg"})])),_:1})])),_:1}),m(o,{className:"my-card",flat:"",bordered:""},{default:r((()=>[m(c,{horizontal:""},{default:r((()=>[m(c,null,{default:r((()=>[f(_(t))])),_:1}),m(z,{vertical:""}),m(c,null,{default:r((()=>[f(_(t))])),_:1})])),_:1})])),_:1}),m(o,{className:"my-card",flat:"",bordered:""},{default:r((()=>[m(c,{horizontal:""},{default:r((()=>[m(B,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),m(J,{vertical:"",class:"justify-around q-px-md"},{default:r((()=>[m(D,{flat:"",round:"",color:"red",icon:"favorite"}),m(D,{flat:"",round:"",color:"accent",icon:"bookmark"}),m(D,{flat:"",round:"",color:"primary",icon:"share"})])),_:1})])),_:1})])),_:1}),m(s,{class:"lm-title q-mb-md"},{default:r((()=>[f("带媒体内容")])),_:1}),m(o,{className:"my-card"},{default:r((()=>[p("img",{src:"https://cdn.quasar.dev/img/mountains.jpg"}),m(c,null,{default:r((()=>[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])),_:1}),m(c,{class:"q-pt-none"},{default:r((()=>[f(_(t))])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(B,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r((()=>[p("div",{class:"absolute-bottom text-subtitle2 text-center"}," Title ")])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(B,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r((()=>[p("div",{class:"absolute-bottom text-h6"}," Title ")])),_:1}),m(c,null,{default:r((()=>[f(_(t))])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(B,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r((()=>[p("div",{class:"text-subtitle2 absolute-top text-center"}," Title ")])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(B,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r((()=>[p("div",{class:"text-h5 absolute-bottom text-right"}," Title ")])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m($,null,{default:r((()=>[m(T,{avatar:""},{default:r((()=>[m(L,null,{default:r((()=>[p("img",{src:"https://cdn.quasar.dev/img/avatar2.jpg"})])),_:1})])),_:1}),m(T,null,{default:r((()=>[m(V,null,{default:r((()=>[f("Title")])),_:1}),m(V,{caption:""},{default:r((()=>[f("Subhead")])),_:1})])),_:1})])),_:1}),p("img",{src:"https://cdn.quasar.dev/img/parallax2.jpg"})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(B,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r((()=>[p("div",{class:"absolute-bottom"},[p("div",{class:"text-h6"},"Our Changing Planet"),p("div",{class:"text-subtitle2"},"by John Doe")])])),_:1}),m(J,null,{default:r((()=>[m(D,{flat:""},{default:r((()=>[f("Action 1")])),_:1}),m(D,{flat:""},{default:r((()=>[f("Action 2")])),_:1})])),_:1})])),_:1}),m(s,{class:"lm-title q-mb-md"},{default:r((()=>[f("水平排版")])),_:1}),m(o,{className:"my-card"},{default:r((()=>[p("img",{src:"https://cdn.quasar.dev/img/parallax2.jpg"}),m(I,null,{default:r((()=>[m($,{clickable:""},{default:r((()=>[m(T,{avatar:""},{default:r((()=>[m(U,{color:"primary",name:"local_bar"})])),_:1}),m(T,null,{default:r((()=>[m(V,null,{default:r((()=>[f("Bar XYZ")])),_:1}),m(V,{caption:""},{default:r((()=>[f("Have a drink.")])),_:1})])),_:1})])),_:1}),m($,{clickable:""},{default:r((()=>[m(T,{avatar:""},{default:r((()=>[m(U,{color:"red",name:"local_gas_station"})])),_:1}),m(T,null,{default:r((()=>[m(V,null,{default:r((()=>[f("Gas Station")])),_:1}),m(V,{caption:""},{default:r((()=>[f("Fill your gas tank.")])),_:1})])),_:1})])),_:1}),m($,{clickable:""},{default:r((()=>[m(T,{avatar:""},{default:r((()=>[m(U,{color:"amber",name:"local_movies"})])),_:1}),m(T,null,{default:r((()=>[m(V,null,{default:r((()=>[f("Cinema XYZ")])),_:1}),m(V,{caption:""},{default:r((()=>[f("Watch a movie.")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[p("img",{src:"https://cdn.quasar.dev/img/mountains.jpg"}),m(J,{align:"right"},{default:r((()=>[m(D,{flat:"",round:"",color:"red",icon:"favorite"}),m(D,{flat:"",round:"",color:"teal",icon:"bookmark"}),m(D,{flat:"",round:"",color:"primary",icon:"share"})])),_:1})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(c,null,{default:r((()=>[p("div",{class:"text-h6 q-mb-xs"},"Our Changing Planet"),p("div",{class:"row no-wrap items-center"},[m(S,{size:"18px",modelValue:l,"onUpdate:modelValue":e[0]||(e[0]=a=>l=a),max:5,color:"primary"}),p("span",{class:"text-caption text-grey q-ml-sm"},"4.2 (551)")])])),_:1}),p("img",{src:"https://cdn.quasar.dev/img/mountains.jpg"})])),_:1}),m(o,{className:"my-card"},{default:r((()=>[m(B,{src:"https://cdn.quasar.dev/img/chicken-salad.jpg"}),m(c,null,{default:r((()=>[m(D,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),p("div",{class:"row no-wrap items-center"},[p("div",{class:"col text-h6 ellipsis"}," Cafe Basilico "),p("div",{class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"},[m(U,{name:"place"}),f(" 250 ft ")])]),m(S,{modelValue:l,"onUpdate:modelValue":e[1]||(e[1]=a=>l=a),max:5,size:"32px"})])),_:1}),m(c,{class:"q-pt-none"},{default:r((()=>[p("div",{class:"text-subtitle1"}," $・Italian, Cafe "),p("div",{class:"text-caption text-grey"}," Small plates, salads & sandwiches in an intimate setting. ")])),_:1}),m(z),m(J,null,{default:r((()=>[m(D,{flat:"",round:"",icon:"event"}),m(D,{flat:"",color:"primary"},{default:r((()=>[f(" Reserve ")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-d5f15d80"]]);export{z as default};
