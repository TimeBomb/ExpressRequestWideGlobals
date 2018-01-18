const Router = require('express').Router;
const router = new Router();
const worldRoute = require('./world.route');

router.get('/world', worldRoute);

module.exports = router;