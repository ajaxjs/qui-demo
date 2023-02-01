"use strict";
const uni_modules_kvQui_utils_clone = require("./utils/clone.js");
const uni_modules_kvQui_utils_format = require("./utils/format.js");
const uni_modules_kvQui_utils_uid = require("./utils/uid.js");
const uni_modules_kvQui_utils_is = require("./utils/is.js");
const uni_modules_kvQui_utils_each = require("./utils/each.js");
const pages = [
  {
    path: "pages/index/index",
    style: {
      navigationBarTitleText: "uni-app"
    }
  },
  {
    path: "pages/index/broswer",
    style: {
      navigationBarTitleText: "Loading..."
    }
  },
  {
    path: "pages/layout/grid_row",
    style: {
      navigationBarTitleText: "Grid Row"
    }
  },
  {
    path: "pages/layout/gutter",
    style: {
      navigationBarTitleText: "Grid Row"
    }
  },
  {
    path: "pages/layout/layout",
    style: {
      navigationBarTitleText: "Layout",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/layout/layout2",
    style: {
      navigationBarTitleText: "Layout"
    }
  },
  {
    path: "pages/components/icon",
    style: {
      navigationBarTitleText: "Icon"
    }
  },
  {
    path: "pages/components/avatar",
    style: {
      navigationBarTitleText: "Avatar"
    }
  },
  {
    path: "pages/components/img",
    style: {
      navigationBarTitleText: "Image"
    }
  },
  {
    path: "pages/components/btn",
    style: {
      navigationBarTitleText: "Button"
    }
  },
  {
    path: "pages/components/badge",
    style: {
      navigationBarTitleText: "Button"
    }
  },
  {
    path: "pages/components/card",
    style: {
      navigationBarTitleText: "Button"
    }
  },
  {
    path: "pages/components/item",
    style: {
      navigationBarTitleText: "List&Item"
    }
  },
  {
    path: "pages/components/link",
    style: {
      navigationBarTitleText: "Link"
    }
  },
  {
    path: "pages/components/linear_progress",
    style: {
      navigationBarTitleText: "linear Progress"
    }
  },
  {
    path: "pages/components/input",
    style: {
      navigationBarTitleText: "Field & Input"
    }
  },
  {
    path: "pages/components/form",
    style: {
      navigationBarTitleText: "Form"
    }
  },
  {
    path: "pages/components/checkbox",
    style: {
      navigationBarTitleText: "Checkbox & Radio"
    }
  },
  {
    path: "pages/components/dialog",
    style: {
      navigationBarTitleText: "Dialog"
    }
  },
  {
    path: "pages/components/date_picker",
    style: {
      navigationBarTitleText: "Date & Picker"
    }
  },
  {
    path: "pages/components/tabs",
    style: {
      navigationBarTitleText: "Tabs"
    }
  },
  {
    path: "pages/components/swiper",
    style: {
      navigationBarTitleText: "Swiper"
    }
  },
  {
    path: "pages/plugins/uniapp",
    style: {
      navigationBarTitleText: "Uniapp \u5C01\u88C5"
    }
  }
];
const getRoute = (name) => {
  const page = pages.filter((vo) => vo.path == getCurrentPages().pop().route)[0];
  console.log("---page", page);
  return page && name ? page.style[name] : page;
};
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRoute,
  clone: uni_modules_kvQui_utils_clone.cloneDeep,
  format: uni_modules_kvQui_utils_format.format,
  uid: uni_modules_kvQui_utils_uid.uid,
  is: uni_modules_kvQui_utils_is.is,
  each: uni_modules_kvQui_utils_each.each
}, Symbol.toStringTag, { value: "Module" }));
exports.utils = utils;
