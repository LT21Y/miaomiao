import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(localStorage.getItem("token")){
        next();
      }else{
        next("/Login")
  }}else{
        next();
  }
})

