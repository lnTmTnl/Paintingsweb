<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in images" :key="item">
      <a :href="item">
        <img :src="item" alt="" @load="detailSwiperImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    props: {
      images: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      detailSwiperImageLoad(){
        this.$emit('detailSwiperImageLoad')
      }
    }
  }
</script>

<style scoped>
  img{
    width: 95%;
  }
</style>