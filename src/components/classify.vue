<template>
    <div class="classify">
        <Head></Head>
        <img src="static/img/askfordoctor.png" class="famous-doctor"/>
        <div style="height:2.5rem"></div>
        <List></List>        
    </div>
</template>

<script>
import Head from '@/components/classifyFloder/header'
import List from '@/components/classifyFloder/list'
export default {
    data(){
        return {

        }
    },
    components:{
        Head:Head,
        List:List
    },
    methods:{
        go(){
            
        }
    }
}
</script>

<style scope>
.classify{
    overflow: hidden;
}
.famous-doctor{
    width: 100%;
    position: fixed;
    top:1.08rem;
}

</style>
