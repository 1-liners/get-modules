#!/usr/bin/env node

var meow = require('meow');
var getModules = require('./');

var cli = meow({
    help: [
        'Usage',
        '  get-modules <dir>'
    ].join('\n')
});

getModules(cli.input[0], function(err, modules) {
	if (err) console.error(err);
	else console.log(modules);
});
