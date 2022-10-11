<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    -moz-column-count:2;
	  /* Firefox */
    -webkit-column-count:2;
	  /* Safari 和 Chrome */
    column-count:2;
	  -moz-column-gap:1px;
	  -webkit-column-gap:1px;
	  column-gap:1px;
  }
</style>