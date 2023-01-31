"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_q_tab2 = common_vendor.resolveComponent("q-tab");
  const _easycom_q_tabs2 = common_vendor.resolveComponent("q-tabs");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_badge2 = common_vendor.resolveComponent("q-badge");
  (_easycom_q_tab2 + _easycom_q_tabs2 + _component_Lanmu + _easycom_q_badge2)();
}
const _easycom_q_tab = () => "../../uni_modules/kv-qui/components/q-tab/q-tab.js";
const _easycom_q_tabs = () => "../../uni_modules/kv-qui/components/q-tabs/q-tabs.js";
const _easycom_q_badge = () => "../../uni_modules/kv-qui/components/q-badge/q-badge.js";
if (!Math) {
  (_easycom_q_tab + _easycom_q_tabs + _easycom_q_badge)();
}
const _sfc_main = {
  __name: "tabs",
  setup(__props) {
    const tab = common_vendor.ref("mails");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(tab.value),
        b: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        c: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        d: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        e: common_vendor.o(($event) => tab.value = $event),
        f: common_vendor.p({
          ["narrow-indicator"]: true,
          modelValue: tab.value
        }),
        g: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        h: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        i: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        j: common_vendor.o(($event) => tab.value = $event),
        k: common_vendor.p({
          className: "bg-green-2",
          align: "justify",
          modelValue: tab.value
        }),
        l: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        m: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        n: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        o: common_vendor.o(($event) => tab.value = $event),
        p: common_vendor.p({
          ["inline-label"]: true,
          className: "bg-purple text-white shadow-2",
          modelValue: tab.value
        }),
        q: common_vendor.p({
          name: "mails",
          icon: "mail"
        }),
        r: common_vendor.p({
          name: "alarms",
          icon: "alarm"
        }),
        s: common_vendor.p({
          name: "movies",
          icon: "movie"
        }),
        t: common_vendor.o(($event) => tab.value = $event),
        v: common_vendor.p({
          className: "bg-teal text-yellow shadow-2",
          modelValue: tab.value
        }),
        w: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        x: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        y: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        z: common_vendor.p({
          name: "photos",
          icon: "photo",
          label: "Photos"
        }),
        A: common_vendor.p({
          name: "videos",
          icon: "slow_motion_video",
          label: "Videos"
        }),
        B: common_vendor.p({
          name: "addressbook",
          icon: "people",
          label: "Address Book"
        }),
        C: common_vendor.o(($event) => tab.value = $event),
        D: common_vendor.p({
          ["inline-label"]: true,
          className: "bg-primary text-white shadow-2",
          align: "left",
          modelValue: tab.value
        }),
        E: common_vendor.p({
          title: "Tabs"
        }),
        F: common_vendor.p({
          name: "mails",
          icon: "mail"
        }),
        G: common_vendor.p({
          name: "alarms",
          icon: "alarm"
        }),
        H: common_vendor.p({
          name: "movies",
          icon: "movie"
        }),
        I: common_vendor.o(($event) => tab.value = $event),
        J: common_vendor.p({
          ["indicator-color"]: "purple",
          className: "text-teal",
          modelValue: tab.value
        }),
        K: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        L: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        M: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        N: common_vendor.o(($event) => tab.value = $event),
        O: common_vendor.p({
          dense: true,
          ["no-caps"]: true,
          ["inline-label"]: true,
          className: "bg-purple text-white shadow-2",
          modelValue: tab.value
        }),
        P: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        Q: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        R: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        S: common_vendor.o(($event) => tab.value = $event),
        T: common_vendor.p({
          dense: true,
          className: "bg-purple text-white shadow-2",
          modelValue: tab.value
        }),
        U: common_vendor.p({
          color: "red",
          floating: true
        }),
        V: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        W: common_vendor.p({
          color: "red",
          floating: true
        }),
        X: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        Y: common_vendor.p({
          alert: true,
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        Z: common_vendor.p({
          alert: "yellow",
          ["alert-icon"]: "warning",
          name: "photo",
          icon: "photo",
          label: "photo"
        }),
        aa: common_vendor.o(($event) => tab.value = $event),
        ab: common_vendor.p({
          className: "bg-primary text-white shadow-2",
          modelValue: tab.value
        }),
        ac: common_vendor.p({
          title: "\u5176\u5B83\u6837\u5F0F"
        }),
        ad: common_vendor.p({
          name: "mails",
          icon: "mail"
        }),
        ae: common_vendor.p({
          name: "alarms",
          icon: "alarm"
        }),
        af: common_vendor.o(($event) => tab.value = $event),
        ag: common_vendor.p({
          dense: true,
          align: "left",
          className: "bg-primary text-white shadow-2",
          breakpoint: 0,
          modelValue: tab.value
        }),
        ah: common_vendor.p({
          name: "mails",
          icon: "mail"
        }),
        ai: common_vendor.p({
          name: "alarms",
          icon: "alarm"
        }),
        aj: common_vendor.o(($event) => tab.value = $event),
        ak: common_vendor.p({
          dense: true,
          align: "center",
          className: "bg-primary text-white shadow-2",
          breakpoint: 0,
          modelValue: tab.value
        }),
        al: common_vendor.p({
          name: "mails",
          icon: "mail"
        }),
        am: common_vendor.p({
          name: "alarms",
          icon: "alarm"
        }),
        an: common_vendor.o(($event) => tab.value = $event),
        ao: common_vendor.p({
          dense: true,
          align: "right",
          className: "bg-primary text-white shadow-2",
          breakpoint: 0,
          modelValue: tab.value
        }),
        ap: common_vendor.p({
          name: "mails",
          icon: "mail"
        }),
        aq: common_vendor.p({
          name: "alarms",
          icon: "alarm"
        }),
        ar: common_vendor.o(($event) => tab.value = $event),
        as: common_vendor.p({
          dense: true,
          align: "justify",
          className: "bg-primary text-white shadow-2",
          breakpoint: 0,
          modelValue: tab.value
        }),
        at: common_vendor.p({
          title: "Alignmeng"
        }),
        av: common_vendor.p({
          name: "mails",
          icon: "mail",
          label: "Mails"
        }),
        aw: common_vendor.p({
          name: "alarms",
          icon: "alarm",
          label: "Alarms"
        }),
        ax: common_vendor.p({
          name: "movies",
          icon: "movie",
          label: "Movies"
        }),
        ay: common_vendor.o(($event) => tab.value = $event),
        az: common_vendor.p({
          vertical: true,
          ["indicator-color"]: "yellow",
          className: "bg-purple text-white shadow-2 col-4",
          modelValue: tab.value
        }),
        aA: common_vendor.t(tab.value),
        aB: common_vendor.p({
          title: "Vertical"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/pages/components/tabs.vue"]]);
wx.createPage(MiniProgramPage);
