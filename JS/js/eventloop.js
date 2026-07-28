console.log("start")

setTimeout(() => {//callback queue or task queue
    console.log("CB timer");

}, 5000)

fetch("https://api.netflix.com").then(function cbF() { // micro stack - promises,networkcalls,mutation observers - priority
    console.log("Netflix cbf")
})
console.log("END");

//logs
//start
//END
//Netflix cbf
//CB timer
