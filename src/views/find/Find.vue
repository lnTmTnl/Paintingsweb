<template>
  <div id="find">
    <nav-bar class="find-nav"><template v-slot:center><div>发现</div></template></nav-bar>
    <img src="~assets/img/find/findingCat.svg" alt="" class="findIcon">
    <input type="text" placeholder="查找插画、用户" class="search" v-model="searchWords">
    <button>查找</button>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Find",
    components: {
      NavBar
    },
    data(){
      return {
        searchWords: ''
      }
    }
  }
</script>

<style scoped>
  #find{
    text-align: center;
  }
  .find-nav{
    background-color: var(--color-tint);
  }
  .findIcon{
    margin-top: 5%;
  }
  .search{
    width: 80%;
    margin-top: 10%;
    line-height: 30px;
    text-indent: 5px;
  }
  button{
    width: 50%;
    height: 30px;
    background-color: #ff91a5;
    color: #fff;
    border: none;
    margin-top: 10%;
  }
</style>