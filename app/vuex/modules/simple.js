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
