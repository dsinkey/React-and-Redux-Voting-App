import Server from 'socket.io';

export default function startserver(store){
    const io = new Server().attach(8090);
}