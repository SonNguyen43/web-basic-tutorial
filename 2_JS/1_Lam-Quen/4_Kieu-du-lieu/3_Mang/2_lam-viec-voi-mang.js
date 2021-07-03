/**
 *  Array methods
    1. toString()
    2. Join
    3. Pop - xóa phần tử cuối và trả về phần tử đã xóa, khi mảng không còn phần tử nào thì trả về undefine
    4. Push
    5. Shift - xóa phần tử đầu mảng và trả về phần tử đã xóa
    6. Unshift - thêm phần tử vào đầu mảng
    7. Splicing - xóa, cắt, chèn phần tử mới vào mảng
    8. Concat - nối arr
    9. Slicing - cắt
 */

var language = ['HTML', 'CSS', 'JS', 'PHP'];

console.log(language.toString());
console.log(language.join(), language.join(' - '));

console.log(language.pop(), language.length);

language.push('Node','OPS')
console.log(language);

language.unshift('First')
console.log(language);

// [ 'First', 'HTML', 'CSS', 'JS', 'Node', 'OPS' ]

// DELETE | param: start, deleteCount
language.splice(1, 2) // delete HTML và CSS
console.log(language);

// ADD | param: start, deleteCount, [elementAdd,...]
language.splice(1, 0, 'Second')
console.log(language);

console.log(language.slice(1,3));