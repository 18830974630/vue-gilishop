import { reqAddOrUpdateShopCart, reqShopCartList, reqUpdateCartIsChecked, reqDeleteCart } from '@/api'
//存数据的地方，多个属性的对象
const state = {
    shopCartList: []
}
//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
    RECEIVESHOPCARTLIST(state, shopCartList) {
        state.shopCartList = shopCartList;
    }
}

//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        const result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            // return 'faild'
            return Promise.reject(new Error('faild'))
        }
    },
    async getShopCartList({ commit }) {
        const result = await reqShopCartList();
        if (result.code === 200) {
            commit('RECEIVESHOPCARTLIST', result.data);
        }
    },
    async updateCartIsChecked({ commit }, { skuId, isChecked }) {
        const result = await reqUpdateCartIsChecked(skuId, isChecked);
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faild'))
        }
    },
    updateAllCartIsChecked({ state, dispatch }, isChecked) {
        let Promises = [];
        state.shopCartList.forEach(item => {
            if (item.isChecked === isChecked) return
            const promise = dispatch('updateCartIsChecked', { skuId: item.skuId, isChecked: isChecked })
            Promises.push(promise);
        });
        return Promise.all(Promises);
    },
    async deleteCart({ commit }, skuId) {
        const result = await reqDeleteCart(skuId);
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faild'))
        }
    },
    deleteAllCart({ state, dispatch }) {
        let Promises = [];
        state.shopCartList.forEach((item) => {
            if (!item.isChecked) return;
            const promise = dispatch('deleteCart', item.skuId);
            Promises.push(promise);
        })
        return Promise.all(Promises);
    }


}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}