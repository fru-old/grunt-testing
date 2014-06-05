module.exports = function(grunt) {

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true,
          mocha: require('mocha')
        },
        src: ['test/**/*.js']    //'!test/node_modules/**'
      }
    },
    copy: {
      test: {
        src: ['libs/*', 'tasks/*', 'node_modules/*'],
        dest: 'test/node_modules/grunt-testing/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['copy', 'mochaTest']);

};