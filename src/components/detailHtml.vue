<template>
    <div class="explain">
        <div class="title">
            <ul class="titleLine">
                <li v-for="(item,idx) in headline" :key="idx" :class="currentName==item.name? 'active':''">
                    <span :key="idx" @click="toggle(item.name,item.html)">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div v-html="this.dataGuid"></div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                headline:[{
                    'name':'图文详情',
                    'html':'product_desc'
                    },{
                        'name':'说明书',
                        'html':'instructions'
                    },{
                        'name':'规格参数',
                        'html':'specificationParams'
                    }],
                currentName:'图文详情',
                explain:{},
                dataGuid:'',
            }
        },
        watch:{
            '$route.query': function (newVal, oldVal) {
                this.getShow();
            }
        },
        created(){
            this.getShow();
        },
        methods:{
            getShow(){
                let itemCode=this.$route.query.itemCode
                let timestamp=this.$route.query.timestamp
                console.log(itemCode,timestamp)
                this.$http.post('product/v1/describe/getdescribe.json?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp='+timestamp+'&signature=****&siteid=9',{
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
                    itemId: itemCode,
                    width: 320,
                }).then(res=>{
                    console.log('678',res.data);
                    this.explain=res.data;
                    this.toggle('图文详情','product_desc')
                })
            },
            toggle(name,gqg){
                this.currentName=name
                if(gqg=='product_desc'){
                    this.dataGuid=this.explain.product_desc;
                }else if(gqg=='instructions'){
                    this.dataGuid=this.explain.instructions;
                }else if(gqg=='specificationParams'){
                    this.dataGuid=this.explain.specificationParams;
                }
            }
        }
    }
</script>
<style scoped>
    .title .titleLine{
        position: relative;
        display: flex;
        background: #fff;
        padding: 0;
        border-bottom: 1px solid #e1e1e1;
        font-size: 0.42666667rem;}
    .title .titleLine li{
        position: relative;
        display: block;
        flex: 1;
        padding: 0.26666667rem 0;
        text-align: center;
    }
    .title .titleLine .active{
        border-bottom:2px solid #FF6666;color: #FF6666
    }
</style>