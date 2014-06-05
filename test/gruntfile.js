module.exports = function(grunt) {

  grunt.initConfig({
    testing:{
      example:{

      }
    }
  });

  grunt.loadNpmTasks('grunt-testing');

  grunt.registerTask('default', ['testing']);

};