import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({

    name:{
        type:String,
        requied:true
    },
    diagnosiedwith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
}, {

})

export const Patient = mongoose.model('Patient', patientSchema)