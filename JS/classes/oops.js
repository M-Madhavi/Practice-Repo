//object literal
const user = {
    user: "Harry",
    loginCount: 11,
    isLoggedIn: true,
    getUserDetails: function () {
        console.log(`user name is ${this.user}`);

    }
}
// console.log(user.getUserDetails());
//below is output - if you don't retrun anything from function then it will give undefined(since we are not sending any value back)
// got userdetail
// undefined


function User(userName,loginCount,isLoggedIn){
    this.user = userName
    this.loginCount = loginCount
    this.isLoggledIn = isLoggedIn
    // return this
}

//if you don't use new it will always overwrite the previous one
//1.new - will create a new object
//2.then it will call constructor function with new keyword which wraps all the argumets to pass
//3.then all the arguments get injected in this key word
const userOne = new User("one",1,true)
const userTwo = new User("two",2,true)

console.log("userone",userTwo);
