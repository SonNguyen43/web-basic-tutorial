var myInfo = {
    name: 'Sơn',
    age: 23,
    sex: 1,
    getFullName: function() {
        return `${this.name} Nguyễn`
    }
}
myInfo.email = 'nbhson43@gmail.com'

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['name']);


var myKey = 'email'
console.log(myInfo[myKey]);


delete myInfo.sex
console.log(myInfo);

console.log(myInfo.getFullName());

// function -> phương thức/methods
// property -> thuộc tính