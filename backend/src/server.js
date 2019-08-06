const express = require('express')
const mongoose = require('mongoose')
const mongoKey = require('./keys')
const routes = require('./routes')

const server = express()

mongoose.connect(mongoKey, {
    useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(3333)