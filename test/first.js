var assert = require('chai').assert;
var helper = require('./helper.js');
//require('grunt-testing/libs/instrument.js');

describe('Suite one', function(){
  it('run',function(done){
  	assert.isTrue(true);
	helper.grunt('examples/qunit-advanced-example', 'default', function(){
		done();
	});
  });
});