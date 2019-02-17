<template>
  <el-row>
    <el-col>
      <div class="block">
        <div class="title">医疗环境</div>
        <div class="clearfix"></div>
        <div class="list">
          <div class="item clearfix" v-for="item in records">
            <div class="item-title">{{item.name}}</div>
            <div class="childs">
              <ul>
                <li v-for="child in item.childs">
                  <div class="child">
                    <img v-lazy="child.envUrl" :alt="child.envName">
                    <div class="info">
                      <div class="inline">
                        <div class="h2">{{child.envName}}</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: '院内医疗环境|河南商丘民康医院官网',
      meta: [
        {
          name: 'keywords',
          content: '商丘民康医院院内医疗环境'
        },
        {
          name: 'description',
          content: this.pageDescription
        }
      ]
    }
  },
  data () {
    return {
      records: this.$store.state.envAllList,
      pageDescription: '商丘民康医院的医疗环境设施好，设备先进，质量有保障'
    }
  },
  async asyncData ({route, router, store}) {
    await store.dispatch('getAllEnvList', route.params.id)
  },
  created () {
    if (this.records.size === 0) {
      const _that = this
      this.$store.dispatch('getAllEnvList').then(data => {
        _that.records = data
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.block {
  width: 100%;
  position: relative;
  .title {
    height: 40px;
    text-align: center;
    font-size: 24px;
    color: #333333;
  }
  .list {
    width: 100%;
    position: relative;
    .item-title {
      text-align: left;
      line-height: 40px;
      font-size: 23px;
    }
    .childs {
      width: 100%;
      margin: 0 auto;
      ul {
        margin: 0;
        li {
          list-style: none;
          float: left;
          margin-left: 10px;
          margin-bottom: 10px;
          .child {
            width: 350px;
            height: 300px;
            position: relative;
            img {
              width: 350px;
              height: 300px;
            }
            .info {
              background: url('../../assets/icon/mask40.png');
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: auto;
              text-align: center;
              min-height: 30px;
              .inline {
                display: inline-block;
                vertical-align: middle;
                padding: 15px 15px;
                .h2 {
                  font-size: 18px;
                  color: #fff;
                }
              }
            }
          }
        }
      }

    }
  }

}
  .mobile {
    .childs {
      ul {
        padding: 0;
        li {
          margin-left: 0px !important;
          width: 100%;
        }
      }
    }
  }
</style>

