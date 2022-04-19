const batchModel = require('../models/batchesModel')


const createBatches = async (req, res)=>{
    const Data = req.body
    const createdBatch = await batchModel.create(Data)
    console.log(Data);
    res.send({msg:"batch created!",
              createdBatch:createdBatch 
    })


}

module.exports.createBatches= createBatches