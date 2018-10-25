<template>
    <div class="good_list">
        <div class="good_banana">
            <img :src="data.picUrl" alt="">
        </div>
        <ul class="list_ul">
            <li v-for="(item,idx) in data.goodProducts" :key="item.id" @click="goDetail(item.itemid)">
                <div class="img_box">
                    <img :src="item.productImg" alt="">
                    <p class="title">{{item.productName}}</p>
                    <p class="price">￥{{item.sellPrice}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:['list'],
        data:function(){
            return {
                data:{},
            }
        },
        watch:{
            　list: {
            　　　handler(newValue, oldValue){
                    this.data=newValue
            　　　},
            　　　deep: true
            　}
        },
        created(){

        },
        methods:{
            goDetail(itemCode){
                this.$router.push({
                    path:'/detail',
                    query:{
                        itemCode,
                        timestamp:Date.now(),
                    }
                });
            }
        }
    }
</script>
<style scoped>
    /* .good_list{height:;} */
    .good_banana{min-height: 2.61333333rem;
    overflow: hidden;}
    .good_banana img{border-radius: 5px;}
    /* .grab_list{height:4.4867rem;overflow-y:hidden;} */
    .list_ul{width: 100%;overflow-y: hidden;overflow-x: auto;white-space: nowrap;height:4.533333rem;}
    .list_ul li{    width: 33.333333%;height: 4.53333333rem;display: inline-block;padding: 0 .13333333rem;overflow: hidden;
    -webkit-box-sizing: border-box;box-sizing: border-box;}
    .list_ul .img_box{text-align: center;margin: .26666667rem .13333333rem;}
    .list_ul .img_box img{height: 2.13333333rem;text-align: center;width: auto;max-width: 100%;display: inline-block;}
    .list_ul .title{ font-size: .34666667rem;color: #333;padding: 0;height: 1.06666667rem;line-height: .53333333rem;
    overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2;white-space: normal;}
    .list_ul .price{color: #f35448;font-size: .4rem;padding: .13333333rem .13333333rem 0;}
</style>


