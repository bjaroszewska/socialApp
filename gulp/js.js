var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('js',function () {
    gulp.src(['src/ng/module.js/','src/ng/**/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
           
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/assets'))
})
gulp.task('watchJS', ['js'], function() {
    gulp.watch('src/ng/**/*.js', ['js'])
} )
