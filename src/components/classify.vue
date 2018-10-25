<template>
    <div class="classify">
        <Head></Head>
        <img src="static/img/askfordoctor.png" class="famous-doctor"/>
        <div style="height:2.3rem;width:100%"></div>
        <list @getmsg="getmsg"></list>        
        <listcontent :content="currentContent"></listcontent>
    </div>
</template>

<script>
import Head from '@/components/classifyFloder/header'
import List from '@/components/classifyFloder/list'
import Listcontent from '@/components/classifyFloder/listcontent'
export default {
    data(){
        return {
            currentContent:''
        }
    },
    components:{
        Head:Head,
        List:List,
        Listcontent:Listcontent
    },
    methods:{
        go(){
            
        },
        getmsg(val){
            this.currentContent = val
        }
    }
}
</script>

<style scope>
.classify{
    overflow: hidden;
    background-color: #fff;
}
.famous-doctor{
    width: 100%;
    position: fixed;
    top:1.08rem;
    z-index: 100;
}

</style>
