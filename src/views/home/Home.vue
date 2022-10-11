<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><div>主页</div></template></nav-bar>
    
    <tab-control class="tab-control-t"
                  ref="tabControlT"
                  :titles="['综合', '最新', '热门']"
                  @tabClick="tabClick"
                  v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"> <!--@pullingUp="loadMore"-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <tab-control class="tab-control"
                  ref="tabControl"
                  :titles="['综合', '最新', '热门']"
                  @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click="backClick" v-show="isShowBackTop"></back-top>

  </div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {
  getHomeMultidata,
  getHomeGoods
  } from 'network/home'
import {debounce} from "common/utils.js"

import HomeSwiper from './childComps/HomeSwiper'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'comprehensive': {page: 0, list: []},
          'news': {page: 0, list: []},
          'pop': {page: 0, list: []}
        },
        currentType: 'comprehensive',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created(){
      this.getHomeMultidata()

      this.getHomeGoods('comprehensive')
      this.getHomeGoods('news')
      this.getHomeGoods('pop')

    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh, 500)

      this.$bus.$on('itemImageLoad', () => {
        //this.$refs.scroll.refresh()
        refresh()
      })

    },
    methods: {
      /*
        事件监听相关
      */

      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'comprehensive'
            break
          case 1:
            this.currentType = 'news'
            break
          case 2:
            this.currentType = 'pop'
            break
        }
        this.$refs.tabControlT.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },

      backClick(){
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },

      loadMore(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
      },

      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      /*
        网络请求相关
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.data.image
          //this.recommends = res.data.data.recommend.list
        })
      },
    
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      }
    },
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
  }

  .home-nav{
    background-color: var(--color-tint);

    /*position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;*/
  }

  .tab-control{
    background-color: #fff;
  }

  .tab-control-t{
    background-color: #fff;
    position: relative;
    z-index: 999;
  }

  .content{
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    /*margin-top: 44px;*/

    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>