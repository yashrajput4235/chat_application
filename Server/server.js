import express from "express";
import cors from "cors";
import {Server} from "socket.io";
import http from "http";

const app = express();

const server=http.createServer(app);
// set server for websocket
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","PUT"]
    }
})

// on websocket
io.on("connection",(socket)=>{
    console.log("user connected: ",socket.id);
    // creating the route using socket
    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log("This is join room route",data);
    })
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    })
    socket.on("disconnect",()=>{
        console.log("user disconnected: ",socket.id);
    })
})
app.use(cors());

server.listen(1000,()=>{
    console.log("server is running on port 1000");
});