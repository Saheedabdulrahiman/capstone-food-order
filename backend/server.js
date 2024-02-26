const mongoose = require("mongoose");

const dbUrl = "mongodb://127.0.0.1:27017/food-order-app";
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on("connected",() => {   console.log('Connected to MongoDB');})

// Event handling for connection errors
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
  // Event handling for disconnection
  db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });




module.exports = db;