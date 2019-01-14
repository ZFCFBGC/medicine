<template>
    <div class="hot-search">
        <h4>热门搜索</h4>
        <ul class="hot-list">
            <li v-for="(item,idx) in hotlist" :key="idx" @click="gosearch(item.keyword)">{{item.keyword}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            hotlist:[]
        }
    },
    created(){
        this.$http.post('search/hotword?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1540453437352&signature=****&siteid=9',{
            demandcartkey: '22ab85751a52a0f0814cfd8a98322ee9',
            cartkey: '22ab85751a52a0f0814cfd8a98322ee9',
            provinceid: '20',
            province: '20',
            provincename: '广东',
            tradername: 'yw_app',
            trader: 'h5',
            closesignature: 'yes',
            signature_method: 'md5',
            timestamp: '1540453437352',
            signature: '****',
            siteid: '9'
        }).then(res=>{
            console.log(res.data)
            this.hotlist = res.data
        })
    },
    methods:{
        gosearch(keyword){
            this.$router.push({path:'/searchlist',params:{keyword:keyword}})
        }
    }
}
</script>


<style scoped>
.hot-search{
    overflow: hidden;
    padding: 0.3rem;
    font-size: 0.36rem;

} 
.hot-search h4{
    height: 0.8rem;
    line-height: 0.8rem;
}
.hot-search .hot-list{
    margin-bottom: 0.5rem;
}

.hot-search .hot-list li{
    float: left;
    padding: 0.2rem 0.4rem;
    background-color: #fff;
    border-radius: 0.2rem;
    margin: 0.2rem 0.2rem;
}
</style>
