"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_kvQui_utils_is = require("../../uni_modules/kv-qui/utils/is.js");
if (!Array) {
  const _easycom_q_swiper2 = common_vendor.resolveComponent("q-swiper");
  const _easycom_q_checkbox2 = common_vendor.resolveComponent("q-checkbox");
  const _component_HiCode = common_vendor.resolveComponent("HiCode");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_swiper2 + _easycom_q_checkbox2 + _component_HiCode + _component_Lanmu + _easycom_q_page2)();
}
const _easycom_q_swiper = () => "../../uni_modules/kv-qui/components/q-swiper/q-swiper.js";
const _easycom_q_checkbox = () => "../../uni_modules/kv-qui/components/q-checkbox/q-checkbox.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_swiper + _easycom_q_checkbox + _easycom_q_page)();
}
const _sfc_main = {
  __name: "swiper",
  setup(__props) {
    const tab = common_vendor.ref("mails");
    const tab1 = common_vendor.ref(0);
    const conf = common_vendor.ref({
      indicatorDots: true,
      autoplay: false,
      vertical: false,
      circular: false
    });
    const options = [
      { src: "https://cdn.quasar.dev/img/parallax1.jpg", title: "\u5E26\u6807\u9898\u7684" },
      { src: "https://cdn.quasar.dev/img/parallax2.jpg", title: { text: "\u5E26\u9AD8\u7EA7\u6807\u9898\uFF0C\u8BBE\u7F6E\u4F4D\u7F6E\u548C\u6837\u5F0F", position: "top", class: "text-yellow" } },
      { src: "https://cdn.quasar.dev/img/mountains.jpg", title: "\u5E26\u8FDE\u63A5\u7684", to: "/pages/index/index", target: "tab" }
    ];
    const onClick = (evt) => {
      console.log(evt);
    };
    const code1 = common_vendor.computed$1(() => {
      const swconf = [];
      for (var i in conf.value) {
        const vo = conf.value[i];
        if (uni_modules_kvQui_utils_is.isBoolean(vo) && vo) {
          swconf.push(i);
        }
      }
      return `\u53C2\u6570\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/component/swiper.html

<q-swiper v-model="tab" 
	${swconf.join("\r\n	")}
>
	<template #item-mails>
		<view class="fit bg-orange">1.item-mails</view>
	</template>
	<template #item-alarms>
		<view class="fit bg-blue">2.item-alarms</view>
	</template>
	<template #item-movies>
		<view class="fit bg-green">3.item-movies</view>
	</template>
</q-swiper>`;
    });
    const code2 = [{ title: "template", code: `<q-swiper v-model="tab1" :options="options" indicatorDots @click="onClick"></q-swiper>` }, {
      title: "Script",
      code: `export default {
  date(){
    return {
      options: [${options.map((vo) => JSON.stringify(vo)).join("\r\n	")}]
    }
  }
}`
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => tab.value = $event),
        b: common_vendor.p({
          indicatorDots: conf.value.indicatorDots,
          autoplay: conf.value.autoplay,
          vertical: conf.value.vertical,
          circular: conf.value.circular,
          modelValue: tab.value
        }),
        c: common_vendor.t(tab.value),
        d: common_vendor.o(($event) => conf.value.autoplay = $event),
        e: common_vendor.p({
          label: "\u81EA\u52A8\u64AD\u653E",
          modelValue: conf.value.autoplay
        }),
        f: common_vendor.o(($event) => conf.value.vertical = $event),
        g: common_vendor.p({
          label: "\u662F\u5426\u7EB5\u5411",
          modelValue: conf.value.vertical
        }),
        h: common_vendor.o(($event) => conf.value.circular = $event),
        i: common_vendor.p({
          label: "\u5934\u5C3E\u8854\u63A5",
          modelValue: conf.value.circular
        }),
        j: common_vendor.o(($event) => conf.value.indicatorDots = $event),
        k: common_vendor.p({
          label: "\u663E\u793ADOT",
          modelValue: conf.value.indicatorDots
        }),
        l: common_vendor.p({
          hide: true,
          title: "\u793A\u4F8B\u4EE3\u7801",
          code: common_vendor.unref(code1)
        }),
        m: common_vendor.p({
          title: "Slot Swiper"
        }),
        n: common_vendor.o(onClick),
        o: common_vendor.o(($event) => tab1.value = $event),
        p: common_vendor.p({
          options,
          indicatorDots: true,
          modelValue: tab1.value
        }),
        q: common_vendor.t(tab1.value),
        r: common_vendor.p({
          hide: true,
          code: code2
        }),
        s: common_vendor.p({
          title: "Array Swiper"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/pages/components/swiper.vue"]]);
wx.createPage(MiniProgramPage);
