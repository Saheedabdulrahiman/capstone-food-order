const FoodArticle = require('../models/FoodArticle.model');

// Controller function to add a new food article
const addFoodArticle = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, image, description, category } = req.body;

    // Create a new FoodArticle instance
    const newFoodArticle = new FoodArticle({
      name,
      image,
      description,
      category,
    });

    // Save the new food article to the database
    await newFoodArticle.save();

    // Respond with the newly created food article
    res.status(201).json(newFoodArticle);
  } catch (error) {
    console.error('Error adding food article:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//get food article
const listAllArticles = async (req,res) => { 
  try {
    const articleData = await FoodArticle.find();
    res.status(200).json(articleData)
  } catch (error) {
    res.status(404).json({
      status:"failed to fetch food article",
      message:error.message
    })
  }
 }

 //upate the food article
 const updateFoodArticle = async (req,res) => { 
  
  try {
   const updateArticle = await FoodArticle.findByIdAndUpdate(req.params.id,
     req.body,
     {new:true, runValidator:true});
     res.status(200).json({
     status:"success",
     data:{
       updateArticle
     }
   })
 } catch (error) {
   res.status(404).json({
     status:"fail",
     message:error.message
   })
 }

}
//delete article
const deleteArticle = async (req,res) => { 
  try {
   await FoodArticle.findByIdAndDelete(req.params.id)
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
  addFoodArticle,
  listAllArticles,
  updateFoodArticle,
  deleteArticle
};