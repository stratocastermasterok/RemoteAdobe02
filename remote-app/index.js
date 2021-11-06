const express = require('express')
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3333

http.listen(PORT, ()=>{
    console.log("success at listening");

})

app.use( express.static( 'public' ))


io.on('connection', (socket)=>{
    console.log(`Socket IDDD: ${socket.id}`)



    //From WEB to Premiere

    socket.on('ButtonPress', (data)=>{
        console.log("got in");
        io.emit('ButtonPress', data);
        console.log("sent data");

    })






})