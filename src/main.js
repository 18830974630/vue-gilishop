import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from '@/router'

import TypeNav from '@/pages/Home/TypeNav'
Vue.component('TypeNav', TypeNav)

new Vue({
  el:"#app",
  render: h => h(App),
  router,
})
