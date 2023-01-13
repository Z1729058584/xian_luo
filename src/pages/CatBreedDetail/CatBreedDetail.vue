<template>
  <div>
    <!--  引入头部  -->
    <Header/>
    <!--  面包屑导航  -->
    <div class="center_1220">
      <div class="bread_crumb">
        你的位置
        <a href="/">首页</a>
        >
        <a style="cursor: pointer" @click="goCatBreed('/catBreed')">猫咪品种</a>
        >
        <a href="">{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</a>
      </div>
    </div>
    <!--  猫咪品种百科  -->
    <div class="cat_breed_encyclopedia">
      <div class="title">
        <!--   轮播图    -->
        <div class="left">
          <div class="big_img">
            <el-carousel height="500px">
              <el-carousel-item v-for="(catBImg, index) in this.cats.catBreedDetailContent[this.$route.query.catBreed].BImg" :key="index">
                <img :src="catBImg.bImg" alt="猫咪细节图片" title="别看了，赶紧买"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!--    宠物信息    -->
        <div class="right">
          <div class="line1">
            <div class="cat_name">
              {{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}
              <span>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].enName}}</span>
            </div>
          </div>
          <div class="price">
            <div>参考价格</div>
            <div>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].price}}</div>
          </div>
          <div class="details">
            <div>
              <div>中文学名:</div>
              <div>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</div>
            </div>
            <div>
              <div>别名:</div>
              <div>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].elName}}</div>
            </div>
            <div>
              <div>祖先:</div>
              <div>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].parents}}</div>
            </div>

            <div>
              <div>分布区域:</div>
              <div>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].fenbu}}</div>
            </div>
            <div>
              <div>原产地:</div>
              <div>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].yuanchandi}}</div>
            </div>
            <div>
              <div>体型:</div>
              <div>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].body}}
              </div>
            </div>
            <div>
              <div>原始用途:</div>
              <div>宠物猫</div>
            </div>
            <div>
              <div>今日用途:</div>
              <div>宠物猫</div>
            </div>
            <div>
              <div>分组:</div>
              <div></div>
            </div>
            <div>
              <div>身高:</div>
              <div>30CM</div>
            </div>
            <div>
              <div>体重:</div>
              <div>9KG</div>
            </div>
            <div>
              <div>寿命:</div>
              <div>15年</div>
            </div>
          </div>
          <div class="attributes">
            <div>
              <div>整体</div>
              <!-- 页面小折角 -->
              <div></div>
              <div>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].total}}
              </div>
            </div>
            <div>
              <div>毛发</div>
              <div></div>
              <div>
              </div>
            </div>
            <div>
              <div>颜色</div>
              <div></div>
              <div>
                1、海豹色（Seal ）
                2、蓝色（Blue）
                3、巧克力色（Chocolate）
                4、丁香色（Lilac
                5、火焰色/红色（Flame / Red）
                6、奶油色（Cream）
                7、烟色（Smoke）
              </div>
            </div>
            <div>
              <div>头部</div>
              <div></div>
              <div>
                在布偶猫还没有被广受推崇时，大家把大头圆脸作为判断猫咪是否可爱的标准，不过随着布偶猫的横空出世，这一标准随即被打破。布偶猫的头大但不呈圆形，而为楔形，两耳之间的头顶部扁平。有些人会说在照片上看布偶猫完全没觉得它们的脸是楔形的，那可能是因为布偶猫的毛发较长，再加上拍摄角度的问题所以导致视觉上的错觉。
              </div>
            </div>
            <div>
              <div>眼睛</div>
              <div></div>
              <div>
                布偶猫明亮的蓝色双眼似乎能直达你的心灵，如果仔细观察，你会发现布偶猫的眼睛是微微上扬的，是猫眼中的“丹凤眼”。
              </div>
            </div>

            <div>
              <div>耳朵</div>
              <div></div>
              <div>
                大小中等，基部宽，间距大，轻轻向前倾，耳间呈形。
              </div>
            </div>
            <div>
              <div>鼻子</div>
              <div></div>
              <div>
                中等长度的鼻子，有些布偶猫的鼻子上略有凹陷，下巴则跟上唇和鼻子为一直线。
              </div>
            </div>
            <div>
              <div>尾巴</div>
              <div></div>
              <div>
                长且拥有丰富的毛量。
              </div>
            </div>
            <div>
              <div>胸部</div>
              <div></div>
              <div>
              </div>
            </div>
            <div>
              <div>颈部</div>
              <div></div>
              <div>
                粗且强壮。
              </div>
            </div>
            <div>
              <div>前驱</div>
              <div></div>
              <div>
                前腿的毛较短，
              </div>
            </div>
            <div>
              <div>后驱</div>
              <div></div>
              <div>
                后腿的毛较长，较大的骨量与适度地长度。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!--    tab选项卡切换    -->
        <div class="cat_content">
          <el-tabs type="border-card" :stretch='true'>
            <el-tab-pane label="基本信息">
              <div>
                <h2>
                  <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                  <strong>的品种介绍</strong>
                </h2>
                <p>
                  {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content1}}
                </p>
                <h2>
                  <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                  <strong>的物种分布</strong>
                </h2>
                <p>
                  {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content2}}
                </p>
                <h2>
                  <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                  <strong>的发展起源</strong>
                </h2>
                <p>
                  {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content3}}
                </p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="FCI标准">
              <h2>
                <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                <strong>的FCI标准</strong>
              </h2>
              <P>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content4}}
              </P>
            </el-tab-pane>
            <el-tab-pane label="性格特点">
              <h2>
                <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                <strong>的性格特点</strong>
              </h2>
              <p>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content5}}
              </p>
            </el-tab-pane>
            <el-tab-pane label="生活习性">
              <h2>
                <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                <strong>的生活习性</strong>
              </h2>
              <p>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content6}}
              </p>
            </el-tab-pane>
            <el-tab-pane label="优点缺点">
              <h2>
                <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                <strong>的优点缺点</strong>
              </h2>
              <p>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content7}}
              </p>
            </el-tab-pane>
            <el-tab-pane label="喂养方法">
              <h2>
                <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                <strong>的喂养方法</strong>
              </h2>
              <p>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content8}}
              </p>
            </el-tab-pane>
            <el-tab-pane label="鉴别挑选">
              <h2>
                <strong>{{this.cats.catBreedDetailContent[this.$route.query.catBreed].name}}</strong>
                <strong>的鉴别挑选</strong>
              </h2>
              <p>
                {{this.cats.catBreedDetailContent[this.$route.query.catBreed].content9}}
              </p>
            </el-tab-pane>
          </el-tabs>
          <CatRecommend/>
        </div>
        <!--    右侧广告位    -->
        <div class="detail_information_content_right">
          <div class="recommend">
            <a href="">
              <div class="img">
                <div class="good_top">顶荐</div>
                <img src="http://www.maomijiaoyi.com/attached_1/thumb/2018-08-21/thumb_300326681133be0d005ce563a58e5c3fe3ab07.jpg" alt="">
              </div>
              <div class="red_line"></div>
              <div class="adv_name">
                <div class="adv_name_top">
                  <span class="font_size12 red">精品推荐</span>
                  CFA猫舍 支持全国空运包邮 不满意包退换
                </div>
                <div class="adv_name_bottom">
                    <span class="adv_price">
                      价格
                      <span class="red adv_price">1700元/只</span>
                    </span>
                </div>
              </div>
              <div class="adv_business">
                <span>喵小小</span>
                <img src="../../assets/images/juhua.jpg" alt="">
              </div>
            </a>
            <a href="">
              <div class="img">
                <div class="good_top">顶荐</div>
                <img src="http://www.maomijiaoyi.com/attached_1/thumb/2018-08-06/thumb_30032632f5c1409ecc5f7c8ae016b528a7710f.jpg" alt="">
              </div>
              <div class="red_line"></div>
              <div class="adv_name">
                <div class="adv_name_top">
                  <span class="font_size12 red">精品推荐</span>
                  本地出售健康纯种 矮脚折耳猫 全国包邮发货
                </div>
                <div class="adv_name_bottom">
                    <span class="adv_price">
                      价格
                      <span class="red adv_price">1700元/只</span>
                    </span>
                </div>
              </div>
              <div class="adv_business">
                <span>巴拉啦猫舍</span>
                <img src="../../assets/images/buou.jpg" alt="">
              </div>
            </a>
            <a href="">
              <div class="img">
                <div class="good_top">顶荐</div>
                <img src="http://www.maomijiaoyi.com/attached_1/thumb/2018-08-05/thumb_3003268d48619c2d1be6c4719b13f29dc6f702.jpg" alt="">
              </div>
              <div class="red_line"></div>
              <div class="adv_name">
                <div class="adv_name_top">
                  <span class="font_size12 red">精品推荐</span>
                  TICA注册猫舍 高品质 有保证 签订协议  全国包邮
                </div>
                <div class="adv_name_bottom">
                    <span class="adv_price">
                      价格
                      <span class="red adv_price">1700元/只</span>
                    </span>
                </div>
              </div>
              <div class="adv_business">
                <span>贝特猫舍</span>
                <img src="../../assets/images/meiduan.jpg" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="clearboth"></div>
    </div>
    <!--  引入脚部  -->
    <FriendLink/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "CatBreedDetail",
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['cats'])
    },
    methods: {
      goCatBreed(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .center_1220
    width 1220px
    margin 0 auto

    .bread_crumb
      margin-top 135px
      height 60px
      line-height 60px
      font-size 16px
      text-indent 8px

      & > a
        font-size 16px
        color #333

        &:hover
          color #ff6542

  .cat_breed_encyclopedia
    width 1200px
    margin 0 auto 50px

    .title
      background-color white
      width 1200px
      height 541px
      margin-bottom 17px
      font-size 0

      & > div
        display inline-block
        vertical-align top

      .left
        width 400px
        height 500px
        padding 10px
        margin-right 25px

        .big_img
          width 400px
          height 500px
          padding 10px

      .right
        width 725px

        .line1
          height 50px
          margin 27px 0 30px

          .cat_name
            font-family MicrosoftYaHei
            color #262626
            font-size 40px
            width 100%

            & > div
              display inline-block
              vertical-align top
              width 135px
              height 50px

            & > span
              font-size 16px

        .price
          height 96px
          background-color #f3f7fa
          display flex
          justify-content flex-start
          align-items center

          & > div:nth-of-type(1)
            margin-left 20px
            font-family MicrosoftYaHei
            font-size 20px
            color #333

          & > div:nth-of-type(2)
            margin-left 10px
            font-family MicrosoftYaHei
            font-size 30px
            color #fe3b00

        .details
          padding 0 10px
          width 705px
          height 200px

          & > div
            display inline-block
            vertical-align top
            width 230px
            height 48px
            margin 1px

            & > div:first-of-type
              text-align left
              display inline-block
              vertical-align top
              width 40%
              height 48px
              line-height 48px
              font-size 16px
              color #aca0ac

            & > div:last-of-type
              display inline-block
              vertical-align top
              width 57%
              height 48px
              line-height 48px
              font-size 16px
              color #373c3c
              overflow hidden
              text-overflow ellipsis
              white-space nowrap


        .attributes
          height 120px
          background-color white

          & > div
            display inline-block
            vertical-align top
            margin 5px 11px
            width 96px
            height 48px
            border 1px solid white
            background-color #f3f7fa
            position relative

            &:hover
              & > div:first-of-type
                color #fff
                background-color #ff6542

              & > div:nth-of-type(2)
                background #ff520e
                background -webkit-linear-gradient(right bottom, #ff520e 0%, #ff520e 50%, white 50%, white 100%)
                background -o-linear-gradient(right bottom, #ff520e 0%, #ff520e 50%, white 50%, white 100%)
                background -moz-linear-gradient(right bottom, #ff520e 0%, #ff520e 50%, white 50%, white 100%)
                background linear-gradient(to right bottom, #ff520e 0%, #ff520e 50%, white 50%, white 100%)

              & > div:last-of-type
                display block
                z-index 99

            & > div:first-of-type
              width 96px
              height 48px
              text-align center
              line-height 48px
              font-size 19px
              font-family MicrosoftYaHei
              color #262626

            & > div:nth-of-type(2)
              width 20px
              height 20px
              bottom 0
              right 0
              background -webkit-linear-gradient(right bottom, #E6ECF1 0%, #E6ECF1 50%, white 50%, white 100%)
              background -o-linear-gradient(right bottom, #E6ECF1 0%, #E6ECF1 50%, white 50%, white 100%)
              background -moz-linear-gradient(right bottom, #E6ECF1 0%, #E6ECF1 50%, white 50%, white 100%)
              background linear-gradient(to right bottom, #E6ECF1 0%, #E6ECF1 50%, white 50%, white 100%)
              position absolute

            & > div:last-of-type
              display none
              position absolute
              top 48px
              left 0px
              width 669px
              font-size 14px
              line-height 20px
              background-color #f3f7fa
              border 2px solid #ff6542
              padding 10px



    .cat_content
      float left
      margin-bottom 100px
      width 870px
      min-height 500px
      background-color white
      p
        line-height 1.5
      .el-tabs__item
        height 45px !important
        line-height 45px !important
        font-size 18px !important

      .el-tabs__item:not(.is-disabled):hover
        color #ff6542 !important

      .el-tabs__item.is-active
        color #ff6542 !important
        border-top 5px solid #ff6542 !important

      .el-tabs__content
        padding 25px !important
        line-height 1.4

      h2
        margin 15px auto
        font-size 18px

        & > strong:nth-of-type(1)
          color #337fe5
          font-weight bold

        & > strong:nth-of-type(2)
          color #000
          font-weight bold

      p
        display block
        margin-block-start 1em
        margin-block-end 1em
        margin-inline-start 0
        margin-inline-end 0


    .detail_information_content_right
      background-color #fff
      display inline-block
      vertical-align top
      width 238px
      margin-left 50px

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

    .clearboth
      clear both
</style>