var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var path = require('path');

var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('./app/App.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['app/*.js', 'app/**/*.js'], ['webpack']);
});

gulp.task('server', function(done) {
  connect.server({
    root: path.join(__dirname, 'public'),
    port: 8080,
    livereload: true
  });
});

gulp.task('default', ['server', 'watch']);