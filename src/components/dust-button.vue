<style xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    .dust-button{
        background-color: #abc123;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
    }
    .dust-button:hover{
        background-color: #000000;
        color: #ffffff;
    }
</style>
<template>
    <div class="dust-button"
         v-bind:style="{width:width+'px',height:height+'px',lineHeight:height+'px'}"
         v-on:click="onclick">
        {{name}}
    </div>
</template>

<script>
    module.exports = {
        props: {
            name: {
                type: String,
                default: "button"
            },
            width: {
                type: Number,
                default: 150
            },
            height:{
                type: Number,
                default: 25
            }
        },
        methods:{
            onclick:function(){
                this.$dispatch('click-msg');
            }
        }
    };
</script>