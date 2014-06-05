var assert = require('chai').assert;

require('grunt-testing/libs/instrument.js');

var grunt = require('grunt/lib/grunt.js');
console.log(grunt);

describe('Suite one', function(){
  it('run',function(done){
  	assert.isTrue(true);
  	process.chdir(__dirname);
  	grunt.tasks("default",{},done);
  });
});