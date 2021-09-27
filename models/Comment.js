const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    user:{
        type:String,
        required:true        
    },
    article:{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    comment:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Comment',commentSchema);