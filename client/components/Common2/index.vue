<template>
  <div class="block">
    <div class="title">了解这些有可能对您的就诊有所帮助</div>
    <div class="list clearfix">
      <div class="item i1">
        <a class="vertical" href="https://www.hnsqmkyy.com">
          <div class="icon-box">
            <div class="img">
            </div>
            <div class="h2">门诊出诊表</div>
          </div>
        </a>
      </div><div class="item i2">
      <a class="vertical" href="https://www.hnsqmkyy.com">
        <div class="icon-box">
          <div class="img">
          </div>
          <div class="h2">就医须知</div>
        </div>
      </a>
    </div><div class="item i3">
      <a class="vertical" href="https://www.hnsqmkyy.com">
        <div class="icon-box">
          <div class="img">
          </div>
          <div class="h2">医院位置</div>
        </div>
      </a>
    </div>
      <div class="item i4">
        <a class="vertical" href="https://www.hnsqmkyy.com/healthyList">
          <div class="icon-box">
            <div class="img">
            </div>
            <div class="h2">健康体检</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      records: []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .block {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;
    .title {
      font-size: 24px;
      color: #333333;
      text-align: center;
      line-height: 80px;
    }
    .list {
      text-align: center;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .item:first-child {
        margin-left: 0
      }
      .item {
        background: #fff;
        text-align: center;
        width: 167px;
        height: 133px;
        border: 1px solid #dedede;
        border-radius: 5px;
        float: left;
        margin-left: 20px;
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
        a:hover {
          background-color: #01763a;
          .h2 {
            font-size: 16px;
            color: #fff;
            margin-top: 6px;
          }
        }
        .icon-box {
          display: inline-block;
          vertical-align: middle;
          transition: all 0.6s ease;
          transform: translateY(0);
        }
        &.i1 {
          .img {
            background: url('../../assets/icon/time.png') center no-repeat;
          }
        }
        &.i1:hover {
          .img {
            background: url('../../assets/icon/time1.png');
          }
        }
        &.i2 {
          .img {
            background: url('../../assets/icon/book.png') center no-repeat;
          }
        }
        &.i2:hover {
          .img {
            background: url('../../assets/icon/book1.png');
          }
        }
        &.i3 {
          .img {
            background: url('../../assets/icon/address.png') center no-repeat;
          }
        }
        &.i3:hover {
          .img {
            background: url('../../assets/icon/address1.png');
          }
        }
        &.i4 {
          .img {
            background: url('../../assets/icon/healthy.png') center no-repeat;
          }
        }
        &.i4:hover {
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
        .icon-box {
          transform: translateY(-5px);
        }
      }
    }
  }
  .mobile {
    .title {
      font-size: 20px !important;
    }
    .h2 {
      font-size: 14px !important;
    }
  }
</style>
