<template>
    <div class="listcontent">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in categoryBanners" :key="item.id">
                <img :src="item.bannerUrl">
            </mt-swipe-item>
        </mt-swipe>
        <listarea :msg="categoryinfo"></listarea>      
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
import listarea from '@/components/classifyFloder/listarea'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    data(){
        return {
            categoryBanners:[],
            categoryinfo:[]
        }
    },
    props:['content'],
    watch:{
        'content':function(newVal){
            let fatherid = this.content
            // console.log(fatherid)
            this.$http.post('mobile/category/getItemSecondCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1540295611687&signature=****&siteid=9',{
                demandcartkey: 'bdd023dffc31625232ce5ffac11643f2',
                cartkey: '82fd1e8c134735cccbcbd10376be3e18',
                provinceid: 20,
                province: 20,
                provincename: '广东',
                tradername: 'yw_app',
                trader: 'h5',
                closesignature: 'yes',
                signature_method: 'md5',
                timestamp: 1540295611687,
                signature: '****',
                siteid: 9,
                categorytype: 2,
                fatherid: fatherid,
                searchtype: 2
            }).then(res=>{
                console.log(res.data)
                this.categoryBanners = res.data.categoryBanners;
                this.categoryinfo = res.data.categoryinfo;
            })
        }   
    },
    components:{
        listarea:listarea
    },
}
</script>

<style scoped>
.listcontent{
    padding: .26666666666666666rem .26666666666666666rem 0 0.26rem;
    /* overflow: hidden; */
    background-color: #fff;
    /* float: right; */
    width: 69%;   
    height: 100%;
    overflow-y: auto;
}

.listcontent .mint-swipe{
    height: 2rem;
    z-index: 1;

}
.mint-swipe-item img{
    width: 100%;   
    height: 2rem
}
</style>
