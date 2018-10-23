<template>
    <div class="home">
        <header class="home_header">
            一药网
        </header>
        <div class="input">
            <span class="click">善存</span>
            <span class="image">
                <img  src="static/assets/octicons/build/svg/search.svg">
            </span>
        </div>
        <div class="links">
            <ul class="links_href">
                <li v-for="(item,idx) in link" :key="idx">
                    <span :key="idx">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="banana">
            <mt-swipe :show-indicators="false" :auto="2000">
                <mt-swipe-item v-for="(item,idx) in lunbolist" :key="idx">
                    <img :src="item.images" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- <mt-navbar v-model="selected">
            <mt-tab-item  v-for="(item,idx) in categoryinfo" :id="idx">{{item.name}}</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item v-for="(item,idx) in categoryinfo" :id="idx">
                <div class="sickness">
                    <span v-for="(item1,index) in item.thridCategory">
                        {{item1.name}}
                    </span>
                </div>
                
            </mt-tab-container-item>
        </mt-tab-container> -->
        <div class="sickness">
            <ul class="sickness_href">
                <li v-for="(item,idx) in categoryinfo" :key="idx">
                    <span :key="idx">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                lunbolist:[{
                    images:"https://p3.maiyaole.com/img/mobile/20189/1539958293993137.png"
                },{
                    images:"https://p1.maiyaole.com/img/mobile/20189/1539679116317101.jpg"
                },{
                    images:"https://p1.maiyaole.com/img/mobile/20189/1539958463647139.png"
                }],
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
            }
        },
        created(){
            this.getIllness();
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
                })
            }
        }
    }
</script>
<style scoped>
    .home{background: #FBFCFC;}
    .home_header{
        background: linear-gradient(90deg,#8f8ef8,#9db1f9);
        height:110px;
        text-align:center;
        font-size:20px;
        color:#fff;
        font-weight: bold;
        line-height:24px;
    }
    .input{height:38px;padding:10px;display: flex;}
    .input .click{height:38px;flex:4;background: #ddd;padding-left:10px;line-height:38px;}
    .input .image{height:38px;flex:1;background: #58bc58;line-height: 38px;text-align: center;}
    .banana{height:80px;width:100%;margin-top:-6px;}
    .banana img{height:80px;width:100%;}
    .links .links_href{overflow-y: hidden;overflow-x:scroll ;height:54px;width:100%;white-space: nowrap;}
    .links .links_href li{display:inline-block;margin:0px 5px 0px 8px;}
    .links .links_href li span{display:inline-block;padding:10px;border:1px solid #F7F7F7;height:16px;font-size:16px;
    line-height:16px;border-radius: 5px;background: #fff;color:#262D57;}
    .mint-navbar{overflow-y: hidden;overflow-x:scroll ;height:54px;width:100%;white-space: nowrap;}
    .mint-navbar .mint-tab-item{display:inline-block;margin:0px 5px 0px 8px;font-size:16px;}
    .mint-navbar .mint-tab-item .mint-tab-item-label{font-size:16px;color:#333;}
    .sickness .sickness_href{overflow-y: hidden;overflow-x:scroll ;height:54px;width:100%;white-space: nowrap;}
    .sickness .sickness_href li{display:inline-block;margin:0px 5px 0px 8px;}
    .sickness .sickness_href li span{display:inline-block;padding:10px;border:1px solid #F7F7F7;height:16px;font-size:16px;
    line-height:16px;border-radius: 5px;background: #fff;color:#262D57;}
</style>


