const FoodItem = require ("../models/FoodItem.model.js")
const createFoodItem = async (req, res) => {
    try {
      // Extracting values from the request body
      const { image, name, nameOfRestaurant, price, category } = req.body;
  
      // Creating a new food item instance
      const newFoodItem = new FoodItem({
        image,
        name,
        nameOfRestaurant,
        price,
        category,
      });
  
      // Saving the new food item to the database
      const savedFoodItem = await newFoodItem.save();
  
      res.status(201).json(savedFoodItem);
    } catch (error) {
      console.error('Error creating food item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
 


  //query for the list of food items

  const listFoodItem = async(req,res)=>{
    try {
      const foodData = await FoodItem.find();
      res.status(200).json(foodData)
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message
      })
    }
  }

//edit or update the food item 

const updateFoodItem = async (req,res) => { 
  
   try {
    const updateItem = await FoodItem.findByIdAndUpdate(req.params.id,
      req.body,
      {new:true, runValidator:true});
      res.status(200).json({
      status:"success",
      data:{
        updateItem
      }
    })
  } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message
    })
  }
 
}

//delete a food item

const deleteAFoodItem = async (req,res) => { 
  try {
   await FoodItem.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status:"succes",
      data:null
    })   
  } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message
    })
  }
 
}

//show the saved food items

  module.exports = {
    createFoodItem,
    listFoodItem,
    updateFoodItem,
    deleteAFoodItem
    // You can add more controller functions related to food items here if needed
  };