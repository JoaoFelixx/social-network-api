const router = require('express').Router();
const { middlewareJwt } = require('./middlewares');
const { createConnection } = require('net');

router.post('/users', )


const client = createConnection(4520, '192.168.3.21')

client.on('connect', () => console.log('Connected the connection'))

module.exports = router;