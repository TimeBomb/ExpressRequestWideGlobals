const Router = require('express').Router;
const router = new Router();
const route = require('./route');

module.exports = (function() {
    let locals;

    return function() {
        if (locals) {
            return locals;
        }

        router.get('/world', function(req, res) {
            locals = { currentTime: (new Date()).getTime(), source: 'inside a request!' };
            route(); 
        });

        return router;
    };
}());