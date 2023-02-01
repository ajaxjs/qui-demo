"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_checkbox2 = common_vendor.resolveComponent("q-checkbox");
  const _easycom_q_link2 = common_vendor.resolveComponent("q-link");
  const _easycom_q_header2 = common_vendor.resolveComponent("q-header");
  const _easycom_q_tab2 = common_vendor.resolveComponent("q-tab");
  const _easycom_q_tabs2 = common_vendor.resolveComponent("q-tabs");
  const _easycom_q_footer2 = common_vendor.resolveComponent("q-footer");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  const _easycom_q_drawer2 = common_vendor.resolveComponent("q-drawer");
  (_easycom_q_btn2 + _easycom_q_checkbox2 + _easycom_q_link2 + _easycom_q_header2 + _easycom_q_tab2 + _easycom_q_tabs2 + _easycom_q_footer2 + _easycom_q_page2 + _easycom_q_drawer2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_checkbox = () => "../../uni_modules/kv-qui/components/q-checkbox/q-checkbox.js";
const _easycom_q_link = () => "../../uni_modules/kv-qui/components/q-link/q-link.js";
const _easycom_q_header = () => "../../uni_modules/kv-qui/components/q-header/q-header.js";
const _easycom_q_tab = () => "../../uni_modules/kv-qui/components/q-tab/q-tab.js";
const _easycom_q_tabs = () => "../../uni_modules/kv-qui/components/q-tabs/q-tabs.js";
const _easycom_q_footer = () => "../../uni_modules/kv-qui/components/q-footer/q-footer.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
const _easycom_q_drawer = () => "../../uni_modules/kv-qui/components/q-drawer/q-drawer.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_checkbox + _easycom_q_link + _easycom_q_header + _easycom_q_tab + _easycom_q_tabs + _easycom_q_footer + _easycom_q_page + _easycom_q_drawer)();
}
const _sfc_main = {
  __name: "layout",
  setup(__props) {
    const tab = common_vendor.ref("mails");
    const isPush = common_vendor.ref(true);
    const showLeftSide = common_vendor.ref(false);
    const showRightSide = common_vendor.ref(false);
    const isOverlay = common_vendor.ref(false);
    const isPersistent = common_vendor.ref(false);
    const pushSide = common_vendor.computed$1(() => isPush.value ? showLeftSide.value ? "left" : showRightSide.value ? "right" : "" : "");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => showLeftSide.value = !showLeftSide.value),
        b: common_vendor.p({
          icon: "east",
          label: `\u663E\u793A\u5DE6\u4FA7\u680F${showLeftSide.value}`,
          color: "primary"
        }),
        c: common_vendor.o(($event) => showRightSide.value = !showRightSide.value),
        d: common_vendor.p({
          icon: "west",
          label: `\u663E\u793A\u53F3\u4FA7\u680F${showRightSide.value}`,
          color: "primary"
        }),
        e: common_vendor.o(($event) => isOverlay.value = $event),
        f: common_vendor.p({
          label: `\u662F\u5426\u4E3Aoverlay\uFF08\u5373\u65E0\u906E\u7F69\uFF09-${isOverlay.value}`,
          modelValue: isOverlay.value
        }),
        g: common_vendor.o(($event) => isPersistent.value = $event),
        h: common_vendor.p({
          label: `\u662F\u5426\u4E3Apersistent-\uFF08\u70B9\u906E\u7F69\u4E0D\u5173\u95ED\uFF09-${isPersistent.value}`,
          modelValue: isPersistent.value
        }),
        i: common_vendor.o(($event) => isPush.value = $event),
        j: common_vendor.p({
          label: `\u4FA7\u680F\u6253\u5F00\u9875\u9762\u662F\u5426\u4E3Apush - ${isPush.value ? true : false}`,
          modelValue: isPush.value
        }),
        k: common_vendor.t(tab.value),
        l: common_vendor.p({
          to: "/pages/layout/layout2"
        }),
        m: common_vendor.o(($event) => showLeftSide.value = !showLeftSide.value),
        n: common_vendor.p({
          flat: true,
          icon: "menu"
        }),
        o: common_vendor.o(($event) => showRightSide.value = !showRightSide.value),
        p: common_vendor.p({
          flat: true,
          icon: "menu"
        }),
        q: common_vendor.p({
          bordered: true
        }),
        r: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        s: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        t: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        v: common_vendor.o(($event) => tab.value = $event),
        w: common_vendor.p({
          ["narrow-indicator"]: true,
          dense: true,
          className: "text-teal col",
          align: "justify",
          modelValue: tab.value
        }),
        x: common_vendor.p({
          className: "bg-teal-1"
        }),
        y: common_vendor.p({
          push: common_vendor.unref(pushSide)
        }),
        z: common_vendor.o(($event) => showLeftSide.value = $event),
        A: common_vendor.p({
          elevated: true,
          overlay: isOverlay.value,
          persistent: isPersistent.value,
          modelValue: showLeftSide.value
        }),
        B: common_vendor.o(($event) => showRightSide.value = $event),
        C: common_vendor.p({
          elevated: true,
          overlay: isOverlay.value,
          persistent: isPersistent.value,
          side: "right",
          modelValue: showRightSide.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/pages/layout/layout.vue"]]);
wx.createPage(MiniProgramPage);
