// 所有的action处理
var MUTATION=require("./mutation-types");
function toActionSimpleClick(store){
    store.dispatch(MUTATION.SIMEPLE_CLICK);
}

exports.toActionSimpleClick=toActionSimpleClick;