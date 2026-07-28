//Async operations

const cart = ["shirt", "dress"]

createOrder(cart)

proceedToPayment(orderId)
showOrderSummary(paymentInfo)
updateWalletBalance(balance)

const promise = createOrder(cart) // => will return promise -> {data: undefined} later it will have {data:orderDetails}
//attacah a callback function
//pending , fulfilled, rejected
//with Promise chain
promise.then((orderId) => {
    return proceedToPayment(orderId)
}).then((function (paymentInfo) {
    return showOrderSummary(paymentInfo)
})).then((balance) =>
    updateWalletBalance(balance)
).catch((err) => err)






// Promise a place holder which will be filled with a value later
//promise is an object that repressents the eventual completion of a async operation

const api = 'https://api.github.com/users/M-Madhavi'
const user = fetch(api) // will return promise
console.log(user)// will return promise

user.then((user) => console.log(user))