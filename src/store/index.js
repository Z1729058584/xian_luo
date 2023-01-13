import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex) // 使用vuex,将state,mutations,mutation-types,actions,getters注册到Store里面
export default new Vuex.Store({ // 将Store暴露出去
  state,
  mutations,
  actions,
  getters
})