const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const secretKey = require('../../secret');

exports.middlewareJwt = async (request, response, next) => {
	const { authorization  } = request.headers;

	if (!authorization) return response.sendStatus(401);

	const token = authorization.replace('Bearer', '').trim();

	try {
		await promisify(jwt.verify)(token, secretKey);

		return next();
	} catch (err) {
	 	return response.sendStatus(401);
	} 
}