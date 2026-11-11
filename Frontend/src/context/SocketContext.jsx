import { useEffect } from 'react';
import { createContext } from 'react'
import {io} from 'socket.io-client'

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`);  // Replace with your server URL

const SocketProvider = ({ children }) => {
    useEffect(() => {
        // Basic Connection logic
        socket.on('connect', () => {
            console.log('Connected to server');
        })

        socket.on('disconnected', () => {
            console.log('Disconnected from server');
        })
    }, []);

    const value = {
        socket,
    }

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider