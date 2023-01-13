import Vue from 'vue'
import { RECEIVE_USERINFO } from './mutation-types'
export default {
  // 更新用户信息
  [RECEIVE_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  }
}