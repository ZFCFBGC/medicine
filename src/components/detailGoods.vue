<template>
    <div class="detailGoods">
        <div class="pro_sider_tab">热门推荐</div>
        <div class="hot">
            <mt-swipe :auto="0">
                <mt-swipe-item v-for="(item,idx) in itemList" :key="idx">
                    <ul>
                        <li v-for="goods in item" @click="goDetail(goods.pid)">
                            <div>
                                <div class="img_box">
                                    <img  :src="goods.imgUrl" lazy="loaded">
                                </div> 
                                <p class="pro_name">{{goods.name}}</p>
                                <span class="price">¥{{goods.price}}</span>
                            </div>
                        </li>
                    </ul>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                // dataDetail:[0,1,2,3,4,5],
                itemList:[]
            }
        },
        created(){
            this.getGoods();
        },
        methods:{
            getGoods(){
                let itemCode=this.$route.query.itemCode
                let timestamp=this.$route.query.timestamp
                console.log(itemCode,timestamp)
                this.$http.post('product/v1/recommend/getrecommend?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp='+timestamp+'&signature=****&siteid=9',{
                    demandcartkey: 'bdd023dffc31625232ce5ffac11643f2',
                    cartkey: 'bdd023dffc31625232ce5ffac11643f2',
                    provinceid: 20,
                    province: 20,
                    provincename: '广东',
                    tradername: 'yw_app',
                    trader: 'h5',
                    closesignature: 'yes',
                    signature_method: 'md5',
                    timestamp: timestamp,
                    signature: '****',
                    siteid: 9,
                    catid: 965175,
                    itemId: itemCode,
                    deviceid: '99E36F09-F932-4E43-A4FC-0EC76A81261E',
                    requestType: 1
                }).then(res=>{
                    // this.itemList=res.data.itemList
                    let arr=[];
                    for(let i=0;i<6;i++){
                        arr.push(res.data.itemList.slice((i*6),(i+1)*6))
                    }
                    this.itemList=arr
                })
            },
            goDetail(itemCode){
                this.$router.push({
                    path:'/detail',
                    query:{
                        itemCode,
                        timestamp:Date.now(),
                    }
                });
                this.getGoods();
            }
        }
    }
</script>
<style scoped>
    .detailGoods .pro_sider_tab {
        background: #fff;
        padding: 0.2667rem 0.26666667rem;
        border-bottom: 1px solid #e1e1e1;
        font-size: 0.42666667rem;
        text-align: center;
    }
    .detailGoods .hot{height:12.6933rem;background: #fff;}
    .detailGoods .hot ul{background: #fff;}
    .detailGoods .hot li{display: inline-block;width: 33.333333%;overflow: hidden;}
    .detailGoods .hot li .price{
        color: #F35448;
        font-size: 0.4rem;
        padding-top: 0.13333333rem;
        padding-left: 0.13333333rem;
        display: inline-block;
    }
    .detailGoods .hot li .pro_name{
        font-size: 0.34666667rem;
        color: #333;
        padding: 0.13333333rem 0.13333333rem 0 0.13333333rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height: 1rem;
    }
    .detailGoods .hot li .img_box{
        text-align: center;
        padding: 0.26666667rem;
    }
</style>