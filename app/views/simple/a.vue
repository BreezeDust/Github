<style>

</style>
<template>
    <p>测试页面A</p>
    <p>点击{{total}}</p>
    <p>计算属性{{c_total}}</p>
    <!-- 注意这里的:_width是动态语法，传递真正的类型 -->
    <dust-button v-on:click-msg="onclick" name="按钮A" :width="300" :height="250" ></dust-button>
</template>

<script>
    module.exports={
//        .vue可以省略template:"#xx"
        data:function(){ // 注意为了防止组件的所有实例共享同一个data，我们需要用函数来动态构造
            return {clickToast:"A消息"};
        },
        vuex:{
            getters:{
                total:function(state){
                    return state.Simple.count;
                }
            },
            actions:require('../../vuex/actions.js')
        },
        components:{
            'dust-button':require('../../components/simple/dust-button.vue')
        },
        methods:{
            onclick:function(){
                console.log(this);
                this.toActionSimpleClick();
                alert("被点击"+this.clickToast);
            }
        },
        computed: {
            // 计算属性
            c_total:function(){
                return this.$store.state.Simple.count;
            }
        }
    };
</script>