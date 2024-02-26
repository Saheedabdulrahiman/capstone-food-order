const mongoose = require("mongoose")
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate:[validator.isEmail,"please provide a valid email"],

    },
    photo:{
        type:String,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    confirmPassword:{
        type:String,
        required:[true,"please enter the conform password"],
        validate:{
            validator: function(el){
                return el === this.password;
            },
            message:'password are not same'
        },
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    this.confirmPassword = undefined;
    next()
})

const User = mongoose.model("User",userSchema);
module.exports = User; 