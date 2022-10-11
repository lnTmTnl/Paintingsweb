<template>
  <div class="detail-comments">
    <div class="comment" v-for="item in comments" :key="item">
      <div class="commenter-avatar"></div>
      <div class="commenter">{{item.commenter.name}}</div>
      <div class="content">{{item.content}}</div>
      <div class="date">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailComments',
    props: {
      comments: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-comments{
    padding: 10px;
    margin-top: 10px;
  }
  .comment{
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .commenter-avatar{
    float: left;
    width: 50px;
    height: 50px;
    background-color: #ccc;
  }
  .commenter{
    margin-top: 15px;
    margin-left: 60px;
    font-weight: bold;
    font-size: 14px;
    color: #99ccff
  }
  .content{
    padding: 20px 0;
    margin-left: 60px;
    margin-right: 20px;
    color: #212121;
    font-size: 16px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .date{
    color: #ccc;
    font-size: 13px;
  }
</style>