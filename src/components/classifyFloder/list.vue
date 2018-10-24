<template>
    <div class="list">
        <ul class="tabnav">
            <!-- <router-link to="/classify/listcontent/" tag="li" v-for="item in classlist" :key="item.id"><span>{{item.name}}</span></router-link> -->
            <li v-for="item in classlist" :key="item.id" @click="showcontent(item.content)" :class="[item.content===fullcontent?'active':'']"><span>{{item.name}}</span></li>
        </ul>
        <!-- <Listcontent :content="currentContent"></Listcontent> -->
    </div>
    
</template>

<script>
import Vue from 'vue';
import Listcontent from '@/components/classifyFloder/listcontent'

export default {
    data(){
        return {
            classlist:[],
            currentContent:'',
            fullcontent:''
        }
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
            this.showcontent()
        })
        

    },
    // components:{
    //     Listcontent:Listcontent,
        
    // },
    methods:{
        showcontent(content){
            if(this.currentContent){
                this.currentContent = content.slice(10);
            }else{
                this.currentContent = '1001447'
            }
            this.fullcontent = content || 'catalogId=1001447' ;
            this.$emit('getmsg',this.currentContent)
            // this.$router.push({path:'/classify/listcontent?'+content,params:{content:content}})
        }
    }
}
</script>

<style scoped>
.list{
    width: 25%;
    overflow: hidden;
    float: left;
    background-color: #f0f0f0;
}
.tabnav{
    height: 100%;
    overflow: auto;
    padding-bottom: 1.1733333333333333rem;
    width: 100%;
    float: left;
    -webkit-overflow-scrolling: touch;
    border-right: 1px solid rgba(0,0,0,.1);
    font-size: 0.4rem;
    white-space:nowrap;
    text-overflow:hidden;
}
.tabnav li{
    height: 1.3066666666666666rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.tabnav .active{
    background-color: #fff;
}
.tabnav li span{
    height: 1.3066666666666666rem;
    line-height: 1.3066666666666666rem;
    margin: 0 .26666666666666666rem;
    color: #333;
    display: block;
    overflow: hidden;
}
</style>

