<template>
    <div class="user_page">
        <div class="user_top">
            <span class="city_area"><i class="icon iconfont icon_address"></i>广东</span>
            <div class="photo"></div>
            <div class="login_btn">
                <a >登录</a> /
                <a>注册</a>
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
                <li data-ywpoint="userpage_myorder_0_unpaidorder_0_0">
                    <i class="icon iconfont icon_zhifu"></i> 
                    <span class="order_type_name">待支付</span>
                </li> 
                <li data-ywpoint="userpage_myorder_0_receivingorder_0_0">
                    <i class="icon iconfont icon_daishouhuo"></i> 
                    <span class="order_type_name">待收货</span>
                </li> 
                <li data-ywpoint="userpage_myorder_0_commentorder_0_0">
                    <i class="icon iconfont icon_flower"></i> 
                    <span class="order_type_name">待评价</span>
                </li> 
                <li data-ywpoint="userpage_myorder_0_refundorder_0_0">
                    <i class="icon iconfont icon_tuihuo"></i> 
                    <span class="order_type_name">退换货</span>
                </li>
            </ul> 
            <div data-ywpoint="userpage_myorder_0_allorder_0_0" class="all_order">全部订单
			    <i class="icon iconfont icon_rightarrow"></i>
            </div>
        </div>
        <div class="user_part">
            <ul class="user_part_ul">
                <li data-ywpoint="userpage_myfavorite_0_0_0_0">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAuCAYAAAB5/AqlAAAAAXNSR0IArs4c6QAABZBJREFUaAXtWlso5VsY/0hyJDw44y7jxUTmBTke3CU0TcKE02QaIh4QhTpe5kWi3KMRCU3jUi4h58EkaZpm3B4cieTygHAktySJs37fOX/+zGbvbe+zbXvmq7X32v//ty6/9V3Wt769jOiKTETVRxQvUX4VxVSUx0inYtJ/i/KXKJOinIlCRvgQZCXK76LY4ocB0ZbA8lGUfWPxAUkyyGfPnlFvby8dHh7SxcXFoyyYOzAAiyAIDthMINHfRInEi2/fvpGlpaX4+fhpb2+P/P39aX5+HmD+hERhk1RSUmIwIIHH2tqaMaEu6Dkk+ocophC5hYUFHhoMHRwckJUV3A+dQqLsXQ0NJNDJzNAUQH8I+gnU0MSsc4lOT08/yBrqFOj4+DhlZmYaPtCGhgYC2M+fP+scrM4kij2tq6uLAVZXVxsu0A8fPtDR0RED7Ovro9XVVZ2C1ZlEobYgNzc3Ojs7I11L9V5A1bWxr1+/0szMDNnZ2VFnZycDbm5uJqizrsj46dOna7GxsSqPd3JyQq9evaLt7W2V20jSTElJIR8fHwoPD2eQTU1NSvt4//69VtTceHl52am7u1vpgBLD0NAQbW5uUmVlpfTozm8cl+CEjI2NKTU1lXlzc3P5u7a2ls7Pz29t/+XLF8rJyaGsrKxbeVR9obbqSqpXX19PAKGM2tra6Pj4mCIiItg+wR8dHc0HYziknp4ehV1AYxISEuj09JQGBwcJDkwTUgsovCYGBcG+ampqlI7d2NjIPGlpadd4ISmQIs2AlJOSkmhtbY3tGnzQAizYfUktoP39/TyYk5MTjwfVk7YMRROA05qdnSUHBwd6+fLlNZbk5GSysbEhqCeclZyKiopoZGSE201NTbFdQ/rFxcVyNrXqagFtb2/nzjGRwMBA2tnZITiL20iSJpyQiQlSU1dkbm5O6enp/EC+1WAxy8rKyNTUlD00Fqmuro7bV1RUSKmRq45UrBmJJNg7VXh3d3fJ3t6eWdfX12lycpKioqJ41VdWVnhi8n7A7+zszDa2uLhIrq6u8tdc39jYIOH12SEtLS0xr6+vL9t+eXk55eXlXbZBjIxFhcceHh6+fK6sYmT0b6JTZYnCacAxhIaGsspFRkaySmGy2BNvktwJKQIJfkgrMTGRA4jS0lLetuDg4uPjr4EEL9T2yZMn9OnTJ+ro6MAjtYglis7vcvPoEXsn7Ka1tZVgXyCAj4uLY2+6sLBwTT09PT1pbm6OU48xMTHMr+gDxzZvb+/LV8hGTkxMKMxftbS00Nu3b3mBkLGE+t8kbGNIjEkkSdRIJI8K9/f3f5Fe3PVtZmZGW1tbl7kYLI6XlxcDki/A2NgYBQUFEZwW1Pqmfd4cIyQkhEZHRxkcAHh4eNxkufwdEBCg9PRTUFBA0BCQBNREAgkPqIygrrKEEwcBhYWF9ObNG+749evX/OwuJ6RoDGwdAIoI6i6QaAvHFBYWpqgbfgaJ2tp+/4cDLPUdOJCZvw8hQHd3dycRYREirODgYHJ0dGS7g4NxcXFR2i00o6qq6ju7VNpQBQZJoio7o9v6hFrm5+fzayTBYUeIhyF9VUCiIaQg97C3jaXJc40lisHhjbFNwANDtRE1DQwM0IsXLzSZm1baak2imA02dylQB0hIEvGsPpHGqiuBycjI4P0VvxEJQR31ibQ2G/ylgeMUbFY6jukT0OsBqIYzy87OJoR7UtCvYXdaba4VZySfEY5SiiIWOY8u61p1RvKJ6xNI+by0ZqPyTvWx/hOoPkpFkzlBoqfo4K6UiCYDPGRbWd6Y/9rH5SM+0D7kpP6PsXFI/4+2sb38MNdvcI1sC/dx/Pz8OH/6mNUYc0cOWHbHaFPgm4JEQYZ6RQ4gP4pyIAEFWISDhnTpcUbgmRKFLz3+A+KduUBeRWuzAAAAAElFTkSuQmCC" alt="" class="img-icon" /> 
                    <span class="part_name">健康档案</span>
                </li> 
                <li data-ywpoint="userpage_myfavorite_0_0_0_0">
                    <i class="icon iconfont icon_shoucang"></i> 
                    <span class="part_name">我的收藏</span>
                </li> 
                <li data-ywpoint="userpage_myhistory_0_0_0_0">
                    <i class="icon iconfont icon_zuji"></i> 
                    <span class="part_name">看过买过</span>
                </li> 
                <li data-ywpoint="userpage_mycommonlist_0_0_0_0">
                    <i class="icon iconfont icon_changyongqingdan"></i> 
                    <span class="part_name">常用清单</span>
                </li> 
                <li data-ywpoint="userpage_inquiryrecord_0_0_0_0">
                    <i class="icon iconfont icon_wenzhenjilu"></i> 
                    <span class="part_name">问诊记录</span>
                </li> 
                <li data-ywpoint="userpage_addressmanagement_0_0_0_0">
                    <i class="icon iconfont icon_dizhiguanli"></i> 
                    <span class="part_name">地址管理</span>
                </li> 
                <li data-ywpoint="userpage_accountmanagement_0_0_0_0">
                    <i class="icon iconfont icon_account"></i> 
                    <span class="part_name">账号管理</span>
                </li> 
                <li data-ywpoint="userpage_afterservice_0_0_0_0">
                    <i class="icon iconfont icon_ermai"></i> 
                    <span class="part_name">售后服务</span>
                </li> 
                <li data-ywpoint="userpage_setting_0_0_0_0">
                    <i class="icon iconfont icon_shezhi"></i> 
                    <span class="part_name">设置</span>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>

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
    font-size: .64rem;
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
    font-size: .64rem;
    color: #979797;
}
</style>