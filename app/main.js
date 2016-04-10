/**
* @Author: BreezeDust
* @Date:   2016-03-14
* @Email:  breezedust.com@gmail.com
* @Last modified by:   BreezeDust
* @Last modified time: 2016-04-10
*/



var Vue = require('vue');
var Router=require('vue-router');
var routerConfig=require('./routerConfig.js');
var APP=require('./components/App.vue');

Vue.use(Router);
var router=new Router();
routerConfig(router);
router.start(Vue.extend(APP),"#app");

