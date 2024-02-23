import{_ as l,o as t,g as u,w as n,r as d,a,d as e,j as r,c as s,b as o,F as f,k as _,f as i,e as b,C as m,t as c}from"./index-a8f403b5.js";import{_ as x}from"./q-badge.93a7d5af.js";import{_ as g}from"./q-page.9b17920f.js";const p=l({__name:"assist",setup(l){const p=["p","m"],h=["t","r","b","l","a","x","y"],w=["none","auto","xs","sm","md","lg","xl"];return(l,q)=>{const y=_,v=i("Lanmu"),S=d(b("q-badge"),x),D=d(b("q-page"),g);return t(),u(D,null,{default:n((()=>[a(v,{title:"Padding & Margin 边距"},{default:n((()=>[a(y,{class:"text-bold text-blue-grey q-mt-sm"},{default:n((()=>[e("语法：")])),_:1}),a(y,{class:"text-primary"},{default:n((()=>[e(" q-(p|m)(t|r|b|l|a|x|y)-(none|auto|xs|sm|md|lg|xl)"),r("br"),e("    类型    方向              大小 ")])),_:1}),a(y,{class:""},{default:n((()=>[a(y,{class:"text-bold text-blue-grey q-mt-sm"},{default:n((()=>[e("类型：")])),_:1}),e(" p (padding), m (margin) ")])),_:1}),a(y,{class:""},{default:n((()=>[a(y,{class:"text-bold text-blue-grey q-mt-sm"},{default:n((()=>[e("方向：")])),_:1}),e(" t (top), r (right), b (bottom), l (left),"),r("br"),e(" a (all), x (both left & right), y (both top & bottom) ")])),_:1}),a(y,{class:""},{default:n((()=>[a(y,{class:"text-bold text-blue-grey q-mt-sm"},{default:n((()=>[e("大小：")])),_:1}),e(" none,"),r("br"),e(" auto (ONLY for specific margins: q-ml-*, q-mr-*, q-mx-*),"),r("br"),e(" xs (extra small),"),r("br"),e(" sm (small),"),r("br"),e(" md (medium),"),r("br"),e(" lg (large),"),r("br"),e(" xl (extra large) ")])),_:1})])),_:1}),a(v,{title:"边距 Demo",hide:"",showToggle:""},{default:n((()=>[a(y,{class:"row q-col-gutter-sm"},{default:n((()=>[(t(),s(f,null,o(p,(l=>(t(),s(f,{key:l},[(t(),s(f,null,o(h,(u=>(t(),s(f,{key:u},[(t(),s(f,null,o(w,(t=>a(y,{key:t,class:"col-4"},{default:n((()=>[a(y,{class:"bg-teal",style:{padding:"1px"}},{default:n((()=>[a(y,{class:m(["bg-blue",`q-${l}${u}-${t}`])},{default:n((()=>[a(y,{class:"mg-inner bg-green q-pa-sm"},{default:n((()=>[e(c(`q-${l}${u}-${t}`),1)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024))),64))],64)))),64))],64)))),64))])),_:1})])),_:1}),a(v,{title:"Breakpoints 断点"},{default:n((()=>[a(y,null,{default:n((()=>[e("Quasar使用以下CSS断点：")])),_:1}),r("table",null,[r("tr",null,[r("td",null,"Extra"),r("td",null,"Small"),r("td",null,"xs"),r("td",null,"0px"),r("td",null,"599.99px")]),r("tr",null,[r("td",null,"Small"),r("td",null,"sm"),r("td",null,"600px"),r("td",null,"1023.99px")]),r("tr",null,[r("td",null,"Medium"),r("td",null,"md"),r("td",null,"1024px"),r("td",null,"1439.99px")]),r("tr",null,[r("td",null,"Large"),r("td",null,"lg"),r("td",null,"1440px"),r("td",null,"1919.99px")]),r("tr",null,[r("td",null,"Extra"),r("td",null,"Large"),r("td",null,"xl"),r("td",null,"1920px"),r("td",null,"无穷大")])])])),_:1}),a(v,{title:"Shadow 阴影"},{default:n((()=>[r("table",null,[r("tr",null,[r("td",null,"no-shadow"),r("td",null,"移除任何阴影")]),r("tr",null,[r("td",null,"inset-shadow"),r("td",null,"在顶部设置一个插入阴影")]),r("tr",null,[r("td",null,"inset-shadow-down"),r("td",null,"在底部设置一个插入阴影")]),r("tr",null,[r("td",null,"shadow-1"),r("td",null,"设置1的深度")]),r("tr",null,[r("td",null,"shadow-2"),r("td",null,"设置2的深度")]),r("tr",null,[r("td",null,"shadow-N"),r("td",null,"其中N是1到24的整数")]),r("tr",null,[r("td",null,"shadow-transition"),r("td",null,"在阴影上应用默认的CSS转换效果")])])])),_:1}),a(v,{title:"阴影 Demo",hide:"",showToggle:""},{default:n((()=>[a(y,{class:"row justify-around q-pb-lg"},{default:n((()=>[(t(),s(f,null,o(24,(l=>a(y,{class:m(["shadow-box row items-center justify-center q-ma-sm","shadow-"+l]),key:l},{default:n((()=>[e(c("shadow-"+l),1)])),_:2},1032,["class"]))),64))])),_:1})])),_:1}),a(v,{title:"其他CSS辅助类"},{default:n((()=>[a(y,{class:"lm-title"},{default:n((()=>[e("Scroll有关")])),_:1}),r("table",{class:"q-table"},[r("tbody",null,[r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("scroll")])),_:1})]),r("td",null,"应用CSS调整使所有平台上的滚动工作达到最佳状态")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("no-scroll")])),_:1})]),r("td",null,"隐藏DOM节点上的滚动条")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("overflow-auto")])),_:1})]),r("td",null,"将overflow设置为auto")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("overflow-hidden")])),_:1})]),r("td",null,"将overflow设置为hidden")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("overflow-hidden-y")])),_:1})]),r("td",null,"将y轴上的overflow设置为hidden")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("hide-scrollbar")])),_:1})]),r("td",null,"删除滚动条")])])]),a(y,{class:"lm-title"},{default:n((()=>[e("大小相关")])),_:1}),r("table",{class:"q-table"},[r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("fit")])),_:1})]),r("td",null,"宽度和高度设置为100％")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("full-height")])),_:1})]),r("td",null,"高度设置为100％")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("full-width")])),_:1})]),r("td",null,"宽度被设置为100％，左右边距为0")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("window-height")])),_:1})]),r("td",null,"高度设置为100vh，顶部和底部边距为0")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("window-width")])),_:1})]),r("td",null,"宽度设置为100vw，左边距和右边距0")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("block")])),_:1})]),r("td",null,"将display属性设置为block")])]),a(y,{class:"lm-title"},{default:n((()=>[e("方向有关")])),_:1}),r("table",{class:"q-table"},[r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-45")])),_:1})]),r("td",null,"旋转45度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-90")])),_:1})]),r("td",null,"旋转90度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-135")])),_:1})]),r("td",null,"旋转135度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-180")])),_:1})]),r("td",null,"旋转180度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-225​​")])),_:1})]),r("td",null,"旋转225度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-270")])),_:1})]),r("td",null,"旋转270度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rotate-315")])),_:1})]),r("td",null,"旋转315度")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("flip-horizontal")])),_:1})]),r("td",null,"水平翻转DOM元素")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("flip-vertical")])),_:1})]),r("td",null,"垂直翻转DOM元素")])]),a(y,{class:"lm-title"},{default:n((()=>[e("边界相关")])),_:1}),r("table",{class:"q-table"},[r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("no-border")])),_:1})]),r("td",null,"删除任何边框")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("no-border-radius")])),_:1})]),r("td",null,"删除边框可能具有的任何半径")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("no-box-shadow")])),_:1})]),r("td",null,"移除任何应用的box-shadow")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("no-outline")])),_:1})]),r("td",null,"删除边框上应用的任何轮廓")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("rounded-borders")])),_:1})]),r("td",null,"应用通用边框半径")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("border-radius-inherit")])),_:1})]),r("td",null,"从父元素继承边框半径")])]),a(y,{class:"lm-title"},{default:n((()=>[e("鼠标相关")])),_:1}),r("table",{class:"q-table"},[r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("non-selectable")])),_:1})]),r("td",null,"用户将无法选择DOM节点及其文本")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("no-pointer-events")])),_:1})]),r("td",null,"DOM元素不会成为鼠标事件的目标 - 点击、悬停等")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("all-pointer-events")])),_:1})]),r("td",null,"no-pointer-events的反义词")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("cursor-pointer")])),_:1})]),r("td",null,"改变DOM元素上的鼠标指针，看起来好像在可点击的链接上")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("cursor-not-allowed")])),_:1})]),r("td",null,"更改DOM元素上的鼠标指针，使其看起来好像不会执行任何操作")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("cursor-inherit")])),_:1})]),r("td",null,"将DOM元素上的鼠标指针更改为与父选项相同")]),r("tr",null,[r("td",null,[a(S,null,{default:n((()=>[e("cursor-none")])),_:1})]),r("td",null,"没有鼠标光标被渲染")])])])),_:1})])),_:1})}}},[["__scopeId","data-v-53aa7bc4"]]);export{p as default};
