import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
export default [
    {

        path: '/trade',
        component: Trade
    },
    {

        path: '/pay',
        component: Pay
    },
    {

        path: '/paysuccess',
        component: PaySuccess
    },
    {
        // 购物车
        path: '/shopcart',
        component: ShopCart
    },
    {
        // 加入购物车
        path: '/addcartsuccess',
        component: AddCartSuccess
    },
    {
        // 商品详情页
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
