import mongoose from 'mongoose'
const producrSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        required: true,
        type: String
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: znumber,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    owener: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

    ,
}, { timestamps: true })

export const Product = mongoose.model('Product', producrSchema)