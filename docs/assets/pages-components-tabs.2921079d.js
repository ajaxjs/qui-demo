import{n as a,o as e,g as l,w as m,r as s,a as o,d as i,t,k as n,e as d,f as u}from"./index-f676a6ba.js";import{_ as r,a as c}from"./q-tabs.ff01ffaf.js";import{_ as p}from"./q-badge.e1a6aba5.js";import{_ as v}from"./q-page.fec06fa6.js";const b={__name:"tabs",setup(b){const f=a("mails");return(a,b)=>{const V=n,_=s(d("q-tab"),r),g=s(d("q-tabs"),c),w=u("Lanmu"),h=s(d("q-badge"),p),x=s(d("q-page"),v);return e(),l(x,null,{default:m((()=>[o(w,{title:"Tabs"},{default:m((()=>[o(V,{class:"q-pa-sm"},{default:m((()=>[i(" Tab: "+t(f.value),1)])),_:1}),o(V,{class:"text-grey"},{default:m((()=>[i(" 设置：narrow-indicator ")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[0]||(b[0]=a=>f.value=a),"narrow-indicator":"",class:"uni text-teal"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(V,{class:"text-grey"},{default:m((()=>[i(' 设置：align="justify" ')])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[1]||(b[1]=a=>f.value=a),className:"bg-green-2",align:"justify"},{default:m((()=>[o(_,{class:"text-orange",name:"mails",icon:"mail",label:"Mails"}),o(_,{class:"text-cyan",name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{class:"text-red",name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(V,{class:"text-grey"},{default:m((()=>[i(" 设置：inline-label ")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[2]||(b[2]=a=>f.value=a),"inline-label":"",className:"bg-purple text-white shadow-2"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(V,{class:"text-grey"},{default:m((()=>[i(" 单图标 ")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[3]||(b[3]=a=>f.value=a),className:"bg-teal text-yellow shadow-2"},{default:m((()=>[o(_,{name:"mails",icon:"mail"}),o(_,{name:"alarms",icon:"alarm"}),o(_,{name:"movies",icon:"movie"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(V,{class:"text-grey"},{default:m((()=>[i("滚动Tab")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[4]||(b[4]=a=>f.value=a),"inline-label":"",className:"bg-primary text-white shadow-2",align:"left"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{name:"movies",icon:"movie",label:"Movies"}),o(_,{name:"photos",icon:"photo",label:"Photos"}),o(_,{name:"videos",icon:"slow_motion_video",label:"Videos"}),o(_,{name:"addressbook",icon:"people",label:"Address Book"})])),_:1},8,["modelValue"])])),_:1}),o(w,{title:"其它样式"},{default:m((()=>[o(V,{class:"text-grey"},{default:m((()=>[i("自定义indicator-color")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[5]||(b[5]=a=>f.value=a),"indicator-color":"purple",className:"text-teal"},{default:m((()=>[o(_,{name:"mails",icon:"mail"}),o(_,{name:"alarms",icon:"alarm"}),o(_,{name:"movies",icon:"movie"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(V,{class:"text-grey"},{default:m((()=>[i("紧凑 dense")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[6]||(b[6]=a=>f.value=a),dense:"","no-caps":"","inline-label":"",className:"bg-purple text-white shadow-2"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[7]||(b[7]=a=>f.value=a),dense:"",className:"bg-purple text-white shadow-2"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(V,{class:"text-grey"},{default:m((()=>[i("提示")])),_:1}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[8]||(b[8]=a=>f.value=a),className:"bg-primary text-white shadow-2"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"},{default:m((()=>[o(h,{color:"red",floating:""},{default:m((()=>[i("2")])),_:1})])),_:1}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"},{default:m((()=>[o(h,{color:"red",floating:""},{default:m((()=>[i("10+")])),_:1})])),_:1}),o(_,{alert:"",name:"movies",icon:"movie",label:"Movies"}),o(_,{alert:"yellow","alert-icon":"warning",name:"photo",icon:"photo",label:"photo"})])),_:1},8,["modelValue"])])),_:1}),o(w,{title:"Alignmeng"},{default:m((()=>[o(g,{modelValue:f.value,"onUpdate:modelValue":b[9]||(b[9]=a=>f.value=a),dense:"",align:"left",className:"bg-primary text-white shadow-2",breakpoint:0},{default:m((()=>[o(_,{name:"mails",icon:"mail"}),o(_,{name:"alarms",icon:"alarm"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[10]||(b[10]=a=>f.value=a),dense:"",align:"center",className:"bg-primary text-white shadow-2",breakpoint:0},{default:m((()=>[o(_,{name:"mails",icon:"mail"}),o(_,{name:"alarms",icon:"alarm"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[11]||(b[11]=a=>f.value=a),dense:"",align:"right",className:"bg-primary text-white shadow-2",breakpoint:0},{default:m((()=>[o(_,{name:"mails",icon:"mail"}),o(_,{name:"alarms",icon:"alarm"})])),_:1},8,["modelValue"]),o(V,{class:"q-pa-sm"}),o(g,{modelValue:f.value,"onUpdate:modelValue":b[12]||(b[12]=a=>f.value=a),dense:"",align:"justify",className:"bg-primary text-white shadow-2",breakpoint:0},{default:m((()=>[o(_,{name:"mails",icon:"mail"}),o(_,{name:"alarms",icon:"alarm"})])),_:1},8,["modelValue"])])),_:1}),o(w,{title:"Vertical"},{default:m((()=>[o(V,{class:"row"},{default:m((()=>[o(g,{modelValue:f.value,"onUpdate:modelValue":b[13]||(b[13]=a=>f.value=a),vertical:"","indicator-color":"yellow",className:"bg-purple text-white shadow-2 col-4"},{default:m((()=>[o(_,{name:"mails",icon:"mail",label:"Mails"}),o(_,{name:"alarms",icon:"alarm",label:"Alarms"}),o(_,{name:"movies",icon:"movie",label:"Movies"})])),_:1},8,["modelValue"]),o(V,{class:"col q-pa-sm"},{default:m((()=>[i(t(f.value),1)])),_:1})])),_:1})])),_:1})])),_:1})}}};export{b as default};
