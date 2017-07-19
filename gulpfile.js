var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["./*.html", "./css/*.css"]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);