/*
* grunt-contrib-qunit
* http://gruntjs.com/
*
* Copyright (c) 2013 "Cowboy" Ben Alman, contributors
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	var path       = require('path');
	var instrument = require('./libs/instrument.js');
	var utils      = require('./libs/utils.js');
	var inline     = require('./libs/inline.js');

	grunt.registerMultiTask('testing', '', function() {

		var options = this.options({
			urls: [],
			urlsBase: "",

			libs: [],
			libsBase: "",
			
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

		var warnUnlessForced = function (message) {
			if (options && options.force) {
			  grunt.log.error(message);
			} else {
			  // Exit grunt with a warning
			  grunt.warn(message);
			}
		};

		var done   = this.async();
		var self   = this;
		var dom	   = null;
		var root   = path.resolve(__dirname, './libs/plugins/qunit/qunit-1.14.0.html');
		var tests  = [];
		var source = [];
		var asynch = utils.counter(function(){

			inline(root, source, function(err, content){
				if(err)warnUnlessForced(err);
				utils.write(path.resolve(options.output, 'harness.html'), content, function(err){
					if(err)warnUnlessForced(err);
					done();				
				});
			});
		});

		self.filesSrc.forEach(function(src){
			utils.read(path.resolve(src), '', asynch(function(err, content){
				if(err)warnUnlessForced(err);
				var instrumented = instrument(src, content);
				tests = tests.concat(instrumented.tests);
				source.push(instrumented.code);
			}));
		});
		
	});
};