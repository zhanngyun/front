<template>
  <el-row>
    <el-col>
      <div class="block">
        <div class="title">科室介绍</div>
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
              <div class="item1" v-for="item in sections1">
                <div class="inner">
                  <div class="h2">
                    <router-link  :to="{path:'sectionInfo/' + item.id}"><i></i>{{item.sectionName}}</router-link>
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
              <div class="item1" v-for="item in sections2">
                <div class="inner">
                  <div class="h2">
                    <router-link  :to="{path:'sectionInfo/' + item.id}"><i></i>{{item.sectionName}}</router-link>
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
              <div class="item1" v-for="item in sections3">
                <div class="inner">
                  <div class="h2">
                    <router-link  :to="{path:'sectionInfo/' + item.id}"><i></i>{{item.sectionName}}</router-link>
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
      title: '院内科室列表|河南商丘市民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: '商丘民康医院科室列表'
        },
        {
          name: 'description',
          content: '商丘民康医院相关的科室列表信息'
        }
      ]
    }
  },
  data () {
    return {
      sections1: this.$store.state.selectList1,
      sections2: this.$store.state.selectList2,
      sections3: this.$store.state.selectList3
    }
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('SectionInfoByType', 1)
    await store.dispatch('SectionInfoByType', 2)
    await store.dispatch('SectionInfoByType', 3)
  },
  created () {
    const _that = this
    if (this.sections1.size === 0) {
      this.$store.dispatch('SectionInfoByType', 1).then(data => {
        _that.sections1 = data
      })
    }
    if (this.sections2.size === 0) {
      this.$store.dispatch('SectionInfoByType', 2).then(data => {
        _that.sections2 = data
      })
    }
    if (this.sections3.size === 0) {
      this.$store.dispatch('SectionInfoByType', 3).then(data => {
        _that.sections3 = data
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
      font-size: 1rem;
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
        .item1 {
          float: left;
          margin-left: 15px;
          cursor: pointer;
          border: 1px solid #cccccc;
          border-radius: 5px;
          width: 180px;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          margin-bottom: 14px;
          list-style: none outside none;
          padding: 0;
          .inner {
            a {
              display: block;
              color: #333;
              padding-left: 26px;
              position: relative;
              i {
                position: absolute;
                width: 14px;
                left: 0;
                top: 0;
                height: 100%;
                border-right: 1px solid #ccc;
                background: url('../../assets/icon/ind_5.png') no-repeat center;
              }
            }
            a:hover {
              color: #01763a;
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
    .p1 {
      .item1 {
        width: 45% !important;
      }
    }
  }
</style>

