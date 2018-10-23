<template>
    <div class="list">
        <ul class="tabnav"  v-for="item in classlist" :key="item.id">
            <li key={{item.id}}>{{item.name}}</li>
        </ul>
        <!-- <Listcontent></Listcontent>  -->
    </div>
    
</template>

<script>
import Vue from 'vue';
import Listcontent from '@/components/classifyFloder/listcontent'
export default {
    data(){
        return {
            classlist:[]
        }
    },
    components:{
        Listcontent:Listcontent
    },
    created(){
        this.$http.post('mobile/category/getItemFirstCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1540285545919&signature=****&siteid=9',{
            demandcartkey: 'bdd023dffc31625232ce5ffac11643f2',
            cartkey: '82fd1e8c134735cccbcbd10376be3e18',
            provinceid: 20,
            province: 20,
            provincename: '广东',
            tradername: 'yw_app',
            trader: 'h5',
            closesignature: 'yes',
            signature_method: 'md5',
            timestamp: '1540285914136',
            signature: '****',
            siteid: 9,
            categorytype: 1,
            clientAppVersion: 111,
            fatherid: -1,
            phoneType: 'iPhone',
            searchtype: 1
        }).then(res=>{
            console.log(res.data)
            this.classlist=res.data
        })
        
    }

}
</script>

<style scoped>
    .list{
        width: 100%;
    }
</style>

