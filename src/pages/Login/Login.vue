<!--  -->
<template>
  <div class="container">
    <div class='Cat_Login'>
      <h2>猫咪会员登录</h2>
      <form>
        <div>
          <span class="name">用户名:</span><input type="text"
                 v-model="name"
                 placeholder="请输入用户名" />
        </div>
        <div>
          <span class="pwd">密</span>码:<input type="password"
                 v-model="pwd"
                 placeholder="请输入密码" />
        </div>
        <div>
          <span class="yzm">验证码:</span><input type="text"
                 v-model="captcha"
                 placeholder="请输入验证码" />
        </div>
        <div>
          <img ref="im"
               class="get_verification"
               src="http://localhost:5000/captcha"
               alt="captcha" />
          <span @click="sendCaptcha">看不清楚?换一张</span>
        </div>
        <Button class="btn_Login"
                @click="Login">登录</Button>
      </form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Login',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      name: '',
      pwd: '',
      captcha: ''
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取图形验证码
    sendCaptcha() {
      // 图标标签
      this.$refs.im.src = 'http://localhost:5000/captcha?time=' + Date.now()
    },
    // 登录
    async Login(e) {
      e.preventDefault()
      // eslint-disable-next-line no-console
      console.log(11, this)
      // const { name, pwd, captcha } = this
      // 用户名登录方式
      let names = ['name', 'pwd', 'captcha']

      // 无论是哪种方式,都要进行验证
      const success = await this.$validator.validateAll(names)
      if (success) {
        // eslint-disable-next-line no-console
        console.log(1111111111);
        this.$router.push('/catBreed')
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='stylus' scoped>
.container
  width 100%
  height 100%
  position absolute
  display flex
  align-items center // align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
  justify-content center // justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
  .Cat_Login
    display flex
    flex-direction column // 变换主侧轴
    align-items center
    justify-content center
    // position absolute
    // margin auto
    // left 0
    // top 0
    // bottom 0
    // right 0
    width 60%
    height 60%
    border 2px solid #ccc
    font-size 18px
    border-radius 20px
    h2
      text-align center
      color yellow
    form
      width 60%
      display flex
      flex-direction column // 变换主侧轴
      align-items center
      justify-content center
      // display flex
      // flex-direction column // 变换主侧轴
      // align-items center
      // justify-content space-around
      input
        border-radius 5px
        width 150px
        height 20px
        border 1px solid #ccc
      .btn_Login
        width 80px
        height 40px
        font-size 20px
        color white
        font-weight bold
        // margin-left 20%
        background-color yellow
        border 0
      .pwd
        letter-spacing 18px
</style>