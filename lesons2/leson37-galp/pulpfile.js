var gulp = require('gulp'),
    scss = require('gulp-scss')

gulp.task("scss", function () {
    gulp
        .src("source/styles/**/*.scss")
        .pipe(scss({"bundleExec": true}))
        .pipe(gulp.dest("dest/styles"));
});

gulp.task("default", ['scss']);

