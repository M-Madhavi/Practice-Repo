//setteld  - is it got result (it can be either resolved/rejected)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success")
    }, 3000)
    // setTimeout(() => {
    //     reject("P1 rejected")
    // }, 1000)

})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 resolved")
    }, 1000)
    // setTimeout(() => {
    //     reject("P2 rejected")
    // }, 1000)
})
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P4 resolved")
    }, 1000)
    // setTimeout(() => {
    //     reject("P4 rejected")
    // }, 1000)
})
const api = 'https://api.github.com/users/M-Madhavi'
const p3 = async function () {

    try {
        const apiRes = await fetch(api)
        if (!apiRes.ok) {
            throw new Error(`HTTP Error: ${apiRes.status}`);
        }
        console.log("apiRes", apiRes);
        const promiseJsonValue = await apiRes.json()
        console.log("promise", promiseJsonValue);
        return promiseJsonValue
    } catch (err) {
        console.log("err", err);

    }
}
// p3()


//promise.all - suppose we need to make parallael api calls
//iterable  - will take array of promises - itmakes parallel calls -promise.all([p1,p2,p3])
//if all the promises are successful - [val1,val2,val3] - will wait for all the promises to get finished
//if one of the promise get rejected - as soon as any of the promise is rejected then- promise.all will get rejected - output - error(it will not wait for other promises once it sees an error in any one of them)
// ALL OR NONE - FAIL FAST


const all = Promise.all([p1, p2, p3(), p4]).then((res) => console.log("all promise api", res)).catch((err) => console.log(err))















// If you want all the responses of the promise even if anyone of them Fails
//Promise.allSettled()

//will wait for all promises to get settled
//output - [res,err,res]


const allSettled = Promise.allSettled([p1, p2, p3(), p4]).then((res) => console.log("all promise api", res)).catch((err) => console.log(err)
)









//Promise.race([]) - the promise which settles first then that would be the output of that promise - even if it the error/success
//output = [val1] or [err1]



const race = Promise.race([p1, p2, p3(), p4]).then((res) => console.log("all promise api", res)).catch((err) => console.log(err))












//Promise.any([]) - similar to race - it will wait for the first successful promise - [val1]
//seeking for fist success
// what if everything fails - then resilt will be aggegated err - [err1,err2,err3]

const any = Promise.any([p1, p2, p3(), p4]).then((res) => console.log("all promise api", res)).catch((err) => console.log(err.errors))
