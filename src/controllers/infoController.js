const {StatusCodes}=require('http-status-codes');


const info=(req,res)=>{
     return res.status(StatusCodes.OK).json({
        success:"ok",
        message:"API Is LIve",
        error:{},
        data:{}
     })
}

module.exports={
    info
}