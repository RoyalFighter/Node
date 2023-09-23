//create a file called gitignore so that we need not push nodemodule

const express=require("express");

const app=express();
//hurko provides some port so we make env file to define port for now we create varaible
//env files should not be uploaded on github



const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Is running on ${PORT}`);
})

//route
app.get("/",(req,res)=>{
res.send("Home page is sick");
})