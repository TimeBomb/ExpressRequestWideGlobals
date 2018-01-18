var express = require('express');
const app = express();
app.use('/hello', require('./App.express.js')());
app.listen(3000);
console.log('listening on :3000');