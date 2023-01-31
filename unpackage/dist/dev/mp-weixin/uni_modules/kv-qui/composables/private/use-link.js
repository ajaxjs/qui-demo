"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_uniapp_page = require("../../utils/uniapp/page.js");
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
  const { proxy } = common_vendor.getCurrentInstance();
  const linkActive = common_vendor.computed$1(() => "/" + uni_modules_kvQui_utils_uniapp_page.currentPage().route == proxy.to);
  const linkType = common_vendor.computed$1(() => props.to ? "to" : props.mp ? "mp" : props.href ? "href" : "");
  const hasLink = common_vendor.computed$1(() => linkType.value ? true : false);
  const linkClass = common_vendor.computed$1(() => hasLink.value === true ? linkActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : "" : "");
  const linkAttrs = common_vendor.computed$1(() => {
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
exports.useLink = useLink;
exports.useLinkProps = useLinkProps;
