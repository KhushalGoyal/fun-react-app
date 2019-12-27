import io from "socket.io-client";
import userListContainer from '../containers/UserList';
const socketEndPoint = 'http://localhost:8000';
const socket = io.connect(socketEndPoint);

export const http = {
    addUsertoSocket: async function (data) {
        socket.emit('customEvent', data);
    },
    newSocket: async function () {
        socket.on('news', function (data) { 
            userListContainer.getUserList(data)
         })
    }
}