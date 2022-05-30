require('dotenv').config()
const PORT = process.env.PORT || 3001
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(cors())

// mongo connection
require('./config/database')

app.get('/',(req,res)=>{
    res.send('testing')
})

app.listen(PORT, ()=>console.log(`Running on Port ${PORT}`))