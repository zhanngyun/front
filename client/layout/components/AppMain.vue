<template>
  <section class="app-main" >
    <breadcrumb></breadcrumb>
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/index.vue'

  export default {
    name: 'AppMain',
    components: {
      Breadcrumb
    }
  }
</script>

