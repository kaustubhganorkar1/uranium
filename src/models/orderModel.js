const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const otherSchema = mongoose.Schema({
    userId:{
        type: ObjectId,
        require:true
    },
    productId:{
        type:ObjectId,
        require:true
    },
    amount:Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    date: String
})


module.exports = mongoose.model('Order', otherSchema)