import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default new VueRouter({
    routes: [
        {
            // 主页
            path: "/home",
            component: Home,
        },
        {
            // 登录
            path: "/login",
            component: Login,
            meta: {
                isHide:true
            },
        },
        {
            // 注册
            path: "/register",
            component: Register,
            meta: {
                isHide:true
            },
        },
        {
            // 搜索
            path: "/search",
            component: Search,
        },
        {
            path: "/",
            redirect:"/home",
        },
    ]
})