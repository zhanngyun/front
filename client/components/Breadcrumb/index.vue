<template>
  <el-breadcrumb class="app-breadcrumb" separator=">" v-if="isIndex">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <router-link v-if="index==levelList.length-1" :to="item.redirect||item.path" class="no-redirect">{{item.meta.title}}</router-link>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null,
      isIndex: true
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.meta)
      if (matched[1].path === '/') {
        this.isIndex = false
      } else {
        matched = [{path: '/', meta: { title: '首页' }}].concat(matched[1])
        this.levelList = matched
        this.isIndex = true
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #01763a;
      font-weight: bold;
    }
    .no-redirect:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
</style>
