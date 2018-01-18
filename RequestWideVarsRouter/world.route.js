const service = require('./world.service.js');

module.exports = (function() {
    let locals;

    return function(req, res) {
        if (!req) {
            return locals;
        }
        
        locals = { currentTime: (new Date()).getTime(), source: 'inside a request!' };
        service(); 
    };
}());