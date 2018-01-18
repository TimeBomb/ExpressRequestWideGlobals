const express = require('express');

const run = (function() {
    let locals; // forgive me
    let started = false;

    return function() {
        let api = {
            start: function(route) {
                const app = express();
                app.get('/', (req, res) => {
                    locals = { currentTime: (new Date()).getTime(), source: 'inside a request!' };
                    route(); 
                });
                app.listen(3000);
                console.log('listening on :3000');
                started = true;
            },
            get: function() {
                return locals;
            }
        };
        
        if (started) {
            delete api.start; // Rudimentary, quick implementation, forgive me
        }

        return api;
    }
})();

module.exports = run;