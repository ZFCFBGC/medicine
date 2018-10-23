import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/classify'
import Car from '@/components/car'
import Mine from '@/components/mine'
import Search from '@/components/search'
import Index from '@/components/index'
import Header from '@/components/classify/header'


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
          children:[
            {
              path:'head',
              name:'head',
              component:Header,
              props:true
            }
          ]
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
    }
  ]
})
