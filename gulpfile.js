var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webpack = require("gulp-webpack");

var webpackConfig = require('./webpack.config');

gulp.task("webpack", function() {
    return gulp.src('./app/App.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['app/*.js', 'app/**/*.js'], ['webpack']);
});

gulp.task('default', [
    'webpack',
    'watch'
]);