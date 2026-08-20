import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:String,
        default:0,
        required:true
    },
    worksInHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
},{})


export const Doctor = new mongoose.model('Doctor',doctorSchema)