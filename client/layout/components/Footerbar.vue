<template>
  <el-row>
    <el-col :span="24">
      <div class="footer">
        <!--友情链接-->
        <div class="link">
          <div class="wrap cf">
            <span class="l">友情链接：</span>
            <div class="a">
              <a href="http://www.nhc.gov.cn" target="_blank">中华人民共和国国家卫生健康委员会</a><a href="http://www.ztzy.com/" class="last" target="_blank">郑州大学第五附属医院</a> </div>
          </div>
        </div>
        <!--站内信息-->
        <div class="copy">
          <div class="wrap cf">
            <div class="left">
              <div class="siteMap">
                  <a href="#">网站地图</a><a href="#" class="last"><router-link  to="/doctor/index">关于我们</router-link></a>        </div>
                <span class="cf address"><span>西院区地址：</span><span class="div"><b>商丘市城乡一体化示范区民主路与中州路交叉口 </b></span></span>
              <br><span class="cf address"><span>东院区地址：</span><span class="div"><b>商丘市城乡一体化示范区木兰大道与和谐路交叉口南300米路西 </b></span></span>
                <br><span>咨询电话：<b>0370-3127266 &nbsp;  0370-3127288</b> </span>
                <br><span>急救电话：<b>0370-6027120</b> </span>
              </div>
            <div class="right">
              <span>Copyright 2015-2020 商丘民康医院 All Rights Reserved.             <br> 豫ICP备18039880号 </span><br>
              <span><a href="#" target="_blank">网站建设</a>：<span class="chatMe"  @click="chatMe">商丘民康医院</span></span><br/>
              <span><img class="gn" src="https://hnsqmkyy.com/img/ga1.png" alt="公安">豫公网安备 41140202000156号</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>

export default {
  name: 'Footerbar',
  methods: {
    chatMe () {
      this.$notify({
        title: '成功',
        message: '详情请联系纪先生：17638190323',
        type: 'success',
        duration: 10000
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .gn {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .footer {
    width: 100%;
    background: url('../../assets/icon/foot.jpg') no-repeat center;
    background-size: cover;
    color: #b2b2b2;
    .link {
      padding: 10px 20px;
      border-bottom: 1px solid #585858;
      line-height: 20px;
      .wrap {
        position: relative;
        z-index: 1;
      }
      .l {
        float: left;
        padding-right: 10px;
      }
      .a {
        overflow: hidden;
        a {
          padding-right: 21px;
          background: url('../../assets/icon/foot2.png') no-repeat right center;
          margin-right: 21px;
          color: #b2b2b2;
          float: left;
          &.last {
            margin: 0;
            padding: 0;
            background: none;
          }
        }
      }

    }
    .copy {
      padding: 34px 20px 30px;
      font-size: 12px;
      overflow: hidden;
      .wrap {
        position: relative;
        z-index: 1;
        .left {
          float: left;
          width: 50%;
          color: #b2b2b2;
          line-height: 25px;
          .siteMap {
            overflow: hidden;
            a {
              color: #b2b2b2;
              float: left;
              &.last{
                padding-left: 42px;
                background: url('../../assets/icon/foot2.png') no-repeat 21px center;
              }
            }
          }
        }
        .right {
          float: right;
          text-align: right;
          color: #b2b2b2;
          line-height: 25px;
          width: 50%;
        }
      }
      .address .div {
        overflow: hidden;
        float: none;
      }
    }
  }
  .chatMe{
    cursor: pointer;
  }

  .mobile {
    .footer {
      width: 100%;
      /*.copy {
        height: 200px;
      }*/
    }
  }

</style>
