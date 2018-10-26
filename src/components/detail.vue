<template>
    <div>
        <header class="pro_header">
            <a href="javascript:void(0)" class="common_left_btn"><i class="iconfont fa fa-angle-left"></i></a>
            <ul class="common_tt_tab">
                <li class="cur">商品详情</li>
            </ul> 
            <div class="common_more">
                <i class="iconfont">...</i>
            </div> 
            <div class="layer_gray_bg toggle_nav_bg">
                <div id="toggleNav" class="toggle_nav">
                    <a href="javascript:void(0)">
                        <i class="iconfont fa fa-home">
                        </i>首页
                    </a> 
                    <a href="javascript:void(0)">
                        <i class="iconfont fa fa-navicon"></i>分类
                    </a>
                    <a href="javascript:void(0)">
                        <i class="iconfont fa fa-cart-plus"></i>购物车
                    </a>
                    <a href="javascript:void(0)">
                        <i class="iconfont fa fa-file-text-o">
                        </i>需求清单
                    </a>
                    <a href="javascript:void(0)">
                        <i class="iconfont fa fa-user-o"></i>我的
                    </a>
                </div>
            </div>
        </header>
        <div class="detail_content">
            <detail-show></detail-show>
            <detail-comment></detail-comment>
            <detail-goods></detail-goods>
            <detail-html></detail-html>
        </div>
        <footer class="pro_footer">
            <ul>
                <li class="car">
                    <p><i class="fa fa-cart-plus"></i></p>
                    <p>购物车</p>
                </li>
                <li class="buy">购买登记</li>
            </ul>
        </footer>
    </div>
</template>
<script>
    import detailComment from './detailComment'
    import detailShow from './detailShow'
    import detailGoods from './detailGoods'
    import detailHtml from './detailHtml'
    export default {
        data:function(){
            return {

            }
        },
        components:{
            detailComment,
            detailShow,
            detailGoods,
            detailHtml
        },
        created(){
            console.log(this.$route.query);
        },
        methods:{

        }
    }
</script>
<style scoped>
    .pro_header{position: fixed;top: 0;left: 0;z-index: 8;width: 100%;height: 1.2rem;line-height: 1.2rem;font-size: 0.4rem;
    text-align: center;background: #F9F9F9;}
    .pro_header .common_left_btn {position: absolute;top: 0;left: 0rem;padding: 0 0.26666667rem;height: 100%;color: #999;}
    .pro_header .iconfont {font-size: 0.53333333rem;color: #666;}
    .pro_header .common_tt_tab {font-size: 0.42666667rem;}
    .pro_header .common_tt_tab li {position: relative;display: inline-block;height: 1.06666667rem;color: #414141;
    cursor: pointer;}
    .pro_header .common_more {right: 0;padding: 0 0.26666667rem;position: absolute;top: 0;}
    .pro_header .iconfont {font-size: 0.53333333rem;color: #666;}
    .pro_header .layer_gray_bg {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.3);position: fixed;
        left: 0;display: none;top: 1.06666667rem;z-index: 50;}
    .pro_header .toggle_nav {background: #fff;width: 3.06666667rem;right: 0.21333333rem;top: 0.26666667rem;
    z-index: 1000;position: absolute;padding: 0 0.26666667rem;border-radius: 0.10666667rem;}
    .pro_header .toggle_nav a {display: block;height: 0.96rem;line-height: 0.96rem;border-bottom: 1px solid #D9D9D9;
    position: relative;clear: both;}
    .pro_header .toggle_nav a .iconfont {color: #505050;font-size: 0.48rem;margin-right: 0.21333333rem;float: left;}
    .detail_content{margin-top:1.2rem;margin-bottom:1.3333rem;}
    .pro_footer{bottom: 0;width: 100%;padding: 0;position: fixed;}
    .pro_footer ul{display: flex;}
    .pro_footer ul .car{flex:1;height:1.3333rem;font-size: 0.48rem;color: #fff;background: #FF9E81;text-align: center;}
    .pro_footer ul .car p i{font-size: 0.6rem;}
    .pro_footer ul .buy{flex:2;color: #fff;font-size: 0.48rem;background: #FF6666;height:1.3333rem;text-align: center;line-height:1.3333rem;}
</style>


