// keyword: JS string methods

// 1. length - length()
// 2. find index - indexOf('gia_tri_tim) - search('gia_tri_tim)
// 3. cut string - slice(from_index, to_index)
// 4. replace - replace('gia_tri_tim','gia_tri_thay_doi')
// 5. upper case - uppercase()
// 6. lower case - lowercase()
// 7. trim - trim()
// 8. splip - splip(diem_chung)
// 9. get a character by index - charAt(index)


var myString = 'Hoc JS tai JS F8 JS!'

/**
 * 1 LENGTH
 */
console.log(myString.length);

/**
 * 2 FIND INDEX
 * - kết quả -1 là không tìm thấy
 * - chỉ tìm thấy kết quả đầu tiên, tham số thứ 2 dùng để bỏ qua kết quả
 * đầu tiên để tìm kết quả thứ 2
 * - hàm search giống với indexOf nhưng không hỗ trợ tham số thứ 2 nhưng
 * tìm kiếm được dưới dạng biểu thức chính quy
 */
console.log(myString.indexOf('JS', 6));
console.log(myString.lastIndexOf('JS'));
console.log(myString.search('JS'));

/**
 * 3 CUT STRING
 * - cắt từ trái sang phải lấy hết hoặc lấy bao nhiêu kí tự
 * - cắt từ phải sang trái
 */
console.log(myString.slice(4,6));
console.log(myString.slice(4));
console.log(myString.slice(0));

console.log(myString.slice(-6,-4));

/**
 * 4 REPLACE
 * - chỉ thay đổi 1 ký tự
 * - muốn thay đổi tất cả ký tự trong chuỗi cần use biểu thức chính quy
 */
console.log(myString.replace('JS','Javascript'));
console.log(myString.replace(/JS/g,'Javascript'));

/**
 * 5 UPPERCASE - LOWERCASE
 */
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

/**
 * 6 TRIM
 */
console.log(myString.trim());

/**
 * 7 Split
 * - cắt chuỗi thành Array
 * - cần truyền vào điểm chung
 */
var language = 'PHP, JS, CSS, HTML'
var js = 'Javascript'
console.log(language.split(','));
console.log(js.split(''));

/**
 * 9
 */
var myString2 = 'Sơn Nguyễn'
console.log(myString2.charAt(1));
console.log(myString2['1']);
