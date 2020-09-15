import Ajax from '@/ajax/Ajax'
import mockAjak from '@/ajax/mockAjax'

export const reqCategoryList = () => {
    return Ajax({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

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

export const reqGoodsListInfo = (searchParams) => {
    return Ajax({
        url: '/list',
        method: 'post',
        data: searchParams,
    })
}

export const reqGoodsDetailInfo = (skuId) => {
    return Ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return Ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

export const reqShopCartList = () => {
    return Ajax({
        url: '/cart/cartList',
        method: 'get'
    })
}
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
