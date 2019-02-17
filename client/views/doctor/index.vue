<template>
  <el-row>
    <el-col>
      <div class="block">
        <div class="title">医生介绍</div>
        <div class="hook">
          <a href="#m1" class="a1">非手术科室</a>
          <a href="#m2" class="a2">手术科室</a>
          <a href="#m3" class="a3">诊断相关科室</a>
        </div>
        <div class="clearfix"></div>
        <div class="p1" id="m1">
          <div class="block">
            <div class="caption">非手术科室</div>
            <div class="box clearfix">
              <div class="item" v-for="item in data[0].sectionInfoList" v-bind:key="item.id">
                <div class="inner">
                  <div class="h2">
                    <router-link  :to="{path:'sectionInfo', query: {id:item.id}}" >{{item.sectionName}}</router-link>
                  </div>
                  <div class="inner-box clearfix">
                    <span v-for="doctor in item.doctorList" v-bind:key="doctor.id">
                      <router-link :to="{path:'doctorInfo', query: {id:doctor.id}}" >{{doctor.doctorName}}</router-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p1" id="m2">
          <div class="block">
            <div class="caption">手术科室</div>
            <div class="box clearfix">
              <div class="item" v-for="item in data[1].sectionInfoList" v-bind:key="item.id">
                <div class="inner">
                  <div class="h2">
                    <router-link  :to="{path:'sectionInfo', query: {id:item.id}}">{{item.sectionName}}</router-link>
                  </div>
                  <div class="inner-box clearfix">
                    <span v-for="doctor in item.doctorList" v-bind:key="doctor.id">
                      <router-link :to="{path:'doctorInfo', query: {id:doctor.id}}">{{doctor.doctorName}}</router-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p1" id="m3">
          <div class="block">
            <div class="caption">诊断相关科室</div>
            <div class="box clearfix">
              <div class="item" v-for="item in data[2].sectionInfoList" v-bind:key="item.id">
                <div class="inner">
                  <div class="h2">
                    <router-link  :to="{path:'sectionInfo', query: {id:item.id}}">{{item.sectionName}}</router-link>
                  </div>
                  <div class="inner-box clearfix">
                    <span v-for="doctor in item.doctorList" v-bind:key="doctor.id">
                      <router-link :to="{path:'doctorInfo', query: {id:doctor.id}}">{{doctor.doctorName}}</router-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: '医生列表| 河南商丘市民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: '商丘民康医院医生列表'
        },
        {
          name: 'description',
          content: this.pageDescription
        }
      ]
    }
  },
  data () {
    return {
      form: {
        name: ''
      },
      data: this.$store.state.doctorAll,
      pageDescription: '商丘民康医院相关的医生列表信息'
    }
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('getSectionsAndDoctors')
  },
  created () {
    if (this.$store.state.doctorAll.size === 0) {
      const _that = this
      _that.$store.dispatch('getSectionsAndDoctors').then(data => {
        _that.data = data
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.block {
  width: 100%;
  position: relative;
  .title {
    height: 40px;
    text-align: center;
    font-size: 24px;
    color: #333333;
  }
  .hook {
    font-size: 0;
    float: left;
    width: 100%;
    margin: 10px auto;
    text-align: center;
    .a1 {
      background-color: #528eb5;
    }
    .a2 {
      background-color: #55a5aa;
    }
    .a3 {
      background-color: #e5ca8f;
    }
    a {
      display: inline-block;
      width: 148px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
      margin-right: 10px;
    }
  }
  .p1 {
    margin-top: 20px;
    .block {
      width: 100%;
      margin: 0 auto;
      position: relative;
      .caption {
        font-size: 20px;
        color: #474747;
        line-height: 30px;
      }
      .box {
        padding-top: 20px;
        .item {
          border: 1px solid #cccccc;
          border-radius: 5px;
          width: 292px;
          height: 125px;
          float: left;
          margin-left: 15px;
          margin-bottom: 15px;
          transition: all 0.2s ease;
          .inner {
            display: block;
            padding: 18px 20px;
            .h2 {
              font-size: 18px;
              color: #528eb5;
              border-bottom: 1px solid #dddddd;
              padding-bottom: 18px;
              margin: 0;
            }
            .inner-box {
              padding: 8px 0;
              a {
                display: block;
                width: 33.3333%;
                float: left;
                font-size: 14px;
                color: #474747;
                padding: 6px 0;
              }
            }
          }
        }
        .item:hover {
          background-color: #528eb5;
          .h2 {
            color: #fff;
          }
          .inner-box {
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
.mobile {
  .hook {
    a {
      width: 100px;
      font-size: 0.875rem;
    }
  }
}
</style>

