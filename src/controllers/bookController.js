const { count } = require("console");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let Data= req.body
    if(Data.author_id){
        console.log(Data);
        let book = await BookModel.create(Data)
        res.send({createBook:Data})
    }
    else{
        res.send({msg:"book not created: Please add author id"})
    }
}



const getAuthorOfBook = async (req, res)=>{
    let authorID =await authorModel.find({
        author_name :"Chetan Bhagat"
    }).select({author_id:1})
    console.log(authorID[0].author_id);
    let BookList = await BookModel.find({
        author_id : authorID[0].author_id
    }
    )
    res.send({Booklist: BookList})
}


const BookTS = async (req, res)=>{
    const theTwoState = await BookModel.find({bookName:"Two States"})
    const AuthorID = theTwoState[0].author_id
    console.log(theTwoState);
    const authorName = await authorModel.find({ author_id: AuthorID}).select({authorName:1, _id:0})
    const updatePrice = await BookModel.findOneAndUpdate({bookName:"Two States"}, {price:100}, {new:true}).select({price:1, _id:0})
    res.send({msg:authorName, updatePrice})
}

const findBook = async (req, res)=>{
    let AllId = await BookModel.find({
        price : {$gt:50, $lt:100 }
    }).select({author_id:1})
    const getId = AllId.map(e=>e.author_id)
    let temp=[]
    for(i=0; i<getId.length;i++){
        let b = getId[i]
        const authorName = await authorModel.find({author_id:b}).select({author_name:1})
        temp.push(authorName)
    }
    const theName = temp.flat()
    res.send({msg:theName})

}


const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.getAuthorOfBook = getAuthorOfBook
module.exports.BookTS=BookTS
module.exports.findBook = findBook
