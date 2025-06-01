const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.DB_URI || 'mongodb://localhost:27017/contackDetails';

const connectDB= async ()=>{
    try{
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");

    }
    catch(err){
        console.error("MongoDB connection failed:", err.message);
    }
}

module.exports= connectDB