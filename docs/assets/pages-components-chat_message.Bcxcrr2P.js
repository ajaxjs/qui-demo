import{_ as e,p as s,r as a,a as t,o as l,g as n,w as o,B as r,c as m,F as u,f as c,t as i,h as g,d,C as p,e as f,X as v,m as x,n as y,a7 as k,k as q,ah as _,at as C}from"./index-BM1HHzio.js";import{_ as b}from"./q-img.8T4JQBzB.js";import{_ as H}from"./q-footer.Bejv-FT-.js";import{_ as $}from"./q-page.QbtCqCwE.js";const h=e({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:a}){const t=s((()=>!0===e.sent?"sent":"received")),l=s((()=>`q-message-text-content q-message-text-content--${t.value}`+(void 0!==e.textColor?` text-${e.textColor}`:""))),n=s((()=>`q-message-text q-message-text--${t.value}`+(void 0!==e.bgColor?` text-${e.bgColor}`:""))),o=s((()=>"q-message-container row items-end no-wrap"+(!0===e.sent?" reverse":""))),r=s((()=>void 0!==e.size?`col-${e.size}`:""));return{op:t,textClass:l,messageClass:n,containerClass:o,sizeClass:r}}},[["render",function(e,s,y,k,q,_){const C=v,H=x,$=a(t("q-img"),b);return l(),n(H,{class:p(`q-message q-message-${k.op}`)},{default:o((()=>[e.$slots.label||y.label?(l(),n(H,{key:0,class:"q-message-label"},{default:o((()=>[e.$slots.label?r(e.$slots,"label",{key:0}):y.label?(l(),m(u,{key:1},[y.labelHtml?(l(),n(C,{key:0,innerHTML:y.label},null,8,["innerHTML"])):(l(),n(C,{key:1},{default:o((()=>[c(i(y.label),1)])),_:1}))],64)):g("",!0)])),_:3})):g("",!0),d(H,{class:p(k.containerClass)},{default:o((()=>[e.$slots.avatar?r(e.$slots,"$slots.avatar",{key:0}):y.avatar?(l(),n($,{key:1,class:p("q-message-avatar q-message-avatar--"+k.op),src:y.avatar},null,8,["class","src"])):g("",!0),d(H,{class:p(k.sizeClass)},{default:o((()=>[d(H,{class:p("q-message-name q-message-name--"+k.op)},{default:o((()=>[e.$slots.name?r(e.$slots,"name",{key:0}):y.name?(l(),m(u,{key:1},[y.nameHtml?(l(),n(C,{key:0,innerHTML:y.name},null,8,["innerHTML"])):(l(),m(u,{key:1},[c(i(y.name),1)],64))],64)):g("",!0)])),_:3},8,["class"]),e.$slots.default?(l(),n(H,{key:0,class:p([k.messageClass,"last-msg"])},{default:o((()=>[d(H,{class:p(k.textClass)},{default:o((()=>[r(e.$slots,"default")])),_:3},8,["class"])])),_:3},8,["class"])):y.text?(l(!0),m(u,{key:1},f(y.text,((e,s)=>(l(),n(H,{class:p([k.messageClass,s+1==y.text.length?"last-msg":""]),key:s},{default:o((()=>[d(H,{class:p(k.textClass)},{default:o((()=>[y.textHtml?(l(),n(H,{key:0,innerHTML:e},null,8,["innerHTML"])):(l(),m(u,{key:1},[c(i(e),1)],64))])),_:2},1032,["class"])])),_:2},1032,["class"])))),128)):g("",!0),y.stamp?(l(),n(H,{key:2,class:p(["q-message-stamp","text-"+(y.textColor||"grey")])},{default:o((()=>[y.stampHtml?(l(),n(H,{key:0,innerHTML:y.stamp},null,8,["innerHTML"])):(l(),m(u,{key:1},[c(i(y.stamp),1)],64))])),_:1},8,["class"])):g("",!0)])),_:3},8,["class"])])),_:3},8,["class"])])),_:3},8,["class"])}]]),M=e({__name:"chat_message",setup(e){const s=y(""),r=y(!1),c=y([]);function i(e,a,t){c.value.push({sent:a,name:a?"Dook":"Kasi",avatar:"https://picsum.photos/150/150?random="+(a?1:0),text:[e],stamp:"5 分钟前"}),s.value="",k((()=>{r.value=!0}))}return["你好啊！","你好，很高兴认识你！","我也是，幸会幸会！","你是做什么的呀？","我是做前端的😊","😂"].forEach(((e,s)=>{i(e,s%2==0)})),(e,g)=>{const p=a(t("q-chat-message"),h),v=_,x=a(t("q-btn"),q),y=a(t("q-footer"),H),k=a(t("q-page"),$);return l(),n(k,{class:"q-px-sm"},{footer:o((()=>[d(y,null,{default:o((()=>[d(v,{type:"text","confirm-type":"send",focus:r.value,modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=e=>s.value=e),onConfirm:g[1]||(g[1]=e=>i(s.value,!0)),class:"input col",onBlur:g[2]||(g[2]=e=>r.value=!1)},null,8,["focus","modelValue"]),d(x,{unelevated:"",square:"",icon:"send",color:"green",onClick:g[3]||(g[3]=e=>i(s.value,!0))})])),_:1})])),default:o((()=>[(l(!0),m(u,null,f(c.value,((e,s)=>(l(),n(p,C({key:s},e),null,16)))),128))])),_:1})}}},[["__scopeId","data-v-fabdd1d5"]]);export{M as default};
