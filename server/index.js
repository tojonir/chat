const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http,{
    cors:{
        origin: '*'
    }
})

io.on("connection",(socket)=>{
    console.log("a user connected " + socket.id)
    socket.on("message",(data)=>{
        console.log(data)
    })
})

http.listen(5000,()=>{
    console.log("server listening on port 5000")
})


