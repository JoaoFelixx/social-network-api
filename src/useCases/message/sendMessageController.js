const { createConnection } = require('net');

async function sendMessageController(request, response) {
  try {
    const client = createConnection(4520, '192.168.3.21');

    const { nickname, messageFromClient } = request.body;

    client.on('connect', () => response.status(200).json({ message: 'Welcome to server' }));

    client.on('data', async (message) => response.status(200).json({ message: message.toString() }));

    client.write(nickname, messageFromClient)

  } catch (err) {
    console.log(err)
    return response.sendStatus(409);
  }
}

module.exports = sendMessageController;