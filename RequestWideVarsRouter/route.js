module.exports = function () {
  const locals = require('./App.express')();
  console.log('locals:', locals); // This actually works! The current time changes appropriately with every request.
};