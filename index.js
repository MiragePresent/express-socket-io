const { APP_PORT } = require('./config')
const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const { authMiddleware } = require('./middlewares')
const { subscribe } = require('./redis')
const { createParser } = require('./event/parser')

const parser = createParser()

io.use(authMiddleware)

io.on('connection', socket => {
  console.log('new user connected', socket.user)

  const subscriber = subscribe(socket.user)

  subscriber.on('message', (channel, message) => {
    console.log('user specific message', message)

    const eventMessage = parser.createMessage(message)
    io.emit('event', eventMessage.toJson())
  })
})

//
// io.on('chat message', message => {
//   console.log(`new message received: ${message}`)
//   io.emit('chat message', message)
// })

// listen();

app.use('/',express.static('www'))

http.listen(APP_PORT, () => {
  console.log(`listening on *:${APP_PORT}`)
})
