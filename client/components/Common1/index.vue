<template>
  <!--新闻 公告 健康咨询-->
  <el-col :span="cols">
    <div class="common1" :class="activeType">
      <div class="head">
        <span class="title">{{ title }}</span>
        <router-link  :to="redirect" class="more">更多</router-link>
      </div>
      <div class="common">
        <ul v-for="item in records" :key="item.id">
          <li v-if="activeType === 'notice'"><router-link  :to="{path:'noticeDetail/' + item.id}" class="ellipsis"> {{ item.noticeTitle }}</router-link><span
            class="time">{{ item.noticeCreateTime.substring(0,10) }}</span></li>
          <li v-else-if="activeType === 'news'"><router-link  :to="{path:'newsDetail/' + item.id}" class="ellipsis">{{ item.newsTitle }}</router-link><span
            class="time">{{ item.newsCreateTime.substring(0,10) }}</span></li>
          <li v-else><router-link  :to="{path:'healthyDetail/' + item.id}" class="ellipsis">{{ item.healthyTitle }}</router-link><span
            class="time">{{ item.healthyCreateTime.substring(0,10) }}</span></li>
        </ul>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  props: {
    activeType: {
      type: String,
      default: 'notice'
    },
    title: {
      type: String,
      default: '医院公告'
    },
    redirect: {
      type: String,
      default: '/noticeList'
    },
    records: {
      type: Array,
      default: []
    }
  },
  computed: {
    cols: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 8
      } else {
        return 24
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .healthy {
    width: 100% !important;
  }
  .common1{
    float: left;
    width: 98%;
    height: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    .head {
      width: 100%;
      height: 50px;
      .title {
        float: left;
        font-size: 20px;
        margin-left: 10px;
        padding-bottom: 10px;
        line-height: 50px;
      }
      .more {
        float: right;
        font-size: 12px;
        margin-right: 10px;
        line-height: 25px;
        transition: all 0.3s;
        -webkit-transition: all 0.3s;
        width: 90px;
        margin-top: 12px;
        border: 1px solid #eee;
        border-radius: 10px;
        text-align: center;
        color: #474747;
      }
      a:hover {
        background-color: #01763a;
        color: white;
      }
    }
    .common {
      width: 100%;
      height: 200px;
      ul {
        width: 100%;
        padding-left: 20px;
        li {
          list-style: none outside none;
          padding: 0;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #EBEEF5;
          font-size: 14px;
          a {
            display: block;
            text-align: left;
            text-decoration: none;
            color: #333;
            float: left;
            width: 250px;
          }
          a:hover {
            cursor: pointer;
            outline: none;
            text-decoration: none;
            color: #01763a;
          }
          .ellipsis {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
          }
          .time {
            float: right;
            color: #333;
            margin-right: 20px;
          }

        }
      }

    }
  }
  .mobile {
    .common1 {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    .common {
      ul {
        li {
          a {
            width: 150px;
          }
        }
      }
    }
    .healthy {
      margin-bottom: 10px;
    }
  }
</style>
