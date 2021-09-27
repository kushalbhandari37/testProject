const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    author:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('Article',articleSchema);