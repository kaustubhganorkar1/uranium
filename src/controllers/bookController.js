const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const createBook= async function (req, res) {
    let book = req.body
    let isAuthor = book.author
    let isPublisher =book.publisher
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    console.log(specificBook);
    if(book.author){
    if(book.publisher){
        if(!isAuthor){
            res.send({msg:"please send valid Author id"})
        }
        else if(!isPublisher){
            res.send({msg:"please add valid publisher id"})
        }
        else{
            const newBook = await bookModel.create(book)
            res.send({createdBook:newBook})
        }

    }
    else{
        res.send({msq:"no publisher id"})
    }
}
else{
    res.send({msg: "no auther id"})
}
    
}



const getAllbooks= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author')
    res.send({data: specificBook})

}

const updateBook = async (req, res)=>{
    console.log(req.params.id);
    const mybook =await bookModel.find({_id:req.params.id}).populate('publisher')
    if(mybook[0].publisher.name='Penguin'){
        const updateBook = await bookModel.updateOne({_id:req.params.id}, {$set:{isHardCover:true}} )
    }
    else if(mybook[0].publisher.name='HarperCollins'){
        

    }
    else{
        const updateBook = await bookModel.findOneAndUpdate({_id:req.params.id}, {$set:{isHardCover:false}} )
    }

    // const mybook2 =await bookModel.find({_id:req.params.id})
    console.log(mybook[0].publisher.name);

    res.send({updatedBook:await bookModel.find({_id:req.params.id})})

}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getAllbooks=getAllbooks
module.exports.updateBook = updateBook