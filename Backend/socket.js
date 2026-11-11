const socketIo = require('socket.io');
const userModel = require('./Models/user.model');
const captainModel = require('./Models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const { userid, userType } = data;

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userid, {
                    socketId: socket.id
                });
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(userid, {
                    socketId: socket.id
                })
            }
        })

        socket.on('disconnect', () => {
            console.log(`Client dissconnected: ${socket.id}`);
        });
    })
}

function sendMessageToSocketId(socketId, message) {
    if (io) {
        io.to(socketId).emit('message', message);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId }
