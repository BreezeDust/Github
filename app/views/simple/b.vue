<style>

</style>
<template>
    <p>我是页面B</p>
    <!-- 注意这里的:name是动态语法，传递真正的类型 -->
    <dust-button v-on:click-msg="onclick" :name="'按钮B'"></dust-button>
</template>

<script>
    module.exports={
//        .vue可以省略template:"#xx"
        data:function(){
            return {clickToast:"B消息"};
        },
        components:{
            'dust-button':require('../../components/simple/dust-button.vue')
        },
        methods:{
            onclick:function(){
                alert("被点击"+this.clickToast);
            }
        }
    };
</script>