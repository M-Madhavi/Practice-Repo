const cart = ["shirt", "dress"]
const validateCart = () => true
//attaching 
const promise = craeteOrder(cart)
console.log("respromiseolved", promise)
promise.then((data) => {
    console.log("resolved", data)
}).catch((err) => console.log(err.message))

function craeteOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //createOrder
        //validateCart
        //orderId
        if (!validateCart()) {
            const err = new Error("cart is not Valid")
            reject(err)
        }
        //create orderId
        const order = '12345'
        if (order) {
            console.log("resolved", cart)
            resolve(order)
        }

    })

    return pr
}

craeteOrder(cart)