<template>
  <div class="list1">
    <ul>
      <li v-for="item in list" :key="item.id">
          <van-card
           :price="item.price"
           :desc="item.desc"
           :title="item.title"
           :thumb="item.thumb"/>
      </li>
    </ul>

  
  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[]
      }
    },
    created(){
      this.getdata();
    },
    methods:{
      getdata(){
        this.$http.get("http://localhost:3000/list1").then((res)=>{
          console.log(res.data)
          this.list = res.data;
        })
      }
    }
}
</script>

<style>
.list1{
   margin-top: 5px;
}
li{
  margin-bottom: 10px;
}
</style>