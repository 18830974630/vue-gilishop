import { reqTradeInfo } from "@/api"


const state = {
    tradeInfo: {}
}
const mutations = {
    RECEIVETRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    async getTradeInfo({ commit }) {
        const result = await reqTradeInfo();
        if (result.code === 200) {
            commit('RECEIVETRADEINFO', result.data);
        }
    }
}
const getters = {
    detailArrayList() {
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList() {
        return state.tradeInfo.userAddressList || []
    }
}

export default ({
    state,
    mutations,
    actions,
    getters
})