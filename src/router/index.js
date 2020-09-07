import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originPush.call(this, location).catch(() => { })
    } else {
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => { })
    } else {
        return originReplace.call(this, location, onResolved, onRejected)
    }
}



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
                isHide: true
            },
        },
        {
            // 注册
            path: "/register",
            component: Register,
            meta: {
                isHide: true
            },
        },
        {
            // 搜索
            path: "/search/:keyword?",
            component: Search,
            name: "search",
        },
        {
            path: "/",
            redirect: "/home",
        },
    ]
})