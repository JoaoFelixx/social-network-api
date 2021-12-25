const router = require('express').Router();
const { middlewareJwt } = require('./middlewares');
const {
	updateUserController,
	createUserController,
	deleteUserController,
	sendMessageController,
	getUserByIdController,
	getUserByNicknameController,
} = require('./useCases');

router.post('/users', createUserController);

router.use(middlewareJwt);

router.get('/users/:_id', getUserByIdController);
router.get('/users/:nickname', getUserByNicknameController);

router.post('/messages', sendMessageController);

router.put('/users', updateUserController);

router.delete('/users', deleteUserController);

module.exports = router;