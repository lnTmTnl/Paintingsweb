<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" ref="nav" @titleClick="titleClick"></detail-nav-bar>
    
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :images="images" @detailSwiperImageLoad="detailSwiperImageLoad"></detail-swiper>
      <div class="introduce">简介：{{introduce}}</div>
      <detail-uploader-info :uploader="uploader"></detail-uploader-info>
      <detail-comments :comments="comments" ref="comments"></detail-comments>
    </scroll>

  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailUploaderInfo from './childComps/DetailUploaderInfo'
  import DetailComments from './childComps/DetailComments'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Uploader} from 'network/detail'

  import {debounce} from 'common/utils.js'

  export default {
    name: 'detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailUploaderInfo,
      DetailComments,
      Scroll
    },
    data(){
      return {
        iid: null,
        images: [],
        introduce: {
          type: String,
          default(){
            return ''
          }
        },
        uploader: {},
        comments: [],
        themeTopYs: [0],
        currentIndex: 0,

        getThemeTopY: null
      }
    },
    methods:{
      detailSwiperImageLoad(){
        let newRefresh = debounce(this.$refs.scroll.refresh, 100)
        newRefresh()

        this.getThemeTopY()
      },

      getDetail(){
        getDetail(this.iid).then(res => {
          this.images = res.data.data.results.filter(value => {
            return value.iid === this.iid
          })[0].images
          this.introduce = res.data.data.results.filter(value => {
            return value.iid === this.iid
          })[0].introduce
          this.uploader = new Uploader(res.data.data.results.filter(value => {
            return value.iid === this.iid
          })[0].uploader)
          this.comments = res.data.data.results.filter(value => {
            return value.iid === this.iid
          })[0].comments
        })
      },

      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      },

      contentScroll(position){
        const positionY = -position.y

        let length = this.themeTopYs.length
        for(let i = 0; i < length; i++){
          if(this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length-1 && positionY >= this.themeTopYs[i]))){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      }

    },
    /*activated(){
      console.log(0);
      this.iid = this.$route.params.iid
      this.getDetail()
    },*/
    created(){
      this.iid = this.$route.params.iid
      this.getDetail()

      this.getThemeTopY = debounce(() => {
        this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
      }, 500)
    },
    mounted(){
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9999;

    background-color: #fff;
    height: 100vh;
  }

  .detail-nav-bar{
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }

  .introduce{
    padding: 10px;
    color: #666;
    font-size: 14px;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>