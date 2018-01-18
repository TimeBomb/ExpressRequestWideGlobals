var express = require('express');
const app = express();
const router = require('./App.express.js');
app.use('/hello', router);
app.listen(3000);
console.log('listening on :3000');