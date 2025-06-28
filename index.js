const express=require("express");
const { createTODO } = require("./types");
const app=express();
app.use(express.json());




app.post("/todo",function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTODO.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return;
    }
})


app.get("/todo",function(req,res){
    
})


app.put("/compleated",function(req,res){
       
const updatePayload=req.body;
    const parsedPayload=createTODO.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return;
    }

})