var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js',function () {
    gulp.src('src/ng/**/*.js')
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
   .pipe(uglify())
    .pipe(gulp.dest('src/assets'))
})