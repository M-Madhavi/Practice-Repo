
class User {
    constructor(username,email,password){
     this.username =  username
     this.email = email
     this.password = password
    }

    encryptPassword(){
        return `this is encrypted password ${this.password}abc`
    }

    changeUsername(){
        return `the username is ${this.username.toUpperCase()}`
    }


}

//whenevr you call new then the constructor will be called first
const userone = new User('userone','username@gmail.com','passthevalue')
console.log("user",userone.changeUsername());

//behind the scene

// function User(username,email,password){
//     this.username =  username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword =  function(){
//     return `this is encrypted password ${this.password}abc`
// }
// const fun = new User('funone','fun@gmail.com','funthevalue')
// console.log("user",fun.encryptPassword());