module.exports = function () {
  const locals = require('./world.route')();
  console.log('locals:', locals); // This actually works! The current time changes appropriately with every request.
};