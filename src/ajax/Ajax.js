import axios from 'axios'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
const instance = axios.create({
    baseURL: '/api',
    timeout: 200000,
})
instance.interceptors.request.use(function(config) {
    NProgress.start();
    return config;
});


instance.interceptors.response.use(function(response) {
    NProgress.done();
    return response.data;
}, function(error) {
    NProgress.done();
    alert("请求发送失败" + error.messoge || "未知错误");
    return new Promise(() => {});
});

export default instance