<template>
  <el-row v-if="isNotMobile">
    <el-col :span="24" >
      <div class="expert">
        <div class="title">医疗环境</div>
        <div class="right">
          <router-link class="more" :to="'/evnList'">更多</router-link>
        </div>
        <div class="clearfix"></div>
        <div class="block">
          <swiper :options="swiperOption" ref="mySwiper">
             <!--这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="item in records" :key="item.id" @mouseenter.native="stopPlay" @mouseleave.native="play">
              <div class="fd_slide">
                <img v-lazy="item.envUrl" :alt="item.envName"/>
                <div class="flexRow">
                  <div class="content">
                    <span class="slide_name">{{item.envName}}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  props: {
    records: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        autoplay: {
          delay: 1000
        },
        loop: true,
        speed: 2000,
        grabCursor: true,
        direction: 'horizontal',
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          progressbarOpposite: true,
          bulletElement: 'li',
          dynamicBullets: true,
          dynamicMainBullets: 2,
          hideOnClick: true,
          clickable: true
        }
      }
    }
  },
  methods: {
    stopPlay () {
      this.$refs.mySwiper.swiper.autoplay.stop()
    },
    play () {
      this.$refs.mySwiper.swiper.autoplay.start()
    }
  },
  computed: {
    isNotMobile: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .expert{
    width: 100%;
    height: 330px;
    margin-bottom: 30px;
    .title{
      font-size: 24px;
      line-height: 60px;
      color: #333333;
      width: 45%;
      text-align: left;
      margin-left: 20px;
      float: left;
    }
    .right {
      width: 45%;
      float: right;
      height: 60px;
      padding-top: 16px;
      .more {
        float: right;
        display: block;
        font-size: 12px;
        margin-right: 10px;
        line-height: 25px;
        transition: all 0.3s;
        width: 90px;
        border: 1px solid #eee;
        border-radius: 10px;
        text-align: center;
        color: #474747;
      }
      .more:hover {
        background-color: #01763a;
        color: #fefefe;
      }
    }
    .block{
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 270px;
      padding-top: 10px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 10px;
      padding-right: 11px;
      vertical-align: middle;

    }
    .fd_slide{
      width: 310px;
      height: 250px;
      position: relative;
      img {
        width: 300px;
        height: 250px;
      }
    }
    .flexRow {
      background: url('../../assets/icon/mask40.png');
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: auto;
      text-align: center;
      min-height: 30px;
      .content {
        text-align: center;
        display: inline-block;
        .slide_name{
          display: block;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          color: #fefefe;
          text-align: left;
        }
      }
    }

  }
</style>
