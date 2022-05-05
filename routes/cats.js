const express = require("express");
const router = express.Router();
const Cat = require("../models/cat");

router.get("/", async (req, res) => {
  // console.log("Get method called...");
  // res.send(catArray);
  try {
    let cat = await Cat.find().sort({ name: "asc" });
    return res.send(cat);
  } catch (ex) {
    return res.status(500).send("Error: " + ex.message);
  }
});

router.post("/", async (req, res) => {
  if (!req.body.catName) {
    return res.status(400).send("not all mandatory values are sent");
  }

  try{
    let cat = new Cat({
        name: req.body.catName,
        age: req.body.age,
        gender: req.body.gender,
        description: req.body.description,
        features: req.body.features,
        contactnumber: req.body.contactnumber,
        imgUrl: req.body.imgUrl,
      });
      cat = await cat.save();
      res.send(cat);
  }catch(ex){
      return res.status(500).send("Error:" + ex.message);
  }
  
});

router.get("/:catId", async (req, res) => {
  let cat = await Cat.findById(req.params.catId);
  if (!cat) {
    return res.status(404).send("The given ID does not exist on our system");
  }
  res.status(200).send(cat);
});

router.delete("/:catId", async (req, res) => {
  let cat = await Cat.findOneAndDelete({ _id: req.params.catId });
  if (!cat) {
    return res.status(404).send("The given ID does not exist on our system");
  }

  res.send("Deleted");
});

module.exports = router;
