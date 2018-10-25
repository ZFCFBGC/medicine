<template>
    <div class="listarea">
        <div class="list-item" v-for="item in msg" :key="item.id">
            <h4>{{item.name}}</h4>
            <ul>
                <li v-for="listitem in item.thridCategory" :key="listitem.id" @click="go(listitem.id,listitem.name)">
                    <div class="listitem-img">
                        <img :src="listitem.icon" >
                    </div>
                    <span>{{listitem.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['msg'],
    methods:{
        go(id,name){
            this.$router.push({path:'/searchlist',params:{id:id,name:name}})
        }
    }
}
</script>

<style scoped>
.listarea .list-item h4{
    color: #333;
    height: 1.0666666666666667rem;
    line-height: 1.0666666666666667rem;
    font-size: .4266666666666667rem;
    padding: 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
}

.listarea .list-item ul{
    overflow: hidden;
    background: #fff;
    padding: .5333333333333333rem .26666666666666666rem 0 0;
    font-size: .32rem;
}

.listarea .list-item ul li{
    float: left;
    width: 33.33333%;
    height: 2.3466666666666667rem;
    text-align: center;
    margin-bottom: .4rem;
    display: block;
}
.listarea .list-item ul li img{
    width: 1.5466666666666666rem;
    height: 1.5466666666666666rem;
    margin: 0 auto .26666666666666666rem;
    overflow: hidden;
}

.listarea .list-item ul li span{
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

</style>
