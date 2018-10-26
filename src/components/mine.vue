<template>
    <div class="user_page" >
        <div class="user_top">
            <span class="city_area"><i class="icon iconfont icon_address fa fa-map-marker"></i>广东</span>
            <div class="photo"></div>
            <div class="login_btn">
                <a v-on:click="gologin">登录</a> /
                <a @click="gologin">注册</a>
            </div>
            <div class="health_gift_mark">领取健康礼包</div>
            <div class="vip_part">
                <div class="vip_part_con">
                    <span class="vip_mark">1+会员</span> <span class="vip_info">每月专属优惠</span>
                </div>
            </div>
        </div>
        <div class="user_balance">
            <ul class="balance_ul">
                <li>可用余额&nbsp;&nbsp;¥
				    <span class="num_span">0.00</span>
                </li> 
                <li data-ywpoint="userpage_mycoupon_0_0_0_0">
                    优惠券&nbsp;&nbsp;
				    <span class="num_span">0</span>张
                </li>
            </ul>
        </div>
        <div class="order_part">
            <ul class="order_type">
                <li >
                    <i class="icon iconfont icon_zhifu fa fa-usd"></i> 
                    <span class="order_type_name">待支付</span>
                </li> 
                <li>
                    <i class="icon iconfont icon_daishouhuo fa fa-archive"></i> 
                    <span class="order_type_name">待收货</span>
                </li> 
                <li>
                    <i class="icon iconfont icon_flower fa fa-pencil-square-o"></i> 
                    <span class="order_type_name">待评价</span>
                </li> 
                <li>
                    <i class="icon iconfont icon_tuihuo fa fa-repeat"></i> 
                    <span class="order_type_name">退换货</span>
                </li>
            </ul> 
            <div data-ywpoint="userpage_myorder_0_allorder_0_0" class="all_order">全部订单
			    <i class="icon iconfont icon_rightarrow fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div>
        <div class="user_part">
            <ul class="user_part_ul">
                <li >
                    <i class="fa fa-heartbeat icon iconfont"></i>
                    <span class="part_name">健康档案</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_shoucang fa fa-star-o" aria-hidden="true"></i> 
                    <span class="part_name">我的收藏</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_zuji fa fa-eye"></i> 
                    <span class="part_name">看过买过</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_changyongqingdan fa fa-list-alt"></i> 
                    <span class="part_name">常用清单</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_wenzhenjilu fa fa-clock-o"></i> 
                    <span class="part_name">问诊记录</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_dizhiguanli fa fa-location-arrow"></i> 
                    <span class="part_name">地址管理</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_account fa fa-user"></i> 
                    <span class="part_name">账号管理</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_ermai fa fa-assistive-listening-systems"></i> 
                    <span class="part_name">售后服务</span>
                </li> 
                <li >
                    <i class="icon iconfont icon_shezhi fa fa-cog"></i> 
                    <span class="part_name">设置</span>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{}
        },
        methods:{
            gologin(){console.log(1)
                this.$router.push({name:'Login'})
            }
        },
        created(){
            console.log(2)
        }
    }
</script>
<style scoped>
.user_page {
    padding-bottom: 1.6rem;
    font-size:0.24rem;
}
.user_page .user_top {
    height: 2.53333333rem;
    padding-top: 1.06666667rem;
    padding-left: 3.06666667rem;
    background: #ff6d55;
}
.user_page .user_top .city_area {
    position: absolute;
    left: .4rem;
    top: .21333333rem;
    color: #fff;
    font-size: .4rem;
}
.user_page .user_top .city_area .iconfont {
    color: #fff;
    font-size: .48rem;
    float: left;
    margin-top: .02666667rem;
    margin-right: .05333333rem;
}
.user_page .user_top .photo {
    position: absolute;
    left: .53333333rem;
    top: 1.06666667rem;
    width: 2.13333333rem;
    height: 2.13333333rem;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-image: url("../../static/img/zuser.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 2.13333333rem 2.13333333rem;
}
.user_page .user_top .login_btn {
    font-size: .48rem;
    color: #fff;
}
.user_page .user_top .login_btn a {
    color: #fff;
    padding: 0.1rem;
}
.user_page .user_top .health_gift_mark {
    background: url("../../static/img/zgift.png") no-repeat 0 0;
    background-size: 3.04rem .69333333rem;
    margin-left: -.13333333rem;
    width: 2.77333333rem;
    height: .64rem;
    padding-top: .05333333rem;
    line-height: .64rem;
    color: #fff;
    padding-left: .26666667rem;
    margin-top: .13333333rem;
}
.user_page .user_top .vip_part {
    height: .96rem;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    right: 0;
    top: .48rem;
    background-color: #ea4739;
    -webkit-border-radius: .48rem 0 0 .48rem;
    border-radius: .48rem 0 0 .48rem;
    background-image: url("../../static/img/zv.png");
    background-repeat: no-repeat;
    background-position: .21333333rem .21333333rem;
    background-size: .53333333rem .53333333rem;
    color: #fff;
}
.user_page .user_top .vip_part .vip_part_con {
    padding-left: .96rem;
    padding-right: .26666667rem;
}
.user_page .user_top .vip_part .vip_mark {
    display: block;
    font-size: .32rem;
    line-height: 120%;
    padding-top: .13333333rem;
}
.user_page .user_top .vip_part .vip_info {
    display: block;
    font-size: .24rem;
    line-height: 120%;
}
.user_page .user_balance {
    height: 1.12rem;
    background: #ec4a46;
}
.user_page .user_balance .balance_ul {
    display: flex;
    color: #fff;
}
.user_page .user_balance .balance_ul li {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
    line-height: 1.12rem;
    text-align: center;
    position: relative;
    cursor: pointer;
}
.user_page .user_balance .balance_ul li .num_span {
    font-size: .48rem;
}
.user_page .order_part {
    background: #fff;
    margin-top: .26666667rem;
}
.user_page .order_part .order_type {
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.user_page .order_part .order_type li {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
    height: 1.68rem;
    text-align: center;
    padding-top: .4rem;
}
.user_page .order_part .order_type li .iconfont {
    /* font-size: .64rem; */
    color: #898989;
    position: relative;
}
.user_page .order_part .order_type li .order_type_name {
    display: block;
    font-size: .34666667rem;
    padding-top: .13333333rem;
}
.user_page .order_part .all_order {
    height: 1.28rem;
    line-height: 1.28rem;
    font-size: .4rem;
    position: relative;
    padding: 0 .4rem;
    cursor: pointer;
}
.user_page .order_part .all_order .iconfont {
    position: absolute;
    right: .4rem;
    height: 1.28rem;
    line-height: 1.28rem;
}
.iconfont {
    font-size: .53333333rem;
    color: #ccc;
}
.user_page .user_part {
    margin-top: .26666667rem;
    background: #fff;
}
.user_page .user_part .user_part_ul {
    overflow: hidden;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.user_page .user_part .user_part_ul li {
    width: 25%;
    padding: .53333333rem 0;
    text-align: center;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    cursor: pointer;
}
.user_page .user_part .user_part_ul li .img-icon {
    width: .53333333rem;
    height: .53333333rem;
    margin-top: .06666667rem;
    display: inline;
}
.user_page .user_part .user_part_ul li .part_name {
    display: block;
    padding-top: .21333333rem;
}
.user_page .user_part .user_part_ul li .iconfont {
    /* font-size: .64rem; */
    color: #979797;
}
</style>