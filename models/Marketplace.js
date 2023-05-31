const mongoose = require('mongoose')

const MarketplaceItemSchema = new mongoose.Schema({
    Title: {type: String},
    Description: {type: String},
    Photo: {type: String},
    Price: {type: String}
})

const MarketplaceItem = mongoose.model('MarketplaceItem', MarketplaceItemSchema)

module.exports = MarketplaceItem