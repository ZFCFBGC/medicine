<template>
    <div class="home">
        <div class="input">
            <span class="click" @click="goSearch">输入商品名称</span>
        </div>
        <div class="banana">
            <mt-swipe :show-indicators="false" :auto="2000">
                <mt-swipe-item v-for="(item,idx) in lunbolist" :key="idx">
                    <img :src="item.images" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="links">
            <ul class="links_href">
                <li v-for="(item,idx) in link" :key="idx">
                    <span :key="idx">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="sickness">
            <ul class="sickness_href">
                <li v-for="(item,idx) in categoryinfo" :key="idx" :class="currentName==item.name ? 'active':''">
                    <span :key="idx" @click="toggle(item.name)">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="illness">
            <span v-for="(item,idx) in sickness" :key="idx">
                {{item.name}}
            </span>
        </div>
        <home-main v-bind:content="grabTogether"></home-main>
        <div class="goodTopic">
            <div class="good_top">
                <img src="static/img/zan.png" alt="">
                <p>精选专题</p>
            </div>
            <home-list v-bind:list="goodTopic[0]"></home-list>
            <home-list v-bind:list="goodTopic[1]"></home-list>
            <home-list v-bind:list="goodTopic[2]"></home-list>
            <home-list v-bind:list="goodTopic[3]"></home-list>
            <home-list v-bind:list="goodTopic[4]"></home-list>
            <home-list v-bind:list="goodTopic[5]"></home-list>
            <home-list v-bind:list="goodTopic[6]"></home-list>
            <home-list v-bind:list="goodTopic[7]"></home-list>
            <home-list v-bind:list="goodTopic[8]"></home-list>
        </div>
    </div>
</template>
<script>
    import homeMain from './homeMain'
    import homeList from './homeList'
    export default {
        data:function(){
            return {
                lunbolist:[{
                    images:"https://p2.maiyaole.com/img/mobile/20189/1539827980334102.jpg"
                },{
                    images:"https://p2.maiyaole.com/img/mobile/20189/1540346664682114.jpg"
                },{
                    images:"https://p2.maiyaole.com/img/mobile/20189/1540360558684129.jpg"
                },{
                    images:"https://p1.maiyaole.com/img/mobile/20189/1540349824273127.jpg"
                },{
                    images:"https://p1.maiyaole.com/img/mobile/20189/1540347252800122.jpg"
                },{
                    images:"https://p2.maiyaole.com/img/mobile/20189/1540175736923170.jpg"
                },],
                link:[{
                        name:"维生素钙",
                        path:''
                    },{
                        name:"滋补保健",
                        path:''
                    },{
                        name:"医疗器械",
                        path:''
                    },{
                        name:"隐形眼镜",
                        path:''
                    },{
                        name:"成人用品",
                        path:''
                    },{
                        name:"药妆个户",
                        path:''
                }],
                selected:true,
                categoryinfo:[],
                sickness:[],
                isClass:false,
                currentName:'',
                grabTogether:{},
                goodTopic:[],
            }
        },
        components:{
            homeMain,
            homeList
        },
        created(){
            this.getIllness();
            this.getGoods();
        },
        methods:{
            getIllness(){
                console.log(this.$http)
                this.$http.post('mobile/category/getcategoryBySymptom?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1540216458876&signature=****&siteid=9&deviceCode=0C5BE752-354B-4ADE-886C-BD455389C3E6&locatecityname=%E5%B9%BF%E5%B7%9E&locateprovinceid=20',{
                    demandcartkey: 'bdd023dffc31625232ce5ffac11643f2',
                    cartkey: '82fd1e8c134735cccbcbd10376be3e18',
                    provinceid: 20,
                    province: 20,
                    provincename: '广东',
                    tradername: 'yw_app',
                    trader: 'h5',
                    closesignature: 'yes',
                    signature_method: 'md5',
                    timestamp: 1540216458876,
                    signature: '****',
                    siteid: 9,
                    deviceCode: '0C5BE752-354B-4ADE-886C-BD455389C3E6',
                    locatecityname: '广州',
                    locateprovinceid: 20,
                }).then(res=>{
                    console.log(res.data);
                    this.categoryinfo=res.data.categoryinfo;
                    this.toggle();
                })
            },
            toggle(name){
                this.currentName= name || '常见病';
                this.categoryinfo.map(item=>{
                    if(item.name===this.currentName){
                         this.isClass=true;
                        return this.sickness=item.thridCategory
                    }
                })
            },
            getGoods(){
                this.$http.post('mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1540297900854&signature=****&siteid=9&deviceCode=17499B71-AA01-4D63-B414-B6D47DA88AF5&locatecityname=%E5%B9%BF%E5%B7%9E&locateprovinceid=20',{
                    demandcartkey: 'bdd023dffc31625232ce5ffac11643f2',
                    cartkey: '82fd1e8c134735cccbcbd10376be3e18',
                    provinceid: 20,
                    province: 20,
                    provincename: '广东',
                    tradername: 'yw_app',
                    trader: 'h5',
                    closesignature: 'yes',
                    signature_method: 'md5',
                    timestamp: 1540216458876,
                    signature: '****',
                    siteid: 9,
                    deviceCode: '0C5BE752-354B-4ADE-886C-BD455389C3E6',
                    locatecityname: '广州',
                    locateprovinceid: 20,
                }).then(res=>{
                    this.grabTogether=res.data.grabTogether;
                    this.goodTopic=res.data.goodTopic;
                })
            },
            goSearch(){
                this.$router.push({path:'/search'})
            }
        }
    }
</script>
<style scoped>
    .home{background: #FBFCFC;margin-bottom:1.12rem;}
    .input{height:1.0133rem;padding:0.2667rem;display: flex;font-size:0.4267rem;position: fixed;top:0;left:0;right:0;width:100%;z-index:100;}
    .input .click{height:1.0133rem;flex:4;background: rgba(255, 255, 255, 1);padding-left:0.4667rem;line-height:1.0133rem;margin:0 1.0667rem;border-radius: 0.48rem;}
    .input .image{height:1.0133rem;flex:1;background: #58bc58;line-height: 1.0133rem;text-align: center;}
    .input .image img{display: inline-block;width:0.4267rem;height:0.4267rem;}
    .banana{height:3.84rem;width:100%;margin-top:-0.16rem;z-index:1;background: rgba(255, 255, 255, 1);}
    .banana img{height:3.84rem;width:100%;}
    .links{overflow-y:hidden;height:1.2rem;}
    .links .links_href{overflow-y: hidden;overflow-x:scroll ;height:1.44rem;width:100%;white-space: nowrap;}
    .links .links_href li{display:inline-block;margin:0rem 0.1333rem 0rem 0.2133rem;}
    .links .links_href li span{display:inline-block;padding:0.2667rem;border:0.0267rem solid #F7F7F7;height:0.4267rem;font-size:0.4267rem;
    line-height:0.4267rem;border-radius: 0.1333rem;background: #fff;color:#262D57;}
    .mint-navbar{overflow-y: hidden;overflow-x:scroll ;height:1.44rem;width:100%;white-space: nowrap;}
    .mint-navbar .mint-tab-item{display:inline-block;margin:0rem 0.1333rem 0rem 0.2133rem;font-size:0.4267rem;}
    .mint-navbar .mint-tab-item .mint-tab-item-label{font-size:0.4267rem;color:#333;}
    .sickness{height:1.44rem;overflow-y: hidden;}
    .sickness .sickness_href{overflow-y: hidden;overflow-x:scroll ;height:1.44rem;width:100%;white-space: nowrap;padding-bottom:0.2667rem;z-index:1;}
    .sickness .sickness_href li{display:inline-block;margin:0rem 0.1333rem 0.1333rem 0.2133rem;color:#262D57;}
    .sickness .sickness_href .active{border-bottom:0.08rem solid #58bc58; color:#f40;}
    .sickness .sickness_href li span{display:inline-block;padding:0.2667rem;height:0.4267rem;font-size:0.4267rem;
    line-height:0.4267rem;background: #fff;}
    .illness span{display: inline-block;font-size:0.4267rem;padding:0.2667rem 0.1333rem;
    color:#262D57;margin:0 0.1333rem;border:0.0267rem solid #F0F0F0;border-radius: 0.2667rem;height: 0.4267rem;}
    .goodTopic{background: #fff;overflow: hidden;padding-bottom: .26666667rem;}
    .goodTopic .good_top{height: 1.2rem;padding: 0 .4rem;font-size: .4rem;}
    .goodTopic .good_top>img{display: inline-block;}
    .goodTopic .good_top>p{color: #4a4a4a;height: 1.2rem;line-height: 1.2rem;font-weight:bold;display: inline-block;}
  
</style>


