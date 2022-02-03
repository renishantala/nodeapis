//Work of routes js is to get the data from the database with the help of userModel
//await is used for when all th edata from database is come the got to next line
const express=require("express");
const userModel = require("./model/userModel");
const router=express.Router();

router.get("/usermodels",async(req,res)=>{
    const data=await userModel.find()
    res.send(data)
})
router.post("/usermodels", async (req, res) => {
    const post = new userModel({
        name:   req.body.name, // take data from postman
        email:  req.body.email,
        age:    req.body.age,
        gender: req.body.gender,
        mobileno:req.body.mobileno
    })
    await post.save()
    res.send(post)
})




router.patch('/usermodels/:id',async (req,res)=>{
    console.log(req.params.id)
    try
    {
        const imovie = await userModel.findOne({_id:req.params.id})
        console.log(imovie)
        if (req.body.name)
         {
            imovie.name = req.body.name
         }
        if (req.body.gender) 
        {
            imovie.gender = req.body.gender
        }
        await imovie.save()
        res.send(imovie)
    }
    catch
    {
        res.send({ error: "Post doesn't exist!" })
    }
})


router.delete("/usermodels/:name", async (req, res) => {
    try {
        await userModel.deleteOne({name: req.params.name })
        
        res.send("Delete Successfully")

    } 
    catch {

        res.status(404)

        res.send({ error: "Post doesn't exist!" })

    }

})
module.exports=router

