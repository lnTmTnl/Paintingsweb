<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="detail">
        <component class="view" :is="Component"/>
      </keep-alive>
    </router-view>
    
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style scoped>
  @import 'assets/css/base.css';
</style>
