const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true,
    },
    author_id:{
        type:String,
        required:true
    },
    price:Number,
    rating:Number 
   

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
