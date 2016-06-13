var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
      connect.server({
              root: 'www',
              port: 8000,
              host: '0.0.0.0',
              fallback: 'www/index.html',
              debug: true
            });
});
