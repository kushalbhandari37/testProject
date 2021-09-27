
exports.authenticateUser = (req,res,next) => {
    const token = `${process.env.ACCESS_TOKEN}`;
    const apiToken = req.query.api_key;
    if(token !== apiToken){
        return res.json({message:'Unauthorized. Token key does not match'})
    }
    next();
}
