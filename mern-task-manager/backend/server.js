//create a file called gitignore so that we need not push nodemodule
//To get rid of The `uri` parameter to `openUri()` must be a string, got "undefined".
//use following lines of code
const dotenv=require("dotenv").config()
const express=require("express");

const mongoose=require("mongoose");
const app=express();
//hurko provides some port so we make env file to define port for now we create varaible
//env files should not be uploaded on github




const PORT = process.env.PORT || 9000
mongoose.connect
   (process.env.MONGO_URI)
   .then(()=>{
    app.listen(PORT,()=>{
         console.log(`Server is running on ${PORT}`);
         })
   })
   .catch((err)=>console.log(err))


//route
app.get("/",(req,res)=>{
res.send("Home page is sick");
})

