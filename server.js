const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection
// const cors = require('cors')
const MarketplaceItem = require('./models/Marketplace')
const MarketPlaceData = require('./utilities/data')
const MarketplaceController = require('./controllers/Marketplace')

//Environmental Variables
const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

//Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser:true },
    ()=>console.log('MongoDB connection established'))

    //Error / Disconnect
db.on('error',err => console.log(ee.message + ' is Mongodb'))



    app.listen(PORT, () => {
        console.log('This message means nothing', PORT)
      })