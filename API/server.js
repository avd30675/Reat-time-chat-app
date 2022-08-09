require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())



// Routes
app.use('/api', require('./routes/userRouter'))


// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})





const PORT = process.env.PORT || 4000

const WebSocket = require('ws');
const SocketServer = require('ws').Server;

const server=app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})


const wss = new SocketServer({ server });

wss.on('connection', (ws) => {

    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
    
    ws.on('message', function incoming(message) {

        console.log('[Server] Received message: %s', message);
        
        let obj=JSON.parse(message);
        console.log(obj);

        // Broadcast to everyone else.
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON. stringify(obj));
            }
        });

    });
});