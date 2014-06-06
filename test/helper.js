var path  = require('path');
var grunt = require('grunt/lib/grunt.js');

module.exports.grunt = function(relative, tasks, done){
	var target = path.join(__dirname, relative);
	var cwd = process.cwd();
  	process.chdir(target);
  	grunt.tasks(tasks,{},function(){
  		process.chdir(cwd);
  		done();
  	});
	
}