import { reqCategoryList } from '@/api'
const state = {
    categoryList: [],
}
const mutations = {
    RECEIVECATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    async getCategoryList({ commit }) {
        const resule = await reqCategoryList()
        if (resule.code === 200) {
            commit("RECEIVECATEGORYLIST", resule.data);
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