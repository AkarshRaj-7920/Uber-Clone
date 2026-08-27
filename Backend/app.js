// Enviormental Configuration
const dotenv = require('dotenv');
dotenv.config()

// Import Modules
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectToDb = require('./Database/Database')
const userRoutes = require('./Routes/user.Routes')
const captainRoutes = require('./Routes/captain.Routes')

connectToDb()

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res, next) => {
    res.send('<h1>Hello World</h1>')
    next()
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

module.exports = app;