import * as dgram from 'dgram';

const UDP_IP = '127.0.0.1';
const UDP_PORT = 12345;

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

server.on('message', (message, rinfo) => {
  console.log(`Received message: ${message} from ${rinfo.address}:${rinfo.port}`);
});

server.bind(UDP_PORT);
