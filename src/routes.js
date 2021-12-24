const router = require('express').Router();
const { middlewareJwt } = require('./middlewares');
const {
	createUserController,
	sendMessageController,
} = require('./useCases');

router.post('/users', createUserController);

router.use(middlewareJwt);

router.post('/message', sendMessageController);

module.exports = router;