

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    //counter
    const requiredHeader = req.headers["isfreeappuser"]
    console.log(requiredHeader);
    console.log(req.headers);
    if( requiredHeader){
        next()
    }
    else{
        res.send({msg:"Error Occured!,the request is missing a mandatory header",
                  
    })
    }

    // if( requiredHeader==='true'){
    //     next()
    // }
    // else{
    //     res.send({msg:"Error Occured!,the request is missing a mandatory header",
                  
    // })
    // }
    
}


module.exports.mid4= mid4
