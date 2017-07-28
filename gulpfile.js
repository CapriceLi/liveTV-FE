var gulp = require('gulp'),
		gutil=require('gulp-util'),
		http = require('http'),
		ecstatic = require('ecstatic');
$=require('gulp-load-plugins')();

var now=new Date();

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
    http.createServer(ecstatic({
        root: 'src',
        cache: 0
    })).listen(8080);
    gutil.log(gutil.colors.blue('HTTP server listening on port 8080'));
});
