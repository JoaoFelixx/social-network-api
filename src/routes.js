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

router.delete('/users/:_id', deleteUserController);

//router.use(middlewareJwt);

router.get('/users/:_id', getUserByIdController);

router.post('/messages', sendMessageController);

router.put('/users/:_id', updateUserController);


module.exports = router;