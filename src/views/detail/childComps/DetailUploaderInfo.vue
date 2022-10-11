<template>
  <div class="detail-uploader-info">
    <div class="avatar"><img :src="uploader.avatar" alt=""></div>
    <div class="name">{{uploader.name}}</div>
    <div class="introduce">{{uploader.introduce}}</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailUploaderInfo',
    props: {
      uploader: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-uploader-info{
    padding: 10px;
    background-color: #eee;
    height: 100px;
  }
  .avatar{
    float: left;
    width: 80px;
    height: 80px;
    background-color: #fff;
    overflow: hidden;
  }
  .avatar img{
    width: 100%;
  }
  .name{
    margin-left: 90px;
    font-size: 18px;
    color: #ff99aa;
  }
  .introduce{
    margin-top: 10PX;
    margin-left: 90px;
    font-size: 14px;
  }
</style>