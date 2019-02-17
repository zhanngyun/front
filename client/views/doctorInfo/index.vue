<template>
  <el-row class="mobileClass">
    <el-row>
      <el-col :span="cols1">
        <div class="img">
          <img :src="data.doctorPortrait" :alt="imgAlt" width="300px" height="350px">
        </div>
      </el-col>
      <el-col :span="cols2">
        <div class="text-box">
          <div class="dorname">
            <div class="title1">{{data.doctorName}}</div>
            <div class="title2">职称 : {{data.doctorJob}}</div>
            <div class="title2">擅长 : {{data.remark}}</div>
          </div>
          <div class="text">
            <p class="ellipsisClass">简介 : {{data.doctorIntro}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="content fuwenben">
          <div class="title">详情介绍</div>
          <div class="text">
            {{data.doctorIntro}}
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          label="预约日期"
          align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.visitingDate.substring(5) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="visitingDay"
          label="预约时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="statusMessage"
          label="预约状态"
          align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" :size="size" :loading="loading" :type="scope.row.visitingStatus === '0' ? 'success' : scope.row.visitingStatus === '2' ? 'primary' : 'info'" :disabled="scope.row.visitingStatus !== '0'" >{{scope.row.showMsg}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'doctorInfo',
  metaInfo () {
    return {
      title: '医生详情|' + this.data.doctorName + '| 河南商丘市民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: '商丘民康医院' + this.data.doctorName
        },
        {
          name: 'description',
          content: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
        }
      ]
    }
  },
  data () {
    return {
      data: this.$store.state.doctor,
      imgAlt: '',
      width: 350,
      loading: false,
      tableData: [],
      orderForm: {
        doctorId: '',
        visitingId: '',
        userId: ''
      }
    }
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('getDoctorById', route.params.id)
  },
  created () {
    const _that = this
    this.imgAlt = '商丘民康医院' + this.data.doctorName
    if (typeof window !== 'undefined') {
      const id = this.common.getId()
      this.orderForm.doctorId = id
      if (this.data === '') {
        this.$store.dispatch('getDoctorById', id).then(data => {
          _that.data = data
        })
      }
      this.getList(id)
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
    },
    size: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 'medium'
      } else {
        return 'small'
      }
    }
  },
  methods: {
    getList (id) {
      const that = this
      if (that.$store.state.userInfo === '' || typeof (that.$store.state.userInfo) === 'undefined') {
        that.$store.dispatch('queryListByDoctorByDoctorId', id).then(data => {
          that.tableData = []
          for (var i = 0; i < data.length; i++) {
            const el = data[i]
            if (el.visitingStatus === '0' || el.visitingStatus === '2') {
              el.statusMessage = '允许预约'
            } else {
              el.statusMessage = '暂停预约'
            }
            that.tableData.push(el)
          }
        })
      } else {
        this.orderForm.userId = that.$store.state.userInfo.id
        that.$store.dispatch('queryListByDoctorId', {doctorId: id, userId: this.orderForm.userId}).then(data => {
          that.tableData = []
          for (var i = 0; i < data.length; i++) {
            const el = data[i]
            if (el.visitingStatus === '0' || el.visitingStatus === '2') {
              el.statusMessage = '允许预约'
            } else {
              el.statusMessage = '暂停预约'
            }
            that.tableData.push(el)
          }
        })
      }
    },
    handleClick (row) {
      const that = this
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
        if (row.showMsg === '已预约') {
          that.$message({ message: '您已预约，请到我的预约列表中查看', type: 'success' })
          return
        }
        that.orderForm.visitingId = row.id
        that.$store.dispatch('ordering', this.orderForm).then(data => {
          if (data) {
            that.$message({ message: '恭喜你，预约成功', type: 'success' })
            this.getList(this.orderForm.doctorId)
          } else {
            that.$message({ message: '预约失败', type: 'error' })
          }
        })
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ellipsisClass {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .img {
    text-align: center;
    margin-bottom: 20px;
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
    width: 100%;
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
  .mobile {
    .el-table {
      font-size: 12px !important;
    }
  }
</style>
