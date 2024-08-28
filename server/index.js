import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {Server} from 'socket.io';
import http from 'http';

import path from 'path';


import { fileURLToPath } from 'url';

import roomHandler from './socket/roomHandler.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(cors());

app.use('/auth', authRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });



const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

//socket connection
io.on("connection", (socket) =>{
    console.log("User connected");

    roomHandler(socket);

    socket.on('disconnect', ()=>{
        console.log("user disconnected");
    })

})
const PORT = process.env.PORT || 6001;
mongoose.connect('mongodb://localhost:27017/meet-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{


    server.listen(PORT, ()=>{
        console.log(`Running @ http://localhost:${PORT}`);

    });


}).catch((err)=>{
    console.log("Error: ", err);
})

