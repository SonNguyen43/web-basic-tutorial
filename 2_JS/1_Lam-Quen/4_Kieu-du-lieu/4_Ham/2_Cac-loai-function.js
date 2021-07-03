/**
 * DECLARATION FUNCTION | CHẤP NHẬN HOISTING
 */
function func_1() {

}


/**
 * EXPRESSION FUNCTION | KHÔNG CHẤP NHẬN HOISTING
 */
 var func_2 = function() {

}
// call back
setTimeout(() => {
    
}, 1000);
// obj
var obj = {
    myFunc: function() {

    }
}