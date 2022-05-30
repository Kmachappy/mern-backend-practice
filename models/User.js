const mongoose = require('mongoose')

const peopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
})

module.exports = mongoose.model('this is a test', peopleSchema)