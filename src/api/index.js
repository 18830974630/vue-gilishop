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
        method:'get',
    })
}