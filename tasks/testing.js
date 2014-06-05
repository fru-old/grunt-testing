/*
* grunt-contrib-qunit
* http://gruntjs.com/
*
* Copyright (c) 2013 "Cowboy" Ben Alman, contributors
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	var path = require('path');
	
	// Get an asset file, local to the root of the project.
	var asset = path.join.bind(null, __dirname, '..');

	// If options.force then log an error, otherwise exit with a warning
	var warnUnlessForced = function (message) {
		if (options && options.force) {
		  grunt.log.error(message);
		} else {
		  grunt.warn(message);
		}
	};

	console.log("test");	
	grunt.registerMultiTask('testing', '', function() {
		console.log("test123");	
	});
	
	
};