import Vue from 'vue'
import App from './App.vue'
// 引入路由器并注册
import router from './router'
// 引入部分组件
import { Button, Input, Form, FormItem } from 'element-ui';
// 引入store文件
import store from './store'
// 引入公共组件


// 引入表单验证插件
import './vee-validate.js'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
