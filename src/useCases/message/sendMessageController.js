async function sendMessageController(request, response) {
  response.json({ message: 'Welcome' });
}

module.exports = sendMessageController;