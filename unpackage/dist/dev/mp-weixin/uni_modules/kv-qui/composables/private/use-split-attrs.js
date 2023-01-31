"use strict";
const common_vendor = require("../../../../common/vendor.js");
const listenerRE = /^on[A-Z]/;
function useSplitAttrs(attrs, vnode) {
  const acc = {
    listeners: common_vendor.ref({}),
    attributes: common_vendor.ref({})
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
  common_vendor.onBeforeUpdate(update);
  update();
  return acc;
}
exports.useSplitAttrs = useSplitAttrs;
