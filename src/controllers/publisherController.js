const publisher = require("../models/publisherModel")

const createPublisher = async(req, res)=>{
    const data = req.body
    const newPublisher = await publisher.create(data)
    console.log(newPublisher);
    res.send({createdPublisher: newPublisher})

}

module.exports.createPublisher = createPublisher