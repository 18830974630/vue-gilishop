import store from '@/store';
import axios from 'axios'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
const instance = axios.create({
    baseURL: '/api',
    timeout: 200000,
})
instance.interceptors.request.use(function (config) {
    NProgress.start();
    let userTempId = store.state.user.userTempId;
    if (userTempId) {
        config.headers.userTempId = userTempId;
    }
    let token = store.state.user.userInfo.token
    if (token) {
        config.headers.token = token
        // config.headers.token = '90aa16f24d04c7d882051412f9ec45b'
    }
    return config;
});


instance.interceptors.response.use(function (response) {
    NProgress.done();
    return response.data;
}, function (error) {
    NProgress.done();
    alert("请求发送失败" + error.message || "未知错误");
    return new Promise(() => { });
});

export default instance