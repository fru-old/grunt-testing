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
	var instrument = require('./libs/instrument.js');
	var temp = require('./libs/temp.js');
	
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

	grunt.registerMultiTask('testing', '', function() {

		var options = this.options({
			urls: [],
			urlsBase: "",
			
			serveFolders: [],
			servePort: 0,
			serveHttps: false,
			
			force: false,
			timeout: 10000,
			tempId: "",

			expose: true,
			examples: true,
			converage: true,

			output: "output",
			reporters: ['default']
		});

		var done = this.async();
		var counter = 0;
		var length = this.filesSrc.length

		this.filesSrc.forEach(function(src){
			var dest = temp('grunt-testing-temp-files', options.tempId);
			instrument(path.resolve(src),path.resolve(dest, src), function(){
				counter++;
				if(counter >= length){
					done();
				}
			});
		})
	});
	
	
};