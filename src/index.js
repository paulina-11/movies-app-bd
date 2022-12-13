import {server} from './server'

server.start({ port: 3000 }, ({ port }) => {
  console.log("server running 💚");
});