const { createConnection } = require('net');

const client = createConnection(4520, '192.168.3.21');

client.on('connect', () => console.log('Connected the connection'));

client.on('data', (message) => console.log('message: ',message.toString()));