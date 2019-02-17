<template>
  <el-row class="clearfix">
    <el-col :span="24">
      <div class="main">
        <div class="title"><span>院内新闻</span></div>
        <div class="list">
          <ul>
            <li v-for="item in list" :key="item.id">
              <router-link  class="ellipsis after" :to="{path:'newsDetail', query: {id:item.id}}">{{item.newsTitle}}</router-link>
              <span>{{item.newsCreateTime.substring(0,10)}}</span>
            </li>
          </ul>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="10"
            :layout="layout"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: '院内新闻| 河南商丘市民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: '河南商丘市民康医院官网'
        },
        {
          name: 'description',
          content: this.pageDescription
        }
      ]
    }
  },
  name: 'dashboard',
  data () {
    return {
      list: '',
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
    }
  },
  computed: {
    layout: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 'total, sizes, prev, pager, next, jumper'
      } else {
        return 'sizes, prev, pager, next'
      }
    }
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('getNewsList', {current: 1, size: 10})
  },
  created () {
    if (typeof window !== 'undefined') {
      this.getNewsPage(1, 10)
    }
  },
  methods: {
    getNewsPage ($v1, $v2) {
      const _that = this
      this.$store.dispatch('getNewsList', {current: $v1, size: $v2}).then(data => {
        _that.list = _that.$store.state.newsList.records
        _that.total = _that.$store.state.newsList.total
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getNewsPage(1, val)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getNewsPage(this.currentPage, this.pageSize)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .main {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    .title {
      text-align: center;
      span {
        display: block;
        height: 80px;
        line-height: 80px;
        font-size: 24px;
        border-bottom: 1px solid #015128;
      }
    }
    .list {
      width: 80%;
      margin: 0 auto;
      ul {
        margin-top: 20px;
        li {
          list-style: circle outside none;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          text-align: left;
          position: relative;
          a {
            display: block;
            height: 40px;
            line-height: 40px;
            width: 300px;
            float: left;
          }
          a:hover {
            color: #015128;
          }
          span {
            float: right;
            padding-right: 30px;
          }
          .ellipsis {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
          }
        }
      }
    }
    .el-pagination {
      width: 80%;
      margin: 0 auto;
    }
  }
  .mobile {
    .list {
      ul {
        li {
          a {
            width: 100px;
          }
        }
      }
    }
    .el-pagination {
      width: 100%;
    }
  }
</style>
