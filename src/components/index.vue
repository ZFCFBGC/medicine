<template>
    <div class="medicine">
        <router-view/>
        <div class="tab_link">
            <ul>
                <li v-for="(item,idx) in tabs" :key="idx" class="home_link" @click="goto(item.id,item.name)" :class="currentTab==item.name? 'active':''">
                    <p><i :class="item.icon"></i></p>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
    data:function(){
      return {
        currentTab:this.$route.name,
          tabs:[{
            title:'首页',
              id:'/home',
              name:'Home',
              icon:'fa fa-home' 
            },{
              title:'分类',
              id:'/classify',
              name:'Classify',
              icon:'fa fa-navicon'
            },{
              title:'购物车',
              id:'/car',
              name:'Car',
              icon:'fa fa-cart-plus'
            },{
              title:'我的',
              id:'/mine',
              name:'Mine',
              icon:'fa fa-user-o'
            }]
        } 
    },
    created(){
      console.log(this.currentTab,4,this.$route.name,);
    },
    methods:{
      goto(id,name){
        console.log(id)
        this.$router.push({path:id});
        this.currentTab=name
      }
    }
  }
</script>
<style scoped>
    .tab_link{position:fixed;bottom:0;left:0;right:0;width:100%;background: #f0f0f0;padding:0.1333rem 0;}
    .tab_link ul{display: flex;}
    .tab_link ul li{flex:1;}
    .tab_link ul li p{text-align: center;font-size: 0.4267rem;color:#333;}
    .tab_link .active p{color:#f66;}
</style>


