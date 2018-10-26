<template>
    <div class="search_result clearfix">
        <div class="search_result_list_unit" v-for="item in data" v-if="image">
            <img  class="pro_img" :src="item.img" />
            <h2 class="pro_name">
                <img :src="item.attrLabels==4?'static/img/shang.png':'static/img/zi.png'" alt="" class="pro_sell_type_icon" /> 
                {{item.name}}
            </h2> 
            <div class="pro_type"> 
                <img src=""/>
            </div> 
            <div class="pro_promotion_type"></div> 
            <span class="review_num">{{item.userGrade}}条评论&nbsp;&nbsp;<i>好评率{{item.goodsUserGradeRate}}%</i></span> 
            <div class="search_price">
                <span class="price">¥<i>{{item.price}}</i></span> 
                <img alt=""/>
            </div> 
            <span class="search_add_cart_btn"><i class="icon iconfont fa fa-cart-plus "></i></span> 							
        </div>
        <div class="search_result_list_unit2" v-for="item in data" v-if="!image">
            <img alt="" class="pro_img" :src="item.img" >
            <h2 class="pro_name"><img :src="item.attrLabels==4?'static/img/shang.png':'static/img/zi.png'"  class="pro_sell_type_icon"> 
			    {{item.name}}
            </h2>
            <div class="search_price"><span class="price">¥<i>{{item.price}}</i></span> </div>
            <span class="review_num">{{item.userGrade}}条评论&nbsp;&nbsp;</span>
            <span class="search_add_cart_btn"><i class="icon iconfont fa fa-cart-plus"></i></span>
            
        </div>
    </div>
</template>
<script>
export default {
    props:['data','image'],
    data(){
        return{}
    },
    methods:{
        
    }
}
</script>
<style scoped>
.search_result {
    background: #fff;
    margin-top: .26666666666666666rem;
}
.search_result .search_result_list_unit {
    position: relative;
    padding-left: 2.986666666666667rem;
    min-height: 3.7333333333333334rem;
    border-bottom: 1px solid #eee;
}
.search_result .search_result_list_unit .pro_img {
    width: 2.1333333333333333rem;
    height: 2.1333333333333333rem;
    background: url(/static/img/bg.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: .32rem;
    top: .7466666666666667rem;
}
.search_result .search_result_list_unit .pro_name {
    font-size: .37333333333333335rem;
    padding-top: .26666666666666666rem;
    line-height: .5333333333333333rem;
    max-height: 1.0666666666666667rem;
    overflow: hidden;
}
.search_result .search_result_list_unit .pro_name .pro_sell_type_icon {
    height: .3466666666666667rem;
    float: left;
    margin: .08rem .10666666666666667rem 0 0;
}
.search_result .search_result_list_unit .pro_type {
    overflow: hidden;
    margin-top: .10666666666666667rem;
}
.search_result .search_result_list_unit .pro_type img {
    height: .32rem;
    margin-right: .10666666666666667rem;
}
.search_result .search_result_list_unit .pro_promotion_type {
    overflow: hidden;
    margin-top: .10666666666666667rem;
}
.search_result .search_result_list_unit .review_num {
    color: #999;
    font-size: .26666666666666666rem;
    display: block;
    position: absolute;
    left: 2.986666666666667rem;
    bottom: .32rem;
}
.search_result .search_result_list_unit .review_num~.search_price {
    position: absolute;
    left: 2.986666666666667rem;
    bottom: .8rem;
}
.search_result .search_result_list_unit .search_price .price {
    font-size: .32rem;
    color: #f66;
}
.search_result .search_result_list_unit .search_price span {
    float: left;
    margin-right: .10666666666666667rem;
}
.search_result .search_result_list_unit .search_price .price i {
    font-size: .48rem;
}
.search_result .search_result_list_unit .search_add_cart_btn {
    padding: .26666666666666666rem;
    position: absolute;
    right: .26666666666666666rem;
    bottom: .05333333333333334rem;
    cursor: pointer;
    font-size: 0.64rem;
    color: #f66;
}
.search_result .search_result_list_unit .pro_promotion_type img {
    float: left;
    height: .32rem;
    margin-right: .10666666666666667rem;
    margin-bottom: .10666666666666667rem;
}
.search_result .search_result_list_unit .ask_answer_num {
    font-size: .26666666666666666rem;
    color: #1a6abd;
    display: block;
    position: absolute;
    left: 2.986666666666667rem;
    bottom: .32rem;
}
.search_result  .search_result_list_unit2 {
    position: relative;
    width: 50%;
    float: left;
    border-bottom: 1px solid #eee;
    text-align: center;
    min-height: 7.2rem;
    border-right: 1px solid #e7e7e7;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.search_result  .search_result_list_unit2 .pro_img {
    width: 3.7333333333333334rem;
    height: 3.7333333333333334rem;
    background: url(/static/img/bg.png) no-repeat;
    background-size: 100% 100%;
    margin-top: .26666666666666666rem;
}
.search_result  .search_result_list_unit2 .pro_name {
    text-align: left;
    font-size: .37333333333333335rem;
    padding: .26666666666666666rem .26666666666666666rem 0;
    line-height: .5333333333333333rem;
    max-height: 1.0666666666666667rem;
    overflow: hidden;
}
.search_result  .search_result_list_unit2 .pro_name .pro_sell_type_icon {
    height: .3466666666666667rem;
    float: left;
    margin: .08rem .10666666666666667rem 0 0;
}
.search_result  .search_result_list_unit2 .review_num {
    position: absolute;
    left: .26666666666666666rem;
    bottom: .26666666666666666rem;
    text-align: left;
    clear: both;
    color: #999;
    font-size: .26666666666666666rem;
    display: block;
}
.search_result  .search_result_list_unit2 .search_price .price {
    font-size: .32rem;
    color: #f66;
}
.search_result  .search_result_list_unit2 .search_price {
    position: absolute;
    left: .26666666666666666rem;
    bottom: .64rem;
    
}
.search_result  .search_result_list_unit2 .search_add_cart_btn {
    position: absolute;
    right: .26666666666666666rem;
    bottom: .26666666666666666rem;
    padding: .13333333333333333rem;
    font-size: 0.64rem;
    color: #f66;
}

</style>
