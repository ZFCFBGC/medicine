<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  // import axios from 'axios';
  import Mint from 'mint-ui';
  Vue.use(Mint);
  import httpclient from './httpclient'
  import 'mint-ui/lib/style.css';
  Vue.prototype.$http=httpclient;
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
  *{margin:0;padding:0;}
  ul{list-style:none;}
</style>
