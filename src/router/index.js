import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/classify'
import Car from '@/components/car'
import Mine from '@/components/mine'
import Search from '@/components/search'
import Index from '@/components/index'
import Login from '@/components/login'
import SearchList from '@/components/category/searchList'
import Detail from '@/components/detail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search,
      props:true
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      props:true,
      children:[{
          path: '/home',
          name: 'Home',
          component:Home,
          props:true
        },{
          path: '/classify',
          name: 'Classify',
          component:Classify,
          props:true,
          // children:[
          //   {
          //     path:'listcontent',
          //     name:'listcontent',
          //     component:Listcontent,
          //     props:true
          //   }
          // ]
        },{
          path: '/car',
          name: 'Car',
          component:Car,
          props:true
        },{
          path: '/mine',
          name: 'Mine',
          component:Mine,
          props:true
      }]
    },{
      path: '/login',
      name: 'Login',
      component: Login,
      props:true
    },{
      path:'/searchList',
      name:'SearchList',
      component:SearchList,
      props:true
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail,
      props:true
    },{
      path:'/',
      redirect:'/home'
    }
  ]
})
