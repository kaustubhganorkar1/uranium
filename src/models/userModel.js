const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    // Write the schema content
    name:String,
    balance:{
        type:Number,
        default:100,
        require:true
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:['male', 'female', 'other'],
        require:true
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users
