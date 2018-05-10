// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import  { LoadingPlugin, ToastPlugin } from 'vux'
import './utils/rem'
import '../static/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(LoadingPlugin).use(ToastPlugin).use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '../static/loading.gif',
  attempt: 1
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
