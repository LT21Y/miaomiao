<template>
  <div class="login">
  <van-cell-group>
  <van-field
    v-model="username"
    required
    label="用户名"
    placeholder="请输入用户名"
  />
 <van-field required v-model="password" type="password" placeholder="请输入密码" label="密码" />
</van-cell-group>
  <van-button @click="login" size="large" plain type="primary">点击登录</van-button>
  <van-button @click="toreg" size="large" plain type="primary">前往注册</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      this.$http.get("http://localhost:3000/user").then((res)=>{
        console.log(res)
        let list = res.data
        for (let i = 0; i < list.length; i++) {
          if(`${this.username}${this.password}` == `${list[i].username}${list[i].password}`){
              console.log("成功")
              list = ""
              localStorage.setItem("token",this.username)
              this.$router.push("/my")
          }else{
              console.log("失败")
          }
          
        }
        
      })
    },
    toreg(){
      this.$router.push("/register")
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
