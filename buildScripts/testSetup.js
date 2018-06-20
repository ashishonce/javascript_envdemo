// this file isn't transpiled so must use common JS
// Register babel to transpile before the test runs
require("babel-register");

// disable webpack feauture which MOCHA doesn't understand
require.extensions[".css"]= function(){};
