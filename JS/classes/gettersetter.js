class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `encrypt password ${this.password + 'abc'}`
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(val) {
        this._email = val
    }

    get mypassword(){
        return this._password.toUpperCase() + 'abc'
    }

    set mypassword(val){
        return this._password = val
    }
}

const user = new User('test', 'test@gmail.com', '123')
console.log(user.encryptPassword());
console.log(user.email);
console.log(user.password);
// console.log(user.mypassword,'myyyyyy');
console.log(user);
