"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    const popDft = {
      position: "standard",
      maximized: false,
      fullWidth: false,
      fullHeight: false,
      persistent: false,
      autoClose: false,
      transition: []
    };
    const box = popDft;
    return {
      popDft,
      box,
      show: false,
      showAni: false,
      anim: {},
      anic: ""
    };
  },
  methods: {
    showDlg(pos) {
      this.show = true;
      this.box = Object.assign({}, this.box, pos);
    },
    onShow(evt) {
      console.log("onShow", evt);
    },
    onHide(evt) {
      this.box = this.popDft;
      console.log("onHide", evt);
    }
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _easycom_q_card_section2 = common_vendor.resolveComponent("q-card-section");
  const _easycom_q_card2 = common_vendor.resolveComponent("q-card");
  const _easycom_q_dialog2 = common_vendor.resolveComponent("q-dialog");
  (_easycom_q_btn2 + _component_Lanmu + _easycom_q_separator2 + _easycom_q_card_section2 + _easycom_q_card2 + _easycom_q_dialog2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_card_section = () => "../../uni_modules/kv-qui/components/q-card-section/q-card-section.js";
const _easycom_q_card = () => "../../uni_modules/kv-qui/components/q-card/q-card.js";
const _easycom_q_dialog = () => "../../uni_modules/kv-qui/components/q-dialog/q-dialog.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_separator + _easycom_q_card_section + _easycom_q_card + _easycom_q_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDlg({
      position: "standard"
    })),
    b: common_vendor.p({
      color: "primary",
      label: "standard"
    }),
    c: common_vendor.o(($event) => $options.showDlg({
      position: "top"
    })),
    d: common_vendor.p({
      color: "primary",
      label: "Top"
    }),
    e: common_vendor.o(($event) => $options.showDlg({
      position: "left"
    })),
    f: common_vendor.p({
      color: "primary",
      label: "left"
    }),
    g: common_vendor.o(($event) => $options.showDlg({
      position: "right"
    })),
    h: common_vendor.p({
      color: "primary",
      label: "right"
    }),
    i: common_vendor.o(($event) => $options.showDlg({
      position: "bottom"
    })),
    j: common_vendor.p({
      color: "primary",
      label: "bottom"
    }),
    k: common_vendor.p({
      title: "\u4F4D\u7F6E",
      ["content-class"]: "row q-gutter-sm"
    }),
    l: common_vendor.o(($event) => $options.showDlg({
      autoClose: true
    })),
    m: common_vendor.p({
      color: "primary",
      label: "auto-Close"
    }),
    n: common_vendor.o(($event) => $options.showDlg({
      persistent: true
    })),
    o: common_vendor.p({
      color: "primary",
      label: "persistent"
    }),
    p: common_vendor.o(($event) => $options.showDlg({
      transition: ["flip-in", "flip-out"]
    })),
    q: common_vendor.p({
      color: "primary",
      label: "flip"
    }),
    r: common_vendor.o(($event) => $options.showDlg({
      transition: ["rotate-in", "rotate-out"]
    })),
    s: common_vendor.p({
      color: "primary",
      label: "rotate"
    }),
    t: common_vendor.o(($event) => $options.showDlg({
      transition: ["slide-in-up", "slide-out-up"]
    })),
    v: common_vendor.p({
      color: "primary",
      label: "slide-up"
    }),
    w: common_vendor.o(($event) => $options.showDlg({
      transition: ["slide-in-down", "slide-out-down"]
    })),
    x: common_vendor.p({
      color: "primary",
      label: "slide-down"
    }),
    y: common_vendor.o(($event) => $options.showDlg({
      transition: ["slide-in-left", "slide-out-left"]
    })),
    z: common_vendor.p({
      color: "primary",
      label: "slide-left"
    }),
    A: common_vendor.o(($event) => $options.showDlg({
      transition: ["slide-in-right", "slide-out-right"]
    })),
    B: common_vendor.p({
      color: "primary",
      label: "slide-right"
    }),
    C: common_vendor.p({
      spaced: true
    }),
    D: common_vendor.o(($event) => _ctx.$refs.dialog.show()),
    E: common_vendor.p({
      color: "primary",
      label: "show\u65B9\u6CD5"
    }),
    F: common_vendor.p({
      title: "\u6548\u679C"
    }),
    G: common_vendor.o(($event) => $options.showDlg({
      maximized: !$data.box.maximized
    })),
    H: common_vendor.p({
      flat: true,
      dense: true,
      icon: $data.box.maximized ? "fullscreen_exit" : "fullscreen"
    }),
    I: common_vendor.o(_ctx.$q.closePopup),
    J: common_vendor.p({
      flat: true,
      dense: true,
      icon: "close"
    }),
    K: common_vendor.p({
      className: "row items-center"
    }),
    L: common_vendor.f($data.box, (vo, key, i0) => {
      return {
        a: common_vendor.t(key),
        b: common_vendor.t(vo),
        c: common_vendor.n("text-" + (typeof vo == "boolean" ? vo ? "green-7" : "red" : "blue")),
        d: key
      };
    }),
    M: common_vendor.o(($event) => Object.assign($data.box, {
      fullWidth: !$data.box.fullWidth
    })),
    N: common_vendor.p({
      color: "primary",
      label: "full-width"
    }),
    O: common_vendor.o(($event) => Object.assign($data.box, {
      fullHeight: !$data.box.fullHeight
    })),
    P: common_vendor.p({
      color: "primary",
      label: "full-height"
    }),
    Q: common_vendor.sr("dialog", "58b179c6-17"),
    R: common_vendor.o($options.onShow),
    S: common_vendor.o($options.onHide),
    T: common_vendor.o(($event) => $data.show = $event),
    U: common_vendor.p({
      persistent: $data.box.persistent,
      position: $data.box.position,
      maximized: $data.box.maximized,
      ["full-width"]: $data.box.fullWidth,
      ["full-height"]: $data.box.fullHeight,
      ["auto-close"]: $data.box.autoClose,
      ["transition-show"]: $data.box.transition[0],
      ["transition-hide"]: $data.box.transition[1],
      modelValue: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/dialog.vue"]]);
wx.createPage(MiniProgramPage);
