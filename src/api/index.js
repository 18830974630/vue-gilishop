import Ajak from '@/ajak/Ajak'

export const reqCategoryList = () => {
    return Ajak({
        url: "/product/getBaseCategoryList",
        method: "get",
    })
}

