<template>
    <div class="show">
        <div class="banana">
            <mt-swipe :auto="0">
                <mt-swipe-item v-for="(item,idx) in detailBanana" :key="idx">
                    <img :src="item.image1" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <p class="pro_sider_des">{{product_info.gift}}{{product_info.giftLinkTxt}}</p>
        <div class="pro_part">
            <div class="pro_title">
                <h1>
                    <span class="icon_ziying"></span>
				        {{product_info.productName}}
                </h1>
            </div>
            <p class="pro_price">
                <span>¥{{product_info.pcSalePrice}}</span> 
            </p> 
            <p class="pro_note">{{detailShow.supplier}}</p> 
            <p class="pro_note">
                <i>批准文号：</i>
                {{product_info.approvalnum}}
			    <span>(国家食药局查询)</span>
            </p> 
            <p class="pro_label">
                <span><i class="fa fa-check-square-o"></i>&nbsp;&nbsp;{{service_list.length>1?service_list[0].service_content:''}}</span>
                <span><i class="fa fa-check-square-o"></i>&nbsp;&nbsp;{{service_list.length>1?service_list[1].service_content:''}}</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                detailShow:{},
                detailBanana:[],
                product_info:{},
                service_list:[],
            }
        },
        created(){
            this.getShow();
        },
        watch:{
            '$route.query': function (newVal, oldVal) {
                this.getShow();
            }
        },
        methods:{
            getShow(){
                let itemCode=this.$route.query.itemCode
                let timestamp=this.$route.query.timestamp
                console.log(itemCode,timestamp)
                this.$http.post('product/v1/product/getProductBaseInfo?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp='+timestamp+'&signature=****&siteid=9',{
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
                    itemId:itemCode,
                    width: 320,
                    tracker_u: 'BDpz0017'
                }).then(res=>{
                    // console.log('234',res.data);
                    this.detailShow=res.data
                    this.detailBanana=res.data.picInfo
                    this.product_info=res.data.product_info
                    this.service_list=res.data.service_list
                })
            }
        }
    }
</script>
<style scoped>
    .show .banana{height:6.4rem;}
    .show .banana img{height:6.4rem;width:100%;}
    .show .pro_sider_des {
        padding: 0.26666667rem 0.4rem;
        font-size: 0.34333333rem;
        color: #FF6666;
        background: #fff;
    }
    .show .pro_part {
        position: relative;
        padding-left: 0.4rem;
        background: #fff;
        font-size: 0.37333333rem;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    }
    .show .pro_part .pro_title {
        padding: 0.26666667rem 0.26666667rem 0.26666667rem 0;
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-bottom: 1px solid #DFDFDF;
        word-break: break-all;
        font-size: 0.42666667rem;
        color: #010101;
        line-height: 0.64rem;
        min-height: 0.8rem;
    }
    .show .pro_part .pro_title h1 {
        flex: 1;
        font-size: 0.42666667rem;
    }
    .show .pro_part .pro_price {
        font-size: 0.42666667rem;
        color: #FF6666;
        height: 0.69333333rem;
        line-height: 0.69333333rem;
        padding: 0.26666667rem 0.4rem 0.26666667rem 0;
    }   
    .show .pro_part .pro_note {
        padding: 0 0.4rem 0.26666667rem 0;
        color: #808080;
        font-size: 0.30333333rem;
        line-height: 0.53333333rem;
    }
    .show .pro_part .pro_label {
        padding: 0 0.4rem 0.26666667rem 0;
        border-bottom: 1px solid #e1e1e1;
    }
    .show .pro_part .pro_label span {
        color: #676767;
        font-size: 0.34666667rem;
        background-size: 0.42666667rem auto;
        margin-right: 0.53333333rem;
    }
    .show .pro_cart {
        position: relative;
        padding-left: 0.4rem;
        background: #fff;
        font-size: 0.37333333rem;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    }
    .show .pro_cart .pro_total {
        padding: 0.26666667rem 3.14666667rem 0.26666667rem 0;
        margin-bottom: 0.26666667rem;
        background: #fff;
    }
    .show .pro_total .pro_total_price {
        font-size: 0.42666667rem;
        color: #666;
    }
    .show .pro_total .pro_total_price span {
        color: #FF6666;
        font-size: 0.48rem;
    }
    .show .pro_total .pro_original_price {
        text-decoration: line-through;
        color: #999;
    }
    .show .pro_total .btn_default {
        position: absolute;
        top: 50%;
        right: 0.26666667rem;
        width: 2.88rem;
        height: 0.85333333rem;
        line-height: 0.85333333rem;
        margin-top: -0.42666667rem;
        font-size: 0.37333333rem;
        border-radius: 14px;
        text-align: center;
        color: #FF6666;
        border: 1px solid #FF6666;
    }
</style>