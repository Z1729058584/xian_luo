// 引入mmutation-types

import { RECEIVE_USERINFO } from './mutation-types'
import { ReqRegister, ReqLogin } from '../api'
export default {
  // 注册
  async Register ({ commit, state }, user) {
    console.log(user);
    // const { name, pwd, phone, email } = state
    // 发送异步请求
    const result = await ReqRegister(user)

    if (result.code === 0) {
      // eslint-disable-next-line no-console
      console.log("请求成功成功");
    }
  }
  // 登录
}