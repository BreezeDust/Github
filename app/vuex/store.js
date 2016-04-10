var Vuex = require('vuex');
var Vue = require('vue');
var Simple = require('./modules/simple.js');
Vue.use(Vuex);
module.exports=new Vuex.Store({
  modules: {
    Simple
  }
})