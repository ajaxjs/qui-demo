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
            name: "Date & Picker",
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
        ],
        "Plugins": [
          {
            name: "UniAPP\u5C01\u88C5",
            path: "/pages/plugins/uniapp"
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
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  const _easycom_q_drawer2 = common_vendor.resolveComponent("q-drawer");
  (_component_Lanmu + _easycom_q_page2 + _easycom_q_drawer2)();
}
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
const _easycom_q_drawer = () => "../../uni_modules/kv-qui/components/q-drawer/q-drawer.js";
if (!Math) {
  (_easycom_q_page + _easycom_q_drawer)();
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
    b: common_vendor.p({
      push: $data.showSide ? "left" : ""
    }),
    c: common_vendor.o(($event) => $data.showSide = $event),
    d: common_vendor.p({
      modelValue: $data.showSide
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
