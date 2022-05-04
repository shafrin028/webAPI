const express = require("express");
const Cat = require("../models/cat")
const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
    let cat = await Cat.find();
    return res.send(cat);
})

router.get('/:catId', async (req, res) => {
    let cat = await Cat.findById(req.params.catId);
    if(!cat) {
        return res.status(404).send("Given ID is not exist")
    }

    return res.status(200).send(cat);
})

router.post('/', async (req, res) => {
    /* if(!req.body.name || !req.body.age || !req.body.sex || !req.body.price) {
        return res.status(404).send("Please fill required fields");
    } */

    if (!req.body.name) {
          return res.status(400).send("Not all mandatory values are sent");
    }

    let cat = new Cat({
        name: req.body.name,
        age: req.body.age,
        color: req.body.color,
        sex: req.body.sex,
        breed: req.body.breed,
        origin: req.body.origin,
        imgUrl: req.body.imgUrl,
        locationUrl: req.body.locationUrl,
        price: req.body.price,
        ownerName: req.body.ownerName,
        contact: req.body.contact
    });

    cat = await cat.save();
    res.send(cat);
});

router.put('/:catId', async (req, res) => {
    try{
        let cat = await Cat.findById(req.params.catId);
        if(!cat) {
            res.status(404).send("id is not exist");
        }

        if(!req.body.name) {
            return res.status(400).send("Mendatory fields are required");
        }

        cat.set({name:req.body.name});
        cat = await cat.save();
        res.send(cat);
    }catch(ex) {
        res.status(500).send("Error" + ex.message);
    }
})

router.delete('/:catId', async (req, res) => {
    let cat = await Cat.findByIdAndDelete({ _id: req.params.catId});
    if(!cat) {
        return res.status(404).send("Not exist in the system");
    }

    res.send(cat);
})

module.exports = router;

