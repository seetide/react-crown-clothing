// Main starting point of the ation
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');  

// DB Setup
mongoose.set('useCreateIndex', true);  // (node:1320) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.

// create the db auth.
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));   // regist as middleware and for debugging
app.use(bodyParser.json({ type: '*/*'}));  // middleware, parse request
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);