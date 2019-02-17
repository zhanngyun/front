<template>
  <el-row class="section">
    <el-col :span="cols1" >
      <div class="img">
        <img :src="imgSrc" :alt="title">
        <div class="tit">
          <div class="con">
            <h2>{{title}}</h2>
            <p>{{summary}}</p>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="cols2" >
      <div class="tabClick">
        <a href="javascript:;" class="a1" @click="clicked"  :class="{on:1==current}">非手术科室<i></i></a>
        <a href="javascript:;" class="a2" @click="clicked"  :class="{on:2==current}">手术科室<i></i></a>
        <a href="javascript:;" class="a3" @click="clicked"  :class="{on:3==current}">诊断相关科室<i></i></a>
        <router-link class="a4" :to="'/sectionList'">更多科室介绍</router-link>
      </div>
      <div class="list1">
        <ul>
          <li v-for="(item,index) in records" :key="item.index" :class="{on:index+1===child}">
            <router-link class="ellipsis" :id="index"  @mouseenter.native="changeChild" :to="'/sectionInfo/' + item.id"><i></i>{{item.sectionName}}</router-link>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  props: {
    type1: {
      type: Array,
      default: []
    },
    type2: {
      type: Array,
      default: []
    },
    type3: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      records: [],
      imgSrc: 'https://hnsqmkyy.com/img/default.jpg',
      current: 1,
      child: 1,
      title: 'xx',
      summary: 'xxx'
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
  },
  methods: {
    clicked (e) {
      this.child = 1
      if (e.srcElement.classList[0] === 'a1') {
        this.current = 1
        this.records = this.type1
        this.imgSrc = this.records[0].sectionImg
        this.title = this.records[0].sectionName
        this.summary = this.records[0].sectionSummary
      } else if (e.srcElement.classList[0] === 'a2') {
        this.current = 2
        this.records = this.type2
        this.imgSrc = this.records[0].sectionImg
        this.title = this.records[0].sectionName
        this.summary = this.records[0].sectionSummary
      } else {
        this.current = 3
        this.records = this.type3
        this.imgSrc = this.records[0].sectionImg
        this.title = this.records[0].sectionName
        this.summary = this.records[0].sectionSummary
      }
    },
    changeChild (e) {
      this.child = parseInt(e.srcElement.id) + 1
      this.imgSrc = this.records[parseInt(e.srcElement.id)].sectionImg
      this.title = this.records[parseInt(e.srcElement.id)].sectionName
      this.summary = this.records[parseInt(e.srcElement.id)].sectionSummary
    }
  },
  created () {
    this.records = this.type1
    this.imgSrc = this.records[0].sectionImg
    this.title = this.records[0].sectionName
    this.summary = this.records[0].sectionSummary
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .section {
    width: 100%;
    position: relative;
    .img{
      width: 100%;
      height: 100%;
      position: relative;
      margin-bottom: 15px;
      .tit {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 10;
        color: #fff;
        background: url('../../assets/icon/line.png') repeat 0 0;
        .con {
          padding: 10px 35px 10px 30px;
        }
      }
      img {
        display: block;
        width: 100%;
        height: 300px;
      }
    }
    .tabClick {
      padding-bottom: 16px;
      height: 40px;
      a {
        display: block;
        float: left;
        margin-left: 15px;
        width: 23%;
        height: 40px;
        position: relative;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        background: #528eb5;
        border-radius: 5px;
        color: #fff;
      }
      .on {
        i {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 13px solid transparent;
          border-right: 13px solid transparent;
          bottom: -10px;
          left: 50%;
          margin-left: -13px;
          border-top: 13px solid #528eb5;
        }
      }
      .a2 {
        background: #55a5aa !important;
        i {
          border-top: 13px solid #55a5aa;
        }
      }
      .a3 {
        background: #e5ca8f !important;
        i {
          border-top: 13px solid #e5ca8f;
        }
      }
      .a4 {
        background: #01763a !important;
      }
    }
    .list1 {
      width: 100%;
      ul {
        width: 100%;
        padding: 0px;
        li {
          float: left;
          margin-left: 15px;
          cursor: pointer;
          border: 1px solid #cccccc;
          border-radius: 5px;
          width: 18%;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          margin-bottom: 14px;
          list-style: none outside none;
          padding: 0;
          a {
            display: block;
            color: #333;
            padding-left: 26px;
            position: relative;
            &.ellipsis {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display: block;
            }
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
        }
        .on {
          a {
            color: #528eb5 !important;
          }
          border-color: #528eb5 !important;
        }
        li:hover {
          a {
            color: #528eb5;
          }
          border-color: #528eb5;
        }
      }

    }
  }
  .mobile {
    .tabClick {
      a {
        width: 20%;
      }
    }
    .list1 {
      ul {
        li {
          width: 45%;
        }
      }
    }
  }
</style>
