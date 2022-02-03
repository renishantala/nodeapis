/*Defining a model also requires us to define a schema. Schema is basically tells the model how our document should look like. */

const mongoose=require("mongoose")
const schema=mongoose.Schema({
 name:String,
 email:String,
 age:Number,
 gender:String,
 mobileno:Number
})
    //userModel is a mongoose.Collection name
module.exports=mongoose.model("userModel",schema);
