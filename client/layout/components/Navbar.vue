<template>
  <el-row v-if="mode">
    <el-col :span="24" class="wrap">
      <div class="logo">
        <router-link  :to="'/'">
          <img title="商丘明康医院" alt="" :src="LOGO">
        </router-link>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo horizontal" @select="handleSelect">
        <template v-for="item in routes" v-if="!item.hidden&&item.children">
          <template v-for="sub in item.children" v-if="!sub.hidden">
            <template v-if="!sub.children">
              <router-link  :to="setTo(sub.path)"
                           :key="sub.meta.title">
                <el-menu-item :index="setTo(sub.path)" :class="{'submenu-title-noDropdown':!isNest}">
                  <span v-if="sub.meta&&sub.meta.title" slot="title">{{sub.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
            <template v-else>
              <li class="el-submenu-menu">
                <div class="el-submenu-menu-title">{{sub.meta.title}}
                  <i class="el-icon-arrow-down"></i>
                </div>
                <div class="sub-submenu-menu">
                  <template v-for="child in sub.children">
                    <router-link v-if="!child.alwaysShow" :to="'/'+sub.path+'/'+child.path"
                                 :key="child.meta.title">
                      <el-menu-item :index="'/'+sub.path+'/'+child.path" :class="{'submenu-title-noDropdown':!isNest}">
                        <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                      </el-menu-item>
                    </router-link>
                  </template>
                </div>
              </li>
            </template>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>
  <el-row v-else>
    <hamburger class="hamburger-container" :toggleClick="toggleClick" :isActive="sidebar.opened"></hamburger>
    <el-col :span="24"  >
      <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="width: 100%" v-show="sidebar.opened">
        <template v-for="item in routes" v-if="!item.hidden&&item.children">
          <template v-for="sub in item.children" v-if="!sub.hidden">
            <template v-if="!sub.children">
              <router-link  :to="setTo(sub.path)"
                            :key="sub.meta.title">
                <el-menu-item :index="setTo(sub.path)" :class="{'submenu-title-noDropdown':!isNest}">
                  <svg-icon v-if="sub.meta&&sub.meta.icon" :icon-class="sub.meta.icon"></svg-icon>
                  <span v-if="sub.meta&&sub.meta.title" slot="title">{{sub.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
            <template v-else>
              <el-submenu :index="setTo(sub.path)">
                <template slot="title">
                  <svg-icon v-if="sub.meta&&sub.meta.icon" :icon-class="sub.meta.icon"></svg-icon>
                  <span slot="title">{{sub.meta.title}}</span>
                </template>
                <template v-for="child in sub.children">
                  <router-link v-if="!child.alwaysShow" :to="'/'+sub.path+'/'+child.path"
                               :key="child.meta.title">
                    <el-menu-item :index="'/'+sub.path+'/'+child.path" :class="{'submenu-title-noDropdown':!isNest}">
                      <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                      <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                    </el-menu-item>
                  </router-link>
                </template>
              </el-submenu>
            </template>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>


</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '../../components/Hamburger/index.vue'
import LOGO from '../../assets/index_images/logo.png'

export default {
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    mode: function () {
      return this.$store.state.app.device !== 'mobile'
    },
    routes () {
      return this.$router.options.routes
    }
  },
  data () {
    return {
      activeIndex: '/index',
      showMenu: false,
      isActive: {
        type: Boolean,
        default: false
      },
      isNest: false,
      LOGO
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        // location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    toggleClick: function () {
      this.$store.dispatch('ToggleSideBar')
    },
    hasNoShowingChildren (children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 0) {
        return true
      }
      return false
    },
    setIndex (path, childPath) {
      if (path === '/') {
        return '/index'
      } else {
        return path + '/' + childPath
      }
    },
    setTo (path) {
      return path
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "client/styles/mixin.scss";
  .el-row {
    border-bottom: 1px solid #dddddd;
  }
  .el-menu {
    border: none;
  }
  .el-menu-vertical-demo {
    width: 200px;
    min-height: 400px;
    z-index: 1000;
  }
  .logo {
    width: 122px;
    float: left;
    padding-top: 14px;
    padding-left: 10px;
    padding-right: 10px;
    img {
      width: 102px;
      height: 86px;
    }
  }
  .horizontal {
    @include clearfix;
    float: left;
    margin-left: 20px;
    li {
      float: left;
      height: 110px;
      background: #fff;
      span {
        padding-top: 14px;
        display: block;
        line-height: 96px;
        font-size: 16px;
        transition: all 0.3s;
        color: #333;
      }
      span:hover{
        color: #01763a;
      }
    }
    .is-active {
      span {
        color: #01763a !important;
      }
    }
    .el-submenu-menu {
      padding-top: 14px;
      position: relative;
      .el-submenu-menu-title {
        padding-left: 20px;
        padding-right: 20px;
        height: 96px;
        cursor: pointer;
        line-height: 96px;
        font-size: 16px;
        transition: all 0.3s;
        color: #333;
        text-align: center;
      }
      .sub-submenu-menu {
        position: absolute;
        display: none;
        top: 110px;
        left: -20px;
        width: 150px;
        z-index: 999;
        text-align: center;
        box-shadow: 0px -2px 10px rgba(0,0,0,0.1);
        li{
          display: block;
          padding-top: 0 !important;
          height: 40px;
          width: 150px;
          line-height: 40px;
          text-align: center;
          padding-left: 0px !important;
          span {
            padding-top: 0 !important;
            height: 40px;
            width: 150px;
            line-height: 40px;
            font-size: 14px;
          }
        }
      }
    }
    .el-submenu-menu:hover {
      .sub-submenu-menu {
        display: block ;
      }
    }

  }

</style>

