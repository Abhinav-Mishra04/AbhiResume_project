const mongoose = require('mongoose')


const OtpSchema = new mongoose.Schema({
  
    u_id : {
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true 
    },
    otp : {
        type: String,
        required : true
    },
    time : {
    type : Number,
    required : true
    }
 
    
})

const OTP = mongoose.model('OTP' ,  OtpSchema)

module.exports = OTP;