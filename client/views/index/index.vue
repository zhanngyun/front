<template>
  <!--走马灯-->
  <el-row>
    <el-row>
      <el-col :span="24" class="carousel">
        <el-carousel :height="bannerHeight">
          <el-carousel-item v-for="item in carousel" :key="item.id" >
            <img :src="item.bannerUrl" alt="河南商丘民康医院官网|首页轮播图" width="100%" :height="bannerHeight">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row>
      <common1 active-type="notice" title="医院公告" redirect="/noticeList" :records="noticeList.records"></common1>
      <common1 active-type="news" title="医院新闻" redirect="/newsList" :records="newsList.records"></common1>
      <common1 active-type="healthy" title="健康资讯" redirect="/healthyList" :records="healthyList.records"></common1>
    </el-row>
    <common3></common3>
    <common4 :slides="doctorList.records"></common4>
    <div class="section-index">
      <div class="title">科室导航</div>
    </div>
    <div class="clearfix"></div>
    <common5 :type1="type1" :type2="type2" :type3="type3"></common5>
    <div class="clearfix"></div>
    <common6 :records="envList.records"></common6>
  </el-row>
</template>



<script>
  import Common1 from '../../components/Common1/index.vue'
  import Common3 from '../../components/Common3/index.vue'
  import Common4 from '../../components/Common4/index.vue'
  import Common5 from '../../components/Common5/index.vue'
  import Common6 from '../../components/Common6/index.vue'
  export default {
    metaInfo () {
      return {
        title: this.pageTitle,
        meta: [
          {
            name: 'keywords',
            content: this.pageKeyWords
          },
          {
            name: 'description',
            content: this.pageDescription
          }
        ]
      }
    },
    name: 'index',
    data () {
      return {
        carousel: this.$store.state.bannerList,
        noticeList: this.$store.state.noticeList,
        newsList: this.$store.state.newsList,
        healthyList: this.$store.state.healthyList,
        doctorList: this.$store.state.doctorList,
        type1: this.$store.state.selectList1,
        type2: this.$store.state.selectList2,
        type3: this.$store.state.selectList3,
        envList: this.$store.state.envList,
        cols: 8,
        pageTitle: '河南商丘市民康医院官网',
        pageKeyWords: '河南商丘市民康医院官网,商丘民康医院,民康医院,河南民康医院',
        pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
      }
    },
    components: {
      Common1,
      Common3,
      Common4,
      Common5,
      Common6
    },
    computed: {
      bannerHeight: function () {
        if (this.$store.state.app.device !== 'mobile') {
          return '400px'
        } else {
          return '200px'
        }
      }
    },
    async asyncData ({route, router, store}) {
      await store.dispatch('getBannerList')
      await store.dispatch('getNoticeList', {current: 1, size: 4})
      await store.dispatch('getNewsList', {current: 1, size: 4})
      await store.dispatch('getHealthyList', {current: 1, size: 4})
      await store.dispatch('queryDoctorList', {current: 1, size: 20})
      await store.dispatch('SectionInfoByType', 1)
      await store.dispatch('SectionInfoByType', 2)
      await store.dispatch('SectionInfoByType', 3)
      await store.dispatch('getEnvList', {current: 1, size: 20})
    },
    created () {
      this.$store.dispatch('getNoticeList', {current: 1, size: 4}).then(data => {
        this.noticeList = data
      })
      this.$store.dispatch('getNewsList', {current: 1, size: 4}).then(data => {
        this.newsList = data
      })
      this.$store.dispatch('getHealthyList', {current: 1, size: 4}).then(data => {
        this.healthyList = data
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .el-carousel__indicator  {
    &.is-active {
      .el-carousel__button {
        background-color: #01763a !important;
      }
    }
    .el-carousel__button {
      height: 3px;
      width: 60px;
    }
  }
  .mobile {
    .el-carousel__button {
      height: 3px;
      width: 30px;
    }
  }
  .section-index {
    .title {
      font-size: 24px;
      line-height: 60px;
      color: #333333;
      width: 45%;
      text-align: left;
      margin-left: 20px;
      float: left;
    }
  }

</style>
