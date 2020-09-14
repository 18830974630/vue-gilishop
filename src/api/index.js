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