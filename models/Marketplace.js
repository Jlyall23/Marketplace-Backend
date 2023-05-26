const mongoose = require('mongoose')

const MarketplaceItemSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
})

const MarketplaceItem = mongoose.model('MarketplaceItem', MarketplaceItemSchema)

module.exports = MarketplaceItem