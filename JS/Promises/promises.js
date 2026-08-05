const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("PromiseOne resolved");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 settimeout");
        resolve()
    }, 2000)
}).then(() => {
    console.log("Promise 2 resolved");

})
const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 3 settimeout");
        resolve({ user: "Madhu", email: "example.com" })
    }, 1000)
}).then((user) => {
    console.log("Promise 3 then", user);

})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            console.log("Promise 4 settimeout");
            resolve({ user: "Madhu", email: "example.com" })

        } else {
            reject("Error: something went wrong")
        }

    }, 1000)
})

// const user = promiseFour.then((user) =>{
//     console.log("promise 4",user);
//     return user

// })
// console.log("4",user);

promiseFour.then((user) => {
    console.log("promise 4", user);
    return user.email

}).then((useremail) => {
    console.log("promise 4", useremail);

}).catch((err) => {
    console.log("error", err);
}).finally(() => {
    console.log("the promise is either resolved or rejected");

})
// console.log("4",user);


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            console.log("Promise 4 settimeout");
            resolve({ user: "Tae", email: "example.com" })

        } else {
            reject("Error: JS went wrong")
        }

    }, 1000)
})

async function consumePromisefive() {
    try {
        const res = await promiseFive
        console.log("res", res);
    } catch (err) {
        console.log("consumePromisefive", err);

    }


}
consumePromisefive()

async function getAllUsers() {

    try{
const response = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await response.json()
console.log("fetch",data);

    }catch(err){
console.log("fetch err",err);

    }
    
}
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users").then((res) =>{
    return res.json()
}).then((aboveresponse)=>{
    console.log("aboveresponse",aboveresponse);
    
}).catch((err) =>{
    console.log(err);
    
})

console.log("last");
