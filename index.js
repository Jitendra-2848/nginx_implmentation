import express from "express";

const app = express();
let instanceId = process.env.INSTANCE_ID; 
app.use("/",(req,res)=>{
    res.send(`Hello world from the instance : ${instanceId}`)
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})
