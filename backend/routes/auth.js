'use strict';

const express = require('express');
const router = express.Router();

// Mock user data - In real applications, this should be replaced with a database.
const users = [];

// Signup route
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).json({ message: 'User already exists' });
    }
    users.push({ username, password });  // Store user (hashed passwords should be used in real applications)
    return res.status(201).json({ message: 'User created successfully' });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ message: 'Login successful' });
});

module.exports = router;