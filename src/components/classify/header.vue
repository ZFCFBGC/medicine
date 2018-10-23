<template>
    <header>
        <i class="fa fa-medkit"></i>
        <span class="place">上海</span>
        <div class="head-input">
            <input type="text">     
        </div>
        <i class="fa fa-user-md"></i>
    </header>
</template>

<script>
import Vue from 'vue';
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>



<style scope>
header{
   width: 100%;      
}
header i{
    display: block;
}
header .fa-medkit{
    float: left;
    font-size: 20px;
    margin-left: 5px;

}
header .place{
    display: inline-block;
    width: 20px;
    
}

header .fa-user-md{
    float:right;
    font-size: 20px;
    margin-right: 5px;
}

header .head-input{
    float: left;
    margin-left: 5px;
}

header .head-input input{
    
}

</style>

