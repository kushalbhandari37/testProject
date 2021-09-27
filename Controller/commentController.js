const Comment = require('../models/Comment');
const Article = require('../models/Article');

module.exports = {
    //Post a comment
    postComment: async (req,res) => {
        const article = req.params.articleId;
        const data = req.body;
        const comment = new Comment({article,user:data.user,comment:data.comment})        
        await comment.save();
        await Article.findByIdAndUpdate(article,{
            $push: {comments:comment}
        })
        res.json("Commented Successfully");
    },

    //Gets the total comments of an article
    totalComments: async (req,res) => {
        const article = req.params.articleId;        
        const data = await Article.findById(article)
        const totalComments = data.comments.length;
        res.json({totalComments});
    }    
}