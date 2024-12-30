import userModel from "../models/user.model.js"
import validator from "validator"
import bycrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
}

//route for login
const login = async (req, res) => {
    try {
        const {email,password} = req.body;

        //checking if user exists
        const user = await userModel.findOne({email: email});
        if(!user){
            return res.json({success: false, message: "User does not exist"})
        }
        //checking password
        const validPassword = await bycrypt.compare(password, user.password);
        if(!validPassword){
            return res.json({success: false, message: "Invalid password"})
        }
        //creating token
        const token = createToken(user._id);
        res.json({success: true, message: "User logged in successfully", token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"})
    }
}

//route for register
const register = async (req, res) => {
    
    try {
        const{name,email,password} = req.body;
        //checking if user already exists

        const exists = await userModel.findOne({email: email});
        if(exists){
            return res.json({success: false, message: "User already exists"})
        }
        //validating email format using validator
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Invalid email format"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "Password is not strong enough"})
        }
        //hashing password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);
        //creating user
        const newUser = new userModel({name, email, password: hashedPassword});
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, message: "User created successfully", token})
        

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"})
    }
}

//route for adminlogin
const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, message: "Admin logged in successfully", token})
        } else{
            res.json({success: false, message: "Invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"})
    }
}

export { login, register, adminLogin }