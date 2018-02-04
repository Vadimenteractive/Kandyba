var gulp = require('gulp'),
    scss = require('gulp-scss');
gulp.task('scss', function () {
    var postcss      = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        uglifycss = require('gulp-uglifycss'),
        concatCss = require('gulp-concat-css');
    return gulp
        .src('source/styles/**/*.scss')
        .pipe(scss())
        .pipe(postcss([ autoprefixer() ]))

        .pipe(concatCss("main.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest('dest'));
});


gulp.task('watch', function () {
    gulp.watch('source/styles/*.scss', ['scss']);
});
gulp.task('default', ['scss']);
