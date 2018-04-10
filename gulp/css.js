var gulp = require ('gulp')
var stylus = require ('gulp-stylus')

gulp.task('css',function() {
    gulp.src('src/css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('src/assets'))
})
gulp.task ('watchCss', function () {
    gulp.watch('src/css/**/*.styl', ['css'])
})