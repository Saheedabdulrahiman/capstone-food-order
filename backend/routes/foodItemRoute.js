const express = require('express');
const router = express.Router();
const foodItemCtr  = require("../controller/foodItemController")
const authController = require('../controller/authController')

// POST route to create a new food item
router.post('/addFood', foodItemCtr.createFoodItem);


// You can add more routes for other food-related operations if needed


// router.get('/list-items',foodItemCtr.listFoodItem)

router.patch('/list-items/:id',foodItemCtr.updateFoodItem)

// router.delete('/list-items/:id',authController.restrict('admin'),foodItemCtr.deleteAFoodItem)

router.route('/list-items')
.get(foodItemCtr.listFoodItem)

router.route('/list-items/:id')
  .delete  (foodItemCtr.deleteAFoodItem);

module.exports = router;