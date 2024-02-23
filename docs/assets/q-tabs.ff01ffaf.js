import{N as a,ar as e,n as t,p as s,v as l,_ as o,as as n,r,L as i,e as c,T as u,o as b,g as d,w as p,C as v,h as f,a as C,B as m,d as g,t as h,k as _,s as q,aa as w,a4 as k,a7 as B}from"./index-f676a6ba.js";const S=o(a({name:"QTab",props:{icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>"t_"+id++},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}},setup(a,{slots:o,emit:r}){const i=l(n,e);if(i===e)return console.error("QTab component needs to be child of QTabs"),e;const c=t(null),u=t(null),b=t(null),d=s((()=>i.currentModel.value===a.name)),p=s((()=>"q-tab relative-position self-stretch flex flex-center text-center"+(!0===d.value?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(a.icon&&a.label&&!1===i.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===a.noCaps||!0===i.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===a.disable?" disabled":" q-focusable q-hoverable cursor-pointer"))),v=s((()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===i.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==a.contentClass?` ${a.contentClass}`:""))),f=i.tabProps.value.narrowIndicator;return{tabs:i,rootRef:u,classes:p,innerClass:v,narrow:f,rootRef:u,blurTargetRef:c,tabIndicatorRef:b}},methods:{onClick(a){!0!==this.disable&&(this.ripple&&this.$refs.ripple.ripple(a),this.tabs.updateModel({name:this.name}),this.$emit("click",a))}}}),[["render",function(a,e,t,s,l,o){const n=_,q=r(c("q-icon"),i),w=r(c("q-ripple"),u);return b(),d(n,{ref:"rootRef",class:v(a.classes),onClick:a.onClick},{default:p((()=>[!1===a.narrow?(b(),d(n,{key:0,class:v(["q-tab__indicator",a.tabs.tabProps.value.indicatorClass])},null,8,["class"])):f("",!0),C(n,{ref:a.blurTargetRef,class:"q-focus-helper",tabindex:-1},null,512),C(n,{class:v(a.innerClass)},{default:p((()=>[m(a.$slots,"default"),void 0!==a.icon?(b(),d(q,{key:0,name:a.icon,className:"q-tab__icon"},null,8,["name"])):f("",!0),void 0!==a.label?(b(),d(n,{key:1,class:"q-tab__label"},{default:p((()=>[g(h(a.label),1)])),_:1})):f("",!0),!0===a.narrow?(b(),d(n,{key:2,class:v(["q-tab__indicator",a.tabs.tabProps.value.indicatorClass])},null,8,["class"])):f("",!0),a.alert&&a.alertIcon?(b(),d(q,{key:3,className:"q-tab__alert-icon",name:a.alertIcon,color:!0!==a.alert?a.alert:""},null,8,["name","color"])):a.alert?(b(),d(n,{key:4,class:v(["q-tab__alert",!0!==a.alert?"text-"+a.alert:""])},null,8,["class"])):f("",!0)])),_:3},8,["class"]),a.disable?f("",!0):(b(),d(w,{key:1,class:"ripple",ref:"ripple"},null,512))])),_:3},8,["class","onClick"])}]]);function $(a,e,t){const s=!0===t?["left","right"]:["top","bottom"];return`absolute-${!0===e?s[0]:s[1]}${a?` text-${a}`:""}`}const y=["left","center","right","justify"];const P=o(a({name:"QTabs",props:{...q,modelValue:[Number,String],align:{type:String,default:"center",validator:a=>y.includes(a)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String},setup(a,{slots:e,emit:l}){const o=t(a.modelValue),r=t(!0);t(!0),t(!1),t(!1);const i=s((()=>!0===a.mobileArrows)),c=[],u=t(0),b=t(!1),d=s((()=>`q-tabs__content--align-${a.align||"justify"}`)),p=s((()=>`q-tabs row no-wrap items-center q-tabs--${!0===r.value?"":"not-"}scrollable q-tabs--${!0===a.vertical?"vertical":"horizontal"} q-tabs__arrows--${!0===i.value&&!0===a.outsideArrows?"outside":"inside"}`+(!0===a.dense?" q-tabs--dense":"")+(!0===a.shrink?" col-shrink":"")+(!0===a.stretch?" self-stretch":""))),v=s((()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+d.value+(void 0!==a.contentClass?` ${a.contentClass}`:"")+" scroll"));w((()=>a.modelValue),(a=>{m({name:a,setCurrent:!0,skipEmit:!0})}));const f=s((()=>({activeClass:a.activeClass,activeColor:a.activeColor,activeBgColor:a.activeBgColor,indicatorClass:$(a.indicatorColor,a.switchIndicator,a.vertical),narrowIndicator:a.narrowIndicator,inlineLabel:a.inlineLabel,noCaps:a.noCaps}))),C=s((()=>{const a=u.value,e=o.value;for(let t=0;t<a;t++)if(c[t].name.value===e)return!0;return!1}));function m({name:a,setCurrent:e,skipEmit:t,fromRoute:s}){o.value!==a&&(!0!==t&&l("update:modelValue",a),!0===e&&(o.value=a))}return B(n,{currentModel:o,tabProps:f,hasFocus:b,hasActiveTab:C,updateModel:m}),k((a=>{})),{classes:p,innerClass:v}},mounted(){}}),[["render",function(a,e,t,s,l,o){const n=_;return b(),d(n,{class:v([a.classes,a.className]),role:"tablist"},{default:p((()=>[C(n,{class:v(a.innerClass)},{default:p((()=>[m(a.$slots,"default")])),_:3},8,["class"])])),_:3},8,["class"])}]]);export{S as _,P as a};
