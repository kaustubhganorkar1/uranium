const mongoose = require('mongoose')


const batchesSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    size:Number,
    program:{
        type:String,
        require:true,
        enum:["frontend", "backend"]
    }
})

module.exports = mongoose.model('Batch', batchesSchema)