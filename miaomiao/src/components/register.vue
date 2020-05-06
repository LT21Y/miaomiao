<template>
  <div class="reg">
  <van-cell-group>
  <van-field
    v-model="username"
    required
    label="用户名"
    placeholder="请输入用户名"
  />
 <van-field required v-model="password" type="password" placeholder="请输入密码" label="密码" />
</van-cell-group>
  <van-button @click="reg" size="large" plain type="primary">立即注册</van-button>
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
   reg(){
      this.$http.get("http://localhost:3000/user").then((res)=>{
        console.log(res)
        let list = res.data
        for (let i = 0; i < list.length; i++) {
          if(list[i].username == this.username){
              console.log("用户名已存在")
              list = ""
          }else{
              this.$http.post("http://localhost:3000/user",{
                username:this.username,
                password:this.password
              }).then((r)=>{
                console.log("注册成功"+r.data)
                this.$router.push("/Login")
              })
          }
          
        }
        
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
