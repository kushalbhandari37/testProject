module.exports = {
    //comes here after successfully validated
    afterValidated: (req,res)=>{
        return res.json("User Validated Successfully");
    }
}