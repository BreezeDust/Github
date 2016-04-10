module.exports=function(router){
    router.map({
        "page-a":{
            component: function (resolve) {
                // resolve 异步下载模块成功后的一个渲染回调（webpack为把整个app按组件拆分成块）
                require(['./views/simple/a.vue'], resolve);
            }
        },
        "page-b":{
            component: function (resolve) {
                require(['./views/simple/b.vue'], resolve);
            }
        },
    });
};
