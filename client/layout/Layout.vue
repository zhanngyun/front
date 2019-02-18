<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <!--<sidebar class="sidebar-container"></sidebar>-->
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
      <footerbar></footerbar>
      <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50"></back-to-top>
    </div>
    <!-- 侧边栏 -->
    <div class="broadside">
      <router-link to="/mobileMe">
        <div class="top">
          我的<br/>空间
        </div>
      </router-link>
      <router-link to="/order">
        <div class="buttom">
          预约<br/>记录
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain, Footerbar } from './components'
import BackToTop from '../components/BackToTop/index.vue'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain,
    Footerbar,
    BackToTop
  },
  data () {
    return {
      myBackToTopStyle: {
        right: '10px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'z-index': '999',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#fff', // 按钮的背景颜色 The background color of the button
        'box-shadow': '0px 0px 10px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    device () {
      return this.$store.state.app.device
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../styles/index.scss";
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  /*.drawer-bg {
    background: #ccc;
    opacity: 0.1;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 222;
  }*/
  .broadside {
    position: fixed;
    top: 50%;
    margin-top: -50px;
    right: 0;
    height: 100px;
    width: 50px;
    z-index: 10000;
    .top {
      width: 50px;
      background-color: #01763a;
      height: 50px;
      line-height: 25px;
      color: #ffffff;
      font-size: 0.8rem;
      text-align: center;
      border-radius: 2px;
    }
    .buttom {
      border-top: 1px solid #eee;
      width: 50px;
      background-color: #01763a;
      height: 50px;
      line-height: 25px;
      color: #ffffff;
      font-size: 0.8rem;
      text-align: center;
      border-radius: 2px;
    }
  }

</style>
