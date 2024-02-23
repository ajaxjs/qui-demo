import{_ as e,a as l}from"./q-field.7dc5e28f.js";import{_ as t,o as a,g as o,w as n,r as u,a as d,j as s,t as r,d as i,e as c,k as f,f as m,L as p}from"./index-a8f403b5.js";import{_ as b}from"./q-page.9b17920f.js";import"./use-form.3b8617c8.js";const x=t({data:()=>({text:"",value:[]}),methods:{focus(){console.log("focus-----")}}},[["render",function(t,x,_,g,V,v){const h=u(c("q-input"),e),q=f,w=m("Lanmu"),j=u(c("q-icon"),p),L=u(c("q-field"),l),k=u(c("q-page"),b);return a(),o(k,null,{default:n((()=>[d(w,{title:"Input","content-class":"q-gutter-y-sm"},{default:n((()=>[d(q,null,{default:n((()=>[d(h,{modelValue:V.text,"onUpdate:modelValue":x[0]||(x[0]=e=>V.text=e),label:"counter",counter:""},null,8,["modelValue"])])),_:1}),d(q,null,{default:n((()=>[d(h,{modelValue:V.text,"onUpdate:modelValue":x[1]||(x[1]=e=>V.text=e),label:"outlined",outlined:""},null,8,["modelValue"])])),_:1}),d(q,null,{default:n((()=>[d(h,{modelValue:V.text,"onUpdate:modelValue":x[2]||(x[2]=e=>V.text=e),label:"filled & autogrow",filled:"",autogrow:""},null,8,["modelValue"])])),_:1})])),_:1}),d(w,{title:"Debounce 防抖"},{default:n((()=>[d(h,{modelValue:V.text,"onUpdate:modelValue":x[3]||(x[3]=e=>V.text=e),label:"输入",debounce:800},null,8,["modelValue"])])),_:1}),d(w,{title:"Field 包裹器"},{default:n((()=>[d(q,{class:"q-gutter-y-sm"},{default:n((()=>[d(q,null,{default:n((()=>[d(L,{outlined:"",color:"purple-12",label:"Label","stack-label":""},{prepend:n((()=>[d(j,{name:"event"})])),control:n((()=>[s("div",{class:"self-center full-width no-outline",tabindex:"0"},r(V.text),1)])),_:1})])),_:1}),d(q,null,{default:n((()=>[d(L,{color:"grey-3","label-color":"orange",outlined:"",label:"Label","stack-label":""},{append:n((()=>[d(j,{name:"event",color:"orange"})])),control:n((()=>[s("div",{class:"self-center full-width no-outline",tabindex:"0"},r(V.text),1)])),_:1})])),_:1}),d(q,null,{default:n((()=>[d(L,{"model-value":V.text,"bottom-slots":"",label:"Label","stack-label":"",counter:""},{prepend:n((()=>[d(j,{name:"place"})])),control:n((()=>[s("div",{class:"self-center full-width no-outline",tabindex:"0"},r(V.text),1)])),append:n((()=>[d(j,{name:"close",class:"cursor-pointer"})])),hint:n((()=>[i(" Field hint ")])),_:1},8,["model-value"])])),_:1}),d(q,null,{default:n((()=>[d(L,{color:"lime-11","bg-color":"green",filled:"",label:"Label","stack-label":""},{prepend:n((()=>[d(j,{name:"event"})])),control:n((()=>[s("div",{class:"self-center full-width no-outline",tabindex:"0"},r(V.text),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(w,{title:"API"},{default:n((()=>[s("pre",null,"\t\t  focus -> autofocus\n\t\t  disabled -> disable\n\t\t  \n\t\t  支持原生参数：\n\t\t  confirm-type\n\t\t  confirm-hold\n\t\t  adjust-position\n\t\t  auto-blur\n\t\t")])),_:1})])),_:1})}]]);export{x as default};
