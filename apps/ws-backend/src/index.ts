import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", (socket) => {
    
    prismaClient.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    socket.send('hi there');
})

