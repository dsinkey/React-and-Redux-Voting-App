import Server from 'socket.io';

export default function startserver(){
    const io = new Server().attach(8090);
}