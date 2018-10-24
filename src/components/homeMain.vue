<template>
    <div class="content">
        <div class="grab_together">
            <div class="grab_top">
                <div class="grab_top_left">
                    活动持续进行中
                </div>
                <div class="grab_top_right">
                    更多&gt;
                </div>
            </div>
            <div class="grab_list">
                <ul>
                    <li v-for="(item,idx) in data.mobileFlashSaleNewItems" :key="item.id">
                        <div class="img_box">
                            <img :src="item.mainimg3" alt="">
                            <p class="title">{{item.flashSaleProductName}}</p>
                            <p class="price">￥{{item.promotionPrice}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['content'],
    data:function(){
        return {
            data:{},
        }
    },
    watch:{
        　content: {
        　　　handler(newValue, oldValue) {
        　　　　 console.log(1,newValue)
                this.data=newValue
        　　　},
        　　　deep: true
        　}
    },
    created(){

    },
    methods:{

    }
}
</script>
<style scoped>
      .grab_together .grab_top {
        position: relative;
        height: 1.2rem;
        padding: 0 0.5rem 0 3.06666667rem;
        background: url(//m.111.com.cn/yyw/wap/home/static/img/icon_hot.f70389b.png) no-repeat .4rem #fff;
        background-size: 2.4rem auto;
        border-bottom: 1px solid #eee;
    }
    .grab_top div{font-size: 0.4267rem;line-height: 1.2rem;float:left;color:#262D57;}
    .grab_top .grab_top_left{margin-left:0.8333rem;}
    .grab_top .grab_top_right{float:right;}
    .grab_list{height:4.4867rem;overflow-y:hidden;}
    .grab_list ul{overflow-y: hidden;overflow-x:scroll ;width:100%;white-space: nowrap;height:4.5867rem;}
    .grab_list ul li{display: inline-block;}
    .grab_list .img_box{text-align: center;margin: .26666667rem .13333333rem;}
    .grab_list .img_box img{display: inline-block;}
    .grab_list .title{height: .96rem;line-height: .48rem;font-size: .34666667rem;color: #333;padding: 0 .13333333rem;width: 2.66666667rem;
    white-space: normal;overflow: hidden;text-overflow: ellipsis;}
    .grab_list .price{color: #f35448;font-size: .4rem;padding: .13333333rem .13333333rem 0;}
</style>


