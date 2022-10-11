<template>
  <div class="inputBar">
    <div class="inuptDiv">
      <label for="RegisterUserName">用户名</label>
      <input type="text" id="RegisterUserName" placeholder="1-15位任意字符" key="RegisterUserName" v-model="userName" @keyup="checkUserName">
      <div class="checkMsg">{{userNameMsg}}</div>
    </div>
    <div class="inuptDiv">
      <label for="registerPassword">密码</label>
      <input type="password" id="registerPassword" placeholder="6-18位只能包含字母、数字、下划线" key="registerPassword" v-model="password" @keyup="checkPassword">
      <div class="checkMsg">{{passwordMsg}}</div>
    </div>
    <div class="inuptDiv">
      <label for="ensureRegisterPassword">确认密码</label>
      <input type="password" id="ensureRegisterPassword" placeholder="再次输入密码" key="ensureRegisterPassword" v-model="ensurePassword" @keyup="checkEnsurePassword">
      <div class="checkMsg">{{ensurePasswordMsg}}</div>
    </div>
    <button @click="registerClick">注册</button>
    <div class="finalCheckMsg">{{message}}</div>
  </div>
</template>

<script>
  import {getUsers} from 'network/profile'

  export default {
    name: 'registerInput',
    data(){
      return{
        userName: '',
        password: '',
        ensurePassword: '',
        user: {},
        timer: null,
        userNameMsg: '',
        passwordMsg: '',
        ensurePasswordMsg: '',
        flagUserName: false,
        flagPassword: false,
        flagEnsurePassword: false,
        passwordRg: /^[a-zA-Z0-9_ ]{6,18}$/,
        isIdAvaliable: false,
        users: [],
        newUser: {},
        message: ''
      }
    },
    methods:{
      registerClick(){
        if(!(this.flagUserName && this.flagPassword && this.flagEnsurePassword)){
          this.message = '注册信息有误'
          return
        }
        let userId = '' + Math.floor(Math.random()*(10000000-10000+1)+10000);
        getUsers(userId).then(res => {
          this.users = res.data.data.users
          while(!this.isIdAvaliable){
            let temp = this.users.filter(value => {
              return value.userId === userId
            })
            if(temp.length > 0){
              userId = '' + Math.floor(Math.random()*(10000000-10000+1)+10000);
            }
            else{
              this.isIdAvaliable = true
            }
          }
          this.newUser = {
            userName: this.userName,
            password: this.password,
            userId: userId
          }
          this.$emit('getNewUser', this.newUser)
          this.message = '注册成功，账号为' + userId
        })
      },
      checkUserName(){
        if(this.timer !== null){
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          if(this.userName.length < 1 || this.userName.length > 15){
            this.userNameMsg = "请输入1-15位任意字符"
            this.flagUserName = false
          }
          else{
            this.userNameMsg = ""
            this.flagUserName = true
          }
        }, 1000)
      },
      checkPassword(){
        if(this.timer !== null){
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          if(!this.passwordRg.test(this.password)){
            this.passwordMsg = "6-18位，只能包含字母、数字、下划线"
            this.flagPassword = false
          }
          else{
            this.passwordMsg = ""
            this.flagPassword =true
          }
          if(this.password !== this.ensurePassword){
            this.ensurePasswordMsg = "密码不一致"
            this.flagEnsurePassword = false
          }
        }, 1000)
      },
      checkEnsurePassword(){
        if(this.timer !== null){
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          if(this.password !== this.ensurePassword){
            this.ensurePasswordMsg = "密码不一致"
            this.flagEnsurePassword = false
          }
          else{
            this.ensurePasswordMsg = ""
            this.flagEnsurePassword = true
          }
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  label{
    margin: 10px;
    color: #212121;
    line-height: 1.75;
  }
  input{
    float: right;
    margin-right: 15%;
    line-height: 25px;
  }
  input::-webkit-input-placeholder{
    font-size: 8px;
  }
  button{
    width: 50%;
    height: 30px;
    background-color: #ff91a5;
    color: #fff;
    border: none;
    margin-left: 25%;
  }
  .inputBar{
    margin-top: 10px;
  }
  .checkMsg{
    height: 30px;
    color: tomato;
  }
  .finalCheckMsg{
    margin-left: 40%;
    margin-top: 2%;
    color: tomato;
  }
  .inuptDiv{
    margin-left: 15%;
    margin-bottom: 2%;
    padding: 0 10px;
    line-height: 2;
  }
</style>