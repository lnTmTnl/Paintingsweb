<template>
  <div id="profile">

    <div class="logined-view" v-if="isLogined">

      <div v-if="isShowPaintings">

        <div v-if="isUploadingImgs">
          <nav-bar class="profile-upload-nav">
            <template v-slot:left><div class="back" @click="cancelUpload"><img src="~assets/img/common/back2.svg" alt=""></div></template>
            <template v-slot:center><div>上传作品</div></template>
          </nav-bar>
          <upload-image-view @getNewImg="getNewImg"></upload-image-view>
        </div>

        <div v-else>
          <nav-bar class="profile-nav">
            <template v-slot:left><div class="back" @click="unshowPaintings"><img src="~assets/img/common/back2.svg" alt=""></div></template>
            <template v-slot:center><div>我的作品</div></template>
            <template v-slot:right><div class="upload" @click="uploadPainting">上传</div></template>
          </nav-bar>
          <paintings :paintings="paintings"></paintings>
        </div>
        
      </div>
      

      <div v-else>
        <nav-bar class="profile-nav"><template v-slot:center><div>我的</div></template></nav-bar>
        <div class="avatarBox"><img :src="user.userAvatar" alt="" class="avatar"></div>
        <div class="userName">{{user.userName}}</div>
        <div class="userId">ID:{{user.userId}}</div>
        <div>
          <input type="text" class="resetIntroduce" v-if="isResetIntroduce" v-model="newIntroduce" @blur="saveIntroduce">
          <div class="introduce" v-else @click="resettingIntroduce">简介：{{user.introduce}}</div>
        </div>
        <div class="uploaded" @click="showPaintings">我上传的作品</div>
        <button class="unLogin" @click="unLoginClick">注销登录</button>
      </div>
      
    </div>

    <div class="unlogined-view" v-else>
      <nav-bar class="profile-nav"><template v-slot:center><div>我的</div></template></nav-bar>
      <img src="~assets/img/profile/cat-hand.svg" alt="">
      <tab-control class="tab-control"
                    ref="tabControl"
                    :titles="['登录', '注册']"
                    @tabClick="tabClick"></tab-control>
      <login-input v-if="loginOrRegister" @getUser="getUser" :new-user="newUser"></login-input>
      <register-input v-else @getNewUser="getNewUser"></register-input>
    </div>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import LoginInput from './childComps/LoginInput'
  import RegisterInput from './childComps/RegisterInput'
  import Paintings from './childComps/Paintings'
  import UploadImageView from './childComps/UploadImageView'

  export default {
    name: "Profile",
    components: {
      NavBar,
      TabControl,
      LoginInput,
      RegisterInput,
      Paintings,
      UploadImageView
    },
    data(){
      return{
        user: {},
        loginOrRegister: true,
        isLogined: false,
        newUser: [],
        isResetIntroduce: false,
        newIntroduce: '',
        isShowPaintings: false,
        isUploadingImgs: false
      }
    },
    computed:{
      paintings(){
        return this.user.paintings
      }
    },
    methods:{
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'login'
            break
          case 1:
            this.currentType = 'register'
            break
        }
        this.$refs.tabControl.currentIndex = index
        this.loginOrRegister = index == 0 ? true : false
      },
      getUser(user){
        this.user = user
        this.isLogined = true
      },
      getNewUser(newUser){
        this.newUser.push(newUser)
      },
      unLoginClick(){
        this.user = {}
        this.isLogined = false
      },
      resettingIntroduce(){
        this.isResetIntroduce = true
        this.newIntroduce = this.user.introduce
      },
      saveIntroduce(){
        this.user.introduce = this.newIntroduce
        this.newIntroduce = ''
        this.isResetIntroduce = false
      },
      showPaintings(){
        this.isShowPaintings = true
      },
      unshowPaintings(){
        this.isShowPaintings = false
      },
      uploadPainting(){
        this.isUploadingImgs = true
      },
      cancelUpload(){
        this.isUploadingImgs = false
      },
      getNewImg(newImg){
        this.user.paintings.push(newImg)
        this.isUploadingImgs = false
      }
    }
  }
</script>

<style scoped>
  img{
    margin-left: 25%;
  }
  button{
    width: 50%;
    height: 30px;
    background-color: #ff91a5;
    color: #fff;
    border: none;
    margin-left: 25%;
    margin-top: 25%;
  }
  .avatarBox{
    width: 50%;
    height: 50vw;
    overflow: hidden;
    margin-left: 25%;
    margin-top: 10%;
  }
  .avatar{
    width: 100%;
    margin: 0;
  }
  .userName{
    color: pink;
    font-size: 20px;
    text-align: center;
    margin-top: 2%;
  }
  .userId{
    color: #333;
    text-align: center;
    margin-top: 2%;
  }
  .introduce{
    color: #333;
    margin: 0 5%;
    margin-top: 2%;
    padding: 10px;
    border: 1px solid #ccc;
    word-wrap: break-word;
    word-break: break-all;
  }
  .resetIntroduce{
    width: 90%;
    color: #333;
    margin: 0 5%;
    margin-top: 2%;
    padding: 10px;
    border: 1px solid #ccc;
    word-wrap: break-word;
    word-break: break-all;
  }
  .uploaded{
    color: #333;
    margin: 0 5%;
    margin-top: 2%;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .profile-nav{
    background-color: var(--color-tint);
  }
  .profile-upload-nav{
    position: fixed;
    top: 0px;
    z-index: 9999;
    width: 100%;
    background-color: var(--color-tint);
  }
  .tab-control{
    margin-top: 5%;
  }
  .back img{
    margin-top: 10px;
    width: 35%;
  }
</style>