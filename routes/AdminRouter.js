const express = require('express');
const { adminView, createArticleView, saveNewArticle,updateArticleDb, updateArticleView,deleteArticle, readArticleView } = require('../controllers/AdminController');
const {checkSign} = require('../middlewares/auth.js');
const router = express.Router();
const {upload} = require("..//middlewares/upload.js");


/* GET home page. */
router.get('/',checkSign,adminView );

//create- new article view

router.get("/createArticle",checkSign,createArticleView);

//save it

router.post("/addNewArticle",checkSign,upload, saveNewArticle);

//update- article view
router.get('/updateArticle/:id',checkSign,updateArticleView);

//update article in db
router.post('/updateArticle',checkSign,upload, updateArticleDb);

//we want delete article
router.get('/deleteArticle/:id',deleteArticle);

//read article
router.get('/readArticle/:id',readArticleView);

module.exports = router;