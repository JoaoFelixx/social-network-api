const router = require('express').Router();
const { middlewareJwt } = require('./middlewares');
const {
	updateUserController,
	createUserController,
	deleteUserController,
	sendMessageController,
	getUserByIdController,
} = require('./useCases');

router.post('/users', createUserController);

router.use(middlewareJwt);

router.get('/users/:_id', getUserByIdController);

router.post('/messages', sendMessageController);

router.put('/users', updateUserController);

router.delete('/users', deleteUserController);

module.exports = router;