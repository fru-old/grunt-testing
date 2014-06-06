module.exports = function(grunt) {

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true,
          mocha: require('mocha')
        },
        src: ['test/**/*.js', '!test/examples/**', '!test/node_modules/**'] 
      }
    },
    copy: {
      test: {
        src: ['tasks/**'], //, 'node_modules/**'
        dest: 'test/node_modules/grunt-testing/'
      }
    },
    clean: {
      options: {force: true},
      modules: ["test/node_modules/*"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['copy', 'mochaTest', 'clean']);

};