const developerModel = require('../models/developersModel')

const createDeveloper = async (req,res)=>{
    const Data= req.body
    const createdDeveloper = await developerModel.create(Data)
    res.send({msg:"Developer Created !",
             createdDeveloper: createdDeveloper         
    })
    console.log(developerModel.find({_id:createdDeveloper._id}).populate('batch'))
}

module.exports.eligableDevelopers = async (req,res)=>{
    const Data = await developerModel.find({gender:'female', $or:[{percentage:{ $gt: 70 } }, {percentage:{ $eq: 70 } } ] })
    res.send({msg:"eligable Developers !",
             eligableDevelopers: Data
    })

}

module.exports.queryDeveloper = async (req,res)=>{
    const percentage = req.query.percentage
    const program = req.query.program
    const requiredDeveloper = await developerModel.find({percentage:percentage}).populate('batch')
     res.send({data : requiredDeveloper})
    
}

module.exports.createDeveloper = createDeveloper