// 引入路由组件
// 路由的懒加载
const Login = () => import('../pages/Login/Login.vue')
const Register = () => import('../pages/Register/Register.vue')
import CatBreed from '../pages/CatBreed/CatBreed.vue'
import CatBreedDetail from '../pages/CatBreedDetail/CatBreedDetail.vue'
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/catBreed',
    component: CatBreed,
  },
  {
    path: '/catBreedDetail:catBreed',
    name:'catBreedDetail',
    component: CatBreedDetail,
  },
  {
    path: '/',
    redirect: '/catBreed'
  }

]