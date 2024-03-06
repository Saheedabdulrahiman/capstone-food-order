const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://saheeda342:FoGPcBlLtywa8wYN@cluster0.l6faj8y.mongodb.net/";
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on("connected",() => {   console.log('Connected to MongoDB atlas');})

// Event handling for connection errors
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
  // Event handling for disconnection
  db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });




module.exports = db;