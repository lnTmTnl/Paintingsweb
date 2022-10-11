<template>
  <div id="upload-image-view">
    <input type="file" class="selectImg" @change="selected($event)">
    <img :src="selectedImg" alt="">
    <input type="text" placeholder="标题" class="setTitle" v-model="title">
    <input type="text" placeholder="简介" class="setIntroduce" v-model="introduce">
    <button @click="uploadClick">确定认传</button>
    <div class="message">{{msg}}</div>
  </div>
</template>

<script>

  export default {
    name: 'UploadImageView',
    components: {
    },
    data(){
      return{
        selectedImg: '',
        title: '',
        introduce: '',
        msg: ''
      }
    },
    methods:{
      selected(event){
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e => {
          this.selectedImg = reader.result
        })
      },
      uploadClick(){
        if(this.selectedImg === ''){
          this.msg = "未选择图片"
        }
        else if(this.title === ''){
          this.msg = "请输入标题"
        }
        else{
          const newImg = {
            url: this.selectedImg,
            link: '',
            title: this.title,
            introduce: this.introduce,
            iid: '' + Math.floor(Math.random()*(10000000-10000+1)+10000)
          }
          this.$emit('getNewImg', newImg)
        }
      }
    }
  }
</script>

<style scoped>
  img{
    width: 90%;
    margin-left: 5%;
  }
  input{
    margin: 5% 5%;
  }
  button{
    width: 50%;
    height: 30px;
    background-color: #ff91a5;
    color: #fff;
    border: none;
    margin-left: 25%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  #upload-image-view{
    padding-top: 44px;
    padding-bottom: 55px
  }
  .setTitle{
    margin-left: 10%;
    width: 80%;
    height: 20%;
  }
  .setIntroduce{
    margin-left: 10%;
    width: 80%;
    height: 20%;
  }
  .message{
    margin-left: 40%;
    margin-top: 2%;
    margin-bottom: 2%;
    color: tomato;
  }
</style>