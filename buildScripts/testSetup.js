// This file isn't transpiled, so must use CommonJS end ES5

// Register babel to transpile before our tests run.
require('babel-register')();

require.extensions['.css'] = function () { };
