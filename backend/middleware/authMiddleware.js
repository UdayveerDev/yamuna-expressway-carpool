'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    // Get token from request header
    const token = req.header('Authorization') && req.header('Authorization').startsWith('Bearer ') ? req.header('Authorization').split(' ')[1] : null;

    // Check if no token
    if (!token) {
        return res.status(401).json({ message: 'No authorization token provided.' });
    }

    // Verify token
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token is not valid.' });
        }
        req.user = decoded;
        next();
    });
};
