<template>
  <div>
    <!--  网页头部  -->
    <Header/>
    <!--  内容  -->
    <main>
      <!--   大图   -->
      <a href="">
        <div class="img_tu">
          <img :src="cats.catBreedBigImgUrl" alt="">
        </div>
      </a>
      <!--   主要内容   -->
      <div class="center_1220">
        <div class="name">猫咪品种</div>
        <div class="english_name">
          <span class="line">——</span>
          THE CAT INFORMATION
          <span class="line">——</span>
        </div>
        <div class="information_content">
          <!--   猫品种左边    -->
          <div class="information_content_left">
            <a v-for="(cat, index) in cats.catBreedContent" :key="index" target="_blank" @click="goCatBreedDetail(index)">
              <img :src='cat.img' alt="猫咪品种" title="猫咪品种">
              <div class="pet_name">{{cat.name}}</div>
              <div class="pet_price">
                参考价格
                <span>{{cat.price}}</span>
              </div>
            </a>
          </div>
          <!--   猫品种右边    -->
          <div class="information_content_right">
            <div class="recommend">
              <a v-for="(ICR, index) in cats.informationContentRight" :key="index" href="">
                <div class="img">
                  <div class="good_top">顶荐</div>
                  <img :src="ICR.img" alt="">
                </div>
                <div class="red_line"></div>
                <div class="adv_name">
                  <div class="adv_name_top">
                    <span class="font_size12 red">精品推荐</span>
                    {{ICR.content}}
                  </div>
                  <div class="adv_name_bottom">
                    <span class="adv_price">
                      价格
                      <span class="red adv_price">{{ICR.price}}</span>
                    </span>
                  </div>
                </div>
                <div class="adv_business">
                  <span>{{ICR.shop}}</span>
                  <img src="../images/maomi_vip.jpg" alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--   友情链接   -->
      <!-- <FriendLink/> -->
    </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'CarBreed',
    // 界面显示之后
    async mounted() {
      await this.$store.dispatch('getCatsBreed')
    },
    computed: {
      ...mapState(['cats'])
    },
    methods: {
      goCatBreedDetail(index) {
          this.$router.push({
            name:'catBreedDetail',
            query:{
              catBreed:index
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  main
    a
      cursor pointer

      .img_tu
        width 1220px
        margin 0 auto
        height 320px
        position relative

        img
          position absolute
          top 0
          left -360px

    .center_1220
      width 1220px
      margin 0 auto

      .name
        display inline-block
        width 100%
        font-size 24px
        height 50px
        text-align center
        margin-top 30px

      .english_name
        font-size 14px
        line-height 20px
        text-align center
        color #b9b9b9
        margin-bottom 30px

      .line
        display inline-block
        vertical-align top
        margin 0 20px

      .information_content_left
        display inline-block
        vertical-align top
        width 950px
        margin-right 20px
        font-size: 0

        a
          text-decoration none
          display inline-block
          vertical-align top
          width 225px
          margin 10px 5px
          background-color #f6f6f6
          text-align center
          transition .3s

          &:hover
            background-color #ff6542

            .pet_name
              color #fff

            .pet_price
              color #fff

          img
            display block
            margin 12px 10px 0
            width 205px
            height 205px

          .pet_name
            margin-top 10px
            line-height 30px
            font-size 16px
            text-align center
            color #333
            transition .3s

          .pet_price
            line-height 30px
            font-size 16px
            text-align center
            color: #333
            margin-bottom 10px
            transition .3s

      .information_content_right
        background-color #fff
        display inline-block
        vertical-align top
        width 238px

        a
          display inline-block
          vertical-align top
          margin 0 4px
          border 1px solid #eeeeee
          width 228px
          background-color: #fff
          margin-bottom 54px
          text-decoration none

          &:hover
            .red_line
              width 91%

          .img
            height 195px
            width 228px
            position relative
            overflow hidden

            .good_top
              position absolute
              top 7px
              left -21px
              transform rotate(-45deg)
              width 80px
              height 25px
              color white
              font-size 14px
              text-align center
              line-height 25px
              background-color #EA5413

            img
              height 195px
              width 228px

          .red_line
            height 3px
            background-color #ea5413
            width 24px
            margin 14px 10px
            transition 0.5s

          .adv_name
            font-size 14px
            color #333
            padding 0 10px
            text-align left
            line-height 20px
            margin-bottom 14px
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow: hidden

            .adv_name_top
              width 100%
              height 66px
              line-height 22px
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 3
              -webkit-box-orient vertical
              font-size 14px
              text-align left

              .font_size12
                font-size 12px

            .red
              color #ff6542

            .adv_name_bottom
              width 100%
              height 22px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 14px
              text-align left

              .adv_price
                font-weight 800

          .adv_business
            color #999999
            font-size 12px
            line-height 20px
            margin-bottom 10px
            text-align left
            padding 0 10px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
</style>