<template>
  <div id="app"> 
    <div class="top">
      <span class="title">喵喵电影</span>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
    <div class="tabbar">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#ccc">
      <van-tabbar-item icon="video-o" to="/movie">电影</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      active:1
    }
  }
}
</script>

<style>
.top {
  background-color: #07c160;
  width: 100%;
  height: 50px;
  display: flex; 
  align-items:center;
  justify-content: center;
}
.title {
  color: white;

}
</style>
