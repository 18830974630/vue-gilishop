import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
export default [
    {
        path: '/addcartsuccess',
        component: AddCartSuccess
    },
    {
        path: '/detail/:goodsId',
        component: Detail
    },
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
