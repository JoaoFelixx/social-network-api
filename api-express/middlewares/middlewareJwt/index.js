const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { SECRET_KEY_JWT } = require('../../../secret');

exports.middlewareJwt = async (request, response, next) => {
	const { authorization  } = request.headers;

	if (!authorization) return response.sendStatus(401);

	const token = authorization.replace('Bearer', '').trim();

	try {
		await promisify(jwt.verify)(token, SECRET_KEY_JWT);

		return next();
	} catch (err) {
	 	return response.sendStatus(401);
	} 
}