var Vue = require('vue');
var Router=require('vue-router');
var routerConfig=require('./routerConfig.js');
var APP=require('./components/App.vue');

Vue.use(Router);
var router=new Router();
routerConfig(router);
router.start(Vue.extend(APP),"#app");

