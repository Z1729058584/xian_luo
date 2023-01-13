import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入route.js文件
import routes from './routes'
// 使用路由
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes
})