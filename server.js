require('dotenv').config()
// destructuring port out of process.env object 
const { PORT = 3000 } = process.env
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
//initialize express 
const app = express()

app.use(morgan('dev'))
app.use(cors())

// database connection
require('./config/database')
// model import
require('./models/User')

console.log(process.env)

app.get('/',(req,res)=>{
    res.send('testing')
})

app.listen(PORT, ()=>console.log(`Running on Port ${PORT}`))