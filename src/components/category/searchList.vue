<template>
    <div>
        <div class="searchList">
            <div class="search_filter_op">
                <div class="search_list_con"></div>
                <div class="search_filter_tab1">
                    <ul class="search_filter_tab1_ul">
                        <li ><span>日晒伤</span></li> 
                        <li :class="list?'cur':''"
                            @click="showsome(1)"
                        ><span>{{listText}}</span><i class="icon iconfont  fa fa-sort-desc"></i></li> 
                        <li v-show="image" @click="changeList"><i class="icon iconfont  fa fa-list-ul"></i>列表</li>
                        <li v-show="!image" @click="changeList"><i class="icon iconfont fa fa-picture-o">大图</i></li> 
                        <!-- <li><i class="icon iconfont  fa fa-filter"></i>筛选</li> -->
                    </ul> 
                    <div v-show="list" class="layer_gray_bg layer_list"  @click="closeshow">
                        <div class="filter_con rank_type show">
                            <ul>
                                <li :class="listItems[0]?'cur':''" @click="changeSort(0)"
                                >综合排序<i v-show="listItems[0]" class="fa fa-check"></i></li>
                                <li :class="listItems[1]?'cur':''" @click="changeSort(1)"
                                >销量排序<i v-show="listItems[1]" class="fa fa-check"></i></li>
                                <li :class="listItems[3]?'cur':''" @click="changeSort(3)"
                                >好评排序<i v-show="listItems[3]" class="fa fa-check"></i></li>
                                <li :class="listItems[2]?'cur':''" @click="changeSort(2)"
                                >价格从低到高<i v-show="listItems[2]" class="fa fa-check"></i></li>
                                <li :class="listItems[5]?'cur':''" @click="changeSort(5)"
                                >价格从高到低<i v-show="listItems[5]" class="fa fa-check"></i></li>
                                <li :class="listItems[4]?'cur':''" @click="changeSort(4)"
                                >最新上架<i v-show="listItems[4]" class="fa fa-check"></i></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div   class="search_filter_tab2">
                    <ul class="search_filter_tab2_ul">
                        <li :class="venderid?'cur':''" @click="selectme">
                            <span>自营 <i v-show="venderid" class="fa fa-check"></i></span>
                        </li> 
                        <li :class="promotionText!=''?'cur':''" @click="showsome(2)">
                            <span>{{promotionText!=''?promotionText.join('、'):'促销'}}<i class="icon iconfont fa fa-sort-desc"></i></span>
                        </li> 
                        <li :class="brandText!=''?'cur':''" @click="showsome(3)">
                            <span>{{brandText!=''?brandText.join('、'):'品牌'}}<i class="icon iconfont fa fa-sort-desc"></i></span>
                        </li> 
                        <li :class="priceText?'cur':''" @click="showsome(4)">
                            <span>{{priceText?priceText:'价格'}}<i class="icon iconfont fa fa-sort-desc"></i></span>
                        </li>
                    </ul>
                </div> 
                <div v-show="show" class="layer_gray_bg fliter_tab2_gray_bg" @click="closeshow">
                    <div v-show="promotion" class="filter_con filter_tab2_con promotion_filter" >
                        <div class="filter_tab2_con_con">
                            <span
                            :class="promotionItems[idx]?'filter_key cur':'filter_key'"
                            v-for="item,idx in promotionFilters"
                            @click.stop="checkPromotion(item,idx)">{{item.name}}
                            <i v-show="promotionItems[idx]" class="fa fa-check"></i></span>
                        </div> 
                        <div class="filter_tab2_btn_part">
                            <span>重置</span> 
                            <span class="sure_btn" @click="select">确定</span>
                        </div>
                    </div> 
                    <div v-show="brand" class="filter_con filter_tab2_con promotion_filter">
                        <div class="filter_tab2_con_con">
                            <span 
                            :class="brandItems[idx]?'filter_key cur':'filter_key'" 
                            v-for="item,idx in brands"
                            @click.stop="checkBrand(item,idx)">{{item.name}}
                            <i v-show="brandItems[idx]" class="fa fa-check"></i> 
                            </span>
                        </div> 
                        <div class="filter_tab2_btn_part">
                            <span>重置</span> 
                            <span class="sure_btn"  @click="select">确定</span>
                        </div>
                    </div> 
                    <div v-show="price" class="filter_con filter_tab2_con promotion_filter" >
                        <div class="filter_tab2_con_con">
                            <span
                            :class="priceItems[idx]?'price_key cur':'price_key'"
                            v-for="item,idx in priceRanges"
                            @click="checkPrice(item,idx)">{{item.name}}
                            <i v-show="priceItems[idx]"  class="fa fa-check"></i></span>
                        </div> 
                        <div class="filter_tab2_price_btn_part">
                            <div class="btn_part_con">
                                <input type="tel" placeholder="最低价" class="price_input" @click.stop
                                v-model="inputMin"> 
                                <span>~</span> 
                                <input type="tel" placeholder="最高价" class="price_input" @click.stop
                                v-model="inputMax"> 
                                <span class="price_btn" @click="setPrice">确定</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            </div>
        </div>
        <goods-list :data="data" :image="image"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"></goods-list>
        <div v-show="noGoods" class="noGoods">没有找到相关商品</div>
        <div v-show="noData" class="no-data">没有数据了</div>
    </div>
</template>
<script>
import Vue from 'vue';
import GoodList from './goodsList';
export default {
    data(){
        return{
            data:[],
            image:true,
            show:false,
            list:false,
            promotion:false,
            price:false,
            brand:false,
            brands:[],
            priceRanges:[],
            promotionFilters:[],
            sort:0,
            venderid: '',
            promotiontype:[],
            brandId:[],
            pricestart:'',
            priceend:'',
            listItems:[true,false,false,false,false,false],
            promotionItems:[],
            brandItems:[],
            priceItems:[],
            promotionText:[],
            brandText:[],
            listText:'综合排序',
            priceText:'',
            inputMax:'',
            inputMin:'',
            currentPage:1,
            noData:false,
            noGoods:false

        }
    },
    components:{
        GoodsList:GoodList
    },
    methods:{
        //选择类别
        showsome(num){
            this.show = true;
            this.list = false;
            this.promotion = false;
            this.brand = false;
            this.price = false;
            if(num === 1){
                this.list = true;
            }else if(num === 2){
                this.promotion = true;
            }else if(num === 3){
                this.brand = true;
            }else{
                this.price = true;
            }
        },
        //关闭
        closeshow(){
            this.show = false;
            this.list = false;
            this.brand = false;
            this.promotion = false;
            this.price = false;
        },
        //自营选择
        selectme(){
            this.venderid = this.venderid?'':1;
            this.select();
        },
        //选择促销
        checkPromotion(item,idx){ 
            if(this.promotionItems[idx]){
                Vue.set(this.promotionItems,idx,false);
                this.promotionText.forEach((element,indx) => {
                    if(element == item.name){
                        this.promotionText.splice(indx,1);
                    }
                });
                this.promotiontype.forEach((ite,index)=>{
                    if(ite == item.typeId){
                        this.promotiontype.splice(index,1);
                    }
                });
            }else{
                this.promotiontype.push(item.typeId);
                Vue.set(this.promotionItems,idx,true);
                this.promotionText.push(item.name);
            }
            
        },
        //选择品牌
        checkBrand(item,idx){
            if(this.brandItems[idx]){
                Vue.set(this.brandItems,idx,false);
                this.brandText.forEach((element,indx) => {
                    if(element == item.name){
                        this.brandText.splice(indx,1);
                    }
                });
                this.brandId.forEach((ite,index)=>{
                    if(ite == item.id){
                        this.brandId.splice(index,1);
                    }
                });
            }else{
                Vue.set(this.brandItems,idx,true);
                this.brandText.push(item.name);
                this.brandId.push(item.id);
            }
        },
        //价格选择
        checkPrice(item,idx){
            this.pricestart = item.min;
            this.priceend = item.max;
            this.priceText = item.name;
            this.priceItems.forEach((item,indx)=>{
                Vue.set(this.priceItems,indx,false);
            })
            Vue.set(this.priceItems,idx,true);
            this.select();
        },
        //自定义价格设置
        setPrice(){
            this.pricestart = this.inputMin;
            this.priceend = this.inputMax;
            this.priceText = this.inputMin +'~'+this.inputMax;
            this.priceItems.forEach((item,idx)=>{
                Vue.set(this.priceItems,idx,false);
            });
            this.select();
        },
        //修改列表形式
        changeList(){
            this.image = !this.image;
        },
        //排序方式改变
        changeSort(num){
            this.sort = num;
            this.listItems.forEach((item,idx)=>{
                 Vue.set(this.listItems,idx,false);
            })
            if(num === 0){
                this.listText = '综合排序';
                this.listItems[0] = true;
            }else if(num === 1){
                this.listText = '销量排序';
                this.listItems[1] = true;
            }else if(num === 2){
                this.listText = '价格从低到高';
                this.listItems[2] = true;
            }else if(num === 3){
                this.listText = '好评排序';
                this.listItems[3] = true;
            }else if(num === 4){
                this.listText = '最新上架';
                this.listItems[4] = true;
            }else if(num === 5){
                this.listText = '价格从高到低';
                this.listItems[5] = true;
            }
            this.select();
        },
        //类型请求
        select(){
            //回到顶部
            document.documentElement.scrollTop = 0;
            this.currentPage = 1;
            this.$http.get('search/prod',{
                pagesize: 10,
                pageindex: 1,
                sort: this.sort,
                heguiKeyword: '日晒伤',
                categoryid: 1002011,
                cityname: '广州',
                locateProvinceId: 20,
                platform: 9,
                venderid:this.venderid,
                brands:this.brandId.join(','),
                promotiontype:this.promotiontype.join(','),
                pricestart:this.pricestart,
                priceend:this.priceend
            }).then(res=>{console.log(res.data.hits)
                this.data=res.data.hits;
                this.pageCount = res.data.pageCount;
                this.noGoods = res.data.hits != ''?false:true;
                
            })
        },
        //加载更多
        loadMore(){
            this.currentPage++;
            if(this.currentPage<=this.pageCount){
                this.noData = false;
                this.$http.get('search/prod',{
                    pagesize: 10,
                    pageindex: this.currentPage,
                    sort: this.sort,
                    heguiKeyword: '日晒伤',
                    categoryid: 1002011,
                    cityname: '广州',
                    locateProvinceId: 20,
                    platform: 9,
                    venderid:this.venderid,
                    brands:this.brandId.join(','),
                    promotiontype:this.promotiontype.join(','),
                    pricestart:this.pricestart,
                    priceend:this.priceend
                }).then(res=>{console.log(res.data.hits)
                this.data.push(...res.data.hits);
                this.pageCount = res.data.pageCount;
                this.currentPage = res.data.currentPage;
                })
            }else{
                this.noData = true;
            }     
        },
    },
    created(){
        this.$http.get('search/filter/',{
            categoryid: 1002011
        }).then(res=>{
            this.brands = res.data.brands;
            this.priceRanges = res.data.priceRanges;
            this.promotionFilters = res.data.promotionFilters;
        })
        this.select();
    }
}
</script>
<style scoped>
.searchList{
    padding-top: 1.0666666666666667rem;
    width: 100%;
    font-size: .32rem;
}
.search_list_con {
    padding-top: 2.453333333333333rem;
}
.search_filter_op .search_filter_tab1 {
    position: fixed;
    top: 1.0666666666666667rem;
    height: 1.28rem;
    border-bottom: 1px solid #eee;
    background: #fff;
    width: 100%;
    z-index: 120;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.no-data{
    font-size:0.52rem;
    text-align: center;
    color: rgb(170, 170, 170);
    background: #fff;
    line-height: 1.2rem;
}
.noGoods{
    font-size:0.52rem;
    text-align: center;
    color: rgb(170, 170, 170);
    background: #fff;
    height: 100%;
    line-height: 5.2rem;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul {
    font-size: .4rem;
    overflow: hidden;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li {
    width:33.3333%;
    float: left;
    text-align: center;
    line-height: 1.28rem;
    height: 1.28rem;
    overflow: hidden;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li:first-child {
    /* width: 28%; */
    position: relative;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li:first-child span {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 5em;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li .iconfont {
    color: #333;
    font-size: .37333333333333335rem;
    line-height: 1.28rem;
    margin-right: .13333333333333333rem;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li .iconfont.fa-sort-desc{
    margin-right: 0.5rem;
    line-height: 1.12rem;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li:first-child .iconfont {
    position: absolute;
    right: 0;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li:nth-child(2) {
    /* width: 35%; */
    position: relative;
    padding-right: .5333333333333333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li:nth-child(2) span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 95%;
    white-space: nowrap;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul li:nth-child(2) .iconfont {
    position: absolute;
    right: 0;
    top: 0;
}
.layer_gray_bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    left: 0;
}
.layer_gray_bg.layer_list{
    z-index: 110;
}
.search_filter_op .show {
    display: block;
}
.search_filter_op .rank_type ul .cur {
    color: #f66;
}
.search_filter_op .rank_type ul li {
    height: 1.1733333333333333rem;
    line-height: 1.1733333333333333rem;
    border-bottom: 1px solid #e5e3e3;
    text-indent: .4rem;
    font-size: .4rem;
    color: #2d2d2f;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.search_filter_op .search_filter_tab1 .search_filter_tab1_ul .cur, .search_filter_op .search_filter_tab1 .search_filter_tab1_ul .cur .iconfont {
    color: #f66;
}
.search_filter_op .search_filter_tab2 {
    position: fixed;
    top: 2.3466666666666667rem;
    height: 1.1733333333333333rem;
    border-bottom: 1px solid #eee;
    z-index: 19;
    background: #fff;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.search_filter_op .search_filter_tab2 .search_filter_tab2_ul {
    font-size: .37333333333333335rem;
    padding-top: .21333333333333335rem;
    margin: 0 .21333333333333335rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.search_filter_op .search_filter_tab2 .search_filter_tab2_ul li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    text-align: center;
    width: 25%;
    float: left;
}
.search_filter_op .search_filter_tab2 .search_filter_tab2_ul li span {
    width: 90%;
    height: .7466666666666667rem;
    background: #f8f8f8;
    line-height: .7466666666666667rem;
    text-align: center;
    -webkit-border-radius: .08rem;
    border-radius: .08rem;
    display: inline-block;
}
.search_filter_op .search_filter_tab2 .search_filter_tab2_ul .cur span {
    border: 1px solid #f66;
    color: #f66;
    background: #fff;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.search_filter_op .fliter_tab2_gray_bg {
    z-index: 100;
    top: 3.52rem;
}
.search_filter_op .filter_tab2_con {
    max-height: 6.933333333333334rem;
    background: #fff;
    position: relative;
}
.search_filter_op .filter_con {
    background: #fff;
    overflow: hidden;

}
.search_filter_op .filter_tab2_con .filter_tab2_con_con {
    height: 100%;
    max-height: 5.546666666666667rem;
    margin-bottom: 1.3866666666666667rem;
    overflow: auto;
    line-height: 1.3333333333333333rem;
    padding: 0 .4rem;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: .4rem;
}
.search_filter_op .filter_tab2_con .filter_tab2_con_con .filter_key {
    width: 50%;
    float: left;
    cursor: pointer;
}
.search_filter_op .filter_tab2_con .filter_tab2_con_con .price_key {
    display: block;
    cursor: pointer;
}
.search_filter_op .filter_tab2_con .filter_tab2_btn_part {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #e7e7e7;
    height: 1.3866666666666667rem;
    line-height: 1.3866666666666667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: .4266666666666667rem;
}
.search_filter_op .filter_tab2_con .filter_tab2_btn_part span {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.search_filter_op .filter_tab2_con .filter_tab2_btn_part .sure_btn {
    background: #f66;
    color: #fff;
}
.search_filter_op .filter_tab2_con .filter_tab2_con_con .cur {
    position: relative;
    color: #f66;
}
.search_filter_op .filter_tab2_con .filter_tab2_price_btn_part {
    position: absolute;
    width: 100%;
    height: 1.3866666666666667rem;
    bottom: 0;
    left: 0;
}
.search_filter_op .filter_tab2_con .filter_tab2_price_btn_part .btn_part_con {
    padding: 0 .26666666666666666rem;
    background: #fff;
    position: relative;
    border-top: 1px solid #e7e7e7;
}
.search_filter_op .filter_tab2_con .filter_tab2_price_btn_part .btn_part_con .price_input {
    width: 2.2666666666666666rem;
    height: .8rem;
    text-indent: .21333333333333335rem;
    margin-top: .26666666666666666rem;
    -webkit-border-radius: .13333333333333333rem;
    border-radius: .13333333333333333rem;
    background: #f1f1f2;
    border: none;
    font-size: .32rem;
}
.search_filter_op .filter_tab2_con .filter_tab2_price_btn_part .btn_part_con .price_btn {
    width: 1.6rem;
    height: .8rem;
    line-height: .8rem;
    position: absolute;
    right: .26666666666666666rem;
    top: .26666666666666666rem;
    text-align: center;
    -webkit-border-radius: .13333333333333333rem;
    border-radius: .13333333333333333rem;
    background: #f66;
    color: #fff;
    cursor: pointer;
    display: inline-block;
}
</style>