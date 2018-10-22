<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css';
  Vue.use(Mint);
  Vue.prototype.$http=axios;
  export default {
    name: 'App',
    data:function(){
      return {
      } 
    },
    created(){
      
    },
    methods:{
      
    }
  }
</script>

<style>

</style>
