module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('grunt-browserify')(grunt);
  require('reactify')
  // Project configuration.
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: ["reactify"]
        },
        files: {
          'dist/sundew.js': [
            'src/index.js',
            'src/header.js',
            'src/footer.js',
            'src/avatar.js',
            'src/share_button.js',
            'src/login_button.js',
            'src/post_header.js',
            'src/post_engagement.js',
            'src/link_post.js',
            'src/photo_post.js',
            'src/video_post.js',
            'src/facebook_post.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['browserify']);
};