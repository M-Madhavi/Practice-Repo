// what are the callback fun

setTimeout(() => {
    console.log("timer");

}, 5000)
function x(param) {
    console.log(" param-x", param);
    param()

} x(function y() {
    console.log(" param-y");
}) // y is callback fun


// js is synchronous and singlethreaded language

//Garbage collectors and 
//remove Eventlisteners - heaavy it takes memory (forms closures)


//callback hell - callbacks used for aasync opertaions

const cart = ["shirt", "dress", "makeover"]

// api.createOrder()
// api.createPayment()

api.createOrder(cart, function (params) {
    api.createPayment(() => {
        api.showOrdersummary(() => {
            api.updateWallet()
        })
    })

})

//Inversion of control

api.createOrder(cart, function (params) {
    api.createPayment(() => { // we gave control of createPayment to createOrder - and we don't know what's happening
        
    })

})

