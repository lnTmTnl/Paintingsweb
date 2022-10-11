<template>
  <div id="category">
    <nav-bar class="category-nav"><template v-slot:center><div>分类</div></template></nav-bar>
    <ul>
      <li class="c1">插画</li>
      <li class="c2">漫画</li>
      <li class="c3">同人</li>
      <li class="c4">原创</li>
      <li class="c5">写实</li>
      <li class="c6">其他</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Category",
    components: {
      NavBar
    },
    data(){
      return{
        
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
  #category{
    width: 100%;
    height: 100vh;
  }
  ul{
    height: calc(100% - 50px);
    margin-top: 3px;
  }
  ul li{
    display: inline-block;
    list-style: none;
    height: 30%;
    width: 49%;
    margin-top: 5px;
    margin-left: 2px;
    text-align: center;
    line-height: 28vh;
    border: 1px solid #ccc;
    border-radius: 25px;
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    text-shadow: 2px 2px 5px #000;
  }
  .c1{
    background: url('~assets/img/category/cover1.jpg');
    background-size: 100% auto;
    background-position: center;
  }
  .c2{
    background: url('~assets/img/category/cover2.jpg');
    background-size: auto 100%;
    background-position: center;
  }
  .c3{
    background: url('~assets/img/category/cover3.jpg');
    background-size: auto 100%;
    background-position: center;
  }
  .c4{
    background: url('~assets/img/category/cover4.jpg');
    background-size: auto 100%;
    background-position: center;
  }
  .c5{
    background: url('~assets/img/category/cover5.jpeg');
    background-size: auto 100%;
    background-position: center;
  }
  .c6{
    background-color: #666;
  }
  .category-nav{
    background-color: var(--color-tint);
  }
</style>