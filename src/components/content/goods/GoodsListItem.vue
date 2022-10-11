<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.url" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style  scoped>
  .goods-list-item{
    margin: 5px 2px;
    margin-right: 3px;

    border: 1px solid #666;
    break-inside:avoid;
    box-sizing: border-box;
  }

  .goods-list-item img{
    width: 100%;
    height: auto;
  }

</style>