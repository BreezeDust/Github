<template>
    <div class="nav">
        <a v-link="{path:'page-a'}" >page A</a>
        <a v-link="{path:'page-b'}">page B</a>
    </div>
<router-view></router-view>
</template>
<script>
var store=require('../vuex/store.js');
module.exports ={
    store
}
</script>