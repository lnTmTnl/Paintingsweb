<template>
    <div>
      <goods-list :goods="paintings"></goods-list>
    </div>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: 'Paintings',
    components:{
      GoodsList
    },
    props:{
      paintings: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      a(){
        console.log(this.paintings);
      }
    }
  }
</script>

<style scoped>

</style>