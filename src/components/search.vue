<template>
    <div class="search">
        <searchhead/>  
        <hotsearch/>   
    </div>
</template>
<script>
import searchhead from '@/components/search/searchhead'
import hotsearch from '@/components/search/hotsearch'
export default {
    data(){
        return {

        }
    },
    methods:{

    },
    components:{
        searchhead,
        hotsearch
    }
}
</script>

<style scoped>

</style>
