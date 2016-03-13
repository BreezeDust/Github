/**
 * Created by BreezeDust on 16/3/13.
 */
var a=10;
var Vue = require('vue');
var app = new Vue({
    el: '#app',
    data: {
        view: 'page-a'
    },
    components: {
        'page-a': function (resolve) {
            require(['./views/test/test.vue'], resolve)
        }
    }
});

function route () {
    app.view = window.location.hash.slice(1) || 'page-a'
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
