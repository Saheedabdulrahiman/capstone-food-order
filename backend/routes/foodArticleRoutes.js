const express = require('express');
const router = express.Router();
const foodArticleController = require('../controller/foodArticleController');

// Route for adding a new food article
router.post('/food-articles', foodArticleController.addFoodArticle);

router.get('/list-food-articles', foodArticleController.listAllArticles)

router.patch('/list-food-articles/:id',foodArticleController.updateFoodArticle)

router.delete('/list-food-articles/:id',foodArticleController.deleteArticle)

module.exports = router;