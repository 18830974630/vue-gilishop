import { reqUserRegister, reqUserLogin, reqUserLogout } from '@/api'
import { getUserTempId } from '@/utils/userabout'
//存数据的地方，多个属性的对象
const state = {
    userTempId: getUserTempId(),
    userInfo: JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}
}
//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
    RECEIVEUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    RECEIVEUSERLOGOUT(state) {
        state.userInfo = {}
    }
}


const actions = {
    async userRegister({ commit }, userInfo) {
        // console.log(111)
        const result = await reqUserRegister(userInfo);
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faild'))
        }
    },

    async userLogin({ commit }, userInfo) {
        const result = await reqUserLogin(userInfo);
        if (result.code === 200) {
            // 保存用户账号信息，实现自动登录
            commit('RECEIVEUSERINFO', result.data)
            localStorage.setItem('USERINFO_KEY', JSON.stringify(result.data))
            return 'ok'
        } else {
            return Promise.reject(new Error('faild'));
        }
    },

    async userLogout({ commit }) {
        const result = await reqUserLogout();
        if (result.code === 200) {
            commit('RECEIVEUSERLOGOUT');
            localStorage.removeItem('USERINFO_KEY')
            return 'ok'
        } else {
            return Promise.reject(new Error('faild'))
        }
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