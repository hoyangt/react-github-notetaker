var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var path = require('path');

var webpackConfig = require('./webpack.config.js');

gulp.task('html', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('webpack', function() {
  return gulp.src('./app/App.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['app/**/*.js'], ['webpack']);
  gulp.watch('./app/**/*.html', ['html']);
});

gulp.task('server', function(done) {
  connect.server({
    root: path.join(__dirname, 'public'),
    port: 8080,
    livereload: true
  });
});

gulp.task('default', ['server', 'html', 'webpack', 'watch']);
