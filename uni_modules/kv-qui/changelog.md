## 1.2.9（2024-11-29）
1. 优化q-page组件，不同状态下的页显示统一性
## 1.2.8（2024-11-28）
1. 新增 q-chat-message 聊天信息组件
2. 优化 q-page 组件，添加了getPageRect和scrollToBottom(duration)方法，方便与消息组件配合使用。
## 1.2.7（2024-11-28）
1. 优化页面结构，加入事件触发侧边栏
## 1.2.6（2024-11-26）
1. 修复q-page微信页高问题
2. 修复q-calendar组件今日按扭bug，及美化微信显示问题
## 1.2.5（2024-04-28）
修复q-page的padding出现多余空白BUG
## 1.2.4（2024-04-11）
修改uni引用，优化BUG
## 1.2.3（2024-04-09）
重写parse-url.js
修复若干BUG
## 1.2.2（2024-04-03）
1. q-page优化，自动切换`portrait`，`landscape`样式
2. 新赠q-dialog-plus组件。
**参数**
title 标题
page-mode 页面模式，头尾固定

**插槽**
heder
navigation
footer

```html
<q-dialog-plus v-model="visib" title="弹窗标题">
弹窗内容
</q-dialog-plus>
```
## 1.2.1（2024-04-01）
新增表单生成插件，通过JSON格式数据生成表单。
JS部分
```javascript

// 设置字段
const fields = [
	{name:'name',label:'姓名'},
	{name:'star',label:'评星',type:'rating'},
	{name:'score',label:'分数',type:'slider',min:1,max:100},
	{name:'sex',label:'性别', type:'radio', options: sexOpts},
	{name:'test',label:'性别', type:'checkbox', options: sexOpts},
	{name:'born',label:'生日',type:'datetime'},
]

// 表单赋值
const params=ref({});

```

template部分
```html
<q-form-plus v-model="params" :fiel="fields" />
```

## 1.1.1（2024-03-30）
修复q-header组件在APP端显示异常。
## 1.1.0（2024-03-29）
1.新增日历组件q-calendar
2.内置dayjs，需在qui.config.js中引入，如果项目已经安装，则可以使用项目的。
## 1.0.9（2023-06-27）
修复部分BUG
完善文档
## 1.0.8（2023-02-08）
1. 添加骨架屏组件。
## 1.0.7（2023-02-07）
1. 增加q-rating评分、q-skeleton骨架屏组件
2. 其它若干优化
## 1.0.6（2023-02-06）
1. 新增q-chip碎片、q-toggle开关组件
2. 若干优化
## 1.0.5（2023-02-05）
1. 一些优化
## 1.0.4（2023-02-04）
1. 修复q-tabs组件Bug
2. 完善文档
## 1.0.3（2023-02-04）
1. 增强q-page功能，添加了loadingBar，设置标题、样式等功能
2. 更新Demo及文档
## 1.0.2（2023-02-03）
1. 更新组件功能
2. 优化Demo
## 1.0.1（2023-02-02）
1. 修复item的点击波纹效果。
2. 修复其他问题
## 1.0.0（2023-02-02）
安装说明：
https://github.com/ajaxjs/qui-demo/blob/main/.documents/1.%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE.md

框架布局：
https://github.com/ajaxjs/qui-demo/blob/main/.documents/2.%E6%A1%86%E6%9E%B6%E5%B8%83%E5%B1%80.md

