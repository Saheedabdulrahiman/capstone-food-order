const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  openingHours: {
    type: String,
    required: false,
  },
  closingHours: {
    type: String,
    required: false,
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
