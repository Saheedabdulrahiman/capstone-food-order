const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  nameOfResturent: { type: String, unique: false, },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Other'],
    required: true,
  },
  // Other properties if needed
});

module.exports = mongoose.model("FoodItem", foodItemSchema);
