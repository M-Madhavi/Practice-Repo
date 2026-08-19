import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
}, {

})
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    custome: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['ORDERED','PENDING','CANCELLED','DISPATCHED','DELIVERED'],
        default:'ORDERED'
    }
}, { timestamps: true })

export const Order = mongoose.model('Order', orderSchema)