const express = require("express");
const cors = require('cors');
const db = require('./server');
const foodItemRoute = require("./routes/foodItemRoute");
const foodArticleRoutes = require('./routes/foodArticleRoutes')
const restaurantRoutes = require("./routes/restaurantRoutes")
const authRoutes = require("./routes/authRoutes")


const app = express()
app.use(express.json());
app.use(cors());

app.use("/api/v1/admin",foodItemRoute);
app.use("/api/v1/admin",foodArticleRoutes)
app.use("/api/v1/admin",restaurantRoutes)
// app.use("/api/v1/admin",authRoutes) 
  


app.use("/api/v1/user",foodArticleRoutes)   
app.use("/api/v1/user",foodItemRoute)             
app.use("/api/v1/user",restaurantRoutes)             
app.use("/api/v1/user",authRoutes)             


app.use(cors({
  origin: 'http://localhost:5173', // Your client's origin
  credentials: true, // Include credentials like cookies, authorization headers, etc.
}));

  const port = 3005
app.listen(port,() => { 
    console.log(`App running at ${port}...`)
 })