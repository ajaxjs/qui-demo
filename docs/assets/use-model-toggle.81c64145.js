import{aa as e,a6 as o,R as a,aq as l}from"./index-f676a6ba.js";const d={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},i=["beforeShow","show","beforeHide","hide"];function n({showing:d,duration:i,handleShow:n,handleHide:u}){const t=a(),{props:s,emit:f,proxy:r}=t;let p;function h(e){!0===s.disable||void 0!==e&&!0===e.qAnchorHandled||(f("update:modelValue",!0),p=e,o((()=>{p===e&&(p=void 0)})),null===s.modelValue&&c(e))}function c(e){d.value=!0,f("beforeShow",e),void 0!==n?n(e):f("show",e)}function m(e){!0!==s.disable&&(f("update:modelValue",!1),p=e,o((()=>{p===e&&(p=void 0)})),v(e))}function v(e){f("beforeHide",e),void 0!==u?u(e):f("hide",e),setTimeout((()=>{d.value=!1}),i)}return e((()=>s.modelValue),(function(e){if(!0===s.disable&&!0===e)void 0!==s["onUpdate:modelValue"]&&f("update:modelValue",!1);else if(!0===e!==d.value){(!0===e?c:v)(p)}e&&l("close-popup",(e=>{m(e)}))})),{show:h,hide:m,toggle:function(e){!0===d.value?m(e):h(e)}}}export{i as a,n as b,d as u};