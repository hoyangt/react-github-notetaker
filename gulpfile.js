'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webpack = require("gulp-webpack");
var notify = require('gulp-notify');

var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('./app/App.js')
    .pipe(webpack(webpackConfig), null,
      function(err, stats) {
        notify.onError("Error: <%= err %>");
      })
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('watchIndex', function() {
  gulp.src('public/index.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen({ start: true });
  gulp.watch(['app/*.js', 'app/**/*.js'], ['webpack']);
  gulp.watch('public/index.html', ['watchIndex']);
});

gulp.task('default', ['webpack','watch']);