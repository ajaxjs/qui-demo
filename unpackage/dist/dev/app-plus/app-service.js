if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const useSizeDefaults = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46
  };
  const useSizeProps = {
    size: String
  };
  function useSize(props, sizes = useSizeDefaults) {
    return vue.computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
  }
  const useAttrProps = {
    className: [String, Array, Object],
    styles: [String, Object]
  };
  const createComponent = (raw) => vue.markRaw(vue.defineComponent(raw));
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const defaultViewBox = "0 0 24 24";
  const sameFn = (i) => i;
  const ionFn = (i) => `ionicons ${i}`;
  const libMap = {
    "mdi-": (i) => `mdi ${i}`,
    "icon-": sameFn,
    "bt-": (i) => `bt ${i}`,
    "eva-": (i) => `eva ${i}`,
    "ion-md": ionFn,
    "ion-ios": ionFn,
    "ion-logo": ionFn,
    "iconfont ": sameFn,
    "ti-": (i) => `themify-icon ${i}`,
    "bi-": (i) => `bootstrap-icons ${i}`
  };
  const matMap = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp"
  };
  const symMap = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp"
  };
  const libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
  const matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
  const symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
  const mRE = /^[Mm]\s?[-+]?\.?\d/;
  const imgRE = /^img:/;
  const svgUseRE = /^svguse:/;
  const ionRE = /^ion-/;
  const faRE = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
  const _sfc_main$T = createComponent({
    name: "QIcon",
    props: {
      ...useSizeProps,
      ...useAttrProps,
      tag: {
        type: String,
        default: "i"
      },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean
    },
    setup(props) {
      const { proxy: { $q } } = vue.getCurrentInstance();
      const sizeStyle = useSize(props);
      const classes = vue.computed(
        () => "q-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : "")
      );
      const type = vue.computed(() => {
        let cls;
        let icon = props.name;
        if (icon === "none" || !icon) {
          return { none: true };
        }
        if ($q.iconMapFn !== null) {
          const res = $q.iconMapFn(icon);
          if (res !== void 0) {
            if (res.icon !== void 0) {
              icon = res.icon;
              if (icon === "none" || !icon) {
                return { none: true };
              }
            } else {
              return {
                cls: res.cls,
                content: res.content !== void 0 ? res.content : " "
              };
            }
          }
        }
        if (mRE.test(icon) === true) {
          const [def, viewBox = defaultViewBox] = icon.split("|");
          return {
            svg: true,
            viewBox,
            nodes: def.split("&&").map((path) => {
              const [d, style, transform] = path.split("@@");
              return h("path", { style, d, transform });
            })
          };
        }
        if (imgRE.test(icon) === true) {
          return {
            img: true,
            src: icon.substring(4)
          };
        }
        if (svgUseRE.test(icon) === true) {
          const [def, viewBox = defaultViewBox] = icon.split("|");
          return {
            svguse: true,
            src: def.substring(7),
            viewBox
          };
        }
        let content = " ";
        const matches = icon.match(libRE);
        if (matches !== null) {
          cls = libMap[matches[1]](icon);
        } else if (faRE.test(icon) === true) {
          cls = icon;
        } else if (ionRE.test(icon) === true) {
          cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
        } else if (symRE.test(icon) === true) {
          cls = "notranslate material-symbols";
          const matches2 = icon.match(symRE);
          if (matches2 !== null) {
            icon = icon.substring(6);
            cls += symMap[matches2[1]];
          }
          content = icon;
        } else {
          cls = "notranslate material-icons";
          const matches2 = icon.match(matRE);
          if (matches2 !== null) {
            icon = icon.substring(2);
            cls += matMap[matches2[1]];
          }
          content = icon;
        }
        return {
          cls,
          content
        };
      });
      return {
        type,
        classes,
        sizeStyle
      };
    }
  });
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([_ctx.classes, _ctx.className]),
      style: vue.normalizeStyle([_ctx.sizeStyle, _ctx.styles]),
      "aria-hidden": true,
      role: "presentation"
    }, [
      _ctx.type.img ? (vue.openBlock(), vue.createElementBlock("img", {
        key: 0,
        src: _ctx.type.src
      }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: vue.normalizeClass(_ctx.type.cls)
      }, vue.toDisplayString(_ctx.type.content || ""), 3)),
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$Q], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-icon/q-icon.vue"]]);
  const useSpinnerProps = {
    size: {
      type: [Number, String],
      default: "1em"
    },
    color: String
  };
  function useSpinner(props) {
    const cSize = vue.computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size);
    return {
      cSize,
      classes: vue.computed(() => "q-spinner" + (props.color ? ` text-${props.color}` : ""))
    };
  }
  const _sfc_main$S = {
    name: "QSpinner",
    props: {
      ...useSpinnerProps,
      thickness: {
        type: Number,
        default: 3
      }
    },
    setup(props) {
      const { cSize, classes } = useSpinner(props);
      return {
        cSize,
        classes
      };
    }
  };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["q-spinner-mat", $setup.classes]),
      style: vue.normalizeStyle({ width: $setup.cSize, height: $setup.cSize })
    }, [
      vue.createElementVNode("view", {
        class: "path",
        style: vue.normalizeStyle({ borderWidth: $props.thickness })
      }, null, 4)
    ], 6);
  }
  const __easycom_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$P], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-spinner/q-spinner.vue"]]);
  const _sfc_main$R = {
    name: "QRipple",
    data() {
      return {
        page: null,
        rips: {}
      };
    },
    methods: {
      buildStyle(evt) {
        const { offsetTop, offsetLeft } = evt.target;
        const { pageX, pageY } = evt.touches[0];
        return {
          left: pageX - offsetLeft + "px",
          top: pageY - offsetTop + "px"
        };
      },
      ripple(evt) {
        const ti = Math.ceil(evt.timeStamp);
        this.rips[ti] = this.buildStyle(evt);
        setTimeout(() => {
          this.rips[ti] = Object.assign({}, this.rips[ti], { left: "-50%", top: "-50%", width: "200%", height: "200%" });
          setTimeout(() => {
            this.rips[ti] = Object.assign({}, this.rips[ti], { opacity: 0 });
          }, 300);
          setTimeout(() => {
            delete this.rips[ti];
          }, 600);
        }, 15);
      }
    }
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "rip",
      class: "q-ripple"
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.rips, (vo, i) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: i,
          class: "q-ripple__inner",
          style: vue.normalizeStyle(vo)
        }, null, 4);
      }), 128))
    ], 512);
  }
  const __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$O], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-ripple/q-ripple.vue"]]);
  const listenOpts = {
    hasPassive: false,
    passiveCapture: true,
    notPassiveCapture: true
  };
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        Object.assign(listenOpts, {
          hasPassive: true,
          passive: { passive: true },
          notPassive: { passive: false },
          passiveCapture: { passive: true, capture: true },
          notPassiveCapture: { passive: false, capture: true }
        });
      }
    });
    window.addEventListener("qtest", null, opts);
    window.removeEventListener("qtest", null, opts);
  } catch (e) {
  }
  function prevent(e) {
    e.cancelable !== false && e.preventDefault();
  }
  function stopAndPrevent(e) {
    e.cancelable !== false && e.preventDefault();
    e.stopPropagation();
  }
  const alignMap = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch"
  };
  const alignValues$2 = Object.keys(alignMap);
  const useAlignProps = {
    align: {
      type: String,
      validator: (v) => alignValues$2.includes(v)
    }
  };
  function useAlign(props) {
    return vue.computed(() => {
      const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
      return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
    });
  }
  function vmHasRouter(vm) {
    return vm.appContext.config.globalProperties.$router !== void 0;
  }
  function vmIsDestroyed(vm) {
    return vm.isUnmounted === true || vm.isDeactivated === true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key], outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue) {
          return false;
        }
      } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) {
        return false;
      }
    }
    return true;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (const key in a) {
      if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
        return false;
      }
    }
    return true;
  }
  const useRouterLinkProps = {
    to: [String, Object],
    replace: Boolean,
    exact: Boolean,
    activeClass: {
      type: String,
      default: "q-router-link--active"
    },
    exactActiveClass: {
      type: String,
      default: "q-router-link--exact-active"
    },
    href: String,
    target: String,
    disable: Boolean
  };
  function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
    const vm = vue.getCurrentInstance();
    const { props, proxy, emit } = vm;
    const hasRouter = vmHasRouter(vm);
    const hasHrefLink = vue.computed(() => props.disable !== true && props.href !== void 0);
    const hasRouterLinkProps = useDisableForRouterLinkProps === true ? vue.computed(
      () => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
    ) : vue.computed(
      () => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
    );
    const resolvedLink = vue.computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
    const hasRouterLink = vue.computed(() => resolvedLink.value !== null);
    const hasLink = vue.computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
    const linkTag = vue.computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
    const linkAttrs = vue.computed(() => hasHrefLink.value === true ? {
      href: props.href,
      target: props.target
    } : hasRouterLink.value === true ? {
      href: resolvedLink.value.href,
      target: props.target
    } : {});
    const linkActiveIndex = vue.computed(() => {
      if (hasRouterLink.value === false) {
        return -1;
      }
      const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
      if (routeMatched === void 0) {
        return -1;
      }
      const currentMatched = proxy.$route.matched;
      if (currentMatched.length === 0) {
        return -1;
      }
      const index = currentMatched.findIndex(
        isSameRouteRecord.bind(null, routeMatched)
      );
      if (index > -1) {
        return index;
      }
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
        isSameRouteRecord.bind(null, matched[length - 2])
      ) : index;
    });
    const linkIsActive = vue.computed(
      () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
    );
    const linkIsExactActive = vue.computed(
      () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
    );
    const linkClass = vue.computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
    function getLink(to) {
      try {
        return proxy.$router.resolve(to);
      } catch (_) {
      }
      return null;
    }
    function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
      if (props.disable === true) {
        e.preventDefault();
        return Promise.resolve(false);
      }
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") {
        return Promise.resolve(false);
      }
      e.preventDefault();
      const promise = proxy.$router[replace === true ? "replace" : "push"](to);
      return returnRouterError === true ? promise : promise.then(() => {
      }).catch(() => {
      });
    }
    function navigateOnClick(e) {
      if (hasRouterLink.value === true) {
        const go = (opts) => navigateToRouterLink(e, opts);
        emit("click", e, go);
        e.defaultPrevented !== true && go();
      } else {
        emit("click", e);
      }
    }
    return {
      hasRouterLink,
      hasHrefLink,
      hasLink,
      linkTag,
      resolvedLink,
      linkIsActive,
      linkIsExactActive,
      linkClass,
      linkAttrs,
      getLink,
      navigateToRouterLink,
      navigateOnClick
    };
  }
  const btnPadding = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  };
  const defaultSizes$1 = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24
  };
  const formTypes = ["button", "submit", "reset"];
  const mediaTypeRE = /[^\s]\/[^\s]/;
  const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
  const getBtnDesign = (props, defaultValue) => {
    if (props.flat === true)
      return "flat";
    if (props.outline === true)
      return "outline";
    if (props.push === true)
      return "push";
    if (props.unelevated === true)
      return "unelevated";
    return defaultValue;
  };
  const useBtnProps = {
    ...useSizeProps,
    ...useRouterLinkProps,
    type: {
      type: String,
      default: "button"
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...btnDesignOptions.reduce(
      (acc, val) => (acc[val] = Boolean) && acc,
      {}
    ),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    align: {
      ...useAlignProps.align,
      default: "center"
    },
    stack: Boolean,
    stretch: Boolean,
    loading: {
      type: Boolean,
      default: null
    },
    disable: Boolean
  };
  function useBtn(props) {
    const sizeStyle = useSize(props, defaultSizes$1);
    const alignClass = useAlign(props);
    const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
      fallbackTag: "button"
    });
    const style = vue.computed(() => {
      const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
      return props.padding !== void 0 ? Object.assign({}, obj, {
        padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
        minWidth: "0",
        minHeight: "0"
      }) : obj;
    });
    const isRounded = vue.computed(
      () => props.rounded === true || props.fab === true || props.fabMini === true
    );
    const isActionable = vue.computed(
      () => props.disable !== true && props.loading !== true
    );
    const tabIndex = vue.computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
    const design = vue.computed(() => getBtnDesign(props, "standard"));
    const attributes = vue.computed(() => {
      const acc = { tabindex: tabIndex.value };
      if (hasLink.value === true) {
        Object.assign(acc, linkAttrs.value);
      } else if (formTypes.includes(props.type) === true) {
        acc.type = props.type;
      }
      if (linkTag.value === "a") {
        if (props.disable === true) {
          acc["aria-disabled"] = "true";
        } else if (acc.href === void 0) {
          acc.role = "button";
        }
        if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
          acc.type = props.type;
        }
      } else if (props.disable === true) {
        acc.disabled = "";
        acc["aria-disabled"] = "true";
      }
      if (props.loading === true && props.percentage !== void 0) {
        Object.assign(acc, {
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": props.percentage
        });
      }
      return acc;
    });
    const classes = vue.computed(() => {
      let colors2;
      if (props.color !== void 0) {
        if (props.flat === true || props.outline === true) {
          colors2 = `text-${props.textColor || props.color}`;
        } else {
          colors2 = `bg-${props.color} text-${props.textColor || "white"}`;
        }
      } else if (props.textColor) {
        colors2 = `text-${props.textColor}`;
      }
      const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
      return `q-btn--${design.value} q-btn--${shape}` + (colors2 !== void 0 ? " " + colors2 : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
    });
    const innerClasses = vue.computed(
      () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
    );
    return {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    };
  }
  function currentPage() {
    let pages = getCurrentPages();
    pages.reverse();
    return pages[0];
  }
  function page(pi) {
    let pages = getCurrentPages();
    if (parseInt(pi) !== NaN) {
      pages = pages[pi >= 0 ? pi : pages.length + pi];
    }
    return pages;
  }
  const useLinkProps = {
    label: String,
    query: Object,
    mp: String,
    to: [String, Object],
    animate: String,
    duration: Number,
    href: String,
    target: String,
    exact: Boolean,
    activeClass: {
      type: String,
      default: "q-router-link--active"
    },
    exactActiveClass: {
      type: String,
      default: "q-router-link--exact-active"
    },
    disable: Boolean
  };
  function useLink(props) {
    const { proxy } = vue.getCurrentInstance();
    const linkActive = vue.computed(() => "/" + currentPage().route == proxy.to);
    const linkType = vue.computed(() => props.to ? "to" : props.mp ? "mp" : props.href ? "href" : "");
    const hasLink = vue.computed(() => linkType.value ? true : false);
    const linkClass = vue.computed(() => hasLink.value === true ? linkActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : "" : "");
    const linkAttrs = vue.computed(() => {
      const { mp, to, href, target } = props;
      if (mp || to || href) {
        return { mp, to, href, target };
      }
      return null;
    });
    return {
      hasLink,
      linkType,
      linkActive,
      linkAttrs,
      linkClass
    };
  }
  const _sfc_main$Q = {
    name: "QBtn",
    components: { QIcon: __easycom_0$6, QSpinner: __easycom_1$9, QRipple: __easycom_1$8 },
    props: {
      ...useBtnProps,
      ...useLinkProps,
      percentage: Number,
      darkPercentage: Boolean,
      onTouchstart: [Function, Array]
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(props, { emit }) {
      const linkObj = useLink(props);
      const {
        classes,
        style,
        innerClasses,
        attributes,
        hasLink,
        linkTag,
        navigateOnClick,
        isActionable
      } = useBtn(props);
      const hasLabel = vue.computed(
        () => props.label !== void 0 && props.label !== null && props.label !== ""
      );
      const percentageStyle = vue.computed(() => {
        const val = Math.max(0, Math.min(100, props.percentage));
        return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
      });
      return {
        ...linkObj,
        classes,
        style,
        innerClasses,
        attributes,
        hasLink,
        linkTag,
        navigateOnClick,
        percentageStyle,
        isActionable,
        hasLabel
      };
    },
    methods: {
      onTriggerEvent(name, evt) {
        if (this.disable) {
          stopAndPrevent(evt);
        } else {
          switch (name) {
            case "click":
              this.$refs.ripple.ripple(evt);
              this.$uni.openUrl(this.linkAttrs);
              break;
          }
          this.$emit(name, evt);
        }
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_q_spinner = resolveEasycom(vue.resolveDynamicComponent("q-spinner"), __easycom_1$9);
    const _component_q_ripple = resolveEasycom(vue.resolveDynamicComponent("q-ripple"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(["q-btn q-btn-item non-selectable no-outline", $setup.classes]),
      formType: _ctx.type,
      style: vue.normalizeStyle($setup.style),
      tabindex: $setup.attributes.tabindex,
      disabled: _ctx.disable,
      onClick: _cache[0] || (_cache[0] = ($event) => $options.onTriggerEvent("click", $event)),
      onKeydown: _cache[1] || (_cache[1] = ($event) => $options.onTriggerEvent("keydown", $event)),
      onKeyup: _cache[2] || (_cache[2] = ($event) => $options.onTriggerEvent("keyup", $event)),
      onMousedown: _cache[3] || (_cache[3] = ($event) => $options.onTriggerEvent("mousedown", $event)),
      onTouchstart: _cache[4] || (_cache[4] = ($event) => $options.onTriggerEvent("touchstart", $event))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["q-btn__content text-center col items-center q-anchor--skip", $setup.innerClasses])
      }, [
        _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
          key: 0,
          name: _ctx.icon,
          role: "img",
          left: _ctx.stack === false && $setup.hasLabel === true
        }, null, 8, ["name", "left"])) : vue.createCommentVNode("v-if", true),
        vue.createTextVNode(" " + vue.toDisplayString(_ctx.label) + " ", 1),
        vue.renderSlot(_ctx.$slots, "default"),
        _ctx.iconRight ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
          key: 1,
          name: _ctx.iconRight,
          right: _ctx.stack === false && $setup.hasLabel === true
        }, null, 8, ["name", "right"])) : vue.createCommentVNode("v-if", true)
      ], 2),
      vue.createCommentVNode(" Percentage "),
      _ctx.loading === true && $props.percentage !== void 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["q-btn__progress absolute-full overflow-hidden", { "q-btn__progress--dark": $props.darkPercentage }])
      }, [
        vue.createElementVNode("view", {
          class: "q-btn__progress-indicator fit block",
          style: vue.normalizeStyle($setup.percentageStyle)
        }, null, 4)
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" Loading "),
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        class: "absolute-full flex flex-center",
        key: "loading"
      }, [
        _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(_component_q_spinner, { key: 1 }))
      ])) : vue.createCommentVNode("v-if", true),
      !_ctx.disable ? (vue.openBlock(), vue.createBlock(_component_q_ripple, {
        key: 2,
        class: "ripple",
        ref: "ripple"
      }, null, 512)) : vue.createCommentVNode("v-if", true)
    ], 46, ["formType", "tabindex", "disabled"]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$N], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-btn/q-btn.vue"]]);
  const quasarKey = "_q_";
  const formKey = "_q_fo_";
  const tabsKey = "_q_tabs_";
  const emptyRenderFn = () => {
  };
  const _sfc_main$P = {
    props: {
      ...useAttrProps,
      modelValue: {
        type: Boolean,
        default: true
      },
      bordered: Boolean,
      elevated: Boolean
    },
    setup(props) {
      const $q = vue.inject(quasarKey);
      const style = vue.computed(() => {
        $q.config;
        const { statusBarHeight, screenTop } = $q.platform;
        const styl = `height:${$q.config.headHeight}px;` + (screenTop > 0 ? `padding-top:${statusBarHeight}px;` : "");
        formatAppLog("log", "at uni_modules/kv-qui/components/q-header/q-header.vue:32", "header", styl);
        return props.styles ? [styl, props.styles] : styl;
      });
      const classes = vue.computed(
        () => "q-header fixed-top q-layout__section--marginal row no-wrap items-center justify-center" + (props.bordered === true ? " q-header--bordered" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
      );
      return {
        classes,
        style
      };
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([$setup.classes, _ctx.className]),
      style: vue.normalizeStyle($setup.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      $props.elevated ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
      })) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  const __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$M], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-header/q-header.vue"]]);
  const _sfc_main$O = {
    props: {
      ...useAttrProps,
      bordered: Boolean,
      elevated: Boolean
    },
    setup(props) {
      const $q = vue.inject(quasarKey);
      const footStyle = vue.computed(() => {
        const sfis = $q.platform.safeAreaInsets;
        const styl = `height: ${$q.config.footHeight}px; padding-bottom: ${sfis.bottom}px;`;
        return props.styles ? [styl, props.styles] : styl;
      });
      formatAppLog("log", "at uni_modules/kv-qui/components/q-footer/q-footer.vue:25", "footer", footStyle.value);
      const classes = vue.computed(() => [{
        "q-footer--bordered": props.bordered
      }, props.className]);
      return {
        classes,
        footStyle
      };
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["q-footer fixed-bottom row no-wrap items-center justify-center", $setup.classes]),
      style: vue.normalizeStyle($setup.footStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      $props.elevated ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
      })) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$L], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-footer/q-footer.vue"]]);
  const _sfc_main$N = {
    props: {
      ...useAttrProps,
      customPage: Boolean,
      unfixed: Boolean,
      pushWidth: {
        type: Number,
        default: 300
      },
      push: String
    },
    setup(props, { slots, emit }) {
      const $q = vue.inject(quasarKey);
      const pageStyle = vue.computed(() => {
        $q.config;
        const { screenTop, statusBarHeight, safeAreaInsets } = $q.platform;
        const ptop = (screenTop == 0 ? 0 : statusBarHeight) + $q.config.headHeight;
        let styl = (slots.header ? `padding-top: ${ptop}px;` : "") + (slots.footer ? ` padding-bottom: ${safeAreaInsets.bottom + $q.config.footHeight}px;` : "") + (props.push ? ` transform: translateX(${(props.push == "left" ? "" : "-") + props.pushWidth}px);` : "");
        return styl;
      });
      const classes = vue.computed(() => ({
        "q-page-pushed": props.push,
        "has-foot": slots.footer,
        "has-head": slots.header,
        "no-title": $q.platform.screenTop == 0
      }));
      return {
        classes,
        pageStyle
      };
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["q-page column", [$setup.classes, _ctx.className]]),
      style: vue.normalizeStyle($setup.pageStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "header"),
      _ctx.$slots.container ? vue.renderSlot(_ctx.$slots, "container", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "q-page-inner"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ])),
      vue.renderSlot(_ctx.$slots, "footer")
    ], 6);
  }
  const __easycom_3$4 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$K], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-page/q-page.vue"]]);
  const useDarkProps = {
    dark: {
      type: Boolean,
      default: null
    }
  };
  function useDark(props, $q) {
    return vue.computed(() => props.dark === null ? $q.dark.isActive : props.dark);
  }
  const useModelToggleProps = {
    modelValue: {
      type: Boolean,
      default: null
    },
    "onUpdate:modelValue": [Function, Array]
  };
  const useModelToggleEmits = [
    "beforeShow",
    "show",
    "beforeHide",
    "hide"
  ];
  function useModelToggle({ showing, duration, handleShow, handleHide }) {
    const vm = vue.getCurrentInstance();
    const { props, emit, proxy } = vm;
    let payload;
    function toggle(evt) {
      if (showing.value === true) {
        hide(evt);
      } else {
        show(evt);
      }
    }
    function show(evt) {
      if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true)
        return;
      emit("update:modelValue", true);
      payload = evt;
      vue.nextTick(() => {
        if (payload === evt)
          payload = void 0;
      });
      if (props.modelValue === null) {
        processShow(evt);
      }
    }
    function processShow(evt) {
      showing.value = true;
      emit("beforeShow", evt);
      if (handleShow !== void 0) {
        handleShow(evt);
      } else {
        emit("show", evt);
      }
    }
    function hide(evt) {
      if (props.disable === true)
        return;
      emit("update:modelValue", false);
      payload = evt;
      vue.nextTick(() => {
        if (payload === evt)
          payload = void 0;
      });
      processHide(evt);
    }
    function processHide(evt) {
      emit("beforeHide", evt);
      if (handleHide !== void 0) {
        handleHide(evt);
      } else {
        emit("hide", evt);
      }
      setTimeout(() => {
        showing.value = false;
      }, duration);
    }
    function processModelChange(val) {
      if (props.disable === true && val === true) {
        if (props["onUpdate:modelValue"] !== void 0) {
          emit("update:modelValue", false);
        }
      } else if (val === true !== showing.value) {
        const fn = val === true ? processShow : processHide;
        fn(payload);
      }
      val && uni.$once("close-popup", (evt) => {
        hide(evt);
      });
    }
    vue.watch(() => props.modelValue, processModelChange);
    return { show, hide, toggle };
  }
  function isDeepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (a !== null && b !== null && typeof a === "object" && typeof b === "object") {
      if (a.constructor !== b.constructor) {
        return false;
      }
      let length, i;
      if (a.constructor === Array) {
        length = a.length;
        if (length !== b.length) {
          return false;
        }
        for (i = length; i-- !== 0; ) {
          if (isDeepEqual(a[i], b[i]) !== true) {
            return false;
          }
        }
        return true;
      }
      if (a.constructor === Map) {
        if (a.size !== b.size) {
          return false;
        }
        i = a.entries().next();
        while (i.done !== true) {
          if (b.has(i.value[0]) !== true) {
            return false;
          }
          i = i.next();
        }
        i = a.entries().next();
        while (i.done !== true) {
          if (isDeepEqual(i.value[1], b.get(i.value[0])) !== true) {
            return false;
          }
          i = i.next();
        }
        return true;
      }
      if (a.constructor === Set) {
        if (a.size !== b.size) {
          return false;
        }
        i = a.entries().next();
        while (i.done !== true) {
          if (b.has(i.value[0]) !== true) {
            return false;
          }
          i = i.next();
        }
        return true;
      }
      if (a.buffer != null && a.buffer.constructor === ArrayBuffer) {
        length = a.length;
        if (length !== b.length) {
          return false;
        }
        for (i = length; i-- !== 0; ) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      if (a.constructor === RegExp) {
        return a.source === b.source && a.flags === b.flags;
      }
      if (a.valueOf !== Object.prototype.valueOf) {
        return a.valueOf() === b.valueOf();
      }
      if (a.toString !== Object.prototype.toString) {
        return a.toString() === b.toString();
      }
      const keys = Object.keys(a).filter((key) => a[key] !== void 0);
      length = keys.length;
      if (length !== Object.keys(b).filter((key) => b[key] !== void 0).length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        const key = keys[i];
        if (isDeepEqual(a[key], b[key]) !== true) {
          return false;
        }
      }
      return true;
    }
    return a !== a && b !== b;
  }
  function isObject(v) {
    return v !== null && typeof v === "object" && Array.isArray(v) !== true;
  }
  function isDate(v) {
    return Object.prototype.toString.call(v) === "[object Date]";
  }
  function isRegexp(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  }
  function isNumber(v) {
    return typeof v === "number" && isFinite(v);
  }
  const is = {
    deepEqual: isDeepEqual,
    object: isObject,
    date: isDate,
    regexp: isRegexp,
    number: isNumber
  };
  const _sfc_main$M = {
    props: {
      ...useDarkProps,
      ...useAttrProps,
      ...useModelToggleProps,
      side: {
        type: String,
        default: "left",
        validator: (v) => ["left", "right"].includes(v)
      },
      width: {
        type: Number,
        default: 300
      },
      bordered: Boolean,
      elevated: Boolean,
      overlay: Boolean,
      persistent: Boolean,
      noSwipeOpen: Boolean,
      noSwipeClose: Boolean,
      noSwipeBackdrop: Boolean
    },
    emits: [...useModelToggleEmits],
    setup(props, { slots, emit, attrs }) {
      const vm = vue.getCurrentInstance();
      const { proxy: { $q } } = vm;
      const isDark = useDark(props, $q);
      const showing = vue.ref(props.modelValue === true);
      vue.computed(() => props.overlay === true);
      const classes = vue.computed(
        () => `q-drawer q-drawer--${props.side}` + (props.modelValue === true ? " q-drawer__show" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "")
      );
      const backgropClass = vue.computed(() => ({
        "q-drawer__backdrop__show": props.modelValue
      }));
      const style = vue.reactive({
        width: `${props.width + (isNumber(props.width) ? "px" : "")}`
      });
      const { show, hide } = useModelToggle({ showing });
      function onClickBackGroup(evt) {
        if (props.persistent !== true)
          hide(evt);
      }
      return {
        showing,
        classes,
        style,
        show,
        hide,
        backgropClass,
        onClickBackGroup
      };
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([[$setup.classes, _ctx.className], "column"]),
        style: vue.normalizeStyle([_ctx.styles, $setup.style])
      }, [
        vue.renderSlot(_ctx.$slots, "before"),
        vue.createElementVNode("view", { class: "q-drawer__content col" }, [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        vue.renderSlot(_ctx.$slots, "after")
      ], 6),
      $props.overlay !== true ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["fullscreen q-drawer__backdrop", $setup.backgropClass]),
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.onClickBackGroup && $setup.onClickBackGroup(...args)),
        onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
        }, ["stop", "prevent"]))
      }, null, 34)), [
        [vue.vShow, $setup.showing]
      ]) : vue.createCommentVNode("v-if", true)
    ], 64);
  }
  const __easycom_5$2 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$J], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-drawer/q-drawer.vue"]]);
  const _sfc_main$L = {
    __name: "index",
    setup(__props) {
      vue.ref(true);
      const showLeftSide = vue.ref(false);
      const showRightSide = vue.ref(false);
      const isOverlay = vue.ref(false);
      const isPersistent = vue.ref(false);
      const pushSide = vue.computed(() => showLeftSide.value ? "left" : showRightSide.value ? "right" : "");
      formatAppLog("log", "at pages/index/index.vue:67", uni.getWindowInfo());
      formatAppLog("log", "at pages/index/index.vue:68", getCurrentPages().pop());
      return (_ctx, _cache) => {
        const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
        const _component_q_header = resolveEasycom(vue.resolveDynamicComponent("q-header"), __easycom_1$7);
        const _component_q_footer = resolveEasycom(vue.resolveDynamicComponent("q-footer"), __easycom_2$4);
        const _component_q_page = resolveEasycom(vue.resolveDynamicComponent("q-page"), __easycom_3$4);
        const _component_q_drawer = resolveEasycom(vue.resolveDynamicComponent("q-drawer"), __easycom_5$2);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(_component_q_page, { push: vue.unref(pushSide) }, {
            header: vue.withCtx(() => [
              vue.createVNode(_component_q_header, { bordered: "" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_btn, {
                    flat: "",
                    icon: "chevron_left"
                  }),
                  vue.createElementVNode("view", { class: "col row justify-center items-center" }, " \u5934\u90E8\u5185\u5BB9 "),
                  vue.createVNode(_component_q_btn, {
                    flat: "",
                    icon: "menu",
                    onClick: _cache[1] || (_cache[1] = ($event) => showRightSide.value = !showRightSide.value)
                  })
                ]),
                _: 1
              })
            ]),
            footer: vue.withCtx(() => [
              vue.createVNode(_component_q_footer, { bordered: "" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u5E95\u90E8\u5185\u5BB9")
                ]),
                _: 1
              })
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "q-pa-lg bg-amber-2" }, [
                vue.createVNode(_component_q_btn, {
                  icon: "east",
                  label: `\u663E\u793A\u5DE6\u4FA7\u680F${showLeftSide.value}`,
                  onClick: _cache[0] || (_cache[0] = ($event) => showLeftSide.value = !showLeftSide.value),
                  color: "primary"
                }, null, 8, ["label"])
              ]),
              vue.createTextVNode(" --status-bar-height "),
              vue.createElementVNode("view", {
                class: "bg-red",
                style: { "width": "var(--status-bar-height)", "height": "var(--status-bar-height)" }
              }),
              vue.createTextVNode(" --footer-height "),
              vue.createElementVNode("view", {
                class: "bg-red",
                style: { "width": "var(--footer-height)", "height": "var(--footer-height)" }
              }),
              vue.createTextVNode(" --window-top "),
              vue.createElementVNode("view", {
                class: "bg-red",
                style: { "width": "var(--window-top)", "height": "var(--window-top)" }
              }),
              vue.createTextVNode(" --window-bottom "),
              vue.createElementVNode("view", {
                class: "bg-red",
                style: { "width": "var(--window-bottom)", "height": "var(--window-bottom)" }
              }),
              vue.createTextVNode(" env(safe-area-inset-top) "),
              vue.createElementVNode("view", {
                class: "bg-red",
                style: { "width": "env(safe-area-inset-top)", "height": "env(safe-area-inset-top)" }
              }),
              vue.createTextVNode(" env(safe-area-inset-bottom) "),
              vue.createElementVNode("view", {
                class: "bg-red",
                style: { "width": "env(safe-area-inset-bottom)", "height": "env(safe-area-inset-bottom)" }
              }),
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(50, (i) => {
                return vue.createElementVNode("view", {
                  class: "testColor",
                  key: i
                }, "testColor---" + vue.toDisplayString(i), 1);
              }), 64))
            ]),
            _: 1
          }, 8, ["push"]),
          vue.createCommentVNode(" \u5DE6\u8FB9\u4FA7\u680F "),
          vue.createVNode(_component_q_drawer, {
            modelValue: showLeftSide.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => showLeftSide.value = $event),
            overlay: isOverlay.value,
            persistent: isPersistent.value
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4FA7\u680F")
            ]),
            _: 1
          }, 8, ["modelValue", "overlay", "persistent"]),
          vue.createCommentVNode(" \u53F3\u8FB9\u4FA7\u680F "),
          vue.createVNode(_component_q_drawer, {
            modelValue: showRightSide.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showRightSide.value = $event),
            overlay: isOverlay.value,
            persistent: isPersistent.value,
            side: "right"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4FA7\u680F")
            ]),
            _: 1
          }, 8, ["modelValue", "overlay", "persistent"])
        ], 64);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__file", "E:/AppProject/qui-demo/pages/index/index.vue"]]);
  const _sfc_main$K = {
    data() {
      return {
        url: "",
        webviewStyles: {
          progress: {
            color: "#F33"
          }
        }
      };
    },
    onLoad({ url }) {
      this.url = url;
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("web-view", {
      "webview-styles": $data.webviewStyles,
      src: $data.url,
      "update-title": true,
      onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoaded && _ctx.onLoaded(...args))
    }, null, 40, ["webview-styles", "src"]);
  }
  const PagesIndexBroswer = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$I], ["__file", "E:/AppProject/qui-demo/pages/index/broswer.vue"]]);
  const alignValues$1 = ["top", "middle", "bottom"];
  const _sfc_main$J = {
    name: "QBadge",
    props: {
      color: String,
      textColor: String,
      floating: Boolean,
      transparent: Boolean,
      multiLine: Boolean,
      outline: Boolean,
      rounded: Boolean,
      label: [Number, String],
      align: {
        type: String,
        validator: (v) => alignValues$1.includes(v)
      }
    },
    computed: {
      classes() {
        const text = this.outline === true ? this.color || this.textColor : this.textColor;
        return `q-badge flex inline items-center no-wrap q-badge--${this.multiLine === true ? "multi" : "single"}-line` + (this.outline === true ? " q-badge--outline" : this.color !== void 0 ? ` bg-${this.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (this.floating === true ? " q-badge--floating" : "") + (this.rounded === true ? " q-badge--rounded" : "") + (this.transparent === true ? " q-badge--transparent" : "");
      },
      style() {
        return this.align !== void 0 ? { verticalAlign: this.align } : null;
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass($options.classes),
      style: vue.normalizeStyle($options.style),
      "aria-label": $props.label
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createTextVNode(" " + vue.toDisplayString($props.label), 1)
    ], 14, ["aria-label"]);
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$H], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-badge/q-badge.vue"]]);
  const _sfc_main$I = {};
  function _sfc_render$G(_ctx, _cache) {
    const _component_q_badge = resolveEasycom(vue.resolveDynamicComponent("q-badge"), __easycom_2$3);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("div", { class: "wrap q-pa-md" }, [
        vue.createElementVNode("div", { class: "row" }, [
          vue.createElementVNode("div", { class: "col" }, " .col "),
          vue.createElementVNode("div", { class: "col" }, " .col ")
        ]),
        vue.createElementVNode("div", { class: "row" }, [
          vue.createElementVNode("div", { class: "col" }, " .col "),
          vue.createElementVNode("div", { class: "col" }, " .col "),
          vue.createElementVNode("div", { class: "col" }, " .col ")
        ]),
        vue.createElementVNode("div", { class: "row justify-center bg-blue-2" }, [
          vue.createElementVNode("div", { class: "col-12 col-sm-2" }, " .col-12 .col-sm-2 "),
          vue.createElementVNode("div", { class: "col-12 col-sm-auto" }, " .col-12 .col-md-auto (Variable width content) "),
          vue.createElementVNode("div", { class: "col-12 col-sm-2" }, " .col-12 .col-sm-2 ")
        ])
      ]),
      vue.createElementVNode("div", { class: "title" }, "Mix and match"),
      vue.createElementVNode("div", { class: "q-pa-md wrap" }, [
        vue.createCommentVNode(" Stack the columns on mobile by making one full-width and the other half-width "),
        vue.createElementVNode("div", { class: "row" }, [
          vue.createElementVNode("div", { class: "col col-md-8" }, ".col .col-md-8"),
          vue.createElementVNode("div", { class: "col-6 col-md-4" }, ".col-6 .col-md-4")
        ]),
        vue.createCommentVNode(" Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop "),
        vue.createElementVNode("div", { class: "row" }, [
          vue.createElementVNode("div", { class: "col-6 col-md-4" }, ".col-6 .col-md-4"),
          vue.createElementVNode("div", { class: "col-6 col-md-4" }, ".col-6 .col-md-4"),
          vue.createElementVNode("div", { class: "col-6 col-md-4" }, ".col-6 .col-md-4")
        ]),
        vue.createCommentVNode(" Columns are always 50% wide, on mobile and desktop "),
        vue.createElementVNode("div", { class: "row" }, [
          vue.createElementVNode("div", { class: "col-6" }, ".col-6"),
          vue.createElementVNode("div", { class: "col-6" }, ".col-6")
        ])
      ]),
      vue.createElementVNode("div", { class: "title" }, "Alignment"),
      vue.createElementVNode("div", { class: "q-pa-md doc-container" }, [
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("items-start")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row items-start" }, [
          vue.createElementVNode("div", { class: "col" }, " One of three cols "),
          vue.createElementVNode("div", { class: "col" }, " One of three cols "),
          vue.createElementVNode("div", { class: "col" }, " One of three cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("items-center")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row items-center" }, [
          vue.createElementVNode("div", { class: "col" }, " One of three cols "),
          vue.createElementVNode("div", { class: "col" }, " One of three cols "),
          vue.createElementVNode("div", { class: "col" }, " One of three cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("items-end")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row items-end" }, [
          vue.createElementVNode("div", { class: "col" }, " One of three cols "),
          vue.createElementVNode("div", { class: "col" }, " One of three cols "),
          vue.createElementVNode("div", { class: "col" }, " One of three cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("self-*")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row" }, [
          vue.createElementVNode("div", { class: "col self-start" }, " .self-start "),
          vue.createElementVNode("div", { class: "col self-center" }, " .self-center "),
          vue.createElementVNode("div", { class: "col self-end" }, " .self-end ")
        ])
      ]),
      vue.createElementVNode("div", { class: "q-pa-md doc-container" }, [
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("justify-start")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row justify-start" }, [
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols "),
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("justify-center")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row justify-center" }, [
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols "),
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("justify-end")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row justify-end" }, [
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols "),
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("justify-around")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row justify-around" }, [
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols "),
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("justify-between")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row justify-between" }, [
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols "),
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols ")
        ]),
        vue.createVNode(_component_q_badge, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("justify-evenly")
          ]),
          _: 1
        }),
        vue.createElementVNode("div", { class: "row justify-evenly" }, [
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols "),
          vue.createElementVNode("div", { class: "col-4" }, " One of two cols ")
        ])
      ])
    ], 64);
  }
  const PagesLayoutGrid_row = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$G], ["__file", "E:/AppProject/qui-demo/pages/layout/grid_row.vue"]]);
  const insetMap = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset"
  };
  const margins = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24
  };
  const _sfc_main$H = createComponent({
    name: "QSeparator",
    props: {
      ...useDarkProps,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String
    },
    setup(props) {
      const vm = vue.getCurrentInstance();
      const isDark = useDark(props, vm.proxy.$q);
      const orientation = vue.computed(() => props.vertical === true ? "vertical" : "horizontal");
      const orientClass = vue.computed(() => ` q-separator--${orientation.value}`);
      const insetClass = vue.computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
      const classes = vue.computed(
        () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
      );
      const style = vue.computed(() => {
        const acc = {};
        if (props.size !== void 0) {
          acc[props.vertical === true ? "width" : "height"] = props.size;
        }
        if (props.spaced !== false) {
          const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
          const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
          acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
        }
        return acc;
      });
      return {
        classes,
        style,
        orientation
      };
    }
  });
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("hr", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style),
      "aria-orientation": _ctx.orientation
    }, null, 14, ["aria-orientation"]);
  }
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$F], ["__scopeId", "data-v-68053e1f"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-separator/q-separator.vue"]]);
  const _sfc_main$G = createComponent({
    name: "QAvatar",
    props: {
      ...useSizeProps,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean
    },
    setup(props) {
      const sizeStyle = useSize(props);
      const classes = vue.computed(
        () => "q-avatar" + (props.color ? ` bg-${props.color}` : "") + (props.textColor ? ` text-${props.textColor} q-chip--colored` : "") + (props.square === true ? " q-avatar--square" : props.rounded === true ? " rounded-borders" : "")
      );
      const contentStyle = vue.computed(() => props.fontSize ? { fontSize: props.fontSize } : null);
      return {
        classes,
        sizeStyle,
        contentStyle
      };
    }
  });
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.sizeStyle)
    }, [
      vue.createElementVNode("view", {
        class: "q-avatar__content row flex-center overflow-hidden",
        style: vue.normalizeStyle(_ctx.contentStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
          key: 0,
          name: _ctx.icon
        }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true)
      ], 4)
    ], 6);
  }
  const __easycom_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$E], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-avatar/q-avatar.vue"]]);
  const _sfc_main$F = {};
  function _sfc_render$D(_ctx, _cache) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_q_avatar = resolveEasycom(vue.resolveDynamicComponent("q-avatar"), __easycom_4$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Sizes for q-gutter" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: "q-pa-md",
            style: { "max-width": "500px" }
          }, [
            vue.createElementVNode("p", null, "q-gutter-xs"),
            vue.createElementVNode("div", { class: "q-gutter-xs" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(7, (n) => {
                return vue.createVNode(_component_q_btn, {
                  class: "uni",
                  color: "brown",
                  label: "Button",
                  key: `xs-${n}`
                });
              }), 64))
            ]),
            vue.createElementVNode("p", { class: "q-mt-md" }, "q-gutter-sm"),
            vue.createElementVNode("div", { class: "q-gutter-sm" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(7, (n) => {
                return vue.createVNode(_component_q_btn, {
                  class: "uni",
                  color: "teal",
                  label: "Button",
                  key: `sm-${n}`
                });
              }), 64))
            ]),
            vue.createElementVNode("p", { class: "q-mt-md" }, "q-gutter-md"),
            vue.createElementVNode("div", { class: "q-gutter-md" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(7, (n) => {
                return vue.createVNode(_component_q_btn, {
                  class: "uni",
                  color: "accent",
                  label: "Button",
                  key: `md-${n}`
                });
              }), 64))
            ]),
            vue.createElementVNode("p", { class: "q-mt-md" }, "q-gutter-lg"),
            vue.createElementVNode("div", { class: "q-gutter-lg" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(7, (n) => {
                return vue.createVNode(_component_q_btn, {
                  class: "uni",
                  color: "red",
                  label: "Button",
                  key: `lg-${n}`
                });
              }), 64))
            ]),
            vue.createElementVNode("p", { class: "q-mt-md" }, "q-gutter-xl"),
            vue.createElementVNode("div", { class: "q-gutter-xl" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(7, (n) => {
                return vue.createVNode(_component_q_btn, {
                  class: "uni",
                  color: "indigo",
                  label: "Button",
                  key: `xl-${n}`
                });
              }), 64))
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Sizes for q-col-gutter" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-pa-md" }, [
            vue.createElementVNode("div", { class: "row q-col-gutter-none" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
                return vue.createElementVNode("div", {
                  class: "col-4",
                  key: `none-${n}`
                }, [
                  vue.createElementVNode("div", { class: "my-content" }, "\xA0")
                ]);
              }), 64))
            ]),
            vue.createVNode(_component_q_separator, { spaced: "" }),
            vue.createElementVNode("div", { class: "row q-col-gutter-xs" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
                return vue.createElementVNode("div", {
                  class: "col-4",
                  key: `xs-${n}`
                }, [
                  vue.createElementVNode("div", { class: "my-content" }, "\xA0")
                ]);
              }), 64))
            ]),
            vue.createVNode(_component_q_separator, { spaced: "" }),
            vue.createElementVNode("div", { class: "row q-col-gutter-sm" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
                return vue.createElementVNode("div", {
                  class: "col-4",
                  key: `sm-${n}`
                }, [
                  vue.createElementVNode("div", { class: "my-content" }, "\xA0")
                ]);
              }), 64))
            ]),
            vue.createVNode(_component_q_separator, { spaced: "" }),
            vue.createElementVNode("div", { class: "row q-col-gutter-md" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
                return vue.createElementVNode("div", {
                  class: "col-4",
                  key: `md-${n}`
                }, [
                  vue.createElementVNode("div", { class: "my-content" }, "\xA0")
                ]);
              }), 64))
            ]),
            vue.createVNode(_component_q_separator, { spaced: "" }),
            vue.createElementVNode("div", { class: "row q-col-gutter-lg" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
                return vue.createElementVNode("div", {
                  class: "col-4",
                  key: `lg-${n}`
                }, [
                  vue.createElementVNode("div", { class: "my-content" }, "\xA0")
                ]);
              }), 64))
            ]),
            vue.createVNode(_component_q_separator, { spaced: "" }),
            vue.createElementVNode("div", { class: "row q-col-gutter-xl" }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
                return vue.createElementVNode("div", {
                  class: "col-4",
                  key: `xl-${n}`
                }, [
                  vue.createElementVNode("div", { class: "my-content" }, "\xA0")
                ]);
              }), 64))
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Sizes for q-gutter" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "row q-col-gutter-x-md" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
              return vue.createElementVNode("div", {
                class: "col-4",
                key: `none-${n}`
              }, [
                vue.createElementVNode("div", { class: "my-content" }, "\xA0")
              ]);
            }), 64))
          ]),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createElementVNode("div", { class: "row q-col-gutter-y-md" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (n) => {
              return vue.createElementVNode("div", {
                class: "col-4",
                key: `none-${n}`
              }, [
                vue.createElementVNode("div", { class: "my-content" }, "\xA0")
              ]);
            }), 64))
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, {
        title: "Sizes for q-gutter",
        "content-class": "q-gutter-sm"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_avatar, {
            color: "blue",
            class: "uni"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("A")
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_avatar, {
            color: "blue",
            class: "uni"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("A")
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_avatar, {
            color: "blue",
            class: "uni"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("A")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesLayoutGutter = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$D], ["__scopeId", "data-v-b9bdb711"], ["__file", "E:/AppProject/qui-demo/pages/layout/gutter.vue"]]);
  const useOptionProps = {
    ...useAttrProps,
    modelValue: { required: true },
    val: {},
    label: String,
    leftLabel: Boolean,
    labelClass: {},
    gutter: {
      type: String,
      default: "sm",
      validator: (val) => ["xs", "sm", "md", "lg"].includes(val)
    },
    color: String,
    checkedIcon: String,
    uncheckedIcon: String,
    options: Array
  };
  function useOption(props) {
    const trueValue = props.val !== void 0 ? props.val : true;
    const isGroup = vue.computed(() => props.options !== void 0);
    const opts = vue.computed(() => {
      const { label, disable, color, checkedIcon, uncheckedIcon, icon } = props;
      return isGroup.value ? props.options.map((vo) => {
        vo = typeof vo == "object" ? vo : { label: vo, value: vo };
        vo = Object.assign(
          {
            disable,
            color,
            checkedIcon: checkedIcon || vo.icon || icon,
            uncheckedIcon: uncheckedIcon || vo.icon || icon
          },
          vo
        );
        return vo;
      }) : [{ label, disable, color, value: trueValue, checkedIcon, uncheckedIcon }];
    });
    const status = vue.computed(() => opts.value.map((vo) => {
      const { modelValue } = props;
      const { value } = vo;
      return Array.isArray(modelValue) ? modelValue.includes(value) : value == modelValue;
    }));
    const icons = vue.computed(() => opts.value.map((vo, i) => {
      const { checkedIcon, uncheckedIcon } = vo;
      const checked = status.value[i];
      return checked && checkedIcon ? checkedIcon : !checked && uncheckedIcon ? uncheckedIcon : "";
    }));
    const itemClass = vue.computed(() => opts.value.map((vo, i) => [
      vo.class,
      status.value[i] ? "q-checked" : ""
    ]));
    const labelStyle = vue.computed(() => ({
      marginRight: isNumber(props.gutter) ? props.gutter + "px" : props.gutter
    }));
    const classes = vue.computed(() => [
      "q-gutter-" + props.gutter,
      props.className
    ]);
    return {
      classes,
      opts,
      icons,
      status,
      isGroup,
      trueValue,
      itemClass,
      labelStyle
    };
  }
  const _sfc_main$E = {
    name: "QCheckbox",
    props: useOptionProps,
    emits: ["change", "update:modelValue"],
    setup(props, { emit }) {
      const useOpts = useOption(props);
      function onChange(evt) {
        const { isGroup, trueValue } = useOpts;
        const val = isGroup.value ? evt.detail.value : evt.detail.value[0] ? trueValue : evt.detail.value[0];
        emit("update:modelValue", val);
        evt.detail.value = val;
        emit("change", evt);
      }
      return {
        ...useOpts,
        onChange
      };
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("checkbox-group", {
      class: vue.normalizeClass(["row", _ctx.classes]),
      onChange: _cache[0] || (_cache[0] = (...args) => $setup.onChange && $setup.onChange(...args))
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.opts, (vo, i) => {
        return vue.openBlock(), vue.createElementBlock("label", {
          class: vue.normalizeClass(["q-checkbox", [_ctx.labelClass, { "q-checked": _ctx.status[i] }]]),
          style: vue.normalizeStyle(_ctx.labelStyle),
          key: i
        }, [
          _ctx.icons[i] ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
            key: 0,
            class: "check-icon",
            name: _ctx.icons[i],
            size: "22px"
          }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
          vue.withDirectives(vue.createElementVNode("checkbox", {
            value: vo.value + "",
            "data-vals": vo.value,
            checked: _ctx.status[i],
            disabled: vo.disable,
            color: vo.color
          }, null, 8, ["value", "data-vals", "checked", "disabled", "color"]), [
            [vue.vShow, !_ctx.icons[i]]
          ]),
          vue.createElementVNode("text", null, vue.toDisplayString(vo.label), 1)
        ], 6);
      }), 128))
    ], 34);
  }
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$C], ["__scopeId", "data-v-efeee3d1"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-checkbox/q-checkbox.vue"]]);
  const _sfc_main$D = {
    data() {
      const footTab = [
        { label: "\u9996\u9875", icon: "home" },
        { label: "\u8D2D\u7269\u8F66", icon: "shopping_cart" },
        { label: "\u53D1\u73B0", icon: "stars" },
        { label: "\u7528\u6237", icon: "account_circle" }
      ];
      return {
        leftShow: false,
        rightShow: false,
        overlay: false,
        persistent: false,
        pagePush: false,
        footTab,
        curTab: footTab[0]
      };
    },
    computed: {
      pushDir() {
        const { leftShow, rightShow, pagePush } = this;
        return pagePush ? leftShow ? "left" : rightShow ? "right" : "" : false;
      }
    },
    methods: {
      tabTo(vo) {
        formatAppLog("log", "at pages/layout/layout.vue:88", vo);
        this.curTab = vo;
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_q_checkbox = resolveEasycom(vue.resolveDynamicComponent("q-checkbox"), __easycom_3$3);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_footer = resolveEasycom(vue.resolveDynamicComponent("q-footer"), __easycom_2$4);
    const _component_q_page = resolveEasycom(vue.resolveDynamicComponent("q-page"), __easycom_3$4);
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_q_drawer = resolveEasycom(vue.resolveDynamicComponent("q-drawer"), __easycom_5$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_q_page, {
        push: $data.leftShow || $data.rightShow,
        "push-direction": $data.pagePush ? $data.leftShow ? "left" : $data.rightShow ? "right" : "" : ""
      }, {
        footer: vue.withCtx(() => [
          vue.createVNode(_component_q_footer, { _class: "text-primary" }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.footTab, (vo, i) => {
                return vue.openBlock(), vue.createBlock(_component_q_btn, {
                  flat: "",
                  stack: "",
                  class: "col",
                  key: i,
                  color: vo.label == $data.curTab.label ? "red" : "",
                  label: vo.label,
                  icon: vo.icon,
                  onClick: ($event) => $options.tabTo(vo)
                }, null, 8, ["color", "label", "icon", "onClick"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        default: vue.withCtx(() => [
          vue.createVNode(_component_Lanmu, { title: "\u4FA7\u680F\u8BBE\u7F6E" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "q-gutter-md" }, [
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_q_btn, {
                    icon: "east",
                    label: `\u663E\u793A\u5DE6\u4FA7\u680F${$data.leftShow}`,
                    onClick: _cache[0] || (_cache[0] = ($event) => $data.leftShow = !$data.leftShow),
                    color: "primary"
                  }, null, 8, ["label"])
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_q_btn, {
                    icon: "west",
                    label: `\u663E\u793A\u53F3\u4FA7\u680F${$data.rightShow}`,
                    onClick: _cache[1] || (_cache[1] = ($event) => $data.rightShow = !$data.rightShow),
                    color: "primary"
                  }, null, 8, ["label"])
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_q_checkbox, {
                    modelValue: $data.overlay,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.overlay = $event),
                    label: `\u662F\u5426\u4E3Aoverlay\uFF08\u5373\u65E0\u906E\u7F69\uFF09-${$data.overlay}`
                  }, null, 8, ["modelValue", "label"])
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_q_checkbox, {
                    modelValue: $data.persistent,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.persistent = $event),
                    label: `\u662F\u5426\u4E3Apersistent-\uFF08\u70B9\u906E\u7F69\u4E0D\u5173\u95ED\uFF09-${$data.persistent}`
                  }, null, 8, ["modelValue", "label"])
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_q_checkbox, {
                    modelValue: $data.pagePush,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.pagePush = $event),
                    label: `\u4FA7\u680F\u6253\u5F00\u9875\u9762\u662F\u5426\u4E3Apush - ${$data.pagePush}`
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              vue.createElementVNode("view", { class: "q-pa-md" }, [
                vue.createTextVNode(" \u5F53\u524DTab\uFF1A "),
                $data.curTab ? (vue.openBlock(), vue.createBlock(_component_q_btn, {
                  key: 0,
                  flat: "",
                  color: "blue",
                  icon: $data.curTab.icon,
                  label: $data.curTab.label
                }, null, 8, ["icon", "label"])) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["push", "push-direction"]),
      vue.createVNode(_component_q_drawer, {
        modelValue: $data.leftShow,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.leftShow = $event),
        overlay: $data.overlay,
        persistent: $data.persistent
      }, {
        before: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "row items-center q-pa-sm" }, [
            vue.createElementVNode("view", { class: "col text-bold" }, "\u5DE6\u4FA7\u680F"),
            vue.createVNode(_component_q_btn, {
              flat: "",
              icon: "close",
              onClick: _cache[5] || (_cache[5] = ($event) => $data.leftShow = false)
            })
          ]),
          vue.createVNode(_component_q_separator)
        ]),
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(100, (i) => {
            return vue.createElementVNode("view", {
              class: "q-pa-sm",
              key: i
            }, " Menu " + vue.toDisplayString(i), 1);
          }), 64))
        ]),
        _: 1
      }, 8, ["modelValue", "overlay", "persistent"]),
      vue.createVNode(_component_q_drawer, {
        modelValue: $data.rightShow,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.rightShow = $event),
        overlay: $data.overlay,
        side: "right",
        persistent: $data.persistent
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-pa-sm" }, [
            vue.createTextVNode(" \u53F3\u4FA7\u680F "),
            vue.createVNode(_component_q_btn, {
              label: "\u5173\u95ED",
              onClick: _cache[7] || (_cache[7] = ($event) => $data.rightShow = false),
              color: "red"
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "overlay", "persistent"])
    ], 64);
  }
  const PagesLayoutLayout = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$B], ["__file", "E:/AppProject/qui-demo/pages/layout/layout.vue"]]);
  const _sfc_main$C = {
    setup() {
      return {
        imgIcon: [
          "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
          "img:https://app-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/default.png",
          "img:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
          'img:data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="${face}"><path fill="none" d="M0 0h24v24H0V0z"/><path stroke="${hair}" fill="${hair}" stroke-linecap="round" opacity=".5" d="M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z"/><path stroke="none" fill="${face}" stroke-linecap="round"  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"/><circle cx="9" cy="13" r="1.25"/><circle cx="15" cy="13" r="1.25"/></svg>'
        ]
      };
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createElementBlock("view", { class: "wrap" }, [
      vue.createVNode(_component_Lanmu, { title: "Basic" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: "text-purple row q-gutter-sm",
            style: { "font-size": "2em" }
          }, [
            vue.createVNode(_component_q_icon, { name: "font_download" }),
            vue.createVNode(_component_q_icon, { name: "warning" }),
            vue.createVNode(_component_q_icon, { name: "format_size" }),
            vue.createVNode(_component_q_icon, { name: "print" }),
            vue.createVNode(_component_q_icon, { name: "today" }),
            vue.createVNode(_component_q_icon, { name: "style" })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Size & colors" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-mt-md row q-gutter-md" }, [
            vue.createVNode(_component_q_icon, {
              name: "font_download",
              color: "primary",
              size: "32px"
            }),
            vue.createVNode(_component_q_icon, {
              name: "warning",
              color: "warning",
              size: "4rem"
            }),
            vue.createVNode(_component_q_icon, {
              name: "format_size",
              style: { "color": "#ccc", "font-size": "1.4em" }
            }),
            vue.createVNode(_component_q_icon, {
              name: "print",
              color: "teal",
              size: "4.4em"
            }),
            vue.createVNode(_component_q_icon, {
              name: "today",
              class: "text-orange",
              size: "2em"
            }),
            vue.createVNode(_component_q_icon, {
              name: "style",
              size: "3em"
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Standard sizes" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "text-purple row q-gutter-md" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(["xs", "sm", "md", "lg", "xl"], (size) => {
              return vue.createVNode(_component_q_icon, {
                key: size,
                size,
                name: "font_download"
              }, null, 8, ["size"]);
            }), 64))
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Image icons" }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.imgIcon, (src, i) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: "q-pa-sm",
              key: i
            }, [
              vue.createElementVNode("div", { class: "ellipsis-2-lines text-blue-grey q-pa-xs bg-blue-grey-1" }, vue.toDisplayString(src), 1),
              vue.createVNode(_component_q_icon, {
                size: "md",
                name: src
              }, null, 8, ["name"])
            ]);
          }), 128))
        ]),
        _: 1
      })
    ]);
  }
  const PagesComponentsIcon = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$A], ["__file", "E:/AppProject/qui-demo/pages/components/icon.vue"]]);
  const _sfc_main$B = {};
  function _sfc_render$z(_ctx, _cache) {
    const _component_q_avatar = resolveEasycom(vue.resolveDynamicComponent("q-avatar"), __easycom_4$2);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, {
        title: "Basic",
        "content-class": "row q-gutter-sm"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_avatar, {
            color: "red",
            "text-color": "white",
            icon: "directions"
          }),
          vue.createVNode(_component_q_avatar, {
            color: "primary",
            "text-color": "white"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("J")
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_avatar, {
            size: "100px",
            "font-size": "52px",
            color: "teal",
            "text-color": "white",
            icon: "directions"
          }),
          vue.createVNode(_component_q_avatar, {
            size: "24px",
            color: "orange"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("J")
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_avatar, null, {
            default: vue.withCtx(() => [
              vue.createElementVNode("img", { src: "https://cdn.quasar.dev/img/avatar.png" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, {
        title: "Shap",
        "content-class": "row q-gutter-sm"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_avatar, {
            square: "",
            color: "red",
            "text-color": "white"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("A")
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_avatar, {
            color: "red",
            "text-color": "white",
            icon: "person"
          }),
          vue.createVNode(_component_q_avatar, {
            rounded: "",
            color: "blue",
            "text-color": "white",
            icon: "directions"
          })
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$z], ["__file", "E:/AppProject/qui-demo/pages/components/avatar.vue"]]);
  const useRatioProps = {
    ratio: [String, Number]
  };
  function useRatio(props, naturalRatio) {
    return vue.computed(() => {
      const ratio = Number(
        props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
      );
      return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
    });
  }
  const defaultRatio = 16 / 9;
  const _sfc_main$A = createComponent({
    name: "QImg",
    components: {
      QSpinner: __easycom_1$9
    },
    props: {
      ...useRatioProps,
      ...useAttrProps,
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
      fit: {
        type: String,
        default: "cover"
      },
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
      const imgSrc = vue.ref(props.src);
      let naturalRatio = vue.ref(props.initialRatio);
      const ratioStyle = useRatio(props, naturalRatio);
      const images = vue.computed(() => [
        props.src,
        props.placeholderSrc
      ]);
      vue.getCurrentInstance();
      const isLoaded = vue.ref(false);
      const isLoading = vue.ref(true);
      const hasError = vue.ref(false);
      const fmtPx = (sz) => sz && /^\d+$/.test(sz.trim()) ? sz.trim() + "px" : sz;
      const classes = vue.computed(() => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`);
      const defaultStyle = vue.computed(() => {
        const size = { width: fmtPx(props.width), height: fmtPx(props.height) };
        Object.keys(size).forEach((key) => size[key] == void 0 && delete size[key]);
        return size;
      });
      const imgClass = vue.computed(
        () => [
          "q-img__image",
          props.imgClass,
          `q-img__image--with${props.noTransition === true ? "out" : ""}-transition`,
          isLoaded.value ? "q-img__image--loaded" : null
        ]
      );
      const imgStyle = vue.computed(() => ({
        ...props.imgStyle,
        objectFit: props.fit,
        objectPosition: props.position
      }));
      vue.watch(() => props.src, (src) => {
        imgSrc.value = src;
        isLoading.value = true;
        isLoaded.value = false;
        hasError.value = false;
      });
      formatAppLog("log", "at uni_modules/kv-qui/components/q-img/q-img.vue:150", defaultStyle.value);
      const onLoad = (evt) => {
        const { width: width2, height } = evt.detail;
        naturalRatio.value = height == 0 ? 0.5 : width2 / height;
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
        formatAppLog("log", "at uni_modules/kv-qui/components/q-img/q-img.vue:170", "onError", err);
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
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_spinner = resolveEasycom(vue.resolveDynamicComponent("q-spinner"), __easycom_1$9);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle([_ctx.defaultStyle, _ctx.styles]),
      role: "img",
      "aria-label": _ctx.alt
    }, [
      _ctx.ratioStyle ? (vue.openBlock(), vue.createElementBlock("view", {
        class: "q-img__ratio",
        style: vue.normalizeStyle(_ctx.ratioStyle),
        key: "filler"
      }, null, 4)) : vue.createCommentVNode("v-if", true),
      _ctx.isLoading ? (vue.openBlock(), vue.createElementBlock("div", {
        key: _ctx.loading,
        class: "q-img__loading absolute-full flex flex-center"
      }, [
        _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : vue.createCommentVNode("v-if", true),
        _ctx.noSpinner !== true ? (vue.openBlock(), vue.createBlock(_component_q_spinner, {
          key: 1,
          size: _ctx.spinnerSize,
          color: _ctx.spinnerColor
        }, null, 8, ["size", "color"])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "q-img__container absolute-full" }, [
        vue.createElementVNode("image", {
          src: _ctx.imgSrc,
          class: vue.normalizeClass(_ctx.imgClass),
          style: vue.normalizeStyle(_ctx.imgStyle),
          crossorigin: _ctx.crossorigin,
          draggable: _ctx.draggable,
          "aria-hidden": "true",
          mode: _ctx.mode,
          onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoad && _ctx.onLoad(...args)),
          onError: _cache[1] || (_cache[1] = (...args) => _ctx.onError && _ctx.onError(...args))
        }, null, 46, ["src", "crossorigin", "draggable", "mode"])
      ]),
      vue.createElementVNode("view", { class: "q-img__content absolute-full q-anchor--skip" }, [
        _ctx.hasError ? vue.renderSlot(_ctx.$slots, "error", { key: 0 }) : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
      ])
    ], 14, ["aria-label"]);
  }
  const __easycom_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$y], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-img/q-img.vue"]]);
  const _sfc_main$z = {
    data() {
      return {
        imgid: 0,
        width: 0,
        height: 0
      };
    },
    mounted() {
      this.setImgSize();
    },
    methods: {
      changeId() {
        this.imgid = Math.ceil(Math.random() * 1e3);
      },
      random(minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      },
      setImgSize() {
        this.width = this.random(100, 200);
        this.height = this.random(50, 200);
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_img = resolveEasycom(vue.resolveDynamicComponent("q-img"), __easycom_5$1);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Custom aspect ratio" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "row q-col-gutter-x-sm q-ma-sm" }, [
            vue.createElementVNode("div", { class: "col-4" }, [
              vue.createTextVNode(" Ratio: 16/9 "),
              vue.createVNode(_component_q_img, {
                src: "https://placeimg.com/500/300/nature",
                ratio: 16 / 9
              })
            ]),
            vue.createElementVNode("div", { class: "col-4" }, [
              vue.createTextVNode(" Ratio: 1 "),
              vue.createVNode(_component_q_img, {
                src: "https://placeimg.com/500/300/nature",
                ratio: 1
              })
            ]),
            vue.createElementVNode("div", { class: "col-4" }, [
              vue.createTextVNode(" Ratio: 4/3 "),
              vue.createVNode(_component_q_img, {
                src: "https://placeimg.com/500/300/nature",
                ratio: 4 / 3
              })
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Caption" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-col-gutter-md row items-start" }, [
            vue.createElementVNode("div", { class: "col-6" }, [
              vue.createVNode(_component_q_img, { src: "https://cdn.quasar.dev/img/parallax2.jpg" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "absolute-bottom text-subtitle1 text-center" }, " Caption ")
                ]),
                _: 1
              })
            ]),
            vue.createElementVNode("div", { class: "col-6" }, [
              vue.createVNode(_component_q_img, { src: "https://cdn.quasar.dev/img/parallax2.jpg" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "absolute-top text-center" }, " Caption ")
                ]),
                _: 1
              })
            ]),
            vue.createElementVNode("div", { class: "col-6" }, [
              vue.createVNode(_component_q_img, { src: "https://cdn.quasar.dev/img/parallax2.jpg" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "absolute-bottom-right text-subtitle2" }, " Caption ")
                ]),
                _: 1
              })
            ]),
            vue.createElementVNode("div", { class: "col-6" }, [
              vue.createVNode(_component_q_img, { src: "https://cdn.quasar.dev/img/parallax2.jpg" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "absolute-full text-subtitle2 flex flex-center" }, " Caption ")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "\u56FE\u7247" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_img, {
            class: "bg-grey-4",
            src: `https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random1/${$data.imgid}.png`,
            error: "https://suan.qxtky.com/static/user/default.jpg"
          }, null, 8, ["src"]),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.changeId && $options.changeId(...args))
          }, "\u5237\u65B0"),
          vue.createElementVNode("view", { class: "q-pa-sm" }, " \u539F\u59CB\u5C3A\u5BF8\uFF1Awidth=" + vue.toDisplayString($data.width) + " height=" + vue.toDisplayString($data.height), 1),
          vue.createElementVNode("view", { class: "q-py-sm" }, [
            vue.createVNode(_component_q_img, {
              src: `https://placeimg.com/${$data.width}/${$data.height}/nature`,
              id: "orignal",
              class: "bg-green-4"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "" }, "\u4E0D\u8BBE\u7F6E\u5927\u5C0F")
          ]),
          vue.createElementVNode("view", { class: "q-py-sm" }, [
            vue.createVNode(_component_q_img, {
              src: `https://placeimg.com/${$data.width}/${$data.height}/nature`,
              width: " 200 ",
              height: "80",
              id: "orignal",
              class: "bg-grey"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", null, '\u8BBE\u7F6E\uFF1Awidth="200" height="80"')
          ]),
          vue.createElementVNode("button", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.setImgSize && $options.setImgSize(...args))
          }, "\u5237\u65B0")
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsImg = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$x], ["__file", "E:/AppProject/qui-demo/pages/components/img.vue"]]);
  const _sfc_main$y = {
    name: "QBtnGroup",
    props: {
      unelevated: Boolean,
      outline: Boolean,
      flat: Boolean,
      rounded: Boolean,
      square: Boolean,
      push: Boolean,
      stretch: Boolean,
      glossy: Boolean,
      spread: Boolean
    },
    setup(props) {
      const classes = vue.computed(() => {
        const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
        return `q-btn-group row no-wrap${cls.length > 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
      });
      return {
        classes
      };
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass($setup.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$w], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-btn-group/q-btn-group.vue"]]);
  const _sfc_main$x = {
    data() {
      return {
        progress: [
          { loading: false, percentage: 0 },
          { loading: false, percentage: 0 },
          { loading: false, percentage: 0 }
        ]
      };
    },
    methods: {
      startComputing(i) {
        this.progress[i].loading = true;
        this.progress[i].times = setInterval(() => {
          this.progress[i].percentage += Math.floor(Math.random() * 8 + 10);
          if (this.progress[i].percentage >= 100) {
            clearInterval(this.progress[i].times);
            this.progress[i].loading = false;
            this.progress[i].percentage = 0;
          }
        }, 700);
      },
      onClick(evt) {
        formatAppLog("log", "at pages/components/btn.vue:169", "\u70B9\u51FB\u4E86\uFF01");
      },
      onRippel(evt) {
        this.$refs.ripple.ripple(evt);
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_avatar = resolveEasycom(vue.resolveDynamicComponent("q-avatar"), __easycom_4$2);
    const _component_q_spinner = resolveEasycom(vue.resolveDynamicComponent("q-spinner"), __easycom_1$9);
    const _component_q_btn_group = resolveEasycom(vue.resolveDynamicComponent("q-btn-group"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "With Icon" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-gutter-sm" }, [
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "primary",
              icon: "mail",
              label: "On Left"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "secondary",
              "icon-right": "mail",
              label: "On Right"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "red",
              icon: "mail",
              "icon-right": "send",
              label: "On Left and Right"
            }),
            vue.createElementVNode("br"),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              icon: "phone",
              label: "Stacked",
              stack: "",
              glossy: "",
              color: "purple"
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Link" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-gutter-sm" }, [
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "primary",
              label: "\u5185\u90E8\u8FDE\u63A5",
              to: "/pages/components/card"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "primary",
              label: "URL\u8FDE\u63A5",
              href: "http://dictbag.com"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "primary",
              label: "\u5C0F\u7A0B\u5E8F\u8FDE\u63A5",
              mp: "wxa91ff29be8dbb11c://pages/components/btn?id=12"
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Shap" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-gutter-sm" }, [
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "primary",
              icon: "shopping_cart"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              color: "secondary",
              icon: "navigation"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              round: "",
              color: "amber",
              glossy: "",
              "text-color": "black",
              icon: "layers_clear"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              round: "",
              color: "brown-5",
              icon: "directions"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              round: "",
              color: "deep-orange",
              icon: "edit_location"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              square: "",
              color: "purple",
              glossy: "",
              icon: "local_grocery_store"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              square: "",
              color: "black",
              icon: "my_location"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              round: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_avatar, { size: "42px" }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Design" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-pa-md q-gutter-sm" }, [
            vue.createVNode(_component_q_btn, {
              class: "uni",
              flat: "",
              color: "primary",
              label: "Flat"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              flat: "",
              rounded: "",
              color: "primary",
              label: "Flat Rounded"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              flat: "",
              round: "",
              color: "primary",
              icon: "card_giftcard"
            }),
            vue.createElementVNode("br"),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              outline: "",
              color: "primary",
              label: "Outline"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              outline: "",
              rounded: "",
              color: "primary",
              label: "Outline Rounded"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              outline: "",
              round: "",
              color: "primary",
              icon: "card_giftcard"
            }),
            vue.createElementVNode("br"),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              push: "",
              color: "primary",
              label: "Push"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              push: "",
              color: "primary",
              round: "",
              icon: "card_giftcard"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              push: "",
              color: "white",
              "text-color": "primary",
              label: "Push"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              push: "",
              color: "white",
              "text-color": "primary",
              round: "",
              icon: "card_giftcard"
            }),
            vue.createElementVNode("br"),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              unelevated: "",
              color: "primary",
              label: "Unelevated"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              unelevated: "",
              rounded: "",
              color: "primary",
              label: "Unelevated Rounded"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              unelevated: "",
              round: "",
              color: "primary",
              icon: "card_giftcard"
            }),
            vue.createElementVNode("br"),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              "no-caps": "",
              color: "primary",
              label: "No caps"
            }),
            vue.createElementVNode("br"),
            vue.createVNode(_component_q_btn, {
              class: "uni glossy",
              color: "teal",
              label: "Glossy"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni glossy",
              rounded: "",
              color: "deep-orange",
              label: "Glossy Rounded"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni glossy",
              round: "",
              color: "primary",
              icon: "card_giftcard"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni glossy",
              round: "",
              color: "secondary",
              icon: "local_florist"
            }),
            vue.createVNode(_component_q_btn, {
              class: "uni glossy",
              round: "",
              color: "deep-orange",
              icon: "local_activity"
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "\u52A0\u8F7D\u4E0E\u8FDB\u5EA6" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-pa-md q-gutter-sm" }, [
            vue.createVNode(_component_q_btn, {
              class: "uni",
              loading: $data.progress[0].loading,
              percentage: $data.progress[0].percentage,
              color: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.startComputing(0)),
              style: { "width": "150px" }
            }, {
              loading: vue.withCtx(() => [
                vue.createVNode(_component_q_spinner, { class: "on-left" }),
                vue.createTextVNode(" Computing... ")
              ]),
              default: vue.withCtx(() => [
                vue.createTextVNode(" Compute PI ")
              ]),
              _: 1
            }, 8, ["loading", "percentage"]),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              round: "",
              loading: $data.progress[1].loading,
              percentage: $data.progress[1].percentage,
              color: "secondary",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.startComputing(1)),
              icon: "cloud_upload"
            }, null, 8, ["loading", "percentage"]),
            vue.createVNode(_component_q_btn, {
              class: "uni",
              unelevated: "",
              loading: $data.progress[2].loading,
              percentage: $data.progress[2].percentage,
              "dark-percentage": "",
              color: "orange",
              "text-color": "grey-9",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.startComputing(2)),
              icon: "cloud_upload",
              style: { "width": "100px" }
            }, null, 8, ["loading", "percentage"])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Button Group" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-gutter-md" }, [
            vue.createVNode(_component_q_btn_group, {
              class: "uni",
              push: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  push: "",
                  label: "First",
                  icon: "timeline"
                }),
                vue.createVNode(_component_q_btn, {
                  push: "",
                  label: "Second",
                  icon: "visibility"
                }),
                vue.createVNode(_component_q_btn, {
                  push: "",
                  label: "Third",
                  icon: "update"
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn_group, {
              class: "uni",
              push: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  color: "yellow",
                  glossy: "",
                  "text-color": "black",
                  push: "",
                  label: "First",
                  icon: "verified_user"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "amber",
                  glossy: "",
                  "text-color": "black",
                  push: "",
                  label: "Second"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "orange",
                  glossy: "",
                  "text-color": "black",
                  push: "",
                  label: "Third"
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn_group, {
              class: "uni",
              outline: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  outline: "",
                  color: "brown",
                  label: "First"
                }),
                vue.createVNode(_component_q_btn, {
                  outline: "",
                  color: "brown",
                  label: "Second",
                  "icon-right": "watch_later"
                }),
                vue.createVNode(_component_q_btn, {
                  outline: "",
                  color: "brown",
                  label: "Third"
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn_group, { class: "uni" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  color: "secondary",
                  glossy: "",
                  label: "First"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "secondary",
                  glossy: "",
                  label: "Second"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "secondary",
                  glossy: "",
                  label: "Third"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "secondary",
                  glossy: "",
                  label: "Fourth"
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn_group, { class: "uni" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  color: "accent",
                  icon: "timeline"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "accent",
                  icon: "visibility"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "accent",
                  icon: "update"
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn_group, {
              class: "uni",
              rounded: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  color: "amber",
                  rounded: "",
                  glossy: "",
                  icon: "timeline"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "amber",
                  rounded: "",
                  glossy: "",
                  icon: "visibility"
                }),
                vue.createVNode(_component_q_btn, {
                  color: "amber",
                  rounded: "",
                  glossy: "",
                  "icon-right": "update",
                  label: "Update"
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsBtn = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$v], ["__file", "E:/AppProject/qui-demo/pages/components/btn.vue"]]);
  const _sfc_main$w = {};
  function _sfc_render$u(_ctx, _cache) {
    const _component_q_badge = resolveEasycom(vue.resolveDynamicComponent("q-badge"), __easycom_2$3);
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Basic" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_badge, { color: "blue" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" #4D96F2 ")
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_badge, {
            color: "orange",
            "text-color": "black",
            label: "2"
          }),
          vue.createVNode(_component_q_badge, { color: "purple" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_icon, {
                name: "bluetooth",
                color: "white"
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_badge, { color: "red" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 12 "),
              vue.createVNode(_component_q_icon, {
                name: "warning",
                color: "white",
                class: "q-ml-xs"
              })
            ]),
            _: 1
          }),
          vue.createElementVNode("div", { class: "text-h6" }, [
            vue.createTextVNode(" Badge "),
            vue.createVNode(_component_q_badge, { color: "primary" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v1.0.0+")
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", null, [
            vue.createTextVNode(" Feature "),
            vue.createVNode(_component_q_badge, { color: "primary" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v1.0.0+")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Aligned" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "text-h4" }, [
            vue.createTextVNode(" Title "),
            vue.createVNode(_component_q_badge, { align: "top" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("cli v1.0.0")
              ]),
              _: 1
            })
          ]),
          vue.createVNode(_component_q_separator),
          vue.createElementVNode("div", { class: "text-h4" }, [
            vue.createTextVNode(" Title "),
            vue.createVNode(_component_q_badge, { align: "middle" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("app v1.0.0")
              ]),
              _: 1
            })
          ]),
          vue.createVNode(_component_q_separator),
          vue.createElementVNode("div", { class: "text-h4" }, [
            vue.createTextVNode(" Title "),
            vue.createVNode(_component_q_badge, { align: "bottom" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("docs v1.0.0")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Floating & Transparent" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-pa-sm" }, [
            vue.createVNode(_component_q_btn, {
              push: "",
              color: "white",
              "text-color": "primary",
              label: "Unread Mails"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_badge, {
                  color: "orange",
                  floating: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("22")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn, {
              dense: "",
              color: "purple",
              round: "",
              icon: "email",
              class: "q-ml-md"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_badge, {
                  color: "red",
                  floating: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("4")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("view", { class: "q-pa-sm" }, [
            vue.createVNode(_component_q_btn, {
              color: "teal",
              size: "sm",
              label: "Unread Mails"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_badge, {
                  color: "orange",
                  floating: "",
                  transparent: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" \u221E ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn, {
              dense: "",
              round: "",
              flat: "",
              icon: "email"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_badge, {
                  color: "red",
                  floating: "",
                  transparent: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" 4 ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createElementVNode("div", { class: "text-h4" }, [
              vue.createTextVNode(" Title "),
              vue.createVNode(_component_q_badge, {
                transparent: "",
                align: "middle",
                color: "orange"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" app v3.0.0 ")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Style" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_badge, {
            outline: "",
            color: "primary",
            label: "Outline"
          }),
          vue.createVNode(_component_q_badge, {
            outline: "",
            color: "orange",
            label: "Outline"
          }),
          vue.createVNode(_component_q_badge, {
            outline: "",
            color: "secondary",
            label: "Outline"
          }),
          vue.createElementVNode("div", { class: "text-h4" }, [
            vue.createTextVNode(" Text "),
            vue.createVNode(_component_q_badge, {
              outline: "",
              align: "middle",
              color: "teal"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" v2.0.0 ")
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("view", { class: "q-pa-sm" }, [
            vue.createVNode(_component_q_badge, {
              rounded: "",
              color: "red",
              label: "1"
            }),
            vue.createVNode(_component_q_badge, {
              rounded: "",
              color: "primary",
              label: "999+"
            }),
            vue.createVNode(_component_q_badge, {
              rounded: "",
              color: "orange",
              label: "Round"
            })
          ]),
          vue.createElementVNode("view", { class: "q-pa-sm" }, [
            vue.createVNode(_component_q_badge, {
              rounded: "",
              color: "yellow"
            }),
            vue.createVNode(_component_q_badge, {
              rounded: "",
              color: "green"
            }),
            vue.createVNode(_component_q_badge, {
              rounded: "",
              color: "red"
            }),
            vue.createElementVNode("div", { class: "q-gutter-md q-ml-none" }, [
              vue.createVNode(_component_q_btn, {
                round: "",
                icon: "notifications"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_badge, {
                    floating: "",
                    color: "red",
                    rounded: ""
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_btn, { color: "blue" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Notifications "),
                  vue.createVNode(_component_q_badge, {
                    color: "red",
                    rounded: "",
                    floating: ""
                  })
                ]),
                _: 1
              })
            ]),
            vue.createElementVNode("div", null, [
              vue.createVNode(_component_q_badge, {
                color: "blue",
                rounded: "",
                class: "q-mr-sm"
              }),
              vue.createTextVNode("Status ")
            ])
          ])
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsBadge = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$u], ["__file", "E:/AppProject/qui-demo/pages/components/badge.vue"]]);
  const _sfc_main$v = {
    name: "QCardSection",
    props: {
      ...useAttrProps,
      horizontal: Boolean
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["q-card__section", [`q-card__section--${$props.horizontal === true ? "horiz row no-wrap" : "vert"}`, _ctx.className]]),
      style: vue.normalizeStyle(_ctx.styles)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$t], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-card-section/q-card-section.vue"]]);
  const _sfc_main$u = {
    name: "QCard",
    props: {
      ...useDarkProps,
      ...useAttrProps,
      tag: {
        type: String,
        default: "view"
      },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean
    },
    setup(props, {
      slots
    }) {
      const { proxy: { $q } } = vue.getCurrentInstance();
      const isDark = useDark(props, $q);
      const classes = vue.computed(() => {
        let cls = "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props.bordered === true ? " q-card--bordered" : "") + (props.square === true ? " q-card--square no-border-radius" : "") + (props.flat === true ? " q-card--flat no-shadow" : "");
        return [cls, props.className];
      });
      const styles = vue.computed(() => {
        return props.styles;
      });
      return {
        classes,
        styles
      };
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass($setup.classes),
      style: vue.normalizeStyle($setup.styles)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$s], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-card/q-card.vue"]]);
  const _sfc_main$t = createComponent({
    name: "QCardActions",
    props: {
      ...useAlignProps,
      vertical: Boolean
    },
    setup(props, { slots }) {
      const alignClass = useAlign(props);
      const classes = vue.computed(
        () => `q-card__actions ${alignClass.value} q-card__actions--${props.vertical === true ? "vert column" : "horiz row"}`
      );
      return {
        classes
      };
    }
  });
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$r], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-card-actions/q-card-actions.vue"]]);
  const _sfc_main$s = createComponent({
    name: "QItemSection",
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean
    },
    setup(props, { slots }) {
      const classes = vue.computed(
        () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
      );
      return {
        classes
      };
    }
  });
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$q], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-item-section/q-item-section.vue"]]);
  function shouldIgnoreKey(evt) {
    return evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
  }
  function isKeyCode(evt, keyCodes) {
    return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes).includes(evt.keyCode);
  }
  const _sfc_main$r = createComponent({
    name: "QItem",
    props: {
      ...useDarkProps,
      ...useLinkProps,
      tag: {
        type: String,
        default: "div"
      },
      active: {
        type: Boolean,
        default: null
      },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      ripple: Boolean,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean
    },
    emits: ["click", "keyup"],
    setup(props, {
      slots,
      emit
    }) {
      const { proxy: { $q } } = vue.getCurrentInstance();
      const isDark = useDark(props, $q);
      const {
        hasLink,
        linkClass,
        linkActive,
        linkAttrs
      } = useLink(props);
      const rootRef = vue.ref(null);
      const blurTargetRef = vue.ref(null);
      const isActionable = vue.computed(
        () => props.clickable === true || hasLink.value === true
      );
      const isClickable = vue.computed(
        () => props.disable !== true && isActionable.value === true
      );
      const classes = vue.computed(
        () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
      );
      const style = vue.computed(() => {
        if (props.insetLevel === void 0) {
          return null;
        }
        const dir = $q.lang.rtl === true ? "Right" : "Left";
        return {
          ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
        };
      });
      return {
        rootRef,
        blurTargetRef,
        classes,
        style,
        isKeyCode,
        hasLink,
        linkClass,
        linkActive,
        linkAttrs
      };
    },
    methods: {
      onKeyup(e) {
        const { isClickable, isKeyCode: isKeyCode2 } = this;
        if (isClickable && isKeyCode2(e, 13) === true) {
          stopAndPrevent(e);
          e.qKeyEvent = true;
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          this.onClick(evt);
        }
        this.$emit("keyup", e);
      },
      onClick(evt) {
        const { isClickable, hasLink, linkAttrs } = this;
        if (isClickable) {
          if (this.$refs.rippleRef) {
            this.$refs.rippleRef.ripple(evt);
          }
          if (hasLink) {
            this.$uni.openUrl(linkAttrs);
          }
          this.$emit("click", evt);
        }
      }
    }
  });
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_ripple = resolveEasycom(vue.resolveDynamicComponent("q-ripple"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      role: "listitem",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
      onKeyup: _cache[1] || (_cache[1] = (...args) => _ctx.onKeyup && _ctx.onKeyup(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createElementVNode("view", {
        ref: _ctx.blurTargetRef,
        class: "q-focus-helper",
        tabindex: -1
      }, null, 512),
      !_ctx.disable && _ctx.ripple ? (vue.openBlock(), vue.createBlock(_component_q_ripple, {
        key: 0,
        class: "ripple",
        ref: "rippleRef"
      }, null, 512)) : vue.createCommentVNode("v-if", true)
    ], 34);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$p], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-item/q-item.vue"]]);
  const _sfc_main$q = createComponent({
    name: "QList",
    props: {
      ...useDarkProps,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: {
        type: String,
        default: "div"
      }
    },
    setup(props, { slots }) {
      const vm = vue.getCurrentInstance();
      const isDark = useDark(props, vm.proxy.$q);
      const classes = vue.computed(
        () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
      );
      return {
        classes
      };
    }
  });
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$o], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-list/q-list.vue"]]);
  function validatePosition(pos) {
    const parts = pos.split(" ");
    if (parts.length !== 2) {
      return false;
    }
    if (["top", "center", "bottom"].includes(parts[0]) !== true) {
      formatAppLog("error", "at uni_modules/kv-qui/utils/private/position-engine.js:13", "Anchor/Self position must start with one of top/center/bottom");
      return false;
    }
    if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
      formatAppLog("error", "at uni_modules/kv-qui/utils/private/position-engine.js:17", "Anchor/Self position must end with one of left/middle/right/start/end");
      return false;
    }
    return true;
  }
  function validateOffset(val) {
    if (!val) {
      return true;
    }
    if (val.length !== 2) {
      return false;
    }
    if (typeof val[0] !== "number" || typeof val[1] !== "number") {
      return false;
    }
    return true;
  }
  const _sfc_main$p = {
    name: "QMenu",
    components: {},
    inheritAttrs: false,
    props: {
      position: {
        type: [String, Array],
        default: ""
      },
      persistent: Boolean,
      autoClose: Boolean,
      separateClosePopup: Boolean,
      noRouteDismiss: Boolean,
      noRefocus: Boolean,
      noFocus: Boolean,
      fit: Boolean,
      cover: Boolean,
      square: Boolean,
      anchor: {
        type: String,
        validator: validatePosition
      },
      self: {
        type: String,
        validator: validatePosition
      },
      offset: {
        type: Array,
        validator: validateOffset
      },
      scrollTarget: {
        default: void 0
      },
      touchPosition: Boolean,
      maxHeight: {
        type: String,
        default: null
      },
      maxWidth: {
        type: String,
        default: null
      }
    },
    emits: [
      "click",
      "escapeKey"
    ],
    mounted() {
      uni.$on("close-popup", (evt) => {
        this.hide();
        formatAppLog("log", "at uni_modules/kv-qui/components/q-menu/q-menu.vue:91", "close-popup", evt);
      });
    },
    setup(props, { slots, emit, attrs }) {
      const vm = vue.getCurrentInstance();
      const { proxy } = vm;
      const { $q } = proxy;
      const visible = vue.ref(false);
      const isDark = useDark(props, $q);
      const menuClass = vue.computed(
        () => {
          const cls = [];
          if (props.square === true)
            cls.push("q-menu--square");
          if (isDark.value === true)
            cls.push("q-menu--dark q-dark");
          let pos = props.position;
          pos = (Array.isArray(pos) ? pos : pos.split(/\s+?/)).map((item) => {
            return "q-menu__" + item.trim();
          });
          return cls.concat(pos);
        }
      );
      const style = vue.reactive({});
      return {
        visible,
        menuClass,
        style
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      toggle(evt) {
        this.visible = !this.visible;
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      role: "menu",
      class: vue.normalizeClass(["q-menu", $setup.menuClass]),
      "mode-class": ["fade"],
      style: vue.normalizeStyle($setup.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6)), [
      [vue.vShow, $setup.visible]
    ]);
  }
  const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$n], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-menu/q-menu.vue"]]);
  const _sfc_main$o = createComponent({
    name: "QItemLabel",
    props: {
      overline: Boolean,
      caption: Boolean,
      header: Boolean,
      lines: [Number, String]
    },
    setup(props, { slots }) {
      const parsedLines = vue.computed(() => parseInt(props.lines, 10));
      const classes = vue.computed(
        () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
      );
      const style = vue.computed(() => {
        return props.lines !== void 0 && parsedLines.value > 1 ? {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": parsedLines.value
        } : null;
      });
      return {
        style,
        classes
      };
    }
  });
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$m], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-item-label/q-item-label.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        title: "Card Title",
        subTitle: "Subtitle by Kevin",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      };
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_card_section = resolveEasycom(vue.resolveDynamicComponent("q-card-section"), __easycom_2$2);
    const _component_q_card = resolveEasycom(vue.resolveDynamicComponent("q-card"), __easycom_3$2);
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_q_card_actions = resolveEasycom(vue.resolveDynamicComponent("q-card-actions"), __easycom_4$1);
    const _component_q_img = resolveEasycom(vue.resolveDynamicComponent("q-img"), __easycom_5$1);
    const _component_q_item_section = resolveEasycom(vue.resolveDynamicComponent("q-item-section"), __easycom_0$4);
    const _component_q_item = resolveEasycom(vue.resolveDynamicComponent("q-item"), __easycom_1$4);
    const _component_q_list = resolveEasycom(vue.resolveDynamicComponent("q-list"), __easycom_2$1);
    const _component_q_menu = resolveEasycom(vue.resolveDynamicComponent("q-menu"), __easycom_9);
    const _component_q_avatar = resolveEasycom(vue.resolveDynamicComponent("q-avatar"), __easycom_4$2);
    const _component_q_item_label = resolveEasycom(vue.resolveDynamicComponent("q-item-label"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Base" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "bg-orange-2 text-red q-pa-md" }, ' \u5C0F\u7A0B\u5E8F\u4E2D\u8BBE\u7F6EClass\u548Cstyle\u4F7F\u7528\uFF1AclassName="" styles="" '),
          vue.createVNode(_component_q_card, { class: "my-card" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, { className: "my-card text-white card-blue" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, vue.toDisplayString($data.title), 1),
                  vue.createElementVNode("div", { class: "text-subtitle2" }, vue.toDisplayString($data.subTitle), 1)
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, {
            dark: "",
            bordered: "",
            className: "bg-grey-9 my-card"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, vue.toDisplayString($data.title), 1),
                  vue.createElementVNode("div", { class: "text-subtitle2" }, vue.toDisplayString($data.subTitle), 1)
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_separator, {
                dark: "",
                inset: ""
              }),
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, {
            flat: "",
            bordered: "",
            className: "my-card"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, "Our Changing Planet")
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_separator, { inset: "" }),
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "With Actions" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_card, { className: "my-card bg-secondary text-white" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, "Our Changing Planet"),
                  vue.createElementVNode("div", { class: "text-subtitle2" }, "by John Doe")
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_separator, { dark: "" }),
              vue.createVNode(_component_q_card_actions, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 1")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 2")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, { class: "my-card" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, "Action Vertical"),
                  vue.createElementVNode("div", { class: "text-subtitle2" }, "by John Doe")
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_separator),
              vue.createVNode(_component_q_card_actions, { vertical: "" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 1")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 2")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, { className: "my-card bg-purple text-white" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, "Our Changing Planet"),
                  vue.createElementVNode("div", { class: "text-subtitle2" }, "by John Doe")
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_card_actions, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 1")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 2")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, { class: "my-card" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("img", { src: "https://cdn.quasar.dev/img/mountains.jpg" }),
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "text-h6" }, "Our Changing Planet"),
                  vue.createElementVNode("div", { class: "text-subtitle2" }, "by John Doe")
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, { class: "my-card" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_img, { src: "https://cdn.quasar.dev/img/parallax2.jpg" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "absolute-bottom text-subtitle2 text-center" }, " Title ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_card, {
            flat: "",
            bordered: "",
            class: "my-card bg-grey-1"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", { class: "row items-center no-wrap" }, [
                    vue.createElementVNode("div", { class: "col" }, [
                      vue.createElementVNode("div", { class: "text-h6" }, "Our Planet"),
                      vue.createElementVNode("div", { class: "text-subtitle2" }, "by John Doe")
                    ]),
                    vue.createElementVNode("div", { class: "col-auto" }, [
                      vue.createVNode(_component_q_btn, {
                        color: "grey-7",
                        round: "",
                        flat: "",
                        icon: "more_vert"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_q_menu, {
                            cover: "",
                            "auto-close": ""
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_component_q_list, null, {
                                default: vue.withCtx(() => [
                                  vue.createVNode(_component_q_item, { clickable: "" }, {
                                    default: vue.withCtx(() => [
                                      vue.createVNode(_component_q_item_section, null, {
                                        default: vue.withCtx(() => [
                                          vue.createTextVNode("Remove Card")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vue.createVNode(_component_q_item, { clickable: "" }, {
                                    default: vue.withCtx(() => [
                                      vue.createVNode(_component_q_item_section, null, {
                                        default: vue.withCtx(() => [
                                          vue.createTextVNode("Send Feedback")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vue.createVNode(_component_q_item, { clickable: "" }, {
                                    default: vue.withCtx(() => [
                                      vue.createVNode(_component_q_item_section, null, {
                                        default: vue.withCtx(() => [
                                          vue.createTextVNode("Share")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_separator),
              vue.createVNode(_component_q_card_actions, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 1")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_q_btn, { flat: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Action 2")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Basic horizontal" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-pa-md row items-start q-gutter-md" }, [
            vue.createVNode(_component_q_card, {
              class: "my-card",
              flat: "",
              bordered: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_card_section, { horizontal: "" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_card_section, { class: "q-pt-xs" }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", { class: "text-overline" }, "Overline"),
                        vue.createElementVNode("div", { class: "text-h5 q-mt-sm q-mb-xs" }, "Title"),
                        vue.createElementVNode("div", { class: "text-caption text-grey" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_card_section, { class: "col-5 flex flex-center" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_img, {
                          class: "rounded-borders",
                          src: "https://cdn.quasar.dev/img/parallax2.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_separator),
                vue.createVNode(_component_q_card_actions, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_btn, {
                      flat: "",
                      round: "",
                      icon: "event"
                    }),
                    vue.createVNode(_component_q_btn, { flat: "" }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" 7:30PM ")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_btn, {
                      flat: "",
                      color: "primary"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Reserve ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_card, {
              class: "my-card",
              flat: "",
              bordered: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, { avatar: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, null, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("img", { src: "https://cdn.quasar.dev/img/boy-avatar.png" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, null, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Title")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(" Subhead ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_separator),
                vue.createVNode(_component_q_card_section, { horizontal: "" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_card_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_separator, { vertical: "" }),
                    vue.createVNode(_component_q_card_section, { class: "col-4" }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_card, { class: "my-card" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_card_section, { horizontal: "" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_img, {
                      class: "col-5",
                      src: "https://cdn.quasar.dev/img/parallax1.jpg"
                    }),
                    vue.createVNode(_component_q_card_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString($data.lorem), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_separator),
                vue.createVNode(_component_q_card_actions, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_btn, {
                      flat: "",
                      round: "",
                      icon: "event"
                    }),
                    vue.createVNode(_component_q_btn, { flat: "" }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" 5:30PM ")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_btn, { flat: "" }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" 7:00PM ")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_btn, {
                      flat: "",
                      color: "primary"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Reserve ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_card, { class: "my-card" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_card_section, { horizontal: "" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_img, {
                      class: "col",
                      src: "https://cdn.quasar.dev/img/parallax2.jpg"
                    }),
                    vue.createVNode(_component_q_card_actions, {
                      vertical: "",
                      class: "justify-around"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          color: "red",
                          icon: "favorite"
                        }),
                        vue.createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          color: "accent",
                          icon: "bookmark"
                        }),
                        vue.createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          color: "primary",
                          icon: "share"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsCard = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$l], ["__file", "E:/AppProject/qui-demo/pages/components/card.vue"]]);
  const _sfc_main$m = {};
  function _sfc_render$k(_ctx, _cache) {
    const _component_q_item_section = resolveEasycom(vue.resolveDynamicComponent("q-item-section"), __easycom_0$4);
    const _component_q_item = resolveEasycom(vue.resolveDynamicComponent("q-item"), __easycom_1$4);
    const _component_q_list = resolveEasycom(vue.resolveDynamicComponent("q-list"), __easycom_2$1);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_item_label = resolveEasycom(vue.resolveDynamicComponent("q-item-label"), __easycom_3$1);
    const _component_q_avatar = resolveEasycom(vue.resolveDynamicComponent("q-avatar"), __easycom_4$2);
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Link" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_list, {
            bordered: "",
            separator: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_item, {
                clickable: "",
                ripple: "",
                to: "/pages/components/img"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_item_section, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u5185\u90E8\u8FDE\u63A5")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_item, {
                clickable: "",
                ripple: "",
                href: "https://taobao.com"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_item_section, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u5916\u90E8\u8FDE\u63A5")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_item, {
                clickable: "",
                ripple: "",
                href: "wxa91ff29be8dbb11c://pages/components/btn?id=12"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_item_section, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u5C0F\u7A0B\u5E8F\u8FDE\u63A5")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Basic" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: "q-pa-md",
            style: { "max-width": "350px" }
          }, [
            vue.createVNode(_component_q_list, {
              bordered: "",
              separator: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Single line item")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, { clickable: "" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, null, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Item with No ripple")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Caption")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { overline: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("OVERLINE")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, null, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Item with caption")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          vue.createTextVNode(" Dense "),
          vue.createElementVNode("div", {
            class: "q-pa-md",
            style: { "max-width": "350px" }
          }, [
            vue.createVNode(_component_q_list, {
              dense: "",
              bordered: "",
              padding: "",
              class: "rounded-borders"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Item ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Item ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Item ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          vue.createTextVNode(" On a dark background "),
          vue.createElementVNode("div", { class: "q-pa-md bg-grey-10 text-white q-mb-md" }, [
            vue.createVNode(_component_q_list, {
              dark: "",
              bordered: "",
              separator: "",
              style: { "max-width": "318px" }
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Single line item")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, null, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Item with caption")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Caption")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { overline: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("OVERLINE")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, null, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Item with caption")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          vue.createTextVNode(" Folder listing "),
          vue.createElementVNode("div", { class: "q-pa-md q-gutter-md" }, [
            vue.createVNode(_component_q_list, {
              bordered: "",
              padding: "",
              class: "rounded-borders",
              style: { "max-width": "350px" }
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_item_label, { header: "" }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("Folders")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, {
                      avatar: "",
                      top: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, {
                          icon: "folder",
                          color: "primary",
                          "text-color": "white"
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { lines: "1" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Photos")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("February 22nd, 2019")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, { side: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_icon, {
                          name: "info",
                          color: "green"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, {
                      avatar: "",
                      top: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, {
                          icon: "folder",
                          color: "orange",
                          "text-color": "white"
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { lines: "1" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Movies")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("March 1st, 2019")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, { side: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_icon, { name: "info" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, {
                      avatar: "",
                      top: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, {
                          icon: "folder",
                          color: "teal",
                          "text-color": "white"
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { lines: "1" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Photos")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("January 15th, 2019")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, { side: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_icon, { name: "info" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_separator, { spaced: "" }),
                vue.createVNode(_component_q_item_label, { header: "" }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("Files")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, {
                      avatar: "",
                      top: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, {
                          icon: "assignment",
                          color: "grey",
                          "text-color": "white"
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { lines: "1" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Expenses spreadsheet")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("March 2nd, 2019")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, { side: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_icon, { name: "info" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, {
                      avatar: "",
                      top: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, {
                          icon: "place",
                          color: "grey",
                          "text-color": "white"
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { lines: "1" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Places to visit")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("February 22, 2019")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, { side: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_icon, {
                          name: "info",
                          color: "amber"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_q_item, {
                  clickable: "",
                  ripple: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_q_item_section, {
                      avatar: "",
                      top: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_avatar, {
                          icon: "library_music",
                          color: "grey",
                          "text-color": "white"
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { lines: "1" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("My favorite song")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item_label, { caption: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("Singing it all day")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_q_item_section, { side: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_icon, { name: "info" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$k], ["__file", "E:/AppProject/qui-demo/pages/components/item.vue"]]);
  const field = {
    "Username": 4,
    "Password": 5,
    "Port": 7,
    "ProtocolHead": 1,
    "Protocol": 2,
    "Host": 6,
    "Pathname": 8,
    "URL": 0,
    "Querystring": 9,
    "Hash": 10
  };
  const regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?(\/?[^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
  const queryParse = function(qs) {
    var args = qs && typeof qs == "string" ? qs.split("&") : [];
    var vals = new Object();
    for (var i = 0; i < args.length; i++) {
      var nameVal = args[i].split("=");
      var temp = unescape(nameVal[1]).split("+");
      nameVal[1] = temp.join(" ");
      vals[nameVal[0]] = nameVal[1];
    }
    return vals;
  };
  const queryString = function(obj) {
    let str = "";
    if (typeof obj == "object") {
      for (let i in obj) {
        if (typeof obj[i] != "function" && typeof obj[i] != "object") {
          str += i + "=" + obj[i] + "&";
        } else if (typeof obj[i] == "object") {
          nextStr = "";
          str += changeSonType(i, obj[i]);
        }
      }
    }
    return str.replace(/&$/g, "");
  };
  const changeSonType = function(objName, objValue) {
    if (typeof objValue == "object") {
      for (let i in objValue) {
        if (typeof objValue[i] != "object") {
          let value = objName + "[" + i + "]=" + objValue[i];
          nextStr += encodeURI(value) + "&";
        } else {
          changeSonType(objName + "[" + i + "]", objValue[i]);
        }
      }
    }
    return nextStr;
  };
  const parseUrl = function(href, prms) {
    let url = {};
    let urlArr = regex.exec(href);
    for (let i in field) {
      let ki = field[i];
      let vo = urlArr[ki];
      url[i] = vo !== void 0 ? vo : "";
    }
    if (prms && typeof prms == "string") {
      prms = queryParse(prms);
    }
    url["Params"] = Object.assign({}, queryParse(url["Querystring"]), prms);
    url.Querystring = queryString(url["Params"]);
    url.setParam = function(name, val) {
      let param = {};
      if (typeof name == "object") {
        param = name;
      } else if (name && val !== void 0) {
        param[name] = val;
      }
      Object.assign(url.Params, param);
      url.Querystring = queryString(url["Params"]);
      return url;
    };
    url.toString = function(urlObj) {
      urlObj = urlObj || url;
      const urlStr = urlObj.ProtocolHead + urlObj.Username + (urlObj.Username ? ":" : "") + urlObj.Password + (urlObj.Username ? "@" : "") + urlObj.Host + (urlObj.Port ? ":" : "") + urlObj.Port + urlObj.Pathname + (urlObj.Pathname ? "?" : "") + urlObj.Querystring + (urlObj.Hash ? "#" : "") + urlObj.Hash;
      return urlStr;
    };
    return url;
  };
  function getOpenType(target) {
    const targInf = {
      "_blank": "navigate",
      "_self": "redirect",
      "_tab": "switchTab",
      "_top": "reLaunch",
      "_exit": "exit"
    };
    return target ? targInf[target] || target : "navigate";
  }
  function formatParam(evt, defaultOpts) {
    const prms = (evt && evt.currentTarget ? evt.currentTarget.dataset : evt && typeof evt == "string" ? { to: evt } : evt) || {};
    if (prms.query) {
      ["to", "mp", "href"].forEach((key) => {
        if (prms[key]) {
          prms[key] = parseUrl(prms[key]);
          prms[key].addParam(prms.query);
          prms[key] = prms[key].toString();
        }
      });
    }
    return Object.assign({}, defaultOpts, prms);
  }
  function openMp(evt) {
    let { mp, envVersion } = formatParam(evt);
    mp = parseUrl(mp);
    const { Params, Protocol } = mp;
    mp.ProtocolHead = "/";
    return new Promise((success, fail) => {
      uni.navigateToMiniProgram({
        appId: Protocol,
        path: mp.toString(),
        extraData: Params,
        envVersion,
        success,
        fail
      });
    });
  }
  function openUrl(evt) {
    let { href, to, mp, target, animate, duration, root } = formatParam(evt);
    target = getOpenType(target);
    let url = "";
    if (mp) {
      return openMp(evt);
    } else if (to) {
      url = to;
    } else if (href) {
      url = root + "?url=" + href;
    } else {
      return null;
    }
    return new Promise((success, fail) => {
      switch (target) {
        case "redirect":
          uni.redirectTo({ url, success, fail });
          break;
        case "switchTab":
          uni.switchTab({ url, success, fail });
          break;
        case "reLaunch":
          uni.reLaunch({ url, success, fail });
          break;
        default:
          uni.navigateTo({
            url,
            animationType: animate,
            animationDuration: duration,
            success,
            fail
          });
          break;
      }
    });
  }
  const _sfc_main$l = {
    name: "QLink",
    props: {
      ...useLinkProps
    },
    setup(props) {
      const linkPrms = useLink(props);
      return {
        ...linkPrms,
        getOpenType
      };
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "q-link" }, [
      _ctx.to ? (vue.openBlock(), vue.createElementBlock("navigator", {
        key: 0,
        url: _ctx.to,
        "open-type": $setup.getOpenType(this.target)
      }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 8, ["url", "open-type"])) : _ctx.mp ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$uni.openUrl({ mp: _ctx.mp }))
      }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : _ctx.href ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$uni.openUrl({ href: _ctx.href }))
      }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$j], ["__scopeId", "data-v-10e78182"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-link/q-link.vue"]]);
  const _sfc_main$k = {};
  function _sfc_render$i(_ctx, _cache) {
    const _component_q_link = resolveEasycom(vue.resolveDynamicComponent("q-link"), __easycom_0$3);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "QLink \u8FDE\u63A5\u7EC4\u4EF6" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_link, {
            to: "/pages/components/card",
            label: "\u5185\u90E8\u8FDE\u63A5"
          }),
          vue.createTextVNode(" - "),
          vue.createVNode(_component_q_link, {
            href: "https://cn.vuejs.org/",
            label: "\u5916\u90E8\u8FDE\u63A5"
          }),
          vue.createTextVNode(" - "),
          vue.createVNode(_component_q_link, {
            mp: "wxa91ff29be8dbb11c://pages/components/btn?id=12",
            label: "Wechat Mini Program"
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "JS\u65B9\u6CD5\u8DF3\u8F6C" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "q-gutter-md" }, [
            vue.createElementVNode("view", {
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
              "data-to": "/pages/components/btn?id=12"
            }, " JS\u8DF3\u8F6C\u8FDE\u63A5 "),
            vue.createElementVNode("view", {
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
              "data-root": "/pages/index/broswer",
              "data-url": "https://vip.qixingtang.com/show-513.html"
            }, " URL\u8DF3\u8F6C\u8FDE\u63A5 "),
            vue.createElementVNode("view", {
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
              "data-mp": "wxa91ff29be8dbb11c://pages/components/btn?id=12#test"
            }, " \u5C0F\u7A0B\u5E8F\u8DF3\u8F6C ")
          ])
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsLink = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$i], ["__file", "E:/AppProject/qui-demo/pages/components/link.vue"]]);
  const defaultSizes = {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 10,
    xl: 14
  };
  function width(val, reverse, $q) {
    return {
      transform: reverse === true ? `translateX(100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
    };
  }
  const _sfc_main$j = createComponent({
    name: "QLinearProgress",
    props: {
      ...useDarkProps,
      ...useSizeProps,
      value: {
        type: Number,
        default: 0
      },
      buffer: Number,
      color: String,
      trackColor: String,
      reverse: Boolean,
      stripe: Boolean,
      indeterminate: Boolean,
      query: Boolean,
      rounded: Boolean,
      animationSpeed: {
        type: [String, Number],
        default: 2100
      },
      instantFeedback: Boolean
    },
    setup(props, { slots }) {
      const { proxy } = vue.getCurrentInstance();
      const isDark = useDark(props, proxy.$q);
      const sizeStyle = useSize(props, defaultSizes);
      const motion = vue.computed(() => props.indeterminate === true || props.query === true);
      const widthReverse = vue.computed(() => props.reverse !== props.query);
      const style = vue.computed(() => ({
        ...sizeStyle.value !== null ? sizeStyle.value : {},
        "--q-linear-progress-speed": `${props.animationSpeed}ms`
      }));
      const classes = vue.computed(
        () => "q-linear-progress" + (props.color !== void 0 ? ` text-${props.color}` : "") + (props.reverse === true || props.query === true ? " q-linear-progress--reverse" : "") + (props.rounded === true ? " rounded-borders" : "")
      );
      const trackStyle = vue.computed(() => width(
        props.buffer !== void 0 ? props.buffer : 1,
        widthReverse.value,
        proxy.$q
      ));
      const trackClass = vue.computed(
        () => `q-linear-progress__track absolute-full q-linear-progress__track--with${props.instantFeedback === true ? "out" : ""}-transition q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
      );
      const modelStyle = vue.computed(() => width(
        motion.value === true ? 1 : props.value,
        widthReverse.value,
        proxy.$q
      ));
      const modelClass = vue.computed(
        () => `q-linear-progress__model absolute-full q-linear-progress__model--with${props.instantFeedback === true ? "out" : ""}-transition q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
      );
      const stripeStyle = vue.computed(() => ({
        width: `${props.value * 100}%`
      }));
      const stripeClass = vue.computed(
        () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"}`
      );
      return {
        classes,
        style,
        valuenow: props.indeterminate === true ? void 0 : props.value,
        trackClass,
        trackStyle,
        modelClass,
        modelStyle,
        motion,
        stripeClass,
        stripeStyle
      };
    }
  });
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      role: "progressbar",
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style),
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": _ctx.valuenow
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.trackClass),
        style: vue.normalizeStyle(_ctx.trackStyle)
      }, null, 6),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.modelClass),
        style: vue.normalizeStyle(_ctx.modelStyle)
      }, null, 6),
      _ctx.stripe && _ctx.motion === false ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(_ctx.stripeClass),
        style: vue.normalizeStyle(_ctx.stripeStyle)
      }, null, 6)) : vue.createCommentVNode("v-if", true)
    ], 14, ["aria-valuenow"]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$h], ["__scopeId", "data-v-16b653fd"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-linear-progress/q-linear-progress.vue"]]);
  const _sfc_main$i = {
    setup() {
      const progress = vue.ref(0.4);
      return {
        progress,
        randomize() {
          progress.value = Math.random();
        }
      };
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_q_linear_progress = resolveEasycom(vue.resolveDynamicComponent("q-linear-progress"), __easycom_1$3);
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Determined state" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-pa-md q-gutter-y-sm" }, [
            vue.createVNode(_component_q_btn, {
              size: "sm",
              color: "primary",
              onClick: $setup.randomize,
              label: "Change Model"
            }, null, 8, ["onClick"]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, { value: $setup.progress }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                value: $setup.progress,
                color: "warning"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                value: $setup.progress,
                color: "secondary"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                value: $setup.progress,
                rounded: "",
                color: "accent"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                value: $setup.progress,
                rounded: "",
                color: "purple",
                "track-color": "orange"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                value: $setup.progress,
                rounded: "",
                color: "negative"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", { class: "q-py-sm" }, [
              vue.createVNode(_component_q_separator, { spaced: "" })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                reverse: "",
                value: $setup.progress
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                reverse: "",
                value: $setup.progress,
                color: "warning"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                reverse: "",
                value: $setup.progress,
                color: "secondary"
              }, null, 8, ["value"])
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, {
        title: "Custom",
        "content-class": "q-gutter-y-sm"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_linear_progress, {
              size: "10px",
              value: $setup.progress
            }, null, 8, ["value"])
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_linear_progress, {
              rounded: "",
              size: "20px",
              value: $setup.progress,
              color: "warning"
            }, null, 8, ["value"])
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_linear_progress, {
              rounded: "",
              size: "15px",
              value: $setup.progress,
              color: "secondary"
            }, null, 8, ["value"])
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_linear_progress, {
              size: "25px",
              value: $setup.progress,
              color: "accent"
            }, null, 8, ["value"])
          ]),
          vue.createElementVNode("view", { class: "q-py-sm" }, [
            vue.createVNode(_component_q_separator, { spaced: "" })
          ]),
          vue.createElementVNode("view", null, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(["xs", "sm", "md", "lg", "xl"], (size, i) => {
              return vue.createVNode(_component_q_linear_progress, {
                key: size,
                size,
                value: $setup.progress,
                color: "primary",
                class: "q-my-sm",
                onClick: $setup.randomize
              }, null, 8, ["size", "value", "onClick"]);
            }), 64))
          ]),
          vue.createElementVNode("view", { class: "q-py-sm" }, [
            vue.createVNode(_component_q_separator, { spaced: "" })
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_linear_progress, {
              stripe: "",
              size: "10px",
              value: $setup.progress
            }, null, 8, ["value"])
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_linear_progress, {
              stripe: "",
              rounded: "",
              size: "20px",
              value: $setup.progress * 1.2,
              color: "warning"
            }, null, 8, ["value"])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Indeterminate state" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", { class: "q-pa-md q-gutter-y-sm" }, [
            vue.createVNode(_component_q_linear_progress, { indeterminate: "" }),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                indeterminate: "",
                color: "warning"
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                indeterminate: "",
                color: "secondary"
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                indeterminate: "",
                rounded: "",
                color: "accent"
              })
            ]),
            vue.createElementVNode("view", { class: "q-py-sm" }, [
              vue.createVNode(_component_q_separator, { spaced: "" })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                query: "",
                "track-color": "orange",
                color: "purple"
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_linear_progress, {
                query: "",
                color: "negative"
              })
            ])
          ])
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsLinear_progress = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$g], ["__file", "E:/AppProject/qui-demo/pages/components/linear_progress.vue"]]);
  function useFormChild({ validate, resetValidation, requiresQForm }) {
    const $form = vue.inject(formKey, false);
    if ($form !== false) {
      const { props, proxy } = vue.getCurrentInstance();
      Object.assign(proxy, { validate, resetValidation });
      vue.watch(() => props.disable, (val) => {
        if (val === true) {
          typeof resetValidation === "function" && resetValidation();
          $form.unbindComponent(proxy);
        } else {
          $form.bindComponent(proxy);
        }
      });
      vue.onMounted(() => {
        props.disable !== true && $form.bindComponent(proxy);
      });
      vue.onBeforeUnmount(() => {
        props.disable !== true && $form.unbindComponent(proxy);
      });
    } else if (requiresQForm === true) {
      formatAppLog("error", "at uni_modules/kv-qui/composables/use-form-child.js:35", "Parent QForm not found on useFormChild()!");
    }
  }
  const hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
  const testPattern = {
    date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
    time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
    fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
    timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
    email: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
    hexColor: (v) => hex.test(v),
    hexaColor: (v) => hexa.test(v),
    hexOrHexaColor: (v) => hexOrHexa.test(v),
    rgbColor: (v) => rgb.test(v),
    rgbaColor: (v) => rgba.test(v),
    rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
    hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
    hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
    anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
  };
  function debounce(fn, wait = 250, immediate) {
    let timeout;
    function debounced() {
      const args = arguments;
      const later = () => {
        timeout = void 0;
        if (immediate !== true) {
          fn.apply(this, args);
        }
      };
      clearTimeout(timeout);
      if (immediate === true && timeout === void 0) {
        fn.apply(this, args);
      }
      timeout = setTimeout(later, wait);
    }
    debounced.cancel = () => {
      clearTimeout(timeout);
    };
    return debounced;
  }
  function injectProp(target, propName, get, set) {
    Object.defineProperty(target, propName, {
      get,
      set,
      enumerable: true
    });
    return target;
  }
  const lazyRulesValues = [true, false, "ondemand"];
  const useValidateProps = {
    modelValue: {},
    error: {
      type: Boolean,
      default: null
    },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {
      type: [Boolean, String],
      validator: (v) => lazyRulesValues.includes(v)
    }
  };
  function useValidate(focused, innerLoading) {
    const { props, proxy } = vue.getCurrentInstance();
    const innerError = vue.ref(false);
    const innerErrorMessage = vue.ref(null);
    const isDirtyModel = vue.ref(null);
    useFormChild({ validate, resetValidation });
    let validateIndex = 0, unwatchRules;
    const hasRules = vue.computed(
      () => props.rules !== void 0 && props.rules !== null && props.rules.length > 0
    );
    const hasActiveRules = vue.computed(
      () => props.disable !== true && hasRules.value === true
    );
    const hasError = vue.computed(
      () => props.error === true || innerError.value === true
    );
    const errorMessage = vue.computed(() => typeof props.errorMessage === "string" && props.errorMessage.length > 0 ? props.errorMessage : innerErrorMessage.value);
    vue.watch(() => props.modelValue, () => {
      validateIfNeeded();
    });
    vue.watch(() => props.reactiveRules, (val) => {
      if (val === true) {
        if (unwatchRules === void 0) {
          unwatchRules = vue.watch(() => props.rules, () => {
            validateIfNeeded(true);
          });
        }
      } else if (unwatchRules !== void 0) {
        unwatchRules();
        unwatchRules = void 0;
      }
    }, { immediate: true });
    vue.watch(focused, (val) => {
      if (val === true) {
        if (isDirtyModel.value === null) {
          isDirtyModel.value = false;
        }
      } else if (isDirtyModel.value === false) {
        isDirtyModel.value = true;
        if (hasActiveRules.value === true && props.lazyRules !== "ondemand" && innerLoading.value === false) {
          debouncedValidate();
        }
      }
    });
    function resetValidation() {
      validateIndex++;
      innerLoading.value = false;
      isDirtyModel.value = null;
      innerError.value = false;
      innerErrorMessage.value = null;
      debouncedValidate.cancel();
    }
    function validate(val = props.modelValue) {
      if (hasActiveRules.value !== true) {
        return true;
      }
      const index = ++validateIndex;
      const setDirty = innerLoading.value !== true ? () => {
        isDirtyModel.value = true;
      } : () => {
      };
      const update = (err, msg) => {
        err === true && setDirty();
        innerError.value = err;
        innerErrorMessage.value = msg || null;
        innerLoading.value = false;
      };
      const promises = [];
      for (let i = 0; i < props.rules.length; i++) {
        const rule = props.rules[i];
        let res;
        if (typeof rule === "function") {
          res = rule(val, testPattern);
        } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
          res = testPattern[rule](val);
        }
        if (res === false || typeof res === "string") {
          update(true, res);
          return false;
        } else if (res !== true && res !== void 0) {
          promises.push(res);
        }
      }
      if (promises.length === 0) {
        update(false);
        return true;
      }
      innerLoading.value = true;
      return Promise.all(promises).then(
        (res) => {
          if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
            index === validateIndex && update(false);
            return true;
          }
          const msg = res.find((r) => r === false || typeof r === "string");
          index === validateIndex && update(msg !== void 0, msg);
          return msg === void 0;
        },
        (e) => {
          if (index === validateIndex) {
            formatAppLog("error", "at uni_modules/kv-qui/composables/private/use-validate.js:176", e);
            update(true);
          }
          return false;
        }
      );
    }
    function validateIfNeeded(changedRules) {
      if (hasActiveRules.value === true && props.lazyRules !== "ondemand" && (isDirtyModel.value === true || props.lazyRules !== true && changedRules !== true)) {
        debouncedValidate();
      }
    }
    const debouncedValidate = debounce(validate, 0);
    vue.onBeforeUnmount(() => {
      unwatchRules !== void 0 && unwatchRules();
      debouncedValidate.cancel();
    });
    Object.assign(proxy, { resetValidation, validate });
    injectProp(proxy, "hasError", () => hasError.value);
    return {
      isDirtyModel,
      hasRules,
      hasError,
      errorMessage,
      validate,
      resetValidation
    };
  }
  const listenerRE = /^on[A-Z]/;
  function useSplitAttrs(attrs, vnode) {
    const acc = {
      listeners: vue.ref({}),
      attributes: vue.ref({})
    };
    function update() {
      const attributes = {};
      const listeners = {};
      for (const key in attrs) {
        if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
          attributes[key] = attrs[key];
        }
      }
      for (const key in vnode.props) {
        if (listenerRE.test(key) === true) {
          listeners[key] = vnode.props[key];
        }
      }
      acc.attributes.value = attributes;
      acc.listeners.value = listeners;
    }
    vue.onBeforeUpdate(update);
    update();
    return acc;
  }
  var lookup = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    62,
    0,
    62,
    0,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    0,
    0,
    0,
    0,
    63,
    0,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
  ];
  function base64Decode(source, target) {
    var sourceLength = source.length;
    var paddingLength = source[sourceLength - 2] === "=" ? 2 : source[sourceLength - 1] === "=" ? 1 : 0;
    var tmp;
    var byteIndex = 0;
    var baseLength = sourceLength - paddingLength & 4294967292;
    for (var i = 0; i < baseLength; i += 4) {
      tmp = lookup[source.charCodeAt(i)] << 18 | lookup[source.charCodeAt(i + 1)] << 12 | lookup[source.charCodeAt(i + 2)] << 6 | lookup[source.charCodeAt(i + 3)];
      target[byteIndex++] = tmp >> 16 & 255;
      target[byteIndex++] = tmp >> 8 & 255;
      target[byteIndex++] = tmp & 255;
    }
    if (paddingLength === 1) {
      tmp = lookup[source.charCodeAt(i)] << 10 | lookup[source.charCodeAt(i + 1)] << 4 | lookup[source.charCodeAt(i + 2)] >> 2;
      target[byteIndex++] = tmp >> 8 & 255;
      target[byteIndex++] = tmp & 255;
    }
    if (paddingLength === 2) {
      tmp = lookup[source.charCodeAt(i)] << 2 | lookup[source.charCodeAt(i + 1)] >> 4;
      target[byteIndex++] = tmp & 255;
    }
  }
  const $inject_window_crypto = {
    getRandomValues(arr) {
      if (!(arr instanceof Int8Array || arr instanceof Uint8Array || arr instanceof Int16Array || arr instanceof Uint16Array || arr instanceof Int32Array || arr instanceof Uint32Array || arr instanceof Uint8ClampedArray)) {
        throw new Error("Expected an integer array");
      }
      if (arr.byteLength > 65536) {
        throw new Error("Can only request a maximum of 65536 bytes");
      }
      var crypto = requireNativePlugin("DCloud-Crypto");
      base64Decode(crypto.getRandomValues(arr.byteLength), new Uint8Array(
        arr.buffer,
        arr.byteOffset,
        arr.byteLength
      ));
      return arr;
    }
  };
  let buf, bufIdx = 0;
  const hexBytes = new Array(256);
  for (let i = 0; i < 256; i++) {
    hexBytes[i] = (i + 256).toString(16).substring(1);
  }
  const randomBytes = (() => {
    const lib = typeof $inject_window_crypto !== "undefined" ? $inject_window_crypto : typeof window !== "undefined" ? $inject_window_crypto || window.msCrypto : void 0;
    if (lib !== void 0) {
      if (lib.randomBytes !== void 0) {
        return lib.randomBytes;
      }
      if (lib.getRandomValues !== void 0) {
        return (n) => {
          const bytes = new Uint8Array(n);
          lib.getRandomValues(bytes);
          return bytes;
        };
      }
    }
    return (n) => {
      const r = [];
      for (let i = n; i > 0; i--) {
        r.push(Math.floor(Math.random() * 256));
      }
      return r;
    };
  })();
  const BUFFER_SIZE = 4096;
  function uid() {
    if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
      bufIdx = 0;
      buf = randomBytes(BUFFER_SIZE);
    }
    const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
    b[6] = b[6] & 15 | 64;
    b[8] = b[8] & 63 | 128;
    return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
  }
  function getTargetUid(val) {
    return val === void 0 ? `f_${uid()}` : val;
  }
  function fieldValueIsFilled(val) {
    return val !== void 0 && val !== null && ("" + val).length > 0;
  }
  const useFieldProps = {
    ...useDarkProps,
    ...useValidateProps,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: {
      type: [Number, String],
      default: 140
    }
  };
  const useFieldEmits = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
  function useFieldState() {
    const { props, attrs, proxy, vnode } = vue.getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    return {
      isDark,
      editable: vue.computed(
        () => props.disable !== true && props.readonly !== true
      ),
      innerLoading: vue.ref(false),
      focused: vue.ref(props.autofocus),
      hasPopupOpen: false,
      splitAttrs: useSplitAttrs(attrs, vnode),
      targetUid: vue.ref(getTargetUid(props.for)),
      rootRef: vue.ref(null),
      targetRef: vue.ref(null),
      controlRef: vue.ref(null)
    };
  }
  function useField(state) {
    const { props, emit, slots, attrs, proxy } = vue.getCurrentInstance();
    const { $q } = proxy;
    let focusoutTimer;
    if (state.hasValue === void 0) {
      state.hasValue = vue.computed(() => fieldValueIsFilled(props.modelValue));
    }
    if (state.emitValue === void 0) {
      state.emitValue = (value) => {
        emit("update:modelValue", value);
      };
    }
    if (state.controlEvents === void 0) {
      state.controlEvents = {
        onFocusin: onControlFocusin,
        onFocusout: onControlFocusout
      };
    }
    Object.assign(state, {
      clearValue,
      onControlFocusin,
      onControlFocusout
    });
    if (state.computedCounter === void 0) {
      state.computedCounter = vue.computed(() => {
        if (props.counter !== false) {
          const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? ("" + props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
          const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
          return len + (max !== void 0 ? " / " + max : "");
        }
      });
    }
    const {
      isDirtyModel,
      hasRules,
      hasError,
      errorMessage,
      resetValidation
    } = useValidate(state.focused, state.innerLoading);
    const floatingLabel = state.floatingLabel !== void 0 ? vue.computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : vue.computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
    const shouldRenderBottom = vue.computed(
      () => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null
    );
    const styleType = vue.computed(() => {
      if (props.filled === true) {
        return "filled";
      }
      if (props.outlined === true) {
        return "outlined";
      }
      if (props.borderless === true) {
        return "borderless";
      }
      if (props.standout) {
        return "standout";
      }
      return "standard";
    });
    const classes = vue.computed(
      () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : "")
    );
    const contentClass = vue.computed(
      () => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length > 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : "")
    );
    const hasLabel = vue.computed(
      () => props.labelSlot === true || props.label !== void 0
    );
    const labelClass = vue.computed(
      () => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : "")
    );
    const attributes = vue.computed(() => {
      const acc = {
        for: state.targetUid.value
      };
      if (props.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (props.readonly === true) {
        acc["aria-readonly"] = "true";
      }
      return acc;
    });
    vue.watch(() => props.for, (val) => {
      state.targetUid.value = getTargetUid(val);
    });
    function onControlFocusin(e) {
      clearTimeout(focusoutTimer);
      if (state.editable.value === true && state.focused.value === false) {
        state.focused.value = true;
        emit("focus", e);
      }
    }
    function onControlFocusout(e) {
      clearTimeout(focusoutTimer);
      focusoutTimer = setTimeout(() => {
        if (state.hasPopupOpen === true) {
          return;
        }
        if (state.focused.value === true) {
          state.focused.value = false;
          emit("blur", e);
        }
      });
    }
    function clearValue(e) {
      stopAndPrevent(e);
      if ($q.platform.is.mobile !== true) {
        state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
        state.focused.value = true;
      } else if (state.rootRef.value.contains(document.activeElement) === true) {
        document.activeElement.blur();
      }
      if (props.type === "file") {
        state.inputRef.value.value = null;
      }
      emit("update:modelValue", null);
      emit("clear", props.modelValue);
      vue.nextTick(() => {
        resetValidation();
        if ($q.platform.is.mobile !== true) {
          isDirtyModel.value = false;
        }
      });
    }
    const hasCounter = props.counter === true || slots.counter !== void 0;
    const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
      ...state.splitAttrs.attributes.value,
      "data-autofocus": props.autofocus === true || void 0,
      ...attributes.value
    } : attributes.value;
    return {
      state,
      classes,
      style: attrs.style,
      hasLabel,
      labelClass,
      labelAttrs,
      hasCounter,
      contentClass,
      appendClass: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
      shouldRenderBottom,
      errorMessage,
      clearValue,
      prevent
    };
  }
  const useFormProps = {
    name: String
  };
  function useFormInputNameAttr(props) {
    return vue.computed(() => props.name || props.for);
  }
  const _sfc_main$h = createComponent({
    name: "QInput",
    inheritAttrs: false,
    props: {
      ...useFieldProps,
      ...useFormProps,
      modelValue: {
        required: false
      },
      shadowText: String,
      type: {
        type: String,
        default: "text"
      },
      debounce: [String, Number],
      autogrow: Boolean,
      inputClass: [Array, String, Object],
      inputStyle: [Array, String, Object],
      password: Boolean,
      autoFocus: Boolean,
      confirmType: { type: String, default: "done" },
      confirmHold: Boolean,
      adjustPosition: { type: Boolean, default: true },
      autoBlur: Boolean
    },
    emits: [
      ...useFieldEmits,
      "paste",
      "change"
    ],
    setup(props, { emit }) {
      vue.getCurrentInstance();
      const inputRef = vue.ref(null);
      let innerValue = vue.ref(props.modelValue), valTimer;
      vue.watch(() => props.modelValue, (val) => {
        if (props.debounce !== void 0) {
          clearTimeout(valTimer);
          valTimer = setTimeout(() => {
            innerValue.value = val;
          }, props.debounce);
        } else {
          innerValue.value = val;
        }
      });
      const nameProp = useFormInputNameAttr(props);
      const hasValue = vue.computed(() => fieldValueIsFilled(innerValue.value));
      const state = useFieldState();
      const isTextarea = vue.computed(() => props.type === "textarea" || props.autogrow === true);
      let emitTimer, emitValueFn;
      function emitValue(val) {
        emitValueFn = () => {
          emit("update:modelValue", val);
        };
        if (props.debounce !== void 0) {
          clearTimeout(emitTimer);
          emitTimer = setTimeout(emitValueFn, props.debounce);
        } else {
          emitValueFn();
        }
      }
      function onInput(e) {
        if (!e || !e.detail)
          return;
        innerValue.value = e.detail.value;
        emitValue(innerValue.value);
      }
      function onConfirm(e) {
        innerValue.value = e.detail.value;
        emit("confirm", innerValue.value);
        emitValue(innerValue.value);
      }
      Object.assign(state, {
        fieldClass: vue.computed(
          () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
        ),
        hasShadow: vue.computed(
          () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length > 0
        ),
        inputRef,
        hasValue,
        floatingLabel: vue.computed(
          () => hasValue.value === true || fieldValueIsFilled(props.displayValue)
        )
      });
      const renderFn = useField(state);
      return {
        ...renderFn,
        nameProp,
        isTextarea,
        innerValue,
        onInput,
        onConfirm
      };
    }
  });
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_q_spinner = resolveEasycom(vue.resolveDynamicComponent("q-spinner"), __easycom_1$9);
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("label", {
      for: _ctx.labelAttrs.for,
      ref: _ctx.state.rootRef,
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style)
    }, [
      _ctx.$slots.before ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "q-field__before q-field__marginal row no-wrap items-center"
      }, [
        vue.renderSlot(_ctx.$slots, "before", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "q-field__inner relative-position col self-stretch" }, [
        vue.createElementVNode("view", {
          ref: _ctx.state.controlRef,
          class: vue.normalizeClass(_ctx.contentClass),
          tabindex: -1,
          onClick: _cache[9] || (_cache[9] = ($event) => _ctx.state.focused.value = true)
        }, [
          _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("view", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend"
          }, [
            vue.renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, [
            _ctx.prefix !== void 0 && _ctx.prefix !== null ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "q-field__prefix no-pointer-events row items-center"
            }, vue.toDisplayString(_ctx.prefix), 1)) : vue.createCommentVNode("v-if", true),
            _ctx.$slots.rawControl ? vue.renderSlot(_ctx.$slots, "rawControl", { key: 1 }, void 0, true) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" Input "),
            _ctx.isTextarea ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 2,
              ref: "inputRef",
              class: vue.normalizeClass(["q-field__native q-placeholder", _ctx.inputClass]),
              value: _ctx.innerValue,
              id: _ctx.state.targetUid.value,
              name: _ctx.nameProp,
              tabindex: 0,
              "data-autofocus": _ctx.autofocus === true || void 0,
              "aria-label": _ctx.label,
              maxlength: _ctx.maxlength,
              disabled: _ctx.disable === true,
              readonly: _ctx.readonly === true,
              style: vue.normalizeStyle([_ctx.inputStyle]),
              focus: _ctx.state.focused.value,
              "auto-height": _ctx.autogrow,
              "auto-focus": _ctx.autoFocus,
              onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
              onConfirm: _cache[1] || (_cache[1] = (...args) => _ctx.onConfirm && _ctx.onConfirm(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.state.controlEvents.onFocusin && _ctx.state.controlEvents.onFocusin(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.state.controlEvents.onFocusout && _ctx.state.controlEvents.onFocusout(...args))
            }, null, 46, ["value", "id", "name", "data-autofocus", "aria-label", "maxlength", "disabled", "readonly", "focus", "auto-height", "auto-focus"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 3,
              ref: "inputRef",
              class: vue.normalizeClass(["q-field__native q-placeholder", _ctx.inputClass]),
              type: _ctx.type,
              value: _ctx.innerValue,
              focus: _ctx.state.focused.value,
              id: _ctx.state.targetUid.value,
              name: _ctx.nameProp,
              tabindex: 0,
              "data-autofocus": _ctx.autofocus === true || void 0,
              "aria-label": _ctx.label,
              maxlength: _ctx.maxlength,
              disabled: _ctx.disable === true,
              readonly: _ctx.readonly === true,
              style: vue.normalizeStyle(_ctx.inputStyle),
              password: _ctx.password || _ctx.type == "password",
              "confirm-type": _ctx.confirmType,
              "confirm-hold": _ctx.confirmHold,
              "adjust-position": _ctx.adjustPosition,
              "auto-blur": _ctx.autoBlur,
              onInput: _cache[4] || (_cache[4] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
              onConfirm: _cache[5] || (_cache[5] = (...args) => _ctx.onConfirm && _ctx.onConfirm(...args)),
              onFocus: _cache[6] || (_cache[6] = (...args) => _ctx.state.controlEvents.onFocusin && _ctx.state.controlEvents.onFocusin(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => _ctx.state.controlEvents.onFocusout && _ctx.state.controlEvents.onFocusout(...args))
            }, null, 46, ["type", "value", "focus", "id", "name", "data-autofocus", "aria-label", "maxlength", "disabled", "readonly", "password", "confirm-type", "confirm-hold", "adjust-position", "auto-blur"])),
            _ctx.hasLabel === true ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 4,
              class: vue.normalizeClass(_ctx.labelClass)
            }, [
              _ctx.$slots.label ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
              ], 64))
            ], 2)) : vue.createCommentVNode("v-if", true)
          ]),
          _ctx.hasError === true && !_ctx.noErrorIcon ? (vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(_ctx.appendClass),
            key: "error"
          }, [
            vue.createVNode(_component_q_icon, {
              name: _ctx.$q.iconSet.field.error,
              color: "negative"
            }, null, 8, ["name"])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.loading === true || _ctx.state.innerLoading === true ? (vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(_ctx.appendClass),
            key: "inner-loading-append"
          }, [
            _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_q_spinner, {
              key: 1,
              color: _ctx.color
            }, null, 8, ["color"]))
          ], 2)) : _ctx.clearable === true && _ctx.state.hasValue === true && _ctx.state.editable === true ? (vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(_ctx.appendClass),
            key: "inner-clearable-append"
          }, [
            vue.createVNode(_component_q_btn, {
              class: "q-field__focusable-action",
              icon: _ctx.clearIcon || _ctx.$q.iconSet.field.clear,
              tabindex: 0,
              "aria-hidden": null,
              role: null,
              onClick: _ctx.clearValue
            }, null, 8, ["icon", "onClick"])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("view", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.prevent && _ctx.prevent(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "append", {}, void 0, true)
          ])) : vue.createCommentVNode("v-if", true)
        ], 2),
        vue.createCommentVNode(" Button "),
        _ctx.shouldRenderBottom === true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(`q-field__bottom row items-start q-field__bottom--${_ctx.hideBottomSpace !== true ? "animated" : "stale"}`),
          onClick: _cache[10] || (_cache[10] = (...args) => _ctx.prevent && _ctx.prevent(...args))
        }, [
          vue.createCommentVNode("  hideBottomSpace === true "),
          vue.createElementVNode("view", { class: "q-field__messages col" }, [
            _ctx.hasError ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _ctx.errorMessage !== null ? (vue.openBlock(), vue.createElementBlock("view", {
                role: "alert",
                key: `q--slot-error-${_ctx.errorMessage.value}`
              }, vue.toDisplayString(_ctx.errorMessage), 1)) : vue.renderSlot(_ctx.$slots, "error", { key: "q--slot-error" }, void 0, true)
            ], 64)) : _ctx.hideHint !== true || _ctx.state.focused.value === true ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _ctx.hint ? (vue.openBlock(), vue.createElementBlock("view", {
                key: `q--slot-hint-${_ctx.hint}`
              }, vue.toDisplayString(_ctx.hint), 1)) : vue.renderSlot(_ctx.$slots, "hint", { key: "q--slot-hint" }, void 0, true)
            ], 64)) : vue.createCommentVNode("v-if", true)
          ]),
          _ctx.hasCounter ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "q-field__counter"
          }, [
            _ctx.$slots.counter ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(vue.toDisplayString(_ctx.state.computedCounter.value), 1)
            ], 64))
          ])) : vue.createCommentVNode("v-if", true)
        ], 2)) : vue.createCommentVNode("v-if", true)
      ]),
      _ctx.$slots.after ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "q-field__after q-field__marginal row no-wrap items-center"
      }, [
        vue.renderSlot(_ctx.$slots, "after", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true)
    ], 14, ["for"]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$f], ["__scopeId", "data-v-f254b101"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-input/q-input.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        text: "",
        value: []
      };
    },
    methods: {
      focus() {
        formatAppLog("log", "at pages/components/input.vue:91", "focus-----");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_input = resolveEasycom(vue.resolveDynamicComponent("q-input"), __easycom_0$2);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, {
        title: "Input",
        "content-class": "q-gutter-y-sm"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_input, {
              modelValue: $data.text,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.text = $event),
              label: "counter",
              counter: ""
            }, null, 8, ["modelValue"])
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_input, {
              modelValue: $data.text,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.text = $event),
              label: "outlined",
              outlined: ""
            }, null, 8, ["modelValue"])
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_input, {
              modelValue: $data.text,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.text = $event),
              label: "filled & autogrow",
              filled: "",
              autogrow: ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Debounce \u9632\u6296" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_input, {
            modelValue: $data.text,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.text = $event),
            label: "\u8F93\u5165",
            debounce: 800
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      vue.createCommentVNode(' \r\n	<Lanmu title="Field \u5305\u88F9\u5668">\r\n		<view>\r\n			<view class="q-pa-md">\r\n				<q-field outlined color="purple-12" label="Label" stack-label>\r\n					<template v-slot:prepend>\r\n						<q-icon name="event" />\r\n					</template>\r\n					<template v-slot:control>\r\n						<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>\r\n					</template>\r\n				</q-field>\r\n			</view>\r\n\r\n			<view class="q-pa-md">\r\n				<q-field color="grey-3" label-color="orange" outlined label="Label" stack-label>\r\n					<template v-slot:append>\r\n						<q-icon name="event" color="orange" />\r\n					</template>\r\n					<template v-slot:control>\r\n						<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>\r\n					</template>\r\n				</q-field>\r\n			</view>\r\n\r\n			<view class="q-pa-md">\r\n				<q-field :model-value="text" bottom-slots label="Label" stack-label counter>\r\n					<template v-slot:prepend>\r\n						<q-icon name="place" />\r\n					</template>\r\n\r\n					<template v-slot:control>\r\n						<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>\r\n					</template>\r\n\r\n					<template v-slot:append>\r\n						<q-icon name="close" class="cursor-pointer" />\r\n					</template>\r\n\r\n					<template v-slot:hint>\r\n						Field hint\r\n					</template>\r\n				</q-field>\r\n			</view>\r\n\r\n			<view class="q-pa-md">\r\n				<q-field color="lime-11" bg-color="green" filled label="Label" stack-label>\r\n					<template v-slot:prepend>\r\n						<q-icon name="event" />\r\n					</template>\r\n					<template v-slot:control>\r\n						<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>\r\n					</template>\r\n				</q-field>\r\n			</view>\r\n		</view>\r\n	</Lanmu> '),
      vue.createVNode(_component_Lanmu, { title: "API" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("pre", null, "  focus -> autofocus\n  disabled -> disable\n  \n  \u652F\u6301\u539F\u751F\u53C2\u6570\uFF1A\n  confirm-type\n  confirm-hold\n  adjust-position\n  auto-blur\n")
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsInput = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$e], ["__file", "E:/AppProject/qui-demo/pages/components/input.vue"]]);
  let waitFlags = [];
  function addFocusFn(fn) {
    if (waitFlags.length === 0) {
      fn();
    }
  }
  const _sfc_main$f = createComponent({
    name: "QForm",
    inheritAttrs: false,
    props: {
      ...useAttrProps,
      autofocus: Boolean,
      noErrorFocus: Boolean,
      noResetFocus: Boolean,
      greedy: Boolean,
      onSubmit: Function
    },
    emits: ["reset", "validationSuccess", "validationError"],
    setup(props, { slots, emit, attrs }) {
      const vm = vue.getCurrentInstance();
      const rootRef = vue.ref(null);
      let validateIndex = 0;
      const registeredComponents = [];
      function validate(shouldFocus) {
        const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
        const index = ++validateIndex;
        const emitEvent = (res, ref) => {
          emit("validation" + (res === true ? "Success" : "Error"), ref);
        };
        const validateComponent = (comp) => {
          const valid = comp.validate();
          return typeof valid.then === "function" ? valid.then(
            (valid2) => ({
              valid: valid2,
              comp
            }),
            (err) => ({
              valid: false,
              comp,
              err
            })
          ) : Promise.resolve({
            valid,
            comp
          });
        };
        const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
          (acc, comp) => acc.then(() => {
            return validateComponent(comp).then((r) => {
              if (r.valid === false) {
                return Promise.reject(r);
              }
            });
          }),
          Promise.resolve()
        ).catch((error) => [error]);
        return errorsPromise.then((errors) => {
          if (errors === void 0 || errors.length === 0) {
            index === validateIndex && emitEvent(true);
            return true;
          }
          if (index === validateIndex) {
            const {
              comp,
              err
            } = errors[0];
            err !== void 0 && formatAppLog("error", "at uni_modules/kv-qui/components/q-form/q-form.vue:104", err);
            emitEvent(false, comp);
            if (focus2 === true) {
              const activeError = errors.find(({
                comp: comp2
              }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
              if (activeError !== void 0) {
                activeError.comp.focus();
              }
            }
          }
          return false;
        });
      }
      function resetValidation() {
        validateIndex++;
        registeredComponents.forEach((comp) => {
          typeof comp.resetValidation === "function" && comp.resetValidation();
        });
      }
      function submit(evt) {
        const index = validateIndex + 1;
        validate().then((val) => {
          if (index === validateIndex && val === true) {
            if (props.onSubmit !== void 0) {
              emit("submit", evt);
            } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
              evt.target.submit();
            }
          }
        });
      }
      function reset(evt) {
        emit("reset");
        vue.nextTick(() => {
          resetValidation();
          if (props.autofocus === true && props.noResetFocus !== true) {
            focus();
          }
        });
      }
      function focus() {
        addFocusFn(() => {
          if (rootRef.value === null) {
            return;
          }
          const target = rootRef.value.querySelector(
            "[autofocus][tabindex], [data-autofocus][tabindex]"
          ) || rootRef.value.querySelector(
            "[autofocus] [tabindex], [data-autofocus] [tabindex]"
          ) || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex > -1);
          target !== null && target !== void 0 && target.focus({
            preventScroll: true
          });
        });
      }
      vue.provide(formKey, {
        bindComponent(vmProxy) {
          registeredComponents.push(vmProxy);
        },
        unbindComponent(vmProxy) {
          const index = registeredComponents.indexOf(vmProxy);
          if (index > -1) {
            registeredComponents.splice(index, 1);
          }
        }
      });
      let shouldActivate = false;
      vue.onDeactivated(() => {
        shouldActivate = true;
      });
      vue.onActivated(() => {
        shouldActivate === true && props.autofocus === true && focus();
      });
      vue.onMounted(() => {
        props.autofocus === true && focus();
      });
      Object.assign(vm.proxy, {
        validate,
        resetValidation,
        submit,
        reset,
        focus,
        getValidationComponents: () => registeredComponents
      });
      formatAppLog("log", "at uni_modules/kv-qui/components/q-form/q-form.vue:219", vm.proxy);
      return {
        submit,
        reset
      };
    }
  });
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("form", {
      ref: "rootRef",
      class: "q-form",
      onSubmit: _cache[0] || (_cache[0] = (...args) => _ctx.submit && _ctx.submit(...args)),
      onReset: _cache[1] || (_cache[1] = (...args) => _ctx.reset && _ctx.reset(...args))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.className),
        style: vue.normalizeStyle(_ctx.styles)
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 544);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$d], ["__scopeId", "data-v-4cf707e7"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-form/q-form.vue"]]);
  const _sfc_main$e = {
    props: {
      modelValue: Array,
      options: {
        type: Array,
        require: true
      },
      perfix: [String, Array],
      suffix: [String, Array],
      align: String,
      itemLabel: {
        type: String,
        default: "label"
      },
      itemValue: {
        type: String,
        default: "value"
      },
      itemHeight: {
        type: Number,
        default: 40
      },
      rowNumber: {
        type: Number,
        default: 5
      }
    },
    emits: ["update:modelValue", "change", "pickstart", "pickend", "ready"],
    setup(props, { emit }) {
      const initValue = props.options ? new Array(props.options.length).fill(0) : [];
      const indexValue = vue.ref(initValue);
      const innerValue = vue.ref(null);
      function getFix(fix, i) {
        return Array.isArray(fix) ? fix[i] || "" : fix;
      }
      function getItem(item, name) {
        name = { label: props.itemLabel, value: props.itemValue }[name];
        return typeof item == "object" ? item[name] : item;
      }
      function getValueIndex(val) {
        return props.options.map((col, ci) => {
          let index = 0;
          for (var i = 0; i < col.length; i++) {
            if (getItem(col[i], "value") == val[ci]) {
              return i;
            }
          }
          return index;
        });
      }
      if (props.modelValue) {
        indexValue.value = getValueIndex(props.modelValue);
      }
      vue.watch(() => props.modelValue, (val) => {
        const valIndex = getValueIndex(props.modelValue);
        if (!isDeepEqual(indexValue.value, valIndex)) {
          indexValue.value = valIndex;
        }
      });
      const indicatorStyle = `height: ${props.itemHeight}px; line-height: ${props.itemHeight}px;` + (props.align ? `text-align: ${props.align}` : "");
      const styles = vue.computed(() => `height:${props.itemHeight * props.rowNumber}`);
      function getValue(index) {
        index = index || indexValue.value;
        const rawValue = index.map((ind, ci) => {
          const col = props.options[ci];
          return ind >= col.length - 1 ? col[col.length - 1] : col[ind];
        });
        const value = rawValue.map((vo) => getItem(vo, "value"));
        return { index, rawValue, value };
      }
      function onChange(evt) {
        indexValue.value = evt.detail.value;
        const detail = getValue(indexValue.value);
        innerValue.value = detail.value;
        evt.detail = detail;
        emit("update:modelValue", innerValue.value);
        emit("change", evt);
      }
      function onPickstart(evt) {
        emit("pickstart", evt);
      }
      function onPickend(evt) {
        emit("pickend", evt);
      }
      vue.onMounted(() => {
        emit("ready", getValue());
      });
      return {
        indexValue,
        innerValue,
        styles,
        indicatorStyle,
        getValue,
        getItem,
        getFix,
        onChange,
        onPickstart,
        onPickend
      };
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("picker-view", {
      class: "q-picker",
      value: $setup.indexValue,
      style: vue.normalizeStyle($setup.styles),
      "indicator-style": $setup.indicatorStyle,
      onChange: _cache[0] || (_cache[0] = (...args) => $setup.onChange && $setup.onChange(...args)),
      onPickstart: _cache[1] || (_cache[1] = (...args) => $setup.onPickstart && $setup.onPickstart(...args)),
      onPickend: _cache[2] || (_cache[2] = (...args) => $setup.onPickend && $setup.onPickend(...args))
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (item, i) => {
        return vue.openBlock(), vue.createElementBlock("picker-view-column", { key: i }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (vo, d) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["item", $setup.indexValue[i] == d ? "active" : ""]),
              style: vue.normalizeStyle($setup.indicatorStyle),
              key: d
            }, [
              $props.perfix ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "perfix"
              }, vue.toDisplayString($setup.getFix($props.perfix, i)), 1)) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "label" }, vue.toDisplayString($setup.getItem(vo, "label")), 1),
              $props.suffix ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                class: "suffix"
              }, vue.toDisplayString($setup.getFix($props.suffix, i)), 1)) : vue.createCommentVNode("v-if", true)
            ], 6);
          }), 128))
        ]);
      }), 128))
    ], 44, ["value", "indicator-style"]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$c], ["__scopeId", "data-v-818a772f"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-pickerview/q-pickerview.vue"]]);
  const useTransitionProps = {
    transitionShow: {
      type: String,
      default: "fade"
    },
    transitionHide: {
      type: String,
      default: "fade"
    },
    transitionDuration: {
      type: [String, Number],
      default: 300
    }
  };
  function useTransition(props, defaultShowFn = () => {
  }, defaultHideFn = () => {
  }) {
    return {
      transitionProps: vue.computed(() => {
        const show = `q-animate--${props.transitionShow || defaultShowFn()}`;
        const hide = `q-animate--${props.transitionHide || defaultHideFn()}`;
        return { show, hide };
      }),
      transitionStyle: vue.computed(() => ({
        "--animation-duration": props.transitionDuration + "ms",
        "animation-duration": props.transitionDuration + "ms",
        "animation-fill-mode": "forwards"
      }))
    };
  }
  function useTimeout() {
    let timer;
    const vm = vue.getCurrentInstance();
    function removeTimeout() {
      clearTimeout(timer);
    }
    vue.onDeactivated(removeTimeout);
    vue.onBeforeUnmount(removeTimeout);
    return {
      removeTimeout,
      registerTimeout(fn, delay) {
        clearTimeout(timer);
        if (vmIsDestroyed(vm) === false) {
          timer = setTimeout(fn, delay);
        }
      }
    };
  }
  const positionClass = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center"
  };
  const defaultTransitions = {
    standard: ["zoom-in", "zoom-out"],
    top: ["slide-in-down", "slide-out-down"],
    bottom: ["slide-in-up", "slide-out-up"],
    right: ["slide-in-right", "slide-out-right"],
    left: ["slide-in-left", "slide-out-left"]
  };
  const _sfc_main$d = createComponent({
    name: "QDialog",
    inheritAttrs: false,
    props: {
      ...useModelToggleProps,
      ...useTransitionProps,
      transitionShow: String,
      transitionHide: String,
      persistent: Boolean,
      autoClose: Boolean,
      allowFocusOutside: Boolean,
      noEscDismiss: Boolean,
      noBackdropDismiss: Boolean,
      noRouteDismiss: Boolean,
      noRefocus: Boolean,
      noFocus: Boolean,
      noShake: Boolean,
      seamless: Boolean,
      maximized: Boolean,
      fullWidth: Boolean,
      fullHeight: Boolean,
      square: Boolean,
      position: {
        type: String,
        default: "standard",
        validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
      }
    },
    emits: [
      ...useModelToggleEmits,
      "shake",
      "click",
      "escapeKey"
    ],
    setup(props, { slots, emit, attrs }) {
      const vm = vue.getCurrentInstance();
      vue.ref(null);
      const showing = vue.ref(props.modelValue);
      const animating = vue.ref(false);
      const shaking = vue.ref(false);
      vue.computed(
        () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
      );
      const duration = props.transitionDuration;
      const { show, hide } = useModelToggle({ showing, handleShow, handleHide, duration });
      const { registerTimeout } = useTimeout();
      const { transitionProps, transitionStyle } = useTransition(
        props,
        () => defaultTransitions[props.position][0],
        () => defaultTransitions[props.position][1]
      );
      const classes = vue.computed(
        () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "") + (shaking.value ? " q-animate--deny" : "")
      );
      const animate = vue.computed(() => animating.value === true ? props.modelValue ? transitionProps.value.show : transitionProps.value.hide : "");
      const useBackdrop = vue.computed(() => showing.value === true && props.seamless !== true);
      const rootClasses = vue.computed(() => [
        `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
        attrs.class
      ]);
      function shake(evt) {
        shaking.value = true;
        emit("shake", evt);
        registerTimeout(() => {
          shaking.value = false;
        }, 150);
        formatAppLog("log", "at uni_modules/kv-qui/components/q-dialog/q-dialog.vue:142", "shake");
      }
      function handleShow(evt) {
        animating.value = true;
        registerTimeout(() => {
          animating.value = false;
          emit("show", evt);
        }, props.transitionDuration);
      }
      function handleHide(evt) {
        animating.value = true;
        registerTimeout(() => {
          animating.value = false;
          emit("hide", evt);
        }, props.transitionDuration);
      }
      function onBackdropClick(e) {
        if (props.persistent !== true && props.noBackdropDismiss !== true) {
          hide(e);
        } else if (props.noShake !== true) {
          shake(e);
        }
      }
      function onOutClick(e) {
        if (props.autoClose === true) {
          hide(e);
          emit("click", e);
        }
      }
      Object.assign(vm.proxy, { hide, show });
      return {
        animate,
        animating,
        showing,
        classes,
        useBackdrop,
        rootClasses,
        transitionProps,
        transitionStyle,
        onOutClick,
        onBackdropClick
      };
    }
  });
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.showing ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      role: "dialog",
      class: vue.normalizeClass(_ctx.rootClasses),
      "aria-modal": _ctx.useBackdrop === true ? "true" : "false",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onOutClick && _ctx.onOutClick(...args))
    }, [
      _ctx.useBackdrop ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "q-dialog__backdrop fixed-full",
        style: vue.normalizeStyle({ opacity: _ctx.modelValue ? 1 : 0, transitionDuration: _ctx.transitionDuration * 0.6 + "ms" }),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onBackdropClick && _ctx.onBackdropClick(...args)),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.onBackdropClick && _ctx.onBackdropClick(...args))
      }, null, 36)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.classes, _ctx.animate]),
        tabindex: -1,
        style: vue.normalizeStyle(_ctx.transitionStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 10, ["aria-modal"])) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$b], ["__scopeId", "data-v-aeff4dd2"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-dialog/q-dialog.vue"]]);
  function cloneDeep(data, hash = /* @__PURE__ */ new WeakMap()) {
    if (Object(data) !== data)
      return data;
    if (hash.has(data))
      return hash.get(data);
    const result = data instanceof Date ? new Date(data) : data instanceof RegExp ? new RegExp(data.source, data.flags) : data instanceof Set ? /* @__PURE__ */ new Set() : data instanceof Map ? /* @__PURE__ */ new Map() : typeof data.constructor !== "function" ? /* @__PURE__ */ Object.create(null) : data.prototype !== void 0 && typeof data.prototype.constructor === "function" ? data : new data.constructor();
    if (typeof data.constructor === "function" && typeof data.valueOf === "function") {
      const val = data.valueOf();
      if (Object(val) !== val) {
        const result2 = new data.constructor(val);
        hash.set(data, result2);
        return result2;
      }
    }
    hash.set(data, result);
    if (data instanceof Set) {
      data.forEach((val) => {
        result.add(cloneDeep(val, hash));
      });
    } else if (data instanceof Map) {
      data.forEach((val, key) => {
        result.set(key, cloneDeep(val, hash));
      });
    }
    return Object.assign(
      result,
      ...Object.keys(data).map((key) => ({ [key]: cloneDeep(data[key], hash) }))
    );
  }
  const calendar = {
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      25958,
      54432,
      59984,
      28309,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      21952,
      43872,
      38613,
      37600,
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      41696,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      54560
    ],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
    nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
    nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
    leapMonth: function(y) {
      return calendar.lunarInfo[y - 1900] & 15;
    },
    leapDays: function(y) {
      if (calendar.leapMonth(y)) {
        return calendar.lunarInfo[y - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    monthDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      return calendar.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
    },
    solarDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var ms = m - 1;
      if (ms == 1) {
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
      } else {
        return calendar.solarMonth[ms];
      }
    },
    toChinaMonth: function(m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var s = calendar.nStr3[m - 1];
      s += "\u6708";
      return s;
    },
    toChinaDay: function(d) {
      var s;
      switch (d) {
        case 10:
          s = "\u521D\u5341";
          break;
        case 20:
          s = "\u4E8C\u5341";
          break;
        case 30:
          s = "\u4E09\u5341";
          break;
        default:
          s = calendar.nStr2[Math.floor(d / 10)];
          s += calendar.nStr1[d % 10];
      }
      return s;
    }
  };
  const padStart = (string, length, pad2) => {
    const s = String(string);
    if (!s || s.length >= length)
      return string;
    return `${Array(length + 1 - s.length).join(pad2)}${string}`;
  };
  const padZoneStr = (instance) => {
    const negMinutes = -instance.utcOffset();
    const minutes = Math.abs(negMinutes);
    const hourOffset = Math.floor(minutes / 60);
    const minuteOffset = minutes % 60;
    return `${negMinutes <= 0 ? "+" : "-"}${padStart(hourOffset, 2, "0")}:${padStart(minuteOffset, 2, "0")}`;
  };
  const isQDate = (d) => d instanceof QDate;
  const qdate = function(date, format2) {
    if (isQDate(date)) {
      return date.clone();
    }
    return new QDate(date, format2);
  };
  const parseDate = function(cfg) {
    const tags = typeof cfg;
    let lifa = "\u516C", date = cfg, leap = false;
    if (cfg && tags == "string") {
      const ds = cfg.match(/^([公农历]+\s+)?(.+?)(\(.+\))?$/);
      if (ds) {
        lifa = ds[1] ? ds[1].substring(0, 1) : "\u516C";
        date = ds[2].trim().replace("-", "/");
        leap = ds[3] ? true : false;
      }
    } else if (tags == "object" && cfg.date) {
      if (["\u516C", "\u519C"].includes(cfg.lifa))
        lifa = cfg.lifa;
      if (typeof cfg.leap == "boolean")
        leap = cfg.leap;
      date = cfg.date;
    }
    if (Array.isArray(date)) {
      const ndate = cloneDeep(date);
      if (ndate[1] < 0) {
        leap = true;
        ndate[1] = Math.abs(ndate[1]);
      }
      ndate[1] -= 1;
      date = new Date(...ndate);
    }
    return {
      lifa,
      date: new Date(Date.parse(date)),
      leap
    };
  };
  class QDate {
    constructor(cfg, format2) {
      this.$format = format2 || "YYYY-MM-DDTHH:mm:ssZ";
      this.parse(cfg);
      this.init();
    }
    init() {
      const { $d } = this;
      this.$y = $d.getFullYear();
      this.$M = $d.getMonth();
      this.$D = $d.getDate();
      this.$W = $d.getDay();
      this.$H = $d.getHours();
      this.$m = $d.getMinutes();
      this.$s = $d.getSeconds();
      this.$ms = $d.getMilliseconds();
    }
    parse(cfg) {
      const { lifa, date, leap } = parseDate(cfg);
      this.$d = date;
      this.$lifa = lifa;
      this.$leap = leap;
    }
    clone() {
      return cloneDeep(this);
    }
    format(formatStr) {
      const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
      const str = formatStr || this.$format;
      const zoneStr = padZoneStr(this);
      const { $H, $m, $M } = this;
      const get$H = (num) => padStart($H % 12 || 12, num, "0");
      const meridiemFunc = (hour, minute, isLowercase) => {
        const m = hour < 12 ? "AM" : "PM";
        return isLowercase ? m.toLowerCase() : m;
      };
      const matches = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: $M + 1,
        MM: padStart($M + 1, 2, "0"),
        D: this.$D,
        DD: padStart(this.$D, 2, "0"),
        d: String(this.$W),
        H: String($H),
        HH: padStart($H, 2, "0"),
        h: get$H(1),
        hh: get$H(2),
        a: meridiemFunc($H, $m, true),
        A: meridiemFunc($H, $m, false),
        m: String($m),
        mm: padStart($m, 2, "0"),
        s: String(this.$s),
        ss: padStart(this.$s, 2, "0"),
        SSS: padStart(this.$ms, 3, "0"),
        Z: zoneStr
      };
      return str.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match] || zoneStr.replace(":", ""));
    }
    utcOffset() {
      return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
    }
    monthDays() {
      let days = calendar.solarDays(this.$y, this.$M + 1);
      if (this.$lifa == "\u519C") {
        days = this.$leap ? calendar.leapDays(this.$y) : calendar.monthDays(this.$y, this.$M + 1);
      }
      return days;
    }
    toString() {
      return [this.$lifa + "\u5386", this.format(), this.$leap ? "(\u95F0" + (this.$M + 1) + "\u6708)" : ""].filter((vo) => vo).join(" ");
    }
  }
  function pad(v, length = 2, char = "0") {
    if (v === void 0 || v === null) {
      return v;
    }
    const val = "" + v;
    return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
  }
  function destyle(styl) {
    const stylObj = {};
    if (styl && typeof styl == "string") {
      styl = styl.split(";").map((vo) => {
        vo = vo.split(":").map((item) => item.trim());
        if (vo[1] !== void 0)
          stylObj[vo[0]] = vo[1];
        return vo;
      });
    } else if (typeof styl == "object") {
      Object.keys(styl).map((key) => {
        if (styl[key] === void 0)
          delete styl[key];
      });
    }
    return stylObj;
  }
  const format = {
    pad,
    destyle
  };
  const yearVali = (y) => y >= 1900 && y <= 2100;
  const useDateTimeProps = {
    modelValue: String,
    lifa: {
      type: String,
      default: "\u516C",
      validate: (vo) => ["\u516C", "\u519C"].includes(vo)
    },
    defaults: String,
    dateType: {
      type: String,
      default: "datetime",
      validate: (vo) => ["datetime", "date"].includes(vo)
    },
    format: String,
    min: {
      type: Number,
      default: () => 1930,
      validate: yearVali
    },
    max: {
      type: Number,
      default: () => 2100,
      validate: yearVali
    }
  };
  const mapMax = function(min, max) {
    const retn = [];
    for (let i = min; i <= max; i++) {
      retn.push(i);
    }
    return retn;
  };
  const useDateTime = ({ props, emit }) => {
    const min = qdate(props.min);
    const max = qdate(props.max);
    const dft = qdate(props.modelValue ? props.lifa + " " + props.modelValue : props.defaults || new Date());
    const dateArr = dft.format("YYYY-M-D" + (props.dateType == "datetime" ? "-H-m" : "")).split("-").map((vo) => Number(vo));
    if (dft.$leap)
      dateArr[1] = -dateArr[1];
    formatAppLog("log", "at uni_modules/kv-qui/components/q-datetime/useDateTime.js:57", dft);
    const lifa = vue.ref(dft.$lifa);
    const innerValue = vue.ref(dateArr);
    const dateRes = vue.ref(null);
    const dateVal = vue.ref(null);
    const format2 = vue.ref(props.format || "YYYY-MM-DD" + (props.dateType == "datetime" ? " HH:mm" : ""));
    const options = vue.computed(() => {
      const [year, month] = innerValue.value;
      const maxDay = lifa.value == "\u516C" ? calendar.solarDays(year, month) : month < 0 ? calendar.leapDays(year) : calendar.monthDays(year, month);
      let dateCol = [];
      dateCol[0] = mapMax(min.$y, max.$y).map((value) => ({ label: value + "\u5E74", value }));
      if (lifa.value == "\u516C") {
        dateCol[1] = mapMax(1, 12).map((value) => ({ label: pad(value, 2) + "\u6708", value }));
        dateCol[2] = mapMax(1, maxDay).map((value) => ({ label: pad(value, 2) + "\u65E5", value }));
      } else {
        dateCol[1] = mapMax(1, 12).map((value) => ({ label: calendar.toChinaMonth(value), value }));
        const leapMonth = calendar.leapMonth(year);
        if (leapMonth) {
          dateCol[1].splice(leapMonth, 0, { label: "\u95F0" + calendar.toChinaMonth(leapMonth), value: -leapMonth, leap: true });
        }
        dateCol[2] = mapMax(1, maxDay).map((value) => ({ label: calendar.toChinaDay(value), value }));
      }
      if (props.dateType == "datetime") {
        dateCol.push(mapMax(0, 23).map((value) => ({ label: pad(value, 2) + "\u65F6", value })));
        dateCol.push(mapMax(0, 59).map((value) => ({ label: pad(value, 2) + "\u5206", value })));
      }
      return dateCol;
    });
    function onChange(val) {
      if (val.index[2] > options.value[2].length - 1) {
        const maxId = options.value[2].length - 1;
        val.index[2] = maxId;
        val.rawValue[2] = options.value[2][maxId];
        val.value[2] = options.value[2][maxId]["value"];
      }
      dateRes.value = val;
      innerValue.value = val.value;
      const date = val.value;
      const leap = date[1] < 0 ? true : false;
      const dateObj = qdate({
        lifa: lifa.value,
        date,
        leap
      }, format2.value);
      dateVal.value = {
        qobj: dateObj,
        lifa: lifa.value,
        date: dateObj.format(),
        leap,
        text: dateObj.toString()
      };
      emit("change", dateVal);
    }
    function onLifaChange(lf) {
      lifa.value = lf;
      onChange(dateRes.value);
    }
    function onDateReady(val) {
      onChange(val);
    }
    function onDateChange(evt) {
      onChange(evt.detail);
    }
    return {
      colName: ["\u5E74", "\u6708", "\u65E5", "\u65F6", "\u5206", "\u79D2"],
      options,
      lifa,
      innerValue,
      dateVal,
      onDateReady,
      onLifaChange,
      onDateChange
    };
  };
  const _sfc_main$c = {
    props: {
      ...useDateTimeProps,
      show: Boolean,
      position: String
    },
    emits: ["update:modelValue", "update:show", "confirm", "change", "open", "close"],
    setup(props, { emit }) {
      const datePosition = vue.computed(() => props.position);
      const indicatorStyle = `height: 50px;`;
      const dateTime = useDateTime({ props, emit });
      function open(evt) {
        emit("update:show", true);
        emit("open", evt);
      }
      function close(evt) {
        emit("update:show", false);
        emit("close", evt);
      }
      function confirm(evt) {
        const { dateVal } = dateTime;
        formatAppLog("log", "at uni_modules/kv-qui/components/q-datetime/q-datetime.vue:50", "confirm", dateVal.value);
        emit("update:modelValue", dateVal.value.text);
        emit("confirm", dateVal);
        close();
      }
      return {
        ...dateTime,
        datePosition,
        indicatorStyle,
        open,
        close,
        confirm
      };
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_q_btn_group = resolveEasycom(vue.resolveDynamicComponent("q-btn-group"), __easycom_1$5);
    const _component_q_pickerview = resolveEasycom(vue.resolveDynamicComponent("q-pickerview"), __easycom_2);
    const _component_q_dialog = resolveEasycom(vue.resolveDynamicComponent("q-dialog"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_q_dialog, {
      ref: "rootRef",
      modelValue: $props.show,
      position: $setup.datePosition,
      persistent: ""
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "bg-white" }, [
          vue.createElementVNode("view", { class: "row q-pa-sm" }, [
            vue.createVNode(_component_q_btn, {
              outline: "",
              color: "blue-grey",
              label: "\u53D6\u6D88",
              onClick: $setup.close
            }, null, 8, ["onClick"]),
            vue.createVNode(_component_q_btn_group, {
              flat: "",
              class: "q-mx-md"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_q_btn, {
                  outline: _ctx.lifa !== "\u516C",
                  color: "primary",
                  label: "\u516C\u5386",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onLifaChange("\u516C"))
                }, null, 8, ["outline"]),
                vue.createVNode(_component_q_btn, {
                  outline: _ctx.lifa !== "\u519C",
                  color: "primary",
                  label: "\u519C\u5386",
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onLifaChange("\u519C"))
                }, null, 8, ["outline"])
              ]),
              _: 1
            }),
            vue.createVNode(_component_q_btn, {
              color: "primary",
              label: "\u786E\u5B9A",
              onClick: $setup.confirm
            }, null, 8, ["onClick"])
          ]),
          vue.createElementVNode("view", {
            class: "q-pa-sm",
            ref: "ddd"
          }, [
            vue.createVNode(_component_q_pickerview, {
              ref: "pickView",
              align: "center",
              modelValue: _ctx.innerValue,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.innerValue = $event),
              options: _ctx.options,
              onReady: _ctx.onDateReady,
              onChange: _ctx.onDateChange
            }, null, 8, ["modelValue", "options", "onReady", "onChange"])
          ], 512)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "position"]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$a], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-datetime/q-datetime.vue"]]);
  const _sfc_main$b = createComponent({
    name: "QField",
    inheritAttrs: false,
    props: useFieldProps,
    emits: useFieldEmits,
    setup() {
      return useField(useFieldState());
    }
  });
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_q_spinner = resolveEasycom(vue.resolveDynamicComponent("q-spinner"), __easycom_1$9);
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("label", {
      for: _ctx.labelAttrs.for,
      ref: _ctx.state.rootRef,
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style)
    }, [
      _ctx.$slots.before ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "q-field__before q-field__marginal row no-wrap items-center"
      }, [
        vue.renderSlot(_ctx.$slots, "before")
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "q-field__inner relative-position col self-stretch" }, [
        vue.createElementVNode("view", {
          ref: _ctx.state.controlRef,
          class: vue.normalizeClass(_ctx.contentClass),
          tabindex: -1
        }, [
          _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("view", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend"
          }, [
            vue.renderSlot(_ctx.$slots, "prepend")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, [
            _ctx.prefix !== void 0 && _ctx.prefix !== null ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "q-field__prefix no-pointer-events row items-center"
            }, vue.toDisplayString(_ctx.prefix), 1)) : vue.createCommentVNode("v-if", true),
            _ctx.$slots.rawControl ? vue.renderSlot(_ctx.$slots, "rawControl", { key: 1 }) : vue.createCommentVNode("v-if", true),
            _ctx.$slots.control ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              ref: _ctx.state.targetRef,
              class: "q-field__native row",
              tabindex: -1,
              for: _ctx.state.targetUid.value,
              "data-autofocus": _ctx.autofocus === true || void 0
            }, [
              vue.renderSlot(_ctx.$slots, "control", {
                id: _ctx.state.targetUid.value
              })
            ], 8, ["for", "data-autofocus"])) : vue.createCommentVNode("v-if", true),
            _ctx.hasLabel === true ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: vue.normalizeClass(_ctx.labelClass)
            }, [
              _ctx.$slots.label ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
              ], 64))
            ], 2)) : vue.createCommentVNode("v-if", true)
          ]),
          _ctx.hasError === true && !_ctx.noErrorIcon ? (vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(_ctx.appendClass),
            key: "error"
          }, [
            vue.createVNode(_component_q_icon, {
              name: _ctx.$q.iconSet.field.error,
              color: "negative"
            }, null, 8, ["name"])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.loading === true || _ctx.state.innerLoading === true ? (vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(_ctx.appendClass),
            key: "inner-loading-append"
          }, [
            _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(_component_q_spinner, {
              key: 1,
              color: _ctx.color
            }, null, 8, ["color"]))
          ], 2)) : _ctx.clearable === true && _ctx.state.hasValue === true && _ctx.state.editable === true ? (vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(_ctx.appendClass),
            key: "inner-clearable-append"
          }, [
            vue.createVNode(_component_q_btn, {
              class: "q-field__focusable-action",
              icon: _ctx.clearIcon || _ctx.$q.iconSet.field.clear,
              tabindex: 0,
              "aria-hidden": null,
              role: null,
              onClick: _ctx.clearValue
            }, null, 8, ["icon", "onClick"])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("view", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.prevent && _ctx.prevent(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "append")
          ])) : vue.createCommentVNode("v-if", true)
        ], 2),
        vue.createCommentVNode(" Button "),
        _ctx.shouldRenderBottom === true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(`q-field__bottom row items-start q-field__bottom--${_ctx.hideBottomSpace !== true ? "animated" : "stale"}`),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.prevent && _ctx.prevent(...args))
        }, [
          vue.createCommentVNode("  hideBottomSpace === true "),
          vue.createElementVNode("view", { class: "q-field__messages col" }, [
            _ctx.hasError ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _ctx.errorMessage !== null ? (vue.openBlock(), vue.createElementBlock("view", {
                role: "alert",
                key: `q--slot-error-${_ctx.errorMessage.value}`
              }, vue.toDisplayString(_ctx.errorMessage), 1)) : vue.renderSlot(_ctx.$slots, "error", { key: "q--slot-error" })
            ], 64)) : _ctx.hideHint !== true || _ctx.state.focused.value === true ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _ctx.hint ? (vue.openBlock(), vue.createElementBlock("view", {
                key: `q--slot-hint-${_ctx.hint}`
              }, vue.toDisplayString(_ctx.hint), 1)) : vue.renderSlot(_ctx.$slots, "hint", { key: "q--slot-hint" })
            ], 64)) : vue.createCommentVNode("v-if", true)
          ]),
          _ctx.hasCounter ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "q-field__counter"
          }, [
            _ctx.$slots.counter ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(vue.toDisplayString(_ctx.state.computedCounter.value), 1)
            ], 64))
          ])) : vue.createCommentVNode("v-if", true)
        ], 2)) : vue.createCommentVNode("v-if", true)
      ]),
      _ctx.$slots.after ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "q-field__after q-field__marginal row no-wrap items-center"
      }, [
        vue.renderSlot(_ctx.$slots, "after")
      ])) : vue.createCommentVNode("v-if", true)
    ], 14, ["for"]);
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-field/q-field.vue"]]);
  const _sfc_main$a = {
    name: "QRadio",
    props: useOptionProps,
    emits: ["change", "update:modelValue"],
    setup(props, { slots, emit }) {
      function onChange(evt) {
        emit("update:modelValue", evt.detail.value);
        emit("change", evt);
      }
      const useOpts = useOption(props);
      return {
        ...useOpts,
        onChange
      };
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("radio-group", {
      class: vue.normalizeClass(["row", "q-gutter-" + _ctx.gutter]),
      onChange: _cache[0] || (_cache[0] = (...args) => $setup.onChange && $setup.onChange(...args))
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.opts, (vo, i) => {
        return vue.openBlock(), vue.createElementBlock("label", {
          class: vue.normalizeClass(["q-radio", [_ctx.labelClass, { "q-checked": _ctx.status[i] }]]),
          style: vue.normalizeStyle(_ctx.labelStyle),
          key: i
        }, [
          _ctx.icons[i] ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
            key: 0,
            class: "check-icon",
            name: _ctx.icons[i],
            size: "22px"
          }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
          vue.withDirectives(vue.createElementVNode("radio", {
            value: vo.value,
            checked: _ctx.status[i],
            color: vo.color
          }, null, 8, ["value", "checked", "color"]), [
            [vue.vShow, !_ctx.icons[i]]
          ]),
          vue.createElementVNode("text", null, vue.toDisplayString(vo.label), 1)
        ], 6);
      }), 128))
    ], 34);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8], ["__scopeId", "data-v-9d0beb97"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-radio/q-radio.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        statusOpt: [
          { label: "\u5728\u7EBF", value: "\u5728\u7EBF", icon: "emoji_emotions" },
          { label: "\u79BB\u7EBF", value: "\u79BB\u7EBF", icon: "sentiment_neutral" },
          { label: "\u52FF\u6270", value: "\u52FF\u6270", icon: "block" }
        ],
        hobby: [
          { label: "\u542C\u97F3\u4E50", value: "\u542C\u97F3\u4E50", uncheckedIcon: "headset" },
          { label: "\u6253\u7BEE\u7403", value: "\u6253\u7BEE\u7403", uncheckedIcon: "sports_basketball" },
          { label: "\u770B\u7535\u5F71", value: "\u770B\u7535\u5F71", uncheckedIcon: "theaters" },
          { label: "\u73A9\u624B\u673A", value: "\u5237\u624B\u673A", uncheckedIcon: "phone" },
          { label: "\u73A9\u624B\u673A", value: "\u73A9\u6E38\u620F", uncheckedIcon: "sports_esports" }
        ],
        prms: {},
        info: {
          hobby: ["\u770B\u7535\u5F71"]
        }
      };
    },
    methods: {
      submit(evt) {
        formatAppLog("log", "at pages/components/form.vue:89", "submit", evt);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_input = resolveEasycom(vue.resolveDynamicComponent("q-input"), __easycom_0$2);
    const _component_q_checkbox = resolveEasycom(vue.resolveDynamicComponent("q-checkbox"), __easycom_3$3);
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_q_form = resolveEasycom(vue.resolveDynamicComponent("q-form"), __easycom_3);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_datetime = resolveEasycom(vue.resolveDynamicComponent("q-datetime"), __easycom_1$2);
    const _component_q_field = resolveEasycom(vue.resolveDynamicComponent("q-field"), __easycom_5);
    const _component_q_radio = resolveEasycom(vue.resolveDynamicComponent("q-radio"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "\u7528\u6237\u767B\u5F55" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_form, { className: "myform q-gutter-md" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_input, {
                  modelValue: $data.prms.username,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.prms.username = $event),
                  label: "\u7528\u6237\u540D",
                  outlined: ""
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_input, {
                  modelValue: $data.prms.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.prms.password = $event),
                  label: "\u5BC6\u7801",
                  outlined: "",
                  password: ""
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_checkbox, {
                  modelValue: $data.prms.remember,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.prms.remember = $event),
                  val: 1,
                  label: "\u8BB0\u4F4F\u5BC6\u7801"
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", { class: "q-gutter-x-sm" }, [
                vue.createVNode(_component_q_btn, {
                  type: "submit",
                  label: "\u7ACB\u5373\u63D0\u4EA4",
                  color: "primary"
                }),
                vue.createVNode(_component_q_btn, {
                  type: "reset",
                  label: "\u91CD\u7F6E\u8868\u5355",
                  color: "green"
                })
              ])
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "q-pa-md bg-orange-2 q-mt-md" }, vue.toDisplayString(JSON.stringify($data.prms)), 1)
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "\u7528\u6237\u8D44\u6599" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_form, { className: "myform q-gutter-md" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_input, {
                  modelValue: $data.info.username,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.info.username = $event),
                  label: "\u7528\u6237\u6635\u79F0",
                  outlined: ""
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_input, {
                  modelValue: $data.info.phone,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.info.phone = $event),
                  type: "tel",
                  label: "\u7535\u8BDD\u53F7\u7801",
                  outlined: ""
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_field, {
                  outlined: "",
                  label: "\u751F\u65E5",
                  "stack-label": $data.info.born ? true : false
                }, {
                  control: vue.withCtx(() => [
                    vue.createVNode(_component_q_datetime, {
                      modelValue: $data.info.born,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.info.born = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["stack-label"])
              ]),
              vue.createElementVNode("view", { class: "" }, [
                vue.createVNode(_component_q_field, {
                  outlined: "",
                  label: "\u7528\u6237\u6027\u522B",
                  "stack-label": ""
                }, {
                  control: vue.withCtx(() => [
                    vue.createVNode(_component_q_radio, {
                      modelValue: $data.info.sex,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.info.sex = $event),
                      options: ["\u7537", "\u5973"],
                      "checked-icon": "task_alt",
                      "unchecked-icon": "highlight_off"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_field, {
                  outlined: "",
                  label: "\u72B6\u6001",
                  "stack-label": ""
                }, {
                  control: vue.withCtx(() => [
                    vue.createVNode(_component_q_radio, {
                      modelValue: $data.info.status,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.info.status = $event),
                      options: $data.statusOpt
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  _: 1
                })
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_field, {
                  outlined: "",
                  label: "\u5174\u8DA3\u7231\u597D",
                  "stack-label": "",
                  autogrow: ""
                }, {
                  control: vue.withCtx(() => [
                    vue.createVNode(_component_q_checkbox, {
                      modelValue: $data.info.hobby,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.info.hobby = $event),
                      options: $data.hobby
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  _: 1
                })
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_q_field, {
                  outlined: "",
                  label: "\u6807\u7B7E",
                  "stack-label": "",
                  autogrow: ""
                }, {
                  control: vue.withCtx(() => [
                    vue.createVNode(_component_q_checkbox, {
                      modelValue: $data.info.tags,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.info.tags = $event),
                      options: ["\u989C\u503C\u62C5\u5F53", "\u5B9E\u529B\u4E0D\u51E1", "\u4E00\u592B\u5F53\u5173", "\u4E07\u592B\u83AB\u5F00"]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "q-pa-md bg-orange-2 q-mt-md" }, vue.toDisplayString(JSON.stringify($data.info)), 1)
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsForm = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7], ["__file", "E:/AppProject/qui-demo/pages/components/form.vue"]]);
  const _sfc_main$8 = createComponent({
    name: "QBanner",
    props: {
      ...useDarkProps,
      ...useAttrProps,
      inlineActions: Boolean,
      dense: Boolean,
      rounded: Boolean
    },
    setup(props, { slots }) {
      const { proxy: { $q } } = vue.getCurrentInstance();
      const isDark = useDark(props, $q);
      slots.action;
      const classes = vue.computed(
        () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
      );
      const actionClass = vue.computed(
        () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
      );
      return {
        classes,
        actionClass
      };
    }
  });
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([_ctx.classes, _ctx.className]),
      role: "alert"
    }, [
      _ctx.$slots.avatar ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "q-banner__avatar col-auto row items-center self-start"
      }, [
        vue.renderSlot(_ctx.$slots, "avatar", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "q-banner__content col text-body2" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _ctx.$slots.action ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(_ctx.actionClass.value)
      }, [
        vue.renderSlot(_ctx.$slots, "action", {}, void 0, true)
      ], 2)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__scopeId", "data-v-b9bbe488"], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-banner/q-banner.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        sex: "",
        sexArr: [{ label: "\u7537\u751F", value: "\u7537", icon: "man" }, { label: "\u5973\u751F", value: "\u5973", icon: "woman" }],
        shape: "",
        shapeArr: ["\u989C\u503C", "\u5B9E\u529B", "\u4E00\u592B", "\u5F53\u5173", "\u4E07\u592B", "\u83AB\u5F00"],
        hobby: "",
        hobbyArr: [
          { label: "\u542C\u97F3\u4E50", value: "\u542C\u97F3\u4E50", uncheckedIcon: "headset" },
          { label: "\u6253\u7BEE\u7403", value: "\u6253\u7BEE\u7403", uncheckedIcon: "sports_basketball" },
          { label: "\u770B\u7535\u5F71", value: "\u770B\u7535\u5F71", uncheckedIcon: "theaters" },
          { label: "\u73A9\u624B\u673A", value: "\u5237\u624B\u673A", uncheckedIcon: "phone" },
          { label: "\u73A9\u624B\u673A", value: "\u73A9\u6E38\u620F", uncheckedIcon: "sports_esports" }
        ],
        sign1: "",
        sign2: "",
        chk0: ["\u5B9E\u529B"],
        chk1: "",
        chk2: "",
        chk3: ""
      };
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_radio = resolveEasycom(vue.resolveDynamicComponent("q-radio"), __easycom_0$1);
    const _component_q_banner = resolveEasycom(vue.resolveDynamicComponent("q-banner"), __easycom_1$1);
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_checkbox = resolveEasycom(vue.resolveDynamicComponent("q-checkbox"), __easycom_3$3);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, { title: "Radio" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_radio, {
            modelValue: $data.shape,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.shape = $event),
            options: $data.shapeArr
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u5355\u9009:"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.shape), 1)
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createVNode(_component_q_radio, {
            modelValue: $data.sex,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.sex = $event),
            options: $data.sexArr
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u5355\u9009:"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.sex), 1)
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createVNode(_component_q_radio, {
            modelValue: $data.hobby,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.hobby = $event),
            options: $data.hobbyArr
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u5355\u9009\u81EA\u5B9A\u672A\u9009\u4E2D\u56FE\u6807\uFF1A"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.hobby), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "Checkbox" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_checkbox, {
            modelValue: $data.sign1,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.sign1 = $event),
            label: "\u8BB0\u4F4F\u5BC6\u7801Boolean",
            className: "q-mb-sm"
          }, null, 8, ["modelValue"]),
          vue.createVNode(_component_q_checkbox, {
            modelValue: $data.sign2,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.sign2 = $event),
            val: "ok ok",
            label: "\u8BB0\u4F4F\u5BC6\u7801Value"
          }, null, 8, ["modelValue"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, [
                vue.createTextVNode("\u5355\u4E00\u9009\u9879(\u5E03\u5C14\u503C):"),
                vue.createElementVNode("strong", null, vue.toDisplayString($data.sign1), 1)
              ]),
              vue.createElementVNode("view", null, [
                vue.createTextVNode("\u5355\u4E00\u9009\u9879(\u81EA\u5B9A\u503C):"),
                vue.createElementVNode("strong", null, vue.toDisplayString($data.sign2), 1)
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createVNode(_component_q_checkbox, {
            modelValue: $data.chk0,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.chk0 = $event),
            options: $data.shapeArr
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u591A\u9009:"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.chk0), 1)
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createVNode(_component_q_checkbox, {
            modelValue: $data.chk1,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.chk1 = $event),
            options: $data.shapeArr,
            "checked-icon": "star"
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u6362\u591A\u9009\u9009\u4E2D\u56FE\u6807:"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.chk1), 1)
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createVNode(_component_q_checkbox, {
            modelValue: $data.chk2,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.chk2 = $event),
            options: $data.shapeArr,
            "checked-icon": "star",
            "unchecked-icon": "star_border"
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u6362\u591A\u9009\u9009\u4E2D+\u672A\u9009\u4E2D\u56FE\u6807:"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.chk2), 1)
            ]),
            _: 1
          }),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createVNode(_component_q_checkbox, {
            modelValue: $data.chk3,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.chk3 = $event),
            options: $data.hobbyArr
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_q_banner, {
            rounded: "",
            className: "bg-orange-3 q-mt-md"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u591A\u9009\u81EA\u5B9A\u672A\u9009\u4E2D\u56FE\u6807:"),
              vue.createElementVNode("strong", null, vue.toDisplayString($data.chk3), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 64);
  }
  const PagesComponentsCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__file", "E:/AppProject/qui-demo/pages/components/checkbox.vue"]]);
  const _sfc_main$6 = {
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
        formatAppLog("log", "at pages/components/dialog.vue:100", "onShow", evt);
      },
      onHide(evt) {
        this.box = this.popDft;
        formatAppLog("log", "at pages/components/dialog.vue:104", "onHide", evt);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    const _component_q_separator = resolveEasycom(vue.resolveDynamicComponent("q-separator"), __easycom_1$6);
    const _component_q_card_section = resolveEasycom(vue.resolveDynamicComponent("q-card-section"), __easycom_2$2);
    const _component_q_card = resolveEasycom(vue.resolveDynamicComponent("q-card"), __easycom_3$2);
    const _component_q_dialog = resolveEasycom(vue.resolveDynamicComponent("q-dialog"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_Lanmu, {
        title: "\u4F4D\u7F6E",
        "content-class": "row q-gutter-sm"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_btn, {
              color: "primary",
              label: "standard",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.showDlg({ position: "standard" }))
            })
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_btn, {
              color: "primary",
              label: "Top",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.showDlg({ position: "top" }))
            })
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_btn, {
              color: "primary",
              label: "left",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.showDlg({ position: "left" }))
            })
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_btn, {
              color: "primary",
              label: "right",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.showDlg({ position: "right" }))
            })
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_q_btn, {
              color: "primary",
              label: "bottom",
              onClick: _cache[4] || (_cache[4] = ($event) => $options.showDlg({ position: "bottom" }))
            })
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_Lanmu, { title: "\u6548\u679C" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "row q-gutter-sm" }, [
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "auto-Close",
                onClick: _cache[5] || (_cache[5] = ($event) => $options.showDlg({ autoClose: true }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "persistent",
                onClick: _cache[6] || (_cache[6] = ($event) => $options.showDlg({ persistent: true }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "flip",
                onClick: _cache[7] || (_cache[7] = ($event) => $options.showDlg({ transition: ["flip-in", "flip-out"] }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "rotate",
                onClick: _cache[8] || (_cache[8] = ($event) => $options.showDlg({ transition: ["rotate-in", "rotate-out"] }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "slide-up",
                onClick: _cache[9] || (_cache[9] = ($event) => $options.showDlg({ transition: ["slide-in-up", "slide-out-up"] }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "slide-down",
                onClick: _cache[10] || (_cache[10] = ($event) => $options.showDlg({ transition: ["slide-in-down", "slide-out-down"] }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "slide-left",
                onClick: _cache[11] || (_cache[11] = ($event) => $options.showDlg({ transition: ["slide-in-left", "slide-out-left"] }))
              })
            ]),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "slide-right",
                onClick: _cache[12] || (_cache[12] = ($event) => $options.showDlg({ transition: ["slide-in-right", "slide-out-right"] }))
              })
            ])
          ]),
          vue.createVNode(_component_q_separator, { spaced: "" }),
          vue.createElementVNode("view", { class: "row q-gutter-sm" }, [
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_q_btn, {
                color: "primary",
                label: "show\u65B9\u6CD5",
                onClick: _cache[13] || (_cache[13] = ($event) => _ctx.$refs.dialog.show())
              })
            ])
          ])
        ]),
        _: 1
      }),
      vue.createVNode(_component_q_dialog, {
        ref: "dialog",
        modelValue: $data.show,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $data.show = $event),
        persistent: $data.box.persistent,
        position: $data.box.position,
        maximized: $data.box.maximized,
        "full-width": $data.box.fullWidth,
        "full-height": $data.box.fullHeight,
        "auto-close": $data.box.autoClose,
        "transition-show": $data.box.transition[0],
        "transition-hide": $data.box.transition[1],
        onShow: $options.onShow,
        onHide: $options.onHide
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_q_card, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_card_section, { className: "row items-center" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "col" }, "\u6807\u9898"),
                  vue.createVNode(_component_q_btn, {
                    flat: "",
                    dense: "",
                    icon: $data.box.maximized ? "fullscreen_exit" : "fullscreen",
                    onClick: _cache[14] || (_cache[14] = ($event) => $options.showDlg({ maximized: !$data.box.maximized }))
                  }, null, 8, ["icon"]),
                  vue.createVNode(_component_q_btn, {
                    flat: "",
                    dense: "",
                    icon: "close",
                    onClick: _ctx.$q.closePopup
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_separator),
              vue.createVNode(_component_q_card_section, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" \u5F39\u7A97\u4F4D\u7F6E\uFF1A "),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.box, (vo, key) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "",
                      key
                    }, [
                      vue.createTextVNode(vue.toDisplayString(key) + ": ", 1),
                      vue.createElementVNode("text", {
                        class: vue.normalizeClass("text-" + (typeof vo == "boolean" ? vo ? "green-7" : "red" : "blue"))
                      }, vue.toDisplayString(vo), 3)
                    ]);
                  }), 128)),
                  vue.createElementVNode("view", { class: "row q-gutter-sm" }, [
                    vue.createElementVNode("view", { class: "" }, [
                      vue.createVNode(_component_q_btn, {
                        color: "primary",
                        label: "full-width",
                        onClick: _cache[15] || (_cache[15] = ($event) => Object.assign($data.box, { fullWidth: !$data.box.fullWidth }))
                      })
                    ]),
                    vue.createElementVNode("view", { class: "" }, [
                      vue.createVNode(_component_q_btn, {
                        color: "primary",
                        label: "full-height",
                        onClick: _cache[16] || (_cache[16] = ($event) => Object.assign($data.box, { fullHeight: !$data.box.fullHeight }))
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "persistent", "position", "maximized", "full-width", "full-height", "auto-close", "transition-show", "transition-hide", "onShow", "onHide"])
    ], 64);
  }
  const PagesComponentsDialog = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__file", "E:/AppProject/qui-demo/pages/components/dialog.vue"]]);
  const _sfc_main$5 = {
    data() {
      const dateValue = [1990, 6, 16, 12, 32];
      return {
        dateValue,
        objValue: null,
        showData: false,
        date: null,
        optObject: [
          [{ label: "\u4E2D\u56FD", value: "\u4E2D" }, { label: "\u7F8E\u56FD", value: "\u7F8E" }, { label: "\u5DF4\u897F", value: "\u5DF4" }, { label: "\u65E5\u672C", value: "\u65E5" }, { label: "\u5FB7\u56FD", value: "\u5FB7" }],
          [{ label: "\u8DB3\u7403", value: "A" }, { label: "\u6392\u7403", value: "B" }, { label: "\u7FBD\u6BDB\u7403", value: "C" }, { label: "\u4E52\u4E53\u7403", value: "D" }]
        ]
      };
    },
    methods: {
      onChange(evt) {
        formatAppLog("log", "at pages/components/date_picker.vue:41", "change--", evt);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_btn = resolveEasycom(vue.resolveDynamicComponent("q-btn"), __easycom_0$5);
    const _component_q_datetime = resolveEasycom(vue.resolveDynamicComponent("q-datetime"), __easycom_1$2);
    const _component_Lanmu = vue.resolveComponent("Lanmu");
    return vue.openBlock(), vue.createBlock(_component_Lanmu, { title: "Picker View" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "q-pa-md q-gutter-sm" }, [
          vue.createVNode(_component_q_btn, {
            color: "blue",
            label: "\u9009\u62E9\u65E5\u671F",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$refs.picker.open())
          }),
          vue.createTextVNode("-" + vue.toDisplayString($data.date) + "- ", 1),
          vue.createVNode(_component_q_datetime, {
            modelValue: $data.date,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.date = $event),
            show: $data.showData,
            "onUpdate:show": _cache[2] || (_cache[2] = ($event) => $data.showData = $event),
            defaults: "\u519C\u5386 2001-04-05 02:04 (\u95F0\u6708)",
            ref: "picker"
          }, null, 8, ["modelValue", "show"])
        ]),
        vue.createElementVNode("view", { class: "bg-orange-2 q-pa-sm" }, [
          vue.createTextVNode(" -" + vue.toDisplayString($data.dateValue) + "-", 1),
          vue.createVNode(_component_q_btn, {
            label: "change",
            onClick: _cache[3] || (_cache[3] = ($event) => $data.dateValue = [1982, 3, 6, 18, 42])
          })
        ]),
        vue.createCommentVNode(` <q-pickerview v-model="dateValue" :options="columns" :suffix="colName" @change="onChange"></q-pickerview>\r
		<q-separator spaced></q-separator>\r
		<view class="bg-orange-2 q-pa-sm">\r
			{{JSON.stringify(objValue)}} -- <q-btn label='change' @click="objValue=['\u5DF4','B']" />\r
		</view>\r
		<q-pickerview ref="b" v-model="objValue" :options="optObject" @change="onChange"></q-pickerview> `)
      ]),
      _: 1
    });
  }
  const PagesComponentsDate_picker = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "E:/AppProject/qui-demo/pages/components/date_picker.vue"]]);
  const _sfc_main$4 = createComponent({
    name: "QTab",
    props: {
      icon: String,
      label: [Number, String],
      alert: [Boolean, String],
      alertIcon: String,
      name: {
        type: [Number, String],
        default: () => `t_${id++}`
      },
      noCaps: Boolean,
      tabindex: [String, Number],
      disable: Boolean,
      contentClass: String,
      ripple: {
        type: [Boolean, Object],
        default: true
      }
    },
    setup(props, { slots, emit }) {
      const $tabs = vue.inject(tabsKey, emptyRenderFn);
      if ($tabs === emptyRenderFn) {
        formatAppLog("error", "at uni_modules/kv-qui/components/q-tab/q-tab.vue:54", "QTab component needs to be child of QTabs");
        return emptyRenderFn;
      }
      vue.getCurrentInstance();
      const blurTargetRef = vue.ref(null);
      const rootRef = vue.ref(null);
      const tabIndicatorRef = vue.ref(null);
      const isActive = vue.computed(() => $tabs.currentModel.value === props.name);
      const classes = vue.computed(
        () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer")
      );
      const innerClass = vue.computed(
        () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
      );
      const narrow = $tabs.tabProps.value.narrowIndicator;
      return {
        tabs: $tabs,
        rootRef,
        classes,
        innerClass,
        narrow,
        rootRef,
        blurTargetRef,
        tabIndicatorRef
      };
    },
    methods: {
      onClick(e) {
        if (this.disable === true) {
          return;
        }
        this.ripple && this.$refs.ripple.ripple(e);
        this.tabs.updateModel({ name: this.name });
        this.$emit("click", e);
      }
    }
  });
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_icon = resolveEasycom(vue.resolveDynamicComponent("q-icon"), __easycom_0$6);
    const _component_q_ripple = resolveEasycom(vue.resolveDynamicComponent("q-ripple"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "rootRef",
      class: vue.normalizeClass(_ctx.classes),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      _ctx.narrow === false ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["q-tab__indicator", _ctx.tabs.tabProps.value.indicatorClass])
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        ref: _ctx.blurTargetRef,
        class: "q-focus-helper",
        tabindex: -1
      }, null, 512),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.innerClass)
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        _ctx.icon !== void 0 ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
          key: 0,
          name: _ctx.icon,
          className: "q-tab__icon"
        }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
        _ctx.label !== void 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "q-tab__label"
        }, vue.toDisplayString(_ctx.label), 1)) : vue.createCommentVNode("v-if", true),
        _ctx.narrow === true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: vue.normalizeClass(["q-tab__indicator", _ctx.tabs.tabProps.value.indicatorClass])
        }, null, 2)) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" alert "),
        _ctx.alert && _ctx.alertIcon ? (vue.openBlock(), vue.createBlock(_component_q_icon, {
          key: 3,
          className: "q-tab__alert-icon",
          name: _ctx.alertIcon,
          color: _ctx.alert !== true ? _ctx.alert : ""
        }, null, 8, ["name", "color"])) : _ctx.alert ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 4,
          class: vue.normalizeClass(["q-tab__alert", _ctx.alert !== true ? "text-" + _ctx.alert : ""])
        }, null, 2)) : vue.createCommentVNode("v-if", true)
      ], 2),
      !_ctx.disable ? (vue.openBlock(), vue.createBlock(_component_q_ripple, {
        key: 1,
        class: "ripple",
        ref: "ripple"
      }, null, 512)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-tab/q-tab.vue"]]);
  function getIndicatorClass(color, top, vertical) {
    const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
    return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
  }
  const alignValues = ["left", "center", "right", "justify"];
  const _sfc_main$3 = createComponent({
    name: "QTabs",
    props: {
      ...useAttrProps,
      modelValue: [Number, String],
      align: {
        type: String,
        default: "center",
        validator: (v) => alignValues.includes(v)
      },
      breakpoint: {
        type: [String, Number],
        default: 600
      },
      vertical: Boolean,
      shrink: Boolean,
      stretch: Boolean,
      activeClass: String,
      activeColor: String,
      activeBgColor: String,
      indicatorColor: String,
      leftIcon: String,
      rightIcon: String,
      outsideArrows: Boolean,
      mobileArrows: Boolean,
      switchIndicator: Boolean,
      narrowIndicator: Boolean,
      inlineLabel: Boolean,
      noCaps: Boolean,
      dense: Boolean,
      contentClass: String
    },
    setup(props, { slots, emit }) {
      vue.getCurrentInstance();
      const currentModel = vue.ref(props.modelValue);
      const scrollable = vue.ref(true);
      vue.ref(true);
      vue.ref(false);
      vue.ref(false);
      const arrowsEnabled = vue.computed(
        () => props.mobileArrows === true
      );
      const tabDataList = [];
      const tabDataListLen = vue.ref(0);
      const hasFocus = vue.ref(false);
      const alignClass = vue.computed(() => {
        return `q-tabs__content--align-${props.align || "justify"}`;
      });
      const classes = vue.computed(
        () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${arrowsEnabled.value === true && props.outsideArrows === true ? "outside" : "inside"}` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
      );
      const innerClass = vue.computed(
        () => "q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "") + " scroll"
      );
      vue.watch(() => props.modelValue, (name) => {
        updateModel({ name, setCurrent: true, skipEmit: true });
      });
      const tabProps = vue.computed(() => ({
        activeClass: props.activeClass,
        activeColor: props.activeColor,
        activeBgColor: props.activeBgColor,
        indicatorClass: getIndicatorClass(
          props.indicatorColor,
          props.switchIndicator,
          props.vertical
        ),
        narrowIndicator: props.narrowIndicator,
        inlineLabel: props.inlineLabel,
        noCaps: props.noCaps
      }));
      const hasActiveTab = vue.computed(() => {
        const len = tabDataListLen.value;
        const val = currentModel.value;
        for (let i = 0; i < len; i++) {
          if (tabDataList[i].name.value === val) {
            return true;
          }
        }
        return false;
      });
      function updateModel({ name, setCurrent, skipEmit, fromRoute }) {
        if (currentModel.value !== name) {
          if (skipEmit !== true) {
            emit("update:modelValue", name);
          }
          if (setCurrent === true) {
            currentModel.value = name;
          }
        }
      }
      const $tabs = {
        currentModel,
        tabProps,
        hasFocus,
        hasActiveTab,
        updateModel
      };
      vue.provide(tabsKey, $tabs);
      vue.onMounted((e) => {
      });
      return {
        classes,
        innerClass
      };
    },
    mounted() {
    }
  });
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([_ctx.classes, _ctx.className]),
      role: "tablist"
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.innerClass)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2)
    ], 2);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-tabs/q-tabs.vue"]]);
  const _sfc_main$2 = {
    __name: "tabs",
    setup(__props) {
      const tab = vue.ref("mails");
      return (_ctx, _cache) => {
        const _component_q_tab = resolveEasycom(vue.resolveDynamicComponent("q-tab"), __easycom_0);
        const _component_q_tabs = resolveEasycom(vue.resolveDynamicComponent("q-tabs"), __easycom_1);
        const _component_Lanmu = vue.resolveComponent("Lanmu");
        const _component_q_badge = resolveEasycom(vue.resolveDynamicComponent("q-badge"), __easycom_2$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "wrapper" }, [
          vue.createVNode(_component_Lanmu, { title: "Tabs" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "q-pa-sm" }, " Tab: " + vue.toDisplayString(tab.value), 1),
              vue.createElementVNode("view", { class: "text-grey" }, " \u8BBE\u7F6E\uFF1Anarrow-indicator "),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
                "narrow-indicator": "",
                class: "uni text-teal"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail",
                    label: "Mails"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm",
                    label: "Alarms"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "movies",
                    icon: "movie",
                    label: "Movies"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createElementVNode("view", { class: "text-grey" }, " \u8BBE\u7F6E\uFF1Ainline-label "),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tab.value = $event),
                "inline-label": "",
                className: "bg-purple text-white shadow-2"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail",
                    label: "Mails"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm",
                    label: "Alarms"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "movies",
                    icon: "movie",
                    label: "Movies"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createElementVNode("view", { class: "text-grey" }, " \u5355\u56FE\u6807 "),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => tab.value = $event),
                className: "bg-teal text-yellow shadow-2"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "movies",
                    icon: "movie"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createElementVNode("view", { class: "text-grey" }, "\u6EDA\u52A8Tab"),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => tab.value = $event),
                "inline-label": "",
                className: "bg-primary text-white shadow-2",
                align: "left"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail",
                    label: "Mails"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm",
                    label: "Alarms"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "movies",
                    icon: "movie",
                    label: "Movies"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "photos",
                    icon: "photo",
                    label: "Photos"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "videos",
                    icon: "slow_motion_video",
                    label: "Videos"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "addressbook",
                    icon: "people",
                    label: "Address Book"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_Lanmu, { title: "\u5176\u5B83\u6837\u5F0F" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "text-grey" }, "\u81EA\u5B9A\u4E49indicator-color"),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => tab.value = $event),
                "indicator-color": "purple",
                className: "text-teal"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "movies",
                    icon: "movie"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createElementVNode("view", { class: "text-grey" }, "\u7D27\u51D1 dense"),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => tab.value = $event),
                dense: "",
                "no-caps": "",
                "inline-label": "",
                className: "bg-purple text-white shadow-2"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail",
                    label: "Mails"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm",
                    label: "Alarms"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "movies",
                    icon: "movie",
                    label: "Movies"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createElementVNode("view", { class: "text-grey" }, "\u63D0\u793A"),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => tab.value = $event),
                className: "bg-primary text-white shadow-2"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail",
                    label: "Mails"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_q_badge, {
                        color: "red",
                        floating: ""
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("2")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm",
                    label: "Alarms"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_q_badge, {
                        color: "red",
                        floating: ""
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("10+")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_q_tab, {
                    alert: "",
                    name: "movies",
                    icon: "movie",
                    label: "Movies"
                  }),
                  vue.createVNode(_component_q_tab, {
                    alert: "yellow",
                    "alert-icon": "warning",
                    name: "photo",
                    icon: "photo",
                    label: "photo"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_Lanmu, { title: "Alignmeng" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tab.value = $event),
                dense: "",
                align: "left",
                className: "bg-primary text-white shadow-2",
                breakpoint: 0
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => tab.value = $event),
                dense: "",
                align: "center",
                className: "bg-primary text-white shadow-2",
                breakpoint: 0
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => tab.value = $event),
                dense: "",
                align: "right",
                className: "bg-primary text-white shadow-2",
                breakpoint: 0
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "q-pa-sm" }),
              vue.createVNode(_component_q_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => tab.value = $event),
                dense: "",
                align: "justify",
                className: "bg-primary text-white shadow-2",
                breakpoint: 0
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_tab, {
                    name: "mails",
                    icon: "mail"
                  }),
                  vue.createVNode(_component_q_tab, {
                    name: "alarms",
                    icon: "alarm"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  const PagesComponentsTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/AppProject/qui-demo/pages/components/tabs.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/broswer", PagesIndexBroswer);
  __definePage("pages/layout/grid_row", PagesLayoutGrid_row);
  __definePage("pages/layout/gutter", PagesLayoutGutter);
  __definePage("pages/layout/layout", PagesLayoutLayout);
  __definePage("pages/components/icon", PagesComponentsIcon);
  __definePage("pages/components/avatar", PagesComponentsAvatar);
  __definePage("pages/components/img", PagesComponentsImg);
  __definePage("pages/components/btn", PagesComponentsBtn);
  __definePage("pages/components/badge", PagesComponentsBadge);
  __definePage("pages/components/card", PagesComponentsCard);
  __definePage("pages/components/item", PagesComponentsItem);
  __definePage("pages/components/link", PagesComponentsLink);
  __definePage("pages/components/linear_progress", PagesComponentsLinear_progress);
  __definePage("pages/components/input", PagesComponentsInput);
  __definePage("pages/components/form", PagesComponentsForm);
  __definePage("pages/components/checkbox", PagesComponentsCheckbox);
  __definePage("pages/components/dialog", PagesComponentsDialog);
  __definePage("pages/components/date_picker", PagesComponentsDate_picker);
  __definePage("pages/components/tabs", PagesComponentsTabs);
  const _sfc_main$1 = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "E:/AppProject/qui-demo/App.vue"]]);
  const defineReactivePlugin = (state, plugin) => {
    const reactiveState = vue.reactive(state);
    for (const name in state) {
      injectProp(
        plugin,
        name,
        () => reactiveState[name],
        (val) => {
          reactiveState[name] = val;
        }
      );
    }
    return plugin;
  };
  const materialIcons = {
    name: "material-icons",
    type: {
      positive: "check_circle",
      negative: "warning",
      info: "info",
      warning: "priority_high"
    },
    arrow: {
      up: "arrow_upward",
      right: "arrow_forward",
      down: "arrow_downward",
      left: "arrow_back",
      dropdown: "arrow_drop_down"
    },
    chevron: {
      left: "chevron_left",
      right: "chevron_right"
    },
    colorPicker: {
      spectrum: "gradient",
      tune: "tune",
      palette: "style"
    },
    pullToRefresh: {
      icon: "refresh"
    },
    carousel: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
      navigationIcon: "lens"
    },
    chip: {
      remove: "cancel",
      selected: "check"
    },
    datetime: {
      arrowLeft: "chevron_left",
      arrowRight: "chevron_right",
      now: "access_time",
      today: "today"
    },
    editor: {
      bold: "format_bold",
      italic: "format_italic",
      strikethrough: "strikethrough_s",
      underline: "format_underlined",
      unorderedList: "format_list_bulleted",
      orderedList: "format_list_numbered",
      subscript: "vertical_align_bottom",
      superscript: "vertical_align_top",
      hyperlink: "link",
      toggleFullscreen: "fullscreen",
      quote: "format_quote",
      left: "format_align_left",
      center: "format_align_center",
      right: "format_align_right",
      justify: "format_align_justify",
      print: "print",
      outdent: "format_indent_decrease",
      indent: "format_indent_increase",
      removeFormat: "format_clear",
      formatting: "text_format",
      fontSize: "format_size",
      align: "format_align_left",
      hr: "remove",
      undo: "undo",
      redo: "redo",
      heading: "format_size",
      code: "code",
      size: "format_size",
      font: "font_download",
      viewSource: "code"
    },
    expansionItem: {
      icon: "keyboard_arrow_down",
      denseIcon: "arrow_drop_down"
    },
    fab: {
      icon: "add",
      activeIcon: "close"
    },
    field: {
      clear: "cancel",
      error: "error"
    },
    pagination: {
      first: "first_page",
      prev: "keyboard_arrow_left",
      next: "keyboard_arrow_right",
      last: "last_page"
    },
    rating: {
      icon: "grade"
    },
    stepper: {
      done: "check",
      active: "edit",
      error: "warning"
    },
    tabs: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down"
    },
    table: {
      arrowUp: "arrow_upward",
      warning: "warning",
      firstPage: "first_page",
      prevPage: "chevron_left",
      nextPage: "chevron_right",
      lastPage: "last_page"
    },
    tree: {
      icon: "play_arrow"
    },
    uploader: {
      done: "done",
      clear: "clear",
      add: "add_box",
      upload: "cloud_upload",
      removeQueue: "clear_all",
      removeUploaded: "done_all"
    }
  };
  const Plugin$2 = defineReactivePlugin({
    iconMapFn: null,
    __icons: {}
  }, {
    set(setObject) {
      const def = { ...setObject, rtl: setObject.rtl === true };
      def.set = Plugin$2.set;
      Object.assign(Plugin$2.__icons, def);
    },
    install({ $q, iconSet }) {
      if ($q.config.iconMapFn !== void 0) {
        this.iconMapFn = $q.config.iconMapFn;
      }
      formatAppLog("log", "at uni_modules/kv-qui/icon-set.js:21", "iconSet", iconSet);
      $q.iconSet = this.__icons;
      injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
        this.iconMapFn = val;
      });
      if (this.__installed === true) {
        iconSet !== void 0 && this.set(iconSet);
      } else {
        this.set(iconSet || materialIcons);
      }
    }
  });
  const Plugin$1 = defineReactivePlugin({
    isActive: false,
    mode: false
  }, {
    __media: void 0,
    set(val) {
      Plugin$1.mode = val;
      Plugin$1.isActive = val === true;
    },
    toggle() {
      Plugin$1.set(Plugin$1.isActive === false);
    },
    install({ $q }) {
      let { dark } = $q.config;
      if (dark === void 0) {
        const { osTheme } = $q.platform;
        dark = osTheme && osTheme == "dark";
      }
      $q.dark = this;
      if (this.__installed === true && dark === void 0) {
        return;
      }
      this.isActive = dark === true;
      const initialVal = dark !== void 0 ? dark : false;
      this.set(initialVal);
    }
  });
  const Platform = {
    install(opts) {
      const { $q } = opts;
      const platform = Object.assign(uni.getWindowInfo(), uni.getSystemInfoSync());
      $q.platform = platform;
    }
  };
  const ClosePopup = {
    close(evt) {
      formatAppLog("log", "at uni_modules/kv-qui/plugins/ClosePopup.js:4", "close-popup", evt);
      uni.$emit("close-popup", evt);
    },
    install(opts) {
      const { $q } = opts;
      $q.closePopup = this.close;
    }
  };
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    clone: cloneDeep,
    format,
    uid,
    is
  }, Symbol.toStringTag, { value: "Module" }));
  const uniApi = {
    page,
    openUrl,
    parseUrl,
    install({ parentApp, $q }) {
      this.openUrl = (evt) => {
        const { webViewPath } = $q.config;
        evt = formatParam(evt, { root: webViewPath });
        openUrl(evt);
      };
      parentApp.config.globalProperties.$uni = this;
    }
  };
  const colors = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"];
  const autoInstalledPlugins = [
    Platform,
    ClosePopup,
    Plugin$1,
    Plugin$2
  ];
  function installPlugins(pluginOpts, pluginList) {
    pluginList.forEach((Plugin2) => {
      Plugin2.install(pluginOpts);
      Plugin2.__installed = true;
    });
  }
  const install = (app, uiOpts = {}) => {
    const $q = { utils, version: "2.10.1", colors };
    $q.config = uiOpts.config || {};
    app.config.globalProperties.$q = $q;
    app.provide(quasarKey, $q);
    formatAppLog("log", "at uni_modules/kv-qui/index.js:40", "--", $q);
    const pluginOpts = {
      parentApp: app,
      $q,
      lang: uiOpts.lang,
      iconSet: uiOpts.iconSet
    };
    installPlugins(pluginOpts, autoInstalledPlugins);
    uiOpts.plugins !== void 0 && installPlugins(pluginOpts, uiOpts.plugins);
    uniApi.install(pluginOpts);
  };
  const Qui = {
    install
  };
  function encode(value) {
    if (isDate(value) === true) {
      return "__q_date|" + value.toUTCString();
    }
    if (isRegexp(value) === true) {
      return "__q_expr|" + value.source;
    }
    if (typeof value === "number") {
      return "__q_numb|" + value;
    }
    if (typeof value === "boolean") {
      return "__q_bool|" + (value ? "1" : "0");
    }
    if (typeof value === "string") {
      return "__q_strn|" + value;
    }
    if (typeof value === "function") {
      return "__q_strn|" + value.toString();
    }
    if (value === Object(value)) {
      return "__q_objt|" + JSON.stringify(value);
    }
    return value;
  }
  function decode(value) {
    const length = value.length;
    if (length < 9) {
      return value;
    }
    const type = value.substring(0, 8);
    const source = value.substring(9);
    switch (type) {
      case "__q_date":
        return new Date(source);
      case "__q_expr":
        return new RegExp(source);
      case "__q_numb":
        return Number(source);
      case "__q_bool":
        return Boolean(source === "1");
      case "__q_strn":
        return "" + source;
      case "__q_objt":
        return JSON.parse(source);
      default:
        return value;
    }
  }
  function getStorage() {
    const webStorage = () => uni.getStorageInfoSync();
    const get = (key) => {
      const item = uni.getStorageSync(key);
      return item ? decode(item) : null;
    };
    return {
      has: (key) => get(key) !== "",
      getLength: () => webStorage().keys.length,
      getItem: get,
      getIndex: (index) => index < webStorage().keys.length ? get(webStorage().keys[index]) : null,
      getKey: (index) => index < webStorage().keys.length ? webStorage().keys[index] : null,
      getAll: () => {
        let key;
        const result = {}, len = webStorage().keys.length;
        for (let i = 0; i < len; i++) {
          key = webStorage().keys[i];
          result[key] = get(key);
        }
        return result;
      },
      getAllKeys: () => webStorage().keys,
      set: (key, value) => {
        uni.setStorageSync(key, encode(value));
      },
      remove: (key) => {
        uni.removeStorageSync(key);
      },
      clear: () => {
        uni.clearStorageSync();
      },
      isEmpty: () => webStorage().keys.length === 0
    };
  }
  const storage = getStorage();
  const Plugin = {
    install(opts) {
      const { $q } = opts;
      $q.localStorage = storage;
    }
  };
  Object.assign(Plugin, storage);
  const QuiConfig = {
    config: {
      headHeight: 44,
      footHeight: 50,
      notify: {
        position: "top",
        timeout: 2500
      },
      webViewPath: "/pages/index/broswer"
    },
    iconSet: {
      icon: "material-icons",
      field: {
        error: "error",
        clear: "cancel"
      }
    },
    lang: "zh-CN",
    plugins: [
      Plugin
    ]
  };
  const _sfc_main = {
    props: {
      title: String,
      contentClass: String,
      contentStyle: String
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "lanmu q-mx-sm q-mb-sm" }, [
      vue.createElementVNode("div", { class: "title text-subtitle1 text-bold q-pa-sm" }, vue.toDisplayString($props.title), 1),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["q-pa-sm", $props.contentClass]),
        style: vue.normalizeStyle($props.contentStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ]);
  }
  const Lanmu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2637a7a9"], ["__file", "E:/AppProject/qui-demo/components/Lanmu.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(Qui, QuiConfig);
    app.component("Lanmu", Lanmu);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
