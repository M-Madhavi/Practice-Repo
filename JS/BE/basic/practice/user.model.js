import mongoose from 'mongoose'
import momgoose from 'mongoose'

const userSchema = new momgoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },


}, { timestamps: true })

export const user = mongoose.model('User', userSchema)