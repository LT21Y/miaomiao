import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home  = ()=>import("@/components/home")
const Login  = ()=>import("@/components/login")
const my  = ()=>import("@/components/my")
const movie  = ()=>import("@/components/movie")
const list1  = ()=>import("@/components/list1")
const list2  = ()=>import("@/components/list2")

export const routes = [
  {
    path: "/", 
    component: Home,
    redirect:'/list1',
    meta: {
      needLogin: true //需要加校检判断的路由
    },
    children:[
      {
      path: "/list1",
      component:list1, //正在上映
      },
      {
      path: "/list2",  //即将上映
      component:list2,
      },
    ]
  },
  {
    path: "/my", 
    component:my
  },
  {
    path: "/movie", 
    component:movie
  },
  {
    path: "/Login", 
    component:Login
  },

 
]

export default new Router({
  mode:"history",
  routes: routes
})

