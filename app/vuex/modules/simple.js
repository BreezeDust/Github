/**
* @Author: BreezeDust
* @Date:   2016-04-07
* @Email:  breezedust.com@gmail.com
* @Last modified by:   BreezeDust
* @Last modified time: 2016-04-10
*/



var MUTATION=require("../mutation-types");

function Simple(){

}
Simple.state={
    count:0
}
Simple.mutations={
    [MUTATION.SIMEPLE_CLICK](state){
        Simple.state.count++;
        console.log(Simple.state.count);
    }
}
module.exports=Simple;
