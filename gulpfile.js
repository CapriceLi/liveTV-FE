var gulp = require('gulp'),
    gutil = require('gulp-util'),
    ecstatic = require('ecstatic'),
    webserver=require('gulp-webserver'),
$ = require('gulp-load-plugins')();

var now = new Date();

gulp.task('three', function() {
    console.log("Third job done.");
    console.log($);
});

gulp.task('default', ['one', 'two', 'three'], function() {
    console.log('Done three jobs.');

});

gulp.task('one', function() {
    console.log("First job done.");
    console.log(now.getMonth() + 1 + '' + now.getDate());
});

gulp.task('two', function() {
    console.log("Second job done.");
    gutil.log(gutil.colors.bgMagenta('Hello world.'));
});

gulp.task('server', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});