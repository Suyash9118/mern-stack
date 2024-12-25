import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongo db");
}).catch((err)=>{
    console.log("Error"+ err);
})

const app = express();
app.listen(3000, () => {
    console.log("Server is running on port 3000!!!");
})
//EjuBA91SFLQCUOyJ  mishrasuyash58
// database user password =>r95z5JvK3Y87mErH