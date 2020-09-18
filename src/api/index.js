import Ajax from '@/ajax/Ajax'
import mockAjak from '@/ajax/mockAjax'

//请求三级分类列表数据函数
export const reqCategoryList = () => {
    return Ajax({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}
//请求获取mock的banner和floor数据
export const reqBannerList = () => {
    return mockAjak({
        url: '/banner',
        method: 'get'
    })
}

export const reqFloorList = () => {
    return mockAjak({
        url: '/floor',
        method: 'get',
    })
}
//请求获取search的商品列表数据
export const reqGoodsListInfo = (searchParams) => {
    return Ajax({
        url: '/list',
        method: 'post',
        data: searchParams,
    })
}
//请求获取商品详情数据
export const reqGoodsDetailInfo = (skuId) => {
    return Ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

//请求添加购物车（修改购物车数量）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return Ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}
//请求获取购物车列表数据
export const reqShopCartList = () => {
    return Ajax({
        url: '/cart/cartList',
        method: 'get'
    })
}
//请求修改购物车的选中状态
export const reqUpdateCartIsChecked = (skuId, isChecked) => {
    return Ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}

//请求删除购物车  /api/cart/deleteCart/{skuId}  delete
export const reqDeleteCart = (skuId) => {
    return Ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

//请求注册用户  /api/user/passport/register  post  
export const reqUserRegister = (userInfo) => {
    return Ajax({
        url: '/user/passport/register',
        method: 'post',
        data: userInfo
    })
}

//请求登录用户
export const reqUserLogin = (userInfo) => {
    return Ajax({
        url: '/user/passport/login',
        method: 'post',
        data: userInfo
    })
}

//请求退出登录 /api/user/passport/logout get
export const reqUserLogout = () => {
    return Ajax({
        url: '/user/passport/logout',
        method: 'get',
    })
}


//请求获取订单交易信息 /api/order/auth/trade  get
export const reqTradeInfo = () => {
    return Ajax({
        url: '/order/auth/trade',
        method: 'get'
    })
}


//请求提交订单（创建订单）  /api/order/auth/submitOrder?tradeNo={tradeNo}    post
export const reqSubmitOrder = (tradeNo, tradeInfo) => {
    return Ajax({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method: 'post',
        data: tradeInfo
    })
}

//请求获取支付信息 /api/payment/weixin/createNative/{orderId}  get
export const reqPayInfo = (orderId) => {
    return Ajax({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get'
    })
}


// /api/payment/weixin/queryPayStatus/{orderId}   支付状态
export const reqPayStatus = (orderId) => {
    return Ajax({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: "get"
    })
}


// /api/order/auth/{page}/{limit}   get   请求订单列表
export const reqOrderInfo = (page, limit) => {
    return Ajax({
        url: `/order/auth/${page}/${limit}`,
        method: "get"
    })
}