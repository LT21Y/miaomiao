<template>
  <div class="home">
  <div class="tab">
  <div class="tab-left">
  <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" @change="nowtext(option1[value1].text)" />
  </van-dropdown-menu>
  </div>
  <div class="tab-center">
   <ul>
        <li v-for="(item,index) in list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
         <router-link :to="`/list${index+1}`">{{item}}</router-link>
        </li>
      </ul>
  </div>
  <div class="tab-right">
  <van-icon  name="search" />
  </div>
   </div>

   <div class="view">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       active: 2,
       value1:0,
        option1: [
        { text: '广州', value: 0 },
        { text: '上海', value: 1 },
        { text: '深圳', value: 2 },
      ],
      num:0,
      list:["正在热映","即将上映"],
      
    }
  
  },
  created(){
    
  }
  ,
  methods:{
    nowtext(val){
      console.log(val)
    },
    getNum(index) {
          this.num = index;
          console.log(this.num);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  /* justify-items: center; */
  align-items: center;
}
.tab-left{
  width: 20%;
}
.active{
  color: #07c160;
  border-bottom: 2px solid #07c160;
}
.tab-center{
  width: 70%;
  height: 46px;
  line-height: 46px;
  font-size: 15px;
}
.tab-center ul li{
  float: left;
  margin-left: 40px;
}
.tab-right{
  display: flex;
  align-content: center;
  margin-right: 20px;
}
</style>
