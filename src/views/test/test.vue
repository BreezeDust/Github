<style>

</style>
<template>
    <p>测试页面A</p>
    <dust-button v-on:click-msg="onclick"></dust-button>
</template>

<script>
    module.exports={
//        .vue可以省略template:"#xx"
        data:function(){
            return {name:"msg"};
        },
        components:{
            'dust-button':require('../../components/dust-button.vue')
        },
        methods:{
            onclick:function(){
                alert("被点击");
            }
        }
    };
</script>