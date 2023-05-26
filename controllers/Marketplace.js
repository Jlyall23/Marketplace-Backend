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
    Marketplace.findByIdAndRemove(req.params.id,(err,deletedMarketplaceItem))
    res.json(deletedMarketplaceItem)
})
//Update
router.put('/:id', (req,res)=>{
    MarketplaceItem.findByIdAndUpdate(req.params.is, req.body, {new:true}, (err,updatedMarketplaceItem))
})
//Create
router.post('/', (req,res)=>{
    MarketplaceItem.create(req.body, (err,createdMarketplaceItem)=>{
        res.json(createdMarketplaceItem)
    })
})
//Edit (Done on React)

//Show
router.get('/:id', (req,res)=>{
    MarketplaceItem.findById(req.params.id, (err,foundMarketplaceItem))
})

module.exports = router