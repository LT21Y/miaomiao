<template>
  <div class="my">
    当前用户：{{username}}
    <van-button @click="close" plain type="info">退出</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:''
    }
  },
  created(){
    this.username = localStorage.getItem("token")
  },
  methods:{
    close(){
      localStorage.clear("token")
      this.$router.push("/Login")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
