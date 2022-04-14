const authorModel = require("../models/authorModel")


const createAuthor = async (req, res)=>{
    let Data = req.body
    if(Data.author_id){
        console.log(Data);
        let author = await authorModel.create(Data)
        res.send({createdAuthor:author})
    }
    else{
        res.send({msg:"Author is not created please add auther id"})
    }
    
}

module.exports.createAuthor = createAuthor