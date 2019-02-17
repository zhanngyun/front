<template>
  <el-row>
    <el-row>
      <el-col :span="cols1">
        <div class="img">
          <img :src="data.sectionImg" :alt="data.sectionName">
        </div>
      </el-col>
      <el-col :span="cols2">
        <div class="text-box">
          <div class="dorname">
            <div class="title1">{{data.sectionName}}</div>
            <div class="title2">科室位置 : {{data.sectionAddress}}</div>
          </div>
          <div class="text">
            <p>{{data.sectionSummary}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="content fuwenben">
          <div class="title">详情介绍</div>
          <div class="text" v-html="data.sectionContent"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="memory">
          <div class="title">科室成员</div>
          <ul>
            <li v-for="item in doctors" :key="item.id">
              <div class="item">
                <router-link :to="{path:'doctorInfo/' + item.id}">
                  <img :src="item.doctorPortrait" :alt="item.name">
                </router-link>
                <div class="info">
                  <div class="inline">
                    <div class="h2">{{item.doctorName}}</div>
                    <div class="p">{{item.doctorJob}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.data.sectionName + '| 河南商丘市民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: this.data.sectionName
        },
        {
          name: 'description',
          content: this.data.sectionSummary
        }
      ]
    }
  },
  name: 'doctorInfo',
  data () {
    return {
      data: this.$store.state.sectionInfo,
      doctors: this.$store.state.sectionDoctors.records
    }
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('getSectionById', route.params.id)
    await store.dispatch('queryDoctorsBySectionId', route.params.id)
  },
  created () {
    const _that = this
    if (typeof window !== 'undefined' && this.data === '') {
      const id = this.common.getId()
      this.$store.dispatch('getSectionById', id).then(data => {
        _that.data = data
      })
      this.$store.dispatch('queryDoctorsBySectionId', id).then(data => {
        _that.doctors = data.records
      })
    }
  },
  computed: {
    cols1: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 8
      } else {
        return 24
      }
    },
    cols2: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 16
      } else {
        return 24
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .img {
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 100% !important;
      display: block;
    }
  }
  .text-box {
    margin-left: 30px;
  }
  .dorname {
    background: url('../../assets/icon/app-img1.png') repeat-x left bottom;
    padding-bottom: 60px;
    margin-bottom: 45px;
    padding-top: 38px;
    .title1 {
      font-size: 24px;
      color: #333333;
    }
    .title2 {
      font-size: 14px;
      color: #474747;
      margin-top: 20px;
      line-height: 1.4;
    }
  }
  .text {
    font-size: 14px;
    color: #333333;
    line-height: 22px;
    p {
      margin-bottom: 20px;
    }
  }
  .content {
    font-size: 24px;
    color: #333333;
    margin-bottom: 20px;
    .title {
      line-height: 40px;
    }
    .text {
      text-indent: 2em;
      line-height: 30px;
    }
  }
  .memory {
    width: 100%;
    color: #333333;
    margin-bottom: 20px;
    .title {
      font-size: 24px;
      line-height: 40px;
    }
    ul {
      li {
        width: 250px;
        height: 300px;
        overflow: hidden;
        position: relative;
        margin-left: 11px;
        margin-bottom: 11px;
        float: left;
        list-style: none;
        img {
          min-width: 100%;
          width: 250px;
          height: 300px;
        }
        .info {
          background: url('../../assets/icon/mask40.png');
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: auto;
          text-align: center;
          min-height: 97px;
          .inline {
            display: inline-block;
            vertical-align: middle;
            padding: 15px 15px;
            .h2 {
              font-size: 18px;
              color: #fff;
            }
            .p {
              font-size: 14px;
              color: #fff;
              line-height: 22px;
              margin-top: 8px;
            }
          }
        }
      }
    }

  }
</style>
