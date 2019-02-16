import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import App from './app.vue'
import createStore from './store/store'
import createRouter from './config/router'
// import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './styles/index.scss' // global css

import common from './util/commonFun.js' // 公共方法
if (typeof window !== 'undefined') {
  require('element-ui/lib/theme-chalk/index.css')
}
Vue.prototype.common = common
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(ElementUI, {locale})

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
