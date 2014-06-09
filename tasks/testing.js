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
		/*
		inline(root, function(err, ){
			
			dom = $;
			self.filesSrc.forEach(function(src){
				utils.read(path.resolve(src), '', asynch(function(err, content){
					var instrumented = instrument(src, content);
					tests = tests.concat(instrumented.tests);
					content = '<script>'+instrumented.code+'</script>';
					dom('body').append(content);
				}));
			});
		});

		var result = dom.html();

			//TODO remove workarond - remove package too
			result = new (require('html-entities').XmlEntities)().decode(result);

			utils.write(path.resolve(options.output, 'harness.html'), result, function(err){
				if(err)warnUnlessForced(err);
				done();				
			});

			/*
			var dest = temp('grunt-testing-temp-files', options.tempId);
			console.log(path.resolve(dest, src));
			instrument(path.resolve(src),path.resolve(dest, src), function(){
				counter++;
				if(counter >= length){
					done();
				}
			});*/
	});
};