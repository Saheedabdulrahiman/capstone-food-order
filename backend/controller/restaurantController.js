const Restaurant = require('../models/Restaurant.model');

const addRestaurant = async (req, res) => {
  try {
    const { name, image, location, openingHours, closingHours } = req.body;

    const newRestaurant = new Restaurant({
      name,
      image,
      location,
      openingHours,
      closingHours,
    });

    await newRestaurant.save();

    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error('Error adding restaurant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//query all restaurants and list

const listAllRestaurant = async (req,res) => { 
  try {
    const RestaurantData = await Restaurant.find();
    res.status(200).json(RestaurantData)
  } catch (error) {
   res.status(400).json({
    status:"fail to get restaurants",
    message:error.message
   })
  }
 
  
 }

//upate the restaurant details
 const updateRestaurantDetail = async (req,res) => { 
  
  try {
   const updateRestaurant = await Restaurant.findByIdAndUpdate(req.params.id,
     req.body,
     {new:true, runValidator:true});
     res.status(200).json({
     status:"success",
     data:{
      updateRestaurant
     }
   })
 } catch (error) {
   res.status(404).json({
     status:"fail",
     message:error.message
   })
 }

}

const deleteRestaurant = async (req,res) => { 
  try {
   await Restaurant.findByIdAndDelete(req.params.id)
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

module.exports = {
  addRestaurant,
  listAllRestaurant,
  updateRestaurantDetail,
  deleteRestaurant
};
