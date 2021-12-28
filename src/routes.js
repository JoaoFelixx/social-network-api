const router = require('express').Router();
const { middlewareJwt } = require('./middlewares');
const {
	authUserController,
	updateUserController,
	createUserController,
	deleteUserController,
	getUserByIdController,
} = require('./useCases');

router.post('/users', createUserController);
router.post('/auth', authUserController)

router.use(middlewareJwt);

router.get('/users/:_id', getUserByIdController);

router.put('/users/:_id', updateUserController);

router.delete('/users/:_id', deleteUserController);

module.exports = router;