import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
}
const mutations = {
    RECEIVECATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVEBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    RECEIVEFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
}
const actions = {
    async getCategoryList({ commit }) {
        const resule = await reqCategoryList()
        if (resule.code === 200) {
            commit("RECEIVECATEGORYLIST", resule.data);
        }
    },
    async getBannerList({ commit }) {
        const resule = await reqBannerList()
        if (resule.code === 200) {
            commit("RECEIVEBANNERLIST", resule.data);
        }
    },
    async getFloorList({ commit }) {
        // console.log(1)
        const resule = await reqFloorList()
        if (resule.code === 200) {
            commit("RECEIVEFLOORLIST", resule.data);
        }
    }
}
const getters = {}
export default ({
    state,
    mutations,
    actions,
    getters,
})