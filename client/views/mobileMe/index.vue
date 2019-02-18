<template>
  <el-row class="container">
    <div class="top">
      <el-col :span="8" class="image">
        <img :src="user.avatar" width="70px" height="70px" alt="头像">
      </el-col>
      <el-col :span="16" class="name">
        <div class="trueName">
          <span class="user">{{user.mobile.substring(0,3) + '****' + user.mobile.substring(7,11)}}</span>
          <span class="user">{{user.userName}}</span>
        </div>
      </el-col>
    </div>
    <el-col class="down">
      <div class="detail">
        <svg-icon iconClass="user"></svg-icon>
        <span class="content" @click="dialogVisible = true">资料详情</span><i class="el-icon-arrow-right"></i>
      </div>
      <div class="detail">
        <svg-icon iconClass="list"></svg-icon><router-link :to="'/order'"><span class="content">我的预约记录</span></router-link><i class="el-icon-arrow-right"></i>
      </div>
      <div class="detail">
      <svg-icon iconClass="edit"></svg-icon><span class="content" @click="layout">退出登录</span><i class="el-icon-arrow-right"></i>
    </div>
    </el-col>
    <el-dialog
      title="个人资料"
      :visible.sync="dialogVisible"
      width="100%"
      :fullscreen=true
      :modal=false
      :append-to-body=true
      :center=true>
      <div class="info">
        <span>姓名: {{user.userName}}</span>
        <span>手机号: {{user.mobile.substring(0,3) + '****' + user.mobile.substring(7,11)}}</span>
        <span>身份证号: {{user.idCard}}</span>
        <span>性别: {{user.sex}}</span>
        <span>年龄: {{user.age}}</span>
      </div>
    </el-dialog>
  </el-row>

</template>

<script>
export default {
  metaInfo () {
    return {
      title: '个人信息详情| 河南商丘市民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: '商丘民康医院个人信息'
        },
        {
          name: 'description',
          content: this.pageDescription
        }
      ]
    }
  },
  name: 'mobileMe',
  data () {
    return {
      dialogVisible: false,
      imagecropperShow: false,
      imagecropperKey: 0,
      uploadUrl: 'https://www.hnsqmkyy.com/api/img/upload',
      user: {
        avatar: 'https://hnsqmkyy.com/img/default.jpg',
        mobile: '11111111111',
        userName: '张三',
        idCard: '3623897777999012132',
        sex: '男',
        age: 23
      },
      pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
    }
  },
  created () {
    const that = this
    if (typeof window !== 'undefined') {
      this.common.getUserInfo(this)
      if (that.$store.state.userInfo === '' || typeof (that.$store.state.userInfo) === 'undefined') {
        that.$message({
          message: '请先登录在进行操作',
          type: 'warning',
          duration: 2 * 1000,
          onClose () {
            const href = window.location.href
            window.location.replace(href.substring(0, href.indexOf('/')) + '/login')
          }
        })
      } else {
        this.user = this.$store.state.userInfo
      }
    }
  },
  methods: {
    layout () {
      this.$store.dispatch('LogOut').then(() => {
        this.$router.push({ path: '/' })
      }).catch(() => {
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    .top {
      height: 80px;
      width: 100%;
      border: 1px #01763a solid;
      border-radius: 10px;
      /*background-color: rgba(#01763a,0.8);*/
      .image {
        text-align: center;
        img {
          margin-top: 5px;
          border-radius: 50%;
        }
      }
      .user {
        line-height: 22px;
        display: block;
        font-size: 0.6rem;
      }
    }
    .down {
      .detail {
        margin-top: 10px;
        padding-left: 20px;
        font-size: 0.8rem;
        line-height: 1.5rem;
        height: 35px;
        width: 100%;
        cursor: pointer;
        border-bottom: 1px #eee solid;
        .el-icon-arrow-right {
          float: right;
          margin-right: 30px;
          margin-top: 5px;
        }
        .content {
          margin-left: 10px;
        }
      }
      margin-bottom: 10px;
    }
  }
  .info {
    width: 98%;
    margin: 0 auto;
    span {
      display: block;
      height: 40px;
      font-size: 0.8rem;
      line-height: 40px;
      border-bottom: 1px #eee solid;
    }
  }
</style>
