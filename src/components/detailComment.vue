<template>
    <div class="comment">
    </div>
</template>
<script>
    export default {
        data:function(){
            return {

            }
        },
        created(){
            this.getComment();
        },
        methods:{
            getComment(){
                let itemCode=this.$route.query.itemCode
                let timestamp=this.$route.query.timestamp
                console.log(itemCode,timestamp)
                this.$http.post('product/v1/review/getReviewOfDetailBtn?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp='+timestamp+'&signature=****&siteid=9',{
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
                    itemId: itemCode
                }).then(res=>{
                    // console.log('123',res.data);
                })
            }
        }
    }
</script>
<style scoped>

</style>


