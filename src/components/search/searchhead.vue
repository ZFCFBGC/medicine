<template>
    <header class="search-header">
        <i class="fa fa-angle-left search" @click="back"></i>
        <div class="search-box">
            <i class="fa fa-search"></i>
            <input type="text" :placeholder="placeholder" v-model="content"/>
        </div>
        <span @click="gosearch">搜索</span>
    </header>
</template>

<script>
export default {
    data(){
        return {
            placeholder:'请输入关键字',
            content:''
        }
    },
    created(){
        // console.log(BHistory)
    },
    methods:{
        back(){         
            this.$router.back(-1);
        },
        gosearch(){
            this.$router.push({path:'/searchlist',params:{keyword:this.content}})
        }
    }
}
</script>






<style scoped>
.search-header{
    height: 1rem;
    background-color: #fff;
}
.search-header .search{
    width: 5%;
    height: 0.8rem;
    line-height: 0.8rem;
    display: block;
    color:#666;
    float: left;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
}   
.search-header .search-box{
    display: block;
    width: 55%;
    float: left;
    position: relative;
    padding: 0 1rem;
    margin-top: 0.1rem;
    margin-left: 0.5rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background-color: #f0f0f0;

}
.search-header .search-box i{
    font-size: 0.5rem;
    display: block;
    position: absolute;
    left: 0.3rem;
    top: 0.1rem;
    color:#666;

}
.search-header .search-box input{
    display: block;
    width: 100%;
    height: 0.8rem;
    background-color: #f0f0f0;
    font-size: 0.3rem;
    
}

.search-header span{
    width: 12%;
    height: 1rem;
    line-height: 1rem;
    display:block;
    font-size: 0.3rem;
    float: right;
    color:#666;
    text-align: center;
}
</style>
