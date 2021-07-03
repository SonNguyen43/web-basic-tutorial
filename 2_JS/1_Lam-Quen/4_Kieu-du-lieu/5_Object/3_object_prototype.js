function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
}

/** PROTOTYPE */
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return `${this.className} Fullstack`
}

var student = new User('Sơn', 'Nguyễn', 'avatar_1')
console.log(student.className);
console.log(student.getClassName());
