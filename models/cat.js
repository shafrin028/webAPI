const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    description:String,
    features:String,
    contactnumber:String,
    imgUrl:String


})

const Cat = mongoose.model("Cat",catSchema);
module.exports= Cat;