/**
 * Cách tạo hàm
 */
var func = function() {
    alert('Function 1')
}

function showDialog() {
    alert('Function 2')
}

/**
 * Truyền tham số
 */
function writeLog(mess, action) {
    console.log(mess, action);
}
writeLog('Do you want delete this item ?', 'Delete')

/**
 *   ARGUMENTS
 */
function argumentFunc() {
    console.log(arguments);

    for (const item of arguments) {
        console.log(item);
    }
}
argumentFunc('LOG 1', 'LOG 2', 'LOG 3')

/**
 * Return | mặc định nếu hàm không có trả về => undefined
 */