<template>
    <header>
        <i class="fa fa-medkit"></i>
        <span class="place">上海</span>
        <i class="fa fa-user-md"></i>
        <div class="head-input" @click="gosearch">
            <div class="div-input">
                <i class="fa fa-search"></i>
                <span>输入商品名称</span>
            </div>     
        </div>

    </header>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return {

        }
    },
    methods:{
        gosearch(){
            this.$router.push({path:'/search'})
        }
    }
}
</script>



<style scoped>
header{
   width: 100%;    
   height: 1.1rem;  
   background-color: #fff;
    position: fixed;
    z-index: 100;
}
header i{
    display: block;
}
header .fa-medkit{
    float: left;
    font-size: 0.5rem;
    /* font-size: 20px; */
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    height: 0.7rem;
    line-height: 0.7rem;

}
header .place{
    width: 0.6rem;
    height: 0.7rem;
    line-height: 0.7rem;
    float: left;
    display: block;
    font-size: 0.3rem;
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    /* width: ; */
    
}


header .fa-user-md{
    float:right;
    font-size: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
    height: 0.7rem;
    line-height: 0.7rem;
}

header .head-input{
    float: right;
    overflow: hidden;
    margin-right: 0.5rem;
}

header .head-input .div-input{
    height: .6rem;
    line-height: .6rem;
    margin-top: .26rem;
    font-size: .32rem;
    padding: 0 .26rem;
    text-align: left;
    border-radius: 0.3rem;
    background-color: #eee;
    color: #b8b8be;
    cursor: text;
    width: 5.3rem;
    position: relative;
}

header .head-input .div-input .fa-search{
    position: absolute;
    left: 0.3rem;
    top:0.15rem;
}

header .head-input .div-input span{
    margin-left: 0.4rem;
}
</style>

