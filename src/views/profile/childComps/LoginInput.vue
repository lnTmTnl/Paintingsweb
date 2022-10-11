<template>
  <div class="inputBar">
    <div class="inuptDiv">
      <label for="loginUserId">账号</label>
      <input type="text" id="loginUserId" placeholder="账号" key="loginUserId" v-model="userId">
    </div>
    <div class="inuptDiv">
      <label for="loginPassword">密码</label>
      <input type="password" id="loginPassword" placeholder="密码" key="loginPassword" v-model="password">
    </div>
    <button @click="loginClick">登录</button>
    <div class="msg">{{message}}</div>
  </div>
</template>

<script>
  import {getUsers, User} from 'network/profile'

  export default {
    name: 'loginInput',
    data(){
      return{
        userId: '',
        password: '',
        message: '',
        user: {},
        users: []
      }
    },
    props:{
      newUser: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      loginClick(){
        if(this.newUser.length > 0){
          this.users.push(...this.newUser)
          let array = Array.from(new Set(this.users));
          this.users = array
        }
        let temp = this.users.filter(value => {
          return value.userId === this.userId
        })
        if(temp.length === 0){
          this.message = '账号不存在'
        }
        else if(temp[0].password !== this.password){
          this.message = '密码错误'
        }
        else{
          this.user = new User(temp[0])
          this.$emit('getUser', this.user)
          this.message = ''
        }
      },
    },
    mounted(){
      getUsers(this.userId).then(res => {
        this.users = res.data.data.users
      })
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
  input::-moz-placeholder{
    font-size: 12px;
  }
  button{
    width: 50%;
    height: 30px;
    background-color: #ff91a5;
    color: #fff;
    border: none;
    margin-left: 25%;
    margin-top: 5%;
  }
  .inputBar{
    margin-top: 0%;
  }
  .inuptDiv{
    margin-left: 15%;
    padding: 10px;
  }
  .msg{
    margin-left: 40%;
    margin-top: 2%;
    color: tomato;
  }
</style>