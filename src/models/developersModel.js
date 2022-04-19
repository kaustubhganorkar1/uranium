const mongoose  = require('mongoose')

const developerSchema = mongoose.Schema({
    name:String,
    gender:{
        type:String,
        enum:['male','female','other'],
        require:true
    },
    percentage:Number,
    batch:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        require:true
    }
},
    { timestamps: true }
)


module.exports = mongoose.model('Developer', developerSchema)