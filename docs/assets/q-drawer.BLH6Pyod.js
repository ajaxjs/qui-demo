import{_ as s,u as e,q as a,s as o,v as l,x as r,n as t,p as d,y as n,z as c,A as i,o as u,c as w,d as p,w as h,B as f,g as _,h as v,C as k,D as y,E as m,G as b,H as q,F as g,$ as B,m as C}from"./index-BM1HHzio.js";import{u as $,a as x,b as G}from"./use-model-toggle.BOe4rKPk.js";const j=s({props:{...e,...a,...$,side:{type:String,default:"left",validator:s=>["left","right"].includes(s)},width:{type:Number,default:300},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean},emits:[...x],setup(s,{slots:e,emit:a,attrs:u}){const w=o(l),p=r(s,w),h=t(!0===s.modelValue);d((()=>!0===s.overlay)),n("drawer-pushed",(e=>{h.value=s.side==e}));const f=d((()=>`q-drawer q-drawer--${s.side}`+(!0===h.value?" q-drawer__show":"")+(!0===s.bordered?" q-drawer--bordered":"")+(!0===p.value?" q-drawer--dark q-dark":""))),_=d((()=>({"q-drawer__backdrop__show":h.value}))),v=c({width:""+(s.width+(i(s.width)?"px":""))}),{show:k,hide:y}=G({showing:h});return{showing:h,classes:f,style:v,show:k,hide:y,backgropClass:_,onClickBackGroup:function(e){!0!==s.persistent&&(y(e),B("drawer-close"))}}}},[["render",function(s,e,a,o,l,r){const t=C;return u(),w(g,null,[p(t,{class:k([[o.classes,s.className],"column"]),style:y([s.styles,o.style].filter((s=>s)))},{default:h((()=>[f(s.$slots,"before"),p(t,{class:"q-drawer__content col"},{default:h((()=>[f(s.$slots,"default")])),_:3}),f(s.$slots,"after"),a.elevated?(u(),_(t,{key:0,class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})):v("",!0)])),_:3},8,["class","style"]),a.overlay?m((u(),_(t,{key:0,class:k(["q-drawer__backdrop",o.backgropClass]),onClick:o.onClickBackGroup,onTouchmove:e[0]||(e[0]=q((()=>{}),["stop","prevent"]))},null,8,["class","onClick"])),[[b,o.showing]]):v("",!0)],64)}]]);export{j as _};
