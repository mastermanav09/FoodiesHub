const express = require('express');
const router = express.Router();
const Food = require('../models/foodModel');

router.get('/getFood' , async(req,res) =>{
    try {
        const data = await Food.find();
        res.send(data);
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.post('/addFood', async(req,res)=>{
    try {
        const data = req.body
        const item = new Food({
            name : data.name,
            image: data.image,
            variants : ['small','medium', 'large'],
            description : data.description,
            category : data.category,
            prices : [data.prices],
        })
        await item.save()
        res.send('success');
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
module.exports = router;