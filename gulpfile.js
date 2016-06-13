var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
      connect.server({
              root: 'html',
              port: 8000,
              host: '0.0.0.0',
              fallback: 'html/index.html',
              livereload: true
            });
});
