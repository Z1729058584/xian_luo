<template>
  <div>
    <!--  网页头部  -->
    <header>
      <div class="header_wrap">
        <div class="center_1220">
          <div class="left_float">当前所在城市</div>
          <div class="country">
            全国
            <div class="country_display">
              <div class="country_right">
                <a target="_blank"  href="">安徽</a>
                <a target="_blank"  href="">广东</a>
                <a target="_blank"  href="">河南</a>
                <a target="_blank"  href="">江西</a>
                <a target="_blank"  href="">上海</a>
                <a target="_blank"  href="">天津</a>
                <a target="_blank"  href="">云南</a>
                <a target="_blank"  href="">澳门</a>
                <a target="_blank"  href="">广西</a>
                <a target="_blank"  href="">河北</a>
                <a target="_blank"  href="">吉林</a>
                <a target="_blank"  href="">山东</a>
                <a target="_blank"  href="">台湾</a>
                <a target="_blank"  href="">浙江</a>
                <a target="_blank"  href="">北京</a>
                <a target="_blank"  href="">贵州</a>
                <a target="_blank"  href="">湖南</a>
                <a target="_blank"  href="">辽宁</a>
                <a target="_blank"  href="">四川</a>
                <a target="_blank"  href="">西藏</a>
                <a target="_blank"  href="">黑龙江</a>
                <a target="_blank"  href="">重庆</a>
                <a target="_blank"  href="">甘肃</a>
                <a target="_blank"  href="">海南</a>
                <a target="_blank"  href="">宁夏</a>
                <a target="_blank"  href="">陕西</a>
                <a target="_blank"  href="">新疆</a>
                <a target="_blank"  href="">内蒙古</a>
                <a target="_blank"  href="">福建</a>
                <a target="_blank"  href="">湖北</a>
                <a target="_blank"  href="">江苏</a>
                <a target="_blank"  href="">青海</a>
                <a target="_blank"  href="">山西</a>
                <a target="_blank"  href="">香港</a>
                <a></a>
              </div>
            </div>
          </div>
          <div class="float_right">
            <a href="">登录</a>
            |
            <a>免费注册</a>
          </div>
          <div class="center_text">您好,<strong></strong>,欢迎来到猫咪交易网</div>
        </div>
      </div>
      <div class="clear_both"></div>
      <div class="nav_center_1220">
        <!--导航栏nav-->
        <div id="nav_box">
          <div class="nav_box_left">
            <a target="_blank" href="">
              首页
              <div class="background_color">
                <span></span>
              </div>
            </a>
            <a target="_blank" href="">
              买猫卖猫
              <div class="background_color">
                <span></span>
              </div></a>
            <a target="_blank" href="">
              猫咪资讯
              <div class="background_color">
                <span></span>
              </div>
            </a>
            <a target="_blank" href="">
              选猫知识
              <div class="background_color">
                <span></span>
              </div>
            </a>
            <a target="_blank" href="">
              猫咪品种
              <div class="background_color">
                <span></span>
              </div>
            </a>
          </div>
          <div class="nav_box_right">
            <a target="_blank" href="">
              加入我们
              <div class="background_color">
                <span></span>
              </div>
            </a>
            <a target="_blank" href="">
              联系我们
              <div class="background_color">
                <span></span>
              </div>
            </a>
            <a target="_blank" href="">
              关于我们
              <div class="background_color">
                <span></span>
              </div>
            </a>
            <a target="_blank" href="">
              发布信息
              <div class="background_color">
                <span></span>
              </div>
            </a>
          </div>
          <div class="header_logo">
            <a href="">
              <img title="猫咪交易网" src="../../assets/images/meiduan.jpg" alt="猫咪交易网">
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    background #fff
    box-shadow: 0 3px 55px -30px #001e39;

    .header_wrap
      background #2a2f35
      min-width 1220px
      width 100%
      height 29px
      color #fff

      .center_1220
        width 1220px
        margin 0 auto

        .left_float
          background url("../../assets/images/buou.jpg") no-repeat
          background-position 3px 6px
          width 120px
          height 29px
          line-height 29px
          text-align center
          cursor pointer
          float left
          font-size 12px

        .country
          background-image url("../../assets/images/lihua.jpg")
          display inline-block
          background-repeat no-repeat
          background-position 31px 9px
          width 50px
          height 29px
          line-height 29px
          text-align left
          position relative
          cursor pointer
          float left
          font-size 12px
          &:hover
            background-image url("../../images/country_display_block.png")
            .country_display
              display block

          .country_display
            font-size 0
            position absolute
            top 29px
            left -5px
            width 430px
            background-color #2a2f35
            display none
            z-index 3
            &>div
              display inline-block
              vertical-align top

            .country_right
              margin 5px 10px
              width 410px
              font-size 0
              text-align left
              &>a
                color: #aaacae
                display: inline-block
                vertical-align: top
                padding: 0 5px
                height: 30px
                line-height: 30px
                font-size: 12px
                &:hover
                  color #fff

        .float_right
          float right
          line-height 29px
          display inline-block
          font-size 12px

          a
            color #fff

        .center_text
          float right
          line-height 29px
          margin-right 20px
          font-size 12px

    .clear_both
      clear both

    .nav_center_1220
      width 1220px
      margin 0 auto

      #nav_box
        height 80px
        position relative
        background #fff

        a
          height 40px
          margin-top 20px
          display inline-block
          vertical-align top
          line-height 40px
          font-size 16px
          color #333
          padding 0 15px
          position relative
          overflow hidden
          &:hover
            color #ea5413
            .background_color span
              width 100%

          .background_color
            height 2px
            background-color white
            position absolute
            left 10%
            width 80%
            bottom 0
            z-index 1
            text-align center
            span
              width 0
              height 2px
              transition 0.5s
              -moz-transition 0.5s
              -webkit-transition 0.5s
              -o-transition 0.5s
              display inline-block
              vertical-align top
              background-color #ff6542

        .nav_box_left
          float left
          font-size 0

        .nav_box_right
          float right
          font-size 0
          /*不清楚用处*/
          position relative

        .header_logo
          z-index 2
          position absolute
          top: 0
          border-bottom-left-radius 140px
          border-bottom-right-radius 140px
          box-shadow 0 3px 55px -30px #001e39
          width 198px
          height 84px
          text-align center
          left calc(50% - 99px)
          background white

          a
            display inline-block
            margin 0 auto
            width 118px
            height 117px
            padding 0

</style>