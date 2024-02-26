const express = require('express');
const router = express.Router();
const restaurantController = require('../controller/restaurantController');


// Route for adding a new restaurant
router.post('/add-restaurants', restaurantController.addRestaurant);

router.get('/list-restaurants' ,restaurantController.listAllRestaurant);

router.patch('/list-restaurants/:id',restaurantController.updateRestaurantDetail)

router.delete('/list-restaurants/:id',restaurantController.deleteRestaurant)

module.exports = router;
