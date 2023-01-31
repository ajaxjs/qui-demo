import App from './App'

import Qui from '@/uni_modules/kv-qui/index.js'
import QuiConfig from './qui.config.js'
import '@/uni_modules/kv-qui/extras/material-icons/material-icons.css'

import Lanmu from '@/components/Lanmu.vue'
import HiCode from '@/components/hi-code/index.vue'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  // 应用UI
  app.use(Qui, QuiConfig)
  app.component('Lanmu', Lanmu)
  app.component('HiCode', HiCode)
  
  return {
    app
  }
}
// #endif