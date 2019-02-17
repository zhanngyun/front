<template>
  <el-row>
    <el-col :span="cols">
      <div class="item i1">
        <a class="vertical" href="https://www.hnsqmkyy.com">
          <div class="icon-box">
            <div class="img">
            </div>
            <div class="h2">门诊出诊表</div>
          </div>
        </a>
      </div>
    </el-col>
    <el-col :span="cols">
      <div class="item i2">
        <a class="vertical" href="https://www.hnsqmkyy.com">
          <div class="icon-box">
            <div class="img">
            </div>
            <div class="h2">就医须知</div>
          </div>
        </a>
      </div>
    </el-col>
    <el-col :span="cols">
      <div class="item i3">
        <a class="vertical" href="https://www.hnsqmkyy.com">
          <div class="icon-box">
            <div class="img">
            </div>
            <div class="h2">医院位置</div>
          </div>
        </a>
      </div>
    </el-col>
    <el-col :span="cols">
      <div class="item i4">
        <a class="vertical" href="https://www.hnsqmkyy.com/healthyList">
          <div class="icon-box">
            <div class="img">
            </div>
            <div class="h2">健康体检</div>
          </div>
        </a>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  data () {
    return {
      records: []
    }
  },
  computed: {
    cols: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 6
      } else {
        return 12
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .item {
      background: #fff;
      text-align: center;
      width: 98%;
      height: 200px;
      margin: 10px auto;
      border: 1px solid #dedede;
      border-radius: 5px;
      transition: all 0.4s ease;
      a {
        display: block;
        width: 100%;
        height: 100%;
        &.vertical{
          font-size: 0;
        }
        &.vertical:after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          height: 100%;
          font-size: 0;
        }
      }
      .icon-box {
        display: inline-block;
        vertical-align: middle;
        transition: all 0.6s ease;
      }
      &.i1 {
        a {
          background-color: #56A5AA;
          .h2 {
            font-size: 16px;
            color: #fff;
            margin-top: 6px;
          }
        }
        .img {
          background: url('../../assets/icon/time.png');
        }
      }
      &.i2 {
        .img {
          background: url('../../assets/icon/book.png') center no-repeat;
        }
      }
      &.i3 {
        a {
          background-color: #e5ca8f;
          .h2 {
            font-size: 16px;
            color: #fff;
            margin-top: 6px;
          }
        }
        .img {
          background: url('../../assets/icon/address1.png');
        }
      }
      &.i4 {
        a {
          background-color: #01763a;
          .h2 {
            font-size: 16px;
            color: #fff;
            margin-top: 6px;
          }
        }
        .img {
          background: url('../../assets/icon/healthy1.png');
        }
      }
      .img {
        width: 60px;
        height: 60px;
        margin: 0 auto;
      }
      .h2 {
        font-size: 16px;
        color: #333333;
        margin-top: 8px;
      }
    }
    .item:hover {
        .img {
          animation:rot 0.5s;
        }
    }

  .mobile {
    .h2 {
      font-size: 14px !important;
    }
  }
    @keyframes rot{
      0% { transform:rotate(0deg); -webkit-transform:rotate(0deg); }
      25% { transform:rotate(5deg); -webkit-transform:rotate(5deg); }
      50% { transform:rotate(-5deg); -webkit-transform:rotate(-5deg); }
      75% { transform:rotate(5deg); -webkit-transform:rotate(5deg); }
      100% { transform:rotate(0deg); -webkit-transform:rotate(0deg); }
    }
</style>
