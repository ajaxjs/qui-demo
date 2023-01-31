"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useRatio = require("../../composables/private/use-ratio.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const QSpinner = () => "../q-spinner/q-spinner.js";
const defaultRatio = 16 / 9;
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QImg",
  components: {
    QSpinner
  },
  props: {
    ...uni_modules_kvQui_composables_private_useRatio.useRatioProps,
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    src: String,
    alt: String,
    crossorigin: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    fit: Boolean,
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String,
    mode: {
      type: String,
      default: "scaleToFill"
    },
    error: String
  },
  emits: ["load", "error"],
  setup(props, { emit, attrs }) {
    const imgSrc = common_vendor.ref(props.src);
    let naturalRatio = common_vendor.ref(props.initialRatio);
    const ratioStyle = uni_modules_kvQui_composables_private_useRatio.useRatio(props, naturalRatio);
    const images = common_vendor.computed$1(() => [
      props.src,
      props.placeholderSrc
    ]);
    const isLoaded = common_vendor.ref(false);
    const isLoading = common_vendor.ref(true);
    const hasError = common_vendor.ref(false);
    const fmtPx = (sz) => sz && /^\d+$/.test(sz.trim()) ? sz.trim() + "px" : sz;
    const classes = common_vendor.computed$1(() => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`);
    const defaultStyle = common_vendor.computed$1(() => {
      const size = { width: fmtPx(props.width), height: fmtPx(props.height) };
      Object.keys(size).forEach((key) => size[key] == void 0 && delete size[key]);
      return size;
    });
    const imgClass = common_vendor.computed$1(
      () => [
        "q-img__image",
        props.imgClass,
        `q-img__image--with${props.noTransition === true ? "out" : ""}-transition`,
        isLoaded.value ? "q-img__image--loaded" : null,
        props.fit ? "fit" : null
      ]
    );
    const imgStyle = common_vendor.computed$1(() => ({
      ...props.imgStyle,
      objectPosition: props.position
    }));
    common_vendor.watch(() => props.src, (src) => {
      imgSrc.value = src;
      isLoading.value = true;
      isLoaded.value = false;
      hasError.value = false;
    });
    const onLoad = (evt) => {
      const { width, height } = evt.detail;
      naturalRatio.value = height == 0 ? 0.5 : width / height;
      isLoaded.value = true;
      isLoading.value = false;
      hasError.value = false;
      emit("load", evt);
    };
    const onError = (err) => {
      imgSrc.value = props.error;
      isLoaded.value = false;
      isLoading.value = false;
      hasError.value = true;
      emit("error", err);
      console.log("onError", err);
    };
    return {
      imgSrc,
      onLoad,
      onError,
      isLoaded,
      isLoading,
      hasError,
      classes,
      defaultStyle,
      ratioStyle,
      imgClass,
      imgStyle,
      images
    };
  }
});
if (!Array) {
  const _easycom_q_spinner2 = common_vendor.resolveComponent("q-spinner");
  _easycom_q_spinner2();
}
const _easycom_q_spinner = () => "../q-spinner/q-spinner.js";
if (!Math) {
  _easycom_q_spinner();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !_ctx.fit
  }, !_ctx.fit ? {
    b: common_vendor.s(_ctx.ratioStyle)
  } : {}, {
    c: _ctx.isLoading
  }, _ctx.isLoading ? common_vendor.e({
    d: _ctx.$slots.loading
  }, _ctx.$slots.loading ? {} : {}, {
    e: _ctx.noSpinner !== true
  }, _ctx.noSpinner !== true ? {
    f: common_vendor.p({
      size: _ctx.spinnerSize,
      color: _ctx.spinnerColor
    })
  } : {}, {
    g: _ctx.loading
  }) : {}, {
    h: _ctx.imgSrc,
    i: common_vendor.n(_ctx.imgClass),
    j: common_vendor.s(_ctx.imgStyle),
    k: _ctx.crossorigin,
    l: _ctx.draggable,
    m: _ctx.mode,
    n: common_vendor.o((...args) => _ctx.onLoad && _ctx.onLoad(...args)),
    o: common_vendor.o((...args) => _ctx.onError && _ctx.onError(...args)),
    p: _ctx.hasError
  }, _ctx.hasError ? {} : {}, {
    q: common_vendor.n(_ctx.classes),
    r: common_vendor.n(_ctx.className),
    s: common_vendor.s(_ctx.defaultStyle),
    t: common_vendor.s(_ctx.styles),
    v: _ctx.alt
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-img/q-img.vue"]]);
wx.createComponent(Component);
