import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
import store from '@/store'
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originPush.call(this, location).catch(() => { })
    } else {
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => { })
    } else {
        return originReplace.call(this, location, onResolved, onRejected)
    }
}



const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    let targetPath = to.path
    if (targetPath.indexOf('/pay') === 0 || targetPath.startsWith('/trade') || targetPath.startsWith('/center')) {
        if (store.state.user.userInfo.name) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
});
export default router

