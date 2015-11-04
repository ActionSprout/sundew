module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('grunt-browserify')(grunt);
  // Project configuration.
  grunt.initConfig({
    babel: {
      dist: {
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["**/*.js"],
          "dest": "dist/",
          "ext": ".js"
        }]
      },
      options: {
        presets: ['es2015', 'react']
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/sundew.js': ['dist/*.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['babel', 'browserify']);
};