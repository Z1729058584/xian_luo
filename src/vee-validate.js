// vue表单验证
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)


VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    name: '用户名',
    pwd: '密码',
    captcha: '图形验证码'
  }
})
// const dictionary = {
//   en: {
//     messages: {
//       // <input type="text" v-model="phoneNumber" name="phone" v-validate="'required|phone'">
//       // 不满足required条件时，显示的提示对应下面的设置
//       required: (field) => `${field} is necessary!`,
//     },
//     attributes: {
//       // <input type="text" v-model="phoneNumber" name="phone" v-validate="'required|phone'">
//       // 上述messages提示信息中field显示的内容在此设置，对应标签的name属性
//       phone: 'Phone Number',
//     }
//   }
// }
VeeValidate.Validator.extend('changePhone', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {
    return /[1]\d{10}/.test(value)
  }
})
// 手机号验证
export function isvalidPhone (str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}