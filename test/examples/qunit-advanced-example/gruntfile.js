module.exports = function(grunt) {


  grunt.initConfig({
    testing:{
      'qunit-advanced-example':{
        options: { type: 'qunit' },
        src: 'testfiles/**/*.js'
      }
    }
  });


  grunt.file.expand('../../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
  grunt.registerTask('default', ['testing']);
};