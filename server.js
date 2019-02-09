const express = require('express')
const socket = require('socket.io')
const mediaPlayer = require('./media-player')

const app = express()
const port = process.env.PORT || 3000

// Basic Middleware
app.use(express.static(__dirname + '/public'))

// Basic Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

// Hosted frameworks and libraries
app.get('/vue.js', (req, res) => res.sendFile(__dirname + '/node_modules/vue/dist/vue.js'))
app.get('/socket.io.js', (req, res) => res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js'))

// Start server
let server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

// Socket setup
let io = socket(server)
io.on('connection', () => {
    console.log(`Made socket connection with a client`)
})