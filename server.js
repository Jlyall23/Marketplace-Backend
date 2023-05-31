const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')
const MarketplaceItem = require('./models/Marketplace')
const MarketplaceData = require('./utilities/data')
//const MarketplaceController = require('./controllers/Marketplace')

//Environmental Variables
const app = express()
const mongoURI = process.env.DATABASE_URL
const PORT = process.env.PORT || 3001

//Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser:true, useUnifiedTopology: true },
    mongoose.connection.once('open', () => {
        console.log('connected to mongo');
      }));

    //Error / Disconnect
db.on('error',err => console.log(err.message + ' is Mongodb not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(cors({ origin: '*' })) // used to whitelist requests

// Routes
app.use('/marketplace', require('./controllers/Marketplace')) // telling server.js to get the routes from controllers/Marketplace.js

// Seeding the db
app.get('/seed', async (req, res) => {
    await MarketplaceItem.deleteMany({});
    await MarketplaceItem.insertMany(MarketplaceData);
    res.send('done!');
  });

app.listen(PORT, () => {
    console.log('This message means nothing', PORT)
      })