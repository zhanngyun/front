<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%" v-loading.body="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="预约编号">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.userName }}</span>
            </el-form-item>
            <el-form-item label="预约时间">
              <span>{{ props.row.orderTime }}</span>
            </el-form-item>
            <el-form-item label="医生">
              <span>{{ props.row.doctorName }}</span>
            </el-form-item>
            <el-form-item label="预约状态">
              <span>{{ props.row.orderStatus === '1' ? '成功预约':'已取消' }}</span>
            </el-form-item>
            <el-form-item label="操作时间">
              <span>{{ props.row.createTime | parseTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号" align="center">
      </el-table-column>
      <el-table-column
        prop="orderTime"
        label="预约时间" align="center">
      </el-table-column>
      <el-table-column
        prop="doctorName"
        label="医生" align="center">
        <template slot-scope="scope">
          <router-link :to="'/doctorInfo/' + scope.row.doctorId">
            <el-button type="primary">{{scope.row.doctorName}}</el-button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        label="预约状态" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.orderStatus === '1' ? '成功预约':scope.row.orderStatus === '3' ? '已失效':'已取消'}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作" align="center">
        <template slot-scope="scope" align="center">
          <el-button @click="handleClick(scope.row)"  size="small" :type="scope.row.orderStatus === '1' ? 'danger' : 'info'" :disabled="scope.row.orderStatus !== '1'">取消预约</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.current"
                     :page-sizes="[10,20,30, 50]" :page-size="listQuery.size" layout="total, sizes, prev, pager, next" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { parseTime } from '../../util/index'
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
    filters: {
      parseTime: function (val) {
        return parseTime(val)
      }
    },
    methods: {
      getList () {
        this.listLoading = true
        this.$store.dispatch('getOrderListByUserId', this.listQuery).then(data => {
          this.listLoading = false
          this.total = data.total
          this.tableData = data.records
        }).catch(() => {
          this.listLoading = false
        })
      },
      handleCurrentChange (val) {
        this.listQuery.current = val
        this.getList()
      },
      handleSizeChange (val) {
        this.listQuery.size = val
        this.getList()
      },
      handleClick (row) {
        this.$confirm('是否取消预约 ' + row.id + '  ?', '提示', { type: 'warning' })
          .then(() => {
            this.$store.dispatch('cancelOrdering', { orderId: row.id, userId: this.listQuery.userId }).then(data => {
              this.$notify({
                title: '成功',
                message: '取消预约成功',
                type: 'success',
                duration: 2000
              })
              this.getList()
            })
          }).catch(() => {
            this.$message.info('已取消操作!')
          })
      }
    },
    data () {
      return {
        total: 0,
        listLoading: true,
        listQuery: {
          current: 1,
          size: 10,
          userId: ''
        },
        tableData: [],
        pageTitle: '预约|河南商丘市民康医院官网',
        pageKeyWords: '河南商丘市民康医院官网',
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
          this.listQuery.userId = that.$store.state.userInfo.id
          this.getList()
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 120px !important;
    color: #99a9bf !important;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
</style>
