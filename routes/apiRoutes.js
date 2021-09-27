const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const articleController = require('../controller/articleController');
const commentController = require('../controller/commentController');
const userValidator = require('../Middleware/Validation/inputValidator');
const authentication = require('../Middleware/Validation/authentication');

//Validate User Route
router.post('/user', [userValidator.validateUser,authentication.authenticateUser], userController.afterValidated);


//Articles Route
router.get('/article/:id', articleController.getArticle);
router.get('/articles', articleController.allArticles);
router.get('/articles/:authorName', articleController.authorArticles);
router.post('/article/create', articleController.create);

//Comments Route
router.post('/comment/:articleId',commentController.postComment);
router.get('/comments/:articleId',commentController.totalComments);

//Food Order Route
router.post('/food',(req,res)=>{
    console.log(req.body);
    res.render('cart',{data:req.body.food});
})



module.exports = router;