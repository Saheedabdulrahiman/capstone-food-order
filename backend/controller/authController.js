const { Model } = require("mongoose");
const User = require("../models/User.model.js");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const CustomError = require("../Utils/CustomError.js");

const signup = async (req,res) => { 
    try {
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword
        });
  const token = await jwt.sign({id:newUser._id},'secret-key')
        res.status(200).json(           
           { token,newUser
        }
           )
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const login  = async (req,res,next) => { 
    const {email,password}= req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        
    
 // Check if the password is correct
 const passwordMatch = await bcrypt.compare(password, user.password);
 if (!passwordMatch) {
   return res.status(401).json({ error: 'Invalid credentials' });
 }

   
    //create token 
    const token = await jwt.sign({id:user._id},'secret-key')

    return res.status(200).json({ 
      token,
      role:user.role,
    });
   

     
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

  }

    // // check email and passd exist
    // if(!email||!password){
    //     // return next( new AppError('please provide a email or password ',400));

    // }
    // //check user exist and passd correct
    // const user = await User.findOne({email}).select('+password');
    // if(!user||!(await user.correctPassword (password,user.password))){
    //     // return next(new AppError('incorrect email or password',401))
    // }
    // //create token 
    // const token = await jwt.sign({id:newUser._id},'secret-key')

    // res.status(200).json({
    //     status:"succes",
    //     token,
        
    // })

    


    //admin login




// exports.restrict = (roLe) =>{
//     return(req,res,next) =>{
//         if(req.user.role !== roLe){
//             const error = new CustomError('you do not have permission to perform this action',403);
//             next(error);
//         }
//         next()
//     }
// }

exports.restrict = (role) => {
    return (req, res, next) => {
      // Assuming you have stored user role in the request object after authentication
      const userRole = req.user.role;
  
      if (userRole !== role) {
        return res.status(403).json({ message: 'Forbidden: You are not authorized to perform this action' });
      }
  
      // If user has the required role, proceed to the next middleware
      next();
    };
  };
  


//   const adminLogin  = async (req,res,next) => { 
//     const {email,password}= req.body;

//     try {
//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//           return res.status(401).json({ error: 'Invalid credentials' });
//         }
        
    
//  // Check if the password is correct
//  const passwordMatch = await bcrypt.compare(password, user.password);
//  if (!passwordMatch) {
//    return res.status(401).json({ error: 'Invalid credentials' });
//  }

//      //create token 
//      if(user.role ==='admin'){
//       const token = await jwt.sign({id:user._id},'secret-key')

//       return res.status(200).json({ token });
//      }else{
//       return res.status(403).json({ error: ' you are not autherized' });
//      }
     
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//   }


module.exports = {
    signup,
    login,
    // adminLogin,
}


