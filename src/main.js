import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav', TypeNav)
import SliderLoop from '@/components/SilderLoop'
Vue.component('SliderLoop', SliderLoop)
import Pagination from '@/components/Pagination'
Vue.component('Pagination',Pagination)
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store,
})