<template>
    <div class="medicine">
        <router-view/>
        <mt-tabbar>
            <mt-tabbar fixed v-model="currentTab">
            <mt-tab-item v-for="(tab,idx) in tabs" :id="tab.id" :key="idx" 
            @click.native="goto(tab.id)">
                <img  :src="tab.icon" slot="icon">
                {{tab.title}}
            </mt-tab-item>
            </mt-tabbar>
        </mt-tabbar>
    </div>
</template>
<script>
    export default {
    data:function(){
      return {
        currentTab:this.$route.name,
          tabs:[{
            title:'首页',
              id:'home',
              icon:'home' 
            },{
              title:'分类',
              id:'classify',
              icon:'grabber'
            },{
              title:'购物车',
              id:'car',
              icon:'squirrel'
            },{
              title:'我的',
              id:'mine',
              icon:'person'
            }]
        } 
    },
    created(){
      this.tabs.forEach(item=>{
        item.icon = 'static/assets/octicons/build/svg/'+item.icon+'.svg';
        })
      },
    methods:{
      goto(id){
        console.log(id)
        this.$router.push({path:id});
        this.currentTab=id
      }
    }
  }
</script>

