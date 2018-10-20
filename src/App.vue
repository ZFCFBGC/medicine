<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  Vue.prototype.$http=axios;
  export default {
    name: 'App'
  }
</script>

<style>

</style>
