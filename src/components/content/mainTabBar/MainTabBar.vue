<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#333333">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home-fill.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#333333">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/manage.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/manage-fill.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/find" activeColor="#333333">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/compass-circle.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/compass-circle-fill.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>发现</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#333333">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/people.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/people-fill.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>