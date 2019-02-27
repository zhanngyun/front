<template>
  <el-row class="clearfix">
    <el-col :span="24">
      <div class="main">
        <div class="title">{{news.newsTitle}}</div>
        <div class="tip">
          <span>时间：<i>{{dateFormat(news.newsCreateTime)}}</i></span>
          <span class="newsViewCount">
            阅读量： <i>{{news.newsViewCount}}</i>
          </span>
          <span>字体：<b class="small" @click="changeFontSizeSmall">小</b><b class="big" @click="changeFontSizeBig">大</b></span>
          <span class="author">作者：{{news.newsAuthor}}</span>
        </div>
        <div class="text fuwenben"  :class="synFont" v-html="news.newsContent"></div>
        <div class="origin">
          <span class="newsOrgin">文章类型：{{news.newsOrgin === '3' ? '译文' : news.newsOrgin === '2' ? '转载' : '原创'}}</span>
          <span class="newsOrgin" v-if="news.newsOrgin !== '1'">文章链接地址：<a target="_blank" :href="news.newsOrginUrl">点我</a></span>
        </div>
      </div>
      <div class="preAndAft">
        <div class="pre" v-if="pre !== ''">
          <router-link  class="ellipsis previous" :to="{path:'/newsDetail/' + pre.id}">上一篇：{{pre.newsTitle}}</router-link>
        </div>
        <div class="aft" v-if="aft !== ''">
          <router-link class="ellipsis after" :to="{path:'/newsDetail/' + aft.id}">下一篇：{{aft.newsTitle}}</router-link>
        </div>
      </div>
      <common2></common2>
    </el-col>
  </el-row>
</template>

<script>
import Common2 from '../../components/Common2/index.vue'
export default {
  metaInfo () {
    return {
      title: this.news.newsTitle + '|河南商丘民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: this.news.keywords
        },
        {
          name: 'description',
          content: this.news.digest
        }
      ]
    }
  },
  name: 'dashboard',
  data () {
    return {
      news: this.$store.state.news,
      synFont: 'fontSize14',
      pre: this.$store.state.newsPre || '',
      aft: this.$store.state.newsAft || ''
    }
  },
  components: {
    Common2
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('getNewsById', route.params.id)
    await store.dispatch('updateNewsClickNum', route.params.id)
    await store.dispatch('getNewsPreAndAft', route.params.id)
  },
  created () {
    if (typeof window !== 'undefined') {
      const id = this.common.getId()
      if (id !== this.news.id) {
        const _that = this
        this.$store.dispatch('getNewsById', id).then(data => {
          _that.news = _that.$store.state.news
        })
        this.$store.dispatch('updateNewsClickNum', id).then(data => {})
        this.$store.dispatch('getNewsPreAndAft', id).then(data => {
          _that.pre = _that.$store.state.newsPre
          _that.aft = _that.$store.state.newsAft
        })
      }
    }
  },
  methods: {
    changeFontSizeSmall () {
      if (this.synFont.substring(8) === '12') {
        this.synFont = 'fontSize12'
      } else {
        this.synFont = this.synFont.substring(0, 8) + (parseInt(this.synFont.substring(8)) - 2)
      }
    },
    changeFontSizeBig () {
      if (this.synFont.substring(8) === '18') {
        this.synFont = 'fontSize18'
      } else {
        this.synFont = this.synFont.substring(0, 8) + (parseInt(this.synFont.substring(8)) + 2)
      }
    },
    dateFormat ($var1) {
      if (typeof ($var1) !== 'undefined') {
        return $var1.substring(0, 10)
      }
    }
  },
  watch: {
    $route (to, from) {
      window.location.reload()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main {
  font-size: 16px;
  .title {
    margin-bottom: 25px;
    padding-bottom: 34px;
    border-bottom: 1px solid #015128;
    font-size: 24px;
    line-height: 44px;
    text-align: center;
  }
  .tip {
    margin-bottom: 51px;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    span {
      display: inline-block;
      margin-right: 40px;
    }
    b {
      cursor: pointer;
    }
    b:hover {
      color: #01763a;
    }
    b + b{
      margin-left: 20px;
    }
    i, b, strong {
      font-style: normal;
      font-weight: normal;
    }
  }
  .origin {
    margin-bottom: 51px;
    font-size: 16px;
    line-height: 26px;
    text-align: right;
    padding-right: 40px;
    span {
      display: inline-block;
    }
    a:hover {
      color: #01763a;
    }
  }
}
.preAndAft {
  width: 100%;
  height: 50px;
  border-top: 1px solid #01763a;
  padding: 0px 20px;
  position: relative;
  font-size: 14px;
  .pre {
    width: 50%;
    float: left;
    line-height: 50px;
    position: relative;
    a {
      display: block;
      width: 300px;
      margin-left: 27px;
    }
    a:hover {
      color: #01763a;
    }
    .previous:before {
      content: '1';
      position: absolute;
      left: 0;
      top: 12px;
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/prev1.png') left no-repeat;
      font-size: 0;
    }
    .previous:hover:before {
      content: '1';
      position: absolute;
      left: 0;
      top: 12px;
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/prev1.png') right no-repeat;
      font-size: 0;
    }
  }
  .aft {
    width: 50%;
    float: right;
    line-height: 50px;
    text-align: right;
    position: relative;
    a {
      display: block;
      margin-right: 27px;
      width: 300px;
      float: right;
    }
    a:hover {
      color: #01763a;
    }
    .after:before {
      content: '1';
      position: absolute;
      right: 0;
      top: 12px;
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/next1.png') left no-repeat;
      font-size: 0;
    }
    .after:hover:before {
      content: '1';
      position: absolute;
      right: 0;
      top: 12px;
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/next1.png') right no-repeat;
      font-size: 0;
    }
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
}
.mobile {
  .preAndAft {
    a {
      width: 100px !important;
    }
  }
}
.fontSize10 {
  font-size: 10px !important;
  line-height: 16px !important;
  text-indent: 2em !important;
}
.fontSize12 {
  font-size: 12px !important;
  line-height: 18px !important;
  text-indent: 2em !important;
}
.fontSize14 {
  font-size: 14px !important;
  line-height: 20px !important;
  text-indent: 2em !important;
}
.fontSize16 {
  font-size: 16px !important;
  line-height: 22px !important;
  text-indent: 2em !important;
}
.fontSize18 {
  font-size: 18px !important;
  line-height: 24px !important;
  text-indent: 2em !important;
}
</style>
