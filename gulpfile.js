var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var http = require('http');
var st = require('st');

var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('./app/App.js')
    .pipe($.webpack(webpackConfig), null,
      function(err, stats) {
        $.notify.onError("Error: <%= err %>");
      })
    .pipe(gulp.dest('.'))
    .pipe($.livereload());
});

gulp.task('watch', ['server'], function() {
  $.livereload.listen({ start: true });
  gulp.watch(['app/*.js', 'app/**/*.js'], ['webpack']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, cache: false })
  ).listen(8000, done);
});

gulp.task('default', ['watch']);