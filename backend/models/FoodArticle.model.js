const mongoose = require('mongoose');

const foodArticleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // Assuming you store the image URL
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Other'],
  },
});

const FoodArticle = mongoose.model('FoodArticle', foodArticleSchema);

module.exports = FoodArticle;