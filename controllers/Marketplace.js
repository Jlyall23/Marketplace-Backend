const express = require('express');
const router = express.Router();
const MarketplaceItem = require('../models/Marketplace')

//Index
router.get('/', (req, res)=>{
    MarketplaceItem.find({}, (err, foundMarketplaceItems)=>{
    res.json(foundMarketplaceItems)
})
});
//New (Done on React)

//Delete
router.delete('/:id', (req,res)=>{
    MarketplaceItem.findByIdAndRemove(req.params.id, (err, deletedMarketplaceItem)=>{
        if(err){
            console.log(err)
        }else{res.send("item deleted")}
})
})
//Update
router.put('/:id', (req,res)=>{
    MarketplaceItem.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedMarketplaceItem)=>{
        if(err){
            console.log(err)
        }else{res.json(updatedMarketplaceItem)}
    })

})
//Create
router.post('/', async(req, res)=>{
    console.log(req.body)
    await MarketplaceItem.create(req.body, (err,createdMarketplaceItem)=>{
    res.json(createdMarketplaceItem)
})
})
//Edit (Done on React)

//Show
router.get('/:id', (req,res)=>{
    MarketplaceItem.findById(req.params.id, (err,foundMarketplaceItem)=>{
        if(err){
            console.log(err)
        }else{res.json(foundMarketplaceItem)}
    })
})

module.exports = router