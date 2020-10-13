// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// import GroupOrder from '@/pages/Center/GroupOrder'
// import MyOrder from '@/pages/Center/MyOrder'

const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Search = () => import('@/pages/Search')
const Detail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
const GroupOrder = () => import('@/pages/Center/GroupOrder')
const MyOrder = () => import('@/pages/Center/MyOrder')

import store from '@/store'
export default [
    {
        path: '/center',
        component: Center,
        children: [
            {
                path: "grouporder",
                component: GroupOrder
            },
            {
                path: "myorder",
                component: MyOrder
            },
            {
                path: "",
                redirect: "myorder"
            }
        ]
    },
    {
        path: '/trade',
        component: Trade,
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        beforeEnter: (to, from, next) => {
            if (from.path === '/pay') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        // 购物车
        path: '/shopcart',
        component: ShopCart
    },
    {
        // 加入购物车
        path: '/addcartsuccess',
        component: AddCartSuccess,
        beforeEnter: (to, from, next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if (skuNum && skuInfo) {
                next()
            } else {
                next(false)
            }
        }
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
        beforeEnter: (to, from, next) => {
            if (store.state.user.userInfo.name) {
                next('/')
            } else {
                next()
            }
        }
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
