<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  // import axios from 'axios';
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css';
  import './css/base.css';
  import './css/common.css';
  import rem from './rem.js';
  rem();
  Vue.use(Mint);
  import httpclient from './httpclient'
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
