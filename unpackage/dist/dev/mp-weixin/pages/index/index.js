"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      showSide: false,
      test: false,
      showAni: false,
      showDlg: false,
      navList: {
        "Flex Grid": [
          {
            name: "Grid Row",
            path: "/pages/layout/grid_row"
          },
          {
            name: "Grid Gutter",
            path: "/pages/layout/gutter"
          },
          {
            name: "Layout",
            path: "/pages/layout/layout"
          }
        ],
        "Vue Components": [
          {
            name: "Avatar",
            path: "/pages/components/avatar"
          },
          {
            name: "Icon",
            path: "/pages/components/icon"
          },
          {
            name: "Image",
            path: "/pages/components/img"
          },
          {
            name: "Button",
            path: "/pages/components/btn"
          },
          {
            name: "Badge",
            path: "/pages/components/badge"
          },
          {
            name: "Card",
            path: "/pages/components/card"
          },
          {
            name: "List&Item",
            path: "/pages/components/item"
          },
          {
            name: "Links",
            path: "/pages/components/link"
          },
          {
            name: "linear-progress",
            path: "/pages/components/linear_progress"
          },
          {
            name: "Input & Field",
            path: "/pages/components/input"
          },
          {
            name: "Form",
            path: "/pages/components/form"
          },
          {
            name: "Checkbox & Radio",
            path: "/pages/components/checkbox"
          },
          {
            name: "Dialog",
            path: "/pages/components/dialog"
          },
          {
            name: "Date Picker",
            path: "/pages/components/date_picker"
          },
          {
            name: "Tabs",
            path: "/pages/components/tabs"
          },
          {
            name: "Swiper",
            path: "/pages/components/swiper"
          }
        ]
      },
      show: false
    };
  },
  onLoad() {
  },
  methods: {
    onClick(evt) {
      this.$refs.menu.toggle();
      this.show = !this.show;
    },
    closeEvent(evt) {
      common_vendor.index.$emit("close-popup");
      evt.preventDefault();
      evt.stopPropagation();
    }
  }
};
if (!Array) {
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_footer2 = common_vendor.resolveComponent("q-footer");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  const _easycom_q_card_section2 = common_vendor.resolveComponent("q-card-section");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _easycom_q_card2 = common_vendor.resolveComponent("q-card");
  const _easycom_q_dialog2 = common_vendor.resolveComponent("q-dialog");
  const _easycom_q_drawer2 = common_vendor.resolveComponent("q-drawer");
  (_component_Lanmu + _easycom_q_btn2 + _easycom_q_footer2 + _easycom_q_page2 + _easycom_q_card_section2 + _easycom_q_separator2 + _easycom_q_card2 + _easycom_q_dialog2 + _easycom_q_drawer2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_footer = () => "../../uni_modules/kv-qui/components/q-footer/q-footer.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
const _easycom_q_card_section = () => "../../uni_modules/kv-qui/components/q-card-section/q-card-section.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_card = () => "../../uni_modules/kv-qui/components/q-card/q-card.js";
const _easycom_q_dialog = () => "../../uni_modules/kv-qui/components/q-dialog/q-dialog.js";
const _easycom_q_drawer = () => "../../uni_modules/kv-qui/components/q-drawer/q-drawer.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_footer + _easycom_q_page + _easycom_q_card_section + _easycom_q_separator + _easycom_q_card + _easycom_q_dialog + _easycom_q_drawer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.navList, (nav, name, i0) => {
      return {
        a: common_vendor.f(nav, (vo, i, i1) => {
          return {
            a: common_vendor.t(vo.name),
            b: vo.path,
            c: i
          };
        }),
        b: name,
        c: "2c324f11-1-" + i0 + ",2c324f11-0",
        d: common_vendor.p({
          title: name
        })
      };
    }),
    b: common_vendor.o(($event) => $data.test = !$data.test),
    c: common_vendor.p({
      color: "green"
    }),
    d: common_vendor.t($data.showSide),
    e: common_vendor.o(($event) => $data.showSide = !$data.showSide),
    f: common_vendor.p({
      color: "green"
    }),
    g: common_vendor.o(($event) => $data.showDlg = true),
    h: common_vendor.p({
      color: "green"
    }),
    i: common_vendor.f(100, (n, k0, i0) => {
      return {
        a: common_vendor.t(n),
        b: n
      };
    }),
    j: $data.test,
    k: common_vendor.p({
      elevated: true,
      className: "bg-blue-2"
    }),
    l: common_vendor.p({
      push: $data.showSide ? "left" : ""
    }),
    m: common_vendor.o(_ctx.$q.closePopup),
    n: common_vendor.p({
      dense: true,
      flat: true,
      icon: "close"
    }),
    o: common_vendor.p({
      className: "row items-center"
    }),
    p: common_vendor.f(5, (i, k0, i0) => {
      return {
        a: common_vendor.t(i),
        b: i
      };
    }),
    q: common_vendor.o(($event) => $data.showDlg = $event),
    r: common_vendor.p({
      position: "bottom",
      modelValue: $data.showDlg
    }),
    s: common_vendor.o(($event) => $data.showSide = $event),
    t: common_vendor.p({
      modelValue: $data.showSide
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
