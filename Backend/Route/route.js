const express = require('express')
const control = require('../Controller/controller.js')
const jwt = require('jsonwebtoken')
const route = express.Router()
  
route.get('/', control.main)
route.post('/addUser', control.addUser)
route.post('/login',control.login)
route.get('/main',verifyToken , control.main)
route.post('/check',control.check)
route.post('/authforbid', verifyToken, control.authforbid)
route.post('/communication', verifyToken, control.communication)
route.post('/radio', verifyToken, control.radio)
route.post('/antenna', verifyToken, control.antenna)
route.post('/network', verifyToken, control.network)


function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
}

module.exports = route