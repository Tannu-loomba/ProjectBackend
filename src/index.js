// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

console.log("MongoDB URI:", process.env.MONGODB_URI);  // Debug

connectDB()






















/*
creating database connection in same file................................................
import express from "express";
const app=express();

;(async()=>{
    try
    {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);


        app.listen(process.env.PORT,()=>{
            console.log(`APP IS RUNNING ON PORT: ${process.env.PORT}`)
        })
    }
    catch(err)
    {
        console.error(err);
        throw err;
    }
})();
*/