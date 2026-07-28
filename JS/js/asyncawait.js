

//promise 
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved")
    }, 10000);

})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise P2is resolved")
    }, 10000);

})




// //always returns a promise
// async function getData(){
//     // return "Hello"

//      return p
// }
async function getData() {
    // return "Hello"
    //js engine will not wait for promise to get reolved for normal way of handling - then and catch
    p.then((res) => console.log("res", res))
    console.log("this will be consoled first");

    return p
}

getData()
// const dataPromise = getData()
// //check
// dataPromise.then((res) =>console.log("res",res))
// console.log("data",dataPromise);



//async and await are used to handle promises
//async function returns a promise

async function handlePromise() {
    const value = await p; //await is a keyword inside only async fun
    console.log("val", value);
    console.log("this will be consoled after promise is resolved");
    const val2 = await p2
    console.log("all will / or both of the them are resolved at the same time");
    console.log("val2", val2);


}
handlePromise() 
// will suspend(fun execution is suspended) and will move out the callstack and will not block the main thread 
// - once the execution of the promises is complete it will comeback in the callstack agin(and starts executing from the place where it left) and execute the resolved promisees 

const api = 'https://api.github.com/users/M-Madhaviqqqq'

async function handleFetch() {

    //fetch() fun -is a a promises  => returns Response object(readable stream)  => Response.json() - is a promise => when resolved it gives the Jsonvalue
    
    try{
        const apiRes = await fetch(api)
        if (!apiRes.ok) {
            throw new Error(`HTTP Error: ${apiRes.status}`);
        }
        console.log("apiRes",apiRes);
        const promiseJsonValue = await apiRes.json()
        console.log("promise",promiseJsonValue);
    }catch(err){
        console.log("err",err);

    }
}
handleFetch() // or handleFetch.catch()


//error handlling in async await - try{}catch{}
