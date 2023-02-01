"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _component_hi_code = common_vendor.resolveComponent("hi-code");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_btn2 + _component_hi_code + _component_Lanmu + _easycom_q_page2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_page)();
}
const _sfc_main = {
  __name: "uniapp",
  setup(__props) {
    const { proxy: { $q, $uni } } = common_vendor.getCurrentInstance();
    const alert1 = (evt) => {
      $uni.alert("\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A\uFF01", "\u8FD9\u662F\u6807\u9898", ["\u53D6\u6D881", "\u786E\u5B9A2"], (evt2) => {
        $uni.toast("\u70B9\u51FB\u4E86" + (evt2.confirm ? "\u786E\u5B9A" : "\u53D6\u6D88"));
        console.log("\u70B9\u51FB\u4E86", evt2);
      });
    };
    const toast1 = () => {
      $uni.toast("\u9519\u8BEF\u4FE1\u606F", (evt) => {
        console.log("\u5E26\u56DE\u8C03\u7684\u63D0\u793A", evt);
      });
    };
    const alertCode = `* \u9664\u7B2C\u4E00\u4E2A\u53C2\u6570\u56FA\u5B9A\u4E3A\u5185\u5BB9\u5916\uFF0C\u5176\u4ED6\u53C2\u6570\u987A\u5E8F\u4E0D\u56FA\u5B9A
$uni.alert('\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01')
$uni.alert('\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01','\u8FD9\u662F\u6807\u9898',['\u5173\u4E86\u5427\uFF01'])
$uni.alert('\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01',['\u5173\u4E86\u5427\uFF01'])
$uni.alert('\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01',['\u53D6\u6D881','\u786E\u5B9A2'])
$uni.alert('\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A\uFF01', '\u8FD9\u662F\u6807\u9898', ['\u53D6\u6D881','\u786E\u5B9A2'], (evt)=>{
	console.log('\u70B9\u51FB\u4E86', evt)
})
`;
    const toastCode = `
$uni.toast('\u6B63\u786E\u63D0\u793A')
// \u70B9\u51FB\u7A7A\u4E0D\u7A7F\u900F
$uni.toast('\u5E26\u906E\u7F69\u5C42',true)
$uni.toast('\u9519\u8BEF\u4FE1\u606F','error')
$uni.toast('\u7EAF\u6587\u672C\u63D0\u793A','none')
$uni.toast('\u9519\u8BEF\u4FE1\u606F',()=>{
	console.log('\u5E26\u56DE\u8C03\u7684\u63D0\u793A')
})
// \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/api/ui/prompt.html
$uni.toast('\u590D\u6742\u53C2\u6570',{duration:2000,mask:true,icon:'error'})
`;
    const actionCode = `\u53C2\u6570\u8BF4\u660E
items: Array
\u7B80\u5355\u6570\u636E\uFF1A['A', 'B', 'C']\uFF0C
\u6807\u51C6\u6570\u636E\uFF1A[{label:'A',value:'1'},{label:'B',value:'2'}]
\u975E\u6807\u6570\u636E\uFF1A[{"name": "\u4E1C\u57CE\u533A","code": "110101"},...]
sets
	\u4E3A Object \u7C7B\u578B\u65F6 showActionSheet\u53C2\u6570\uFF0C\u53C2\u8003https://uniapp.dcloud.net.cn/api/ui/prompt.html
	\u4E3A Function \u7C7B\u578B\u65F6 showActionSheet\u7684complete
	\u4E3A String \u7C7B\u578B\u65F6 showActionSheet\u7684title

// \u7B80\u5355\u6570\u7EC4
$uni.actions(['\u4E2D\u56FD', '\u7F8E\u56FD', '\u5DF4\u897F', '\u65E5\u672C', '\u5FB7\u56FD'])
// \u6807\u51C6\u6570\u7EC4
$uni.actions([{label:'\u4E2D\u56FD',value:'China'}, {label:'\u7F8E\u56FD',value:'America'}, {label:'\u5DF4\u897F',value:'Brazil'}, {label:'\u65E5\u672C',value:'Japan'}, {label:'\u5FB7\u56FD',value:'Germany'}])
// \u590D\u6742\u6570\u7EC4
$uni.actions([{"name": "\u4E1C\u57CE\u533A","code": "110101"},{"name": "\u897F\u57CE\u533A","code": "110102"},{"name": "\u671D\u9633\u533A","code": "110105"}],{label:'name',value:'code'})

`;
    const actionRes = common_vendor.ref(null);
    const actionCall = (evt) => {
      const res = {};
      Object.keys(evt).forEach((key) => {
        res[key] = evt[key];
      });
      actionRes.value = JSON.stringify(res);
      console.log("+++---", evt, actionRes.value);
    };
    const actions1 = () => $uni.actions(["\u4E2D\u56FD", "\u7F8E\u56FD", "\u5DF4\u897F", "\u65E5\u672C", "\u5FB7\u56FD"], actionCall);
    const actions2 = () => $uni.actions([{ label: "\u4E2D\u56FD", value: "China" }, { label: "\u7F8E\u56FD", value: "America" }, { label: "\u5DF4\u897F", value: "Brazil" }, { label: "\u65E5\u672C", value: "Japan" }, { label: "\u5FB7\u56FD", value: "Germany" }], actionCall);
    const actions3 = () => $uni.actions([{ "name": "\u4E1C\u57CE\u533A", "code": "110101" }, { "name": "\u897F\u57CE\u533A", "code": "110102" }, { "name": "\u671D\u9633\u533A", "code": "110105" }, { "name": "\u4E30\u53F0\u533A", "code": "110106" }, { "name": "\u77F3\u666F\u5C71\u533A", "code": "110107" }], { label: "name", value: "code", complete: actionCall });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref($uni).alert("\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01")),
        b: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u7B80\u5355\u63D0\u793A"
        }),
        c: common_vendor.o(($event) => common_vendor.unref($uni).alert("\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01", "\u8FD9\u662F\u6807\u9898", ["\u5173\u4E86\u5427\uFF01"])),
        d: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u5E26\u6807\u9898\u63D0\u793A"
        }),
        e: common_vendor.o(($event) => common_vendor.unref($uni).alert("\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01", [{
          color: "#FF0000",
          text: "\u53D6\u6D881"
        }, {
          color: "#009900",
          text: "\u786E\u5B9A2"
        }])),
        f: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u6309\u626D\u989C\u8272\u63D0\u793A"
        }),
        g: common_vendor.o(($event) => common_vendor.unref($uni).alert("\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01", ["\u5173\u4E86\u5427\uFF01"])),
        h: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u81EA\u5B9A\u5355\u6309\u626D\u63D0\u793A"
        }),
        i: common_vendor.o(($event) => common_vendor.unref($uni).alert("\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF01", ["\u53D6\u6D881", "\u786E\u5B9A2"])),
        j: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u81EA\u5B9A\u53CC\u6309\u626D\u63D0\u793A"
        }),
        k: common_vendor.o(alert1),
        l: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u5E26\u56DE\u8C03\u7684\u53C8\u63D0\u793A"
        }),
        m: common_vendor.p({
          title: "\u793A\u4F8B\u4EE3\u7801",
          hide: true,
          code: alertCode
        }),
        n: common_vendor.p({
          title: "Alert \u5F39\u7A97",
          ["content-class"]: "q-gutter-sm"
        }),
        o: common_vendor.o(($event) => common_vendor.unref($uni).toast("\u6B63\u786E\u63D0\u793A")),
        p: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u6B63\u786E\u63D0\u793A"
        }),
        q: common_vendor.o(($event) => common_vendor.unref($uni).toast("\u5E26\u906E\u7F69\u5C42", true)),
        r: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u5E26\u906E\u7F69\u5C42"
        }),
        s: common_vendor.o(($event) => common_vendor.unref($uni).toast("\u7EAF\u6587\u672C\u63D0\u793A", "none")),
        t: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u7EAF\u6587\u672C\u63D0\u793A"
        }),
        v: common_vendor.o(($event) => common_vendor.unref($uni).toast("\u9519\u8BEF\u4FE1\u606F", "error")),
        w: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u7B80\u5355\u63D0\u793A"
        }),
        x: common_vendor.o(toast1),
        y: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u5E26\u56DE\u8C03\u63D0\u793A"
        }),
        z: common_vendor.o(($event) => common_vendor.unref($uni).toast("\u590D\u6742\u53C2\u6570", {
          duration: 2e3,
          mask: true,
          icon: "error"
        })),
        A: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u590D\u6742\u53C2\u6570"
        }),
        B: common_vendor.p({
          title: "\u793A\u4F8B\u4EE3\u7801",
          hide: true,
          code: toastCode
        }),
        C: common_vendor.p({
          title: "Toast \u63D0\u793A",
          ["content-class"]: "q-gutter-sm"
        }),
        D: common_vendor.o(actions1),
        E: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u7B80\u5355\u6570\u7EC4"
        }),
        F: common_vendor.o(actions2),
        G: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u6807\u51C6\u6570\u7EC4"
        }),
        H: common_vendor.o(actions3),
        I: common_vendor.p({
          ["no-caps"]: true,
          color: "primary",
          label: "\u590D\u6742\u6570\u7EC4"
        }),
        J: common_vendor.t(actionRes.value),
        K: common_vendor.p({
          title: "\u793A\u4F8B\u4EE3\u7801",
          hide: true,
          code: actionCode
        }),
        L: common_vendor.p({
          title: "ActionSheet",
          ["content-class"]: "q-gutter-sm"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/pages/plugins/uniapp.vue"]]);
wx.createPage(MiniProgramPage);
