const Article = require('../models/Article');

module.exports = {
    //Create new article
    create: async (req,res) =>{
        try {
            const data = req.body;
            const article = new Article(data);
            await article.save();
            return res.json("Article Posted Successfully");
            
        } catch (error) {
            console.log(error);            
        }
    },
    //Get article detail with comments
    getArticle: async (req,res) => {
        try {
            const articleId = req.params.id;
            const data = await Article.findById(articleId).populate('comments').exec();
            return res.json(data);
            
        } catch (error) {
            console.log(error);            
        }
    },

    
    //Gets articles having one or more than one comments
    allArticles: async (req,res) => {
        const data = await Article.find({comments:{$ne:[]}}).populate('comments');        
        res.json({data});
    },

    //Gets article Ids of specific Author
    authorArticles: async (req,res) => {
        const authorName = req.params.authorName
        const data = await Article.find({author:authorName});        
        const articleIds = data.map(article=> article._id )
        res.json({articleIds});
    },
}