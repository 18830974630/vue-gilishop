import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
Vue.config.productionTip = false
import "swiper/css/swiper.min.css";

import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav', TypeNav)
import SliderLoop from '@/components/SilderLoop'
Vue.component('SliderLoop', SliderLoop)

import Pagination2 from '@/components/Pagination2'
import * as API from '@/api'

import { MessageBox, Message, Pagination } from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.use(Pagination)

import './validate'
import VueLazyload from 'vue-lazyload'
// import loading from '@/assets/images/loading.gif'
import loading from '@/assets/images/loading.png'
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
    loading,  // 指定未加载得到图片之前的loading图片
})
Vue.component('Pagination2', Pagination2)
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$Api = API;
    },
    router,
    store,
})