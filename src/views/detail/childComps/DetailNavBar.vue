<template>
  <div class="detail-navbar">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div class="title-item"
              v-for="(item,index) in titles"
              :key="item"
              :class="{active: index === currentIndex}"
              @click="titleClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components:{
      NavBar
    },
    data(){
      return{
        titles: ['详情', '评论'],
        currentIndex: 0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    color: #666666;
  }

  .title-item{
    flex: 1;
    font-size: 13px;
  }

  .active{
    color: var(--color-high-text);
  }

  .back img{
    margin-top: 10px;
  }
</style>