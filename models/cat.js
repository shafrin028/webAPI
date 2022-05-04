const { Double } = require('bson');
const { Module } = require('module');
const mongoose = require('mongoose');
const internal = require('stream');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    sex: String,
    breed: String,
    origin: String,
    imgUrl: String,
    locationUrl: String,
    price: Number,
    ownerName: String,
    contact: Number
})

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;